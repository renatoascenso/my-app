"use client";

import { useState } from "react";

export default function HomeUniversityBadge({ className = "" }: { className?: string }) {
  const [show, setShow] = useState(false);

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <span
        tabIndex={0}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        className={`inline-flex w-fit cursor-default items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm ${className}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3">
          <path d="M12 2 1 8l11 6 9-4.9V17h2V8L12 2z" />
          <path d="M5 10.5V15c0 1.7 3 3 7 3s7-1.3 7-3v-4.5l-7 3.8-7-3.8z" />
        </svg>
        Home university friendly
      </span>
      {show && (
        <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-56 -translate-x-1/2 rounded-lg bg-slate-900 px-3 py-2 text-xs leading-relaxed text-white shadow-lg">
          Previous students from your home university have stayed here.
        </span>
      )}
    </span>
  );
}
