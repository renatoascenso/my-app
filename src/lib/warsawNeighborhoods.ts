import type { Listing } from "./listings";

// Warsaw's 18 districts (dzielnice).
// Boundaries: GUGiK, Państwowy Rejestr Granic (free for any use), credited in WarsawExplorer.
// Room prices are estimated ranges; scores are editorial judgments.

export type WarsawDzielnica = {
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

type Base = Omit<WarsawDzielnica, "lat" | "lng" | "badge"> & { at: [number, number]; right?: boolean };
const d = ({ at, right = false, ...rest }: Base): WarsawDzielnica => ({
  ...rest,
  badge: right ? "Right bank" : "Left bank",
  lat: at[0],
  lng: at[1],
});

export const warsawDzielnice: WarsawDzielnica[] = [
  d({ slug: "srodmiescie", name: "Śródmieście", at: [52.23286, 21.01905],
    description: "The city center: the rebuilt Old Town, the Palace of Culture, Nowy Świat, Powiśle and Łazienki Park — plus the University of Warsaw's main campus and the Warsaw University of Technology.",
    rent: "PLN 1,600–2,200/mo", safety: 8.2, transport: 10, nightlife: 9.6, studentFit: 8.8,
    commute: "University of Warsaw and Warsaw University of Technology on site", bestFor: "Living at the heart of student and city life", caution: "Warsaw's highest rents; busy nightlife streets",
    landmarks: ["University of Warsaw (Krakowskie Przedmieście)", "Warsaw University of Technology", "Old Town", "Palace of Culture and Science", "Nowy Świat", "Powiśle", "Łazienki Park", "Warszawa Centralna"] }),
  d({ slug: "mokotow", name: "Mokotów", at: [52.19278, 21.0416],
    description: "Warsaw's most populous district: leafy pre-war streets in Stary Mokotów near SGH, the Pole Mokotowskie park, and the Służewiec office district, along metro line M1.",
    rent: "PLN 1,400–1,800/mo", safety: 8.6, transport: 9.0, nightlife: 7.4, studentFit: 8.8,
    commute: "SGH on site; 10–20 min to the center on M1", bestFor: "SGH students and green, residential streets", caution: "Służewiec is busy and office-heavy",
    landmarks: ["SGH Warsaw School of Economics", "Służewiec (Mordor)"] }),
  d({ slug: "ochota", name: "Ochota", at: [52.21071, 20.97385],
    description: "A compact district with the University of Warsaw's Ochota science campus and the Medical University of Warsaw on Banacha street, plus many student flats.",
    rent: "PLN 1,300–1,700/mo", safety: 8.4, transport: 8.6, nightlife: 6.0, studentFit: 9.2,
    commute: "UW Ochota campus and Medical University on site; 15 min to the center", bestFor: "Science and medicine students", caution: "No metro; trams and trains instead",
    landmarks: ["University of Warsaw (Ochota campus)", "Medical University of Warsaw"] }),
  d({ slug: "wola", name: "Wola", at: [52.23451, 20.95712],
    description: "Warsaw's fast-changing business district around Rondo Daszyńskiego's skyscrapers, with new apartment blocks, the Warsaw Uprising Museum and metro line M2.",
    rent: "PLN 1,400–1,800/mo", safety: 8.2, transport: 9.0, nightlife: 6.5, studentFit: 7.8,
    commute: "10–15 min to the center on M2", bestFor: "Modern flats close to the center", caution: "Construction and office-heavy streets",
    landmarks: ["Rondo Daszyńskiego", "Warsaw Uprising Museum"] }),
  d({ slug: "zoliborz", name: "Żoliborz", at: [52.26877, 20.98176],
    description: "A green, calm and well-off district of interwar villas around Plac Wilsona on metro line M1.",
    rent: "PLN 1,400–1,800/mo", safety: 9.0, transport: 8.6, nightlife: 5.5, studentFit: 7.6,
    commute: "10–15 min to the center on M1", bestFor: "Quiet, leafy living near the center", caution: "Few cheap rooms",
    landmarks: ["Plac Wilsona"] }),
  d({ slug: "praga-polnoc", name: "Praga-Północ", right: true, at: [52.26462, 21.02747],
    description: "Across the Vistula: old tenement houses, the Koneser vodka-factory quarter, artists' studios and bars along Ząbkowska street, on metro line M2.",
    rent: "PLN 1,200–1,600/mo", safety: 6.6, transport: 8.4, nightlife: 8.0, studentFit: 8.0,
    commute: "10–15 min to the center on M2", bestFor: "Alternative scene and character", caution: "Some streets feel unsafe at night",
    landmarks: ["Koneser"] }),
  d({ slug: "praga-poludnie", name: "Praga-Południe", right: true, at: [52.23944, 21.08461],
    description: "Elegant Saska Kępa with its cafés, the National Stadium on the riverbank, and large residential estates further east.",
    rent: "PLN 1,200–1,600/mo", safety: 7.8, transport: 7.8, nightlife: 6.5, studentFit: 7.8,
    commute: "15–25 min to the center", bestFor: "Saska Kępa's village feel close to the center", caution: "Eastern parts are far from the metro",
    landmarks: ["Saska Kępa", "National Stadium"] }),
  d({ slug: "bielany", name: "Bielany", at: [52.29336, 20.92613],
    description: "A green northern district at the end of metro line M1, home to Cardinal Stefan Wyszyński University (UKSW) and the Academy of Physical Education (AWF).",
    rent: "PLN 1,150–1,500/mo", safety: 8.4, transport: 7.8, nightlife: 4.5, studentFit: 7.8,
    commute: "UKSW and AWF on site; 20–25 min to the center on M1", bestFor: "UKSW and AWF students; forests and parks", caution: "Quiet in the evenings",
    landmarks: ["UKSW", "AWF Warsaw", "Młociny"] }),
  d({ slug: "ursynow", name: "Ursynów", at: [52.13331, 21.0323],
    description: "A big southern residential district along metro line M1, home to SGGW (Warsaw University of Life Sciences) and the Kabaty forest.",
    rent: "PLN 1,200–1,550/mo", safety: 8.8, transport: 8.0, nightlife: 4.5, studentFit: 8.0,
    commute: "SGGW on site; 20–25 min to the center on M1", bestFor: "SGGW students and green space", caution: "Far from the center's nightlife",
    landmarks: ["SGGW (Warsaw University of Life Sciences)", "Kabaty Forest"] }),
  d({ slug: "targowek", name: "Targówek", right: true, at: [52.28267, 21.06328],
    description: "North-eastern estates around Bródno, connected to the center by metro line M2.",
    rent: "PLN 1,000–1,350/mo", safety: 7.4, transport: 7.8, nightlife: 3.5, studentFit: 6.8,
    commute: "20–25 min to the center on M2", bestFor: "Lower rents with a metro", caution: "Far from most campuses",
    landmarks: [] }),
  d({ slug: "bemowo", name: "Bemowo", at: [52.24597, 20.90405],
    description: "A western residential district on metro line M2, with the Military University of Technology.",
    rent: "PLN 1,100–1,450/mo", safety: 8.2, transport: 7.6, nightlife: 3.5, studentFit: 7.0,
    commute: "20–25 min to the center on M2", bestFor: "Newer flats at fair prices", caution: "Little nightlife",
    landmarks: [] }),
  d({ slug: "bialoleka", name: "Białołęka", right: true, at: [52.33195, 21.00405],
    description: "Warsaw's fast-growing northern district of new housing estates, with lower rents but long commutes.",
    rent: "PLN 950–1,300/mo", safety: 8.0, transport: 6.4, nightlife: 2.5, studentFit: 5.8,
    commute: "35–45 min to the center", bestFor: "Low rents in new buildings", caution: "No metro; long bus and tram rides",
    landmarks: [] }),
  d({ slug: "wlochy", name: "Włochy", at: [52.18075, 20.94765],
    description: "A south-western district around Chopin Airport, with trains toward the center.",
    rent: "PLN 1,100–1,400/mo", safety: 8.2, transport: 7.2, nightlife: 3.0, studentFit: 6.2,
    commute: "20–30 min to the center by train", bestFor: "Quiet living near the airport", caution: "Aircraft noise",
    landmarks: ["Chopin Airport"] }),
  d({ slug: "ursus", name: "Ursus", at: [52.19501, 20.88209],
    description: "A western district of former factory grounds and new housing, with trains into the center.",
    rent: "PLN 1,000–1,300/mo", safety: 8.0, transport: 6.8, nightlife: 2.5, studentFit: 5.8,
    commute: "25–35 min to the center by train", bestFor: "Lower rents", caution: "Far from student life",
    landmarks: [] }),
  d({ slug: "wilanow", name: "Wilanów", at: [52.1519, 21.10495],
    description: "A wealthy southern district with the baroque Wilanów Palace and the new Miasteczko Wilanów development.",
    rent: "PLN 1,300–1,700/mo", safety: 9.2, transport: 6.6, nightlife: 3.5, studentFit: 6.0,
    commute: "30–40 min to the center", bestFor: "Safe, modern neighborhoods", caution: "No metro; few student rooms",
    landmarks: ["Wilanów Palace"] }),
  d({ slug: "wawer", name: "Wawer", right: true, at: [52.19302, 21.17791],
    description: "Warsaw's largest district by area: forests and houses in the south-east, with suburban trains.",
    rent: "PLN 1,000–1,300/mo", safety: 8.4, transport: 6.0, nightlife: 2.0, studentFit: 5.0,
    commute: "35–45 min to the center", bestFor: "Forest and quiet", caution: "Very far from campuses",
    landmarks: [] }),
  d({ slug: "rembertow", name: "Rembertów", right: true, at: [52.26201, 21.15018],
    description: "A small, quiet eastern district with forests and houses.",
    rent: "PLN 950–1,250/mo", safety: 8.2, transport: 5.8, nightlife: 2.0, studentFit: 4.8,
    commute: "35–45 min to the center", bestFor: "Suburban calm", caution: "Far from everything students need",
    landmarks: [] }),
  d({ slug: "wesola", name: "Wesoła", right: true, at: [52.23241, 21.22531],
    description: "Warsaw's easternmost district, a green suburb with suburban trains.",
    rent: "PLN 950–1,250/mo", safety: 8.6, transport: 5.6, nightlife: 2.0, studentFit: 4.6,
    commute: "40–50 min to the center", bestFor: "Green suburban living", caution: "Very far from campuses",
    landmarks: [] }),
];

export type WarsawDzielnicaListing = Listing & { dzielnicaSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const warsawListings: WarsawDzielnicaListing[] = [
  { id: "wa-sample-centrum-studio", dzielnicaSlug: "srodmiescie", title: "Studio near Plac Zbawiciela", rent: 3300, currency: "PLN ", type: "Studio", source: SAMPLE_SOURCE, lat: 52.2300, lng: 21.0150, description: "Small furnished studio in the center, a short walk to the Warsaw University of Technology.", rooms: 1, sizeSqm: 25, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "wa-sample-powisle-room", dzielnicaSlug: "srodmiescie", title: "Room in Powiśle", rent: 1850, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 52.2390, lng: 21.0300, description: "Room in a shared flat near the University of Warsaw's main campus and the riverbank.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Registration possible"] },
  { id: "wa-sample-ochota-room", dzielnicaSlug: "ochota", title: "Room near Banacha", rent: 1450, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 52.2120, lng: 20.9850, description: "Room shared with medicine students near the Ochota campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Bills included"] },
  { id: "wa-sample-mokotow-room", dzielnicaSlug: "mokotow", title: "Room near SGH", rent: 1550, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, lat: 52.2050, lng: 21.0120, description: "Room in a pre-war building in Stary Mokotów, a short walk to SGH.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "wa-sample-zoliborz-room", dzielnicaSlug: "zoliborz", title: "Room near Plac Wilsona", rent: 1500, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, lat: 52.2680, lng: 20.9850, description: "Bright room in a quiet flat on metro line M1.", rooms: 1, sizeSqm: 13, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Balcony"] },
  { id: "wa-sample-praga-room", dzielnicaSlug: "praga-polnoc", title: "Room near Koneser", rent: 1300, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, lat: 52.2530, lng: 21.0420, description: "Room in a renovated tenement in Praga, close to the M2.", rooms: 1, sizeSqm: 14, availableFrom: "1 Nov 2026", amenities: ["Furnished"] },
  { id: "wa-sample-saska-room", dzielnicaSlug: "praga-poludnie", title: "Room in Saska Kępa", rent: 1400, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, lat: 52.2340, lng: 21.0550, description: "Room in a villa flat near Francuska street's cafés.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Garden"] },
  { id: "wa-sample-wola-room", dzielnicaSlug: "wola", title: "Room in a new building in Wola", rent: 1600, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, lat: 52.2310, lng: 20.9750, description: "Room in a modern flat near Rondo Daszyńskiego and the M2.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Elevator"] },
  { id: "wa-sample-sggw-room", dzielnicaSlug: "ursynow", title: "Room near SGGW", rent: 1250, currency: "PLN ", type: "Room", source: SAMPLE_SOURCE, lat: 52.1600, lng: 21.0450, description: "Room shared with SGGW students, on metro line M1.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Washing machine"] },
];

export function getWarsawDzielnicaBySlug(slug: string): WarsawDzielnica | undefined {
  return warsawDzielnice.find((x) => x.slug === slug);
}

export function getWarsawListingsForDzielnica(slug: string | null): WarsawDzielnicaListing[] {
  if (!slug) return [];
  return warsawListings.filter((l) => l.dzielnicaSlug === slug);
}
