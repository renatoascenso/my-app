"use client";

import { startTransition, useActionState, useEffect, useRef } from "react";
import type { FormState } from "./actions";

type Action = (prev: FormState, form: FormData) => Promise<FormState>;

/**
 * A form wired to a server action, showing "Saved" or the validation error under the fields.
 * Submits manually so React doesn't clear the inputs on errors; "add" forms can opt in to
 * clearing after a successful save.
 */
export function ActionForm({
  action,
  submitLabel = "Save",
  resetOnSuccess = false,
  className = "",
  children,
}: {
  action: Action;
  submitLabel?: string;
  resetOnSuccess?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const [state, formAction, pending] = useActionState(action, undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (resetOnSuccess && state?.ok) formRef.current?.reset();
  }, [state, resetOnSuccess]);

  return (
    <form
      ref={formRef}
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        startTransition(() => formAction(data));
      }}
    >
      {children}
      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          disabled={pending}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60"
        >
          {pending ? "Saving…" : submitLabel}
        </button>
        {state?.error && !pending && <p className="text-sm text-red-700">{state.error}</p>}
        {state?.ok && !pending && <p className="text-sm text-emerald-700">{state.ok}</p>}
      </div>
    </form>
  );
}

/** A small delete button that asks for confirmation before submitting. */
export function DeleteButton({
  action,
  id,
  label = "Delete",
  confirmText,
}: {
  action: (form: FormData) => Promise<void>;
  id: string;
  label?: string;
  confirmText: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!window.confirm(confirmText)) event.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-700 hover:bg-red-50">
        {label}
      </button>
    </form>
  );
}
