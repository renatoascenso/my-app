"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Prisma } from "@/generated/prisma/client";
import { requireAdmin } from "@/lib/admin/dal";
import {
  FieldError,
  availability,
  checkbox,
  citySlug,
  date,
  latitude,
  longitude,
  optionalDate,
  optionalInt,
  optionalText,
  optionalUrl,
  studyLevel,
  studyLevels,
  text,
  url,
} from "@/lib/admin/formFields";
import { prisma } from "@/lib/prisma";

export type FormState = { error?: string; ok?: string } | undefined;

/** Runs a mutation and turns validation / database errors into a message for the form. */
async function attempt(work: () => Promise<string | void>): Promise<FormState> {
  try {
    const ok = await work();
    return { ok: ok || "Saved." };
  } catch (error) {
    if (error instanceof FieldError) return { error: error.message };
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return { error: "Something with that name already exists here." };
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
      return { error: "This item no longer exists — reload the page." };
    }
    throw error;
  }
}

function id(form: FormData, name = "id"): string {
  const value = String(form.get(name) ?? "");
  if (!value) throw new FieldError("Missing id — reload the page.");
  return value;
}

async function touchCity(universityId: string) {
  const uni = await prisma.university.findUnique({ where: { id: universityId }, select: { citySlug: true } });
  revalidatePath("/admin/universities");
  revalidatePath(`/admin/universities/${universityId}`);
  if (uni) {
    revalidatePath(`/city/${uni.citySlug}`);
    revalidatePath(`/city/${uni.citySlug}/neighborhoods`);
  }
}

function universityFields(form: FormData) {
  return {
    citySlug: citySlug(form),
    name: text(form, "name", "Name"),
    shortName: optionalText(form, "shortName", "Short name"),
    website: optionalUrl(form, "website", "Website"),
    housingPageUrl: optionalUrl(form, "housingPageUrl", "Housing page"),
    offersHousing: availability(form),
    housingSummary: optionalText(form, "housingSummary", "Housing summary"),
    published: checkbox(form, "published"),
    lastCheckedAt: optionalDate(form, "lastCheckedAt", "Last checked"),
  };
}

// ─── Universities ───────────────────────────────────────────────────────────

export async function createUniversity(_prev: FormState, form: FormData): Promise<FormState> {
  const admin = await requireAdmin();
  let newId = "";
  const result = await attempt(async () => {
    const created = await prisma.university.create({ data: { ...universityFields(form), lastEditedBy: admin.email } });
    newId = created.id;
  });
  if (result?.error) return result;
  revalidatePath("/admin/universities");
  redirect(`/admin/universities/${newId}`);
}

export async function updateUniversity(_prev: FormState, form: FormData): Promise<FormState> {
  const admin = await requireAdmin();
  return attempt(async () => {
    const universityId = id(form);
    await prisma.university.update({ where: { id: universityId }, data: { ...universityFields(form), lastEditedBy: admin.email } });
    await touchCity(universityId);
  });
}

export async function deleteUniversity(form: FormData) {
  await requireAdmin();
  const universityId = id(form);
  const uni = await prisma.university.delete({ where: { id: universityId } });
  revalidatePath("/admin/universities");
  revalidatePath(`/city/${uni.citySlug}`);
  revalidatePath(`/city/${uni.citySlug}/neighborhoods`);
  redirect("/admin/universities");
}

// ─── Campuses ───────────────────────────────────────────────────────────────

function campusFields(form: FormData) {
  return {
    name: text(form, "name", "Campus name"),
    address: optionalText(form, "address", "Address"),
    lat: latitude(form) as number,
    lng: longitude(form) as number,
    isMain: checkbox(form, "isMain"),
  };
}

export async function addCampus(_prev: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  return attempt(async () => {
    const universityId = id(form, "universityId");
    const count = await prisma.campus.count({ where: { universityId } });
    await prisma.campus.create({ data: { ...campusFields(form), universityId, sortOrder: count } });
    await touchCity(universityId);
    return "Campus added.";
  });
}

export async function updateCampus(_prev: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  return attempt(async () => {
    const campus = await prisma.campus.update({ where: { id: id(form) }, data: campusFields(form) });
    await touchCity(campus.universityId);
  });
}

export async function deleteCampus(form: FormData) {
  await requireAdmin();
  const campus = await prisma.campus.delete({ where: { id: id(form) } });
  await touchCity(campus.universityId);
}

// ─── University housing ─────────────────────────────────────────────────────

