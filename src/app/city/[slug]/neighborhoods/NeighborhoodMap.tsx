"use client";

import { useState } from "react";
import type { Neighborhood } from "@/lib/cities";

const statBars: { key: "safety" | "transport" | "nightlife" | "studentFit"; label: string }[] = [
  { key: "safety", label: "Safety" },
  { key: "transport", label: "Public transport" },
  { key: "nightlife", label: "Nightlife" },
  { key: "studentFit", label: "Student / expat fit" },
];

export default function NeighborhoodMap({
  neighborhoods,
}: {
  neighborhoods: Neighborhood[];
}) {
  const [selectedSlug, setSelectedSlug] = useState(neighborhoods[0]?.slug);
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);

  const selected =
    neighborhoods.find((n) => n.slug === selectedSlug) ?? neighborhoods[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[65fr_35fr]">
      {/* Map */}
      <div>
        <div
          className="relative grid aspect-[5/4] gap-1.5 overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 p-1.5 shadow-sm sm:aspect-[16/10]"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr 1fr",
            gridTemplateAreas:
              '"avenidas avenidas parque" "campo baixa parque" "santos alfama parque"',
          }}
        >
          {neighborhoods.map((n) => {
            const isSelected = n.slug === selectedSlug;
            const isHovered = n.slug === hoveredSlug;
            return (
              <button
                key={n.slug}
                type="button"
                style={{ gridArea: n.gridArea }}
                onMouseEnter={() => setHoveredSlug(n.slug)}
                onMouseLeave={() => setHoveredSlug(null)}
                onFocus={() => setHoveredSlug(n.slug)}
                onBlur={() => setHoveredSlug(null)}
                onClick={() => setSelectedSlug(n.slug)}
                aria-pressed={isSelected}
                className={`group relative flex items-end justify-start rounded-2xl p-2 text-left transition-colors duration-200 sm:p-3 lg:p-4 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white/70 text-slate-700 hover:bg-blue-500 hover:text-white"
                }`}
              >
                <span className="text-xs font-semibold leading-tight sm:text-sm lg:text-base">
                  {n.name}
                </span>

                {isHovered && !isSelected && (
                  <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-44 -translate-x-1/2 rounded-xl bg-white p-3 text-left shadow-lg ring-1 ring-slate-200">
                    <p className="text-xs font-semibold text-slate-900">
                      {n.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-600">
                      Avg rent: {n.rent}
                    </p>
                    <p className="text-xs text-slate-600">
                      Student fit: {n.studentFit.toFixed(1)}/10
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Prototype map — illustrative layout, not drawn to scale.
        </p>
      </div>

      {/* Selected neighborhood panel */}
      <div className="lg:sticky lg:top-6 lg:self-start">
        {selected && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-2xl font-bold text-slate-900">
              {selected.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {selected.description}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Average rent
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {selected.rent}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  Commute to universities
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">
                  {selected.commute}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {statBars.map(({ key, label }) => {
                const value = selected[key];
                return (
                  <div key={key}>
                    <div className="flex items-center justify-between text-xs text-slate-600">
                      <span>{label}</span>
                      <span className="font-medium text-slate-900">
                        {value.toFixed(1)}/10
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-blue-600"
                        style={{ width: `${(value / 10) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-blue-700">
                Best for
              </p>
              <p className="mt-1 text-sm text-slate-700">{selected.bestFor}</p>
            </div>

            <div className="mt-3 rounded-xl bg-amber-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
                Main caution
              </p>
              <p className="mt-1 text-sm text-slate-700">{selected.caution}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
