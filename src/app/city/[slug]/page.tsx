import Link from "next/link";
import { getCityBySlug } from "@/lib/cities";
import CityDashboard from "./CityDashboard";
import ExchangeReportsQA from "./ExchangeReportsQA";
import { lisbonExchangeReports } from "@/lib/lisbonExchangeReports";
import { copenhagenExchangeReports } from "@/lib/copenhagenExchangeReports";
import type { ExchangeReportsData } from "@/lib/exchangeReports";
import {
  neighborhoodExplorerCopy,
  neighborhoodExplorersBySlug,
} from "./neighborhoodExplorers";

const exchangeReportsBySlug: Record<string, ExchangeReportsData> = {
  lisbon: lisbonExchangeReports,
  copenhagen: copenhagenExchangeReports,
};

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);

  if (!city) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-white px-6 py-24 text-center">
        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
          Coming soon
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-900">
          We don&apos;t have this city yet
        </h1>
        <p className="mt-3 max-w-md text-base text-slate-600">
          HousingAtlas currently covers a handful of demo destinations. Try
          Lisbon or St. Gallen instead.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to search
        </Link>
      </div>
    );
  }

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
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Back to search
          </Link>
        </div>
      </header>

      {city.dashboard ? (
        <>
          <CityDashboard
            name={city.name}
            country={city.country}
            slug={city.slug}
            dashboard={city.dashboard}
            neighborhoodExplorer={neighborhoodExplorersBySlug[city.slug]?.()}
            neighborhoodExplorerCopy={neighborhoodExplorerCopy[city.slug]}
          />
          {exchangeReportsBySlug[city.slug] && (
            <ExchangeReportsQA data={exchangeReportsBySlug[city.slug]} />
          )}
        </>
      ) : (
        <>
          <section className="bg-gradient-to-b from-blue-50 to-white">
            <div className="mx-auto max-w-6xl px-6 py-16">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
                {city.country}
              </span>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {city.name}
              </h1>
              <p className="mt-3 text-lg text-slate-600">
                Average monthly rent: {city.rent}
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-16">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                    !
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Main risk
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {city.risk}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    ✓
                  </span>
                  <div>
                    <h2 className="text-base font-semibold text-slate-900">
                      Best for
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {city.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} HousingAtlas. Find housing abroad with
          confidence.
        </div>
      </footer>
    </div>
  );
}
