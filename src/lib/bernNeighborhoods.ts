import type { Listing } from "./listings";

// Bern's 32 statistical districts (Statistische Bezirke), grouped into the 6 Stadtteile.
// Boundaries: Geoinformation Stadt Bern, geoportal "Statistische Bezirke" —
// "Freie Nutzung. Quellenangabe ist Pflicht." (credited in BernExplorer).
// Rents are estimated ranges for a room in a shared flat; scores are editorial judgments.

export type BernBezirk = {
  slug: string;
  name: string;
  number: number;
  stadtteil: number;
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

export const bernStadtteile: Record<number, string> = {
  1: "Innere Stadt",
  2: "Länggasse-Felsenau",
  3: "Mattenhof-Weissenbühl",
  4: "Kirchenfeld-Schosshalde",
  5: "Breitenrain-Lorraine",
  6: "Bümpliz-Oberbottigen",
};

type Base = Omit<BernBezirk, "stadtteil">;
const q = (stadtteil: number, b: Base): BernBezirk => ({ ...b, stadtteil });

const OLD_TOWN_COMMUTE = "5–15 min walk to Uni Bern (main building)";

export const bernBezirke: BernBezirk[] = [
  // ─── I Innere Stadt (UNESCO old town) ───
  q(1, {
    slug: "schwarzes-quartier", name: "Schwarzes Quartier", number: 1, lat: 46.94866, lng: 7.45648,
    description: "The lower end of the old town around the Minster, including the Matte neighborhood down by the Aare. Historic, quiet and beautiful, with very few rooms on the market.",
    rent: "CHF 850–1,200/mo", safety: 8.8, transport: 8.4, nightlife: 6.5, studentFit: 6.5,
    commute: OLD_TOWN_COMMUTE, bestFor: "Old-town charm and the Aare on your doorstep", caution: "Rare listings, old buildings, steep lanes",
    landmarks: ["Bern Minster", "Matte"],
  }),
  q(1, {
    slug: "weisses-quartier", name: "Weisses Quartier", number: 2, lat: 46.94988, lng: 7.45499,
    description: "Part of the arcaded UNESCO old town, with shops, bars and cellar venues under the 'Lauben'. Central and atmospheric.",
    rent: "CHF 850–1,200/mo", safety: 8.6, transport: 8.8, nightlife: 7.5, studentFit: 6.8,
    commute: OLD_TOWN_COMMUTE, bestFor: "Living inside the old town", caution: "Small, pricey flats; weekend noise",
    landmarks: [],
  }),
  q(1, {
    slug: "gruenes-quartier", name: "Grünes Quartier", number: 3, lat: 46.94922, lng: 7.45073,
    description: "The heart of the old town's arcades, with shops and cafés. Lively by day, calmer at night.",
    rent: "CHF 850–1,200/mo", safety: 8.6, transport: 9.0, nightlife: 7.5, studentFit: 6.8,
    commute: OLD_TOWN_COMMUTE, bestFor: "Central location in the arcades", caution: "Very few rooms; old buildings",
    landmarks: [],
  }),
  q(1, {
    slug: "gelbes-quartier", name: "Gelbes Quartier", number: 4, lat: 46.94971, lng: 7.44673,
    description: "The upper old town around the Zytglogge clock tower and Kornhausplatz — shopping streets, trams and bars.",
    rent: "CHF 850–1,200/mo", safety: 8.4, transport: 9.4, nightlife: 8.0, studentFit: 7.0,
    commute: "5–10 min walk to Uni Bern", bestFor: "Bars, shops and trams in every direction", caution: "Busy and touristy",
    landmarks: ["Zytglogge", "Kornhausplatz"],
  }),
  q(1, {
    slug: "rotes-quartier", name: "Rotes Quartier", number: 5, lat: 46.9501, lng: 7.44225,
    description: "The western old town around the main station and Bubenbergplatz — Bern's transport hub, a few steps from the university.",
    rent: "CHF 850–1,200/mo", safety: 7.8, transport: 10, nightlife: 7.5, studentFit: 7.5,
    commute: "0–5 min walk to Uni Bern", bestFor: "Trains and trams, walking to class", caution: "Busy and noisy around the station",
    landmarks: ["Bern main station", "Hirschengraben"],
  }),
  // ─── II Länggasse-Felsenau ───
  q(2, {
    slug: "engeried", name: "Engeried", number: 6, lat: 46.96197, lng: 7.44028,
    description: "A calm residential district north of the Länggasse, with green space and good bus links to the station and university.",
    rent: "CHF 700–1,000/mo", safety: 9.0, transport: 8.0, nightlife: 3.5, studentFit: 7.8,
    commute: "10–15 min to Uni Bern by bus or bike", bestFor: "Quiet living near the university", caution: "Little nightlife",
    landmarks: [],
  }),
  q(2, {
    slug: "felsenau", name: "Felsenau", number: 7, lat: 46.97549, lng: 7.44706,
    description: "A green district on the Aare loop of the Engehalbinsel, with river walks, forest and a mix of older and newer housing.",
    rent: "CHF 650–950/mo", safety: 9.0, transport: 7.4, nightlife: 2.5, studentFit: 6.8,
    commute: "15–20 min to Uni Bern by bus", bestFor: "Nature and the Aare", caution: "Further out, quieter evenings",
    landmarks: ["Engehalbinsel"],
  }),
  q(2, {
    slug: "neufeld", name: "Neufeld", number: 8, lat: 46.9619, lng: 7.4113,
    description: "A large, mostly green district on the edge of the Bremgartenwald forest, with sports facilities and scattered housing.",
    rent: "CHF 650–950/mo", safety: 9.0, transport: 7.2, nightlife: 2.0, studentFit: 6.5,
    commute: "15–20 min to Uni Bern by bus or bike", bestFor: "Forest runs and calm", caution: "Few rooms and limited services",
    landmarks: ["Bremgartenwald"],
  }),
  q(2, {
    slug: "laenggasse", name: "Länggasse", number: 9, lat: 46.95422, lng: 7.43785,
    description: "Bern's classic student quarter right behind the university, with cafés, small shops and many WGs. Walking distance to most lecture halls.",
    rent: "CHF 750–1,050/mo", safety: 8.8, transport: 8.8, nightlife: 6.5, studentFit: 9.5,
    commute: "0–10 min walk to Uni Bern", bestFor: "Living next to campus in a student neighborhood", caution: "The most competitive WG market in Bern",
    landmarks: ["University of Bern main building", "Unitobler"],
  }),
  q(2, {
    slug: "stadtbach", name: "Stadtbach", number: 10, lat: 46.95108, lng: 7.43352,
    description: "A small district between the station and the Länggasse, home to the UniS building and the Reitschule cultural center.",
    rent: "CHF 750–1,050/mo", safety: 8.2, transport: 9.2, nightlife: 7.5, studentFit: 9.0,
    commute: "0–5 min walk to Uni Bern", bestFor: "Walking to class and the station", caution: "Some noise around the Reitschule at night",
    landmarks: ["UniS", "Reitschule"],
  }),
  q(2, {
    slug: "muesmatt", name: "Muesmatt", number: 11, lat: 46.9542, lng: 7.42736,
    description: "A residential district west of the Länggasse with the vonRoll campus, shared by the University of Bern and PH Bern.",
    rent: "CHF 700–1,000/mo", safety: 8.8, transport: 8.6, nightlife: 5.0, studentFit: 9.0,
    commute: "vonRoll campus on site; 10 min to the main building", bestFor: "PH Bern and vonRoll students", caution: "Popular with students — rooms go fast",
    landmarks: ["vonRoll campus"],
  }),
  // ─── III Mattenhof-Weissenbühl ───
  q(3, {
    slug: "holligen", name: "Holligen", number: 12, lat: 46.93906, lng: 7.40897,
    description: "A large, mixed district in the west with housing estates, commercial areas and the Ausserholligen S-Bahn station.",
    rent: "CHF 650–950/mo", safety: 8.2, transport: 8.4, nightlife: 3.5, studentFit: 7.2,
    commute: "15–20 min to Uni Bern by tram or train", bestFor: "Lower rents with good rail links", caution: "Some busy roads and industrial areas",
    landmarks: ["Bern Ausserholligen station"],
  }),
  q(3, {
    slug: "weissenstein", name: "Weissenstein", number: 13, lat: 46.93873, lng: 7.42236,
    description: "A quiet residential district of cooperatives and family housing in the south-west of the city.",
    rent: "CHF 650–950/mo", safety: 8.8, transport: 8.0, nightlife: 2.5, studentFit: 6.8,
    commute: "15–20 min to Uni Bern by tram", bestFor: "Calm, affordable living", caution: "Little going on in the evenings",
    landmarks: [],
  }),
  q(3, {
    slug: "mattenhof", name: "Mattenhof", number: 14, lat: 46.94409, lng: 7.42658,
    description: "A dense, lively district south-west of the station around the Inselspital university hospital, with cafés, shops and many WGs.",
    rent: "CHF 700–1,000/mo", safety: 8.4, transport: 9.0, nightlife: 6.5, studentFit: 8.6,
    commute: "10–15 min to Uni Bern; Inselspital on site", bestFor: "Medicine students and city living", caution: "Busy roads like Effingerstrasse",
    landmarks: ["Inselspital", "Eigerplatz", "Loryplatz"],
  }),
  q(3, {
    slug: "monbijou", name: "Monbijou", number: 15, lat: 46.94595, lng: 7.435,
    description: "A central district of offices and apartments between the station and the Aare slopes, close to the federal administration.",
    rent: "CHF 750–1,050/mo", safety: 8.6, transport: 9.0, nightlife: 5.5, studentFit: 7.6,
    commute: "5–15 min to Uni Bern on foot or by tram", bestFor: "Central and calm", caution: "Fewer shared flats among the office buildings",
    landmarks: [],
  }),
  q(3, {
    slug: "weissenbuehl", name: "Weissenbühl", number: 16, lat: 46.93763, lng: 7.43342,
    description: "A popular residential district in the south with older apartment buildings and good tram and S-Bahn connections.",
    rent: "CHF 700–1,000/mo", safety: 8.8, transport: 8.6, nightlife: 4.0, studentFit: 7.8,
    commute: "15 min to Uni Bern by tram", bestFor: "Good value and calm streets", caution: "Quiet in the evenings",
    landmarks: ["Bern Weissenbühl station"],
  }),
  q(3, {
    slug: "sandrain", name: "Sandrain", number: 17, lat: 46.94016, lng: 7.44375,
    description: "The district along the Aare below the Federal Palace, including the Marzili with its famous river swimming spot.",
    rent: "CHF 750–1,100/mo", safety: 8.8, transport: 8.0, nightlife: 5.0, studentFit: 7.6,
    commute: "10–15 min to Uni Bern on foot", bestFor: "Summer swims in the Aare at the Marzili", caution: "Limited supply and steep paths up to town",
    landmarks: ["Marzili"],
  }),
  // ─── IV Kirchenfeld-Schosshalde ───
  q(4, {
    slug: "kirchenfeld", name: "Kirchenfeld", number: 18, lat: 46.94031, lng: 7.4527,
    description: "An elegant district across the Kirchenfeld bridge with museums, embassies and stately apartment buildings.",
    rent: "CHF 800–1,150/mo", safety: 9.2, transport: 8.6, nightlife: 4.0, studentFit: 7.0,
    commute: "10–15 min to Uni Bern by tram", bestFor: "Museums, calm and beautiful streets", caution: "Among the pricier districts",
    landmarks: ["Bern Historical Museum", "Kirchenfeld bridge", "Thunplatz"],
  }),
  q(4, {
    slug: "gryphenhuebeli", name: "Gryphenhübeli", number: 19, lat: 46.94501, lng: 7.46027,
    description: "A small, upmarket residential district above the Aare, next to the Bear Park and the old town.",
    rent: "CHF 800–1,150/mo", safety: 9.2, transport: 8.0, nightlife: 3.5, studentFit: 6.8,
    commute: "15 min to Uni Bern by bus", bestFor: "Quiet streets close to the old town", caution: "Few rooms and higher prices",
    landmarks: ["Bear Park (Bärenpark)"],
  }),
  q(4, {
    slug: "brunnadern", name: "Brunnadern", number: 20, lat: 46.93629, lng: 7.46853,
    description: "A green residential district in the south-east, with villas, apartment buildings and quick access to the Aare.",
    rent: "CHF 750–1,050/mo", safety: 9.2, transport: 8.0, nightlife: 3.0, studentFit: 6.8,
    commute: "15–20 min to Uni Bern by tram or bus", bestFor: "Calm and green", caution: "Quiet, family-oriented",
    landmarks: [],
  }),
  q(4, {
    slug: "murifeld", name: "Murifeld", number: 21, lat: 46.94184, lng: 7.4826,
    description: "An eastern district around the Ostring, with housing estates, schools and good tram links into town.",
    rent: "CHF 700–1,000/mo", safety: 8.8, transport: 8.4, nightlife: 3.0, studentFit: 7.0,
    commute: "15–20 min to Uni Bern by tram", bestFor: "Good value with direct trams", caution: "Little nightlife",
    landmarks: ["Ostring"],
  }),
  q(4, {
    slug: "schosshalde", name: "Schosshalde", number: 22, lat: 46.94944, lng: 7.47262,
    description: "A residential district on the eastern slopes with the Rosengarten park overlooking the old town and the Zentrum Paul Klee.",
    rent: "CHF 750–1,100/mo", safety: 9.0, transport: 8.0, nightlife: 3.5, studentFit: 7.0,
    commute: "15–20 min to Uni Bern by bus", bestFor: "Views over the old town, parks", caution: "Hilly and bus-dependent",
    landmarks: ["Rosengarten", "Zentrum Paul Klee"],
  }),
  q(4, {
    slug: "beundenfeld", name: "Beundenfeld", number: 23, lat: 46.96275, lng: 7.4743,
    description: "A north-eastern district around the BernExpo exhibition grounds and the Allmend, with housing, offices and military grounds.",
    rent: "CHF 700–1,000/mo", safety: 8.6, transport: 8.4, nightlife: 4.0, studentFit: 7.0,
    commute: "15–20 min to Uni Bern by tram", bestFor: "Space and green areas", caution: "Event traffic around BernExpo",
    landmarks: ["BernExpo"],
  }),
  // ─── V Breitenrain-Lorraine ───
  q(5, {
    slug: "altenberg", name: "Altenberg", number: 24, lat: 46.95295, lng: 7.4528,
    description: "A small district on the north bank of the Aare facing the old town, with river paths and a few streets of apartments.",
    rent: "CHF 750–1,050/mo", safety: 9.0, transport: 7.6, nightlife: 4.0, studentFit: 7.4,
    commute: "10–15 min to Uni Bern on foot", bestFor: "Aare walks with old-town views", caution: "Steep, and few listings",
    landmarks: [],
  }),
  q(5, {
    slug: "spitalacker", name: "Spitalacker", number: 25, lat: 46.95737, lng: 7.45633,
    description: "A popular residential district around Viktoriaplatz with apartment buildings, cafés and good trams.",
    rent: "CHF 700–1,000/mo", safety: 9.0, transport: 8.8, nightlife: 5.5, studentFit: 8.2,
    commute: "10–15 min to Uni Bern by tram", bestFor: "Neighborhood feel close to the center", caution: "Competitive WG market",
    landmarks: ["Viktoriaplatz"],
  }),
  q(5, {
    slug: "breitfeld", name: "Breitfeld", number: 26, lat: 46.96791, lng: 7.46193,
    description: "A northern district around the Wankdorf stadium and station, with new office and housing developments.",
    rent: "CHF 650–950/mo", safety: 8.6, transport: 9.0, nightlife: 4.5, studentFit: 7.4,
    commute: "10–15 min to Uni Bern by train or tram", bestFor: "Good rail links and newer buildings", caution: "Match-day crowds near the stadium",
    landmarks: ["Wankdorf stadium", "Bern Wankdorf station"],
  }),
  q(5, {
    slug: "breitenrain", name: "Breitenrain", number: 27, lat: 46.96213, lng: 7.45175,
    description: "One of Bern's most popular neighborhoods for young people, with a lively square, cafés, bakeries and beautiful old buildings.",
    rent: "CHF 700–1,050/mo", safety: 9.0, transport: 8.8, nightlife: 6.5, studentFit: 8.6,
    commute: "10–15 min to Uni Bern by tram or bike", bestFor: "Cafés and neighborhood life", caution: "High demand for every free room",
    landmarks: ["Breitenrainplatz"],
  }),
  q(5, {
    slug: "lorraine", name: "Lorraine", number: 28, lat: 46.96275, lng: 7.44675,
    description: "A small, alternative and creative quarter on the Aare just across from the station, with bars, studios and riverside spots.",
    rent: "CHF 700–1,000/mo", safety: 8.4, transport: 8.6, nightlife: 7.5, studentFit: 9.0,
    commute: "5–10 min to Uni Bern on foot", bestFor: "Creative scene and the Aare", caution: "Older buildings; rooms go to people with connections",
    landmarks: ["Lorraine"],
  }),
  // ─── VI Bümpliz-Oberbottigen ───
  q(6, {
    slug: "buempliz", name: "Bümpliz", number: 29, lat: 46.93984, lng: 7.38893,
    description: "A former village in the west of Bern with a lively old center and large housing estates like the Tscharnergut. Among the most affordable areas of the city.",
    rent: "CHF 600–900/mo", safety: 7.8, transport: 8.2, nightlife: 3.5, studentFit: 7.0,
    commute: "15–20 min to Uni Bern by tram or S-Bahn", bestFor: "Lowest rents with direct transport", caution: "Further from the center and nightlife",
    landmarks: ["Tscharnergut"],
  }),
  q(6, {
    slug: "oberbottigen", name: "Oberbottigen", number: 30, lat: 46.93632, lng: 7.33922,
    description: "The rural western edge of Bern, plus the new Brünnen neighborhood and the Westside shopping and leisure center.",
    rent: "CHF 600–900/mo", safety: 8.8, transport: 7.2, nightlife: 2.5, studentFit: 6.0,
    commute: "20–25 min to Uni Bern by S-Bahn or tram", bestFor: "New buildings and space", caution: "Far from the university and the old town",
    landmarks: ["Westside", "Brünnen"],
  }),
  q(6, {
    slug: "stoeckacker", name: "Stöckacker", number: 31, lat: 46.94612, lng: 7.40342,
    description: "A small residential district between Bümpliz and the center, with housing estates and a direct S-Bahn station.",
    rent: "CHF 600–900/mo", safety: 8.0, transport: 8.2, nightlife: 2.5, studentFit: 7.0,
    commute: "15 min to Uni Bern by S-Bahn", bestFor: "Affordable rooms with fast trains", caution: "Few amenities",
    landmarks: [],
  }),
  q(6, {
    slug: "bethlehem", name: "Bethlehem", number: 32, lat: 46.95381, lng: 7.38092,
    description: "A large western district of housing estates and green spaces, including Gäbelbach, with trams and S-Bahn into the center.",
    rent: "CHF 600–900/mo", safety: 7.8, transport: 8.0, nightlife: 2.5, studentFit: 6.8,
    commute: "20–25 min to Uni Bern by tram or S-Bahn", bestFor: "Budget rooms", caution: "Far from campus life",
    landmarks: ["Bern Bümpliz Nord station", "Gäbelbach"],
  }),
];

export type BernBezirkListing = Listing & { bezirkSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const bernListings: BernBezirkListing[] = [
  { id: "be-sample-laenggasse-room", bezirkSlug: "laenggasse", title: "WG room behind the university", rent: 820, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 46.9545, lng: 7.4370, description: "Room in a 4-person student WG in the Länggasse, a few minutes' walk to the main building and Unitobler.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included", "Washing machine"] },
  { id: "be-sample-muesmatt-room", bezirkSlug: "muesmatt", title: "Room near the vonRoll campus", rent: 780, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 46.9555, lng: 7.4270, description: "Quiet room in a 3-person flat, a short walk to the vonRoll campus.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "be-sample-lorraine-room", bezirkSlug: "lorraine", title: "Room in the Lorraine", rent: 850, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, lat: 46.9560, lng: 7.4460, description: "Room in a creative WG near the Aare, a 10-minute walk to the station.", rooms: 1, sizeSqm: 15, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Balcony"] },
  { id: "be-sample-breitenrain-room", bezirkSlug: "breitenrain", title: "Room near Breitenrainplatz", rent: 880, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, lat: 46.9595, lng: 7.4510, description: "Bright room in an old building with high ceilings, shared with two students.", rooms: 1, sizeSqm: 16, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "be-sample-mattenhof-room", bezirkSlug: "mattenhof", title: "Room close to the Inselspital", rent: 800, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, lat: 46.9430, lng: 7.4270, description: "Room in a WG of medical students, minutes from the Inselspital.", rooms: 1, sizeSqm: 13, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "be-sample-weissenbuehl-studio", bezirkSlug: "weissenbuehl", title: "Studio in Weissenbühl", rent: 1150, currency: "CHF ", type: "Studio", source: SAMPLE_SOURCE, lat: 46.9395, lng: 7.4300, description: "Small studio with kitchenette near Weissenbühl station.", rooms: 1, sizeSqm: 24, availableFrom: "1 Sep 2026", amenities: ["Private bathroom", "Kitchenette"] },
  { id: "be-sample-buempliz-room", bezirkSlug: "buempliz", title: "Budget room in Bümpliz", rent: 650, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, lat: 46.9440, lng: 7.3880, description: "Simple room in a 2-person flat with the tram to the center at the door.", rooms: 1, sizeSqm: 12, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Bills included"] },
  { id: "be-sample-stadtbach-room", bezirkSlug: "stadtbach", title: "Room steps from UniS", rent: 900, currency: "CHF ", type: "Room", source: SAMPLE_SOURCE, lat: 46.9510, lng: 7.4335, description: "Room in an older apartment between the station and UniS.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished"], riskNote: "Higher caution" },
];

export function getBernBezirkBySlug(slug: string): BernBezirk | undefined {
  return bernBezirke.find((b) => b.slug === slug);
}

export function getBernListingsForBezirk(slug: string | null): BernBezirkListing[] {
  if (!slug) return [];
  return bernListings.filter((l) => l.bezirkSlug === slug);
}
