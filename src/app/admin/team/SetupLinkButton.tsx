"use client";

import { useActionState, useState } from "react";
import { createSetupLink } from "./actions";

export function SetupLinkButton({ email, name, hasAccount }: { email: string; name: string; hasAccount: boolean }) {
  const [state, action, pending] = useActionState(createSetupLink, undefined);
  const [copied, setCopied] = useState(false);

  if (state?.link) {
    return (
      <div className="mt-3 space-y-2 rounded-lg bg-amber-50 p-3 text-sm text-amber-900">
        <p>
          Send this link to {name} privately (e.g. WhatsApp or Signal). It works once and expires in 48 hours.
          {hasAccount && " When used, it replaces their password and authenticator."}
        </p>
        <div className="flex gap-2">
          <input readOnly value={state.link} className="min-w-0 flex-1 rounded border border-amber-200 bg-white px-2 py-1 font-mono text-xs" />
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(state.link!).then(() => setCopied(true))}
            className="rounded-lg bg-amber-600 px-3 py-1 font-medium text-white hover:bg-amber-700"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="mt-3">
      <input type="hidden" name="email" value={email} />
      {state?.error && <p className="mb-2 text-sm text-red-700">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50 disabled:opacity-60"
      >
        {pending ? "Creating…" : hasAccount ? "Create new setup link" : "Create setup link"}
      </button>
    </form>
  );
}
