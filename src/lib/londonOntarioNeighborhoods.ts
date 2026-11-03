import type { Listing } from "./listings";

// London, Ontario's 42 planning districts.
// Boundaries: City of London Open Data, under the City's open data Terms of Use — credited in LondonOntarioExplorer.
// Ivey Business School (Richard Ivey Building, Western Road — home of CEMS) is on Western University's campus,
// in the Medway planning district. Commute times refer to Ivey. Rents are estimated monthly ranges per room
// in a shared house or apartment, in Canadian dollars; scores are editorial judgments.

export type LondonOntarioDistrict = {
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

type Tier = "near" | "central" | "outer";
const BADGES: Record<Tier, string> = { near: "Near Western", central: "Central London", outer: "Outer London" };
const RENTS: Record<Tier, string> = { near: "CA$800–1,050/mo", central: "CA$700–950/mo", outer: "CA$650–850/mo" };

type Base = Omit<LondonOntarioDistrict, "lat" | "lng" | "badge" | "rent"> & { at: [number, number]; tier: Tier; rent?: string };
const s = ({ at, tier, rent, ...rest }: Base): LondonOntarioDistrict => ({
  ...rest,
  badge: BADGES[tier],
  rent: rent ?? RENTS[tier],
  lat: at[0],
  lng: at[1],
});

// Quick builder for quieter outer districts with similar profiles.
const outer = (slug: string, name: string, at: [number, number], description: string, commute: string, o: Partial<Base> = {}) =>
  s({ slug, name, at, tier: "outer", description, commute, safety: 8.4, transport: 6.0, nightlife: 1.5, studentFit: 5.6,
      bestFor: "Quieter, car-friendly living", caution: "Long bus rides to Western; a car helps", landmarks: [], ...o });

export const londonOntarioDistricts: LondonOntarioDistrict[] = [
  // ── Around Western ──
  s({ slug: "medway", name: "Medway", tier: "near", at: [43.0039, -81.2958],
    description: "Western University's campus with the Ivey Business School, University Hospital, Brescia and Huron University Colleges, and the wooded Medway Valley — plus the quiet streets west of campus.",
    rent: "CA$850–1,100/mo", safety: 8.8, transport: 8.8, nightlife: 5.0, studentFit: 9.4,
    commute: "Ivey on site; 5–15 min walk", bestFor: "Ivey and Western students who want to walk to class", caution: "Limited private rentals right next to campus — start looking early",
    landmarks: ["Ivey Business School (Richard Ivey Building)", "Western University", "University Hospital", "Brescia University College", "Huron University College"] }),
  s({ slug: "north-london", name: "North London", tier: "near", at: [43.006, -81.2547],
    description: "Old North's tree-lined streets and student houses between downtown and campus, with King's University College and Richmond Street's shops.",
    safety: 8.4, transport: 8.8, nightlife: 6.5, studentFit: 9.2,
    commute: "15–20 min walk or 10 min by bus", bestFor: "Student houses close to both campus and downtown", caution: "Older houses — check heating and insulation before winter",
    landmarks: ["King's University College", "Old North", "Richmond Street"] }),
  s({ slug: "masonville", name: "Masonville", tier: "near", at: [43.0182, -81.2802],
    description: "North of campus around Masonville Place, with many purpose-built student apartments along Richmond Street and frequent buses to Western.",
    safety: 8.6, transport: 8.6, nightlife: 4.5, studentFit: 8.8,
    commute: "10–15 min by bus", bestFor: "Modern student apartments near shops", caution: "Newer student towers can be pricey",
    landmarks: ["Masonville Place"] }),
  s({ slug: "stoneybrook", name: "Stoneybrook", tier: "near", at: [43.0306, -81.2481],
    description: "Residential north London east of Masonville, with family homes, basement apartments and rooms for rent.",
    safety: 8.8, transport: 7.6, nightlife: 2.5, studentFit: 7.6,
    commute: "15–20 min by bus", bestFor: "Quiet rooms in family homes", caution: "Few amenities within walking distance",
    landmarks: ["Stoneybrook"] }),
  s({ slug: "uplands", name: "Uplands", tier: "near", at: [43.0396, -81.2733],
    description: "Leafy northern neighbourhood beyond Masonville with houses and townhomes.",
    safety: 9.0, transport: 7.0, nightlife: 1.5, studentFit: 7.0,
    commute: "20 min by bus", bestFor: "Graduate students who want calm", caution: "Bus-dependent; quiet in the evenings",
    landmarks: ["Uplands"] }),
  s({ slug: "sunningdale", name: "Sunningdale", tier: "outer", at: [43.0314, -81.3013],
    description: "Newer northern subdivisions with large homes and some rooms for rent.",
    safety: 9.0, transport: 6.0, nightlife: 1.0, studentFit: 6.2,
    commute: "20–25 min by bus or car", bestFor: "Space and new houses", caution: "Infrequent buses",
    landmarks: ["Sunningdale"] }),
  s({ slug: "west-london", name: "West London", tier: "central", at: [42.9866, -81.2816],
    description: "Blackfriars and the neighbourhoods west of the Thames between downtown and campus, with older homes and riverside paths.",
    safety: 8.2, transport: 8.2, nightlife: 4.5, studentFit: 8.4,
    commute: "10–15 min by bus or bike", bestFor: "Character houses close to campus and downtown", caution: "Parts near the river are flood-prone",
    landmarks: ["Blackfriars", "Thames Valley Parkway"] }),

  // ── Central & east ──
  s({ slug: "central-london", name: "Central London", tier: "central", at: [42.9857, -81.2432],
    description: "Downtown London: Richmond Row's bars and restaurants, Covent Garden Market, Budweiser Gardens and the VIA Rail station.",
    rent: "CA$750–1,000/mo", safety: 7.2, transport: 9.4, nightlife: 9.0, studentFit: 8.6,
    commute: "15–20 min by bus", bestFor: "Nightlife and downtown apartments", caution: "Some downtown blocks feel unsafe late at night",
    landmarks: ["Richmond Row", "Covent Garden Market", "Budweiser Gardens", "London VIA Rail station"] }),
  s({ slug: "south-london", name: "South London", tier: "central", at: [42.9692, -81.2436],
    description: "Wortley Village's cafés and older homes south of downtown, near Victoria Hospital.",
    safety: 8.4, transport: 8.2, nightlife: 5.5, studentFit: 7.8,
    commute: "20–25 min by bus", bestFor: "Village feel close to downtown", caution: "Longer ride to campus",
    landmarks: ["Wortley Village", "Victoria Hospital"] }),
  s({ slug: "east-london", name: "East London", tier: "central", at: [42.992, -81.2104],
    description: "The Old East Village with its market and cafés, the Western Fair District and affordable older housing.",
    rent: "CA$650–850/mo", safety: 6.8, transport: 8.0, nightlife: 5.5, studentFit: 7.2,
    commute: "25–30 min by bus", bestFor: "Low rents near downtown", caution: "Mixed safety — check the exact street",
    landmarks: ["Old East Village", "Western Fair District"] }),
  s({ slug: "carling", name: "Carling", tier: "central", at: [43.0101, -81.2285],
    description: "North-central neighbourhood around Carling Heights, between downtown and Fanshawe College.",
    rent: "CA$650–850/mo", safety: 7.4, transport: 7.8, nightlife: 2.5, studentFit: 7.0,
    commute: "20–25 min by bus", bestFor: "Affordable rooms between Western and Fanshawe", caution: "Few shops nearby",
    landmarks: ["Carling Heights"] }),
  s({ slug: "huron-heights", name: "Huron Heights", tier: "outer", at: [43.0252, -81.2085],
    description: "North-east neighbourhood around Fanshawe College, with many student rentals aimed at Fanshawe students.",
    rent: "CA$650–850/mo", safety: 7.4, transport: 7.6, nightlife: 3.0, studentFit: 7.2,
    commute: "25–30 min by bus", bestFor: "Fanshawe College students", caution: "Far from Western; lots of student parties",
    landmarks: ["Fanshawe College"] }),
  s({ slug: "hamilton-road", name: "Hamilton Road", tier: "central", at: [42.9785, -81.1806],
    description: "South-east inner neighbourhood along Hamilton Road with older, affordable homes and local shops.",
    rent: "CA$650–850/mo", safety: 7.0, transport: 7.4, nightlife: 2.5, studentFit: 6.4,
    commute: "30–35 min by bus", bestFor: "Low rents", caution: "Long commute to Western",
    landmarks: ["Hamilton Road"] }),
  s({ slug: "argyle", name: "Argyle", tier: "outer", at: [42.9992, -81.1733],
    description: "East London suburbs around Argyle Mall.",
    safety: 7.6, transport: 7.0, nightlife: 1.5, studentFit: 5.8,
    commute: "35–40 min by bus", bestFor: "Affordable houses", caution: "Far from campus",
    landmarks: ["Argyle Mall"] }),

  // ── West ──
  s({ slug: "oakridge", name: "Oakridge", tier: "outer", at: [42.9727, -81.316],
    description: "Established western suburb with Springbank Park along the Thames.",
    safety: 8.8, transport: 7.0, nightlife: 1.5, studentFit: 6.8,
    commute: "15–20 min by bus or car", bestFor: "Quiet rooms with a short drive to campus", caution: "Bus service is less frequent",
    landmarks: ["Springbank Park"] }),
  s({ slug: "hyde-park", name: "Hyde Park", tier: "outer", at: [42.9948, -81.3353],
    description: "North-west commercial and residential area along Hyde Park Road.",
    safety: 8.6, transport: 6.6, nightlife: 2.0, studentFit: 6.4,
    commute: "15–20 min by car, longer by bus", bestFor: "Newer houses and big-box shopping", caution: "Car-oriented",
    landmarks: ["Hyde Park Road"] }),
  outer("fox-hollow", "Fox Hollow", [43.0203, -81.3398], "Newer north-west subdivisions near Hyde Park Road and Fanshawe Park Road.", "20–25 min by car or bus"),
  s({ slug: "byron", name: "Byron", tier: "outer", at: [42.9498, -81.3375],
    description: "South-western village-style suburb with Boler Mountain for skiing and mountain biking.",
    safety: 9.0, transport: 6.0, nightlife: 1.5, studentFit: 6.0,
    commute: "25 min by car, longer by bus", bestFor: "Outdoor activities and calm", caution: "Infrequent buses",
    landmarks: ["Boler Mountain"] }),
  outer("westmount", "Westmount", [42.9484, -81.2978], "South-west residential area with townhouses and apartment buildings.", "25–30 min by bus", { transport: 6.8, studentFit: 6.0 }),
  outer("southcrest", "Southcrest", [42.9665, -81.2767], "Quiet residential neighbourhood south-west of downtown.", "20–25 min by bus", { transport: 7.0, studentFit: 6.2 }),
  outer("river-bend", "River Bend", [42.9713, -81.3573], "New western subdivisions along the Thames.", "25 min by car"),
  outer("woodhull", "Woodhull", [42.9541, -81.3729], "Rural western edge of the city.", "30 min by car", { transport: 3.5, studentFit: 4.0 }),

  // ── North & north-east ──
  outer("stoney-creek", "Stoney Creek", [43.0479, -81.2454], "Northern family suburb around the Stoney Creek community centre.", "25 min by bus or car"),
  outer("fanshawe", "Fanshawe", [43.0541, -81.2031], "North-east area near Fanshawe Conservation Area and its lake.", "30 min by car", { transport: 4.5, studentFit: 4.8 }),
  outer("airport", "Airport", [43.0321, -81.159], "Industrial north-east around London International Airport.", "30–35 min by car", { transport: 4.0, studentFit: 3.6, landmarks: ["London International Airport"] }),
  outer("crumlin", "Crumlin", [43.0038, -81.1361], "Eastern edge of the city with industry and a few homes.", "35 min by car", { transport: 4.0, studentFit: 3.8 }),

  // ── South & south-east ──
  outer("white-oaks", "White Oaks", [42.9354, -81.2365], "Southern suburb around White Oaks Mall, with apartment towers and townhouses.", "35–40 min by bus", { transport: 7.0, safety: 7.6, studentFit: 6.0, landmarks: ["White Oaks Mall"] }),
  outer("highland", "Highland", [42.9529, -81.2521], "South-central residential area near the Highland golf course.", "30 min by bus", { transport: 6.8 }),
  outer("glen-cairn", "Glen Cairn", [42.9617, -81.204], "South-east residential neighbourhood with affordable housing.", "35 min by bus", { safety: 7.0, transport: 6.8 }),
  outer("jackson", "Jackson", [42.9609, -81.1696], "South-east suburbs off Commissioners Road.", "35–40 min by bus"),
  outer("old-victoria", "Old Victoria", [42.96, -81.1284], "Eastern edge with newer subdivisions and farmland.", "40 min by car", { transport: 4.5, studentFit: 4.4 }),
  outer("bradley", "Bradley", [42.9498, -81.1497], "South-east industrial and residential area along Bradley Avenue.", "40 min by bus", { transport: 5.5 }),
  outer("highbury", "Highbury", [42.9393, -81.172], "South-east area along Highbury Avenue near Highway 401.", "40 min by bus", { transport: 5.5 }),
  outer("westminster", "Westminster", [42.9369, -81.2066], "Southern area around Westminster Ponds and conservation lands.", "35–40 min by bus", { transport: 5.8 }),
  outer("bostwick", "Bostwick", [42.9322, -81.2785], "South-west suburb around the Bostwick community centre.", "30–35 min by car or bus"),
  outer("talbot", "Talbot", [42.9289, -81.3144], "Newer south-west subdivisions.", "30 min by car"),
  outer("lambeth", "Lambeth", [42.9093, -81.2917], "Village-style community in the far south-west.", "30–35 min by car", { transport: 4.5, studentFit: 4.6 }),
  outer("longwoods", "Longwoods", [42.9181, -81.2533], "Southern area along Wellington Road towards Highway 401.", "35 min by bus", { transport: 5.5 }),
  outer("brockley", "Brockley", [42.9042, -81.2018], "Rural and industrial south-east near Highway 401.", "40 min by car", { transport: 3.5, studentFit: 3.6 }),
  outer("sharon-creek", "Sharon Creek", [42.9104, -81.3343], "Rural south-west of the city.", "35 min by car", { transport: 3.0, studentFit: 3.4 }),
  outer("glanworth", "Glanworth", [42.8943, -81.1552], "Farmland in the south-east of the city.", "40 min by car", { transport: 2.5, studentFit: 3.0 }),
  outer("tempo", "Tempo", [42.8686, -81.2571], "Rural southern edge of the city along Highway 401.", "40 min by car", { transport: 2.5, studentFit: 3.0 }),
];

export type LondonOntarioListing = Listing & { districtSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const londonOntarioListings: LondonOntarioListing[] = [
  { id: "lo-sample-masonville-room", districtSlug: "masonville", title: "Room in a student apartment", rent: 950, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 43.023, lng: -81.279, description: "Furnished room in a four-bedroom apartment on Richmond Street, with a direct bus to Western.", rooms: 1, sizeSqm: 12, availableFrom: "1 May 2027", amenities: ["Furnished", "Utilities included", "In-suite laundry"] },
  { id: "lo-sample-oldnorth-room", districtSlug: "north-london", title: "Room in an Old North house", rent: 850, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 42.999, lng: -81.254, description: "Room in a five-bedroom student house, a 15-minute walk to campus.", rooms: 1, sizeSqm: 13, availableFrom: "1 May 2027", amenities: ["Shared kitchen", "Parking"] },
  { id: "lo-sample-medway-studio", districtSlug: "medway", title: "Basement studio near campus", rent: 1450, currency: "CA$", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 43.007, lng: -81.286, description: "Furnished basement studio with a private entrance, a 10-minute walk to Ivey.", rooms: 1, sizeSqm: 30, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Private bathroom", "Utilities included"], riskNote: "Higher caution" },
  { id: "lo-sample-downtown-room", districtSlug: "central-london", title: "Room near Richmond Row", rent: 800, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, lat: 42.985, lng: -81.248, description: "Room in a downtown apartment close to bars and the bus routes to Western.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Furnished"] },
  { id: "lo-sample-stoneybrook-room", districtSlug: "stoneybrook", title: "Room in a family home", rent: 800, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, lat: 43.03, lng: -81.25, description: "Quiet room with a shared kitchen in a family house.", rooms: 1, sizeSqm: 14, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "lo-sample-fanshawe-room", districtSlug: "huron-heights", title: "Room near Fanshawe College", rent: 750, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, lat: 43.015, lng: -81.205, description: "Room in a shared townhouse popular with college students.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Parking", "Washer/dryer"] },
  { id: "lo-sample-oev-room", districtSlug: "east-london", title: "Room in the Old East Village", rent: 700, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, lat: 42.988, lng: -81.225, description: "Room in a converted house near the Western Fair Farmers' Market.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Furnished"] },
  { id: "lo-sample-oakridge-room", districtSlug: "oakridge", title: "Room near Springbank Park", rent: 750, currency: "CA$", type: "Room", source: SAMPLE_SOURCE, lat: 42.975, lng: -81.31, description: "Room in a quiet house in Oakridge, about 15 minutes by car to campus.", rooms: 1, sizeSqm: 14, availableFrom: "1 May 2027", amenities: ["Parking", "Garden"] },
];

export function getLondonOntarioDistrictBySlug(slug: string): LondonOntarioDistrict | undefined {
  return londonOntarioDistricts.find((x) => x.slug === slug);
}

export function getLondonOntarioListingsForDistrict(slug: string | null): LondonOntarioListing[] {
  if (!slug) return [];
  return londonOntarioListings.filter((l) => l.districtSlug === slug);
}
