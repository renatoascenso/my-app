import type { Listing } from "./listings";

// Ithaca has no official neighbourhood layer, so the map uses US Census Bureau 2020 census tracts
// (TIGER/Line, public domain), each labelled with the neighbourhood it covers; Collegetown merges tracts 2.01 and 2.02.
// Covers the City of Ithaca and the surrounding Town of Ithaca, Cayuga Heights and Lansing, where most students live.
// Commute times refer to Cornell's central campus (Sage Hall / Warren Hall). Rents are estimated monthly ranges
// per person for a room in a shared house or apartment; scores are editorial judgments.

export type IthacaNeighborhood = {
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

type Base = Omit<IthacaNeighborhood, "lat" | "lng" | "badge"> & { at: [number, number]; walk?: boolean };
const s = ({ at, walk = false, ...rest }: Base): IthacaNeighborhood => ({
  ...rest,
  badge: walk ? "Walk to Cornell" : "Bus or car to Cornell",
  lat: at[0],
  lng: at[1],
});

export const ithacaNeighborhoods: IthacaNeighborhood[] = [
  s({ slug: "collegetown", name: "Collegetown", walk: true, at: [42.4425, -76.4855],
    description: "Ithaca's student quarter directly south of Cornell's central campus: dense student houses and newer apartment buildings around College Avenue and Eddy Street, with cafés, bars and late-night food.",
    rent: "$950–1,300/mo", safety: 7.6, transport: 9.0, nightlife: 9.2, studentFit: 9.6,
    commute: "5–10 min walk to the business school", bestFor: "Students who want to live next to campus and friends", caution: "Leases for the next school year are often signed a year ahead; older houses can be noisy and poorly insulated",
    landmarks: ["College Avenue", "Eddy Street", "Cascadilla Gorge"] }),
  s({ slug: "cornell-campus", name: "Cornell central campus", walk: true, at: [42.4475, -76.481],
    description: "The heart of Cornell: the Arts Quad, Sage Hall (Johnson) and Warren Hall (Dyson, home of the CEMS programme), West Campus residence houses and the Cornell Botanic Gardens.",
    rent: "Campus housing", safety: 8.8, transport: 8.8, nightlife: 5.0, studentFit: 8.6,
    commute: "On campus", bestFor: "Undergraduates in Cornell residence halls", caution: "Almost no private rentals — housing here is run by Cornell",
    landmarks: ["Sage Hall (SC Johnson College of Business)", "Warren Hall (Dyson School)", "Arts Quad", "West Campus", "Cornell Botanic Gardens"] }),
  s({ slug: "north-campus", name: "North Campus & Forest Home", walk: true, at: [42.456, -76.474],
    description: "Across Fall Creek gorge from central campus: first-year residence halls, Cornell's Hasbrouck graduate apartments, Cornell Heights and the small hamlet of Forest Home.",
    rent: "$700–1,050/mo", safety: 8.8, transport: 8.4, nightlife: 3.5, studentFit: 8.4,
    commute: "10–15 min walk", bestFor: "Graduate students in Cornell housing", caution: "Quiet; few private rentals",
    landmarks: ["Hasbrouck Apartments (Cornell graduate housing)", "Cornell Heights", "Forest Home"] }),
  s({ slug: "belle-sherman", name: "Belle Sherman & Bryant Park", walk: true, at: [42.4363, -76.48],
    description: "Leafy residential streets east of Collegetown, with family homes, some shared houses and apartments, and an uphill walk to campus.",
    rent: "$850–1,150/mo", safety: 8.8, transport: 8.2, nightlife: 3.5, studentFit: 8.2,
    commute: "15–20 min walk", bestFor: "Graduate students who want quiet close to campus", caution: "Limited supply; family neighbourhood",
    landmarks: ["Belle Sherman", "Bryant Park"] }),
  s({ slug: "fall-creek", name: "Fall Creek", walk: true, at: [42.4511, -76.5002],
    description: "A friendly, walkable neighbourhood of older wooden houses between downtown and Cornell, next to Ithaca Falls and Cayuga Street's cafés.",
    rent: "$800–1,050/mo", safety: 8.4, transport: 8.0, nightlife: 5.0, studentFit: 8.4,
    commute: "20–25 min walk up the hill; 10 min by bus", bestFor: "Graduate students who like a neighbourhood feel", caution: "Steep walk to campus in winter",
    landmarks: ["Ithaca Falls", "Cayuga Street"] }),
  s({ slug: "downtown", name: "Downtown & the Commons", at: [42.4397, -76.4985],
    description: "The pedestrian Ithaca Commons with restaurants, bars, theatres and shops, and the Green Street bus hub for TCAT routes up to campus.",
    rent: "$850–1,150/mo", safety: 7.8, transport: 9.2, nightlife: 8.4, studentFit: 8.2,
    commute: "10–15 min by TCAT bus; 25–30 min walk uphill", bestFor: "Restaurants, culture and newer apartment buildings", caution: "Busier and louder at night",
    landmarks: ["Ithaca Commons", "Green Street bus station"] }),
  s({ slug: "northside", name: "Northside", at: [42.4445, -76.5071],
    description: "A small, affordable residential area between downtown and the Cayuga Inlet, close to shops on Route 13.",
    rent: "$700–950/mo", safety: 7.4, transport: 7.6, nightlife: 4.0, studentFit: 7.2,
    commute: "15–20 min by bus", bestFor: "Lower rents near downtown", caution: "Further from campus; check the exact street",
    landmarks: ["Northside"] }),
  s({ slug: "southside-inlet", name: "Southside & the Inlet", at: [42.433, -76.504],
    description: "The historic Southside neighbourhood next to downtown and the Inlet waterfront with Wegmans and other big stores; the tract stretches into rural land south-west of the city.",
    rent: "$700–950/mo", safety: 7.2, transport: 7.4, nightlife: 4.0, studentFit: 7.0,
    commute: "15–20 min by bus", bestFor: "Affordable rooms close to downtown", caution: "Mixed housing quality; flood-prone near the Inlet",
    landmarks: ["Southside", "Cayuga Inlet", "Wegmans"] }),
  s({ slug: "west-hill", name: "West Hill", at: [42.444, -76.52],
    description: "Hillside homes and apartment complexes west of downtown with lake views, near Cayuga Medical Center.",
    rent: "$700–950/mo", safety: 8.2, transport: 6.6, nightlife: 2.0, studentFit: 6.4,
    commute: "20–30 min by bus", bestFor: "More space and views", caution: "Bus-dependent; steep, icy roads in winter",
    landmarks: ["Cayuga Medical Center"] }),
  s({ slug: "south-hill", name: "South Hill", at: [42.425, -76.487],
    description: "Residential hillside south of downtown, popular with Ithaca College students and a quieter option for Cornell students with a car or bus pass.",
    rent: "$700–950/mo", safety: 8.4, transport: 6.8, nightlife: 2.5, studentFit: 6.8,
    commute: "20–25 min by bus", bestFor: "Quiet living and lower rents", caution: "Two hills between you and Cornell",
    landmarks: ["South Hill"] }),
  s({ slug: "ithaca-college", name: "Ithaca College", at: [42.422, -76.496],
    description: "Ithaca College's hilltop campus and the student apartments around it, overlooking Cayuga Lake.",
    rent: "$750–1,000/mo", safety: 8.6, transport: 7.0, nightlife: 3.0, studentFit: 6.6,
    commute: "25–30 min by bus to Cornell", bestFor: "Ithaca College students", caution: "Far from Cornell for daily commuting",
    landmarks: ["Ithaca College"] }),
  s({ slug: "east-ithaca", name: "East Ithaca", at: [42.433, -76.462],
    description: "Areas east of campus with Cornell's Maplewood graduate apartments, East Hill Plaza's shops and larger apartment complexes, stretching out into Ellis Hollow.",
    rent: "$800–1,100/mo", safety: 8.6, transport: 7.6, nightlife: 2.5, studentFit: 7.8,
    commute: "10–20 min by bus; Maplewood is a 15-min walk", bestFor: "Graduate students in Maplewood or newer complexes", caution: "Car-oriented outside Maplewood",
    landmarks: ["Maplewood (Cornell graduate housing)", "East Hill Plaza"] }),
  s({ slug: "cayuga-heights", name: "Cayuga Heights & Lansing village", at: [42.468, -76.49],
    description: "The quiet village of Cayuga Heights north of campus, Stewart Park on the lakeshore and apartment complexes in the Village of Lansing around the Shops at Ithaca Mall.",
    rent: "$750–1,050/mo", safety: 9.0, transport: 6.8, nightlife: 2.0, studentFit: 7.0,
    commute: "10–20 min by bus", bestFor: "Graduate students who want space and calm", caution: "Few shops within walking distance outside the mall area",
    landmarks: ["Cayuga Heights", "Stewart Park", "Shops at Ithaca Mall"] }),
  s({ slug: "northeast-ithaca", name: "Northeast Ithaca", at: [42.47, -76.47],
    description: "Suburban neighbourhoods north-east of campus, partly in Cayuga Heights and Lansing village, with apartment complexes along the bus routes.",
    rent: "$750–1,000/mo", safety: 8.8, transport: 6.6, nightlife: 1.5, studentFit: 6.8,
    commute: "15–20 min by bus", bestFor: "Affordable apartments with parking", caution: "Car useful for groceries",
    landmarks: ["Northeast Ithaca"] }),
  s({ slug: "lansing", name: "Lansing", at: [42.495, -76.48],
    description: "Rural and suburban Town of Lansing north of the city, with large apartment communities and Ithaca Tompkins International Airport.",
    rent: "$700–950/mo", safety: 8.8, transport: 5.4, nightlife: 1.0, studentFit: 5.8,
    commute: "20–30 min by bus or car", bestFor: "Bigger apartments at lower rents", caution: "Infrequent buses; a car helps",
    landmarks: ["Ithaca Tompkins International Airport"] }),
];

export type IthacaNeighborhoodListing = Listing & { neighborhoodSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const ithacaListings: IthacaNeighborhoodListing[] = [
  { id: "it-sample-collegetown-room", neighborhoodSlug: "collegetown", title: "Room in a Collegetown house", rent: 1050, currency: "$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 42.4415, lng: -76.486, description: "Furnished room in a five-bedroom student house, a 7-minute walk to Sage Hall.", rooms: 1, sizeSqm: 12, availableFrom: "15 Aug 2027", amenities: ["Furnished", "Utilities included", "Washer/dryer"] },
  { id: "it-sample-collegetown-studio", neighborhoodSlug: "collegetown", title: "Studio on College Avenue", rent: 1650, currency: "$", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 42.442, lng: -76.4855, description: "Furnished studio in a newer building with a short walk to campus.", rooms: 1, sizeSqm: 28, availableFrom: "1 Aug 2027", amenities: ["Furnished", "Private bathroom", "Heat included"], riskNote: "Higher caution" },
  { id: "it-sample-falls-room", neighborhoodSlug: "fall-creek", title: "Room in Fall Creek", rent: 900, currency: "$", type: "Room", source: SAMPLE_SOURCE, lat: 42.4505, lng: -76.4975, description: "Room in a shared house near Ithaca Falls, on a TCAT route to campus.", rooms: 1, sizeSqm: 13, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Shared kitchen"] },
  { id: "it-sample-downtown-room", neighborhoodSlug: "downtown", title: "Room near the Commons", rent: 950, currency: "$", type: "Room", source: SAMPLE_SOURCE, lat: 42.441, lng: -76.499, description: "Room in a two-bedroom apartment a block from the Commons and the bus hub.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Heat included"] },
  { id: "it-sample-bellesherman-room", neighborhoodSlug: "belle-sherman", title: "Room in Belle Sherman", rent: 1000, currency: "$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 42.4365, lng: -76.479, description: "Quiet room in a shared house, about 15 minutes' walk to campus.", rooms: 1, sizeSqm: 14, availableFrom: "15 Aug 2027", amenities: ["Furnished", "Parking"] },
  { id: "it-sample-northside-room", neighborhoodSlug: "northside", title: "Room on the Northside", rent: 800, currency: "$", type: "Room", source: SAMPLE_SOURCE, lat: 42.4465, lng: -76.5045, description: "Room in a shared apartment close to shops on Route 13.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Washer/dryer"] },
  { id: "it-sample-lansing-apt", neighborhoodSlug: "lansing", title: "Room in a Lansing apartment", rent: 850, currency: "$", type: "Room", source: SAMPLE_SOURCE, lat: 42.486, lng: -76.485, description: "Room in a two-bedroom apartment in a larger complex with parking and a bus stop.", rooms: 1, sizeSqm: 14, availableFrom: "1 Aug 2027", amenities: ["Parking", "Dishwasher", "Washer/dryer"] },
  { id: "it-sample-cayugaheights-room", neighborhoodSlug: "cayuga-heights", title: "Room in Cayuga Heights", rent: 900, currency: "$", type: "Room", source: SAMPLE_SOURCE, lat: 42.4675, lng: -76.4895, description: "Room in a quiet house north of campus, on a bus route.", rooms: 1, sizeSqm: 15, availableFrom: "1 Aug 2027", amenities: ["Furnished", "Garden"] },
];

export function getIthacaNeighborhoodBySlug(slug: string): IthacaNeighborhood | undefined {
  return ithacaNeighborhoods.find((x) => x.slug === slug);
}

export function getIthacaListingsForNeighborhood(slug: string | null): IthacaNeighborhoodListing[] {
  if (!slug) return [];
  return ithacaListings.filter((l) => l.neighborhoodSlug === slug);
}
