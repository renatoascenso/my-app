import Link from "next/link";
import { averageFromRange, getCityBySlug, type Neighborhood } from "@/lib/cities";
import NeighborhoodMap from "./NeighborhoodMap";

function pickBest(
  neighborhoods: Neighborhood[],
  metric: (n: Neighborhood) => number,
  direction: "max" | "min" = "max"
): Neighborhood {
  return neighborhoods.reduce((best, n) =>
    direction === "max"
      ? metric(n) > metric(best)
        ? n
        : best
      : metric(n) < metric(best)
        ? n
        : best
  );
}

export default async function NeighborhoodsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  const neighborhoods = city?.neighborhoods;

  if (!city || !neighborhoods) {
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

  const comparisons = [
    {
      label: "Best student fit",
      winner: pickBest(neighborhoods, (n) => n.studentFit),
      detail: (n: Neighborhood) => `${n.studentFit.toFixed(1)}/10 student fit`,
    },
    {
      label: "Best transport",
      winner: pickBest(neighborhoods, (n) => n.transport),
      detail: (n: Neighborhood) => `${n.transport.toFixed(1)}/10 transport`,
    },
    {
      label: "Best nightlife",
      winner: pickBest(neighborhoods, (n) => n.nightlife),
      detail: (n: Neighborhood) => `${n.nightlife.toFixed(1)}/10 nightlife`,
    },
    {
      label: "Best calm area",
      winner: pickBest(neighborhoods, (n) => n.nightlife, "min"),
      detail: (n: Neighborhood) => `${n.nightlife.toFixed(1)}/10 nightlife (quietest)`,
    },
    {
      label: "Most premium",
      winner: pickBest(neighborhoods, (n) => averageFromRange(n.rent)),
      detail: (n: Neighborhood) => `~€${Math.round(averageFromRange(n.rent))}/mo avg rent`,
    },
    {
      label: "Most central",
      winner: pickBest(neighborhoods, (n) => averageFromRange(n.commute), "min"),
      detail: (n: Neighborhood) => `~${Math.round(averageFromRange(n.commute))} min avg commute`,
    },
  ];

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
            Neighborhood map
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Explore {city.name} neighborhoods
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Compare rent, safety, commute, lifestyle, and student fit before
            choosing where to live.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <NeighborhoodMap neighborhoods={neighborhoods} />
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            At a glance
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {comparisons.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {c.label}
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">
                  {c.winner.name}
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  {c.detail(c.winner)}
                </p>
              </div>
            ))}
          </div>
        </div>
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
