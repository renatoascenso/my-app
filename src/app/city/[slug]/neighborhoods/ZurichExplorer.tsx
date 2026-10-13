"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  getZurichListingsForQuartier,
  getZurichQuartierBySlug,
  zurichKreisLabels,
  zurichListings,
  zurichQuartiere,
} from "@/lib/zurichNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import zurichBoundaries from "@/lib/geo/zurichQuartiereBoundaries.json";
import type { Geometry } from "geojson";
import QuartierPanel, { QuartierEmptyPanel } from "./QuartierPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const quartierGeo = zurichBoundaries as Record<string, Geometry>;

// Stable reference: a new array on every render would make the map re-fly on each click.
const ZURICH_CENTER: [number, number] = [47.3769, 8.5417];

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

const kreisFilters: { value: number | "all"; label: string }[] = [
  { value: "all", label: "All of Zurich" },
  ...Object.keys(zurichKreisLabels).map((k) => ({ value: Number(k), label: `Kreis ${k}` })),
];

export default function ZurichExplorer() {
  const [kreisFilter, setKreisFilter] = useState<number | "all">("all");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() => getDefaultListingFilters(zurichListings));

  const selectedQuartier = selectedSlug ? getZurichQuartierBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings ? zurichListings : getZurichListingsForQuartier(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId ? zurichListings.find((l) => l.id === selectedListingId) : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedQuartier);
  const drawerAreaName = showAllListings ? "Zurich" : selectedQuartier?.name ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getZurichListingsForQuartier(slug)));
  }

  function handleShowListings() {
    if (!selectedQuartier) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getZurichListingsForQuartier(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(zurichListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      zurichQuartiere
        .filter((q) => kreisFilter === "all" || q.kreis === kreisFilter)
        .filter((q) => quartierGeo[q.slug])
        .map((q) => ({
          slug: q.slug,
          name: q.name,
          geometry: quartierGeo[q.slug],
          tooltipLines: [`Kreis ${q.kreis}`, `Room: ${q.rent}`, `Student fit: ${q.studentFit.toFixed(1)}/10`],
        })),
    [kreisFilter]
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
        {kreisFilters.map((k) => (
          <button
            key={k.value}
            type="button"
            onClick={() => setKreisFilter(k.value)}
            title={typeof k.value === "number" ? zurichKreisLabels[k.value] : undefined}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              kreisFilter === k.value
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {k.label}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Zurich&apos;s 12 districts and 34 quarters
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare Zurich&apos;s official statistical quarters by room prices, safety,
        and commute time to ETH and UZH before choosing where to live.
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
        {showAllListings ? "Hide all listings" : `Show all sample listings in Zurich (${zurichListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={ZURICH_CENTER}
            zoom={12}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. Quarter boundaries from the City of Zurich
            open data portal (data.stadt-zuerich.ch, CC0). Room prices are estimated ranges
            for a room in a shared flat; listings shown are samples, not real offers.
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
              badge={`Kreis ${selectedQuartier.kreis} · ${zurichKreisLabels[selectedQuartier.kreis]}`}
              commuteLabel="Commute to ETH/UZH"
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <QuartierEmptyPanel text="Hover or click a quarter to see quick stats. Oberstrass, Unterstrass, Wipkingen, Höngg, Langstrasse, Oerlikon and several other quarters have sample listings you can browse." />
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
