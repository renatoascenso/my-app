import type { Listing } from "./listings";

// Lyon's 9 municipal arrondissements.
// Boundaries and populations: IGN ADMIN EXPRESS COG CARTO 2026 (Licence Ouverte 2.0),
// credited in LyonExplorer. Room prices are estimated ranges; scores are editorial judgments.

export type LyonArrondissement = {
  slug: string;
  name: string;
  number: number;
  population: number;
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

const ord = (n: number) => (n === 1 ? "1st" : n === 2 ? "2nd" : n === 3 ? "3rd" : `${n}th`);
type Base = Omit<LyonArrondissement, "slug" | "name">;
const a = (b: Base): LyonArrondissement => ({ ...b, slug: `lyon-${b.number}`, name: `${ord(b.number)} arrondissement` });

export const lyonArrondissements: LyonArrondissement[] = [
  a({ number: 1, population: 29040, lat: 45.77011, lng: 4.82859,
    description: "The north of the Presqu'île and the Pentes de la Croix-Rousse: Place des Terreaux, the Opéra, the Hôtel de Ville and steep streets full of bars, ateliers and student flats.",
    rent: "€520–€650/mo", safety: 7.6, transport: 9.4, nightlife: 9.0, studentFit: 8.6,
    commute: "10–15 min to the Rhône campuses", bestFor: "Nightlife and a young, creative crowd", caution: "Noisy evenings on the Pentes",
    landmarks: ["Place des Terreaux", "Opéra", "Hôtel de Ville", "Pentes de la Croix-Rousse"] }),
  a({ number: 2, population: 29880, lat: 45.7483, lng: 4.8257,
    description: "The heart of the Presqu'île from Place Bellecour to Perrache and the modern Confluence district where the Rhône and Saône meet.",
    rent: "€550–€700/mo", safety: 8.0, transport: 9.4, nightlife: 7.5, studentFit: 7.4,
    commute: "5–10 min to the Rhône campuses", bestFor: "Central living between the two rivers", caution: "Among the priciest areas in Lyon",
    landmarks: ["Place Bellecour", "Ainay", "Perrache station", "Confluence"] }),
  a({ number: 3, population: 101523, lat: 45.75334, lng: 4.86935,
    description: "Lyon's most populous arrondissement around the Part-Dieu business district and station, with Lyon 3's Manufacture des Tabacs campus and the Halles Paul Bocuse food market.",
    rent: "€480–€620/mo", safety: 7.6, transport: 9.6, nightlife: 6.5, studentFit: 8.4,
    commute: "10–15 min to the Rhône campuses; Manufacture des Tabacs on site", bestFor: "Lyon 3 students and train connections", caution: "Busy, less charming around the station",
    landmarks: ["Part-Dieu station", "Manufacture des Tabacs (Lyon 3)", "Halles Paul Bocuse"] }),
  a({ number: 4, population: 35232, lat: 45.77899, lng: 4.8238,
    description: "The Croix-Rousse plateau: a village-like neighborhood with markets, cafés and views over the city, historically home to Lyon's silk workers.",
    rent: "€500–€630/mo", safety: 8.6, transport: 8.4, nightlife: 6.5, studentFit: 7.8,
    commute: "20 min to the Rhône campuses", bestFor: "Village atmosphere and markets", caution: "Steep climb up from the center",
    landmarks: ["Croix-Rousse plateau"] }),
  a({ number: 5, population: 48277, lat: 45.75624, lng: 4.8029,
    description: "Vieux Lyon, the Renaissance old town on the Saône, and the Fourvière hill with its basilica, plus quieter residential areas behind the hill.",
    rent: "€480–€600/mo", safety: 8.4, transport: 8.4, nightlife: 7.0, studentFit: 7.4,
    commute: "15 min to the Rhône campuses", bestFor: "Old-town charm and views", caution: "Tourist crowds in Vieux Lyon; hilly",
    landmarks: ["Vieux Lyon (Saint-Jean)", "Fourvière basilica", "Saint-Paul station"] }),
  a({ number: 6, population: 50718, lat: 45.77301, lng: 4.85198,
    description: "An elegant, well-off district of boulevards around the Parc de la Tête d'Or and the Brotteaux, a short tram ride from the La Doua campus in Villeurbanne.",
    rent: "€550–€700/mo", safety: 8.8, transport: 9.0, nightlife: 6.0, studentFit: 7.6,
    commute: "15 min to the Rhône campuses; 10–15 min to La Doua", bestFor: "Parc de la Tête d'Or and calm streets", caution: "Higher rents than average",
    landmarks: ["Parc de la Tête d'Or", "Brotteaux", "Masséna"] }),
  a({ number: 7, population: 87491, lat: 45.73328, lng: 4.83735,
    description: "Lyon's university quarter: Lyon 2 and Lyon 3 on the Rhône quays, Sciences Po Lyon, ENS de Lyon in Gerland and the lively, multicultural Guillotière.",
    rent: "€470–€600/mo", safety: 7.4, transport: 9.2, nightlife: 8.0, studentFit: 9.4,
    commute: "You're at the Rhône campuses", bestFor: "Living next to Lyon 2, Lyon 3, ENS and Sciences Po", caution: "Some streets around Guillotière feel rough at night",
    landmarks: ["Lyon 2 & Lyon 3 (Rhône quays)", "Sciences Po Lyon", "ENS de Lyon", "Guillotière", "Jean Macé", "Gerland stadium"] }),
  a({ number: 8, population: 84956, lat: 45.73399, lng: 4.86911,
    description: "A residential district around Monplaisir-Lumière, birthplace of cinema, with Lyon 1's Rockefeller health campus and Grange Blanche hospitals.",
    rent: "€430–€550/mo", safety: 7.8, transport: 8.6, nightlife: 5.0, studentFit: 8.2,
    commute: "15 min to the Rhône campuses; Rockefeller campus on site", bestFor: "Medicine and health students, good value", caution: "Quieter nightlife",
    landmarks: ["Lyon 1 Rockefeller campus", "Monplaisir-Lumière", "Grange Blanche", "États-Unis (Tony Garnier)"] }),
  a({ number: 9, population: 53657, lat: 45.78293, lng: 4.80888,
    description: "Vaise and the north-west along the Saône, a former industrial area transformed into a residential and business district, with green hills and the Île Barbe.",
    rent: "€420–€550/mo", safety: 7.8, transport: 8.0, nightlife: 4.5, studentFit: 7.2,
    commute: "20–25 min to the Rhône campuses", bestFor: "Lower rents and green surroundings", caution: "Further from campuses and nightlife",
    landmarks: ["Vaise", "Saint-Rambert-l'Île-Barbe"] }),
];

export type LyonArrondissementListing = Listing & { arrondissementSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const lyonListings: LyonArrondissementListing[] = [
  { id: "ly-sample-7-room", arrondissementSlug: "lyon-7", title: "Room near the Rhône campuses", rent: 480, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 45.7475, lng: 4.8420, description: "Room in a 3-person colocation a few minutes from Lyon 2 and Lyon 3 on the quays.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "ly-sample-7-studio", arrondissementSlug: "lyon-7", title: "Studio in Gerland near ENS", rent: 620, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 45.7320, lng: 4.8320, description: "Furnished studio a short walk from ENS de Lyon.", rooms: 1, sizeSqm: 20, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "ly-sample-1-room", arrondissementSlug: "lyon-1", title: "Room on the Pentes de la Croix-Rousse", rent: 530, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.7705, lng: 4.8330, description: "Room in an old canut building with high ceilings, shared with two students.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "ly-sample-3-room", arrondissementSlug: "lyon-3", title: "Room near the Manufacture des Tabacs", rent: 500, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 45.7490, lng: 4.8690, description: "Room in a shared flat close to the Lyon 3 campus and the tram.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "ly-sample-8-room", arrondissementSlug: "lyon-8", title: "Room near Grange Blanche", rent: 460, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.7395, lng: 4.8790, description: "Quiet room shared with medicine students, near the Rockefeller campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "ly-sample-6-studio", arrondissementSlug: "lyon-6", title: "Studio by the Tête d'Or park", rent: 690, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 45.7720, lng: 4.8540, description: "Bright studio near the park, with trams to La Doua.", rooms: 1, sizeSqm: 21, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette"], riskNote: "Higher caution" },
];

export function getLyonArrondissementBySlug(slug: string): LyonArrondissement | undefined {
  return lyonArrondissements.find((x) => x.slug === slug);
}

export function getLyonListingsForArrondissement(slug: string | null): LyonArrondissementListing[] {
  if (!slug) return [];
  return lyonListings.filter((l) => l.arrondissementSlug === slug);
}
