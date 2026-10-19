import Link from "next/link";
import { requireAdmin } from "@/lib/admin/dal";
import { cities } from "@/lib/cities";
import { prisma } from "@/lib/prisma";
import { AdminHeader } from "../AdminHeader";
import { availabilityLabels, formatDate } from "./fields";

export const metadata = { title: "Universities" };

export default async function UniversitiesPage({ searchParams }: { searchParams: Promise<{ city?: string }> }) {
  const admin = await requireAdmin();
  const { city } = await searchParams;
  const selectedCity = cities.some((c) => c.slug === city) ? city : undefined;

  const universities = await prisma.university.findMany({
    where: selectedCity ? { citySlug: selectedCity } : undefined,
    include: { _count: { select: { campuses: true, housingOptions: true } } },
    orderBy: [{ citySlug: "asc" }, { name: "asc" }],
  });
  const counts = await prisma.university.groupBy({ by: ["citySlug"], _count: true });
  const countFor = (slug: string) => counts.find((c) => c.citySlug === slug)?._count ?? 0;
  const cityName = (slug: string) => cities.find((c) => c.slug === slug)?.name ?? slug;
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <AdminHeader admin={admin} />
      <main className="mx-auto w-full max-w-5xl px-4 py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Universities</h1>
            <p className="mt-1 text-sm text-slate-600">
              Universities, campuses and university housing. Only items marked “published” appear on the website.
            </p>
          </div>
          <Link
            href={`/admin/universities/new${selectedCity ? `?city=${selectedCity}` : ""}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Add university
          </Link>
        </div>

        <nav className="mt-6 flex flex-wrap gap-2">
          <Link
            href="/admin/universities"
            className={`rounded-full border px-3 py-1 text-sm ${!selectedCity ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white hover:bg-slate-50"}`}
          >
            All cities
          </Link>
          {sortedCities.map((c) => (
            <Link
              key={c.slug}
              href={`/admin/universities?city=${c.slug}`}
              className={`rounded-full border px-3 py-1 text-sm ${selectedCity === c.slug ? "border-blue-600 bg-blue-600 text-white" : "border-slate-300 bg-white hover:bg-slate-50"}`}
            >
              {c.name} <span className="opacity-70">{countFor(c.slug)}</span>
            </Link>
          ))}
        </nav>

        {universities.length === 0 ? (
          <p className="mt-10 rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600">
            No universities {selectedCity ? `in ${cityName(selectedCity)} ` : ""}yet. Use “Add university” to create the first one.
          </p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">University</th>
                  <th className="px-4 py-3">City</th>
                  <th className="px-4 py-3">Housing</th>
                  <th className="px-4 py-3">Campuses</th>
                  <th className="px-4 py-3">Last checked</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {universities.map((u) => (
                  <tr key={u.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <Link href={`/admin/universities/${u.id}`} className="font-medium text-blue-700 hover:underline">
                        {u.name}
                      </Link>
                      {u.shortName && <span className="ml-1 text-slate-500">({u.shortName})</span>}
                    </td>
                    <td className="px-4 py-3">{cityName(u.citySlug)}</td>
                    <td className="px-4 py-3">
                      {availabilityLabels[u.offersHousing]}
                      {u._count.housingOptions > 0 && <span className="text-slate-500"> · {u._count.housingOptions}</span>}
                    </td>
                    <td className="px-4 py-3">{u._count.campuses}</td>
                    <td className="px-4 py-3">{formatDate(u.lastCheckedAt)}</td>
                    <td className="px-4 py-3">
                      {u.published ? (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">Published</span>
                      ) : (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">Draft</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
