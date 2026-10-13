"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AdminSessionStage, AdminTokenPurpose } from "@/generated/prisma/client";
import { decryptSecret, hashPassword, MIN_PASSWORD_LENGTH } from "@/lib/admin/crypto";
import { clearFailures, isRateLimited, recordFailure } from "@/lib/admin/rateLimit";
import { createSession } from "@/lib/admin/session";
import { findValidToken } from "@/lib/admin/tokens";
import { verifyTotp } from "@/lib/admin/totp";

export type FormState = { error?: string } | undefined;

const LINK_ATTEMPTS = { max: 10, windowMs: 15 * 60 * 1000 };

/** Completes a SETUP link (new password + new authenticator) or a RESET link (new password, confirmed with the current authenticator). */
export async function completeSetup(_prev: FormState, formData: FormData): Promise<FormState> {
  const token = await findValidToken(String(formData.get("token") ?? ""));
  if (!token) return { error: "This link is invalid or has expired. Ask a cofounder for a new one." };

  const limitKey = `link:${token.id}`;
  if (await isRateLimited(limitKey, LINK_ATTEMPTS)) {
    return { error: "Too many attempts. Please wait 15 minutes and try again." };
  }

  const password = String(formData.get("password") ?? "");
  const confirm = String(formData.get("confirm") ?? "");
  if (password.length < MIN_PASSWORD_LENGTH) {
    return { error: `Your password needs at least ${MIN_PASSWORD_LENGTH} characters.` };
  }
  if (password.length > 200) return { error: "That password is too long." };
  if (password !== confirm) return { error: "The two passwords don't match." };

  const admin = token.admin;
  const isSetup = token.purpose === AdminTokenPurpose.SETUP;
  const secretToCheck = isSetup ? token.pendingTotpSecret : admin.totpEnabled ? admin.totpSecret : null;
  if (!secretToCheck) {
    return { error: "This link can't be used for this account. Ask a cofounder for a new setup link." };
  }

  const code = String(formData.get("code") ?? "");
  const step = verifyTotp(decryptSecret(secretToCheck), code, isSetup ? null : admin.lastTotpStep);
  if (step === null) {
    await recordFailure(limitKey, LINK_ATTEMPTS);
    return {
      error: isSetup
        ? "That code isn't correct. Make sure you scanned the QR code above, then enter the current code."
        : "That code isn't correct. Enter the current code from your authenticator app.",
    };
  }

  const passwordHash = await hashPassword(password);
  await prisma.$transaction([
    prisma.adminUser.update({
      where: { id: admin.id },
      data: {
        passwordHash,
        ...(isSetup ? { totpSecret: token.pendingTotpSecret } : {}),
        totpEnabled: true,
        lastTotpStep: step,
        failedLoginCount: 0,
        lockedUntil: null,
        lastLoginAt: new Date(),
      },
    }),
    prisma.adminToken.update({ where: { id: token.id }, data: { usedAt: new Date() } }),
    prisma.adminToken.deleteMany({ where: { adminId: admin.id, usedAt: null } }),
    // A new password logs the account out everywhere else.
    prisma.adminSession.deleteMany({ where: { adminId: admin.id } }),
  ]);

  await clearFailures(limitKey);
  await clearFailures(`login:email:${admin.email}`);
  await createSession(admin.id, AdminSessionStage.ACTIVE);
  redirect("/admin");
}
