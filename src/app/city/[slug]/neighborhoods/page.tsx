import Link from "next/link";
import { getCityBySlug } from "@/lib/cities";
import {
  neighborhoodExplorerCopy as explorerCopy,
  neighborhoodExplorersBySlug as explorersBySlug,
} from "../neighborhoodExplorers";

export default async function NeighborhoodsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  const hasExplorer = city ? city.slug in explorersBySlug : false;

  if (!city || !hasExplorer) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          Coming soon
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
          The neighborhood map is on its way
        </h1>
        <p className="mt-3 max-w-md text-base text-slate-600">
          {city
            ? `We're building a block-by-block view of ${city.name} covering rent, safety, and commute times.`
            : "We're building a block-by-block view of rent, safety, and commute times."}
        </p>
        <Link
          href={city ? `/city/${city.slug}` : "/"}
          className="mt-8 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to city overview
        </Link>
      </div>
    );
  }

  const copy = explorerCopy[city.slug];

  return (
    <div className="flex-1 bg-white text-slate-900">
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
              HA
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              HousingAtlas
            </span>
          </Link>
          <Link
            href={`/city/${city.slug}`}
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Back to {city.name} overview
          </Link>
        </div>
      </header>

      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Neighborhood explorer
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {copy.heading}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        {explorersBySlug[city.slug]()}
      </section>

      <section className="bg-blue-600">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Next: compare listings and platforms in {city.name}
          </h2>
          <Link
            href={`/city/${city.slug}#platforms`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            View housing channels →
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} HousingAtlas. Find housing abroad with
          confidence.
        </div>
      </footer>
    </div>
  );
}
