"use client";

import { useState } from "react";

export default function InfoTooltip({ text }: { text: string }) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button
        type="button"
        aria-label="More info"
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-600 transition hover:bg-slate-300"
      >
        i
      </button>
      {show && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs leading-relaxed text-white shadow-lg">
          {text}
        </span>
      )}
    </span>
  );
}
