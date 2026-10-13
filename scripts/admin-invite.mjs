// Creates a one-time setup link for a cofounder (first login, or lost phone).
//
//   npm run admin:invite -- kenny.frisella@housingatlas.com
//   npm run admin:invite -- kenny.frisella@housingatlas.com --base http://localhost:3000
//
// Run on the server (or locally against the test DB). Only allowlisted emails are accepted.
// Creating a new link cancels that person's older unused setup links. Their current password and
// authenticator keep working until the new setup is completed.

import "dotenv/config";
import { createHash, randomBytes, randomUUID } from "node:crypto";
import pg from "pg";
import { ADMIN_ALLOWLIST, normalizeEmail } from "../src/lib/admin/allowlist.ts";

const SETUP_TTL_MS = 48 * 60 * 60 * 1000;

const args = process.argv.slice(2);
const baseIndex = args.indexOf("--base");
const baseUrl = (baseIndex >= 0 ? args[baseIndex + 1] : process.env.APP_URL) || "https://housingatlas.com";
const email = normalizeEmail(args.find((arg, i) => !arg.startsWith("--") && (baseIndex < 0 || i !== baseIndex + 1)) ?? "");

const entry = ADMIN_ALLOWLIST.find((admin) => admin.email === email);
if (!entry) {
  console.error(`Not allowed: "${email}". Admins are: ${ADMIN_ALLOWLIST.map((a) => a.email).join(", ")}`);
  process.exit(1);
}

const db = new pg.Client({ connectionString: process.env.DATABASE_URL });
await db.connect();
try {
  await db.query("BEGIN");
  const { rows } = await db.query(
    `INSERT INTO "AdminUser" (id, email, name, "updatedAt") VALUES ($1, $2, $3, now())
     ON CONFLICT (email) DO UPDATE SET "updatedAt" = now()
     RETURNING id, "passwordHash" IS NOT NULL AS "hasPassword"`,
    [randomUUID(), entry.email, entry.name],
  );
  const admin = rows[0];
  const raw = randomBytes(32).toString("base64url");
  await db.query(`DELETE FROM "AdminToken" WHERE "adminId" = $1 AND purpose = 'SETUP' AND "usedAt" IS NULL`, [admin.id]);
  await db.query(
    `INSERT INTO "AdminToken" (id, "tokenHash", purpose, "adminId", "expiresAt")
     VALUES ($1, $2, 'SETUP', $3, $4)`,
    [randomUUID(), createHash("sha256").update(raw).digest("hex"), admin.id, new Date(Date.now() + SETUP_TTL_MS)],
  );
  await db.query("COMMIT");

  console.log(`\nSetup link for ${entry.name} (${entry.email}) — valid 48 hours, works once:\n`);
  console.log(`  ${baseUrl}/admin/setup/${raw}\n`);
  if (admin.hasPassword) {
    console.log("Note: this account already exists. Completing this link sets a new password AND a new authenticator.\n");
  }
} catch (error) {
  await db.query("ROLLBACK");
  throw error;
} finally {
  await db.end();
}
