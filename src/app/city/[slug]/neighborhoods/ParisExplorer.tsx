"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  getParisArrondissementBySlug,
  getParisListingsForArrondissement,
  parisArrondissements,
  parisListings,
} from "@/lib/parisNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import parisBoundaries from "@/lib/geo/parisArrondissementsBoundaries.json";
import type { Geometry } from "geojson";
import QuartierPanel, { QuartierEmptyPanel } from "./QuartierPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const quartierGeo = parisBoundaries as Record<string, Geometry>;

// Stable reference: a new array on every render would make the map re-fly on each click.
const PARIS_CENTER: [number, number] = [48.8585, 2.3425];

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

type Bank = "left" | "right";
// The Seine splits Paris: arrondissements 5, 6, 7, 13, 14 and 15 are on the Left Bank.
const LEFT_BANK = new Set([5, 6, 7, 13, 14, 15]);
const bankOf = (n: number): Bank => (LEFT_BANK.has(n) ? "left" : "right");
const bankLabel: Record<Bank, string> = { left: "Left Bank (Rive gauche)", right: "Right Bank (Rive droite)" };

const bankFilters: { value: Bank | "all"; label: string }[] = [
  { value: "all", label: "All of Paris" },
  { value: "left", label: bankLabel.left },
  { value: "right", label: bankLabel.right },
];

export default function ParisExplorer() {
  const [bankFilter, setBankFilter] = useState<Bank | "all">("all");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() => getDefaultListingFilters(parisListings));

  const selectedQuartier = selectedSlug ? getParisArrondissementBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings ? parisListings : getParisListingsForArrondissement(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId ? parisListings.find((l) => l.id === selectedListingId) : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedQuartier);
  const drawerAreaName = showAllListings ? "Paris" : selectedQuartier?.name ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getParisListingsForArrondissement(slug)));
  }

  function handleShowListings() {
    if (!selectedQuartier) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getParisListingsForArrondissement(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(parisListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      parisArrondissements
        .filter((q) => bankFilter === "all" || bankOf(q.number) === bankFilter)
        .filter((q) => quartierGeo[q.slug])
        .map((q) => ({
          slug: q.slug,
          name: q.name,
          geometry: quartierGeo[q.slug],
          tooltipLines: [`Population: ${q.population.toLocaleString("en-US")}`, `Room: ${q.rent}`, `Student fit: ${q.studentFit.toFixed(1)}/10`],
        })),
    [bankFilter]
  );

  const listingPins: ListingPin[] | undefined = drawerVisible
    ? filteredListings.map((l) => ({
        id: l.id,
        lat: l.lat,
        lng: l.lng,
        label: `${l.currency}${l.rent}`,
        featured: false,
        selected: l.id === selectedListingId,
      }))
    : undefined;

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {bankFilters.map((k) => (
          <button
            key={k.value}
            type="button"
            onClick={() => setBankFilter(k.value)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              bankFilter === k.value
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {k.label}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Paris&apos;s 20 arrondissements
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare the 20 arrondissements by room prices, safety, and commute time to the
        Latin Quarter before choosing where to live.
      </p>

      <button
        type="button"
        onClick={handleShowAllListings}
        className={`mt-6 rounded-full border px-4 py-2 text-sm font-semibold transition ${
          showAllListings
            ? "border-blue-600 bg-blue-600 text-white"
            : "border-blue-200 text-blue-700 hover:bg-blue-50"
        }`}
      >
        {showAllListings ? "Hide all listings" : `Show all sample listings in Paris (${parisListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={PARIS_CENTER}
            zoom={12}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. Arrondissement boundaries and populations:
            IGN ADMIN EXPRESS (Licence Ouverte 2.0). Room prices are estimated ranges; listings
            shown are samples, not real offers.
          </p>

          {drawerVisible && (
            <ListingsDrawer
              freguesiaName={drawerAreaName}
              allListings={listingsForArea}
              filteredListings={filteredListings}
              filters={filters}
              onChangeFilters={setFilters}
              selectedListingId={selectedListingId}
              onSelectListing={setSelectedListingId}
              onClose={showAllListings ? handleShowAllListings : handleShowListings}
            />
          )}
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          {selectedQuartier ? (
            <QuartierPanel
              quartier={selectedQuartier}
              badge={`${bankLabel[bankOf(selectedQuartier.number)]} · ${selectedQuartier.population.toLocaleString("en-US")} residents`}
              commuteLabel="Commute to the Latin Quarter"
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <QuartierEmptyPanel text="Hover or click an arrondissement to see quick stats. The 5th, 13th, 14th, 11th and several others have sample listings you can browse." />
          )}
        </div>
      </div>

      {openListing && (
        <ListingDetailModal
          listing={openListing}
          allListings={listingsForArea}
          onSelectListing={setSelectedListingId}
          onClose={() => setSelectedListingId(null)}
        />
      )}
    </div>
  );
}
