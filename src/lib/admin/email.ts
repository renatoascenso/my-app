import "server-only";

// Sends transactional admin emails through Resend (https://resend.com/docs/api-reference/emails/send-email).
// Without RESEND_API_KEY (local development) the email is printed to the server log instead.

const FROM = "HousingAtlas Admin <no-reply@housingatlas.com>";

export function appUrl(): string {
  // Never derived from the request's Host header, which a visitor could forge to poison reset links.
  return (process.env.APP_URL || "https://housingatlas.com").replace(/\/$/, "");
}

export async function sendEmail({ to, subject, text, html }: { to: string; subject: string; text: string; html: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      console.error(`[admin email] RESEND_API_KEY is not set — could not send "${subject}" to ${to}`);
    } else {
      console.log(`[admin email] (dev, not sent) To: ${to}\nSubject: ${subject}\n\n${text}`);
    }
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [to], subject, text, html }),
  });
  if (!response.ok) {
    console.error(`[admin email] Resend error ${response.status}: ${await response.text()}`);
  }
}

export function passwordResetEmail(name: string, link: string) {
  const subject = "Reset your HousingAtlas admin password";
  const text = [
    `Hi ${name},`,
    "",
    "Someone (hopefully you) asked to reset your HousingAtlas admin password.",
    "Open this link within 30 minutes to choose a new one. You'll need your authenticator app to confirm.",
    "",
    link,
    "",
    "If you didn't ask for this, you can ignore this email — your password stays the same.",
  ].join("\n");
  const html = `
    <div style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;max-width:480px">
      <p>Hi ${escapeHtml(name)},</p>
      <p>Someone (hopefully you) asked to reset your HousingAtlas admin password.
         Open this link within 30 minutes to choose a new one. You'll need your authenticator app to confirm.</p>
      <p><a href="${escapeHtml(link)}" style="display:inline-block;background:#2563eb;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;font-weight:600">Choose a new password</a></p>
      <p style="color:#64748b;font-size:13px">If you didn't ask for this, you can ignore this email — your password stays the same.</p>
    </div>`;
  return { subject, text, html };
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
