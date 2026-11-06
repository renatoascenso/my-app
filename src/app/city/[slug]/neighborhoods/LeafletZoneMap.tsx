"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, GeoJSON, Tooltip, useMap } from "react-leaflet";
import type { Layer, PathOptions } from "leaflet";
import L from "leaflet";
import type { Geometry } from "geojson";
import { FOCUS_CAMPUS_EVENT, useCampusPins, type CampusPin, type FocusCampusDetail } from "../CampusPins";

export type ZoneShape = {
  slug: string;
  name: string;
  geometry: Geometry;
  disabled?: boolean;
  approximate?: boolean;
  tooltipLines?: string[];
};

export type ListingPin = {
  id: string;
  lat: number;
  lng: number;
  label: string;
  featured: boolean;
  selected: boolean;
};

function baseStyle(approximate: boolean, selected: boolean): PathOptions {
  if (selected) {
    return {
      color: "#1d4ed8",
      weight: 2,
      fillColor: "#2563eb",
      fillOpacity: 0.4,
      dashArray: approximate ? "6 4" : undefined,
    };
  }
  return {
    color: "#3b82f6",
    weight: 1.5,
    fillColor: "#3b82f6",
    fillOpacity: 0.14,
    dashArray: approximate ? "6 4" : undefined,
  };
}

function hoverStyle(approximate: boolean, selected: boolean): PathOptions {
  if (selected) return baseStyle(approximate, selected);
  return {
    color: "#2563eb",
    weight: 2,
    fillColor: "#3b82f6",
    fillOpacity: 0.28,
    dashArray: approximate ? "6 4" : undefined,
  };
}

function pinIconHtml(pin: ListingPin) {
  const bg = pin.featured ? "#2563eb" : "#ffffff";
  const color = pin.featured ? "#ffffff" : "#1e293b";
  const border = pin.selected ? "#93c5fd" : pin.featured ? "#ffffff" : "#cbd5e1";
  const ring = pin.selected ? "0 0 0 3px #93c5fd, 0 1px 3px rgba(15,23,42,0.25)" : "0 1px 3px rgba(15,23,42,0.25)";
  return `<span style="display:inline-flex;align-items:center;white-space:nowrap;background:${bg};color:${color};border:1.5px solid ${border};padding:3px 9px;border-radius:9999px;font-size:11px;font-weight:700;font-family:inherit;box-shadow:${ring};">${pin.label}</span>`;
}

const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function campusIconHtml(pin: CampusPin) {
  return `<span style="display:inline-flex;align-items:center;gap:4px;white-space:nowrap;background:#0f172a;color:#ffffff;border:1.5px solid #ffffff;padding:3px 9px;border-radius:9999px;font-size:11px;font-weight:700;font-family:inherit;box-shadow:0 1px 3px rgba(15,23,42,0.35);transform:translate(-50%,-50%);">&#127891; ${escapeHtml(pin.label)}</span>`;
}

/** Flies to a campus when a "Show on map" button in the universities section is clicked. */
function CampusFocusListener() {
  const map = useMap();
  useEffect(() => {
    const onFocus = (e: Event) => {
      const { lat, lng } = (e as CustomEvent<FocusCampusDetail>).detail;
      map.flyTo([lat, lng], Math.max(map.getZoom(), 14), { duration: 0.8 });
    };
    window.addEventListener(FOCUS_CAMPUS_EVENT, onFocus);
    return () => window.removeEventListener(FOCUS_CAMPUS_EVENT, onFocus);
  }, [map]);
  return null;
}

function ViewController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { duration: 0.8 });
  }, [center, zoom, map]);
  return null;
}

export default function LeafletZoneMap({
  center,
  zoom,
  zones,
  selectedSlug,
  onSelect,
  pins,
  onSelectPin,
}: {
  center: [number, number];
  zoom: number;
  zones: ZoneShape[];
  selectedSlug: string | null;
  onSelect: (slug: string) => void;
  pins?: ListingPin[];
  onSelectPin?: (id: string | null) => void;
}) {
  const campuses = useCampusPins();
  return (
    <div className="relative z-0 isolate overflow-hidden rounded-3xl border border-blue-100 shadow-sm">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom
        style={{ height: "460px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ViewController center={center} zoom={zoom} />
        <CampusFocusListener />

        {zones.map((zone) => {
          const isSelected = zone.slug === selectedSlug;
          const approximate = !!zone.approximate;
          return (
            <GeoJSON
              key={`${zone.slug}-${isSelected}`}
              data={zone.geometry}
              style={() => baseStyle(approximate, isSelected)}
              eventHandlers={{
                click: () => onSelect(zone.slug),
                mouseover: (e: { target: Layer & { setStyle: (s: PathOptions) => void } }) =>
                  e.target.setStyle(hoverStyle(approximate, isSelected)),
                mouseout: (e: { target: Layer & { setStyle: (s: PathOptions) => void } }) =>
                  e.target.setStyle(baseStyle(approximate, isSelected)),
              }}
            >
              <Tooltip sticky>
                <div className="text-xs">
                  <p className="font-semibold text-slate-900">
                    {zone.name}
                    {approximate && (
                      <span className="ml-1 font-normal text-slate-400">(approximate)</span>
                    )}
                  </p>
                  {zone.tooltipLines?.map((line) => (
                    <p key={line} className="text-slate-600">
                      {line}
                    </p>
                  ))}
                </div>
              </Tooltip>
            </GeoJSON>
          );
        })}

        {pins?.map((pin) => (
          <Marker
            key={pin.id}
            position={[pin.lat, pin.lng]}
            icon={L.divIcon({
              className: "",
              html: pinIconHtml(pin),
              iconAnchor: [0, 0],
            })}
            eventHandlers={{
              click: () => onSelectPin?.(pin.selected ? null : pin.id),
            }}
          />
        ))}

        {campuses.map((c) => (
          <Marker
            key={c.id}
            position={[c.lat, c.lng]}
            zIndexOffset={1000}
            icon={L.divIcon({ className: "", html: campusIconHtml(c), iconSize: [0, 0], iconAnchor: [0, 0] })}
          >
            <Tooltip direction="top" offset={[0, -12]}>
              <span className="text-xs font-semibold text-slate-900">{c.title}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
