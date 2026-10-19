import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/admin/dal";
import { prisma } from "@/lib/prisma";
import { AdminHeader } from "../../../../AdminHeader";
import { ActionForm, DeleteButton } from "../../../ActionForm";
import { addDeadline, deleteDeadline, deleteHousing, updateHousing } from "../../../actions";
import { Card, Field, formatDate, Input, Select, studyLevelLabels } from "../../../fields";
import { HousingFields } from "../../../HousingFields";

export const metadata = { title: "Edit housing" };

export default async function EditHousingPage({ params }: { params: Promise<{ id: string; housingId: string }> }) {
  const admin = await requireAdmin();
  const { id, housingId } = await params;
  const housing = await prisma.universityHousing.findFirst({
    where: { id: housingId, universityId: id },
    include: {
      university: { include: { campuses: { orderBy: { sortOrder: "asc" } } } },
      deadlines: { orderBy: [{ closesAt: "asc" }, { intake: "asc" }] },
    },
  });
  if (!housing) notFound();

  return (
    <>
      <AdminHeader admin={admin} />
      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <Link href={`/admin/universities/${housing.universityId}`} className="text-sm text-blue-700 hover:underline">
          ← {housing.university.name}
        </Link>
        <h1 className="mt-2 text-2xl font-semibold">{housing.name}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Last saved by {housing.lastEditedBy ?? "—"} · last checked {formatDate(housing.lastCheckedAt)}
        </p>

        <Card title="Details">
          <ActionForm action={updateHousing}>
            <input type="hidden" name="id" value={housing.id} />
            <HousingFields housing={housing} campuses={housing.university.campuses} />
          </ActionForm>
        </Card>

        <Card
          title="Application deadlines"
          description="Add one line per intake and group — universities often have different dates for bachelor, master, PhD or exchange students."
        >
          {housing.deadlines.length > 0 && (
            <ul className="mb-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
              {housing.deadlines.map((d) => (
                <li key={d.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                  <div>
                    <p className="font-medium">
                      {d.intake} · {studyLevelLabels[d.audience]}
                    </p>
                    <p className="text-slate-600">
                      {d.opensAt && <>Opens {formatDate(d.opensAt)} · </>}
                      {d.closesAt ? <>Deadline {formatDate(d.closesAt)}</> : "No fixed deadline"}
                      {d.note && <> · {d.note}</>}
                    </p>
                  </div>
                  <DeleteButton action={deleteDeadline} id={d.id} label="Remove" confirmText="Remove this deadline?" />
                </li>
              ))}
            </ul>
          )}
          <ActionForm action={addDeadline} submitLabel="Add deadline" resetOnSuccess>
            <input type="hidden" name="housingId" value={housing.id} />
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Intake" hint="e.g. “Autumn semester 2027”.">
                <Input name="intake" required />
              </Field>
              <Field label="For">
                <Select name="audience" defaultValue="ALL">
                  {Object.entries(studyLevelLabels).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Applications open">
                <Input name="opensAt" type="date" />
              </Field>
              <Field label="Deadline">
                <Input name="closesAt" type="date" />
              </Field>
              <Field label="Note" hint="Optional, e.g. “Rolling allocation — apply as soon as you're admitted”." className="sm:col-span-2">
                <Input name="note" />
              </Field>
            </div>
          </ActionForm>
        </Card>

        <section className="mt-8 rounded-xl border border-red-200 bg-white p-5">
          <h2 className="font-semibold text-red-800">Delete housing option</h2>
          <div className="mt-3">
            <DeleteButton
              action={deleteHousing}
              id={housing.id}
              label="Delete housing option"
              confirmText={`Delete ${housing.name} and its deadlines? This can't be undone.`}
            />
          </div>
        </section>
      </main>
    </>
  );
}
