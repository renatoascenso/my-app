import type { Listing } from "./listings";

// 37 suburbs within about 9 km of the UCT Graduate School of Business: the Atlantic Seaboard,
// the City Bowl, the inner-east suburbs from Woodstock to Observatory, the Southern Suburbs as far as
// Newlands, and Milnerton and Century City across the bay.
// Boundaries: © OpenStreetMap contributors (ODbL), credited in CapeTownExplorer.
// The GSB (home of CEMS) is on the Breakwater campus at the V&A Waterfront. Commute times refer to the
// Breakwater campus; rents are estimated monthly ranges for a room in a shared flat or house (ZAR);
// scores are editorial judgments.

export type CapeTownSuburb = {
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

type Area = "Atlantic Seaboard" | "City Bowl" | "Inner east" | "Southern Suburbs" | "Northern suburbs";
type Entry = {
  slug: string; name: string; area: Area; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const s = ({ area, at, landmarks = [], ...e }: Entry): CapeTownSuburb => ({
  rent: "R5,500–8,000/mo", safety: 6.4, transport: 6.0, nightlife: 4.6, studentFit: 6.0,
  bestFor: "Residential living at moderate prices", caution: "Most students rely on ride-hailing — check the cost of the daily trip",
  ...e,
  landmarks,
  badge: area,
  lat: at[0],
  lng: at[1],
});

export const capeTownSuburbs: CapeTownSuburb[] = [
  // ── Around the Waterfront ──
  s({ slug: "foreshore", name: "Foreshore & V&A Waterfront", area: "City Bowl", at: [-33.9060, 18.4195],
    description: "Reclaimed land between the city centre and the harbour, with the V&A Waterfront, the Two Oceans Aquarium and Cape Town Station. The GSB's Breakwater campus is here, at the edge of the Waterfront.",
    rent: "R10,000–16,000/mo", safety: 7.6, transport: 8.4, nightlife: 7.0, studentFit: 7.4,
    commute: "5–15 min on foot", bestFor: "Walking to the GSB",
    caution: "Few rooms to rent — mostly expensive serviced apartments",
    landmarks: ["UCT GSB Breakwater campus", "V&A Waterfront", "Two Oceans Aquarium", "Cape Town Station"] }),
  s({ slug: "green-point", name: "Green Point", area: "Atlantic Seaboard", at: [-33.9071, 18.4084],
    description: "Flats and townhouses between the Waterfront and Signal Hill, around Cape Town Stadium and Green Point Park. Several furnished apartment buildings popular with exchange students are here.",
    rent: "R8,500–13,000/mo", safety: 7.2, transport: 8.0, nightlife: 7.6, studentFit: 8.8,
    commute: "10–20 min on foot", bestFor: "Walking to the GSB with restaurants nearby",
    caution: "Car break-ins happen — use secure parking and don't leave valuables in sight",
    landmarks: ["Cape Town Stadium", "Green Point Park", "Main Road Green Point"] }),
  s({ slug: "mouille-point", name: "Mouille Point", area: "Atlantic Seaboard", at: [-33.9029, 18.3990],
    description: "A strip of sea-facing apartment blocks along Beach Road, with a promenade and the old lighthouse.",
    rent: "R10,000–15,000/mo", safety: 7.6, transport: 6.8, nightlife: 5.6, studentFit: 7.6,
    commute: "15–25 min on foot", bestFor: "Sea views close to the GSB",
    caution: "Expensive and few rooms in shared flats", landmarks: ["Mouille Point Lighthouse"] }),
  s({ slug: "three-anchor-bay", name: "Three Anchor Bay", area: "Atlantic Seaboard", at: [-33.9087, 18.3978],
    description: "Small seaside neighbourhood between Green Point and Sea Point.",
    rent: "R9,000–13,000/mo", safety: 7.2, transport: 7.6, nightlife: 6.2, studentFit: 8.0,
    commute: "10–20 min by MyCiTi bus or car", bestFor: "Quiet seaside living near the GSB",
    caution: "Small, so rooms come up rarely" }),
  s({ slug: "sea-point", name: "Sea Point", area: "Atlantic Seaboard", at: [-33.9098, 18.3901],
    description: "Dense, lively seafront suburb with a long promenade, Main Road shops and restaurants, and many flats — a favourite with young professionals and exchange students.",
    rent: "R8,000–12,000/mo", safety: 7.0, transport: 7.8, nightlife: 7.6, studentFit: 8.6,
    commute: "15–25 min by MyCiTi bus or car", bestFor: "Seaside life with shops and restaurants",
    caution: "Ask about the street at night; some blocks off Main Road are rougher",
    landmarks: ["Sea Point Promenade", "Sea Point Pavilion"] }),
  s({ slug: "fresnaye", name: "Fresnaye", area: "Atlantic Seaboard", at: [-33.9253, 18.3869],
    description: "Wealthy residential slopes above Sea Point, below Lion's Head.",
    rent: "R10,000–16,000/mo", safety: 7.8, transport: 5.6, nightlife: 4.0, studentFit: 6.4,
    commute: "20–30 min by car", bestFor: "Quiet, upmarket living", caution: "Steep streets and expensive" }),
  s({ slug: "bantry-bay", name: "Bantry Bay", area: "Atlantic Seaboard", at: [-33.9283, 18.3791],
    description: "Exclusive cliffside apartments facing the Atlantic.", rent: "R12,000–20,000/mo",
    safety: 7.8, transport: 5.4, nightlife: 3.4, studentFit: 5.0, commute: "20–30 min by car",
    bestFor: "Luxury views", caution: "Among the most expensive suburbs in Cape Town" }),
  s({ slug: "clifton", name: "Clifton", area: "Atlantic Seaboard", at: [-33.9403, 18.3754],
    description: "Famous for its four sheltered beaches and holiday villas.", rent: "R14,000–25,000/mo",
    safety: 7.6, transport: 5.0, nightlife: 4.6, studentFit: 4.0, commute: "25–35 min by car",
    bestFor: "Beaches", caution: "Mostly holiday rentals at very high prices", landmarks: ["Clifton 4th Beach"] }),
  s({ slug: "camps-bay", name: "Camps Bay", area: "Atlantic Seaboard", at: [-33.9509, 18.3777],
    description: "Beach suburb below the Twelve Apostles with a palm-lined strip of restaurants. UCT lists a furnished apartment option here for GSB students.",
    rent: "R10,000–18,000/mo", safety: 7.4, transport: 5.2, nightlife: 7.0, studentFit: 6.0,
    commute: "25–40 min by MyCiTi bus or car", bestFor: "Beach life", caution: "Expensive, and traffic on the coastal road is slow in summer",
    landmarks: ["Camps Bay Beach"] }),

  // ── City Bowl ──
  s({ slug: "city-centre", name: "City Centre", area: "City Bowl", at: [-33.9210, 18.4208],
    description: "The central business district around Long Street, Bree Street and the Company's Garden, with a growing number of apartment buildings.",
    rent: "R7,000–11,000/mo", safety: 6.0, transport: 8.8, nightlife: 8.6, studentFit: 8.0,
    commute: "10–20 min by MyCiTi bus or car", bestFor: "Nightlife and central location",
    caution: "Busy by day, but some streets are unsafe after dark — use ride-hailing at night",
    landmarks: ["Long Street", "Bree Street", "Company's Garden"] }),
  s({ slug: "bo-kaap", name: "Bo-Kaap", area: "City Bowl", at: [-33.9214, 18.4149],
    description: "Historic neighbourhood of colourful houses on the slopes of Signal Hill, the heart of Cape Town's Cape Malay community.",
    rent: "R7,000–10,000/mo", safety: 6.6, transport: 7.0, nightlife: 5.6, studentFit: 7.2,
    commute: "15–20 min by car", bestFor: "Character close to the city centre",
    caution: "A close-knit residential community facing rising rents — be a considerate neighbour", landmarks: ["Bo-Kaap Museum"] }),
  s({ slug: "tamboerskloof", name: "Tamboerskloof", area: "City Bowl", at: [-33.9291, 18.4033],
    description: "Leafy suburb of Victorian houses between Kloof Nek and the city, below Lion's Head.",
    rent: "R7,500–11,000/mo", safety: 7.0, transport: 6.8, nightlife: 6.6, studentFit: 7.8,
    commute: "15–25 min by car", bestFor: "Leafy streets near Kloof Street restaurants", caution: "Steep, and parking is tight" }),
  s({ slug: "gardens", name: "Gardens", area: "City Bowl", at: [-33.9299, 18.4109],
    description: "Busy residential area around Kloof Street, with cafés, bars and plenty of flats and shared houses.",
    rent: "R7,000–10,500/mo", safety: 6.8, transport: 7.6, nightlife: 7.8, studentFit: 8.4,
    commute: "15–25 min by MyCiTi bus or car", bestFor: "City Bowl life at fair prices",
    caution: "Ask about building security and street safety at night", landmarks: ["Kloof Street"] }),
  s({ slug: "oranjezicht", name: "Oranjezicht", area: "City Bowl", at: [-33.9407, 18.4137],
    description: "Quiet, upmarket suburb on the slopes of Table Mountain with views over the city.",
    rent: "R8,000–12,000/mo", safety: 7.4, transport: 5.6, nightlife: 4.0, studentFit: 6.6,
    commute: "20–30 min by car", bestFor: "Quiet living with mountain access", caution: "Steep and far from shops on foot" }),
  s({ slug: "vredehoek", name: "Vredehoek", area: "City Bowl", at: [-33.9394, 18.4245],
    description: "Residential slopes on the eastern side of the City Bowl, with apartment blocks and mountain views.",
    rent: "R7,000–10,000/mo", safety: 7.0, transport: 5.8, nightlife: 4.0, studentFit: 6.8,
    commute: "20–30 min by car", bestFor: "Views at slightly lower prices", caution: "Windy in summer and steep" }),
  s({ slug: "district-six", name: "District Six", area: "City Bowl", at: [-33.9320, 18.4266],
    description: "Former neighbourhood destroyed under apartheid forced removals, now home to a CPUT campus, a museum and new restitution housing.",
    rent: "R6,000–9,000/mo", safety: 6.0, transport: 7.0, nightlife: 4.0, studentFit: 6.2,
    commute: "15–25 min by car", bestFor: "Central location near CPUT",
    caution: "Few private rentals", landmarks: ["CPUT District Six campus", "District Six Museum"] }),

  // ── Inner east ──
  s({ slug: "woodstock", name: "Woodstock", area: "Inner east", at: [-33.9269, 18.4460],
    description: "Former industrial suburb turned creative district, with design studios, the Old Biscuit Mill's Saturday market and converted lofts.",
    rent: "R6,000–9,000/mo", safety: 5.6, transport: 7.4, nightlife: 7.0, studentFit: 7.6,
    commute: "15–25 min by car", bestFor: "Creative scene and lofts",
    caution: "Safety changes from block to block — check the street and building security",
    landmarks: ["Old Biscuit Mill", "Woodstock Exchange"] }),
  s({ slug: "salt-river", name: "Salt River", area: "Inner east", at: [-33.9280, 18.4660],
    description: "Working-class suburb with factories, outlet stores and the Salt River railway junction.",
    rent: "R5,000–7,500/mo", safety: 5.0, transport: 7.4, nightlife: 4.6, studentFit: 5.8,
    commute: "20–30 min by car", bestFor: "Lower rents near the centre",
    caution: "Unsafe at night in many streets", landmarks: ["Salt River station"] }),
  s({ slug: "observatory", name: "Observatory", area: "Inner east", at: [-33.9318, 18.4660],
    description: "Bohemian student suburb with Victorian cottages, bars on Lower Main Road and Groote Schuur Hospital. Popular with UCT students for shared houses.",
    rent: "R4,500–6,500/mo", safety: 5.8, transport: 7.0, nightlife: 7.6, studentFit: 8.2,
    commute: "20–35 min by car", bestFor: "Affordable shared houses and student life",
    caution: "Muggings happen at night — don't walk alone after dark",
    landmarks: ["Lower Main Road", "Groote Schuur Hospital", "Observatory station"] }),
  s({ slug: "paarden-eiland", name: "Paarden Eiland", area: "Inner east", at: [-33.9130, 18.4715],
    description: "Industrial and warehouse area along the bay.", rent: "R5,000–7,000/mo",
    safety: 5.2, transport: 5.0, nightlife: 2.0, studentFit: 3.0, commute: "15–25 min by car",
    caution: "Mostly industrial; few homes" }),
  s({ slug: "brooklyn", name: "Brooklyn", area: "Inner east", at: [-33.9103, 18.4830],
    description: "Older residential suburb between Paarden Eiland and Rugby.", rent: "R4,500–6,500/mo",
    safety: 5.4, studentFit: 5.0, commute: "20–30 min by car" }),
  s({ slug: "rugby", name: "Rugby", area: "Inner east", at: [-33.8971, 18.4886],
    description: "Small residential suburb north of Brooklyn.", rent: "R4,500–6,500/mo",
    safety: 5.4, studentFit: 4.8, commute: "20–30 min by car" }),
  s({ slug: "ndabeni", name: "Ndabeni", area: "Inner east", at: [-33.9283, 18.4962],
    description: "Light-industrial area between Maitland and Pinelands.", rent: "R5,000–7,000/mo",
    safety: 5.4, studentFit: 3.0, nightlife: 2.0, commute: "25–35 min by car", caution: "Mostly industrial; few homes" }),
  s({ slug: "maitland", name: "Maitland", area: "Inner east", at: [-33.9203, 18.5020],
    description: "Working-class suburb along Voortrekker Road with a railway station.", rent: "R4,000–6,000/mo",
    safety: 5.0, transport: 6.6, studentFit: 4.6, commute: "25–35 min by car",
    bestFor: "Very low rents", caution: "Unsafe at night in many streets", landmarks: ["Maitland station"] }),
  s({ slug: "kensington", name: "Kensington", area: "Inner east", at: [-33.9118, 18.5063],
    description: "Residential suburb north of Maitland.", rent: "R4,000–6,000/mo",
    safety: 4.8, studentFit: 4.4, commute: "25–35 min by car", bestFor: "Very low rents", caution: "Gang-related crime in parts" }),
  s({ slug: "maitland-garden-village", name: "Maitland Garden Village", area: "Inner east", at: [-33.9337, 18.4845],
    description: "Small historic housing estate next to the Black River.", rent: "R4,000–6,000/mo",
    safety: 5.2, studentFit: 4.0, commute: "25–35 min by car", caution: "Few rentals" }),

  // ── Southern Suburbs ──
  s({ slug: "mowbray", name: "Mowbray", area: "Southern Suburbs", at: [-33.9489, 18.4857],
    description: "Busy student suburb close to UCT, with a transport interchange and many digs.",
    rent: "R4,500–7,000/mo", safety: 5.8, transport: 7.6, nightlife: 5.4, studentFit: 7.6,
    commute: "25–40 min by car or train and bus", bestFor: "Cheap rooms near UCT's main campus",
    caution: "Theft is common around the station", landmarks: ["Mowbray station"] }),
  s({ slug: "rosebank", name: "Rosebank", area: "Southern Suburbs", at: [-33.9545, 18.4744],
    description: "Leafy suburb right below UCT's main campus, full of student houses.",
    rent: "R5,000–7,500/mo", safety: 6.4, transport: 7.0, nightlife: 5.0, studentFit: 7.8,
    commute: "25–40 min by car", bestFor: "Student digs near UCT", caution: "Far from the Waterfront in rush hour" }),
  s({ slug: "rondebosch", name: "Rondebosch", area: "Southern Suburbs", at: [-33.9646, 18.4783],
    description: "Established university suburb with UCT's lower campus, the Baxter Theatre, Main Road shops and the Liesbeek River.",
    rent: "R5,000–7,800/mo", safety: 6.8, transport: 7.4, nightlife: 5.6, studentFit: 7.8,
    commute: "30–45 min by car", bestFor: "UCT student life with shops nearby",
    caution: "A long commute to the GSB at rush hour", landmarks: ["Baxter Theatre", "Rondebosch Main Road", "Rondebosch station"] }),
  s({ slug: "newlands", name: "Newlands", area: "Southern Suburbs", at: [-33.9705, 18.4686],
    description: "Green, upmarket suburb below the mountain, known for its rugby and cricket grounds.",
    rent: "R6,500–9,500/mo", safety: 7.4, transport: 6.4, nightlife: 4.6, studentFit: 6.6,
    commute: "30–45 min by car", bestFor: "Safe, green living", caution: "Expensive and far from the Waterfront",
    landmarks: ["Newlands Stadium"] }),
  s({ slug: "pinelands", name: "Pinelands", area: "Southern Suburbs", at: [-33.9356, 18.5081],
    description: "Garden-city suburb of houses and large gardens, planned in the 1920s.",
    rent: "R5,500–8,000/mo", safety: 7.4, transport: 5.6, nightlife: 2.6, studentFit: 5.6,
    commute: "25–35 min by car", bestFor: "Quiet, safe family suburb", caution: "Little nightlife; a car or ride-hailing is needed",
    landmarks: ["Pinelands station"] }),

  // ── Northern suburbs ──
  s({ slug: "metro", name: "Metro Industrial", area: "Northern suburbs", at: [-33.8957, 18.4825],
    description: "Industrial area at the mouth of the Salt River.", rent: "R5,000–7,000/mo",
    safety: 5.0, transport: 4.6, nightlife: 1.6, studentFit: 2.6, commute: "20–30 min by car",
    caution: "Industrial; almost no homes" }),
  s({ slug: "tijgerhof", name: "Tijgerhof", area: "Northern suburbs", at: [-33.8872, 18.4987],
    description: "Small residential suburb near the Black River.", rent: "R5,000–7,000/mo",
    safety: 6.2, studentFit: 4.6, commute: "20–30 min by car" }),
  s({ slug: "sanddrift", name: "Sanddrift", area: "Northern suburbs", at: [-33.8822, 18.5095],
    description: "Residential suburb next to Century City.", rent: "R5,500–7,500/mo",
    safety: 6.6, studentFit: 5.0, commute: "20–30 min by car" }),
  s({ slug: "century-city", name: "Century City", area: "Northern suburbs", at: [-33.8899, 18.5123],
    description: "Planned mixed-use precinct with the Canal Walk mall, offices and secure apartment complexes.",
    rent: "R7,000–10,000/mo", safety: 7.8, transport: 6.6, nightlife: 4.8, studentFit: 6.0,
    commute: "20–30 min by MyCiTi bus or car", bestFor: "Secure, modern apartments",
    caution: "Car-oriented and far from the city's social life", landmarks: ["Canal Walk"] }),
  s({ slug: "phoenix", name: "Phoenix", area: "Northern suburbs", at: [-33.8738, 18.5070],
    description: "Small residential area north of Century City.", rent: "R5,000–7,000/mo",
    safety: 6.2, studentFit: 4.4, commute: "25–35 min by car" }),
  s({ slug: "milnerton", name: "Milnerton", area: "Northern suburbs", at: [-33.8658, 18.4988],
    description: "Large suburb across Table Bay with a lagoon, a lighthouse and views of Table Mountain.",
    rent: "R5,500–8,000/mo", safety: 6.6, transport: 6.0, nightlife: 4.4, studentFit: 5.4,
    commute: "25–40 min by MyCiTi bus or car", bestFor: "More space for the money",
    caution: "Traffic on the R27 into town is heavy", landmarks: ["Milnerton Lighthouse"] }),
];

export type CapeTownListing = Listing & { suburbSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const capeTownListings: CapeTownListing[] = [
  { id: "cpt-sample-green-point-room", suburbSlug: "green-point", title: "Room near the Waterfront", rent: 10500, currency: "R ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: -33.9085, lng: 18.4110, description: "Furnished room in a shared flat a short walk from the GSB's Breakwater campus.", rooms: 1, sizeSqm: 13, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Wifi included", "Secure parking"] },
  { id: "cpt-sample-sea-point-studio", suburbSlug: "sea-point", title: "Studio near the promenade", rent: 13500, currency: "R ", type: "Studio", source: SAMPLE_SOURCE, lat: -33.9140, lng: 18.3880, description: "Small furnished studio a block from the Sea Point promenade, on the MyCiTi bus route.", rooms: 1, sizeSqm: 30, availableFrom: "1 Feb 2027", amenities: ["Furnished", "24h security"] },
  { id: "cpt-sample-gardens-room", suburbSlug: "gardens", title: "Room off Kloof Street", rent: 8500, currency: "R ", type: "Room", source: SAMPLE_SOURCE, lat: -33.9315, lng: 18.4100, description: "Room in a shared Victorian house close to the cafés of Kloof Street.", rooms: 1, sizeSqm: 14, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Garden"] },
  { id: "cpt-sample-woodstock-loft", suburbSlug: "woodstock", title: "Room in a Woodstock loft", rent: 7500, currency: "R ", type: "Room", source: SAMPLE_SOURCE, lat: -33.9275, lng: 18.4475, description: "Room in a converted warehouse loft shared with two young professionals.", rooms: 1, sizeSqm: 16, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Access control"], riskNote: "Higher caution" },
  { id: "cpt-sample-observatory-room", suburbSlug: "observatory", title: "Room in an Obs cottage", rent: 5500, currency: "R ", type: "Room", source: SAMPLE_SOURCE, lat: -33.9350, lng: 18.4690, description: "Room in a shared Victorian cottage near Lower Main Road, popular with students.", rooms: 1, sizeSqm: 12, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Electricity prepaid"] },
];

export function getCapeTownSuburbBySlug(slug: string): CapeTownSuburb | undefined {
  return capeTownSuburbs.find((x) => x.slug === slug);
}

export function getCapeTownListingsForSuburb(slug: string | null): CapeTownListing[] {
  if (!slug) return [];
  return capeTownListings.filter((l) => l.suburbSlug === slug);
}
