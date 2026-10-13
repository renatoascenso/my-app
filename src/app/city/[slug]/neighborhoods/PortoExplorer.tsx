"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  getPortoFreguesiaBySlug,
  getPortoListingsForFreguesia,
  portoFreguesias,
  portoListings,
} from "@/lib/portoNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import portoBoundaries from "@/lib/geo/portoFreguesiasBoundaries.json";
import type { Geometry } from "geojson";
import QuartierPanel, { QuartierEmptyPanel } from "./QuartierPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const quartierGeo = portoBoundaries as Record<string, Geometry>;

// Stable reference: a new array on every render would make the map re-fly on each click.
const PORTO_CENTER: [number, number] = [41.1595, -8.627];

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

export default function PortoExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() => getDefaultListingFilters(portoListings));

  const selectedQuartier = selectedSlug ? getPortoFreguesiaBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings ? portoListings : getPortoListingsForFreguesia(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId ? portoListings.find((l) => l.id === selectedListingId) : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedQuartier);
  const drawerAreaName = showAllListings ? "Porto" : selectedQuartier?.shortName ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getPortoListingsForFreguesia(slug)));
  }

  function handleShowListings() {
    if (!selectedQuartier) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getPortoListingsForFreguesia(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(portoListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      portoFreguesias
        .filter((q) => quartierGeo[q.slug])
        .map((q) => ({
          slug: q.slug,
          name: q.shortName,
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
        Porto&apos;s 7 parishes
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare Porto&apos;s official parishes (freguesias) by room prices, safety, and
        commute time to the U.Porto campuses before choosing where to live.
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
        {showAllListings ? "Hide all listings" : `Show all sample listings in Porto (${portoListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={PORTO_CENTER}
            zoom={13}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. Parish boundaries: CAOP2025 © Direção-Geral
            do Território (CC BY 4.0), simplified for web display. Room prices are estimated
            ranges for a room; listings shown are samples, not real offers.
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
              quartier={{ ...selectedQuartier, name: selectedQuartier.shortName }}
              badge={
                selectedQuartier.name === selectedQuartier.shortName
                  ? "Parish (freguesia)"
                  : `Parish union: ${selectedQuartier.name}`
              }
              commuteLabel="Commute to U.Porto"
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <QuartierEmptyPanel text="Hover or click a parish to see quick stats. Paranhos (Asprela campus), Lordelo do Ouro & Massarelos (Campo Alegre) and the historic center have sample listings you can browse." />
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
