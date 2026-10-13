import "server-only";
import { prisma } from "@/lib/prisma";
import { AdminTokenPurpose } from "@/generated/prisma/client";
import { ADMIN_ALLOWLIST, isAllowlistedEmail } from "./allowlist";
import { generateToken, sha256 } from "./crypto";

export const TOKEN_TTL_MS: Record<AdminTokenPurpose, number> = {
  SETUP: 48 * 60 * 60 * 1000,
  RESET: 30 * 60 * 1000,
};

/** Returns the token row (with its admin) if the link is unused, unexpired and its owner is still allowlisted. */
export async function findValidToken(rawToken: string) {
  if (!rawToken) return null;
  const token = await prisma.adminToken.findUnique({
    where: { tokenHash: sha256(rawToken) },
    include: { admin: true },
  });
  if (!token || token.usedAt || token.expiresAt <= new Date() || !isAllowlistedEmail(token.admin.email)) {
    return null;
  }
  return token;
}

/** Returns the AdminUser row for an allowlisted email, creating it (without password) if needed. */
export async function ensureAdminUser(email: string) {
  const entry = ADMIN_ALLOWLIST.find((admin) => admin.email === email);
  if (!entry) throw new Error(`${email} is not on the admin allowlist`);
  return prisma.adminUser.upsert({
    where: { email: entry.email },
    create: { email: entry.email, name: entry.name },
    update: {},
  });
}

/**
 * Creates a one-time link token for an admin and invalidates their older unused links
 * of the same kind. Returns the raw token — it is shown/sent once and never stored.
 */
export async function issueToken(adminId: string, purpose: AdminTokenPurpose, createdById?: string): Promise<string> {
  const raw = generateToken();
  await prisma.$transaction([
    prisma.adminToken.deleteMany({ where: { adminId, purpose, usedAt: null } }),
    prisma.adminToken.create({
      data: {
        tokenHash: sha256(raw),
        purpose,
        adminId,
        createdById,
        expiresAt: new Date(Date.now() + TOKEN_TTL_MS[purpose]),
      },
    }),
  ]);
  return raw;
}
