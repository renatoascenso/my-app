import type { Listing } from "./listings";

// Paris's 20 municipal arrondissements, plus nine communes in the south-west that link Paris to
// HEC Paris in Jouy-en-Josas, where the CEMS MIM is taught.
// Boundaries and populations: IGN ADMIN EXPRESS (Licence Ouverte 2.0; communes via geo.api.gouv.fr),
// credited in ParisExplorer. Room prices are estimated ranges; scores are editorial judgments.

export type ParisArrondissement = {
  slug: string;
  name: string;
  number: number;
  badge?: string;
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
type Base = Omit<ParisArrondissement, "slug" | "name">;
const a = (b: Base): ParisArrondissement => ({ ...b, slug: `paris-${b.number}`, name: `${ord(b.number)} arrondissement` });
// Communes outside Paris have no arrondissement number (0) and carry their own badge.
const c = (b: Omit<ParisArrondissement, "number" | "badge">): ParisArrondissement => ({ ...b, number: 0, badge: "Towards HEC Paris" });

export const parisArrondissements: ParisArrondissement[] = [
  a({ number: 1, population: 15475, lat: 48.86255, lng: 2.33642,
    description: "The historic heart of Paris around the Louvre, the Tuileries and Les Halles. Spectacular but mostly museums, offices and shops — very few people live here.",
    rent: "€900–€1,150/mo", safety: 7.6, transport: 10, nightlife: 7.5, studentFit: 5.5,
    commute: "10–15 min to the Latin Quarter", bestFor: "Living at the center of everything", caution: "Rare, expensive flats; crowds at Les Halles",
    landmarks: ["Louvre", "Les Halles"] }),
  a({ number: 2, population: 20433, lat: 48.86827, lng: 2.3428,
    description: "Paris's smallest arrondissement, with covered passages, the Bourse and the busy Montorgueil food street. Central and lively.",
    rent: "€900–€1,150/mo", safety: 7.8, transport: 9.8, nightlife: 8.0, studentFit: 6.5,
    commute: "15 min to the Latin Quarter", bestFor: "Cafés, restaurants and central location", caution: "Small, old flats at high prices",
    landmarks: ["Bourse"] }),
  a({ number: 3, population: 32772, lat: 48.86286, lng: 2.35997,
    description: "The northern Marais: galleries, boutiques, the Picasso museum and the Arts et Métiers. Trendy and very central.",
    rent: "€900–€1,150/mo", safety: 8.2, transport: 9.6, nightlife: 8.0, studentFit: 6.8,
    commute: "15 min to the Latin Quarter", bestFor: "Galleries, bars and the Marais lifestyle", caution: "Among the most expensive areas",
    landmarks: ["Musée Picasso", "Arts et Métiers"] }),
  a({ number: 4, population: 28039, lat: 48.85433, lng: 2.35756,
    description: "The southern Marais and the islands — Île de la Cité with Notre-Dame and Île Saint-Louis. Beautiful, historic and right across the river from the Latin Quarter.",
    rent: "€950–€1,200/mo", safety: 8.2, transport: 9.6, nightlife: 8.0, studentFit: 6.8,
    commute: "5–10 min walk to the Latin Quarter", bestFor: "Walking to the Sorbonne from the Marais", caution: "High prices and tourist crowds",
    landmarks: ["Notre-Dame", "Le Marais"] }),
  a({ number: 5, population: 55925, lat: 48.84441, lng: 2.35068,
    description: "The Latin Quarter: the Sorbonne, the Panthéon, ENS, the Jussieu campus and countless bookshops and cafés. The traditional heart of student Paris.",
    rent: "€900–€1,150/mo", safety: 8.6, transport: 9.4, nightlife: 7.5, studentFit: 9.2,
    commute: "You're in the Latin Quarter", bestFor: "Sorbonne, ENS and Jussieu students", caution: "High demand and small, expensive rooms",
    landmarks: ["Sorbonne", "Panthéon", "ENS (rue d'Ulm)", "Jussieu campus"] }),
  a({ number: 6, population: 40432, lat: 48.84906, lng: 2.33286,
    description: "Saint-Germain-des-Prés and the Jardin du Luxembourg — literary cafés, the Odéon and university buildings, in one of the most elegant parts of the city.",
    rent: "€950–€1,200/mo", safety: 8.8, transport: 9.4, nightlife: 7.0, studentFit: 8.0,
    commute: "5–10 min walk to the Latin Quarter", bestFor: "Luxembourg gardens and Left Bank café life", caution: "Among the highest rents in Paris",
    landmarks: ["Jardin du Luxembourg", "Saint-Germain-des-Prés", "Odéon"] }),
  a({ number: 7, population: 48196, lat: 48.85615, lng: 2.31223,
    description: "An upmarket district of ministries, embassies and the Eiffel Tower, also home to Sciences Po. Calm and elegant, with few student flats.",
    rent: "€950–€1,200/mo", safety: 9.0, transport: 8.8, nightlife: 4.5, studentFit: 7.0,
    commute: "15 min to the Latin Quarter; Sciences Po on site", bestFor: "Sciences Po students", caution: "Very expensive; quiet in the evenings",
    landmarks: ["Sciences Po", "Eiffel Tower", "Invalides"] }),
  a({ number: 8, population: 35418, lat: 48.87274, lng: 2.3126,
    description: "The Champs-Élysées, luxury boutiques, offices and the Parc Monceau. Prestigious and expensive, with Saint-Lazare station as a transport hub.",
    rent: "€950–€1,200/mo", safety: 8.4, transport: 9.4, nightlife: 6.5, studentFit: 5.5,
    commute: "20 min to the Latin Quarter", bestFor: "Business-school internships and transport links", caution: "Expensive, office-dominated streets",
    landmarks: ["Champs-Élysées", "Parc Monceau", "Gare Saint-Lazare"] }),
  a({ number: 9, population: 58419, lat: 48.87717, lng: 2.33746,
    description: "A lively residential district around the Opéra Garnier, the department stores and South Pigalle ('SoPi'), with many bars and restaurants.",
    rent: "€850–€1,050/mo", safety: 8.2, transport: 9.6, nightlife: 8.5, studentFit: 7.6,
    commute: "20 min to the Latin Quarter by metro", bestFor: "Nightlife and central living", caution: "Busy and noisy around the boulevards",
    landmarks: ["Opéra Garnier"] }),
  a({ number: 10, population: 81926, lat: 48.87612, lng: 2.36072,
    description: "Gare du Nord, Gare de l'Est and the Canal Saint-Martin: a mixed, young and lively area with bars along the canal and very good transport.",
    rent: "€750–€950/mo", safety: 7.0, transport: 9.8, nightlife: 8.5, studentFit: 8.2,
    commute: "20 min to the Latin Quarter by metro", bestFor: "Canal-side life, young crowd, Eurostar access", caution: "Rough areas around the big stations",
    landmarks: ["Canal Saint-Martin", "Gare du Nord"] }),
  a({ number: 11, population: 139983, lat: 48.85907, lng: 2.38,
    description: "One of the densest districts in Europe, full of bars, restaurants and young residents around Oberkampf and the Bastille.",
    rent: "€800–€1,000/mo", safety: 7.8, transport: 9.4, nightlife: 9.5, studentFit: 8.6,
    commute: "20 min to the Latin Quarter", bestFor: "Nightlife and a young, lively crowd", caution: "Noise at night; competitive for rooms",
    landmarks: ["Rue Oberkampf"] }),
  a({ number: 12, population: 139788, lat: 48.83495, lng: 2.4214,
    description: "A residential district around Gare de Lyon and Bercy, extending to the Bois de Vincennes. Calmer than the center, with Sorbonne Nouvelle's Nation campus.",
    rent: "€750–€950/mo", safety: 8.2, transport: 9.0, nightlife: 6.0, studentFit: 7.8,
    commute: "15–20 min to the Latin Quarter", bestFor: "Good value, green space at Vincennes", caution: "Less lively in the evenings",
    landmarks: ["Gare de Lyon", "Bercy", "Bois de Vincennes", "Sorbonne Nouvelle (Nation)"] }),
  a({ number: 13, population: 177735, lat: 48.82844, lng: 2.36231,
    description: "A big student district: Tolbiac, the Université Paris Cité Grands Moulins campus, the BnF library and Station F — plus Chinatown and the Butte-aux-Cailles village.",
    rent: "€700–€900/mo", safety: 8.0, transport: 8.8, nightlife: 6.5, studentFit: 9.0,
    commute: "10–15 min to the Latin Quarter; campuses on site", bestFor: "Paris Cité and Panthéon-Sorbonne students", caution: "High-rise areas can feel anonymous",
    landmarks: ["Tolbiac", "Grands Moulins campus", "BnF", "Station F", "Butte-aux-Cailles"] }),
  a({ number: 14, population: 137581, lat: 48.82925, lng: 2.32656,
    description: "A calm, residential Left Bank district around Montparnasse and the Parc Montsouris, home to the Cité internationale universitaire.",
    rent: "€750–€950/mo", safety: 8.6, transport: 9.0, nightlife: 5.5, studentFit: 8.6,
    commute: "15 min to the Latin Quarter by RER B", bestFor: "Cité universitaire residents, parks", caution: "Quieter nightlife",
    landmarks: ["Cité internationale universitaire", "Parc Montsouris"] }),
  a({ number: 15, population: 228754, lat: 48.84004, lng: 2.29292,
    description: "Paris's most populous arrondissement: residential, family-friendly and well connected, from the Montparnasse tower to Porte de Versailles.",
    rent: "€750–€950/mo", safety: 8.8, transport: 9.0, nightlife: 5.0, studentFit: 7.6,
    commute: "20 min to the Latin Quarter", bestFor: "Calm, safe and practical living", caution: "Less character and nightlife",
    landmarks: ["Montparnasse tower", "Porte de Versailles", "Necker hospital"] }),
  a({ number: 16, population: 159733, lat: 48.86039, lng: 2.26213,
    description: "A wealthy, quiet district by the Bois de Boulogne and Trocadéro, home to Université Paris Dauphine-PSL.",
    rent: "€850–€1,100/mo", safety: 9.0, transport: 8.4, nightlife: 3.5, studentFit: 6.8,
    commute: "30 min to the Latin Quarter; Dauphine on site", bestFor: "Dauphine students, calm and green", caution: "Expensive and far from student nightlife",
    landmarks: ["Université Paris Dauphine", "Trocadéro", "Bois de Boulogne"] }),
  a({ number: 17, population: 161206, lat: 48.88732, lng: 2.30677,
    description: "A mixed district from the bourgeois Plaine Monceau to the village-like Batignolles and the new Clichy-Batignolles neighborhood.",
    rent: "€800–€1,000/mo", safety: 8.4, transport: 8.8, nightlife: 6.5, studentFit: 7.4,
    commute: "25 min to the Latin Quarter", bestFor: "Batignolles village life", caution: "Longer commute to Left Bank campuses",
    landmarks: ["Batignolles"] }),
  a({ number: 18, population: 185825, lat: 48.89258, lng: 2.3482,
    description: "Montmartre and the Sacré-Cœur on the hill, with more affordable, diverse areas below. Artistic, lively and full of character.",
    rent: "€650–€850/mo", safety: 7.0, transport: 8.8, nightlife: 8.0, studentFit: 8.0,
    commute: "25 min to the Latin Quarter", bestFor: "Montmartre charm at lower prices", caution: "Some areas (e.g. around Barbès–La Chapelle) feel unsafe at night",
    landmarks: ["Sacré-Cœur", "Montmartre cemetery"] }),
  a({ number: 19, population: 178371, lat: 48.887, lng: 2.38484,
    description: "A diverse eastern district with the Buttes-Chaumont park, the Parc de la Villette and the Canal de l'Ourcq. Among the most affordable in Paris.",
    rent: "€650–€850/mo", safety: 7.2, transport: 8.6, nightlife: 7.0, studentFit: 7.8,
    commute: "25–30 min to the Latin Quarter", bestFor: "Lower rents, parks and canals", caution: "Check the specific street — some areas are rough",
    landmarks: ["Buttes-Chaumont", "Parc de la Villette"] }),
  a({ number: 20, population: 187694, lat: 48.86344, lng: 2.40116,
    description: "Belleville and Ménilmontant: hilly, multicultural and creative, with street art, cheap restaurants and the Père-Lachaise cemetery.",
    rent: "€650–€850/mo", safety: 7.4, transport: 8.6, nightlife: 8.0, studentFit: 8.2,
    commute: "25–30 min to the Latin Quarter", bestFor: "Affordable, creative and young", caution: "Further from most campuses",
    landmarks: ["Père-Lachaise"] }),

  // ── South-west towards HEC Paris (Jouy-en-Josas) ──
  c({ slug: "boulogne-billancourt", name: "Boulogne-Billancourt", population: 119019, lat: 48.8413, lng: 2.2283,
    description: "Large, well-off town just beyond the 16th, with the Albert-Kahn museum and gardens and the Île Seguin. HEC runs a shuttle between its campus and Pont de Sèvres.",
    rent: "€750–€950/mo", safety: 8.6, transport: 8.6, nightlife: 5.6, studentFit: 7.6,
    commute: "HEC: 30–45 min via the HEC shuttle from Pont de Sèvres; Latin Quarter: 30 min by metro", bestFor: "HEC students who want Paris life with a shorter trip to campus", caution: "Rents close to Paris levels",
    landmarks: ["Pont de Sèvres", "Île Seguin", "Musée Albert-Kahn"] }),
  c({ slug: "issy-les-moulineaux", name: "Issy-les-Moulineaux", population: 67669, lat: 48.8261, lng: 2.2618,
    description: "Modern business town on the Seine next to the 15th, with offices, new housing and RER C and metro line 12 stations.",
    rent: "€700–€900/mo", safety: 8.4, transport: 8.6, nightlife: 4.6, studentFit: 7.2,
    commute: "HEC: 40–55 min by RER C and bus; Latin Quarter: 25–30 min", bestFor: "Easy RER C access to Jouy-en-Josas", caution: "Quiet in the evenings",
    landmarks: ["Issy-les-Moulineaux station"] }),
  c({ slug: "meudon", name: "Meudon", population: 46334, lat: 48.8097, lng: 2.2324,
    description: "Hillside town with the Meudon observatory, the Seine-side Meudon-sur-Seine district and the large Meudon forest.",
    rent: "€650–€850/mo", safety: 8.8, transport: 7.0, nightlife: 3.4, studentFit: 6.4,
    commute: "HEC: 30–45 min by bus or car; Latin Quarter: 35–45 min", bestFor: "Green, quiet living between Paris and HEC", caution: "Hilly, with few late-night options",
    landmarks: ["Observatoire de Meudon", "Meudon-sur-Seine", "Forêt de Meudon"] }),
  c({ slug: "sevres", name: "Sèvres", population: 22303, lat: 48.8281, lng: 2.2225,
    description: "Small town across the Seine from Boulogne, known for its porcelain manufactory and museum.",
    rent: "€650–€850/mo", safety: 8.8, transport: 7.2, nightlife: 3.4, studentFit: 6.4,
    commute: "HEC: 30–40 min by car or bus; Latin Quarter: 35–45 min", bestFor: "Quiet living close to Pont de Sèvres", caution: "Few student rentals",
    landmarks: ["Cité de la céramique"] }),
  c({ slug: "chaville", name: "Chaville", population: 20594, lat: 48.8092, lng: 2.1924,
    description: "Residential town between the Meudon and Fausses-Reposes forests on the road to Versailles.",
    rent: "€600–€800/mo", safety: 8.8, transport: 6.8, nightlife: 2.8, studentFit: 6.0,
    commute: "HEC: 25–35 min by car or bus; Latin Quarter: 40–50 min", bestFor: "Calm, green and cheaper than Paris", caution: "Very quiet; you'll travel for nightlife",
    landmarks: [] }),
  c({ slug: "viroflay", name: "Viroflay", population: 17237, lat: 48.7997, lng: 2.1844,
    description: "Small residential town next to Versailles with the Chaville-Vélizy station on the RER C and the T6 tram.",
    rent: "€600–€800/mo", safety: 8.8, transport: 7.0, nightlife: 2.6, studentFit: 6.4,
    commute: "HEC: 20–30 min by RER C and bus; Latin Quarter: 40–50 min", bestFor: "Quiet living on the RER C line to Jouy", caution: "Very quiet in the evenings",
    landmarks: ["Gare de Chaville-Vélizy"] }),
  c({ slug: "velizy-villacoublay", name: "Vélizy-Villacoublay", population: 23011, lat: 48.7849, lng: 2.2200,
    description: "Business town next to Jouy-en-Josas, with the Vélizy 2 shopping centre and the T6 tram to Châtillon (metro line 13).",
    rent: "€600–€800/mo", safety: 8.6, transport: 6.6, nightlife: 3.2, studentFit: 6.6,
    commute: "HEC: 15–25 min by bus or car; Latin Quarter: 50–60 min", bestFor: "Shops close to HEC", caution: "Car-oriented and far from central Paris",
    landmarks: ["Vélizy 2"] }),
  c({ slug: "versailles", name: "Versailles", population: 84095, lat: 48.8064, lng: 2.1316,
    description: "Royal town with the château, lively markets and three train stations. A popular choice for HEC students: it has more shops, bars and rooms than Jouy, and it's a short ride to campus.",
    rent: "€650–€850/mo", safety: 9.0, transport: 7.8, nightlife: 5.6, studentFit: 8.2,
    commute: "HEC: 20–30 min by bus or RER C; Latin Quarter: 40–50 min by RER C", bestFor: "Town life close to HEC", caution: "Rooms near the stations go fast before each term",
    landmarks: ["Château de Versailles", "Marché Notre-Dame", "Versailles-Chantiers station", "Versailles Rive Gauche station"] }),
  c({ slug: "jouy-en-josas", name: "Jouy-en-Josas", population: 7981, lat: 48.7585, lng: 2.1663,
    description: "Village in the Bièvre valley, home to the HEC Paris campus — where the CEMS MIM is taught — with 18 on-campus residences and the Toile de Jouy museum.",
    rent: "€600–€870/mo", safety: 9.2, transport: 5.4, nightlife: 3.0, studentFit: 8.6,
    commute: "HEC: on campus, or 10–20 min on foot from Jouy-en-Josas station; Latin Quarter: 45–60 min by RER C", bestFor: "Living on or next to the HEC campus", caution: "Rural and quiet; the last trains back from Paris leave early",
    landmarks: ["HEC Paris campus", "Jouy-en-Josas station", "Musée de la Toile de Jouy"] }),
];

export type ParisArrondissementListing = Listing & { arrondissementSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const parisListings: ParisArrondissementListing[] = [
  { id: "pa-sample-5-studio", arrondissementSlug: "paris-5", title: "Studio near the Sorbonne", rent: 980, currency: "€", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.8470, lng: 2.3460, description: "Furnished 16 m² studio in the Latin Quarter, a 5-minute walk to the Sorbonne.", rooms: 1, sizeSqm: 16, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "pa-sample-13-room", arrondissementSlug: "paris-13", title: "Room near Tolbiac", rent: 750, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.8270, lng: 2.3600, description: "Room in a 3-person colocation near the Tolbiac campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "pa-sample-14-room", arrondissementSlug: "paris-14", title: "Room by Parc Montsouris", rent: 780, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.8240, lng: 2.3330, description: "Bright room in a shared flat close to the Cité universitaire and the RER B.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "pa-sample-11-room", arrondissementSlug: "paris-11", title: "Room near Oberkampf", rent: 850, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.8648, lng: 2.3780, description: "Room in a lively 4-person colocation in the heart of the 11th.", rooms: 1, sizeSqm: 11, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "pa-sample-10-room", arrondissementSlug: "paris-10", title: "Room by the Canal Saint-Martin", rent: 820, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.8720, lng: 2.3640, description: "Room in a shared flat a few steps from the canal.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "pa-sample-18-studio", arrondissementSlug: "paris-18", title: "Small studio in Montmartre", rent: 850, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 48.8880, lng: 2.3390, description: "Compact studio on the slopes of Montmartre, 14 m².", rooms: 1, sizeSqm: 14, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette"], riskNote: "Higher caution" },
  { id: "pa-sample-20-room", arrondissementSlug: "paris-20", title: "Room in Ménilmontant", rent: 700, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.8670, lng: 2.3920, description: "Room in a creative colocation near Père-Lachaise.", rooms: 1, sizeSqm: 12, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Bills included"] },
  { id: "pa-sample-jouy-studio", arrondissementSlug: "jouy-en-josas", title: "Studio near HEC Paris", rent: 850, currency: "€", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.7620, lng: 2.1650, description: "Furnished studio in a student residence between Jouy-en-Josas station and the HEC campus.", rooms: 1, sizeSqm: 18, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "pa-sample-versailles-room", arrondissementSlug: "versailles", title: "Room in Versailles", rent: 700, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.7990, lng: 2.1330, description: "Room in a shared flat near Versailles-Chantiers station, with buses to HEC.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "pa-sample-7-room", arrondissementSlug: "paris-7", title: "Chambre de bonne near Sciences Po", rent: 750, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.8545, lng: 2.3250, description: "Classic 10 m² top-floor 'chambre de bonne' with shared facilities, 5 minutes from Sciences Po.", rooms: 1, sizeSqm: 10, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Shared bathroom"] },
];

export function getParisArrondissementBySlug(slug: string): ParisArrondissement | undefined {
  return parisArrondissements.find((x) => x.slug === slug);
}

export function getParisListingsForArrondissement(slug: string | null): ParisArrondissementListing[] {
  if (!slug) return [];
  return parisListings.filter((l) => l.arrondissementSlug === slug);
}
