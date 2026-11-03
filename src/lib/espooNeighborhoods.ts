import type { Listing } from "./listings";

// Espoo's 7 major districts (suuralueet), the city's top-level statistical division.
// Boundaries: Helsingin seudun ympäristöpalvelut (HSY), Seutukartta, CC BY 4.0 — credited in EspooExplorer.
// Aalto University's Otaniemi campus, incl. the School of Business (Ekonominaukio 1), is in Suur-Tapiola.
// Room prices are estimated ranges; scores are editorial judgments.

export type EspooSuuralue = {
  slug: string;
  name: string;
  badge: string;
  lat: number;
  lng: number;
  description: string;
  rent: string;
  safety: number;
  transport: number;
  nightlife: number;
  studentFit: number;
  commute: string;
  bestFor: string;
  caution: string;
  landmarks: string[];
};

type Base = Omit<EspooSuuralue, "lat" | "lng" | "badge"> & { at: [number, number]; metro?: boolean };
const s = ({ at, metro = false, ...rest }: Base): EspooSuuralue => ({
  ...rest,
  badge: metro ? "On the metro line" : "Off the metro line",
  lat: at[0],
  lng: at[1],
});

export const espooSuuralueet: EspooSuuralue[] = [
  s({ slug: "suur-tapiola", name: "Suur-Tapiola", metro: true, at: [60.17816, 24.79938],
    description: "Home to Aalto University's Otaniemi campus — with the School of Business, Väre and the Teekkarikylä student village — plus the garden city of Tapiola, the Keilaniemi business district and seaside Westend. Five metro stations and light rail line 15 run through the area.",
    rent: "€400–650/mo", safety: 9.0, transport: 9.4, nightlife: 5.5, studentFit: 9.4,
    commute: "Aalto campus on site; about 15 min by metro to central Helsinki", bestFor: "Aalto students who want to live on or next to campus", caution: "Most in-demand area for Hoas and AYY housing; studios have long queues",
    landmarks: ["Aalto University (Otaniemi)", "Aalto University School of Business", "Teekkarikylä student village", "Aalto-yliopisto metro station", "Tapiola centre", "Keilaniemi", "Westend"] }),
  s({ slug: "suur-leppavaara", name: "Suur-Leppävaara", at: [60.22914, 24.7791],
    description: "Espoo's busiest hub around Leppävaara station and the Sello shopping centre, with Laurea's Leppävaara campus and quieter neighbourhoods like Kilo and Laaksolahti. Light rail line 15 connects Leppävaara directly with Otaniemi.",
    rent: "€380–600/mo", safety: 8.6, transport: 9.0, nightlife: 5.0, studentFit: 8.2,
    commute: "About 15–20 min to Otaniemi on light rail line 15; 12 min by train to Helsinki", bestFor: "Laurea students and good links to both Aalto and Helsinki", caution: "No metro; check the walk to Leppävaara station or a light rail stop",
    landmarks: ["Leppävaara station", "Sello shopping centre", "Laurea (Leppävaara campus)", "Kilo"] }),
  s({ slug: "suur-matinkyla", name: "Suur-Matinkylä", metro: true, at: [60.15018, 24.76065],
    description: "Southern districts around the Iso Omena shopping centre and metro hub in Matinkylä, plus Olari, Henttaa and the newer Suurpelto area.",
    rent: "€380–580/mo", safety: 8.8, transport: 8.8, nightlife: 3.5, studentFit: 8.0,
    commute: "About 10 min by metro to Aalto-yliopisto", bestFor: "Lower rents a few metro stops from Aalto", caution: "Quiet in the evenings; Suurpelto is off the metro",
    landmarks: ["Iso Omena (Matinkylä)", "Olari", "Suurpelto"] }),
  s({ slug: "suur-espoonlahti", name: "Suur-Espoonlahti", metro: true, at: [60.15, 24.66],
    description: "South-western seaside suburbs around the Lippulaiva shopping centre, with Soukka, Kaitaa and Kivenlahti — the western end of the metro line since 2022.",
    rent: "€350–550/mo", safety: 8.6, transport: 8.0, nightlife: 3.0, studentFit: 7.2,
    commute: "About 20–25 min by metro to Aalto-yliopisto", bestFor: "Sea, nature and more space for the money", caution: "Longer commute; little student life",
    landmarks: ["Lippulaiva (Espoonlahti)", "Kivenlahti", "Soukka"] }),
  s({ slug: "suur-kauklahti", name: "Suur-Kauklahti", at: [60.19762, 24.57431],
    description: "Small western district around Kauklahti and Espoonkartano, with commuter trains towards Leppävaara and Helsinki.",
    rent: "€350–520/mo", safety: 8.8, transport: 6.6, nightlife: 1.5, studentFit: 5.8,
    commute: "About 35–45 min to Otaniemi (train + light rail or bus)", bestFor: "Quiet, low-cost living", caution: "Far from campus; few shared flats",
    landmarks: ["Kauklahti"] }),
  s({ slug: "vanha-espoo", name: "Vanha-Espoo", at: [60.25254, 24.60401],
    description: "Old Espoo: the administrative centre at Espoon keskus with the medieval Espoo Cathedral and a commuter-rail station, stretching north into the forests and lakes of Nuuksio National Park.",
    rent: "€350–520/mo", safety: 8.6, transport: 6.8, nightlife: 1.5, studentFit: 6.0,
    commute: "About 30–40 min to Otaniemi (train + light rail or bus)", bestFor: "Nature lovers who don't mind commuting", caution: "Long commute to Aalto; spread-out area",
    landmarks: ["Espoon keskus", "Espoo Cathedral", "Nuuksio National Park"] }),
  s({ slug: "pohjois-espoo", name: "Pohjois-Espoo", at: [60.3065, 24.68683],
    description: "Rural northern Espoo around Kalajärvi and Röylä: lakes, forests and detached houses, served by buses only.",
    rent: "€350–500/mo", safety: 9.0, transport: 4.6, nightlife: 1.0, studentFit: 4.6,
    commute: "About 45–60 min to Otaniemi by bus", bestFor: "Countryside living", caution: "Very few rentals for students; a car or long bus rides needed",
    landmarks: ["Kalajärvi"] }),
];

