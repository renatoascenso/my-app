"use client";

import { useActionState } from "react";
import { completeSetup } from "./actions";
import { buttonClass, FormError, inputClass } from "../../AuthCard";

type Props = {
  token: string;
  minPasswordLength: number;
  // Only for first-time setup / new phone; omitted for a password reset.
  authenticator?: { qrSvg: string; secret: string };
};

export function SetupForm({ token, minPasswordLength, authenticator }: Props) {
  const [state, action, pending] = useActionState(completeSetup, undefined);

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="token" value={token} />
      <FormError message={state?.error} />

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-900">
          {authenticator ? "1. " : ""}Choose a password
        </h2>
        <label className="block text-sm font-medium">
          New password
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={minPasswordLength}
            required
            autoFocus
            className={inputClass}
          />
          <span className="mt-1 block text-xs font-normal text-slate-500">
            At least {minPasswordLength} characters. A password manager can generate one for you.
          </span>
        </label>
        <label className="block text-sm font-medium">
          Repeat password
          <input name="confirm" type="password" autoComplete="new-password" required className={inputClass} />
        </label>
      </section>

      {authenticator && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold text-slate-900">2. Connect your authenticator app</h2>
          <p className="text-sm text-slate-600">
            Open Google Authenticator, Microsoft Authenticator or 1Password, add a new account, and scan this code.
          </p>
          <div
            className="mx-auto w-48 rounded-lg border border-slate-200 bg-white p-2"
            dangerouslySetInnerHTML={{ __html: authenticator.qrSvg }}
          />
          <details className="text-sm text-slate-600">
            <summary className="cursor-pointer text-blue-600">Can&apos;t scan? Enter the key manually</summary>
            <code className="mt-2 block break-all rounded-lg bg-slate-100 px-3 py-2 font-mono text-xs tracking-wider text-slate-900">
              {authenticator.secret}
            </code>
          </details>
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-900">
          {authenticator ? "3. Enter the 6-digit code shown in the app" : "Confirm with your authenticator code"}
        </h2>
        <input
          name="code"
          aria-label="6-digit code"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9 ]{6,7}"
          maxLength={7}
          required
          className={`${inputClass} text-center text-lg tracking-[0.4em]`}
        />
      </section>

      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Saving…" : authenticator ? "Finish setup" : "Set new password"}
      </button>
    </form>
  );
}
