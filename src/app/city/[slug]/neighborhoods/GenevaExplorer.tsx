"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  genevaDistricts,
  genevaListings,
  genevaSecteurs,
  getGenevaListingsForSecteur,
  getGenevaSecteurBySlug,
  type GenevaDistrict,
} from "@/lib/genevaNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import genevaBoundaries from "@/lib/geo/genevaSecteursBoundaries.json";
import type { Geometry } from "geojson";
import QuartierPanel, { QuartierEmptyPanel } from "./QuartierPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const quartierGeo = genevaBoundaries as Record<string, Geometry>;

// Stable reference: a new array on every render would make the map re-fly on each click.
const GENEVA_CENTER: [number, number] = [46.2065, 6.1435];

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

const districtFilters: { value: GenevaDistrict | "all"; label: string }[] = [
  { value: "all", label: "All of Geneva" },
  ...genevaDistricts.map((d) => ({ value: d, label: d })),
];

export default function GenevaExplorer() {
  const [districtFilter, setDistrictFilter] = useState<GenevaDistrict | "all">("all");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() => getDefaultListingFilters(genevaListings));

  const selectedQuartier = selectedSlug ? getGenevaSecteurBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings ? genevaListings : getGenevaListingsForSecteur(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId ? genevaListings.find((l) => l.id === selectedListingId) : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedQuartier);
  const drawerAreaName = showAllListings ? "Geneva" : selectedQuartier?.name ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getGenevaListingsForSecteur(slug)));
  }

  function handleShowListings() {
    if (!selectedQuartier) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getGenevaListingsForSecteur(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(genevaListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      genevaSecteurs
        .filter((q) => districtFilter === "all" || q.district === districtFilter)
        .filter((q) => quartierGeo[q.slug])
        .map((q) => ({
          slug: q.slug,
          name: q.name,
          geometry: quartierGeo[q.slug],
          tooltipLines: [q.district, `Room: ${q.rent}`, `Student fit: ${q.studentFit.toFixed(1)}/10`],
        })),
    [districtFilter]
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
        {districtFilters.map((k) => (
          <button
            key={k.value}
            type="button"
            onClick={() => setDistrictFilter(k.value)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
              districtFilter === k.value
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {k.label}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Geneva&apos;s 16 sectors
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare the City of Geneva&apos;s official statistical sectors by room prices,
        safety, and commute time to Uni Mail before choosing where to live.
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
        {showAllListings ? "Hide all listings" : `Show all sample listings in Geneva (${genevaListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={GENEVA_CENTER}
            zoom={13}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. Sector boundaries — Source : Portail des
            données SITG (État de Genève), téléchargé le 13.10.2026; simplified for web display.
            Room prices are estimated ranges for a room in a shared flat; listings shown are
            samples, not real offers.
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
              badge={selectedQuartier.district}
              commuteLabel="Commute to Uni Mail"
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <QuartierEmptyPanel text="Hover or click a sector to see quick stats. Jonction-Plainpalais, La Cluse-Philosophes, Délices-Grottes, Champel and several other sectors have sample listings you can browse." />
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
