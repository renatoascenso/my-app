"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  getMilanMunicipioBySlug,
  getMilanListingsForMunicipio,
  milanMunicipi,
  milanListings,
} from "@/lib/milanNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import milanBoundaries from "@/lib/geo/milanMunicipiBoundaries.json";
import type { Geometry } from "geojson";
import QuartierPanel, { QuartierEmptyPanel } from "./QuartierPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const quartierGeo = milanBoundaries as Record<string, Geometry>;

// Stable reference: a new array on every render would make the map re-fly on each click.
const MILAN_CENTER: [number, number] = [45.465, 9.185];

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

export default function MilanExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() => getDefaultListingFilters(milanListings));

  const selectedQuartier = selectedSlug ? getMilanMunicipioBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings ? milanListings : getMilanListingsForMunicipio(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId ? milanListings.find((l) => l.id === selectedListingId) : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedQuartier);
  const drawerAreaName = showAllListings ? "Milan" : selectedQuartier?.name ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getMilanListingsForMunicipio(slug)));
  }

  function handleShowListings() {
    if (!selectedQuartier) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getMilanListingsForMunicipio(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(milanListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      milanMunicipi
        .filter((q) => quartierGeo[q.slug])
        .map((q) => ({
          slug: q.slug,
          name: q.name,
          geometry: quartierGeo[q.slug],
          tooltipLines: [`Room: ${q.rent}`, `Student fit: ${q.studentFit.toFixed(1)}/10`],
        })),
    []
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
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Milan&apos;s 9 municipi
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare Milan&apos;s municipi by room prices, safety, and commute time to the
        Politecnico, Bocconi, the Statale and Bicocca before choosing where to live.
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
        {showAllListings ? "Hide all listings" : `Show all sample listings in Milan (${milanListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={MILAN_CENTER}
            zoom={11}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. Municipio boundaries: Comune di Milano,
            Open Data (CC BY 4.0), simplified for web display. Room prices are estimated
            ranges for a room in a shared flat; listings shown are samples, not real offers.
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
              badge={`Municipio ${selectedQuartier.number}`}
              commuteLabel="Commute to campus"
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <QuartierEmptyPanel text="Hover or click a municipio to see quick stats. Every municipio except Municipio 7 has sample listings — from Città Studi near the Politecnico to the Bocconi area." />
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
