import { prisma } from "@/lib/prisma";
import { ADMIN_ALLOWLIST } from "@/lib/admin/allowlist";
import type { CurrentAdmin } from "@/lib/admin/dal";
import { SetupLinkButton } from "./SetupLinkButton";

const dateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Zurich" });

export async function TeamSection({ me }: { me: CurrentAdmin }) {
  const accounts = await prisma.adminUser.findMany({
    where: { email: { in: ADMIN_ALLOWLIST.map((a) => a.email) } },
    include: { tokens: { where: { purpose: "SETUP", usedAt: null, expiresAt: { gt: new Date() } }, select: { id: true } } },
  });

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold">Team</h2>
      <p className="mt-1 text-sm text-slate-600">
        If a cofounder lost their phone or is locked out, create a new setup link for them here.
      </p>
      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {ADMIN_ALLOWLIST.map(({ email, name }) => {
          const account = accounts.find((a) => a.email === email);
          const isMe = email === me.email;
          const status = account?.totpEnabled
            ? account.lastLoginAt
              ? `Last login ${dateFormat.format(account.lastLoginAt)}`
              : "Set up"
            : account?.tokens.length
              ? "Setup link sent, not used yet"
              : "Not set up yet";

          return (
            <li key={email} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="font-medium">
                {name} {isMe && <span className="text-sm font-normal text-slate-500">(you)</span>}
              </p>
              <p className="truncate text-sm text-slate-500">{email}</p>
              <p className="mt-2 text-sm text-slate-700">{status}</p>
              {!isMe && <SetupLinkButton email={email} name={name} hasAccount={!!account?.totpEnabled} />}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
