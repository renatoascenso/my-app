"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import {
  getFreguesiaBySlug,
  getMunicipalityBySlug,
  getDefaultListingFilters,
  filterListings,
  municipalities,
  lisbonFreguesias,
  avenidasNovasBairros,
  avenidasNovasListings,
  type Listing,
  type ListingFilters,
} from "@/lib/lisbonMetro";
import type { ZoneShape, ListingPin } from "./LeafletZoneMap";
import municipalityBoundaries from "@/lib/geo/municipalityBoundaries.json";
import freguesiaBoundaries from "@/lib/geo/freguesiaBoundaries.json";
import bairroBoundaries from "@/lib/geo/bairroBoundaries.json";
import type { Geometry } from "geojson";

const municipalityGeo = municipalityBoundaries as Record<string, Geometry>;
const freguesiaGeo = freguesiaBoundaries as Record<string, Geometry>;
const bairroGeo = bairroBoundaries as Record<string, Geometry>;
import FreguesiaPanel, {
  MunicipalityComingSoonPanel,
  MetroEmptyPanel,
} from "./RightPanel";
import ListingsDrawer from "./ListingsDrawer";
import ListingDetailModal from "./ListingDetailModal";

const LeafletZoneMap = dynamic(() => import("./LeafletZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[460px] items-center justify-center rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
      <p className="text-sm text-slate-500">Loading map…</p>
    </div>
  ),
});

type Level = "metro" | "lisbon" | "avenidas-zoom";

const levelCopy: Record<Level, { title: string; subtitle: string }> = {
  metro: {
    title: "Lisbon Metropolitan Area",
    subtitle:
      "Compare municipalities across the metro area by rent and student/expat fit before zooming into a city.",
  },
  lisbon: {
    title: "Lisbon",
    subtitle:
      "Compare rent, safety, commute, lifestyle, and student fit before choosing where to live.",
  },
  "avenidas-zoom": {
    title: "Avenidas Novas — Bairros",
    subtitle:
      "Preview Avenidas Novas at bairro level and browse prototype listings.",
  },
};

function getListingsForFreguesiaSlug(slug: string | null): Listing[] {
  return slug === "avenidas-novas" ? avenidasNovasListings : [];
}

