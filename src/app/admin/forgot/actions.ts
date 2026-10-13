"use server";

import { after } from "next/server";
import { prisma } from "@/lib/prisma";
import { AdminTokenPurpose } from "@/generated/prisma/client";
import { isAllowlistedEmail, normalizeEmail } from "@/lib/admin/allowlist";
import { appUrl, passwordResetEmail, sendEmail } from "@/lib/admin/email";
import { isRateLimited, recordFailure } from "@/lib/admin/rateLimit";
import { getRequestInfo } from "@/lib/admin/session";
import { issueToken } from "@/lib/admin/tokens";

export type FormState = { sent?: boolean; error?: string } | undefined;

const PER_EMAIL = { max: 3, windowMs: 60 * 60 * 1000 };
const PER_IP = { max: 10, windowMs: 60 * 60 * 1000 };

export async function requestPasswordReset(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  if (!email) return { error: "Please enter your email." };

  const { ipAddress } = await getRequestInfo();
  const emailKey = `reset:email:${email}`;
  const ipKey = `reset:ip:${ipAddress}`;
  if ((await isRateLimited(ipKey, PER_IP)) || (await isRateLimited(emailKey, PER_EMAIL))) {
    return { error: "Too many requests. Please try again in an hour." };
  }
  // Every request counts, whether or not the email belongs to an admin.
  await recordFailure(ipKey, PER_IP);
  await recordFailure(emailKey, PER_EMAIL);

  // Look-up, token and email happen after the response, so the reply is identical
  // and equally fast for admin and non-admin addresses.
  after(async () => {
    if (!isAllowlistedEmail(email)) return;
    const admin = await prisma.adminUser.findUnique({ where: { email } });
    if (!admin?.totpEnabled) return; // not set up yet → needs a setup link from a cofounder
    const raw = await issueToken(admin.id, AdminTokenPurpose.RESET);
    await sendEmail({ to: admin.email, ...passwordResetEmail(admin.name, `${appUrl()}/admin/setup/${raw}`) });
  });

  return { sent: true };
}