export type EspooSuuralueListing = Listing & { suuralueSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const espooListings: EspooSuuralueListing[] = [
  { id: "es-sample-otaniemi-room", suuralueSlug: "suur-tapiola", title: "Shared-flat room in Otaniemi", rent: 420, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.1885, lng: 24.8335, description: "Unfurnished room in a three-room student flat, a 5-minute walk to the Aalto campus. Water and internet included.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Internet included", "Shared kitchen", "Sauna in building"] },
  { id: "es-sample-otaniemi-studio", suuralueSlug: "suur-tapiola", title: "Studio next to Aalto-yliopisto metro", rent: 690, currency: "€", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.1835, lng: 24.8290, description: "Furnished studio near the School of Business and the metro.", rooms: 1, sizeSqm: 24, availableFrom: "1 Dec 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "es-sample-tapiola-room", suuralueSlug: "suur-tapiola", title: "Room in Tapiola", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.1765, lng: 24.8010, description: "Furnished room in a shared flat, close to Tapiola metro and shops.", rooms: 1, sizeSqm: 13, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Bills included"] },
  { id: "es-sample-leppavaara-room", suuralueSlug: "suur-leppavaara", title: "Room near Leppävaara station", rent: 530, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.2190, lng: 24.8150, description: "Furnished room with bills included, near Sello and light rail line 15 to Otaniemi.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Bills included", "Balcony"] },
  { id: "es-sample-matinkyla-room", suuralueSlug: "suur-matinkyla", title: "Room in Matinkylä", rent: 480, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.1590, lng: 24.7420, description: "Room in a shared flat, a short walk to Iso Omena and the metro.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Washing machine"] },
  { id: "es-sample-espoonlahti-studio", suuralueSlug: "suur-espoonlahti", title: "Studio in Espoonlahti", rent: 640, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 60.1480, lng: 24.6600, description: "Unfurnished studio near Lippulaiva and Espoonlahti metro.", rooms: 1, sizeSqm: 28, availableFrom: "1 Jan 2027", amenities: ["Kitchenette", "Private bathroom", "Sauna in building"] },
  { id: "es-sample-espoonkeskus-room", suuralueSlug: "vanha-espoo", title: "Room near Espoon keskus", rent: 440, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.2060, lng: 24.6620, description: "Room in a shared flat near the commuter-rail station.", rooms: 1, sizeSqm: 13, availableFrom: "1 Dec 2026", amenities: ["Furnished"] },
];

export function getEspooSuuralueBySlug(slug: string): EspooSuuralue | undefined {
  return espooSuuralueet.find((x) => x.slug === slug);
}

export function getEspooListingsForSuuralue(slug: string | null): EspooSuuralueListing[] {
  if (!slug) return [];
  return espooListings.filter((l) => l.suuralueSlug === slug);
}
