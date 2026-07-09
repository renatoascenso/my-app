"use client";

import type { Quartier } from "@/lib/stGallenNeighborhoods";

const statBars: { key: "safety" | "transport" | "nightlife" | "studentFit"; label: string }[] = [
  { key: "safety", label: "Safety" },
  { key: "transport", label: "Public transport" },
  { key: "nightlife", label: "Nightlife" },
  { key: "studentFit", label: "Student fit" },
];

function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>{label}</span>
        <span className="font-medium text-slate-900">{value.toFixed(1)}/10</span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${(value / 10) * 100}%` }}
        />
      </div>
    </div>
  );
}

export function QuartierEmptyPanel() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-6 text-sm text-slate-500 sm:p-8">
      Hover or click a quarter to see quick stats. Rosenberg-Kreubleiche,
      Hölzli-Joosrüti, Altstadt, St.Leonhard-Ost, and Linsenbühl-Dreilinden
      have sample listings you can browse.
    </div>
  );
}

export default function QuartierPanel({
  quartier,
  showListings,
  onShowListings,
}: {
  quartier: Quartier;
  showListings: boolean;
  onShowListings: () => void;
}) {
  return (
    <div className="animate-zoom-in-fade rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700">
        Kreis {quartier.kreis}
      </span>
      <h3 className="mt-3 text-2xl font-bold text-slate-900">{quartier.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {quartier.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Average rent
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {quartier.rent}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Commute to HSG
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {quartier.commute}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {statBars.map(({ key, label }) => (
          <StatBar key={key} label={label} value={quartier[key]} />
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-blue-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700">
          Best for
        </p>
        <p className="mt-1 text-sm text-slate-700">{quartier.bestFor}</p>
      </div>

      <div className="mt-3 rounded-xl bg-amber-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
          Main caution
        </p>
        <p className="mt-1 text-sm text-slate-700">{quartier.caution}</p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Landmarks in {quartier.name}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {quartier.landmarks.map((landmark) => (
            <span
              key={landmark}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {landmark}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onShowListings}
          className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {showListings ? "Hide listings" : "Show listings in this area"}
        </button>
      </div>
    </div>
  );
}
