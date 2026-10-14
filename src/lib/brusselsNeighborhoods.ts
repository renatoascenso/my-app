import type { Listing } from "./listings";

// The 19 municipalities (communes / gemeenten) of the Brussels-Capital Region.
// Boundaries: © OpenStreetMap contributors (ODbL), which follow the official cadastral municipal
// boundaries — credited in BrusselsExplorer. Room prices are estimated ranges; scores are editorial judgments.

export type BrusselsCommune = {
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

type Base = Omit<BrusselsCommune, "lat" | "lng"> & { at: [number, number] };
const c = ({ at, ...rest }: Base): BrusselsCommune => ({ ...rest, lat: at[0], lng: at[1] });

export const brusselsCommunes: BrusselsCommune[] = [
  c({ slug: "city-of-brussels", name: "City of Brussels", badge: "Bruxelles · Brussel", at: [50.87297, 4.37524],
    description: "The historic center around the Grand-Place, the European Quarter, the Cinquantenaire and Laeken with the Atomium — and, along its avenue Louise strip, ULB's main Solbosch campus and the Bois de la Cambre.",
    rent: "€600–€750/mo", safety: 7.2, transport: 9.6, nightlife: 9.2, studentFit: 8.4,
    commute: "ULB Solbosch, UCLouvain Saint-Louis and KU Leuven Brussels on its territory", bestFor: "Central living and ULB students", caution: "Busy, touristy center; some streets feel rough at night",
    landmarks: ["Grand-Place", "ULB Solbosch campus", "UCLouvain Saint-Louis", "KU Leuven Brussels campus", "European Quarter (Schuman)", "Cinquantenaire", "Atomium", "Bois de la Cambre"] }),
  c({ slug: "ixelles", name: "Ixelles", badge: "Elsene", at: [50.82285, 4.3813],
    description: "Brussels' student heart: the VUB and ULB's La Plaine campus, Place Flagey, Matonge, Châtelain and Place Fernand Cocq — just next to ULB's Solbosch campus.",
    rent: "€620–€780/mo", safety: 8.0, transport: 9.2, nightlife: 9.0, studentFit: 9.6,
    commute: "VUB and ULB La Plaine on site; 10 min to Solbosch", bestFor: "ULB and VUB students who want café and bar life", caution: "High demand and rising prices",
    landmarks: ["VUB main campus", "ULB La Plaine campus", "Place Flagey", "Matonge", "Châtelain", "Place du Luxembourg"] }),
  c({ slug: "etterbeek", name: "Etterbeek", badge: "Etterbeek", at: [50.83298, 4.39461],
    description: "A dense, central municipality between the European Quarter and the university campuses, with many students and young professionals.",
    rent: "€600–€750/mo", safety: 8.2, transport: 9.0, nightlife: 7.0, studentFit: 9.0,
    commute: "5–10 min to VUB and ULB La Plaine; 15 min to Solbosch", bestFor: "Living close to both universities", caution: "Busy streets near the European Quarter",
    landmarks: [] }),
  c({ slug: "saint-gilles", name: "Saint-Gilles", badge: "Sint-Gillis", at: [50.82947, 4.34463],
    description: "Art Nouveau houses, the lively Parvis de Saint-Gilles and Brussels-South (Midi) station — popular with students, artists and young expats.",
    rent: "€580–€720/mo", safety: 7.0, transport: 9.2, nightlife: 8.8, studentFit: 8.8,
    commute: "15–20 min to Solbosch and La Plaine", bestFor: "Bars, culture and Art Nouveau", caution: "The area around Brussels-South can feel unsafe at night",
    landmarks: ["Parvis de Saint-Gilles", "Brussels-South (Midi) station"] }),
  c({ slug: "saint-josse-ten-noode", name: "Saint-Josse-ten-Noode", badge: "Sint-Joost-ten-Node", at: [50.85381, 4.36936],
    description: "Belgium's smallest and most densely populated municipality, multicultural and right next to the center.",
    rent: "€520–€650/mo", safety: 6.8, transport: 9.2, nightlife: 6.0, studentFit: 7.6,
    commute: "15–20 min to Solbosch; 5 min to UCLouvain Saint-Louis", bestFor: "Low rents next to the center", caution: "Some streets feel rough at night",
    landmarks: [] }),
  c({ slug: "schaerbeek", name: "Schaerbeek", badge: "Schaarbeek", at: [50.8618, 4.38606],
    description: "A large, diverse municipality with beautiful 19th-century houses around Place Dailly and the Josaphat park.",
    rent: "€540–€680/mo", safety: 7.0, transport: 8.4, nightlife: 6.5, studentFit: 8.0,
    commute: "20–25 min to the campuses", bestFor: "Character houses at fair prices", caution: "Big differences from street to street",
    landmarks: ["Place Dailly"] }),
  c({ slug: "anderlecht", name: "Anderlecht", badge: "Anderlecht", at: [50.82898, 4.29291],
    description: "A large western municipality around the canal and the Abattoirs market, home to ULB's Erasme hospital and health campus.",
    rent: "€500–€640/mo", safety: 6.6, transport: 8.0, nightlife: 5.0, studentFit: 7.4,
    commute: "ULB Erasme on site; 25–30 min to Solbosch", bestFor: "Medicine students at Erasme and low rents", caution: "Some areas near the canal feel unsafe at night",
    landmarks: ["ULB Erasme campus", "Abattoirs market"] }),
  c({ slug: "molenbeek-saint-jean", name: "Molenbeek-Saint-Jean", badge: "Sint-Jans-Molenbeek", at: [50.85523, 4.31845],
    description: "Just across the canal from the center, with a lively old core and lower rents.",
    rent: "€500–€630/mo", safety: 6.4, transport: 8.4, nightlife: 4.5, studentFit: 7.2,
    commute: "20–25 min to Solbosch", bestFor: "Low rents close to the center", caution: "Lower safety ratings in parts of the municipality",
    landmarks: [] }),
  c({ slug: "forest", name: "Forest", badge: "Vorst", at: [50.81406, 4.32418],
    description: "A green, residential southern municipality with the Forest National concert hall and Duden park.",
    rent: "€540–€670/mo", safety: 7.4, transport: 7.8, nightlife: 5.5, studentFit: 7.4,
    commute: "20–25 min to Solbosch", bestFor: "Parks and value near Saint-Gilles", caution: "Hilly; fewer metro links",
    landmarks: [] }),
  c({ slug: "uccle", name: "Uccle", badge: "Ukkel", at: [50.78987, 4.36137],
    description: "A leafy, well-off southern municipality bordering the Sonian Forest, with the Royal Observatory.",
    rent: "€600–€760/mo", safety: 8.8, transport: 7.2, nightlife: 4.5, studentFit: 6.8,
    commute: "15–25 min to Solbosch", bestFor: "Calm, green surroundings", caution: "No metro; fewer student flatshares",
    landmarks: ["Royal Observatory"] }),
  c({ slug: "watermael-boitsfort", name: "Watermael-Boitsfort", badge: "Watermaal-Bosvoorde", at: [50.79293, 4.42349],
    description: "Garden cities and the edge of the Sonian Forest in the south-east.",
    rent: "€580–€720/mo", safety: 9.0, transport: 6.8, nightlife: 3.0, studentFit: 6.4,
    commute: "20–25 min to the campuses", bestFor: "Nature and quiet", caution: "Little nightlife; limited transport",
    landmarks: [] }),
  c({ slug: "auderghem", name: "Auderghem", badge: "Oudergem", at: [50.81019, 4.43802],
    description: "A calm south-eastern municipality on metro line 5, near the Delta hub and the Sonian Forest.",
    rent: "€560–€700/mo", safety: 8.6, transport: 7.8, nightlife: 3.5, studentFit: 7.4,
    commute: "10–15 min to VUB and La Plaine", bestFor: "Quiet living near the campuses", caution: "Limited evening life",
    landmarks: ["Delta"] }),
  c({ slug: "woluwe-saint-pierre", name: "Woluwe-Saint-Pierre", badge: "Sint-Pieters-Woluwe", at: [50.8311, 4.44309],
    description: "A green, affluent eastern municipality with parks and villas along the Avenue de Tervueren.",
    rent: "€580–€740/mo", safety: 9.0, transport: 7.6, nightlife: 3.5, studentFit: 6.8,
    commute: "20 min to the campuses", bestFor: "Green, safe streets", caution: "Expensive for students",
    landmarks: [] }),
  c({ slug: "woluwe-saint-lambert", name: "Woluwe-Saint-Lambert", badge: "Sint-Lambrechts-Woluwe", at: [50.8479, 4.43155],
    description: "Home to UCLouvain's Brussels Woluwe health campus and the Saint-Luc hospital, plus the Woluwe Shopping center.",
    rent: "€560–€700/mo", safety: 8.6, transport: 7.8, nightlife: 3.5, studentFit: 8.0,
    commute: "UCLouvain Woluwe on site; 20–25 min to Solbosch", bestFor: "Medicine and health students at UCLouvain", caution: "Quiet in the evenings",
    landmarks: ["UCLouvain Brussels Woluwe", "Woluwe Shopping"] }),
  c({ slug: "evere", name: "Evere", badge: "Evere", at: [50.87002, 4.40823],
    description: "A residential north-eastern municipality near NATO's headquarters.",
    rent: "€520–€650/mo", safety: 7.8, transport: 7.2, nightlife: 3.0, studentFit: 6.6,
    commute: "25–30 min to the campuses", bestFor: "Lower rents and quiet", caution: "Far from student life",
    landmarks: [] }),
  c({ slug: "jette", name: "Jette", badge: "Jette", at: [50.88173, 4.32137],
    description: "A green north-western municipality with the VUB's Brussels Health Campus and UZ Brussel hospital.",
    rent: "€520–€650/mo", safety: 7.8, transport: 7.6, nightlife: 4.0, studentFit: 7.8,
    commute: "VUB Health Campus on site; 25–30 min to the main campuses", bestFor: "VUB medicine students", caution: "Far from the main campuses",
    landmarks: ["VUB Brussels Health Campus (UZ Brussel)"] }),
  c({ slug: "koekelberg", name: "Koekelberg", badge: "Koekelberg", at: [50.86299, 4.32409],
    description: "A small municipality dominated by the huge Basilica of the Sacred Heart.",
    rent: "€500–€630/mo", safety: 7.4, transport: 7.8, nightlife: 3.5, studentFit: 7.0,
    commute: "20–25 min to the campuses", bestFor: "Low rents and quiet", caution: "Limited nightlife",
    landmarks: ["Koekelberg Basilica"] }),
  c({ slug: "ganshoren", name: "Ganshoren", badge: "Ganshoren", at: [50.87439, 4.30949],
    description: "A quiet, green residential municipality in the north-west.",
    rent: "€500–€630/mo", safety: 8.2, transport: 6.8, nightlife: 2.5, studentFit: 6.2,
    commute: "30 min to the campuses", bestFor: "Calm, green streets", caution: "Far from campus life",
    landmarks: [] }),
  c({ slug: "berchem-sainte-agathe", name: "Berchem-Sainte-Agathe", badge: "Sint-Agatha-Berchem", at: [50.86466, 4.29392],
    description: "A small residential municipality on the region's western edge.",
    rent: "€500–€620/mo", safety: 8.2, transport: 6.6, nightlife: 2.5, studentFit: 6.0,
    commute: "30–35 min to the campuses", bestFor: "Quiet suburban life", caution: "Far from the universities",
    landmarks: [] }),
];

export type BrusselsCommuneListing = Listing & { communeSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const brusselsListings: BrusselsCommuneListing[] = [
  { id: "bx-sample-plaine-room", communeSlug: "ixelles", title: "Kot near VUB and La Plaine", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.8215, lng: 4.3955, description: "Student room with a shared kitchen, a short walk to the VUB and ULB La Plaine campuses.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Utilities included"] },
  { id: "bx-sample-flagey-room", communeSlug: "ixelles", title: "Room near Place Flagey", rent: 690, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.8280, lng: 4.3700, description: "Room with private shower in a shared house close to Flagey and the ponds.", rooms: 1, sizeSqm: 15, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Private bathroom"] },
  { id: "bx-sample-centre-studio", communeSlug: "city-of-brussels", title: "Studio near the Grand-Place", rent: 850, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 50.8470, lng: 4.3490, description: "Small furnished studio in the historic center.", rooms: 1, sizeSqm: 24, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "bx-sample-stgilles-room", communeSlug: "saint-gilles", title: "Room near the Parvis", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.8300, lng: 4.3440, description: "Room in an Art Nouveau house share in Saint-Gilles.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "bx-sample-etterbeek-room", communeSlug: "etterbeek", title: "Kot in Etterbeek", rent: 610, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.8330, lng: 4.3900, description: "Student room between the campuses and the European Quarter.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Utilities included"] },
  { id: "bx-sample-schaerbeek-room", communeSlug: "schaerbeek", title: "Room in a Schaerbeek town house", rent: 580, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.8600, lng: 4.3800, description: "Bright room in a renovated 19th-century house near Place Dailly.", rooms: 1, sizeSqm: 16, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Garden"] },
  { id: "bx-sample-erasme-room", communeSlug: "anderlecht", title: "Room near Erasme", rent: 540, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.8160, lng: 4.2700, description: "Room shared with medicine students, close to the Erasme metro.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
  { id: "bx-sample-jette-room", communeSlug: "jette", title: "Room near UZ Brussel", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.8840, lng: 4.3150, description: "Room in a shared flat near the VUB Health Campus.", rooms: 1, sizeSqm: 14, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "bx-sample-woluwe-room", communeSlug: "woluwe-saint-lambert", title: "Room near UCLouvain Woluwe", rent: 600, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.8490, lng: 4.4480, description: "Room in a quiet house a short walk to the Woluwe campus.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Utilities included"] },
];

export function getBrusselsCommuneBySlug(slug: string): BrusselsCommune | undefined {
  return brusselsCommunes.find((x) => x.slug === slug);
}

export function getBrusselsListingsForCommune(slug: string | null): BrusselsCommuneListing[] {
  if (!slug) return [];
  return brusselsListings.filter((l) => l.communeSlug === slug);
}
