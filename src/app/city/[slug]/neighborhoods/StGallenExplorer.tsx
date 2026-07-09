"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  getQuartierBySlug,
  getListingsForQuartierSlug,
  stGallenQuartiere,
  stGallenListings,
  type Kreis,
} from "@/lib/stGallenNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import stGallenBoundaries from "@/lib/geo/stGallenQuartiereBoundaries.json";
import type { Geometry } from "geojson";
import QuartierPanel, { QuartierEmptyPanel } from "./QuartierPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const quartierGeo = stGallenBoundaries as Record<string, Geometry>;

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

const kreisFilters: { value: Kreis | "all"; label: string }[] = [
  { value: "all", label: "All of St.Gallen" },
  { value: "Westen", label: "Westen" },
  { value: "Centrum", label: "Centrum" },
  { value: "Osten", label: "Osten" },
];

export default function StGallenExplorer() {
  const [kreisFilter, setKreisFilter] = useState<Kreis | "all">("all");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() =>
    getDefaultListingFilters(stGallenListings)
  );

  const selectedQuartier = selectedSlug ? getQuartierBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings
    ? stGallenListings
    : getListingsForQuartierSlug(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId
    ? stGallenListings.find((l) => l.id === selectedListingId)
    : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedQuartier);
  const drawerAreaName = showAllListings ? "St.Gallen" : selectedQuartier?.name ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getListingsForQuartierSlug(slug)));
  }

  function handleShowListings() {
    if (!selectedQuartier) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getListingsForQuartierSlug(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(stGallenListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      stGallenQuartiere
        .filter((q) => kreisFilter === "all" || q.kreis === kreisFilter)
        .filter((q) => quartierGeo[q.slug])
        .map((q) => ({
          slug: q.slug,
          name: q.name,
          geometry: quartierGeo[q.slug],
          tooltipLines: [`Avg rent: ${q.rent}`, `Student fit: ${q.studentFit.toFixed(1)}/10`],
        })),
    [kreisFilter]
  );

  const listingPins: ListingPin[] | undefined = drawerVisible
    ? filteredListings.map((l) => ({
        id: l.id,
        lat: l.lat,
        lng: l.lng,
        label: l.source === "HousingAtlas" ? `HA ${l.currency}${l.rent}` : `${l.currency}${l.rent}`,
        featured: l.source === "HousingAtlas",
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
        St.Gallen Statistische Quartiere
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare St.Gallen&apos;s 31 official statistical quarters by rent,
        safety, and commute time to HSG before choosing where to live.
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
        {showAllListings
          ? "Hide all listings"
          : `Show all listings in St.Gallen (${stGallenListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={[47.4232, 9.3703]}
            zoom={13}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. Quarter boundaries from the
            City of St.Gallen open data portal (daten.stadt.sg.ch).
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
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <QuartierEmptyPanel />
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
