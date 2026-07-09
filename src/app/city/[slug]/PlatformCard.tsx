"use client";

import { useState } from "react";
import type { PlatformCard as PlatformCardData } from "@/lib/cities";

export default function PlatformCard({ platform }: { platform: PlatformCardData }) {
  const [expanded, setExpanded] = useState(false);
  const hasGroups = !!platform.groups?.length;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
        platform.featured
          ? "border-blue-600 bg-blue-50/40 ring-1 ring-blue-600"
          : "border-slate-200 bg-white"
      }`}
    >
      {platform.featured && (
        <span className="absolute -top-3 left-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Recommended
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold text-slate-900">{platform.name}</h3>
        <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
          {platform.trustScore.toFixed(1)}/5
        </span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${(platform.trustScore / 5) * 100}%` }}
        />
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
        Best for
      </p>
      <p className="mt-1 text-sm text-slate-700">{platform.audience}</p>

      <div className="mt-4 space-y-1.5">
        {platform.pros.map((pro) => (
          <p key={pro} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-0.5 text-emerald-600">+</span>
            {pro}
          </p>
        ))}
        {platform.cons.map((con) => (
          <p key={con} className="flex items-start gap-2 text-sm text-slate-600">
            <span className="mt-0.5 text-rose-500">–</span>
            {con}
          </p>
        ))}
      </div>

      {hasGroups && (
        <div className="mt-4 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="flex w-full items-center justify-between text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            {expanded
              ? "Hide groups"
              : `View ${platform.groups!.length} group${platform.groups!.length === 1 ? "" : "s"}`}
            <span
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
              aria-hidden
            >
              ▾
            </span>
          </button>

          {expanded && (
            <ul className="mt-3 space-y-3">
              {platform.groups!.map((group) => (
                <li key={group.url} className="rounded-lg bg-slate-50 p-3">
                  <a
                    href={group.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-700 hover:underline"
                  >
                    {group.name} ↗
                  </a>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {group.description}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
