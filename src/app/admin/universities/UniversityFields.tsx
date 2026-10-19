import type { University } from "@/generated/prisma/client";
import { cities } from "@/lib/cities";
import { isoDate } from "@/lib/admin/formFields";
import { availabilityLabels, Checkbox, Field, Input, Select, TextArea } from "./fields";

export function UniversityFields({ university, defaultCity }: { university?: University; defaultCity?: string }) {
  const sortedCities = [...cities].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="City">
        <Select name="citySlug" defaultValue={university?.citySlug ?? defaultCity ?? ""} required>
          <option value="" disabled>
            Choose a city…
          </option>
          {sortedCities.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.name} ({c.country})
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Name" hint="Official English name, e.g. “ETH Zurich”.">
        <Input name="name" defaultValue={university?.name} required />
      </Field>
      <Field label="Short name" hint="Optional, e.g. “UZH”.">
        <Input name="shortName" defaultValue={university?.shortName ?? ""} />
      </Field>
      <Field label="Website">
        <Input name="website" type="url" placeholder="https://" defaultValue={university?.website ?? ""} />
      </Field>
      <Field label="Does it offer housing?">
        <Select name="offersHousing" defaultValue={university?.offersHousing ?? "UNKNOWN"}>
          {Object.entries(availabilityLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Field>
      <Field label="Official housing page" hint="The university's own accommodation page.">
        <Input name="housingPageUrl" type="url" placeholder="https://" defaultValue={university?.housingPageUrl ?? ""} />
      </Field>
      <Field label="Housing summary" hint="One or two sentences shown on the city page." className="sm:col-span-2">
        <TextArea name="housingSummary" defaultValue={university?.housingSummary ?? ""} />
      </Field>
      <Field label="Last checked" hint="When you last compared this with the official website.">
        <Input name="lastCheckedAt" type="date" defaultValue={isoDate(university?.lastCheckedAt)} />
      </Field>
      <div className="flex items-end pb-2">
        <Checkbox name="published" label="Published (visible on the website)" defaultChecked={university?.published} />
      </div>
    </div>
  );
}
