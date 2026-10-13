import "server-only";
import { cookies, headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import { AdminSessionStage } from "@/generated/prisma/client";
import { generateToken, sha256 } from "./crypto";

export const SESSION_COOKIE = "ha_admin_session";

const PENDING_MFA_TTL_MS = 10 * 60 * 1000; // time to enter the authenticator code
const ACTIVE_TTL_MS = 12 * 60 * 60 * 1000; // hard maximum for a login
const IDLE_TIMEOUT_MS = 2 * 60 * 60 * 1000; // logged out after 2h without activity
const LAST_SEEN_UPDATE_MS = 5 * 60 * 1000; // avoid a DB write on every request

export async function getRequestInfo() {
  const h = await headers();
  // Nginx sets X-Real-IP to the connecting client; it can't be spoofed by the browser.
  return {
    ipAddress: h.get("x-real-ip") ?? "unknown",
    userAgent: h.get("user-agent")?.slice(0, 300) ?? null,
  };
}

export async function createSession(adminId: string, stage: AdminSessionStage): Promise<void> {
  const token = generateToken();
  const ttl = stage === AdminSessionStage.ACTIVE ? ACTIVE_TTL_MS : PENDING_MFA_TTL_MS;
  const expiresAt = new Date(Date.now() + ttl);
  const { ipAddress, userAgent } = await getRequestInfo();

  await prisma.adminSession.create({
    data: { tokenHash: sha256(token), adminId, stage, expiresAt, ipAddress, userAgent },
  });

  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    expires: expiresAt,
  });
}

/** Looks up the session behind the cookie; expired or idle sessions count as missing. */
export async function readSession() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const session = await prisma.adminSession.findUnique({
    where: { tokenHash: sha256(token) },
    include: { admin: true },
  });
  if (!session) return null;

  const now = Date.now();
  const idleExpired =
    session.stage === AdminSessionStage.ACTIVE && now - session.lastSeenAt.getTime() > IDLE_TIMEOUT_MS;
  if (session.expiresAt.getTime() <= now || idleExpired) {
    await prisma.adminSession.delete({ where: { id: session.id } }).catch(() => {});
    return null;
  }

  if (session.stage === AdminSessionStage.ACTIVE && now - session.lastSeenAt.getTime() > LAST_SEEN_UPDATE_MS) {
    await prisma.adminSession.update({ where: { id: session.id }, data: { lastSeenAt: new Date(now) } });
  }
  return session;
}

/** Deletes the current session (DB row + cookie). Only callable from Server Actions. */
export async function destroySession(): Promise<void> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) await prisma.adminSession.deleteMany({ where: { tokenHash: sha256(token) } });
  cookieStore.delete({ name: SESSION_COOKIE, path: "/admin" });
}
