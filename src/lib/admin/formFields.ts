import "server-only";
import { HousingAvailability, StudyLevel } from "@/generated/prisma/client";
import { cities } from "@/lib/cities";

/** Thrown for invalid form input; the message is shown to the cofounder as-is. */
export class FieldError extends Error {}

const MAX_TEXT = 4000;

export function text(form: FormData, name: string, label: string): string {
  const value = String(form.get(name) ?? "").trim();
  if (!value) throw new FieldError(`${label} is required.`);
  if (value.length > MAX_TEXT) throw new FieldError(`${label} is too long.`);
  return value;
}

export function optionalText(form: FormData, name: string, label: string): string | null {
  const value = String(form.get(name) ?? "").trim();
  if (value.length > MAX_TEXT) throw new FieldError(`${label} is too long.`);
  return value || null;
}

/** Only http(s) links, so nothing like "javascript:" can end up on the public site. */
export function optionalUrl(form: FormData, name: string, label: string): string | null {
  const value = optionalText(form, name, label);
  if (!value) return null;
  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    throw new FieldError(`${label} must be a full link starting with https://`);
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw new FieldError(`${label} must start with https://`);
  }
  return parsed.toString();
}

export function url(form: FormData, name: string, label: string): string {
  const value = optionalUrl(form, name, label);
  if (!value) throw new FieldError(`${label} is required.`);
  return value;
}

export function optionalInt(form: FormData, name: string, label: string): number | null {
  const raw = String(form.get(name) ?? "").replace(/[\s,']/g, "");
  if (!raw) return null;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 0 || value > 100_000_000) throw new FieldError(`${label} must be a whole number.`);
  return value;
}

function coordinate(form: FormData, name: string, label: string, max: number, required: boolean): number | null {
  const raw = String(form.get(name) ?? "").trim().replace(",", ".");
  if (!raw) {
    if (required) throw new FieldError(`${label} is required.`);
    return null;
  }
  const value = Number(raw);
  if (!Number.isFinite(value) || Math.abs(value) > max) throw new FieldError(`${label} is not a valid coordinate.`);
  return value;
}

export const latitude = (form: FormData, required = true) => coordinate(form, "lat", "Latitude", 90, required);
export const longitude = (form: FormData, required = true) => coordinate(form, "lng", "Longitude", 180, required);

/** "YYYY-MM-DD" from <input type="date">, stored as midnight UTC. */
export function optionalDate(form: FormData, name: string, label: string): Date | null {
  const raw = String(form.get(name) ?? "").trim();
  if (!raw) return null;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) throw new FieldError(`${label} is not a valid date.`);
  const value = new Date(`${raw}T00:00:00Z`);
  if (Number.isNaN(value.getTime())) throw new FieldError(`${label} is not a valid date.`);
  return value;
}

export function date(form: FormData, name: string, label: string): Date {
  const value = optionalDate(form, name, label);
  if (!value) throw new FieldError(`${label} is required.`);
  return value;
}

export function citySlug(form: FormData): string {
  const value = String(form.get("citySlug") ?? "");
  if (!cities.some((c) => c.slug === value)) throw new FieldError("Choose a city.");
  return value;
}

export function availability(form: FormData): HousingAvailability {
  const value = String(form.get("offersHousing") ?? "");
  if (!(value in HousingAvailability)) throw new FieldError("Choose whether the university offers housing.");
  return value as HousingAvailability;
}

export function studyLevel(form: FormData, name: string): StudyLevel {
  const value = String(form.get(name) ?? "ALL");
  if (!(value in StudyLevel)) throw new FieldError("Choose who the deadline applies to.");
  return value as StudyLevel;
}

export function studyLevels(form: FormData, name: string): StudyLevel[] {
  return form
    .getAll(name)
    .map(String)
    .filter((v): v is StudyLevel => v in StudyLevel);
}

export const checkbox = (form: FormData, name: string) => form.get(name) === "on";

/** Today's date as "YYYY-MM-DD" for date inputs. */
export const todayIso = () => new Date().toISOString().slice(0, 10);
export const isoDate = (d: Date | null | undefined) => (d ? d.toISOString().slice(0, 10) : "");
