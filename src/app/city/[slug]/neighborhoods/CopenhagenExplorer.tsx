"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import {
  getDistrictBySlug,
  getListingsForDistrictSlug,
  copenhagenDistricts,
  copenhagenListings,
} from "@/lib/copenhagenNeighborhoods";
import { getDefaultListingFilters, filterListings, type ListingFilters } from "@/lib/listings";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import copenhagenBoundaries from "@/lib/geo/copenhagenDistrictBoundaries.json";
import type { Geometry } from "geojson";
import DistrictPanel, { DistrictEmptyPanel } from "./DistrictPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const districtGeo = copenhagenBoundaries as Record<string, Geometry>;

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

export default function CopenhagenExplorer() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [showAllListings, setShowAllListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() =>
    getDefaultListingFilters(copenhagenListings)
  );

  const selectedDistrict = selectedSlug ? getDistrictBySlug(selectedSlug) : undefined;
  const listingsForArea = showAllListings
    ? copenhagenListings
    : getListingsForDistrictSlug(selectedSlug);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId
    ? copenhagenListings.find((l) => l.id === selectedListingId)
    : undefined;
  const drawerVisible = showAllListings || (showListings && !!selectedDistrict);
  const drawerAreaName = showAllListings ? "Copenhagen" : selectedDistrict?.name ?? "";

  function handleSelect(slug: string) {
    setSelectedSlug(slug);
    setShowListings(false);
    setShowAllListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getListingsForDistrictSlug(slug)));
  }

  function handleShowListings() {
    if (!selectedDistrict) return;
    const next = !showListings;
    setShowListings(next);
    setShowAllListings(false);
    setFilters(getDefaultListingFilters(getListingsForDistrictSlug(selectedSlug)));
    if (!next) setSelectedListingId(null);
  }

  function handleShowAllListings() {
    const next = !showAllListings;
    setShowAllListings(next);
    setShowListings(false);
    setFilters(getDefaultListingFilters(copenhagenListings));
    if (!next) setSelectedListingId(null);
  }

  const zones: ZoneShape[] = useMemo(
    () =>
      copenhagenDistricts
        .filter((d) => districtGeo[d.slug])
        .map((d) => ({
          slug: d.slug,
          name: d.name,
          geometry: districtGeo[d.slug],
          tooltipLines: [`Avg rent: ${d.rent}`, `Student fit: ${d.studentFit.toFixed(1)}/10`],
        })),
    []
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
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Copenhagen Districts
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        Compare Copenhagen's official bydele plus Frederiksberg — home to the
        CBS campus — by rent, safety, and commute time to CBS before choosing
        where to live.
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
          : `Show all listings in Copenhagen (${copenhagenListings.length})`}
      </button>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          <LeafletZoneMap
            center={[55.6836, 12.5645]}
            zoom={12}
            zones={zones}
            selectedSlug={selectedSlug}
            onSelect={handleSelect}
            pins={listingPins}
            onSelectPin={setSelectedListingId}
          />
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors. District boundaries from
            the City of Copenhagen open data portal (opendata.dk) and
            Danmarks Adresseregister (Frederiksberg).
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
          {selectedDistrict ? (
            <DistrictPanel
              district={selectedDistrict}
              showListings={showListings}
              onShowListings={handleShowListings}
            />
          ) : (
            <DistrictEmptyPanel />
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
