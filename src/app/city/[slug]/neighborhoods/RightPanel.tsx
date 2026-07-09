"use client";

import type { Freguesia, Municipality } from "@/lib/lisbonMetro";

const statBars: { key: "safety" | "transport" | "nightlife" | "studentFit"; label: string }[] = [
  { key: "safety", label: "Safety" },
  { key: "transport", label: "Public transport" },
  { key: "nightlife", label: "Nightlife" },
  { key: "studentFit", label: "Student / expat fit" },
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

export function MunicipalityComingSoonPanel({ municipality }: { municipality: Municipality }) {
  return (
    <div className="animate-zoom-in-fade rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold text-slate-900">{municipality.name}</h3>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Average rent
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900">{municipality.rent}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Student/expat fit
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {municipality.studentFit.toFixed(1)}/10
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-xl bg-slate-50 p-4">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
          Coming soon
        </span>
        <p className="mt-2 text-sm text-slate-600">
          A detailed map is on its way for {municipality.name}. For now, Lisbon
          is the only municipality with full freguesia-level depth.
        </p>
      </div>
    </div>
  );
}

export function MetroEmptyPanel() {
  return (
    <div className="animate-zoom-in-fade rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center">
      <p className="text-sm text-slate-600">
        Hover or click a municipality to see quick stats. Click Lisbon to
        explore its neighborhoods in depth.
      </p>
    </div>
  );
}

export default function FreguesiaPanel({
  freguesia,
  showListings,
  onShowListings,
  onExploreBairros,
}: {
  freguesia: Freguesia;
  showListings: boolean;
  onShowListings: () => void;
  onExploreBairros?: () => void;
}) {
  return (
    <div className="animate-zoom-in-fade rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold text-slate-900">{freguesia.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        {freguesia.description}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Average rent
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {freguesia.rent}
          </p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Commute to universities
          </p>
          <p className="mt-1 text-base font-semibold text-slate-900">
            {freguesia.commute}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {statBars.map(({ key, label }) => (
          <StatBar key={key} label={label} value={freguesia[key]} />
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-blue-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700">
          Best for
        </p>
        <p className="mt-1 text-sm text-slate-700">{freguesia.bestFor}</p>
      </div>

      <div className="mt-3 rounded-xl bg-amber-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
          Main caution
        </p>
        <p className="mt-1 text-sm text-slate-700">{freguesia.caution}</p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Bairros in {freguesia.name}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {freguesia.bairros.map((bairro) => (
            <span
              key={bairro}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {bairro}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        {freguesia.hasBairroZoom && onExploreBairros && (
          <button
            type="button"
            onClick={onExploreBairros}
            className="flex-1 rounded-lg border border-blue-600 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Explore bairros
          </button>
        )}
        <button
          type="button"
          onClick={onShowListings}
          className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          {showListings ? "Hide listings" : "Show listings in this area"}
        </button>
      </div>
    </div>
  );
}
