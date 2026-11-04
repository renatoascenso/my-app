import type { Listing } from "./listings";

// Singapore's 55 planning areas (URA Master Plan 2019).
// Boundaries: Master Plan 2019 Planning Area Boundary (No Sea), data.gov.sg, Singapore Open Data Licence v1.0 —
// credited in SingaporeExplorer. NUS Business School (Kent Ridge campus, home of CEMS) is in Queenstown.
// Commute times refer to NUS Kent Ridge. Rents are estimated monthly ranges for a room in a shared HDB flat or
// condo (SGD); scores are editorial judgments.

export type SingaporePlanningArea = {
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

type Kind = "west" | "central" | "city" | "heartland" | "far" | "nonres";
const BADGES: Record<Kind, string> = {
  west: "Near NUS",
  central: "Central",
  city: "City centre",
  heartland: "HDB heartland",
  far: "Far from NUS",
  nonres: "Few or no homes",
};
const RENTS: Record<Kind, string> = {
  west: "S$1,000–1,500/mo",
  central: "S$1,200–1,900/mo",
  city: "S$1,500–2,400/mo",
  heartland: "S$900–1,300/mo",
  far: "S$850–1,200/mo",
  nonres: "Few rentals",
};
const SCORES: Record<Kind, { safety: number; transport: number; nightlife: number; studentFit: number }> = {
  west: { safety: 9.2, transport: 9.0, nightlife: 5.5, studentFit: 9.0 },
  central: { safety: 9.2, transport: 9.2, nightlife: 7.0, studentFit: 7.6 },
  city: { safety: 9.0, transport: 9.6, nightlife: 8.8, studentFit: 6.8 },
  heartland: { safety: 9.2, transport: 8.4, nightlife: 4.0, studentFit: 6.8 },
  far: { safety: 9.2, transport: 7.6, nightlife: 3.0, studentFit: 5.4 },
  nonres: { safety: 9.0, transport: 4.0, nightlife: 1.0, studentFit: 2.0 },
};

type Entry = {
  slug: string;
  name: string;
  kind: Kind;
  at: [number, number];
  description: string;
  commute: string;
  bestFor?: string;
  caution?: string;
  landmarks?: string[];
} & Partial<Pick<SingaporePlanningArea, "rent" | "safety" | "transport" | "nightlife" | "studentFit">>;

const s = ({ kind, at, landmarks = [], bestFor, caution, ...rest }: Entry): SingaporePlanningArea => ({
  ...SCORES[kind],
  rent: RENTS[kind],
  bestFor: bestFor ?? (kind === "nonres" ? "Not a place to look for a room" : "Lower rents on the MRT network"),
  caution: caution ?? (kind === "nonres" ? "Very few or no residential homes" : "Long commute to Kent Ridge"),
  ...rest,
  landmarks,
  badge: BADGES[kind],
  lat: at[0],
  lng: at[1],
});

export const singaporePlanningAreas: SingaporePlanningArea[] = [
  // ── Around NUS ──
  s({ slug: "queenstown", name: "Queenstown", kind: "west", at: [1.28693, 103.78514],
    description: "NUS's Kent Ridge campus with the NUS Business School, University Town and Prince George's Park, plus one-north, Buona Vista, Dover, Pasir Panjang and the HDB estates of Queenstown.",
    rent: "S$1,100–1,700/mo", studentFit: 9.6, transport: 9.4,
    commute: "NUS Business School on site; campus shuttle buses", bestFor: "NUS students who want to live on or next to campus", caution: "On-campus places are limited; nearby rooms go fast before each semester",
    landmarks: ["NUS Business School", "University Town", "Prince George's Park Residences", "Kent Ridge MRT", "one-north", "Buona Vista"] }),
  s({ slug: "clementi", name: "Clementi", kind: "west", at: [1.31651, 103.76044],
    description: "A classic student town west of NUS with HDB flats, Clementi Mall and hawker centres, on the East-West Line.",
    commute: "10–15 min by bus or MRT + shuttle", bestFor: "Affordable HDB rooms close to NUS", caution: "Popular with students — book early",
    landmarks: ["Clementi MRT", "Clementi Mall"] }),
  s({ slug: "bukit-timah", name: "Bukit Timah", kind: "central", at: [1.32812, 103.79336],
    description: "Leafy, upmarket area with condos and landed homes, Holland Village's bars and the Bukit Timah Nature Reserve.",
    commute: "15–20 min by bus or MRT", bestFor: "Condos near Holland Village", caution: "Pricier than HDB areas",
    landmarks: ["Holland Village", "Bukit Timah Nature Reserve"] }),
  s({ slug: "jurong-east", name: "Jurong East", kind: "west", at: [1.32512, 103.73844],
    description: "The west's commercial hub with malls around Jurong East MRT interchange.",
    commute: "15–20 min by MRT and bus", bestFor: "Shopping and lower rents near NUS", caution: "Busy around the interchange", studentFit: 7.8,
    landmarks: ["Jurong East MRT", "JEM", "Westgate"] }),
  s({ slug: "bukit-merah", name: "Bukit Merah", kind: "central", at: [1.27446, 103.82163],
    description: "Older HDB estates and trendy Tiong Bahru between NUS and the city, with Telok Blangah and HarbourFront.",
    commute: "15–20 min by Circle Line or bus", bestFor: "Character estates between campus and the city", caution: "Older flats in parts", studentFit: 8.0,
    landmarks: ["Tiong Bahru", "HarbourFront", "Telok Blangah"] }),
  s({ slug: "tanglin", name: "Tanglin", kind: "central", at: [1.30761, 103.81511],
    description: "Embassies, the Botanic Gardens and expat condos west of Orchard.",
    commute: "15–20 min by bus", bestFor: "Green, upmarket living", caution: "Expensive; mostly condos", rent: "S$1,500–2,300/mo",
    landmarks: ["Singapore Botanic Gardens"] }),
  s({ slug: "bukit-batok", name: "Bukit Batok", kind: "heartland", at: [1.35603, 103.7526],
    description: "Western HDB town with nature parks and good bus links to Clementi and NUS.",
    commute: "25–30 min by bus or MRT", bestFor: "Cheap rooms in the west", caution: "Further from the city centre" }),
  s({ slug: "bukit-panjang", name: "Bukit Panjang", kind: "heartland", at: [1.36622, 103.77304],
    description: "HDB town on the Downtown Line and its own LRT, next to nature reserves.",
    commute: "30–35 min by MRT and bus", bestFor: "Nature and lower rents" }),
  s({ slug: "jurong-west", name: "Jurong West", kind: "far", at: [1.34396, 103.70482],
    description: "Large western HDB town near NTU and the Jurong Lake Gardens.",
    commute: "30–40 min by MRT and bus", bestFor: "NTU students and very low rents" }),
  s({ slug: "boon-lay", name: "Boon Lay", kind: "far", at: [1.31536, 103.70779],
    description: "Mostly industrial area around Boon Lay with some housing near the MRT.",
    commute: "30–35 min by MRT and bus" }),
  s({ slug: "choa-chu-kang", name: "Choa Chu Kang", kind: "far", at: [1.38749, 103.74849],
    description: "North-western HDB town on the North-South Line and the Bukit Panjang LRT.",
    commute: "35–45 min by MRT and bus" }),
  s({ slug: "tengah", name: "Tengah", kind: "far", at: [1.36211, 103.7252],
    description: "Singapore's newest HDB 'forest town', still being built in the west.",
    commute: "35–45 min by bus and MRT", caution: "Construction and limited amenities for now" }),

  // ── Central ──
  s({ slug: "novena", name: "Novena", kind: "central", at: [1.32609, 103.83723],
    description: "Medical hub around Tan Tock Seng Hospital and Novena Square, with condos and landed homes.",
    commute: "25–30 min by MRT", bestFor: "Central living near hospitals and malls" }),
  s({ slug: "newton", name: "Newton", kind: "central", at: [1.30851, 103.84099],
    description: "Condos around Newton hawker centre, just north of Orchard.",
    commute: "25 min by MRT", rent: "S$1,500–2,300/mo", landmarks: ["Newton Food Centre"] }),
  s({ slug: "toa-payoh", name: "Toa Payoh", kind: "heartland", at: [1.33646, 103.86248],
    description: "One of Singapore's oldest HDB towns, central and well connected.",
    commute: "30–35 min by MRT", bestFor: "Central HDB rooms at fair prices", caution: "Commute across town to Kent Ridge" }),
  s({ slug: "bishan", name: "Bishan", kind: "heartland", at: [1.35516, 103.83773],
    description: "Family-friendly HDB town with Bishan-Ang Mo Kio Park and a Circle Line interchange to Kent Ridge.",
    commute: "30–35 min on the Circle Line", bestFor: "Direct Circle Line ride to NUS", landmarks: ["Bishan-Ang Mo Kio Park"] }),
  s({ slug: "kallang", name: "Kallang", kind: "central", at: [1.31233, 103.86511],
    description: "The Sports Hub, Lavender and Bendemeer, between the city and Geylang.",
    commute: "30–35 min by MRT", landmarks: ["Singapore Sports Hub"] }),
  s({ slug: "geylang", name: "Geylang", kind: "heartland", at: [1.32116, 103.88985],
    description: "Famous for late-night food, with shophouses, HDB flats and Paya Lebar's offices.",
    commute: "35–40 min by MRT", bestFor: "Food and cheap rooms close to town", caution: "Red-light district in parts; check the exact street", safety: 8.0 }),
  s({ slug: "marine-parade", name: "Marine Parade", kind: "central", at: [1.2991, 103.89854],
    description: "Seafront estates and condos next to East Coast Park, on the new Thomson-East Coast Line.",
    commute: "40–45 min by MRT", bestFor: "Beach and East Coast Park", landmarks: ["East Coast Park"] }),

  // ── City centre ──
  s({ slug: "orchard", name: "Orchard", kind: "city", at: [1.30401, 103.83406],
    description: "Singapore's shopping boulevard with malls, hotels and luxury condos.",
    commute: "25 min by MRT", caution: "Very expensive; few rooms", landmarks: ["Orchard Road"] }),
  s({ slug: "river-valley", name: "River Valley", kind: "city", at: [1.29788, 103.83637],
    description: "Condos and serviced apartments along River Valley Road, just upstream from Robertson Quay.",
    commute: "20–25 min by MRT", caution: "Expensive", landmarks: ["River Valley Road"] }),
  s({ slug: "singapore-river", name: "Singapore River", kind: "city", at: [1.29087, 103.8405],
    description: "Clarke Quay, Boat Quay and Robertson Quay's riverside bars and restaurants, plus Great World.",
    commute: "20–25 min by MRT", nightlife: 9.4, caution: "Few homes; expensive", landmarks: ["Clarke Quay", "Boat Quay", "Robertson Quay", "Great World"] }),
  s({ slug: "downtown-core", name: "Downtown Core", kind: "city", at: [1.28659, 103.85609],
    description: "The CBD around Raffles Place and Marina Bay.",
    commute: "25 min by MRT", caution: "Very few rooms; office district", landmarks: ["Raffles Place", "Marina Bay"] }),
  s({ slug: "museum", name: "Museum", kind: "city", at: [1.29597, 103.84751],
    description: "The civic and arts district with the National Museum and Singapore Management University.",
    commute: "25 min by MRT", landmarks: ["Singapore Management University", "National Museum"] }),
  s({ slug: "rochor", name: "Rochor", kind: "city", at: [1.30499, 103.85428],
    description: "Little India and Kampong Glam, with markets, mosques and street food next to Bugis.",
    commute: "25–30 min by MRT", nightlife: 8.0, landmarks: ["Little India", "Kampong Glam"] }),
  s({ slug: "outram", name: "Outram", kind: "city", at: [1.28163, 103.8437],
    description: "Chinatown and the Singapore General Hospital area.",
    commute: "20–25 min by MRT", landmarks: ["Chinatown"] }),
  s({ slug: "marina-south", name: "Marina South", kind: "nonres", at: [1.2808, 103.86602],
    description: "Gardens by the Bay and a future residential district still being developed.",
    commute: "30 min by MRT", landmarks: ["Gardens by the Bay"] }),
  s({ slug: "marina-east", name: "Marina East", kind: "nonres", at: [1.28824, 103.87171],
    description: "Reclaimed land around Gardens by the Bay East, with no homes yet.",
    commute: "35 min" }),
  s({ slug: "straits-view", name: "Straits View", kind: "nonres", at: [1.27136, 103.8593],
    description: "Reclaimed waterfront next to Marina Bay, mainly offices and port land.",
    commute: "30 min" }),
  s({ slug: "southern-islands", name: "Southern Islands", kind: "nonres", at: [1.24892, 103.83432],
    description: "Sentosa and the southern islands, with resorts and a few luxury homes.",
    commute: "25 min by bus or monorail", landmarks: ["Sentosa"] }),

  // ── North-east & east heartlands ──
  s({ slug: "ang-mo-kio", name: "Ang Mo Kio", kind: "heartland", at: [1.37673, 103.84256],
    description: "Large, established HDB town with a busy town centre.",
    commute: "40 min by MRT" }),
  s({ slug: "serangoon", name: "Serangoon", kind: "heartland", at: [1.36601, 103.86761],
    description: "HDB and landed homes around the NEX mall and a Circle Line interchange.",
    commute: "35–40 min on the Circle Line", bestFor: "Circle Line straight to Kent Ridge", landmarks: ["NEX"] }),
  s({ slug: "hougang", name: "Hougang", kind: "heartland", at: [1.36095, 103.8888],
    description: "North-eastern HDB town on the North East Line.",
    commute: "45 min by MRT" }),
  s({ slug: "sengkang", name: "Sengkang", kind: "far", at: [1.38864, 103.89555],
    description: "Newer HDB town with LRT loops and a riverside park.",
    commute: "45–55 min by MRT" }),
  s({ slug: "punggol", name: "Punggol", kind: "far", at: [1.40373, 103.90915],
    description: "Waterfront HDB town with new flats and the Punggol Digital District.",
    commute: "50–60 min by MRT" }),
  s({ slug: "bedok", name: "Bedok", kind: "heartland", at: [1.325, 103.93087],
    description: "Large eastern HDB town close to East Coast Park.",
    commute: "45–55 min by MRT" }),
  s({ slug: "tampines", name: "Tampines", kind: "far", at: [1.34503, 103.94913],
    description: "The east's big regional centre with malls on the East-West and Downtown lines.",
    commute: "50–60 min by MRT" }),
  s({ slug: "pasir-ris", name: "Pasir Ris", kind: "far", at: [1.37694, 103.95353],
    description: "North-eastern seaside HDB town with a beach park.",
    commute: "60 min by MRT" }),
  s({ slug: "paya-lebar", name: "Paya Lebar", kind: "nonres", at: [1.36055, 103.91738],
    description: "Mostly the Paya Lebar air base and industrial land.",
    commute: "45–50 min" }),
  s({ slug: "changi", name: "Changi", kind: "nonres", at: [1.35175, 103.99722],
    description: "Changi Airport, Changi Village and coastal parks at the island's eastern tip.",
    commute: "60+ min", landmarks: ["Changi Airport"] }),
  s({ slug: "changi-bay", name: "Changi Bay", kind: "nonres", at: [1.29147, 104.07118],
    description: "Reclaimed land east of Changi with no homes.",
    commute: "60+ min" }),
  s({ slug: "north-eastern-islands", name: "North-Eastern Islands", kind: "nonres", at: [1.38914, 104.05261],
    description: "Pulau Ubin and Pulau Tekong, reached by ferry.",
    commute: "75+ min", landmarks: ["Pulau Ubin"] }),
  s({ slug: "seletar", name: "Seletar", kind: "nonres", at: [1.41629, 103.87929],
    description: "Seletar Aerospace Park and airport, with a few historic houses.",
    commute: "60 min" }),

  // ── North ──
  s({ slug: "yishun", name: "Yishun", kind: "far", at: [1.41903, 103.8434],
    description: "Northern HDB town on the North-South Line.",
    commute: "50–60 min by MRT" }),
  s({ slug: "sembawang", name: "Sembawang", kind: "far", at: [1.453, 103.81868],
    description: "Northern HDB town near the Johor Strait with a quiet beach park.",
    commute: "55–65 min by MRT" }),
  s({ slug: "woodlands", name: "Woodlands", kind: "far", at: [1.44177, 103.78853],
    description: "The northern regional centre next to the Causeway to Malaysia.",
    commute: "50–60 min by MRT" }),
  s({ slug: "mandai", name: "Mandai", kind: "nonres", at: [1.4271, 103.81281],
    description: "Nature reserves and protected land in the north, next to the Mandai wildlife parks.",
    commute: "50 min" }),
  s({ slug: "simpang", name: "Simpang", kind: "nonres", at: [1.44253, 103.84968],
    description: "Undeveloped land on the northern coast.",
    commute: "60 min" }),
  s({ slug: "sungei-kadut", name: "Sungei Kadut", kind: "nonres", at: [1.41758, 103.7561],
    description: "Industrial estate in the north-west.",
    commute: "50 min" }),
  s({ slug: "lim-chu-kang", name: "Lim Chu Kang", kind: "nonres", at: [1.431, 103.71924],
    description: "Farms, military land and wetlands in the far north-west.",
    commute: "60+ min" }),
  s({ slug: "central-water-catchment", name: "Central Water Catchment", kind: "nonres", at: [1.37608, 103.80166],
    description: "Protected reservoirs and rainforest in the middle of the island, including Singapore Zoo and the Night Safari.",
    commute: "Not applicable", landmarks: ["MacRitchie Reservoir", "Singapore Zoo"] }),
  s({ slug: "western-water-catchment", name: "Western Water Catchment", kind: "nonres", at: [1.38081, 103.69556],
    description: "Military training land and reservoirs in the west, bordering NTU.",
    commute: "Not applicable" }),
  s({ slug: "pioneer", name: "Pioneer", kind: "nonres", at: [1.30988, 103.66935],
    description: "Industrial area in the far west.",
    commute: "40 min" }),
  s({ slug: "tuas", name: "Tuas", kind: "nonres", at: [1.28174, 103.6342],
    description: "Industrial estates and the new mega port at the western tip.",
    commute: "50 min" }),
  s({ slug: "western-islands", name: "Western Islands", kind: "nonres", at: [1.25999, 103.67022],
    description: "Jurong Island's petrochemical hub and other western islands.",
    commute: "Not applicable" }),
];

export type SingaporeListing = Listing & { areaSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const singaporeListings: SingaporeListing[] = [
  { id: "sg-sample-dover-room", areaSlug: "queenstown", title: "Common room near Dover MRT", rent: 1150, currency: "S$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 1.3105, lng: 103.7795, description: "Air-conditioned common room in an HDB flat, one MRT stop from NUS.", rooms: 1, sizeSqm: 10, availableFrom: "1 Jan 2027", amenities: ["Air conditioning", "Wifi included", "Utilities included"] },
  { id: "sg-sample-pasirpanjang-room", areaSlug: "queenstown", title: "Master room in a Pasir Panjang condo", rent: 1800, currency: "S$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 1.2800, lng: 103.7880, description: "Master room with its own bathroom in a condo with a pool, 10 minutes by bus to Kent Ridge.", rooms: 1, sizeSqm: 16, availableFrom: "1 Jan 2027", amenities: ["Private bathroom", "Pool", "Gym"] },
  { id: "sg-sample-clementi-room", areaSlug: "clementi", title: "Common room in Clementi", rent: 1000, currency: "S$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 1.3150, lng: 103.7650, description: "Room in an HDB flat near Clementi MRT and the hawker centre.", rooms: 1, sizeSqm: 10, availableFrom: "15 Dec 2026", amenities: ["Air conditioning", "Wifi included"] },
  { id: "sg-sample-holland-room", areaSlug: "bukit-timah", title: "Room near Holland Village", rent: 1500, currency: "S$", type: "Room", source: SAMPLE_SOURCE, lat: 1.3125, lng: 103.7965, description: "Room in a condo a short walk from Holland Village's cafés.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Air conditioning", "Pool"] },
  { id: "sg-sample-tiongbahru-room", areaSlug: "bukit-merah", title: "Room in Tiong Bahru", rent: 1400, currency: "S$", type: "Room", source: SAMPLE_SOURCE, lat: 1.2850, lng: 103.8300, description: "Room in an older flat in Tiong Bahru, near cafés and the MRT.", rooms: 1, sizeSqm: 11, availableFrom: "1 Jan 2027", amenities: ["Air conditioning", "Utilities included"] },
  { id: "sg-sample-jurongeast-room", areaSlug: "jurong-east", title: "Common room in Jurong East", rent: 950, currency: "S$", type: "Room", source: SAMPLE_SOURCE, lat: 1.3330, lng: 103.7420, description: "Common room near the Jurong East interchange and malls.", rooms: 1, sizeSqm: 10, availableFrom: "1 Feb 2027", amenities: ["Air conditioning"] },
  { id: "sg-sample-bishan-room", areaSlug: "bishan", title: "Room in Bishan", rent: 1050, currency: "S$", type: "Room", source: SAMPLE_SOURCE, lat: 1.3510, lng: 103.8480, description: "Room in an HDB flat near the Circle Line, which runs directly to Kent Ridge.", rooms: 1, sizeSqm: 10, availableFrom: "1 Jan 2027", amenities: ["Air conditioning", "Wifi included"] },
];

export function getSingaporeAreaBySlug(slug: string): SingaporePlanningArea | undefined {
  return singaporePlanningAreas.find((x) => x.slug === slug);
}

export function getSingaporeListingsForArea(slug: string | null): SingaporeListing[] {
  if (!slug) return [];
  return singaporeListings.filter((l) => l.areaSlug === slug);
}
