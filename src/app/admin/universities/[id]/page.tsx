import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/dal";
import { todayIso } from "@/lib/admin/formFields";
import { getCityBySlug } from "@/lib/cities";
import { prisma } from "@/lib/prisma";
import { AdminHeader } from "../../AdminHeader";
import { ActionForm, DeleteButton } from "../ActionForm";
import {
  addCampus,
  addMention,
  deleteCampus,
  deleteMention,
  deleteUniversity,
  updateCampus,
  updateUniversity,
} from "../actions";
import { Card, Checkbox, Field, formatDate, Input, studyLevelLabels } from "../fields";
import { UniversityFields } from "../UniversityFields";

export const metadata = { title: "Edit university" };

function CampusFields({ campus }: { campus?: { name: string; address: string | null; lat: number; lng: number; isMain: boolean } }) {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <Field label="Campus name" className="sm:col-span-2">
        <Input name="name" defaultValue={campus?.name} required />
      </Field>
      <Field label="Latitude" hint="e.g. 47.3764">
        <Input name="lat" inputMode="decimal" defaultValue={campus?.lat} required />
      </Field>
      <Field label="Longitude" hint="e.g. 8.5480">
        <Input name="lng" inputMode="decimal" defaultValue={campus?.lng} required />
      </Field>
      <Field label="Address" className="sm:col-span-3">
        <Input name="address" defaultValue={campus?.address ?? ""} />
      </Field>
      <div className="flex items-end pb-2">
        <Checkbox name="isMain" label="Main campus" defaultChecked={campus?.isMain} />
      </div>
    </div>
  );
}

export default async function EditUniversityPage({ params }: { params: Promise<{ id: string }> }) {
  const admin = await requireAdmin();
  const { id } = await params;
  const university = await prisma.university.findUnique({
    where: { id },
    include: {
      campuses: { orderBy: [{ isMain: "desc" }, { sortOrder: "asc" }] },
      housingOptions: { include: { deadlines: true, campus: true }, orderBy: { name: "asc" } },
      platformMentions: { orderBy: { platformName: "asc" } },
    },
  });
  if (!university) notFound();
  const city = getCityBySlug(university.citySlug);

  return (
    <>
      <AdminHeader admin={admin} />
      <main className="mx-auto w-full max-w-4xl px-4 py-10">
        <Link href={`/admin/universities?city=${university.citySlug}`} className="text-sm text-blue-700 hover:underline">
          ← Universities in {city?.name ?? university.citySlug}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold">{university.name}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Last saved by {university.lastEditedBy ?? "—"} · last checked {formatDate(university.lastCheckedAt)}
        </p>

        <Card title="Details">
          <ActionForm action={updateUniversity}>
            <input type="hidden" name="id" value={university.id} />
            <UniversityFields university={university} />
          </ActionForm>
        </Card>

        <Card title="Campuses" description="Campuses appear as markers on the city's neighborhood map. Tip: right-click a place in Google Maps to copy its coordinates.">
          <div className="space-y-4">
            {university.campuses.map((campus) => (
              <div key={campus.id} className="rounded-lg border border-slate-200 p-4">
                <ActionForm action={updateCampus} submitLabel="Save campus">
                  <input type="hidden" name="id" value={campus.id} />
                  <CampusFields campus={campus} />
                </ActionForm>
                <div className="mt-3 flex justify-end">
                  <DeleteButton action={deleteCampus} id={campus.id} confirmText={`Delete the campus “${campus.name}”?`} />
                </div>
              </div>
            ))}
            <div className="rounded-lg border border-dashed border-slate-300 p-4">
              <p className="mb-3 text-sm font-medium">Add a campus</p>
              <ActionForm action={addCampus} submitLabel="Add campus" resetOnSuccess>
                <input type="hidden" name="universityId" value={university.id} />
                <CampusFields />
              </ActionForm>
            </div>
          </div>
        </Card>

        <Card title="University housing" description="Residences the university runs or officially offers. Each one can appear as a pin on the map.">
          {university.housingOptions.length > 0 && (
            <ul className="mb-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
              {university.housingOptions.map((h) => (
                <li key={h.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                  <div>
                    <Link href={`/admin/universities/${university.id}/housing/${h.id}`} className="font-medium text-blue-700 hover:underline">
                      {h.name}
                    </Link>
                    <p className="text-slate-500">
                      {h.audiences.length ? h.audiences.map((a) => studyLevelLabels[a]).join(", ") : "Audience not set"} ·{" "}
                      {h.deadlines.length} deadline{h.deadlines.length === 1 ? "" : "s"} · checked {formatDate(h.lastCheckedAt)}
                    </p>
                  </div>
                  {h.published ? (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">Published</span>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">Draft</span>
                  )}
                </li>
              ))}
            </ul>
          )}
          <Link
            href={`/admin/universities/${university.id}/housing/new`}
            className="inline-block rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            + Add housing option
          </Link>
        </Card>

        <Card
          title="Platforms the university lists"
          description="Housing platforms the university itself points students to — shown as “Listed by this university” on the city page. Only add one with a link to the university page that mentions it."
        >
          {university.platformMentions.length > 0 && (
            <ul className="mb-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
              {university.platformMentions.map((m) => (
                <li key={m.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                  <div>
                    <p className="font-medium">{m.platformName}</p>
                    <a href={m.sourceUrl} target="_blank" rel="noopener noreferrer" className="break-all text-blue-700 hover:underline">
                      {m.sourceUrl}
                    </a>
                    <p className="text-slate-500">Checked {formatDate(m.lastCheckedAt)}</p>
                  </div>
                  <DeleteButton action={deleteMention} id={m.id} label="Remove" confirmText={`Remove ${m.platformName}?`} />
                </li>
              ))}
            </ul>
          )}
          <ActionForm action={addMention} submitLabel="Add platform" resetOnSuccess>
            <input type="hidden" name="universityId" value={university.id} />
            <div className="grid gap-3 sm:grid-cols-3">
              <Field label="Platform name" hint="As written on the city page, e.g. “WOKO”.">
                <Input name="platformName" required />
              </Field>
              <Field label="Source link" className="sm:col-span-2">
                <Input name="sourceUrl" type="url" placeholder="https://" required />
              </Field>
              <Field label="Last checked">
                <Input name="lastCheckedAt" type="date" defaultValue={todayIso()} required />
              </Field>
            </div>
          </ActionForm>
        </Card>

        <section className="mt-8 rounded-xl border border-red-200 bg-white p-5">
          <h2 className="font-semibold text-red-800">Delete university</h2>
          <p className="mt-1 text-sm text-slate-600">Also deletes its campuses, housing options, deadlines and platforms.</p>
          <div className="mt-3">
            <DeleteButton
              action={deleteUniversity}
              id={university.id}
              label="Delete university"
              confirmText={`Delete ${university.name} and everything attached to it? This can't be undone.`}
            />
          </div>
        </section>
      </main>
    </>
  );
}