async function housingFields(form: FormData, universityId: string) {
  const priceMin = optionalInt(form, "priceMin", "Minimum price");
  const priceMax = optionalInt(form, "priceMax", "Maximum price");
  if (priceMin !== null && priceMax !== null && priceMax < priceMin) {
    throw new FieldError("Maximum price must be at least the minimum price.");
  }
  const campusId = optionalText(form, "campusId", "Campus");
  if (campusId && !(await prisma.campus.findFirst({ where: { id: campusId, universityId } }))) {
    throw new FieldError("That campus doesn't belong to this university.");
  }
  const lat = latitude(form, false);
  const lng = longitude(form, false);
  if ((lat === null) !== (lng === null)) throw new FieldError("Enter both latitude and longitude, or neither.");
  return {
    name: text(form, "name", "Name"),
    provider: optionalText(form, "provider", "Provider"),
    campusId,
    address: optionalText(form, "address", "Address"),
    lat,
    lng,
    description: optionalText(form, "description", "Description"),
    audiences: studyLevels(form, "audiences"),
    roomTypes: optionalText(form, "roomTypes", "Room types"),
    priceMin,
    priceMax,
    currency: optionalText(form, "currency", "Currency"),
    applicationUrl: optionalUrl(form, "applicationUrl", "Application link"),
    sourceUrl: url(form, "sourceUrl", "Source link"),
    published: checkbox(form, "published"),
    lastCheckedAt: date(form, "lastCheckedAt", "Last checked"),
  };
}

export async function createHousing(_prev: FormState, form: FormData): Promise<FormState> {
  const admin = await requireAdmin();
  let newId = "";
  const universityId = String(form.get("universityId") ?? "");
  const result = await attempt(async () => {
    if (!universityId) throw new FieldError("Missing university — reload the page.");
    const created = await prisma.universityHousing.create({
      data: { ...(await housingFields(form, universityId)), universityId, lastEditedBy: admin.email },
    });
    newId = created.id;
    await touchCity(universityId);
  });
  if (result?.error) return result;
  redirect(`/admin/universities/${universityId}/housing/${newId}`);
}

export async function updateHousing(_prev: FormState, form: FormData): Promise<FormState> {
  const admin = await requireAdmin();
  return attempt(async () => {
    const housingId = id(form);
    const existing = await prisma.universityHousing.findUniqueOrThrow({ where: { id: housingId } });
    await prisma.universityHousing.update({
      where: { id: housingId },
      data: { ...(await housingFields(form, existing.universityId)), lastEditedBy: admin.email },
    });
    await touchCity(existing.universityId);
  });
}

export async function deleteHousing(form: FormData) {
  await requireAdmin();
  const housing = await prisma.universityHousing.delete({ where: { id: id(form) } });
  await touchCity(housing.universityId);
  redirect(`/admin/universities/${housing.universityId}`);
}

// ─── Deadlines ──────────────────────────────────────────────────────────────

export async function addDeadline(_prev: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  return attempt(async () => {
    const housingId = id(form, "housingId");
    const opensAt = optionalDate(form, "opensAt", "Opens");
    const closesAt = optionalDate(form, "closesAt", "Deadline");
    const note = optionalText(form, "note", "Note");
    if (!closesAt && !note) throw new FieldError("Enter a deadline date or a note (e.g. 'rolling allocation').");
    if (opensAt && closesAt && closesAt < opensAt) throw new FieldError("The deadline is before the opening date.");
    const housing = await prisma.universityHousing.findUniqueOrThrow({ where: { id: housingId } });
    await prisma.housingDeadline.create({
      data: { housingId, intake: text(form, "intake", "Intake"), audience: studyLevel(form, "audience"), opensAt, closesAt, note },
    });
    await touchCity(housing.universityId);
    revalidatePath(`/admin/universities/${housing.universityId}/housing/${housingId}`);
    return "Deadline added.";
  });
}

export async function deleteDeadline(form: FormData) {
  await requireAdmin();
  const deadline = await prisma.housingDeadline.delete({ where: { id: id(form) }, include: { housing: true } });
  await touchCity(deadline.housing.universityId);
  revalidatePath(`/admin/universities/${deadline.housing.universityId}/housing/${deadline.housingId}`);
}

// ─── Platform mentions ("Listed by <university>") ──────────────────────────

export async function addMention(_prev: FormState, form: FormData): Promise<FormState> {
  await requireAdmin();
  return attempt(async () => {
    const universityId = id(form, "universityId");
    await prisma.universityPlatformMention.create({
      data: {
        universityId,
        platformName: text(form, "platformName", "Platform name"),
        sourceUrl: url(form, "sourceUrl", "Source link"),
        lastCheckedAt: date(form, "lastCheckedAt", "Last checked"),
      },
    });
    await touchCity(universityId);
    return "Platform added.";
  });
}

export async function deleteMention(form: FormData) {
  await requireAdmin();
  const mention = await prisma.universityPlatformMention.delete({ where: { id: id(form) } });
  await touchCity(mention.universityId);
}