export default function MetroExplorer() {
  const [level, setLevel] = useState<Level>("metro");
  const [selectedMunicipalitySlug, setSelectedMunicipalitySlug] = useState<string | null>(null);
  const [selectedFreguesiaSlug, setSelectedFreguesiaSlug] = useState<string | null>(null);
  const [showListings, setShowListings] = useState(false);
  const [selectedListingId, setSelectedListingId] = useState<string | null>(null);
  const [filters, setFilters] = useState<ListingFilters>(() =>
    getDefaultListingFilters(avenidasNovasListings)
  );

  const selectedMunicipality = selectedMunicipalitySlug
    ? getMunicipalityBySlug(selectedMunicipalitySlug)
    : undefined;
  const selectedFreguesia = selectedFreguesiaSlug
    ? getFreguesiaBySlug(selectedFreguesiaSlug)
    : undefined;

  function handleSelectMunicipality(slug: string) {
    const municipality = getMunicipalityBySlug(slug);
    if (!municipality) return;
    setSelectedMunicipalitySlug(slug);
    if (municipality.hasDetail) {
      setLevel("lisbon");
      setSelectedFreguesiaSlug((current) => current ?? "avenidas-novas");
    }
  }

  function handleSelectFreguesia(slug: string) {
    setSelectedFreguesiaSlug(slug);
    setShowListings(false);
    setSelectedListingId(null);
    setFilters(getDefaultListingFilters(getListingsForFreguesiaSlug(slug)));
    const freguesia = getFreguesiaBySlug(slug);
    if (freguesia?.hasBairroZoom) {
      setLevel("avenidas-zoom");
    }
  }

  function handleExploreBairros() {
    setLevel("avenidas-zoom");
  }

  function handleShowListings() {
    if (!selectedFreguesia) return;
    const nextShowListings = !showListings;
    setShowListings(nextShowListings);
    if (nextShowListings && selectedFreguesia.hasBairroZoom) {
      setLevel("avenidas-zoom");
    }
    if (!nextShowListings) {
      setSelectedListingId(null);
    }
  }

  function handleBack() {
    if (level === "avenidas-zoom") {
      setLevel("lisbon");
    } else if (level === "lisbon") {
      setLevel("metro");
    }
    setShowListings(false);
    setSelectedListingId(null);
  }

  const copy = levelCopy[level];
  const listingsForArea = getListingsForFreguesiaSlug(selectedFreguesiaSlug ?? null);
  const filteredListings = filterListings(listingsForArea, filters);
  const openListing = selectedListingId
    ? avenidasNovasListings.find((l) => l.id === selectedListingId)
    : undefined;

  const metroZones: ZoneShape[] = municipalities
    .filter((m) => municipalityGeo[m.slug])
    .map((m) => ({
      slug: m.slug,
      name: m.name,
      geometry: municipalityGeo[m.slug],
      disabled: !m.hasDetail,
      tooltipLines: [`Avg rent: ${m.rent}`, `Student/expat fit: ${m.studentFit.toFixed(1)}/10`],
    }));

  const freguesiaZones: ZoneShape[] = lisbonFreguesias
    .filter((f) => freguesiaGeo[f.slug])
    .map((f) => ({
      slug: f.slug,
      name: f.name,
      geometry: freguesiaGeo[f.slug],
      tooltipLines: [`Avg rent: ${f.rent}`, `Student/expat fit: ${f.studentFit.toFixed(1)}/10`],
    }));

  const bairroZones: ZoneShape[] = avenidasNovasBairros
    .filter((b) => bairroGeo[b.slug])
    .map((b) => ({
      slug: b.slug,
      name: b.name,
      geometry: bairroGeo[b.slug],
      approximate: true,
    }));

  const listingPins: ListingPin[] | undefined = showListings
    ? filteredListings.map((l) => ({
        id: l.id,
        lat: l.lat,
        lng: l.lng,
        label: l.source === "HousingAtlas" ? `HA €${l.rent}` : `€${l.rent}`,
        featured: l.source === "HousingAtlas",
        selected: l.id === selectedListingId,
      }))
    : undefined;

  return (
    <div>
      {/* Breadcrumb + back */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
        {level !== "metro" && (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            ← Back
          </button>
        )}
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
          <button
            type="button"
            onClick={() => {
              setLevel("metro");
              setShowListings(false);
              setSelectedListingId(null);
            }}
            className={`hover:text-blue-600 ${level === "metro" ? "font-semibold text-slate-900" : ""}`}
          >
            Lisbon Metropolitan Area
          </button>
          {level !== "metro" && (
            <>
              <span>/</span>
              <button
                type="button"
                onClick={() => {
                  setLevel("lisbon");
                  setShowListings(false);
                  setSelectedListingId(null);
                }}
                className={`hover:text-blue-600 ${level === "lisbon" ? "font-semibold text-slate-900" : ""}`}
              >
                Lisbon
              </button>
            </>
          )}
          {level === "avenidas-zoom" && (
            <>
              <span>/</span>
              <span className="text-slate-600">Avenidas Novas</span>
              <span>/</span>
              <span className="font-semibold text-slate-900">Bairros</span>
            </>
          )}
        </nav>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {copy.title}
      </h2>
      <p className="mt-2 max-w-2xl text-base text-slate-600">{copy.subtitle}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[65fr_35fr]">
        <div>
          {level === "metro" && (
            <LeafletZoneMap
              center={[38.71, -9.15]}
              zoom={10}
              zones={metroZones}
              selectedSlug={selectedMunicipalitySlug}
              onSelect={handleSelectMunicipality}
            />
          )}
          {level === "lisbon" && (
            <LeafletZoneMap
              center={[38.7369, -9.15]}
              zoom={12}
              zones={freguesiaZones}
              selectedSlug={selectedFreguesiaSlug}
              onSelect={handleSelectFreguesia}
            />
          )}
          {level === "avenidas-zoom" && (
            <LeafletZoneMap
              center={[38.7364, -9.1498]}
              zoom={15}
              zones={bairroZones}
              selectedSlug={null}
              onSelect={() => {}}
              pins={listingPins}
              onSelectPin={setSelectedListingId}
            />
          )}
          <p className="mt-3 text-xs text-slate-500">
            Map data © OpenStreetMap contributors.
            {level === "avenidas-zoom" &&
              " Bairro boundaries are illustrative (not officially surveyed) and listing pin positions are approximate."}
          </p>

          {showListings && selectedFreguesia && (
            <ListingsDrawer
              freguesiaName={selectedFreguesia.name}
              allListings={listingsForArea}
              filteredListings={filteredListings}
              filters={filters}
              onChangeFilters={setFilters}
              selectedListingId={selectedListingId}
              onSelectListing={setSelectedListingId}
              onClose={handleShowListings}
            />
          )}
        </div>

        <div className="lg:sticky lg:top-6 lg:self-start">
          {level === "metro" &&
            (selectedMunicipality && !selectedMunicipality.hasDetail ? (
              <MunicipalityComingSoonPanel municipality={selectedMunicipality} />
            ) : (
              <MetroEmptyPanel />
            ))}
          {(level === "lisbon" || level === "avenidas-zoom") && selectedFreguesia && (
            <FreguesiaPanel
              freguesia={selectedFreguesia}
              showListings={showListings}
              onShowListings={handleShowListings}
              onExploreBairros={
                selectedFreguesia.hasBairroZoom ? handleExploreBairros : undefined
              }
            />
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
