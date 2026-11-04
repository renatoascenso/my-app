import type { Listing } from "./listings";

// 32 zonal planning units (UPZ) in the localidades from the historic centre to Usaquén:
// La Candelaria, Santa Fe, Los Mártires, Teusaquillo, Chapinero, Barrios Unidos and Usaquén.
// Boundaries: © OpenStreetMap contributors (ODbL), credited in BogotaExplorer.
// Universidad de los Andes (School of Management, home of CEMS) is at the foot of the eastern hills,
// next to La Candelaria. Commute times refer to the Uniandes campus; rents are estimated monthly ranges
// for a room in a shared flat (COP); scores are editorial judgments.

export type BogotaUpz = {
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

type Localidad = "La Candelaria" | "Santa Fe" | "Los Mártires" | "Teusaquillo" | "Chapinero" | "Barrios Unidos" | "Usaquén";
type Entry = {
  slug: string; name: string; localidad: Localidad; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const s = ({ localidad, at, landmarks = [], ...e }: Entry): BogotaUpz => ({
  rent: "COP 1,000,000–1,500,000/mo", safety: 6.6, transport: 7.4, nightlife: 5.0, studentFit: 6.0,
  bestFor: "Residential living at moderate prices", caution: "Traffic makes commutes unpredictable — check the bus or TransMilenio route",
  ...e,
  landmarks,
  badge: `${localidad} locality`,
  lat: at[0],
  lng: at[1],
});

export const bogotaUpzs: BogotaUpz[] = [
  // ── Around Uniandes ──
  s({ slug: "la-candelaria", name: "La Candelaria", localidad: "La Candelaria", at: [4.6014, -74.0649],
    description: "The colonial old town around Plaza de Bolívar and the Chorro de Quevedo. Universidad de los Andes sits on its eastern edge, and the Rosario and Externado universities are nearby.",
    rent: "COP 1,000,000–1,600,000/mo", safety: 5.4, transport: 8.0, nightlife: 7.6, studentFit: 8.8,
    commute: "5–15 min on foot", bestFor: "Walking to Uniandes and student life",
    caution: "Streets empty out after dark; theft is common — avoid walking alone at night",
    landmarks: ["Universidad de los Andes", "Plaza de Bolívar", "Chorro de Quevedo", "Biblioteca Luis Ángel Arango", "Quinta de Bolívar"] }),
  s({ slug: "las-nieves", name: "Las Nieves", localidad: "Santa Fe", at: [4.6050, -74.0742],
    description: "Downtown business district along Avenida Jiménez and Carrera Séptima, with the Gold Museum, Torre Colpatria and Jorge Tadeo Lozano University.",
    rent: "COP 900,000–1,400,000/mo", safety: 5.0, transport: 9.0, nightlife: 6.4, studentFit: 7.0,
    commute: "10–20 min on foot or by TransMilenio", bestFor: "Cheap studios close to campus",
    caution: "Busy by day, unsafe at night in many blocks", landmarks: ["Gold Museum", "Torre Colpatria", "Avenida Jiménez"] }),
  s({ slug: "la-macarena", name: "La Macarena", localidad: "Santa Fe", at: [4.6107, -74.0648],
    description: "Bohemian hillside neighbourhood above Carrera Séptima, known for its restaurants and galleries.",
    rent: "COP 1,200,000–1,800,000/mo", safety: 6.6, transport: 7.6, nightlife: 7.2, studentFit: 8.6,
    commute: "15–25 min on foot or by bus", bestFor: "Character and restaurants close to Uniandes",
    caution: "Steep streets; ask about safety block by block" }),
  s({ slug: "sagrado-corazon", name: "Sagrado Corazón", localidad: "Santa Fe", at: [4.6197, -74.0662],
    description: "Office towers of the international centre, Parque Nacional, the National Museum and the Planetarium.",
    rent: "COP 1,100,000–1,700,000/mo", safety: 6.2, transport: 8.6, nightlife: 5.6, studentFit: 7.4,
    commute: "15–25 min by bus or bike", bestFor: "Central location with parks",
    caution: "Quiet and poorly lit around the park at night", landmarks: ["Parque Nacional", "National Museum", "Planetarium"] }),
  s({ slug: "las-cruces", name: "Las Cruces", localidad: "Santa Fe", at: [4.5902, -74.0823],
    description: "Old working-class neighbourhood south of the historic centre.", rent: "COP 700,000–1,100,000/mo",
    safety: 4.0, nightlife: 3.0, studentFit: 4.0, commute: "15–25 min",
    bestFor: "Very low rents", caution: "High crime — not recommended for newcomers" }),
  s({ slug: "lourdes", name: "Lourdes", localidad: "Santa Fe", at: [4.5857, -74.0708],
    description: "Hillside neighbourhoods south-east of the centre.", rent: "COP 700,000–1,100,000/mo",
    safety: 4.2, nightlife: 2.5, studentFit: 4.0, commute: "20–30 min",
    bestFor: "Very low rents", caution: "Steep, with high crime in parts" }),
  s({ slug: "la-sabana", name: "La Sabana", localidad: "Los Mártires", at: [4.6111, -74.0845],
    description: "Commercial area west of the centre with the Paloquemao market and the old Sabana railway station.",
    rent: "COP 800,000–1,200,000/mo", safety: 4.4, nightlife: 3.5, studentFit: 4.6, commute: "20–30 min by TransMilenio",
    caution: "Unsafe at night in many streets", landmarks: ["Paloquemao market", "Estación de la Sabana"] }),
  s({ slug: "santa-isabel", name: "Santa Isabel", localidad: "Los Mártires", at: [4.5985, -74.0957],
    description: "Residential area south-west of the centre.", rent: "COP 800,000–1,200,000/mo",
    safety: 5.6, studentFit: 5.0, commute: "25–40 min by bus" }),

  // ── Teusaquillo ──
  s({ slug: "teusaquillo", name: "Teusaquillo", localidad: "Teusaquillo", at: [4.6280, -74.0739],
    description: "Leafy neighbourhood of 1930s brick houses, many converted into student rooms, between the centre and Chapinero, including the Park Way.",
    rent: "COP 1,000,000–1,500,000/mo", safety: 7.0, transport: 8.4, nightlife: 6.4, studentFit: 8.6,
    commute: "20–30 min by bus or bike", bestFor: "Student rooms in a calm, central area", landmarks: ["Park Way"] }),
  s({ slug: "galerias", name: "Galerías", localidad: "Teusaquillo", at: [4.6492, -74.0773],
    description: "Commercial neighbourhood with the El Campín stadium and the Movistar Arena.",
    rent: "COP 1,000,000–1,400,000/mo", safety: 6.8, transport: 8.0, nightlife: 6.0, studentFit: 7.0,
    commute: "25–40 min by bus or TransMilenio", landmarks: ["Estadio El Campín", "Movistar Arena"] }),
  s({ slug: "la-esmeralda", name: "La Esmeralda", localidad: "Teusaquillo", at: [4.6483, -74.0863],
    description: "Quiet residential area next to the Universidad Nacional campus.", rent: "COP 1,000,000–1,400,000/mo",
    safety: 7.2, studentFit: 6.8, commute: "30–40 min by bus" }),
  s({ slug: "parque-simon-bolivar-can", name: "Parque Simón Bolívar-CAN", localidad: "Teusaquillo", at: [4.6387, -74.0852],
    description: "The National University of Colombia's campus, government offices and part of Simón Bolívar Park.",
    rent: "COP 900,000–1,300,000/mo", safety: 6.8, studentFit: 6.4, commute: "30–45 min by TransMilenio",
    caution: "Mostly campus and parkland; few rentals", landmarks: ["Universidad Nacional de Colombia", "Parque Simón Bolívar"] }),
  s({ slug: "quinta-paredes", name: "Quinta Paredes", localidad: "Teusaquillo", at: [4.6307, -74.0894],
    description: "Residential area along Calle 26 with the Corferias exhibition centre and the US Embassy.",
    rent: "COP 1,000,000–1,400,000/mo", safety: 7.0, transport: 8.2, studentFit: 6.4,
    commute: "25–35 min by TransMilenio", landmarks: ["Corferias", "US Embassy"] }),
  s({ slug: "ciudad-salitre-oriental", name: "Ciudad Salitre Oriental", localidad: "Teusaquillo", at: [4.6432, -74.1017],
    description: "Planned residential district with apartment blocks and the Gran Estación mall.", rent: "COP 1,100,000–1,500,000/mo",
    safety: 7.4, transport: 7.8, studentFit: 6.0, commute: "35–50 min by TransMilenio", landmarks: ["Gran Estación"] }),

  // ── Chapinero ──
  s({ slug: "chapinero", name: "Chapinero", localidad: "Chapinero", at: [4.6380, -74.0640],
    description: "Lively district with Javeriana University, Parque Sucre and the LGBTQ+-friendly bars of Chapinero Central; a favourite with students and young professionals.",
    rent: "COP 1,100,000–1,700,000/mo", safety: 6.6, transport: 9.0, nightlife: 8.8, studentFit: 9.0,
    commute: "20–35 min by bus, TransMilenio or bike", bestFor: "Nightlife and student life with an easy commute",
    caution: "Phone theft is common on busy streets", landmarks: ["Pontificia Universidad Javeriana", "Parque Sucre"] }),
  s({ slug: "pardo-rubio", name: "Pardo Rubio", localidad: "Chapinero", at: [4.6323, -74.0632],
    description: "Chapinero Alto on the slopes of the eastern hills, with cafés, restaurants and views over the city.",
    rent: "COP 1,300,000–2,000,000/mo", safety: 7.2, transport: 7.6, nightlife: 7.4, studentFit: 8.6,
    commute: "20–35 min by bus or taxi", bestFor: "Safer streets close to the action", caution: "Steep streets; fewer bus lines up the hill",
    landmarks: ["Chapinero Alto"] }),
  s({ slug: "chico-lago", name: "Chicó Lago", localidad: "Chapinero", at: [4.6688, -74.0535],
    description: "Upscale commercial heart of northern Bogotá with the Zona T, Parque de la 93, Parque El Virrey and Centro Andino.",
    rent: "COP 1,600,000–2,500,000/mo", safety: 7.8, transport: 7.8, nightlife: 9.0, studentFit: 7.8,
    commute: "35–60 min by bus or ride-hailing", bestFor: "Safety, nightlife and internships",
    caution: "Expensive; long rush-hour commute to Uniandes",
    landmarks: ["Zona T", "Parque de la 93", "Parque El Virrey", "Centro Andino"] }),
  s({ slug: "el-refugio", name: "El Refugio", localidad: "Chapinero", at: [4.6656, -74.0473],
    description: "Affluent residential area on the hillside above the Zona Rosa.", rent: "COP 1,800,000–2,800,000/mo",
    safety: 8.0, transport: 6.4, nightlife: 6.0, studentFit: 6.2, commute: "35–60 min by car or bus",
    bestFor: "Quiet, safe and green", caution: "Expensive and hilly" }),
  s({ slug: "san-isidro-patios", name: "San Isidro Patios", localidad: "Chapinero", at: [4.6682, -74.0197],
    description: "Rural and informal settlements on the mountain road to La Calera, above the city.", rent: "COP 700,000–1,100,000/mo",
    safety: 5.6, transport: 4.0, nightlife: 2.0, studentFit: 3.0, commute: "45–70 min",
    bestFor: "Mountain views", caution: "Remote, with poor public transport" }),

  // ── Barrios Unidos ──
  s({ slug: "los-alcazares", name: "Los Alcázares", localidad: "Barrios Unidos", at: [4.6625, -74.0681],
    description: "Traditional middle-class neighbourhoods west of Chapinero, around Calle 72 and Avenida Caracas.",
    rent: "COP 1,000,000–1,400,000/mo", safety: 6.4, transport: 8.4, studentFit: 6.6, commute: "30–45 min by TransMilenio" }),
  s({ slug: "los-andes", name: "Los Andes", localidad: "Barrios Unidos", at: [4.6826, -74.0674],
    description: "Residential area north of Calle 80.", rent: "COP 1,100,000–1,500,000/mo",
    safety: 7.0, studentFit: 6.0, commute: "40–55 min by bus" }),
  s({ slug: "doce-de-octubre", name: "Doce de Octubre", localidad: "Barrios Unidos", at: [4.6718, -74.0793],
    description: "Busy residential and commercial area known for furniture shops.", rent: "COP 900,000–1,300,000/mo",
    commute: "40–55 min by bus" }),
  s({ slug: "parque-el-salitre", name: "Parque El Salitre", localidad: "Barrios Unidos", at: [4.6611, -74.0853],
    description: "Parks and sports grounds, including the Parque de los Novios.",
    rent: "COP 1,000,000–1,400,000/mo", studentFit: 5.0, commute: "35–50 min", caution: "Mostly parkland; few rentals",
    landmarks: ["Parque de los Novios"] }),

  // ── Usaquén ──
  s({ slug: "santa-barbara", name: "Santa Bárbara", localidad: "Usaquén", at: [4.6961, -74.0458],
    description: "Upmarket residential and shopping district around Unicentro.", rent: "COP 1,500,000–2,300,000/mo",
    safety: 7.8, transport: 7.4, nightlife: 6.6, studentFit: 6.6, commute: "45–70 min by bus",
    bestFor: "Safe northern living", caution: "Long commute to the centre", landmarks: ["Unicentro"] }),
  s({ slug: "usaquen", name: "Usaquén", localidad: "Usaquén", at: [4.6952, -74.0309],
    description: "Former colonial village with a Sunday flea market, restaurants and Universidad El Bosque.",
    rent: "COP 1,500,000–2,300,000/mo", safety: 7.8, transport: 6.8, nightlife: 6.8, studentFit: 6.8,
    commute: "45–70 min by bus", bestFor: "Charming, safe neighbourhood", caution: "Long commute to the centre",
    landmarks: ["Plaza de Usaquén", "Hacienda Santa Bárbara", "Universidad El Bosque"] }),
  s({ slug: "country-club", name: "Country Club", localidad: "Usaquén", at: [4.7105, -74.0434],
    description: "Wealthy residential area around the Country Club golf course.", rent: "COP 1,600,000–2,400,000/mo",
    safety: 7.8, studentFit: 5.6, commute: "50–75 min by bus", caution: "Expensive and far from Uniandes" }),
  s({ slug: "los-cedros", name: "Los Cedros", localidad: "Usaquén", at: [4.7240, -74.0368],
    description: "Large residential area in northern Bogotá.", rent: "COP 1,200,000–1,700,000/mo",
    safety: 7.2, studentFit: 5.4, commute: "55–80 min by bus" }),
  s({ slug: "toberin", name: "Toberín", localidad: "Usaquén", at: [4.7421, -74.0395],
    description: "Commercial and residential area along the Autopista Norte.", commute: "60–85 min by TransMilenio" }),
  s({ slug: "san-cristobal-norte", name: "San Cristóbal Norte", localidad: "Usaquén", at: [4.7365, -74.0232],
    description: "Hillside neighbourhoods in the far north-east.", rent: "COP 800,000–1,200,000/mo", commute: "60–85 min" }),
  s({ slug: "la-uribe", name: "La Uribe", localidad: "Usaquén", at: [4.7510, -74.0320],
    description: "Residential area in the far north.", commute: "65–90 min" }),
  s({ slug: "verbenal", name: "Verbenal", localidad: "Usaquén", at: [4.7631, -74.0319],
    description: "Residential area near the northern edge of the city.", rent: "COP 800,000–1,200,000/mo", commute: "70–95 min" }),
  s({ slug: "paseo-de-los-libertadores", name: "Paseo de Los Libertadores", localidad: "Usaquén", at: [4.7923, -74.0336],
    description: "Northern edge of the city with schools, clubs and new housing.", commute: "75–100 min", transport: 5.6 }),
];

export type BogotaListing = Listing & { upzSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const bogotaListings: BogotaListing[] = [
  { id: "bog-sample-candelaria-room", upzSlug: "la-candelaria", title: "Room near Uniandes", rent: 1300000, currency: "COP ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 4.5995, lng: -74.0680, description: "Furnished room in a shared house a few minutes' walk from the Uniandes campus.", rooms: 1, sizeSqm: 12, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Wifi included"] },
  { id: "bog-sample-macarena-studio", upzSlug: "la-macarena", title: "Studio in La Macarena", rent: 1900000, currency: "COP ", type: "Studio", source: SAMPLE_SOURCE, lat: 4.6115, lng: -74.0650, description: "Small furnished studio in a building with a doorman, near Carrera Séptima.", rooms: 1, sizeSqm: 28, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Doorman"], riskNote: "Higher caution" },
  { id: "bog-sample-teusaquillo-room", upzSlug: "teusaquillo", title: "Room in a Teusaquillo house", rent: 1100000, currency: "COP ", type: "Room", source: SAMPLE_SOURCE, lat: 4.6290, lng: -74.0760, description: "Room in a converted brick house shared with other students.", rooms: 1, sizeSqm: 13, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "bog-sample-chapinero-room", upzSlug: "chapinero", title: "Room near Parque Sucre", rent: 1400000, currency: "COP ", type: "Room", source: SAMPLE_SOURCE, lat: 4.6450, lng: -74.0630, description: "Room in a shared flat in Chapinero Central, close to buses on Carrera Séptima.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished"] },
  { id: "bog-sample-chapinero-alto-room", upzSlug: "pardo-rubio", title: "Room in Chapinero Alto", rent: 1700000, currency: "COP ", type: "Room", source: SAMPLE_SOURCE, lat: 4.6330, lng: -74.0610, description: "Room with private bathroom in a flat with city views.", rooms: 1, sizeSqm: 15, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Private bathroom"] },
];

export function getBogotaUpzBySlug(slug: string): BogotaUpz | undefined {
  return bogotaUpzs.find((x) => x.slug === slug);
}

export function getBogotaListingsForUpz(slug: string | null): BogotaListing[] {
  if (!slug) return [];
  return bogotaListings.filter((l) => l.upzSlug === slug);
}
