import "server-only";
import { prisma } from "@/lib/prisma";

// Fixed-window failure counters stored in the RateLimit table.
// Call isRateLimited() before an attempt and recordFailure() only when it fails,
// so legitimate successful logins never use up the budget.

export const RATE_LIMITS = {
  loginPerEmail: { max: 5, windowMs: 15 * 60 * 1000 },
  loginPerIp: { max: 20, windowMs: 15 * 60 * 1000 },
} as const;

type Limit = { max: number; windowMs: number };

export async function isRateLimited(key: string, limit: Limit): Promise<boolean> {
  const row = await prisma.rateLimit.findUnique({ where: { key } });
  return !!row && row.resetAt > new Date() && row.count >= limit.max;
}

export async function recordFailure(key: string, limit: Limit): Promise<void> {
  const now = new Date();
  const row = await prisma.rateLimit.findUnique({ where: { key } });
  if (!row || row.resetAt <= now) {
    await prisma.rateLimit.upsert({
      where: { key },
      create: { key, count: 1, resetAt: new Date(now.getTime() + limit.windowMs) },
      update: { count: 1, resetAt: new Date(now.getTime() + limit.windowMs) },
    });
  } else {
    await prisma.rateLimit.update({ where: { key }, data: { count: { increment: 1 } } });
  }
}

export async function clearFailures(key: string): Promise<void> {
  await prisma.rateLimit.deleteMany({ where: { key } });
}
