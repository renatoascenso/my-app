"use client";

import { useEffect, useState } from "react";
import type { Listing } from "@/lib/lisbonMetro";
import { getHousingAtlasListingDetail } from "@/lib/housingAtlasListings";
import SourceBadge from "./SourceBadge";
import HomeUniversityBadge from "./HomeUniversityBadge";
import HousingAtlasListingModal from "./HousingAtlasListingModal";

const scamTips = [
  "Never transfer money in advance, before viewing the property in person or via video call.",
  "Be extra careful if a listing seems unusually cheap or too good to be true.",
  "Never share personal documents (ID, bank details) before signing a lease.",
  "Don't sign a contract before you've viewed the property.",
];

function SimpleListingBody({ listing }: { listing: Listing }) {
  const [contactClicked, setContactClicked] = useState(false);

  return (
    <div>
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-blue-100 via-slate-100 to-blue-200">
        <div className="flex flex-col items-center gap-2 text-blue-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-12 w-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 11l8-7 8 7" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 10v10h12V10" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide">
            Prototype listing — no real photo available
          </span>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {listing.featured && (
            <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Recommended
            </span>
          )}
          {listing.homeUniversityFriendly && <HomeUniversityBadge />}
          <SourceBadge source={listing.source} />
        </div>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">{listing.title}</h3>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {listing.currency}{listing.rent}
          <span className="text-sm font-normal text-slate-500">/mo</span>
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Type</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{listing.type}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Rooms</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{listing.rooms}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Size</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{listing.sizeSqm} m²</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Available from</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{listing.availableFrom}</p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Amenities</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {listing.amenities.map((amenity) => (
              <span
                key={amenity}
                className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Description</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">{listing.description}</p>
        </div>

        {listing.riskNote && (
          <div className="mt-6 rounded-xl bg-amber-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-700">
              Caution
            </p>
            <p className="mt-1 text-sm text-slate-700">{listing.riskNote}</p>
          </div>
        )}

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">
            Protect yourself from scams
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
            {scamTips.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          {listing.source === "HousingAtlas" ? (
            <div>
              <button
                type="button"
                onClick={() => setContactClicked(true)}
                className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:px-6"
              >
                Contact via HousingAtlas
              </button>
              {contactClicked && (
                <p className="mt-2 text-xs text-slate-500">
                  This is a demo — messaging isn&apos;t connected yet in the
                  prototype.
                </p>
              )}
            </div>
          ) : (
            listing.sourceUrl && (
              <a
                href={listing.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-lg border border-slate-300 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto sm:px-6"
              >
                View on {listing.source} →
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default function ListingDetailModal({
  listing,
  allListings,
  onSelectListing,
  onClose,
}: {
  listing: Listing;
  allListings: Listing[];
  onSelectListing: (id: string) => void;
  onClose: () => void;
}) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const detail =
    listing.source === "HousingAtlas" ? getHousingAtlasListingDetail(listing.id) : undefined;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`animate-zoom-in-fade relative max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white shadow-xl ${
          detail ? "max-w-3xl" : "max-w-2xl"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close listing details"
          className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-500 shadow-sm transition hover:bg-white hover:text-slate-700"
        >
          ✕
        </button>

        {detail ? (
          <HousingAtlasListingModal
            listing={listing}
            detail={detail}
            similarListings={allListings.filter((l) => l.id !== listing.id)}
            onSelectListing={onSelectListing}
          />
        ) : (
          <SimpleListingBody listing={listing} />
        )}
      </div>
    </div>
  );
}
