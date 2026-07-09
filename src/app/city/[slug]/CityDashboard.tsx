import Image from "next/image";
import Link from "next/link";
import type { CityDashboard as CityDashboardData } from "@/lib/cities";
import PlatformCard from "./PlatformCard";

function Icon({
  children,
  className = "h-5 w-5",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

const icons = {
  population: (
    <Icon>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M3 20c0-3.3 2.2-6 5-6s5 2.7 5 6" />
      <path d="M13.5 14.6c2.2.4 3.8 2.5 4.3 5.4" />
    </Icon>
  ),
  rent: (
    <Icon>
      <path d="M4 4h7l9 9-7 7-9-9V4z" />
      <circle cx="8.2" cy="8.2" r="1.3" fill="currentColor" stroke="none" />
    </Icon>
  ),
  languages: (
    <Icon>
      <path d="M4 5h11v8H9l-3 3v-3H4V5z" />
      <path d="M20 10v6h-3v3l-3-3h-2" />
    </Icon>
  ),
  transport: (
    <Icon>
      <rect x="3" y="7" width="13" height="8" rx="2" />
      <path d="M16 10h3l2 3v2h-2" />
      <circle cx="7.5" cy="17" r="1.4" />
      <circle cx="15.5" cy="17" r="1.4" />
    </Icon>
  ),
  safety: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </Icon>
  ),
  calendar: (
    <Icon>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
    </Icon>
  ),
  warning: (
    <Icon>
      <path d="M12 3l10 18H2L12 3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </Icon>
  ),
  shieldWarning: (
    <Icon>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M12 8v5" />
      <circle cx="12" cy="15.5" r="0.8" fill="currentColor" stroke="none" />
    </Icon>
  ),
  bolt: (
    <Icon>
      <path
        d="M13 2 5 13h5l-1 9 9-13h-5l0-7z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  ),
  document: (
    <Icon>
      <path d="M6 3h8l4 4v14H6V3z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 16h6" />
    </Icon>
  ),
  home: (
    <Icon>
      <path d="M4 11l8-7 8 7" />
      <path d="M6 10v10h12V10" />
      <path d="M10 20v-6h4v6" />
    </Icon>
  ),
};

const riskIconOrder = [
  icons.shieldWarning,
  icons.bolt,
  icons.document,
  icons.home,
];

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 max-w-2xl text-base text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function CityDashboard({
  name,
  country,
  slug,
  dashboard,
}: {
  name: string;
  country: string;
  slug: string;
  dashboard: CityDashboardData;
}) {
  const quickFacts = [
    { label: "Population", value: dashboard.quickFacts.population, icon: icons.population },
    { label: "Average rent", value: dashboard.quickFacts.averageRent, icon: icons.rent },
    { label: "Languages", value: dashboard.quickFacts.languages, icon: icons.languages },
    {
      label: "Public transport",
      value: dashboard.quickFacts.transportScore,
      icon: icons.transport,
    },
    { label: "Safety score", value: dashboard.quickFacts.safetyScore, icon: icons.safety },
  ];

  const hasHeroImage = Boolean(dashboard.heroImage);

  return (
    <div>
      {/* Hero */}
      <section
        className={`relative overflow-hidden ${
          hasHeroImage ? "" : "bg-gradient-to-b from-blue-50 to-white"
        }`}
      >
        {dashboard.heroImage && (
          <>
            <Image
              src={dashboard.heroImage}
              alt={`${name} skyline`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/50 to-slate-900/20" />
          </>
        )}
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <span
            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
              hasHeroImage
                ? "bg-white/15 text-white ring-1 ring-white/30"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {country}
          </span>
          <h1
            className={`mt-4 text-4xl font-bold tracking-tight sm:text-5xl ${
              hasHeroImage ? "text-white" : "text-slate-900"
            }`}
          >
            {name}
          </h1>
          <p
            className={`mt-4 max-w-2xl text-lg leading-relaxed ${
              hasHeroImage ? "text-slate-100" : "text-slate-600"
            }`}
          >
            {dashboard.description}
          </p>

          <div className="mt-8 grid gap-4 sm:max-w-xl sm:grid-cols-2">
            <div
              className={`rounded-2xl p-5 shadow-sm ${
                hasHeroImage
                  ? "border border-white/20 bg-white/10 backdrop-blur-sm"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <p
                className={`text-xs font-medium uppercase tracking-wide ${
                  hasHeroImage ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Average monthly rent
              </p>
              <p
                className={`mt-1 text-xl font-semibold ${
                  hasHeroImage ? "text-white" : "text-slate-900"
                }`}
              >
                {dashboard.quickFacts.averageRent}
              </p>
            </div>
            <div
              className={`rounded-2xl p-5 shadow-sm ${
                hasHeroImage
                  ? "border border-white/20 bg-white/10 backdrop-blur-sm"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <p
                className={`text-xs font-medium uppercase tracking-wide ${
                  hasHeroImage ? "text-slate-200" : "text-slate-500"
                }`}
              >
                Cost of living
              </p>
              <p
                className={`mt-1 text-xl font-semibold ${
                  hasHeroImage ? "text-white" : "text-slate-900"
                }`}
              >
                {dashboard.costOfLiving}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading title="Quick facts" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {fact.icon}
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-wide text-slate-500">
                {fact.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Housing market overview */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Housing market"
            title="Housing market overview"
            subtitle="How competitive the market is and what to plan around."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {[dashboard.marketOverview.peakDemand, dashboard.marketOverview.mainChallenges].map(
              (card, i) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {i === 0 ? icons.calendar : icons.warning}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Main housing channels */}
      <section id="platforms" className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Where to search"
          title="Main housing channels"
          subtitle="How the most-used platforms in this city compare, based on trust and typical audience."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dashboard.platforms.map((platform) => (
            <PlatformCard key={platform.name} platform={platform} />
          ))}
        </div>
      </section>

      {/* Risks */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Be prepared"
            title="Risks & things to know"
            subtitle="Common pitfalls other students have run into in this city."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {dashboard.risks.map((risk, i) => (
              <div
                key={risk.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  {riskIconOrder[i % riskIconOrder.length]}
                </div>
                <h3 className="mt-4 text-base font-semibold text-slate-900">
                  {risk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {risk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student experiences */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <SectionHeading
          eyebrow="Real experiences"
          title="What students are saying"
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {dashboard.studentQuotes.map((entry) => (
            <div
              key={entry.author}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="text-3xl font-serif text-blue-200">&ldquo;</span>
              <p className="-mt-4 flex-1 text-sm leading-relaxed text-slate-700">
                {entry.quote}
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                  {entry.author.charAt(0)}
                </div>
                <p className="text-xs font-medium text-slate-500">{entry.author}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Explore {name}&apos;s neighborhoods
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-blue-100">
            See how rent, safety, and commute times vary block by block before
            you choose where to live.
          </p>
          <Link
            href={`/city/${slug}/neighborhoods`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
          >
            Open neighborhood map →
          </Link>
        </div>
      </section>
    </div>
  );
}
