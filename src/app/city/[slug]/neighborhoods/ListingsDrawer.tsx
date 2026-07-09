"use client";

import { useState } from "react";
import type { Listing, ListingFilters } from "@/lib/lisbonMetro";
import SourceBadge from "./SourceBadge";
import ListingsFilterPanel from "./ListingsFilterPanel";
import HomeUniversityBadge from "./HomeUniversityBadge";

export default function ListingsDrawer({
  freguesiaName,
  allListings,
  filteredListings,
  filters,
  onChangeFilters,
  selectedListingId,
  onSelectListing,
  onClose,
}: {
  freguesiaName: string;
  allListings: Listing[];
  filteredListings: Listing[];
  filters: ListingFilters;
  onChangeFilters: (filters: ListingFilters) => void;
  selectedListingId: string | null;
  onSelectListing: (id: string | null) => void;
  onClose: () => void;
}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="animate-zoom-in-fade mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
            Prototype listings
          </p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">
            Listings in {freguesiaName}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          {allListings.length > 0 && (
            <button
              type="button"
              onClick={() => setShowFilters((v) => !v)}
              className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                showFilters
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              Filters
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close listings"
          >
            ✕
          </button>
        </div>
      </div>

      {allListings.length === 0 ? (
        <p className="mt-4 text-sm text-slate-600">
          No demo listings for this area yet — Avenidas Novas currently has
          prototype listings available.
        </p>
      ) : (
        <>
          {showFilters && (
            <ListingsFilterPanel
              allListings={allListings}
              filters={filters}
              onChange={onChangeFilters}
            />
          )}

          {filteredListings.length === 0 ? (
            <p className="mt-4 text-sm text-slate-600">
              No listings match your filters. Try clearing some of them.
            </p>
          ) : (
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredListings.map((listing) => {
                const isSelected = listing.id === selectedListingId;
                const isHousingAtlas = listing.source === "HousingAtlas";
                return (
                  <button
                    key={listing.id}
                    type="button"
                    onClick={() =>
                      onSelectListing(isSelected ? null : listing.id)
                    }
                    className={`flex flex-col rounded-xl border p-4 text-left shadow-sm transition ${
                      isHousingAtlas
                        ? "border-blue-600 bg-blue-50/40 ring-1 ring-blue-600"
                        : "border-slate-200 bg-white"
                    } ${isSelected ? "shadow-md ring-2 ring-blue-400" : "hover:shadow-md"}`}
                  >
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {listing.featured && (
                        <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                          Recommended
                        </span>
                      )}
                      {listing.homeUniversityFriendly && <HomeUniversityBadge />}
                    </div>
                    <p className="text-sm font-semibold text-slate-900">
                      {listing.title}
                    </p>
                    <p className="mt-1 text-lg font-bold text-slate-900">
                      {listing.currency}{listing.rent}
                      <span className="text-xs font-normal text-slate-500">/mo</span>
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-slate-500">{listing.type}</span>
                      <SourceBadge source={listing.source} />
                    </div>
                    {listing.riskNote && (
                      <p className="mt-2 text-xs font-medium text-amber-600">
                        ⚠ {listing.riskNote}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
