"use server";

import { AdminTokenPurpose } from "@/generated/prisma/client";
import { isAllowlistedEmail, normalizeEmail } from "@/lib/admin/allowlist";
import { requireAdmin } from "@/lib/admin/dal";
import { appUrl } from "@/lib/admin/email";
import { ensureAdminUser, issueToken } from "@/lib/admin/tokens";

export type LinkState = { link?: string; error?: string } | undefined;

/** Lets a logged-in cofounder create a new setup link (new password + new authenticator) for another cofounder. */
export async function createSetupLink(_prev: LinkState, formData: FormData): Promise<LinkState> {
  const me = await requireAdmin();
  const email = normalizeEmail(String(formData.get("email") ?? ""));

  if (!isAllowlistedEmail(email)) return { error: "That person isn't on the admin list." };
  if (email === me.email) return { error: "You can't create a link for yourself — ask a cofounder." };

  const target = await ensureAdminUser(email);
  const raw = await issueToken(target.id, AdminTokenPurpose.SETUP, me.id);
  return { link: `${appUrl()}/admin/setup/${raw}` };
}
