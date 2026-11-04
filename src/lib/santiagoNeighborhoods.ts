import type { Listing } from "./listings";

// Greater Santiago: the 32 comunas of the Province of Santiago plus Puente Alto.
// Boundaries: Biblioteca del Congreso Nacional de Chile (BCN), credited in SantiagoExplorer.
// UAI's CEMS programme is based on the Peñalolén campus (Diagonal Las Torres), in the east of the city.
// Commute times refer to the Peñalolén campus; rents are estimated monthly ranges for a room in a shared flat (CLP);
// scores are editorial judgments.

export type SantiagoComuna = {
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

type Zone = "East" | "Centre" | "South" | "North" | "West";
type Entry = {
  slug: string; name: string; zone: Zone; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const zoneLabel: Record<Zone, string> = {
  East: "Eastern Santiago", Centre: "Central Santiago", South: "Southern Santiago", North: "Northern Santiago", West: "Western Santiago",
};
const s = ({ zone, at, landmarks = [], ...e }: Entry): SantiagoComuna => ({
  rent: "CLP 180,000–250,000/mo", safety: 5.6, transport: 6.8, nightlife: 3.5, studentFit: 4.4,
  bestFor: "Lower rents", caution: "Long commute to Peñalolén (often 1.5 hours or more); check safety street by street",
  ...e,
  landmarks,
  badge: zoneLabel[zone],
  lat: at[0],
  lng: at[1],
});

export const santiagoComunas: SantiagoComuna[] = [
  // ── East: around UAI and the popular student areas ──
  s({ slug: "penalolen", name: "Peñalolén", zone: "East", at: [-33.4884, -70.5094],
    description: "UAI's main campus sits on Diagonal Las Torres at the foot of the Andes. The comuna mixes gated condominiums near the hills with large working-class neighbourhoods, and metro Line 4 runs along Avenida Américo Vespucio at its western edge.",
    rent: "CLP 230,000–330,000/mo", safety: 6.6, transport: 5.8, nightlife: 3.0, studentFit: 7.4,
    commute: "5–20 min on foot, by bike or bus", bestFor: "Living close to campus",
    caution: "Few bars and services; poorer transport links to the rest of the city",
    landmarks: ["Universidad Adolfo Ibáñez (Peñalolén campus)"] }),
  s({ slug: "la-reina", name: "La Reina", zone: "East", at: [-33.4472, -70.5367],
    description: "Quiet, green residential comuna north of Peñalolén, with houses and Mall Plaza Egaña.",
    rent: "CLP 250,000–350,000/mo", safety: 7.6, transport: 6.8, nightlife: 3.0, studentFit: 7.6,
    commute: "15–30 min by bus or car", bestFor: "Quiet living with a short commute",
    caution: "Mostly houses; fewer shared flats", landmarks: ["Mall Plaza Egaña"] }),
  s({ slug: "las-condes", name: "Las Condes", zone: "East", at: [-33.4094, -70.5696],
    description: "Modern business and residential area along Avenida Apoquindo, with Parque Arauco, UAI's Presidente Errázuriz campus and the Universidad de los Andes.",
    rent: "CLP 300,000–450,000/mo", safety: 7.8, transport: 8.4, nightlife: 6.6, studentFit: 8.6,
    commute: "25–45 min by car or bus", bestFor: "Safety, modern flats and internships in 'Sanhattan'",
    caution: "Expensive", landmarks: ["Avenida Apoquindo", "Parque Arauco", "UAI Presidente Errázuriz campus", "Universidad de los Andes"] }),
  s({ slug: "providencia", name: "Providencia", zone: "East", at: [-33.4316, -70.6121],
    description: "The classic choice for international students: tree-lined streets, cafés, metro Lines 1 and 6, the Costanera Center and San Cristóbal Hill.",
    rent: "CLP 260,000–380,000/mo", safety: 7.4, transport: 9.4, nightlife: 8.4, studentFit: 9.0,
    commute: "35–60 min by metro and bus", bestFor: "City life, nightlife and good metro links",
    caution: "Longer commute to Peñalolén; rising rents", landmarks: ["Costanera Center", "Cerro San Cristóbal"] }),
  s({ slug: "nunoa", name: "Ñuñoa", zone: "East", at: [-33.4560, -70.5937],
    description: "Popular student comuna with Plaza Ñuñoa's bars, part of Barrio Italia and the Estadio Nacional, and metro Lines 3 and 6.",
    rent: "CLP 230,000–330,000/mo", safety: 7.2, transport: 8.6, nightlife: 7.8, studentFit: 9.0,
    commute: "30–50 min by bus or metro", bestFor: "Student life at slightly lower prices than Providencia",
    landmarks: ["Plaza Ñuñoa", "Barrio Italia", "Estadio Nacional"] }),
  s({ slug: "macul", name: "Macul", zone: "East", at: [-33.4894, -70.6000],
    description: "Residential comuna between Ñuñoa and Peñalolén with the Catholic University's San Joaquín campus and Estadio Monumental.",
    rent: "CLP 200,000–280,000/mo", safety: 6.2, transport: 7.6, nightlife: 4.0, studentFit: 7.0,
    commute: "20–35 min by bus or metro", bestFor: "Lower rents fairly close to UAI",
    landmarks: ["PUC San Joaquín campus", "Estadio Monumental"] }),
  s({ slug: "vitacura", name: "Vitacura", zone: "East", at: [-33.3794, -70.5729],
    description: "Santiago's most exclusive comuna, with Parque Bicentenario and the galleries of Alonso de Córdova.",
    rent: "CLP 350,000–500,000/mo", safety: 8.2, transport: 6.4, nightlife: 6.0, studentFit: 6.2,
    commute: "35–55 min by car or bus", bestFor: "Safety and parks", caution: "Very expensive; limited metro",
    landmarks: ["Parque Bicentenario", "Alonso de Córdova", "Clínica Alemana"] }),
  s({ slug: "lo-barnechea", name: "Lo Barnechea", zone: "East", at: [-33.3520, -70.5180],
    description: "Wealthy foothill suburbs at the north-eastern edge of the city, stretching up into the Andes and the ski areas.",
    rent: "CLP 300,000–450,000/mo", safety: 7.6, transport: 4.6, nightlife: 3.0, studentFit: 4.6,
    commute: "40–60 min by car", bestFor: "Mountain views and space", caution: "Car-dependent; little public transport" }),
  s({ slug: "la-florida", name: "La Florida", zone: "South", at: [-33.5108, -70.6062],
    description: "Large, busy residential comuna south of Peñalolén, with the Florida Center mall and metro Lines 4 and 5.",
    rent: "CLP 200,000–270,000/mo", safety: 6.2, transport: 7.8, nightlife: 4.6, studentFit: 6.6,
    commute: "20–40 min by bus or metro", bestFor: "Lower rents with a manageable commute", landmarks: ["Mall Florida Center"] }),
  s({ slug: "puente-alto", name: "Puente Alto", zone: "South", at: [-33.6110, -70.5760],
    description: "Santiago's most populous comuna, at the southern end of metro Line 4.",
    rent: "CLP 170,000–230,000/mo", safety: 5.4, transport: 6.6, nightlife: 3.5, studentFit: 4.8,
    commute: "40–60 min by metro and bus", bestFor: "Lowest rents on the east side" }),

  // ── Centre ──
  s({ slug: "santiago", name: "Santiago Centro", zone: "Centre", at: [-33.4380, -70.6410],
    description: "The historic centre with Plaza de Armas, La Moneda, Barrio Lastarria, Barrio Brasil and Barrio Yungay, plus many universities and new apartment towers.",
    rent: "CLP 200,000–300,000/mo", safety: 4.8, transport: 9.6, nightlife: 8.2, studentFit: 6.8,
    commute: "45–70 min by metro and bus", bestFor: "Culture, nightlife and cheaper studios",
    caution: "Theft and robbery risk, especially at night and around protests",
    landmarks: ["Plaza de Armas", "Palacio de La Moneda", "Barrio Lastarria", "Cerro Santa Lucía", "Mercado Central"] }),
  s({ slug: "recoleta", name: "Recoleta", zone: "North", at: [-33.4055, -70.6394],
    description: "North of the Mapocho River, with part of Barrio Bellavista's bars and La Vega Central market.",
    rent: "CLP 180,000–260,000/mo", safety: 4.8, transport: 7.8, nightlife: 7.0, studentFit: 5.4,
    commute: "50–70 min by metro and bus", caution: "Uneven safety; stick to well-known streets",
    landmarks: ["Barrio Bellavista", "La Vega Central"] }),
  s({ slug: "independencia", name: "Independencia", zone: "North", at: [-33.4145, -70.6650],
    description: "Dense residential comuna north of the centre, with hospitals and new apartment blocks.",
    rent: "CLP 170,000–240,000/mo", safety: 4.8, transport: 7.6, commute: "50–70 min by metro and bus" }),
  s({ slug: "estacion-central", name: "Estación Central", zone: "Centre", at: [-33.4644, -70.7007],
    description: "Rail hub with the University of Santiago (USACH) and many cheap new studio towers.",
    rent: "CLP 170,000–240,000/mo", safety: 4.6, transport: 8.4, nightlife: 4.0, studentFit: 5.2,
    commute: "55–75 min by metro and bus", landmarks: ["Estación Central", "University of Santiago (USACH)"] }),
  s({ slug: "san-joaquin", name: "San Joaquín", zone: "South", at: [-33.4961, -70.6284],
    description: "Residential and industrial comuna south of the centre along metro Line 5.",
    commute: "35–55 min by metro and bus", transport: 7.4 }),
  s({ slug: "san-miguel", name: "San Miguel", zone: "South", at: [-33.4990, -70.6516],
    description: "Growing residential comuna with many new apartment towers along Gran Avenida.",
    rent: "CLP 180,000–250,000/mo", safety: 6.0, transport: 7.6, commute: "45–60 min by metro and bus" }),
  s({ slug: "quinta-normal", name: "Quinta Normal", zone: "West", at: [-33.4275, -70.7010],
    description: "Western comuna with museums in Quinta Normal Park.", commute: "60–80 min by metro and bus" }),

  // ── Rest of Greater Santiago ──
  s({ slug: "huechuraba", name: "Huechuraba", zone: "North", at: [-33.3603, -70.6380],
    description: "Northern comuna with business parks and gated housing.", transport: 5.6, commute: "50–70 min by car or bus" }),
  s({ slug: "conchali", name: "Conchalí", zone: "North", at: [-33.3835, -70.6766], description: "Residential comuna in the north.", commute: "60–80 min" }),
  s({ slug: "renca", name: "Renca", zone: "North", at: [-33.4018, -70.7275], description: "Residential and industrial comuna in the north-west.", commute: "70–90 min" }),
  s({ slug: "quilicura", name: "Quilicura", zone: "North", at: [-33.3557, -70.7354], description: "Fast-growing northern suburb with industrial parks.", commute: "70–90 min" }),
  s({ slug: "cerro-navia", name: "Cerro Navia", zone: "West", at: [-33.4222, -70.7444], description: "Working-class residential comuna in the west.", commute: "70–90 min" }),
  s({ slug: "lo-prado", name: "Lo Prado", zone: "West", at: [-33.4467, -70.7230], description: "Residential comuna in the west on metro Line 5.", commute: "65–85 min" }),
  s({ slug: "pudahuel", name: "Pudahuel", zone: "West", at: [-33.4400, -70.7600], description: "Large western comuna that includes the international airport area.", commute: "70–90 min" }),
  s({ slug: "maipu", name: "Maipú", zone: "West", at: [-33.5100, -70.7570], description: "Large south-western comuna on metro Line 5, one of Santiago's most populous.", commute: "70–90 min by metro and bus", transport: 7.2 }),
  s({ slug: "cerrillos", name: "Cerrillos", zone: "West", at: [-33.4997, -70.7125], description: "South-western comuna around the former Cerrillos airfield.", commute: "65–85 min" }),
  s({ slug: "pedro-aguirre-cerda", name: "Pedro Aguirre Cerda", zone: "South", at: [-33.4918, -70.6755], description: "Working-class residential comuna south-west of the centre.", commute: "55–75 min" }),
  s({ slug: "lo-espejo", name: "Lo Espejo", zone: "South", at: [-33.5204, -70.6899], description: "Residential comuna in the south-west.", commute: "60–80 min" }),
  s({ slug: "la-cisterna", name: "La Cisterna", zone: "South", at: [-33.5301, -70.6639], description: "Southern comuna and transport hub at the end of metro Line 2.", commute: "55–75 min", transport: 7.6 }),
  s({ slug: "san-ramon", name: "San Ramón", zone: "South", at: [-33.5404, -70.6422], description: "Working-class residential comuna in the south.", commute: "50–70 min" }),
  s({ slug: "la-granja", name: "La Granja", zone: "South", at: [-33.5355, -70.6224], description: "Residential comuna in the south.", commute: "45–65 min" }),
  s({ slug: "el-bosque", name: "El Bosque", zone: "South", at: [-33.5627, -70.6761], description: "Southern residential comuna.", commute: "60–80 min" }),
  s({ slug: "la-pintana", name: "La Pintana", zone: "South", at: [-33.5873, -70.6369], description: "Peripheral comuna at the southern edge of the city.", commute: "60–80 min", transport: 5.4 }),
];

export type SantiagoListing = Listing & { comunaSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const santiagoListings: SantiagoListing[] = [
  { id: "scl-sample-penalolen-room", comunaSlug: "penalolen", title: "Room near UAI campus", rent: 290000, currency: "CLP ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: -33.4840, lng: -70.5160, description: "Furnished room in a shared house within cycling distance of UAI's Peñalolén campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Wifi included"] },
  { id: "scl-sample-la-reina-room", comunaSlug: "la-reina", title: "Room near Plaza Egaña", rent: 300000, currency: "CLP ", type: "Room", source: SAMPLE_SOURCE, lat: -33.4520, lng: -70.5680, description: "Room in a quiet flat close to Mall Plaza Egaña and buses towards Peñalolén.", rooms: 1, sizeSqm: 13, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "scl-sample-providencia-room", comunaSlug: "providencia", title: "Room in Providencia", rent: 330000, currency: "CLP ", type: "Room", source: SAMPLE_SOURCE, lat: -33.4290, lng: -70.6150, description: "Room in a shared flat near metro Line 1, popular with exchange students.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Doorman"] },
  { id: "scl-sample-nunoa-room", comunaSlug: "nunoa", title: "Room near Plaza Ñuñoa", rent: 270000, currency: "CLP ", type: "Room", source: SAMPLE_SOURCE, lat: -33.4570, lng: -70.5960, description: "Room in a student flat close to Plaza Ñuñoa's bars.", rooms: 1, sizeSqm: 11, availableFrom: "1 Aug 2027", amenities: ["Furnished"] },
  { id: "scl-sample-las-condes-studio", comunaSlug: "las-condes", title: "Studio on Avenida Apoquindo", rent: 480000, currency: "CLP ", type: "Studio", source: SAMPLE_SOURCE, lat: -33.4110, lng: -70.5750, description: "Furnished studio in a new building close to metro Line 1.", rooms: 1, sizeSqm: 30, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Gym", "Concierge"], riskNote: "Higher caution" },
];

export function getSantiagoComunaBySlug(slug: string): SantiagoComuna | undefined {
  return santiagoComunas.find((x) => x.slug === slug);
}

export function getSantiagoListingsForComuna(slug: string | null): SantiagoListing[] {
  if (!slug) return [];
  return santiagoListings.filter((l) => l.comunaSlug === slug);
}
