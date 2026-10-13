"use client";

import { useActionState } from "react";
import Link from "next/link";
import { requestPasswordReset } from "./actions";
import { buttonClass, FormError, inputClass } from "../AuthCard";

export function ForgotForm() {
  const [state, action, pending] = useActionState(requestPasswordReset, undefined);

  if (state?.sent) {
    return (
      <div className="space-y-4 text-sm text-slate-700">
        <p className="rounded-lg bg-green-50 px-3 py-2 text-green-800">
          If this address belongs to a HousingAtlas admin, a reset link is on its way. It works for 30 minutes.
        </p>
        <p>Don&apos;t see it? Check your spam folder. If you also lost access to your authenticator app, ask a cofounder for a new setup link.</p>
        <Link href="/admin/login" className="block text-center text-blue-600 hover:underline">
          Back to login
        </Link>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4">
      <FormError message={state?.error} />
      <label className="block text-sm font-medium">
        Email
        <input name="email" type="email" autoComplete="username" required autoFocus className={inputClass} />
      </label>
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Sending…" : "Send reset link"}
      </button>
      <p className="text-center text-sm">
        <Link href="/admin/login" className="text-slate-500 hover:underline">
          Back to login
        </Link>
      </p>
    </form>
  );
}
