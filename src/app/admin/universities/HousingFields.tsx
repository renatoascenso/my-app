import type { Campus, UniversityHousing } from "@/generated/prisma/client";
import { isoDate, todayIso } from "@/lib/admin/formFields";
import { Checkbox, Field, Input, Select, studyLevelLabels, TextArea } from "./fields";

const AUDIENCES = ["BACHELOR", "MASTER", "PHD", "EXCHANGE"] as const;

export function HousingFields({ housing, campuses }: { housing?: UniversityHousing; campuses: Campus[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="Name" hint="e.g. “Studentenwohnheim Bülachhof”.">
        <Input name="name" defaultValue={housing?.name} required />
      </Field>
      <Field label="Run by" hint="e.g. the university, WOKO, a foundation.">
        <Input name="provider" defaultValue={housing?.provider ?? ""} />
      </Field>
      <Field label="Nearest campus">
        <Select name="campusId" defaultValue={housing?.campusId ?? ""}>
          <option value="">—</option>
          {campuses.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Address">
        <Input name="address" defaultValue={housing?.address ?? ""} />
      </Field>
      <Field label="Latitude" hint="Needed for the map pin.">
        <Input name="lat" inputMode="decimal" defaultValue={housing?.lat ?? ""} />
      </Field>
      <Field label="Longitude">
        <Input name="lng" inputMode="decimal" defaultValue={housing?.lng ?? ""} />
      </Field>
      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium text-slate-800">Who can apply</legend>
        <div className="mt-2 flex flex-wrap gap-4">
          {AUDIENCES.map((a) => (
            <label key={a} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                name="audiences"
                value={a}
                defaultChecked={housing?.audiences.includes(a)}
                className="h-4 w-4 rounded border-slate-300"
              />
              {studyLevelLabels[a]}
            </label>
          ))}
        </div>
      </fieldset>
      <Field label="Room types" hint="e.g. “Single rooms with shared kitchen, studios”.">
        <Input name="roomTypes" defaultValue={housing?.roomTypes ?? ""} />
      </Field>
      <div className="grid grid-cols-3 gap-3">
        <Field label="Price from">
          <Input name="priceMin" inputMode="numeric" defaultValue={housing?.priceMin ?? ""} />
        </Field>
        <Field label="Price to">
          <Input name="priceMax" inputMode="numeric" defaultValue={housing?.priceMax ?? ""} />
        </Field>
        <Field label="Currency">
          <Input name="currency" placeholder="CHF" defaultValue={housing?.currency ?? ""} />
        </Field>
      </div>
      <Field label="Description" className="sm:col-span-2">
        <TextArea name="description" defaultValue={housing?.description ?? ""} />
      </Field>
      <Field label="Application link">
        <Input name="applicationUrl" type="url" placeholder="https://" defaultValue={housing?.applicationUrl ?? ""} />
      </Field>
      <Field label="Source link" hint="Official page this information comes from (required).">
        <Input name="sourceUrl" type="url" placeholder="https://" defaultValue={housing?.sourceUrl ?? ""} required />
      </Field>
      <Field label="Last checked">
        <Input name="lastCheckedAt" type="date" defaultValue={isoDate(housing?.lastCheckedAt) || todayIso()} required />
      </Field>
      <div className="flex items-end pb-2">
        <Checkbox name="published" label="Published (visible on the website)" defaultChecked={housing?.published} />
      </div>
    </div>
  );
}
