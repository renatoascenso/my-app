"use server";

import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { AdminSessionStage } from "@/generated/prisma/client";
import { isAllowlistedEmail, normalizeEmail } from "@/lib/admin/allowlist";
import { burnPasswordCheck, decryptSecret, verifyPassword } from "@/lib/admin/crypto";
import { clearFailures, isRateLimited, RATE_LIMITS, recordFailure } from "@/lib/admin/rateLimit";
import { createSession, destroySession, getRequestInfo, readSession } from "@/lib/admin/session";
import { verifyTotp } from "@/lib/admin/totp";

export type FormState = { error?: string } | undefined;

const INVALID_CREDENTIALS = "Email or password is incorrect.";
const TOO_MANY_ATTEMPTS = "Too many attempts. Please wait 15 minutes and try again.";
const MAX_CODE_FAILURES = 5;
const CODE_LOCK_MS = 15 * 60 * 1000;

export async function loginWithPassword(_prev: FormState, formData: FormData): Promise<FormState> {
  const email = normalizeEmail(String(formData.get("email") ?? ""));
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Please enter your email and password." };

  const { ipAddress } = await getRequestInfo();
  const emailKey = `login:email:${email}`;
  const ipKey = `login:ip:${ipAddress}`;
  if (
    (await isRateLimited(emailKey, RATE_LIMITS.loginPerEmail)) ||
    (await isRateLimited(ipKey, RATE_LIMITS.loginPerIp))
  ) {
    return { error: TOO_MANY_ATTEMPTS };
  }

  const admin = isAllowlistedEmail(email) ? await prisma.adminUser.findUnique({ where: { email } }) : null;

  const passwordOk = admin?.passwordHash
    ? await verifyPassword(password, admin.passwordHash)
    : (await burnPasswordCheck(password), false);

  if (!admin || !passwordOk) {
    await recordFailure(emailKey, RATE_LIMITS.loginPerEmail);
    await recordFailure(ipKey, RATE_LIMITS.loginPerIp);
    return { error: INVALID_CREDENTIALS };
  }

  if (admin.lockedUntil && admin.lockedUntil > new Date()) return { error: TOO_MANY_ATTEMPTS };
  if (!admin.totpEnabled || !admin.totpSecret) {
    return { error: "Your account setup isn't finished yet. Please use your personal setup link." };
  }

  await clearFailures(emailKey);
  await createSession(admin.id, AdminSessionStage.PENDING_MFA);
  redirect("/admin/login/verify");
}

export async function verifyAuthenticatorCode(_prev: FormState, formData: FormData): Promise<FormState> {
  const session = await readSession();
  if (!session || session.stage !== AdminSessionStage.PENDING_MFA) {
    redirect("/admin/login?expired=1");
  }
  const admin = session.admin;

  if (admin.lockedUntil && admin.lockedUntil > new Date()) {
    await destroySession();
    redirect("/admin/login?locked=1");
  }

  const step = admin.totpSecret
    ? verifyTotp(decryptSecret(admin.totpSecret), String(formData.get("code") ?? ""), admin.lastTotpStep)
    : null;

  if (step === null) {
    const failures = admin.failedLoginCount + 1;
    if (failures >= MAX_CODE_FAILURES) {
      await prisma.adminUser.update({
        where: { id: admin.id },
        data: { failedLoginCount: 0, lockedUntil: new Date(Date.now() + CODE_LOCK_MS) },
      });
      await prisma.adminSession.deleteMany({ where: { adminId: admin.id, stage: AdminSessionStage.PENDING_MFA } });
      await destroySession();
      redirect("/admin/login?locked=1");
    }
    await prisma.adminUser.update({ where: { id: admin.id }, data: { failedLoginCount: failures } });
    return { error: "That code isn't correct. Check your authenticator app and try again." };
  }

  await prisma.adminUser.update({
    where: { id: admin.id },
    data: { lastTotpStep: step, failedLoginCount: 0, lockedUntil: null, lastLoginAt: new Date() },
  });
  // Swap the half-logged-in session for a fresh, fully logged-in one.
  await destroySession();
  await createSession(admin.id, AdminSessionStage.ACTIVE);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await destroySession();
  redirect("/admin/login");
}
