import "server-only";
import type { HousingAvailability, StudyField, StudyLevel } from "@/generated/prisma/enums";
import { prisma } from "@/lib/prisma";

// Plain, serialisable shapes (dates as ISO strings) so they can be passed to client components.
export type PublicDeadline = {
  id: string;
  intake: string;
  audience: StudyLevel;
  opensAt: string | null;
  closesAt: string | null;
  note: string | null;
};

export type PublicHousing = {
  id: string;
  name: string;
  provider: string | null;
  description: string | null;
  roomTypes: string | null;
  audiences: StudyLevel[];
  priceMin: number | null;
  priceMax: number | null;
  currency: string | null;
  applicationUrl: string | null;
  sourceUrl: string;
  lat: number | null;
  lng: number | null;
  lastCheckedAt: string;
  deadlines: PublicDeadline[];
};

export type PublicCampus = { id: string; name: string; address: string | null; lat: number; lng: number; isMain: boolean };

export type PublicUniversity = {
  id: string;
  name: string;
  shortName: string | null;
  parentUniversity: string | null;
  fields: StudyField[];
  website: string | null;
  housingPageUrl: string | null;
  offersHousing: HousingAvailability;
  housingSummary: string | null;
  lastCheckedAt: string | null;
  campuses: PublicCampus[];
  housing: PublicHousing[];
};

const iso = (d: Date | null) => (d ? d.toISOString() : null);

/**
 * Published universities for a city, with campuses and published housing.
 * Returns [] if the database can't be reached, so a city page never breaks because of it.
 */
export async function getPublishedUniversities(citySlug: string): Promise<PublicUniversity[]> {
  try {
    const rows = await prisma.university.findMany({
      where: { citySlug, published: true },
      orderBy: { name: "asc" },
      include: {
        campuses: { orderBy: [{ isMain: "desc" }, { sortOrder: "asc" }] },
        housingOptions: {
          where: { published: true },
          orderBy: { name: "asc" },
          include: { deadlines: { orderBy: [{ closesAt: "asc" }, { intake: "asc" }] } },
        },
      },
    });
    return rows.map((u) => ({
      id: u.id,
      name: u.name,
      shortName: u.shortName,
      parentUniversity: u.parentUniversity,
      fields: u.fields,
      website: u.website,
      housingPageUrl: u.housingPageUrl,
      offersHousing: u.offersHousing,
      housingSummary: u.housingSummary,
      lastCheckedAt: iso(u.lastCheckedAt),
      campuses: u.campuses.map((c) => ({ id: c.id, name: c.name, address: c.address, lat: c.lat, lng: c.lng, isMain: c.isMain })),
      housing: u.housingOptions.map((h) => ({
        id: h.id,
        name: h.name,
        provider: h.provider,
        description: h.description,
        roomTypes: h.roomTypes,
        audiences: h.audiences,
        priceMin: h.priceMin,
        priceMax: h.priceMax,
        currency: h.currency,
        applicationUrl: h.applicationUrl,
        sourceUrl: h.sourceUrl,
        lat: h.lat,
        lng: h.lng,
        lastCheckedAt: h.lastCheckedAt.toISOString(),
        deadlines: h.deadlines.map((d) => ({
          id: d.id,
          intake: d.intake,
          audience: d.audience,
          opensAt: iso(d.opensAt),
          closesAt: iso(d.closesAt),
          note: d.note,
        })),
      })),
    }));
  } catch (error) {
    console.error(`Could not load universities for ${citySlug}:`, error);
    return [];
  }
}
