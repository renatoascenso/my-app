import QRCode from "qrcode";
import { prisma } from "@/lib/prisma";
import { AdminTokenPurpose } from "@/generated/prisma/client";
import { decryptSecret, encryptSecret, MIN_PASSWORD_LENGTH } from "@/lib/admin/crypto";
import { findValidToken } from "@/lib/admin/tokens";
import { generateTotpSecret, totpUri } from "@/lib/admin/totp";
import { AuthCard } from "../../AuthCard";
import { SetupForm } from "./SetupForm";

export const metadata = { title: "Account access", referrer: "no-referrer" as const };

export default async function SetupPage({ params }: { params: Promise<{ token: string }> }) {
  const { token: rawToken } = await params;
  const token = await findValidToken(rawToken);

  if (!token) {
    return (
      <AuthCard title="Link not valid" subtitle="This link has already been used or has expired.">
        <p className="text-sm text-slate-600">Ask one of your cofounders to create a new link for you.</p>
      </AuthCard>
    );
  }

  if (token.purpose === AdminTokenPurpose.RESET) {
    return (
      <AuthCard title="Set a new password" subtitle={token.admin.email}>
        <SetupForm token={rawToken} minPasswordLength={MIN_PASSWORD_LENGTH} />
      </AuthCard>
    );
  }

  // The new authenticator secret lives on the link until setup completes, so an
  // existing authenticator keeps working if this link is never finished.
  let encrypted = token.pendingTotpSecret;
  if (!encrypted) {
    encrypted = encryptSecret(generateTotpSecret());
    await prisma.adminToken.update({ where: { id: token.id }, data: { pendingTotpSecret: encrypted } });
  }
  const secret = decryptSecret(encrypted);
  const qrSvg = await QRCode.toString(totpUri(secret, token.admin.email), { type: "svg", margin: 0 });

  return (
    <AuthCard title={`Welcome, ${token.admin.name}`} subtitle={`Set up your admin login for ${token.admin.email}.`}>
      <SetupForm
        token={rawToken}
        minPasswordLength={MIN_PASSWORD_LENGTH}
        authenticator={{ qrSvg, secret: secret.match(/.{1,4}/g)!.join(" ") }}
      />
    </AuthCard>
  );
}
