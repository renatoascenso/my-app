"use client";

import { useActionState } from "react";
import Link from "next/link";
import { verifyAuthenticatorCode } from "../actions";
import { buttonClass, FormError, inputClass } from "../../AuthCard";

export function VerifyForm() {
  const [state, action, pending] = useActionState(verifyAuthenticatorCode, undefined);

  return (
    <form action={action} className="space-y-4">
      <FormError message={state?.error} />
      <label className="block text-sm font-medium">
        6-digit code
        <input
          name="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9 ]{6,7}"
          maxLength={7}
          required
          autoFocus
          className={`${inputClass} text-center text-lg tracking-[0.4em]`}
        />
      </label>
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Checking…" : "Log in"}
      </button>
      <p className="text-center text-sm">
        <Link href="/admin/login" className="text-slate-500 hover:underline">
          Start over
        </Link>
      </p>
    </form>
  );
}
