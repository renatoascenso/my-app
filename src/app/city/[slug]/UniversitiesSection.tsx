"use client";

import { useMemo, useState } from "react";
import type { HousingAvailability, StudyField, StudyLevel } from "@/generated/prisma/enums";
import { studyFieldLabels } from "@/lib/studyFields";
import type { PublicDeadline, PublicHousing, PublicUniversity } from "@/lib/universities";
import { FOCUS_CAMPUS_EVENT, type FocusCampusDetail } from "./CampusPins";


const availability: Record<HousingAvailability, { label: string; className: string }> = {
  YES: { label: "Own housing", className: "bg-emerald-50 text-emerald-700 ring-emerald-200" },
  LIMITED: { label: "Limited housing", className: "bg-amber-50 text-amber-800 ring-amber-200" },
  PARTNER: { label: "Partner residences", className: "bg-blue-50 text-blue-700 ring-blue-200" },
  NO: { label: "No own housing", className: "bg-slate-100 text-slate-700 ring-slate-200" },
  UNKNOWN: { label: "Housing not checked yet", className: "bg-slate-100 text-slate-500 ring-slate-200" },
};

const levelLabels: Record<StudyLevel, string> = {
  BACHELOR: "Bachelor",
  MASTER: "Master",
  PHD: "PhD",
  EXCHANGE: "Exchange",
  ALL: "Everyone",
};

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const fmt = (iso: string) => dateFormat.format(new Date(iso));

function price(h: PublicHousing) {
  const cur = h.currency ?? "";
  if (h.priceMin !== null && h.priceMax !== null && h.priceMin !== h.priceMax) return `${cur}${h.priceMin}–${h.priceMax} / month`;
  const one = h.priceMin ?? h.priceMax;
  return one !== null ? `${h.priceMin !== null ? "from " : "up to "}${cur}${one} / month` : null;
}

function DeadlineLine({ d }: { d: PublicDeadline }) {
  const who = d.audience === "ALL" ? "" : ` · ${levelLabels[d.audience]}`;
  const dates = [d.opensAt && `opens ${fmt(d.opensAt)}`, d.closesAt && `deadline ${fmt(d.closesAt)}`].filter(Boolean).join(", ");
  return (
    <li className="text-sm text-slate-700">
      <span className="font-medium text-slate-900">
        {d.intake}
        {who}:
      </span>{" "}
      {dates}
      {dates && d.note ? ". " : ""}
      {d.note}
    </li>
  );
}

function HousingItem({ h }: { h: PublicHousing }) {
  const p = price(h);
  return (
    <li className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <p className="font-semibold text-slate-900">{h.name}</p>
        {p && <p className="text-sm font-medium text-slate-700">{p}</p>}
      </div>
      {h.provider && <p className="text-xs text-slate-500">Run by {h.provider}</p>}
      {h.roomTypes && <p className="mt-2 text-sm text-slate-700">{h.roomTypes}</p>}
      {h.description && <p className="mt-1 text-sm leading-relaxed text-slate-600">{h.description}</p>}
      {h.audiences.length > 0 && (
        <p className="mt-2 text-xs text-slate-500">Open to: {h.audiences.map((a) => levelLabels[a]).join(", ")}</p>
      )}
      {h.deadlines.length > 0 && <ul className="mt-3 space-y-1 border-t border-slate-200 pt-3">{h.deadlines.map((d) => <DeadlineLine key={d.id} d={d} />)}</ul>}
      <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
        <span>Last checked: {fmt(h.lastCheckedAt)}</span>
        <a href={h.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
          Source
        </a>
        {h.applicationUrl && (
          <a href={h.applicationUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
            How to apply
          </a>
        )}
      </p>
    </li>
  );
}

function UniversityCard({ u }: { u: PublicUniversity }) {
  const badge = availability[u.offersHousing];
  const campus = u.campuses[0];
  const showOnMap = () => {
    if (!campus) return;
    window.dispatchEvent(
      new CustomEvent<FocusCampusDetail>(FOCUS_CAMPUS_EVENT, {
        detail: { lat: campus.lat, lng: campus.lng, label: u.shortName ?? u.name },
      }),
    );
    document.getElementById("neighborhood-explorer")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug text-slate-900">{u.name}</h3>
          {u.parentUniversity && <p className="text-sm text-slate-500">Part of {u.parentUniversity}</p>}
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${badge.className}`}>{badge.label}</span>
      </div>

      {u.fields.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {u.fields.map((f) => (
            <span key={f} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
              {studyFieldLabels[f]}
            </span>
          ))}
        </div>
      )}

      {campus && (
        <p className="mt-4 text-sm text-slate-700">
          <span className="font-medium text-slate-900">{campus.name}</span>
          {campus.address && <span className="text-slate-500"> · {campus.address}</span>}
          <button type="button" onClick={showOnMap} className="ml-2 font-medium text-blue-600 hover:underline">
            Show on map
          </button>
        </p>
      )}

      {u.housingSummary && <p className="mt-3 text-sm leading-relaxed text-slate-600">{u.housingSummary}</p>}

      {u.housing.length > 0 && <ul className="mt-4 space-y-3">{u.housing.map((h) => <HousingItem key={h.id} h={h} />)}</ul>}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-5 text-xs text-slate-500">
        {u.lastCheckedAt && <span>Last checked: {fmt(u.lastCheckedAt)}</span>}
        {u.housingPageUrl && (
          <a href={u.housingPageUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
            Official housing page
          </a>
        )}
        {u.website && (
          <a href={u.website} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">
            Website
          </a>
        )}
      </div>
    </article>
  );
}

export default function UniversitiesSection({ cityName, universities }: { cityName: string; universities: PublicUniversity[] }) {
  const [field, setField] = useState<StudyField | "ALL">("ALL");

  // Only offer chips for fields that at least one school in this city has.
  const availableFields = useMemo(() => {
    const present = new Set(universities.flatMap((u) => u.fields));
    return (Object.keys(studyFieldLabels) as StudyField[]).filter((f) => present.has(f));
  }, [universities]);

  const shown = field === "ALL" ? universities : universities.filter((u) => u.fields.includes(field));

  const chip = (value: StudyField | "ALL", label: string) => (
    <button
      key={value}
      type="button"
      onClick={() => setField(value)}
      aria-pressed={field === value}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
        field === value ? "bg-blue-600 text-white" : "bg-white text-slate-700 ring-1 ring-inset ring-slate-200 hover:ring-blue-300"
      }`}
    >
      {label}
    </button>
  );

  return (
    <section id="universities" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">Universities</span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Universities in {cityName} and their housing</h2>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            What each school offers for housing, checked against its official pages. Pick a field to see the schools that focus on it.
          </p>
        </div>

        {availableFields.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter by field of study">
            {chip("ALL", "All")}
            {availableFields.map((f) => chip(f, studyFieldLabels[f]))}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-2">
          {shown.map((u) => (
            <UniversityCard key={u.id} u={u} />
          ))}
        </div>
      </div>
    </section>
  );
}
