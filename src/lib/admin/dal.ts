import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { AdminSessionStage } from "@/generated/prisma/client";
import { isAllowlistedEmail } from "./allowlist";
import { readSession } from "./session";

export type CurrentAdmin = { id: string; email: string; name: string };

/**
 * The one check every admin page and admin Server Action must call.
 * Redirects to the login page unless the visitor is fully logged in
 * (password + authenticator code) and still on the allowlist.
 */
export const requireAdmin = cache(async (): Promise<CurrentAdmin> => {
  const session = await readSession();
  if (!session || session.stage !== AdminSessionStage.ACTIVE || !isAllowlistedEmail(session.admin.email)) {
    redirect("/admin/login");
  }
  const { id, email, name } = session.admin;
  return { id, email, name };
});
