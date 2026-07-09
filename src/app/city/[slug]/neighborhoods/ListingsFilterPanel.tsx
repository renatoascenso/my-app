"use client";

import type { Listing, ListingFilters } from "@/lib/lisbonMetro";
import { getDefaultListingFilters, getListingFilterOptions } from "@/lib/lisbonMetro";
import InfoTooltip from "./InfoTooltip";

function CheckboxGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  if (options.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((option) => {
          const isChecked = selected.includes(option);
          return (
            <label
              key={option}
              className={`flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                isChecked
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => onToggle(option)}
                className="sr-only"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default function ListingsFilterPanel({
  allListings,
  filters,
  onChange,
}: {
  allListings: Listing[];
  filters: ListingFilters;
  onChange: (filters: ListingFilters) => void;
}) {
  const { types, sources, amenities, priceBounds } = getListingFilterOptions(allListings);

  function toggleValue(key: "types" | "sources" | "amenities", value: string) {
    const current = filters[key];
    const next = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  }

  return (
    <div className="animate-zoom-in-fade mt-4 space-y-5 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-900">Filter listings</p>
        <button
          type="button"
          onClick={() => onChange(getDefaultListingFilters(allListings))}
          className="text-xs font-semibold text-blue-600 hover:underline"
        >
          Clear all
        </button>
      </div>

      <div>
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
          <span>Price range</span>
          <span className="font-semibold text-slate-900">
            €{filters.minPrice} – €{filters.maxPrice}
          </span>
        </div>
        <div className="mt-3 space-y-2">
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            value={filters.minPrice}
            onChange={(e) => {
              const value = Math.min(Number(e.target.value), filters.maxPrice);
              onChange({ ...filters, minPrice: value });
            }}
            className="w-full accent-blue-600"
            aria-label="Minimum price"
          />
          <input
            type="range"
            min={priceBounds.min}
            max={priceBounds.max}
            value={filters.maxPrice}
            onChange={(e) => {
              const value = Math.max(Number(e.target.value), filters.minPrice);
              onChange({ ...filters, maxPrice: value });
            }}
            className="w-full accent-blue-600"
            aria-label="Maximum price"
          />
        </div>
      </div>

      <CheckboxGroup
        label="Type of offer"
        options={types}
        selected={filters.types}
        onToggle={(value) => toggleValue("types", value)}
      />

      <CheckboxGroup
        label="Platform"
        options={sources}
        selected={filters.sources}
        onToggle={(value) => toggleValue("sources", value)}
      />

      <label
        className={`flex w-fit cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition ${
          filters.homeUniversityFriendly
            ? "border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
        }`}
      >
        <input
          type="checkbox"
          checked={filters.homeUniversityFriendly}
          onChange={(e) =>
            onChange({ ...filters, homeUniversityFriendly: e.target.checked })
          }
          className="h-4 w-4 rounded border-slate-300 accent-blue-600"
        />
        Home university friendly
        <InfoTooltip text="The landlord has already hosted students from your home university and understands the needs of exchange students from your institution." />
      </label>

      <CheckboxGroup
        label="Amenities"
        options={amenities}
        selected={filters.amenities}
        onToggle={(value) => toggleValue("amenities", value)}
      />

      <label className="flex w-fit cursor-pointer items-center gap-2 text-xs font-medium text-slate-700">
        <input
          type="checkbox"
          checked={filters.availableNow}
          onChange={(e) => onChange({ ...filters, availableNow: e.target.checked })}
          className="h-4 w-4 rounded border-slate-300 accent-blue-600"
        />
        Available from now only
      </label>
    </div>
  );
}
