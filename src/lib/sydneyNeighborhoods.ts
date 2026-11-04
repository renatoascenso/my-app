import type { Listing } from "./listings";

// 47 suburbs within about 4.4 km of the University of Sydney Business School (Abercrombie Building, Darlington),
// using the ABS Australian Statistical Geography Standard 2021 Suburbs and Localities (CC BY 4.0) —
// credited in SydneyExplorer. Commute times refer to the Business School. Rents are estimated weekly ranges
// for a room in a share house or apartment (AUD); scores are editorial judgments.

export type SydneySuburb = {
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

type Area = "campus" | "inner" | "city" | "east" | "west" | "south";
const BADGES: Record<Area, string> = {
  campus: "Walk to campus",
  inner: "Inner city",
  city: "CBD & harbour",
  east: "Eastern suburbs",
  west: "Inner West",
  south: "Green Square & south",
};
const RENTS: Record<Area, string> = {
  campus: "A$380–520/wk",
  inner: "A$380–550/wk",
  city: "A$450–650/wk",
  east: "A$420–600/wk",
  west: "A$320–450/wk",
  south: "A$350–480/wk",
};
const SCORES: Record<Area, { safety: number; transport: number; nightlife: number; studentFit: number }> = {
  campus: { safety: 8.0, transport: 9.2, nightlife: 8.4, studentFit: 9.4 },
  inner: { safety: 7.8, transport: 9.2, nightlife: 8.6, studentFit: 8.8 },
  city: { safety: 8.2, transport: 9.4, nightlife: 7.8, studentFit: 7.2 },
  east: { safety: 8.6, transport: 8.4, nightlife: 7.0, studentFit: 7.0 },
  west: { safety: 8.6, transport: 8.0, nightlife: 6.0, studentFit: 8.0 },
  south: { safety: 8.4, transport: 8.4, nightlife: 4.5, studentFit: 7.6 },
};

type Entry = {
  slug: string;
  name: string;
  area: Area;
  at: [number, number];
  description: string;
  commute: string;
  bestFor: string;
  caution: string;
  landmarks?: string[];
} & Partial<Pick<SydneySuburb, "rent" | "safety" | "transport" | "nightlife" | "studentFit">>;

const s = ({ area, at, landmarks = [], ...rest }: Entry): SydneySuburb => ({
  ...SCORES[area],
  rent: RENTS[area],
  ...rest,
  landmarks,
  badge: BADGES[area],
  lat: at[0],
  lng: at[1],
});

export const sydneySuburbs: SydneySuburb[] = [
  // ── Around the University of Sydney ──
  s({ slug: "darlington", name: "Darlington", area: "campus", at: [-33.89095, 151.1927],
    description: "The southern half of the University of Sydney's main campus — including the Business School's Abercrombie Building — and the terrace streets around it, with Redfern station a short walk away.",
    commute: "Business School on site", bestFor: "Business School and CEMS students who want to walk to class", caution: "Small suburb with limited supply; terraces can be old and damp", studentFit: 9.6,
    landmarks: ["University of Sydney Business School (Abercrombie Building)", "Darlington House", "Abercrombie Student Accommodation", "Carriageworks"] }),
  s({ slug: "camperdown", name: "Camperdown", area: "campus", at: [-33.88873, 151.18223],
    description: "The University of Sydney's main Camperdown campus with the Quadrangle and Fisher Library, Royal Prince Alfred Hospital and Victoria Park, bordering Newtown.",
    commute: "5–10 min walk", bestFor: "Living next to campus life and Victoria Park", caution: "Busy Parramatta Road; rooms go fast before semester",
    landmarks: ["The Quadrangle", "Fisher Library", "Royal Prince Alfred Hospital", "Victoria Park"] }),
  s({ slug: "chippendale", name: "Chippendale", area: "campus", at: [-33.88622, 151.20014],
    description: "A compact, creative suburb between campus and Central with galleries, Central Park and many student apartments.",
    commute: "10 min walk", bestFor: "Purpose-built student apartments close to both campus and the CBD", caution: "Many apartments are small and pricey",
    landmarks: ["Central Park", "Kensington Street"] }),
  s({ slug: "eveleigh", name: "Eveleigh", area: "campus", at: [-33.89577, 151.19274],
    description: "Former railway workshops turned into the South Eveleigh innovation precinct, next to Redfern station and Carriageworks.",
    commute: "5–10 min walk", bestFor: "Short walks to campus and trains", caution: "Mostly commercial; few homes", studentFit: 7.0,
    landmarks: ["South Eveleigh"] }),
  s({ slug: "newtown", name: "Newtown", area: "campus", at: [-33.89991, 151.17808],
    description: "Sydney's famous student strip along King Street: bars, live music, vintage shops and cheap eats, right next to the university.",
    commute: "10–15 min walk", bestFor: "Nightlife, food and an alternative vibe", caution: "Loud on weekends; old terraces can be cold in winter", nightlife: 9.4, studentFit: 9.6,
    landmarks: ["King Street", "Enmore Theatre", "Newtown station"] }),
  s({ slug: "glebe", name: "Glebe", area: "campus", at: [-33.87783, 151.18726],
    description: "Leafy terraces, Glebe Point Road's cafés and bookshops, the Saturday markets and harbour-side parks, just north of campus.",
    commute: "10–15 min walk", bestFor: "Village feel next to campus", caution: "No train station; buses and walking only", transport: 8.2,
    landmarks: ["Glebe Point Road", "Glebe Markets", "Wentworth Park"] }),
  s({ slug: "forest-lodge", name: "Forest Lodge", area: "campus", at: [-33.88047, 151.17833],
    description: "Quiet residential streets between Glebe and Annandale, a few minutes from the campus's northern gates.",
    commute: "10 min walk", bestFor: "Calm living close to campus", caution: "Small and in demand", nightlife: 5.5,
    landmarks: ["Forest Lodge"] }),
  s({ slug: "erskineville", name: "Erskineville", area: "campus", at: [-33.90235, 151.18665],
    description: "A friendly village of terraces and pubs south of Newtown, with its own station.",
    commute: "15–20 min walk; 5 min by train to Redfern", bestFor: "Relaxed living near Newtown", caution: "Popular and competitive",
    landmarks: ["Erskineville station"] }),
  s({ slug: "redfern", name: "Redfern", area: "inner", at: [-33.8932, 151.2072],
    description: "A major rail hub with a strong Aboriginal heritage, Redfern Street's cafés and a growing food scene, a short walk from the Business School.",
    commute: "10 min walk", bestFor: "Fast trains everywhere and short walks to campus", caution: "Some blocks feel rough late at night", transport: 9.6,
    landmarks: ["Redfern station", "Redfern Park"] }),
  s({ slug: "ultimo", name: "Ultimo", area: "inner", at: [-33.87941, 151.19779],
    description: "Student-dense area with the University of Technology Sydney, TAFE and the Powerhouse Museum, between campus and Darling Harbour.",
    commute: "15–20 min walk", bestFor: "Student apartments near UTS and the city", caution: "Many tiny studios and busy streets",
    landmarks: ["University of Technology Sydney", "Powerhouse Museum"] }),
  s({ slug: "haymarket", name: "Haymarket", area: "inner", at: [-33.88149, 151.20524],
    description: "Chinatown, Paddy's Markets and Central station, with dense apartment towers and late-night food.",
    commute: "15–20 min walk or one stop by train", bestFor: "Transport and cheap eats", caution: "Crowded and noisy; many overcrowded share flats",
    landmarks: ["Central station", "Chinatown", "Paddy's Markets"] }),
  s({ slug: "surry-hills", name: "Surry Hills", area: "inner", at: [-33.88434, 151.21273],
    description: "Terraces, cafés, restaurants and bars east of Central — one of Sydney's most lively inner suburbs.",
    commute: "20–25 min walk or 10 min by bus", bestFor: "Food, nightlife and city life", caution: "Expensive", rent: "A$420–600/wk",
    landmarks: ["Crown Street"] }),
  s({ slug: "waterloo", name: "Waterloo", area: "inner", at: [-33.90028, 151.20784],
    description: "Mixed area of social housing and new apartments, with the new Waterloo metro station.",
    commute: "15–20 min walk", bestFor: "Newer apartments near campus", caution: "Check the exact building and street",
    landmarks: ["Waterloo station"] }),
  s({ slug: "darlinghurst", name: "Darlinghurst", area: "inner", at: [-33.8794, 151.21899],
    description: "Oxford Street's bars and the heart of Sydney's LGBTQ+ scene, with art deco apartment blocks.",
    commute: "25–30 min by bus", bestFor: "Nightlife and inner-city flats", caution: "Loud around Oxford Street at night", rent: "A$420–600/wk", nightlife: 9.2,
    landmarks: ["Oxford Street", "National Art School"] }),

  // ── Inner West ──
  s({ slug: "annandale", name: "Annandale", area: "west", at: [-33.8798, 151.17169],
    description: "Wide streets of Victorian houses north-west of campus, with Booth Street's cafés.",
    commute: "15–20 min walk", bestFor: "Quiet share houses near campus", caution: "Few train links; buses mainly", studentFit: 8.4,
    landmarks: ["Booth Street"] }),
  s({ slug: "enmore", name: "Enmore", area: "west", at: [-33.90022, 151.17013],
    description: "Newtown's quieter neighbour around Enmore Road, with live music at the Enmore Theatre.",
    commute: "15–20 min walk", bestFor: "Newtown's vibe at slightly lower rents", caution: "Small, in-demand suburb", studentFit: 8.8, nightlife: 7.8,
    landmarks: ["Enmore Road"] }),
  s({ slug: "stanmore", name: "Stanmore", area: "west", at: [-33.89343, 151.16445],
    description: "Leafy streets with large old houses, popular with students for big share houses.",
    commute: "20 min walk; 5 min by train", bestFor: "Big share houses close to campus", caution: "Quiet in the evenings", studentFit: 8.6,
    landmarks: ["Stanmore station"] }),
  s({ slug: "petersham", name: "Petersham", area: "west", at: [-33.89454, 151.15538],
    description: "Inner West suburb known for Portuguese cafés and bakeries, on the train line.",
    commute: "10 min by train", bestFor: "Good-value share houses on the train line", caution: "Busy Parramatta Road on the north side",
    landmarks: ["Petersham station"] }),
  s({ slug: "lewisham", name: "Lewisham", area: "west", at: [-33.89535, 151.14652],
    description: "Small residential suburb with train and light rail stops.",
    commute: "15 min by train", bestFor: "Lower rents with good transport", caution: "Few shops",
    landmarks: ["Lewisham station"] }),
  s({ slug: "leichhardt", name: "Leichhardt", area: "west", at: [-33.88146, 151.15596],
    description: "Sydney's 'Little Italy' around Norton Street, with family homes and light rail access.",
    commute: "20–25 min by bus", bestFor: "Italian food and quieter streets", caution: "No heavy rail; buses and light rail",
    landmarks: ["Norton Street"] }),
  s({ slug: "lilyfield", name: "Lilyfield", area: "west", at: [-33.87119, 151.16032],
    description: "Residential suburb along the light rail and the Bay Run waterfront path.",
    commute: "25 min by light rail and bus", bestFor: "Waterside walks and calm", caution: "Few amenities nearby", studentFit: 7.0,
    landmarks: ["Callan Park"] }),
  s({ slug: "rozelle", name: "Rozelle", area: "west", at: [-33.86452, 151.17341],
    description: "Darling Street's shops and pubs between Balmain and the new Rozelle Parklands.",
    commute: "25–30 min by bus", bestFor: "Pubs and a village feel", caution: "Bus-only commute", rent: "A$350–500/wk", studentFit: 7.2,
    landmarks: ["Rozelle Parklands", "Darling Street"] }),
  s({ slug: "balmain", name: "Balmain", area: "west", at: [-33.85833, 151.18103],
    description: "Historic harbour-side peninsula with pubs, ferries and pricey terraces.",
    commute: "30 min by bus or ferry", bestFor: "Harbour life", caution: "Expensive and far from trains", rent: "A$400–560/wk", studentFit: 6.8,
    landmarks: ["Darling Street"] }),
  s({ slug: "balmain-east", name: "Balmain East", area: "west", at: [-33.85708, 151.19212],
    description: "The tip of the Balmain peninsula with ferry links to the city.",
    commute: "30–35 min by ferry and bus", bestFor: "Ferry commuters", caution: "Very few rentals", rent: "A$420–600/wk", studentFit: 6.0,
    landmarks: ["Darling Street Wharf"] }),
  s({ slug: "birchgrove", name: "Birchgrove", area: "west", at: [-33.85093, 151.18225],
    description: "Quiet, upmarket harbour-side streets at the end of the Balmain peninsula.",
    commute: "35 min by ferry and bus", bestFor: "Harbour views and calm", caution: "Expensive; few share houses", rent: "A$420–600/wk", studentFit: 5.8 }),
  s({ slug: "st-peters", name: "St Peters", area: "west", at: [-33.91587, 151.17815],
    description: "Former industrial area south of Newtown with warehouses and breweries, next to Sydney Park.",
    commute: "20–25 min by train or bike", bestFor: "Craft breweries and a short ride to campus", caution: "Aircraft noise and main-road traffic",
    landmarks: ["St Peters station"] }),
  s({ slug: "sydenham", name: "Sydenham", area: "west", at: [-33.91657, 151.16827],
    description: "Small suburb around a busy rail junction, with warehouses turned into venues.",
    commute: "15 min by train", bestFor: "Cheap rooms with fast trains", caution: "Under the flight path — aircraft noise", studentFit: 7.0,
    landmarks: ["Sydenham station"] }),
  s({ slug: "marrickville", name: "Marrickville", area: "west", at: [-33.91228, 151.15486],
    description: "A diverse Inner West hub with Vietnamese and Greek food, breweries and many share houses.",
    commute: "20–25 min by train", bestFor: "Lower rents and a great food scene", caution: "Parts are under the flight path", studentFit: 8.2,
    landmarks: ["Marrickville Metro", "Addison Road Centre"] }),

  // ── Green Square & the south ──
  s({ slug: "alexandria", name: "Alexandria", area: "south", at: [-33.90811, 151.19204],
    description: "Former warehouse district turned cafés and apartments, between Erskineville and Green Square.",
    commute: "20 min walk or 10 min by bus", bestFor: "Warehouse conversions and cafés", caution: "Spread out; check transport from your street",
    landmarks: ["The Grounds of Alexandria", "Sydney Park", "Green Square station"] }),
  s({ slug: "zetland", name: "Zetland", area: "south", at: [-33.90769, 151.20812],
    description: "High-rise apartments around Green Square's library and plaza.",
    commute: "20–25 min by train or bus", bestFor: "Modern apartments with gyms and pools", caution: "Can feel sterile",
    landmarks: ["Green Square"] }),
  s({ slug: "beaconsfield", name: "Beaconsfield", area: "south", at: [-33.91141, 151.20055],
    description: "Tiny suburb of terraces and apartments a short walk from Green Square station.",
    commute: "20 min by train", bestFor: "Quick trains to the city and campus", caution: "Very few listings",
    landmarks: ["Beaconsfield"] }),
  s({ slug: "rosebery", name: "Rosebery", area: "south", at: [-33.91855, 151.20547],
    description: "Former industrial area with new apartment blocks and cafés.",
    commute: "25–30 min by bus", bestFor: "Newer apartments", caution: "No train station",
    landmarks: ["Rosebery"] }),
  s({ slug: "kensington", name: "Kensington", area: "south", at: [-33.91282, 151.21911],
    description: "Home to UNSW's main campus, linked to the city by light rail; many students rent here.",
    commute: "30–35 min by light rail and bus", bestFor: "Students splitting time between UNSW and USYD", caution: "Far from the University of Sydney",
    landmarks: ["UNSW Sydney"] }),

  // ── CBD & harbour ──
  s({ slug: "pyrmont", name: "Pyrmont", area: "city", at: [-33.86928, 151.19265],
    description: "Apartment towers and wharves around Darling Harbour, the Star casino and the Fish Market.",
    commute: "25 min by light rail and walk", bestFor: "Harbour-side apartments near the city", caution: "Expensive; tourist crowds",
    landmarks: ["Sydney Fish Market", "Darling Harbour"] }),
  s({ slug: "sydney", name: "Sydney CBD", area: "city", at: [-33.86777, 151.21013],
    description: "The central business district with Town Hall, Martin Place, Hyde Park and Circular Quay's trains, ferries and metro.",
    commute: "15–20 min by train or bus", bestFor: "Living in the middle of the city", caution: "Expensive, busy and quiet at night in parts", nightlife: 8.4,
    landmarks: ["Town Hall", "Hyde Park", "Martin Place"] }),
  s({ slug: "barangaroo", name: "Barangaroo", area: "city", at: [-33.86018, 151.20151],
    description: "New harbour-front office and apartment precinct with its own metro station.",
    commute: "25 min by metro and walk", bestFor: "Luxury apartments", caution: "Very expensive", rent: "A$550–800/wk", studentFit: 5.0,
    landmarks: ["Barangaroo Reserve"] }),
  s({ slug: "millers-point", name: "Millers Point", area: "city", at: [-33.8597, 151.20453],
    description: "Historic harbour-side streets below the Observatory Hill.",
    commute: "25–30 min by bus", bestFor: "History and harbour walks", caution: "Very few rentals", studentFit: 5.0,
    landmarks: ["Sydney Observatory"] }),
  s({ slug: "the-rocks", name: "The Rocks", area: "city", at: [-33.85883, 151.20852],
    description: "Sydney's oldest quarter with pubs, weekend markets and views of the Harbour Bridge and Opera House.",
    commute: "25–30 min by train and walk", bestFor: "Harbour views", caution: "Touristy and expensive", studentFit: 5.0,
    landmarks: ["Sydney Harbour Bridge", "Circular Quay"] }),
  s({ slug: "dawes-point", name: "Dawes Point", area: "city", at: [-33.85619, 151.20712],
    description: "Tiny harbour-side point under the southern end of the Harbour Bridge.",
    commute: "30 min by train and walk", bestFor: "Harbour views", caution: "Almost no rentals", studentFit: 4.5 }),
  s({ slug: "woolloomooloo", name: "Woolloomooloo", area: "city", at: [-33.87035, 151.22032],
    description: "Finger wharf, naval base and social housing below Potts Point, a short walk from the Domain.",
    commute: "30 min by bus or train", bestFor: "Harbour-side living close to the city", caution: "Mixed area; check the street", studentFit: 6.0,
    landmarks: ["Finger Wharf"] }),

  // ── Eastern suburbs ──
  s({ slug: "potts-point", name: "Potts Point", area: "east", at: [-33.86691, 151.22593],
    description: "Dense art deco apartments, cafés and bars above Kings Cross.",
    commute: "30 min by train and bus", bestFor: "Cafés and small apartments near the city", caution: "Kings Cross area can be rowdy at night", nightlife: 8.4,
    landmarks: ["Kings Cross station"] }),
  s({ slug: "elizabeth-bay", name: "Elizabeth Bay", area: "east", at: [-33.8717, 151.22837],
    description: "Harbour-side apartment blocks next to Potts Point.",
    commute: "30–35 min by train and bus", bestFor: "Harbour views from small apartments", caution: "Expensive", studentFit: 6.0 }),
  s({ slug: "rushcutters-bay", name: "Rushcutters Bay", area: "east", at: [-33.87453, 151.22867],
    description: "Small harbour-side suburb around Rushcutters Bay Park.",
    commute: "30–35 min by train and bus", bestFor: "Waterfront parks", caution: "Few rentals", studentFit: 5.8,
    landmarks: ["Rushcutters Bay Park"] }),
  s({ slug: "paddington", name: "Paddington", area: "east", at: [-33.88352, 151.22802],
    description: "Victorian terraces, boutiques and galleries along Oxford Street, next to Centennial Park.",
    commute: "30 min by bus", bestFor: "Character terraces and boutiques", caution: "Expensive and bus-dependent", studentFit: 6.8,
    landmarks: ["Paddington Markets", "Victoria Barracks"] }),
  s({ slug: "edgecliff", name: "Edgecliff", area: "east", at: [-33.87975, 151.23743],
    description: "Apartment blocks around Edgecliff station on the eastern suburbs line.",
    commute: "30–35 min by train", bestFor: "Train access in the east", caution: "Pricey", studentFit: 6.2,
    landmarks: ["Edgecliff station"] }),
  s({ slug: "moore-park", name: "Moore Park", area: "east", at: [-33.89564, 151.22212],
    description: "Sports and parkland precinct with the Sydney Cricket Ground and Allianz Stadium — and very few homes.",
    commute: "25 min by bus", bestFor: "Sports fans", caution: "Almost no rentals", studentFit: 4.5,
    landmarks: ["Sydney Cricket Ground", "Allianz Stadium"] }),
  s({ slug: "centennial-park", name: "Centennial Park", area: "east", at: [-33.89803, 151.2341],
    description: "Sydney's great park with a ring of expensive homes around it.",
    commute: "35 min by bus", bestFor: "Running, cycling and green space", caution: "Very expensive, few rentals", studentFit: 4.5,
    landmarks: ["Centennial Park"] }),
];

export type SydneySuburbListing = Listing & { suburbSlug: string };

// Sample listings to demonstrate the map — not real offers. Rents are weekly.
export const SAMPLE_SOURCE = "Sample listing";

export const sydneyListings: SydneySuburbListing[] = [
  { id: "sy-sample-darlington-room", suburbSlug: "darlington", title: "Room in a Darlington terrace", rent: 480, currency: "A$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: -33.8905, lng: 151.1945, description: "Furnished room in a three-bedroom terrace, a 3-minute walk to the Business School. Rent per week.", rooms: 1, sizeSqm: 11, availableFrom: "15 Feb 2027", amenities: ["Furnished", "Bills included"] },
  { id: "sy-sample-newtown-room", suburbSlug: "newtown", title: "Room off King Street", rent: 420, currency: "A$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: -33.8975, lng: 151.1795, description: "Room in a four-person share house close to King Street and the campus. Rent per week.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Shared kitchen", "Backyard"] },
  { id: "sy-sample-glebe-room", suburbSlug: "glebe", title: "Room in Glebe", rent: 450, currency: "A$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: -33.8790, lng: 151.1860, description: "Furnished room near Glebe Point Road, 12 minutes' walk to campus. Rent per week.", rooms: 1, sizeSqm: 12, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Washing machine"] },
  { id: "sy-sample-chippendale-studio", suburbSlug: "chippendale", title: "Studio in Chippendale", rent: 650, currency: "A$", type: "Studio", source: SAMPLE_SOURCE, lat: -33.8865, lng: 151.1990, description: "Furnished studio in a student building near Central Park. Rent per week.", rooms: 1, sizeSqm: 20, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Private bathroom", "Gym"], riskNote: "Higher caution" },
  { id: "sy-sample-redfern-room", suburbSlug: "redfern", title: "Room near Redfern station", rent: 430, currency: "A$", type: "Room", source: SAMPLE_SOURCE, lat: -33.8925, lng: 151.2050, description: "Room in an apartment a few minutes from Redfern station. Rent per week.", rooms: 1, sizeSqm: 11, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Air conditioning"] },
  { id: "sy-sample-stanmore-room", suburbSlug: "stanmore", title: "Room in a Stanmore share house", rent: 360, currency: "A$", type: "Room", source: SAMPLE_SOURCE, lat: -33.8935, lng: 151.1650, description: "Room in a six-bedroom house popular with students. Rent per week.", rooms: 1, sizeSqm: 13, availableFrom: "15 Feb 2027", amenities: ["Shared kitchen", "Garden"] },
  { id: "sy-sample-marrickville-room", suburbSlug: "marrickville", title: "Room in Marrickville", rent: 330, currency: "A$", type: "Room", source: SAMPLE_SOURCE, lat: -33.9110, lng: 151.1560, description: "Room in a share house near the train and Illawarra Road's food. Rent per week.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Bills included"] },
  { id: "sy-sample-surryhills-room", suburbSlug: "surry-hills", title: "Room in Surry Hills", rent: 520, currency: "A$", type: "Room", source: SAMPLE_SOURCE, lat: -33.8850, lng: 151.2120, description: "Room in a terrace near Crown Street's cafés and bars. Rent per week.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished"] },
];

export function getSydneySuburbBySlug(slug: string): SydneySuburb | undefined {
  return sydneySuburbs.find((x) => x.slug === slug);
}

export function getSydneyListingsForSuburb(slug: string | null): SydneySuburbListing[] {
  if (!slug) return [];
  return sydneyListings.filter((l) => l.suburbSlug === slug);
}
