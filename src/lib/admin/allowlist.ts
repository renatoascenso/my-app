// The only people who can ever have an admin account, log in, or receive a
// password-reset email. Adding someone here requires a code change + deploy.
export const ADMIN_ALLOWLIST = [
  { email: "renato.dossantos@housingatlas.com", name: "Renato" },
  { email: "kenny.frisella@housingatlas.com", name: "Kenny" },
  { email: "eliot.kohli@housingatlas.com", name: "Eliot" },
] as const;

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isAllowlistedEmail(email: string): boolean {
  const normalized = normalizeEmail(email);
  return ADMIN_ALLOWLIST.some((admin) => admin.email === normalized);
}
