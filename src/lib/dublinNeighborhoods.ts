import type { Listing } from "./listings";

// Dublin's Local Electoral Areas (2024): the 11 areas of Dublin City Council plus the four inner
// Dún Laoghaire-Rathdown areas around UCD. Boundaries: © Tailte Éireann (CC BY 4.0), credited in
// DublinExplorer. Room prices are estimated ranges; scores are editorial judgments.

export type DublinArea = {
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

type Base = Omit<DublinArea, "lat" | "lng" | "badge"> & { at: [number, number]; dlr?: boolean };
const a = ({ at, dlr = false, ...rest }: Base): DublinArea => ({
  ...rest,
  badge: dlr ? "Dún Laoghaire-Rathdown" : "Dublin City",
  lat: at[0],
  lng: at[1],
});

export const dublinAreas: DublinArea[] = [
  a({ slug: "south-east-inner-city", name: "South East Inner City", at: [53.33933, -6.23777],
    description: "Trinity College, Grafton Street, St Stephen's Green and Temple Bar, plus Portobello, the Grand Canal Dock tech quarter and the RCSI.",
    rent: "€950–€1,250/mo", safety: 7.8, transport: 9.8, nightlife: 9.6, studentFit: 8.4,
    commute: "Trinity and RCSI on site; 25 min to UCD by bus", bestFor: "Trinity students and city-center life", caution: "Dublin's highest rents and tiny rooms",
    landmarks: ["Trinity College Dublin", "RCSI (St Stephen's Green)", "Grafton Street", "Temple Bar", "Portobello", "Grand Canal Dock", "Aviva Stadium"] }),
  a({ slug: "north-inner-city", name: "North Inner City", at: [53.35295, -6.24652],
    description: "O'Connell Street, Smithfield and Stoneybatter, the IFSC with the National College of Ireland, and TU Dublin's Grangegorman campus.",
    rent: "€850–€1,100/mo", safety: 6.8, transport: 9.6, nightlife: 8.0, studentFit: 8.6,
    commute: "TU Dublin Grangegorman and NCI on site; 10 min to Trinity", bestFor: "TU Dublin students and central value", caution: "Some streets feel unsafe at night",
    landmarks: ["TU Dublin (Grangegorman)", "National College of Ireland (IFSC)", "O'Connell Street", "Smithfield", "Stoneybatter", "Croke Park", "Connolly Station"] }),
  a({ slug: "south-west-inner-city", name: "South West Inner City", at: [53.34042, -6.29767],
    description: "The Liberties, Kilmainham and the area around Heuston Station and St James's Hospital, with Griffith College on the South Circular Road.",
    rent: "€850–€1,050/mo", safety: 7.2, transport: 8.8, nightlife: 7.0, studentFit: 8.0,
    commute: "Griffith College and St James's on site; 15–20 min to Trinity", bestFor: "Medicine students and good value near the center", caution: "Mixed areas; check the exact street",
    landmarks: ["Griffith College", "St James's Hospital", "Heuston Station", "Kilmainham"] }),
  a({ slug: "pembroke", name: "Pembroke", at: [53.32272, -6.23352],
    description: "Leafy Ballsbridge and Donnybrook, plus Ranelagh and Rathmines — a long-time student favorite between Trinity and UCD.",
    rent: "€900–€1,200/mo", safety: 8.8, transport: 8.8, nightlife: 7.8, studentFit: 9.0,
    commute: "15–20 min to Trinity and UCD", bestFor: "Students splitting time between Trinity and UCD", caution: "Expensive, especially in Ballsbridge",
    landmarks: ["Rathmines", "Ranelagh", "Donnybrook", "Ballsbridge"] }),
  a({ slug: "kimmage-rathmines", name: "Kimmage-Rathmines", at: [53.31856, -6.28779],
    description: "Harold's Cross, Terenure, Kimmage and Crumlin: residential south-side areas with good bus links into the center.",
    rent: "€800–€1,000/mo", safety: 8.2, transport: 7.8, nightlife: 5.5, studentFit: 7.8,
    commute: "20–30 min to Trinity; 25–35 min to UCD", bestFor: "Quieter living at slightly lower rents", caution: "Bus-dependent",
    landmarks: [] }),
  a({ slug: "cabra-glasnevin", name: "Cabra-Glasnevin", at: [53.36409, -6.30565],
    description: "Drumcondra and Phibsborough, Glasnevin, Cabra and the Phoenix Park, with DCU's St Patrick's campus and the Mater hospital.",
    rent: "€800–€1,000/mo", safety: 7.8, transport: 8.4, nightlife: 6.5, studentFit: 8.6,
    commute: "DCU St Patrick's on site; 10–15 min to DCU Glasnevin", bestFor: "DCU students and the Phoenix Park", caution: "Busy on Croke Park match days",
    landmarks: ["DCU St Patrick's (Drumcondra)", "Phibsborough", "Phoenix Park", "Mater Hospital", "Glasnevin"] }),
  a({ slug: "artane-whitehall", name: "Artane-Whitehall", at: [53.39334, -6.22231],
    description: "Home to DCU's main Glasnevin campus and Beaumont Hospital, with residential Whitehall and Artane around it.",
    rent: "€780–€950/mo", safety: 8.0, transport: 7.6, nightlife: 4.5, studentFit: 8.6,
    commute: "DCU Glasnevin on site; 25–30 min to Trinity", bestFor: "DCU students", caution: "Quiet nightlife",
    landmarks: ["DCU Glasnevin campus", "Beaumont Hospital"] }),
  a({ slug: "ballymun-finglas", name: "Ballymun-Finglas", at: [53.39081, -6.28929],
    description: "North-western Dublin around Ballymun and Finglas, close to DCU and on the planned MetroLink route.",
    rent: "€720–€880/mo", safety: 6.8, transport: 7.0, nightlife: 3.5, studentFit: 7.0,
    commute: "10–15 min to DCU; 30–40 min to Trinity", bestFor: "Lower rents near DCU", caution: "Some areas feel unsafe at night",
    landmarks: [] }),
  a({ slug: "clontarf", name: "Clontarf", at: [53.37091, -6.20527],
    description: "A seaside suburb with a long promenade along Dublin Bay, plus Fairview and Marino closer to town.",
    rent: "€850–€1,050/mo", safety: 8.6, transport: 7.8, nightlife: 5.0, studentFit: 7.2,
    commute: "20–30 min to Trinity", bestFor: "Sea views and calm", caution: "Few student flatshares",
    landmarks: ["Clontarf promenade"] }),
  a({ slug: "donaghmede", name: "Donaghmede", at: [53.3904, -6.16398],
    description: "North-eastern suburbs around Raheny, Donaghmede and Kilbarrack, on the DART line.",
    rent: "€750–€900/mo", safety: 8.0, transport: 7.4, nightlife: 3.5, studentFit: 6.6,
    commute: "25–35 min to Trinity by DART", bestFor: "Suburban living by the sea", caution: "Far from campus life",
    landmarks: [] }),
  a({ slug: "ballyfermot-drimnagh", name: "Ballyfermot-Drimnagh", at: [53.33514, -6.3462],
    description: "South-western suburbs along the Luas Red Line, with some of the city's lower rents.",
    rent: "€720–€880/mo", safety: 6.8, transport: 7.6, nightlife: 3.5, studentFit: 6.8,
    commute: "25–35 min to Trinity on the Luas", bestFor: "Budget rooms on the Luas", caution: "Lower safety ratings in parts of the area",
    landmarks: [] }),
  a({ slug: "stillorgan", name: "Stillorgan", dlr: true, at: [53.2849, -6.2017],
    description: "Home to UCD's Belfield campus, with Clonskeagh, Mount Merrion and Stillorgan around it.",
    rent: "€900–€1,150/mo", safety: 9.0, transport: 7.6, nightlife: 4.5, studentFit: 8.8,
    commute: "UCD Belfield on site; 25–30 min to Trinity", bestFor: "UCD students", caution: "Expensive suburbs; few cheap rooms",
    landmarks: ["UCD Belfield campus"] }),
  a({ slug: "blackrock", name: "Blackrock", dlr: true, at: [53.29243, -6.18337],
    description: "A coastal village with a DART station and easy cycling distance to UCD.",
    rent: "€900–€1,150/mo", safety: 9.0, transport: 8.0, nightlife: 5.0, studentFit: 7.6,
    commute: "10–15 min to UCD; 20 min to Trinity by DART", bestFor: "Seaside living near UCD", caution: "High rents",
    landmarks: ["Blackrock village"] }),
  a({ slug: "dundrum", name: "Dundrum", dlr: true, at: [53.29082, -6.25079],
    description: "Suburban Dundrum with its big shopping center on the Luas Green Line, close to UCD.",
    rent: "€850–€1,100/mo", safety: 8.8, transport: 8.0, nightlife: 4.5, studentFit: 7.6,
    commute: "15 min to UCD; 20 min to Trinity on the Luas", bestFor: "Quiet living on the Luas", caution: "Little nightlife",
    landmarks: ["Dundrum Town Centre"] }),
  a({ slug: "dun-laoghaire", name: "Dún Laoghaire", dlr: true, at: [53.28034, -6.13322],
    description: "A harbor town with piers, sea swimming and the DART into the city, home to the IADT art and design college.",
    rent: "€850–€1,100/mo", safety: 8.8, transport: 7.8, nightlife: 5.5, studentFit: 7.0,
    commute: "20–25 min to UCD; 25–30 min to Trinity by DART", bestFor: "Seaside life with a direct train", caution: "Further from the campuses",
    landmarks: ["Dún Laoghaire Harbour"] }),
];

export type DublinAreaListing = Listing & { areaSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const dublinListings: DublinAreaListing[] = [
  { id: "db-sample-trinity-studio", areaSlug: "south-east-inner-city", title: "Studio near Trinity", rent: 1750, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 53.3380, lng: -6.2620, description: "Small furnished studio a few minutes' walk from Trinity and St Stephen's Green.", rooms: 1, sizeSqm: 22, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "db-sample-portobello-room", areaSlug: "south-east-inner-city", title: "Room in Portobello", rent: 1050, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 53.3320, lng: -6.2650, description: "Double room in a shared house by the canal, 15 minutes' walk to Trinity.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "RTB-registered tenancy"] },
  { id: "db-sample-stoneybatter-room", areaSlug: "north-inner-city", title: "Room in Stoneybatter", rent: 950, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 53.3520, lng: -6.2850, description: "Room in a shared terraced house near TU Dublin Grangegorman.", rooms: 1, sizeSqm: 11, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "db-sample-rathmines-room", areaSlug: "pembroke", title: "Room in Rathmines", rent: 1000, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 53.3240, lng: -6.2650, description: "Room in a converted Victorian house, between Trinity and UCD.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "db-sample-ucd-digs", areaSlug: "stillorgan", title: "Digs room near UCD", rent: 850, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 53.3050, lng: -6.2150, description: "Room in a family home (Rent-a-Room), a 10-minute walk to UCD Belfield. Weekdays only.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included", "Some meals included"] },
  { id: "db-sample-dcu-room", areaSlug: "artane-whitehall", title: "Room near DCU", rent: 850, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 53.3840, lng: -6.2500, description: "Room in a shared house a short walk from DCU's Glasnevin campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "db-sample-drumcondra-room", areaSlug: "cabra-glasnevin", title: "Room in Drumcondra", rent: 900, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 53.3700, lng: -6.2560, description: "Room near DCU St Patrick's, 20 minutes' walk to the city center.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished"] },
  { id: "db-sample-liberties-room", areaSlug: "south-west-inner-city", title: "Room in the Liberties", rent: 920, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 53.3400, lng: -6.2900, description: "Room near St James's Hospital and the Luas Red Line.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "RTB-registered tenancy"] },
  { id: "db-sample-haroldscross-room", areaSlug: "kimmage-rathmines", title: "Room in Harold's Cross", rent: 880, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 53.3250, lng: -6.2800, description: "Room in a quiet shared house with buses to the center.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Garden"] },
];

export function getDublinAreaBySlug(slug: string): DublinArea | undefined {
  return dublinAreas.find((x) => x.slug === slug);
}

export function getDublinListingsForArea(slug: string | null): DublinAreaListing[] {
  if (!slug) return [];
  return dublinListings.filter((l) => l.areaSlug === slug);
}
