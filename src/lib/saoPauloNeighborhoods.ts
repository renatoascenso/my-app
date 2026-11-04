import type { Listing } from "./listings";

// 30 districts (distritos) whose centre lies within about 7.5 km of FGV EAESP.
// Boundaries: Prefeitura de São Paulo / GeoSampa (CC BY-SA 4.0), credited in SaoPauloExplorer.
// FGV EAESP (home of CEMS) is on Avenida Nove de Julho in Bela Vista, near Avenida Paulista. Commute times refer to
// FGV EAESP; rents are estimated monthly ranges for a room in a shared flat (BRL); scores are editorial judgments.

export type SaoPauloDistrict = {
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

type Region = "Centro" | "Oeste" | "Sul" | "Norte" | "Leste";
type Entry = {
  slug: string; name: string; region: Region; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const regionLabel: Record<Region, string> = {
  Centro: "City centre", Oeste: "West Zone", Sul: "South Zone", Norte: "North Zone", Leste: "East Zone",
};
const s = ({ region, at, landmarks = [], ...e }: Entry): SaoPauloDistrict => ({
  rent: "R$ 1,200–1,800/mo", safety: 6.6, transport: 7.6, nightlife: 4.5, studentFit: 5.6,
  bestFor: "Lower rents with a metro or train connection", caution: "Longer commute; check the walk to the station at night",
  ...e,
  landmarks,
  badge: regionLabel[region],
  lat: at[0],
  lng: at[1],
});

export const saoPauloDistricts: SaoPauloDistrict[] = [
  // ── Around FGV and Avenida Paulista ──
  s({ slug: "bela-vista", name: "Bela Vista", region: "Centro", at: [-23.5609, -46.6476],
    description: "FGV EAESP's home on Avenida Nove de Julho, a short walk from Avenida Paulista and MASP. Includes Bixiga, the old Italian quarter with its cantinas and theatres.",
    rent: "R$ 1,800–2,800/mo", safety: 6.8, transport: 9.4, nightlife: 8.4, studentFit: 9.4,
    commute: "5–15 min on foot", bestFor: "Walking to FGV and living next to Paulista",
    caution: "Busy streets; some blocks are quiet and poorly lit at night",
    landmarks: ["FGV EAESP", "MASP", "Trianon-Masp station", "Bixiga"] }),
  s({ slug: "jardim-paulista", name: "Jardim Paulista", region: "Oeste", at: [-23.5665, -46.6668],
    description: "Leafy, upmarket Jardins on the other side of Avenida Paulista, with Rua Oscar Freire's shops and many restaurants.",
    rent: "R$ 2,200–3,500/mo", safety: 7.8, transport: 9.0, nightlife: 7.4, studentFit: 8.2,
    commute: "10–20 min on foot or by metro", bestFor: "Safer, greener streets close to FGV",
    caution: "One of the most expensive areas", landmarks: ["Rua Oscar Freire", "Paulista station", "Oscar Freire station"] }),
  s({ slug: "consolacao", name: "Consolação", region: "Centro", at: [-23.5487, -46.6602],
    description: "Rua Augusta's bars and clubs, Higienópolis's tree-lined streets and Mackenzie University, on the north side of Paulista.",
    rent: "R$ 1,800–2,800/mo", safety: 7.0, transport: 9.4, nightlife: 9.2, studentFit: 9.0,
    commute: "10–20 min on foot or by metro", bestFor: "Nightlife and student life near FGV",
    caution: "Noisy around Rua Augusta", landmarks: ["Rua Augusta", "Mackenzie University", "Higienópolis", "Consolação station"] }),
  s({ slug: "republica", name: "República", region: "Centro", at: [-23.5448, -46.6410],
    description: "The historic centre with the Copan building, the Theatro Municipal and Praça Roosevelt; many small, cheaper studios.",
    rent: "R$ 1,300–2,000/mo", safety: 5.2, transport: 9.6, nightlife: 7.8, studentFit: 6.8,
    commute: "15–25 min by metro or bus", bestFor: "Cheaper studios with excellent metro links",
    caution: "Theft and robbery risk, especially at night", landmarks: ["Edifício Copan", "Theatro Municipal", "Praça Roosevelt", "República station"] }),
  s({ slug: "liberdade", name: "Liberdade", region: "Centro", at: [-23.5670, -46.6320],
    description: "Residential area south of the Japanese quarter, with Aclimação Park and São Joaquim station.",
    rent: "R$ 1,400–2,200/mo", safety: 6.4, transport: 8.8, nightlife: 6.0, studentFit: 7.2,
    commute: "15–25 min by metro or bus", bestFor: "Central living at moderate prices",
    landmarks: ["Aclimação Park", "São Joaquim station"] }),
  s({ slug: "se", name: "Sé", region: "Centro", at: [-23.5477, -46.6315],
    description: "The old core with the cathedral, the Municipal Market and Rua 25 de Março; Liberdade station and the Japanese quarter's main streets fall in this district.",
    rent: "R$ 1,200–1,800/mo", safety: 4.8, transport: 9.6, nightlife: 5.0, studentFit: 5.4,
    bestFor: "Cheapest rooms in the centre", commute: "15–25 min by metro", caution: "Empty and unsafe after business hours",
    landmarks: ["Sé Cathedral", "Municipal Market", "Liberdade station"] }),
  s({ slug: "santa-cecilia", name: "Santa Cecília", region: "Centro", at: [-23.5318, -46.6529],
    description: "Popular with young creatives, with bars along the Minhocão — an elevated road that becomes a park on weekends — and Sala São Paulo.",
    rent: "R$ 1,500–2,300/mo", safety: 6.2, transport: 9.0, nightlife: 7.8, studentFit: 7.8,
    commute: "20–30 min by metro or bus", bestFor: "Bohemian atmosphere at lower prices",
    landmarks: ["Minhocão", "Sala São Paulo", "Santa Cecília station", "Marechal Deodoro station"] }),
  s({ slug: "vila-mariana", name: "Vila Mariana", region: "Sul", at: [-23.5865, -46.6358],
    description: "Middle-class residential district along metro Line 1, home to UNIFESP's medical school and the Paraíso, Ana Rosa and Santa Cruz stations.",
    rent: "R$ 1,600–2,500/mo", safety: 7.6, transport: 9.0, nightlife: 6.0, studentFit: 8.0,
    commute: "20–30 min by metro", bestFor: "Safe, practical living with a direct metro line",
    landmarks: ["UNIFESP", "Paraíso station", "Ana Rosa station", "Santa Cruz station"] }),
  s({ slug: "pinheiros", name: "Pinheiros", region: "Oeste", at: [-23.5665, -46.6887],
    description: "Vila Madalena's street art and bars, Largo da Batata and the Faria Lima business area; well connected by metro Lines 2 and 4.",
    rent: "R$ 2,000–3,200/mo", safety: 7.4, transport: 9.2, nightlife: 9.4, studentFit: 8.8,
    commute: "20–30 min by metro", bestFor: "Nightlife, cafés and internships on Faria Lima",
    caution: "Expensive and in demand", landmarks: ["Beco do Batman", "Largo da Batata", "Faria Lima station", "Vila Madalena station"] }),
  s({ slug: "perdizes", name: "Perdizes", region: "Oeste", at: [-23.5387, -46.6809],
    description: "Hilly residential district around PUC-SP, with many students and Sumaré station on Line 2.",
    rent: "R$ 1,700–2,600/mo", safety: 7.6, transport: 8.0, nightlife: 6.2, studentFit: 8.2,
    commute: "20–30 min by metro or bus", bestFor: "Student neighbourhood with a calm feel",
    landmarks: ["PUC-SP", "Sumaré station"] }),
  s({ slug: "moema", name: "Moema", region: "Sul", at: [-23.5961, -46.6614],
    description: "Affluent area next to Ibirapuera Park with Moema station on Line 5.",
    rent: "R$ 2,200–3,400/mo", safety: 8.0, transport: 8.0, nightlife: 6.4, studentFit: 7.0,
    commute: "25–35 min by metro or bus", bestFor: "Safety and Ibirapuera Park", caution: "Expensive",
    landmarks: ["Ibirapuera Park", "Shopping Ibirapuera", "Moema station"] }),
  s({ slug: "itaim-bibi", name: "Itaim Bibi", region: "Oeste", at: [-23.6021, -46.6854],
    description: "Business district of Vila Olímpia and Itaim with Insper, JK Iguatemi and many offices.",
    rent: "R$ 2,300–3,500/mo", safety: 7.8, transport: 7.8, nightlife: 8.0, studentFit: 6.8,
    commute: "25–40 min by bus or metro", bestFor: "Internships in finance and consulting", caution: "Very expensive",
    landmarks: ["Insper", "JK Iguatemi", "Vila Olímpia station"] }),
  s({ slug: "cambuci", name: "Cambuci", region: "Centro", at: [-23.5644, -46.6170],
    description: "Older residential and light-industrial district east of Liberdade.",
    rent: "R$ 1,200–1,800/mo", safety: 6.2, transport: 7.4, nightlife: 3.5, studentFit: 5.8,
    bestFor: "Lower rents close to the centre", commute: "25–35 min by bus" }),
  s({ slug: "bom-retiro", name: "Bom Retiro", region: "Centro", at: [-23.5261, -46.6368],
    description: "Garment district with Korean restaurants, Luz station and the Pinacoteca museum.",
    rent: "R$ 1,200–1,800/mo", safety: 5.4, transport: 9.0, nightlife: 4.0, studentFit: 5.6,
    commute: "25–35 min by metro", caution: "Quiet and unsafe at night near Luz",
    landmarks: ["Pinacoteca", "Luz station", "Tiradentes station"] }),
  s({ slug: "bras", name: "Brás", region: "Leste", at: [-23.5437, -46.6175],
    description: "Busy wholesale shopping area and rail hub east of the centre.",
    rent: "R$ 1,100–1,600/mo", safety: 5.0, transport: 8.8, nightlife: 3.5, studentFit: 4.8,
    commute: "25–35 min by metro", caution: "Crowded and unsafe at night", landmarks: ["Brás station"] }),
  s({ slug: "barra-funda", name: "Barra Funda", region: "Oeste", at: [-23.5212, -46.6741],
    description: "Former industrial area with new apartment towers, Allianz Parque, the Memorial da América Latina and the Palmeiras-Barra Funda hub.",
    rent: "R$ 1,600–2,400/mo", safety: 6.6, transport: 8.8, nightlife: 6.6, studentFit: 7.0,
    commute: "25–35 min by metro", bestFor: "New buildings with good transport",
    landmarks: ["Allianz Parque", "Memorial da América Latina", "Palmeiras-Barra Funda station"] }),
  s({ slug: "pari", name: "Pari", region: "Leste", at: [-23.5272, -46.6175],
    description: "Small commercial district north of Brás.", rent: "R$ 1,000–1,500/mo", safety: 5.4, studentFit: 4.6,
    bestFor: "Lower rents close to the centre", commute: "30–40 min by bus and metro" }),
  s({ slug: "mooca", name: "Mooca", region: "Leste", at: [-23.5613, -46.5964],
    description: "Traditional Italian-Brazilian neighbourhood with a strong local identity and Bresser-Mooca station on Line 3.",
    rent: "R$ 1,300–1,900/mo", safety: 7.0, transport: 7.8, nightlife: 5.4, studentFit: 6.4,
    bestFor: "Local character and lower rents", commute: "30–40 min by metro", landmarks: ["Mooca Park", "Bresser-Mooca station"] }),
  s({ slug: "ipiranga", name: "Ipiranga", region: "Sul", at: [-23.5918, -46.6028],
    description: "Historic district with the Ipiranga Museum, where Brazil's independence was proclaimed.",
    rent: "R$ 1,200–1,800/mo", safety: 6.8, transport: 7.2, nightlife: 4.0, studentFit: 5.8,
    bestFor: "Historic area with lower rents", commute: "35–45 min by bus or metro", landmarks: ["Ipiranga Museum"] }),
  s({ slug: "saude", name: "Saúde", region: "Sul", at: [-23.6146, -46.6411],
    description: "Quiet residential district along the southern end of Line 1.",
    rent: "R$ 1,400–2,100/mo", safety: 7.6, transport: 8.0, nightlife: 4.4, studentFit: 6.4,
    commute: "30–40 min by metro", bestFor: "Safe and quiet with a direct metro line", landmarks: ["Saúde station", "Praça da Árvore station"] }),
  s({ slug: "alto-de-pinheiros", name: "Alto de Pinheiros", region: "Oeste", at: [-23.5476, -46.7119],
    description: "Upmarket residential district with houses and Villa-Lobos Park.",
    rent: "R$ 2,000–3,000/mo", safety: 8.0, transport: 6.4, nightlife: 4.0, studentFit: 5.8,
    bestFor: "Green, quiet streets", commute: "35–50 min by bus or metro", caution: "Expensive and car-oriented", landmarks: ["Villa-Lobos Park"] }),
  s({ slug: "belem", name: "Belém", region: "Leste", at: [-23.5376, -46.5948],
    description: "Residential and industrial district east of Brás on metro Line 3.", rent: "R$ 1,100–1,600/mo",
    commute: "35–45 min by metro", landmarks: ["Belém station"] }),
  s({ slug: "lapa", name: "Lapa", region: "Oeste", at: [-23.5226, -46.7060],
    description: "West-side district with a busy commercial centre and train connections.",
    rent: "R$ 1,400–2,000/mo", safety: 6.8, transport: 7.6, nightlife: 5.0, studentFit: 5.8,
    commute: "35–50 min by train and metro", landmarks: ["Lapa station"] }),
  s({ slug: "morumbi", name: "Morumbi", region: "Oeste", at: [-23.5963, -46.7080],
    description: "Wealthy, hilly district of gated condominiums and the Morumbi stadium.",
    rent: "R$ 1,800–2,800/mo", safety: 6.8, transport: 5.6, nightlife: 3.5, studentFit: 4.6,
    bestFor: "Quiet, gated condominiums", commute: "40–60 min by bus", caution: "Car-dependent, with wealthy and poor areas side by side", landmarks: ["Morumbi Stadium"] }),
  s({ slug: "casa-verde", name: "Casa Verde", region: "Norte", at: [-23.5010, -46.6574],
    description: "North Zone residential district across the Tietê River.", rent: "R$ 1,100–1,600/mo",
    transport: 6.4, bestFor: "Lower rents north of the river", commute: "40–55 min by bus and metro" }),
  s({ slug: "butanta", name: "Butantã", region: "Oeste", at: [-23.5702, -46.7263],
    description: "West Zone district around Butantã station on Line 4, with the Butantan Institute; popular with USP students.",
    rent: "R$ 1,400–2,100/mo", safety: 6.8, transport: 7.6, nightlife: 5.0, studentFit: 6.8,
    commute: "30–40 min by metro", landmarks: ["Butantan Institute", "Butantã station"] }),
  s({ slug: "santana", name: "Santana", region: "Norte", at: [-23.5000, -46.6304],
    description: "Main centre of the North Zone, on metro Line 1, with the Campo de Marte airfield.",
    rent: "R$ 1,300–1,900/mo", safety: 7.0, transport: 8.2, nightlife: 5.0, studentFit: 6.0,
    commute: "35–45 min by metro", landmarks: ["Santana station", "Campo de Marte"] }),
  s({ slug: "campo-belo", name: "Campo Belo", region: "Sul", at: [-23.6281, -46.6679],
    description: "Residential district next to Congonhas Airport.", rent: "R$ 1,700–2,600/mo", safety: 7.6, transport: 7.4,
    commute: "40–50 min by metro or bus", caution: "Aircraft noise near Congonhas", landmarks: ["Congonhas Airport"] }),
  s({ slug: "limao", name: "Limão", region: "Norte", at: [-23.4975, -46.6760],
    description: "North Zone residential district across the Tietê River.", rent: "R$ 1,000–1,500/mo",
    transport: 6.0, bestFor: "Lowest rents on this map", commute: "45–60 min by bus" }),
  s({ slug: "vila-guilherme", name: "Vila Guilherme", region: "Norte", at: [-23.5092, -46.6058],
    description: "North Zone district with the Center Norte shopping centre.", rent: "R$ 1,100–1,600/mo",
    transport: 6.6, bestFor: "Lower rents north of the river", commute: "40–55 min by bus and metro", landmarks: ["Shopping Center Norte"] }),
];

export type SaoPauloListing = Listing & { districtSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const saoPauloListings: SaoPauloListing[] = [
  { id: "sp-sample-bela-vista-room", districtSlug: "bela-vista", title: "Room near Avenida Nove de Julho", rent: 2200, currency: "R$ ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: -23.5625, lng: -46.6505, description: "Furnished room in a shared flat a few minutes' walk from FGV EAESP.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Wifi included", "Doorman"] },
  { id: "sp-sample-bela-vista-studio", districtSlug: "bela-vista", title: "Studio near Paulista", rent: 2900, currency: "R$ ", type: "Studio", source: SAMPLE_SOURCE, lat: -23.5585, lng: -46.6465, description: "Small furnished studio in a new building close to Trianon-Masp station.", rooms: 1, sizeSqm: 24, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Gym", "Laundry"], riskNote: "Higher caution" },
  { id: "sp-sample-consolacao-room", districtSlug: "consolacao", title: "Room off Rua Augusta", rent: 2100, currency: "R$ ", type: "Room", source: SAMPLE_SOURCE, lat: -23.5515, lng: -46.6560, description: "Room in a student flat close to Consolação station.", rooms: 1, sizeSqm: 11, availableFrom: "1 Mar 2027", amenities: ["Furnished"] },
  { id: "sp-sample-pinheiros-room", districtSlug: "pinheiros", title: "Room in Vila Madalena", rent: 2500, currency: "R$ ", type: "Room", source: SAMPLE_SOURCE, lat: -23.5560, lng: -46.6900, description: "Room in a shared house near Vila Madalena's cafés.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Bills included"] },
  { id: "sp-sample-vila-mariana-room", districtSlug: "vila-mariana", title: "Room near Ana Rosa station", rent: 1900, currency: "R$ ", type: "Room", source: SAMPLE_SOURCE, lat: -23.5810, lng: -46.6385, description: "Room in a quiet flat on metro Line 1.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Doorman"] },
];

export function getSaoPauloDistrictBySlug(slug: string): SaoPauloDistrict | undefined {
  return saoPauloDistricts.find((x) => x.slug === slug);
}

export function getSaoPauloListingsForDistrict(slug: string | null): SaoPauloListing[] {
  if (!slug) return [];
  return saoPauloListings.filter((l) => l.districtSlug === slug);
}
