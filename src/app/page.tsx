"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { cities, findCityByQuery, slugify } from "@/lib/cities";

const valueProps = [
  {
    title: "Know where to search",
    text: "Find the relevant local platforms, university options, student residences, and trusted providers per city.",
  },
  {
    title: "Know what to avoid",
    text: "Spot scam patterns, suspicious deposit requests, hidden fees, unclear contracts, and repeated complaints.",
  },
  {
    title: "Know who to trust",
    text: "Compare platforms, landlords, listings, and student experiences before making a housing decision.",
  },
];

const mvpFeatures = [
  "City overview",
  "Neighborhood map",
  "Platform comparison",
  "Student experience chatbot",
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions =
    query.trim().length > 0
      ? cities.filter((city) =>
          city.name.toLowerCase().includes(query.trim().toLowerCase())
        )
      : [];

  return (
    <div className="flex-1 bg-white text-slate-900">
      {/* Nav */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              HA
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              HousingAtlas
            </span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a href="#cities" className="hover:text-blue-600">
              Cities
            </a>
            <a href="#value" className="hover:text-blue-600">
              Why HousingAtlas
            </a>
            <a href="#mvp" className="hover:text-blue-600">
              Preview
            </a>
          </nav>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
            Get early access
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-28">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Now in early access
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Find housing abroad with confidence.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Search your destination, understand the local housing market,
            compare trusted platforms, and avoid common rental risks before
            you commit.
          </p>

          <form
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              const trimmed = query.trim();
              if (!trimmed) return;
              const match = findCityByQuery(trimmed);
              const slug = match ? match.slug : slugify(trimmed);
              router.push(`/city/${slug}`);
            }}
          >
            <div className="relative flex-1">
              <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm ring-1 ring-transparent focus-within:border-blue-500 focus-within:ring-blue-500">
                <svg
                  className="mr-2 h-5 w-5 shrink-0 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
                  placeholder="Search Lisbon, St. Gallen, Milan..."
                  className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 top-full z-10 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-lg">
                  {suggestions.map((city) => (
                    <li key={city.name}>
                      <button
                        type="button"
                        onClick={() => {
                          setQuery(city.name);
                          setShowSuggestions(false);
                        }}
                        className="flex w-full items-center justify-between px-4 py-3 text-sm hover:bg-blue-50"
                      >
                        <span className="font-medium text-slate-900">
                          {city.name}
                        </span>
                        <span className="text-slate-500">{city.country}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Demo city cards */}
      <section id="cities" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Explore sample destinations
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A preview of the city-level insight HousingAtlas provides.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cities.map((city) => (
            <div
              key={city.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {city.name}
                  </h3>
                  <p className="text-sm text-slate-500">{city.country}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {city.rent}/mo
                </span>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    !
                  </span>
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-900">
                      Main risk:
                    </span>{" "}
                    {city.risk}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    ✓
                  </span>
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-900">
                      Best for:
                    </span>{" "}
                    {city.bestFor}
                  </p>
                </div>
              </div>

              <Link
                href={`/city/${city.slug}`}
                className="mt-6 block w-full rounded-lg border border-slate-200 py-2.5 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
              >
                View {city.name} guide
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Value propositions */}
      <section id="value" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Everything you need before you sign a lease
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {prop.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {prop.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MVP preview */}
      <section id="mvp" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            MVP preview
          </span>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            What we&apos;re building next
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mvpFeatures.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v18m6-18v18M3 9h18M3 15h18"
                  />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-slate-900">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} HousingAtlas. Find housing abroad with
          confidence.
        </div>
      </footer>
    </div>
  );
}
