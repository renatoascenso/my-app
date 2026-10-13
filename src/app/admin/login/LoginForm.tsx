"use client";

import { useActionState } from "react";
import Link from "next/link";
import { loginWithPassword } from "./actions";
import { buttonClass, FormError, inputClass } from "../AuthCard";

export function LoginForm({ notice }: { notice?: string }) {
  const [state, action, pending] = useActionState(loginWithPassword, undefined);

  return (
    <form action={action} className="space-y-4">
      <FormError message={state?.error ?? notice} />
      <label className="block text-sm font-medium">
        Email
        <input name="email" type="email" autoComplete="username" required autoFocus className={inputClass} />
      </label>
      <label className="block text-sm font-medium">
        Password
        <input name="password" type="password" autoComplete="current-password" required className={inputClass} />
      </label>
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Checking…" : "Continue"}
      </button>
      <p className="text-center text-sm">
        <Link href="/admin/forgot" className="text-blue-600 hover:underline">
          Forgot password?
        </Link>
      </p>
    </form>
  );
}
