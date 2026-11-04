import type { Listing } from "./listings";

// 38 districts (aqsam) from New Cairo and El Shorouk in the east to Downtown, Zamalek and the Giza
// side of the Nile (Dokki, Agouza and Giza).
// Boundaries: CAPMAS / OCHA ROMENA via HDX and geoBoundaries (CC BY 3.0 IGO), credited in CairoExplorer.
// Their district boundaries date from 2017, so some newer districts (e.g. Mokattam) are part of a
// larger unit here. The American University in Cairo (School of Business, home of CEMS) is on the
// New Cairo campus. Commute times refer to that campus; rents are estimated monthly ranges for a room
// in a shared flat (EGP); scores are editorial judgments.

export type CairoDistrict = {
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

type Area = "New Cairo" | "Eastern Cairo" | "Southern Cairo" | "Historic Cairo" | "Central Cairo" | "Northern Cairo" | "Giza";
type Entry = {
  slug: string; name: string; area: Area; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const s = ({ area, at, landmarks = [], ...e }: Entry): CairoDistrict => ({
  rent: "EGP 5,000–8,000/mo", safety: 6.4, transport: 5.6, nightlife: 4.4, studentFit: 4.6,
  bestFor: "Local life at low prices", caution: "Far from AUC — expect a long ride in heavy traffic",
  ...e,
  landmarks,
  badge: area,
  lat: at[0],
  lng: at[1],
});

export const cairoDistricts: CairoDistrict[] = [
  // ── New Cairo ──
  s({ slug: "new-cairo-1", name: "New Cairo 1 (Fifth Settlement & Rehab)", area: "New Cairo", at: [30.0202, 31.4947],
    description: "The heart of New Cairo, with the AUC campus, the Fifth Settlement's villas and compounds, Rehab City and big malls such as Cairo Festival City. Most AUC students who don't live with family look here first.",
    rent: "EGP 10,000–18,000/mo", safety: 8.0, transport: 4.8, nightlife: 6.6, studentFit: 9.0,
    commute: "5–25 min by car, AUC shuttle or bus", bestFor: "Living close to AUC",
    caution: "Spread out and car-dependent — little is within walking distance",
    landmarks: ["American University in Cairo (New Cairo campus)", "Point 90 Mall", "Cairo Festival City", "Rehab City", "Downtown Mall New Cairo"] }),
  s({ slug: "new-cairo-2", name: "New Cairo 2 (Mirage City & Madinaty)", area: "New Cairo", at: [30.0717, 31.4354],
    description: "Northern and eastern New Cairo, with gated developments such as Mirage City and the large Madinaty new town.",
    rent: "EGP 9,000–15,000/mo", safety: 8.0, transport: 4.0, nightlife: 4.0, studentFit: 7.0,
    commute: "20–40 min by car", bestFor: "Quiet, gated compounds",
    caution: "Very car-dependent; Madinaty is far from campus", landmarks: ["Mirage City", "Madinaty"] }),
  s({ slug: "new-cairo-3", name: "New Cairo 3 (Katameya)", area: "New Cairo", at: [29.9954, 31.4054],
    description: "Southern New Cairo around the Ring Road, with Katameya Heights and other compounds.",
    rent: "EGP 9,000–15,000/mo", safety: 7.8, transport: 4.2, nightlife: 3.6, studentFit: 7.0,
    commute: "15–30 min by car", bestFor: "Compounds between AUC and Maadi",
    caution: "Few shops on foot; you'll need a car or ride-hailing", landmarks: ["Katameya Heights"] }),
  s({ slug: "el-shorouk", name: "El Shorouk", area: "New Cairo", at: [30.1188, 31.6106],
    description: "Satellite city north-east of New Cairo, home to the British University in Egypt.",
    rent: "EGP 6,000–10,000/mo", safety: 7.6, transport: 3.6, nightlife: 2.6, studentFit: 5.6,
    commute: "30–45 min by car", bestFor: "Low rents in a quiet new city",
    caution: "Far from AUC and from central Cairo", landmarks: ["British University in Egypt"] }),

  // ── Eastern Cairo ──
  s({ slug: "nasr-city-east", name: "Nasr City (east)", area: "Eastern Cairo", at: [30.0733, 31.3442],
    description: "Large planned district of apartment blocks, with the City Stars mall and many shops and restaurants. AUC buses run to Nasr City.",
    rent: "EGP 6,000–10,000/mo", safety: 7.2, transport: 6.6, nightlife: 6.0, studentFit: 7.4,
    commute: "35–60 min by AUC bus or car", bestFor: "Affordable flats with AUC bus service",
    caution: "Heavy traffic on the way to New Cairo", landmarks: ["City Stars"] }),
  s({ slug: "nasr-city-west", name: "Nasr City (west)", area: "Eastern Cairo", at: [30.0690, 31.3122],
    description: "The older western part of Nasr City, around Cairo International Stadium.",
    rent: "EGP 5,500–9,000/mo", safety: 7.0, transport: 7.0, nightlife: 5.4, studentFit: 6.8,
    commute: "40–65 min by AUC bus or car", bestFor: "Central location at moderate prices",
    caution: "Busy roads and traffic", landmarks: ["Cairo International Stadium"] }),
  s({ slug: "heliopolis", name: "Heliopolis (Misr El Gedida)", area: "Eastern Cairo", at: [30.0907, 31.3241],
    description: "Elegant early-20th-century garden suburb with arcaded streets, the Baron Empain Palace and the Korba district. AUC buses run to Heliopolis.",
    rent: "EGP 8,000–13,000/mo", safety: 7.6, transport: 7.0, nightlife: 6.4, studentFit: 7.8,
    commute: "35–60 min by AUC bus or car", bestFor: "Character, cafés and AUC bus service",
    caution: "Ask about traffic at rush hour", landmarks: ["Baron Empain Palace", "Korba", "Merryland Park"] }),
  s({ slug: "el-nozha", name: "El Nozha (Sheraton)", area: "Eastern Cairo", at: [30.1078, 31.3655],
    description: "Residential area next to Cairo International Airport, including the Sheraton Heliopolis neighbourhood.",
    rent: "EGP 7,000–11,000/mo", safety: 7.4, transport: 5.6, nightlife: 4.6, studentFit: 6.4,
    commute: "30–50 min by car", bestFor: "Quiet residential streets", caution: "Aircraft noise near the airport",
    landmarks: ["Sheraton Heliopolis", "Cairo International Airport"] }),

  // ── Southern Cairo ──
  s({ slug: "maadi", name: "Maadi", area: "Southern Cairo", at: [29.9638, 31.3048],
    description: "Green, villa-lined suburb popular with expats, with cafés on Road 9, the Degla area and Zahraa El Maadi. AUC buses run to Maadi.",
    rent: "EGP 8,000–14,000/mo", safety: 7.8, transport: 6.6, nightlife: 6.6, studentFit: 8.2,
    commute: "35–55 min by AUC bus or car", bestFor: "Expat-friendly, leafy living",
    caution: "Rents vary a lot between sub-areas", landmarks: ["Road 9", "Degla", "Zahraa El Maadi"] }),
  s({ slug: "tura", name: "Tura", area: "Southern Cairo", at: [29.9390, 31.3803],
    description: "Area south of Maadi with quarries and industry.", rent: "EGP 4,500–7,000/mo",
    safety: 6.0, transport: 4.6, nightlife: 2.0, studentFit: 3.4, commute: "35–55 min by car",
    caution: "Mostly industrial; few rentals" }),
  s({ slug: "el-basatin", name: "El Basatin", area: "Southern Cairo", at: [29.9802, 31.2930],
    description: "Dense working-class district between Maadi and Old Cairo.", rent: "EGP 4,000–6,500/mo",
    safety: 5.6, studentFit: 3.6, commute: "45–70 min by car", bestFor: "Very low rents" }),
  s({ slug: "old-cairo", name: "Old Cairo (Misr El Qadima)", area: "Southern Cairo", at: [30.0065, 31.2318],
    description: "Historic district along the Nile with Coptic Cairo, the Hanging Church and Manial Palace on Roda Island.",
    rent: "EGP 5,000–8,500/mo", safety: 6.4, transport: 7.0, nightlife: 4.0, studentFit: 5.6,
    commute: "55–80 min by car", landmarks: ["Coptic Cairo", "Hanging Church", "Manial Palace"] }),
  s({ slug: "el-khalifa", name: "El Khalifa & Mokattam", area: "Southern Cairo", at: [30.0333, 31.2833],
    description: "Medieval cemeteries and mosques below the Citadel, and the Mokattam plateau with its apartment blocks above. In the 2017 boundaries both are one unit.",
    rent: "EGP 5,500–9,000/mo", safety: 6.6, transport: 5.4, nightlife: 3.6, studentFit: 5.6,
    commute: "40–60 min by AUC bus or car", bestFor: "Mokattam: views and AUC bus service",
    caution: "Mokattam is far from the metro", landmarks: ["Citadel of Saladin", "Sultan Hassan Mosque", "Mokattam"] }),

  // ── Historic Cairo ──
  s({ slug: "el-gamaleya", name: "El Gamaleya", area: "Historic Cairo", at: [30.0489, 31.2613],
    description: "The heart of medieval Islamic Cairo, with the Khan el-Khalili bazaar and Al-Muizz Street.",
    rent: "EGP 4,000–6,500/mo", safety: 6.0, transport: 6.6, nightlife: 5.6, studentFit: 4.6,
    commute: "55–80 min by car", bestFor: "History on your doorstep",
    caution: "Old buildings and crowded streets; few flats suited to students", landmarks: ["Khan el-Khalili"] }),
  s({ slug: "el-darb-el-ahmar", name: "El Darb El Ahmar", area: "Historic Cairo", at: [30.0458, 31.2627],
    description: "Historic quarter with Al-Azhar Mosque and the hilltop Al-Azhar Park.",
    rent: "EGP 4,000–6,500/mo", safety: 6.0, transport: 6.2, studentFit: 4.4, commute: "55–80 min by car",
    caution: "Old buildings; few modern flats", landmarks: ["Al-Azhar Mosque", "Al-Azhar Park"] }),
  s({ slug: "el-muski", name: "El Muski", area: "Historic Cairo", at: [30.0504, 31.2524],
    description: "Busy wholesale market streets between Downtown and Islamic Cairo.", rent: "EGP 4,000–6,500/mo",
    safety: 5.8, transport: 7.0, studentFit: 3.6, commute: "55–80 min by car", caution: "Crowded markets; few homes to rent" }),
  s({ slug: "bab-el-shaariya", name: "Bab El Shaariya", area: "Historic Cairo", at: [30.0588, 31.2580],
    description: "Dense old neighbourhood north of El Muski.", rent: "EGP 3,500–6,000/mo",
    safety: 5.6, transport: 6.6, studentFit: 3.4, commute: "55–80 min by car" }),
  s({ slug: "manshiyat-naser", name: "Manshiyat Naser", area: "Historic Cairo", at: [30.0428, 31.2840],
    description: "Dense informal neighbourhoods at the foot of the Mokattam hills.", rent: "EGP 3,000–5,000/mo",
    safety: 5.0, transport: 4.0, nightlife: 2.0, studentFit: 2.6, commute: "45–70 min by car",
    caution: "Not suited to newcomers" }),
  s({ slug: "sayeda-zeinab", name: "Sayeda Zeinab", area: "Historic Cairo", at: [30.0316, 31.2421],
    description: "Lively traditional district around the Sayeda Zeinab Mosque and the Ibn Tulun Mosque.",
    rent: "EGP 4,500–7,000/mo", safety: 6.0, transport: 7.6, nightlife: 5.0, studentFit: 4.8,
    commute: "55–80 min by car", landmarks: ["Sayeda Zeinab Mosque", "Ibn Tulun Mosque"] }),

  // ── Central Cairo ──
  s({ slug: "qasr-el-nil", name: "Downtown & Garden City (Qasr El Nil)", area: "Central Cairo", at: [30.0476, 31.2385],
    description: "Downtown's belle-époque blocks around Tahrir and Talaat Harb squares, the Egyptian Museum, AUC's Tahrir Square campus and leafy Garden City by the Nile.",
    rent: "EGP 7,000–12,000/mo", safety: 6.8, transport: 8.8, nightlife: 7.8, studentFit: 7.6,
    commute: "50–75 min by AUC bus", bestFor: "City life with AUC bus service from Tahrir",
    caution: "Noisy and crowded; old buildings vary a lot in condition",
    landmarks: ["Tahrir Square", "AUC Tahrir Square campus", "Egyptian Museum", "Talaat Harb Square", "Garden City"] }),
  s({ slug: "abdeen", name: "Abdeen", area: "Central Cairo", at: [30.0424, 31.2468],
    description: "Downtown neighbourhood around Abdeen Palace.", rent: "EGP 5,500–9,000/mo",
    safety: 6.4, transport: 8.0, nightlife: 5.6, studentFit: 6.0, commute: "50–75 min by car",
    landmarks: ["Abdeen Palace"] }),
  s({ slug: "el-azbakeya", name: "El Azbakeya", area: "Central Cairo", at: [30.0630, 31.2461],
    description: "Busy commercial area around Ramses Station.", rent: "EGP 5,000–8,000/mo",
    safety: 5.8, transport: 8.6, studentFit: 4.6, commute: "50–75 min by car",
    caution: "Crowded and noisy around the station", landmarks: ["Ramses Station"] }),
  s({ slug: "bulaq", name: "Bulaq", area: "Central Cairo", at: [30.0620, 31.2342],
    description: "Old riverside district north of Downtown, facing Zamalek.", rent: "EGP 4,500–7,500/mo",
    safety: 5.8, transport: 7.0, studentFit: 4.4, commute: "55–80 min by car" }),
  s({ slug: "zamalek", name: "Zamalek", area: "Central Cairo", at: [30.0630, 31.2196],
    description: "Leafy island in the Nile with embassies, galleries, bars and the Gezira Sporting Club — Cairo's most international neighbourhood. AUC buses run to Zamalek.",
    rent: "EGP 10,000–18,000/mo", safety: 8.2, transport: 7.4, nightlife: 8.4, studentFit: 8.2,
    commute: "55–80 min by AUC bus", bestFor: "International life and nightlife",
    caution: "Expensive, and a long ride to the New Cairo campus",
    landmarks: ["Cairo Tower", "Cairo Opera House", "Gezira Sporting Club"] }),

  // ── Northern Cairo ──
  s({ slug: "shubra", name: "Shubra", area: "Northern Cairo", at: [30.0718, 31.2503],
    description: "Densely populated historic district north of Downtown.", rent: "EGP 4,000–6,500/mo",
    safety: 5.8, transport: 7.4, studentFit: 4.0, commute: "55–80 min by AUC bus or car" }),
  s({ slug: "rod-el-farag", name: "Rod El Farag", area: "Northern Cairo", at: [30.0747, 31.2375],
    description: "Riverside district north of Bulaq.", rent: "EGP 4,000–6,500/mo",
    safety: 5.8, transport: 6.6, studentFit: 3.8, commute: "60–85 min by car" }),
  s({ slug: "el-sahel", name: "El Sahel", area: "Northern Cairo", at: [30.0921, 31.2472],
    description: "Dense residential district along the Nile in northern Cairo.", rent: "EGP 3,500–6,000/mo",
    safety: 5.6, studentFit: 3.4, commute: "60–85 min by car" }),
  s({ slug: "el-sharabiya", name: "El Sharabiya", area: "Northern Cairo", at: [30.0820, 31.2641],
    description: "Working-class district in northern Cairo.", rent: "EGP 3,500–6,000/mo",
    safety: 5.4, studentFit: 3.2, commute: "55–80 min by car" }),
  s({ slug: "el-zawya-el-hamra", name: "El Zawya El Hamra", area: "Northern Cairo", at: [30.0977, 31.2697],
    description: "Dense residential district in northern Cairo.", rent: "EGP 3,500–6,000/mo",
    safety: 5.4, studentFit: 3.2, commute: "55–80 min by car" }),
  s({ slug: "el-daher", name: "El Daher", area: "Northern Cairo", at: [30.0628, 31.2681],
    description: "Old residential district between Downtown and Abbasiya.", rent: "EGP 4,500–7,000/mo",
    safety: 6.0, transport: 7.0, studentFit: 4.4, commute: "50–75 min by car" }),
  s({ slug: "el-waili", name: "El Waili (Abbasiya)", area: "Northern Cairo", at: [30.0755, 31.2904],
    description: "District around Abbasiya Square and the main campus of Ain Shams University.",
    rent: "EGP 4,500–7,500/mo", safety: 6.2, transport: 7.6, nightlife: 4.4, studentFit: 5.6,
    commute: "45–70 min by car", bestFor: "Low rents near Ain Shams University",
    landmarks: ["Ain Shams University", "Abbasiya"] }),
  s({ slug: "hadayek-el-kobba", name: "Hadayek El Kobba", area: "Northern Cairo", at: [30.0855, 31.2829],
    description: "Residential district north of Abbasiya.", rent: "EGP 4,500–7,000/mo",
    safety: 6.0, transport: 6.6, studentFit: 4.2, commute: "45–70 min by car" }),
  s({ slug: "el-zeitoun", name: "El Zeitoun", area: "Northern Cairo", at: [30.1004, 31.3013],
    description: "Residential district west of Heliopolis.", rent: "EGP 4,500–7,000/mo",
    safety: 6.2, transport: 6.6, studentFit: 4.4, commute: "45–70 min by car" }),
  s({ slug: "ain-shams", name: "Ain Shams", area: "Northern Cairo", at: [30.1227, 31.3300],
    description: "Large, dense residential district in north-eastern Cairo.", rent: "EGP 3,500–6,000/mo",
    safety: 5.4, studentFit: 3.4, commute: "45–70 min by car" }),
  s({ slug: "el-matareya", name: "El Matareya", area: "Northern Cairo", at: [30.1280, 31.3040],
    description: "Dense district on the site of ancient Heliopolis.", rent: "EGP 3,500–6,000/mo",
    safety: 5.2, studentFit: 3.0, commute: "50–75 min by car" }),

  // ── Giza ──
  s({ slug: "dokki", name: "Dokki", area: "Giza", at: [30.0389, 31.2126],
    description: "Central residential and office district on the Giza side of the Nile. AUC buses run to Dokki.",
    rent: "EGP 6,500–11,000/mo", safety: 7.0, transport: 7.6, nightlife: 6.0, studentFit: 7.0,
    commute: "60–85 min by AUC bus", bestFor: "Central living on the west bank", caution: "A long ride to New Cairo" }),
  s({ slug: "agouza", name: "Agouza & Mohandessin", area: "Giza", at: [30.0584, 31.2020],
    description: "Busy upper-middle-class districts with shopping streets and restaurants. AUC's Zamalek/Agouza bus route serves the area.",
    rent: "EGP 7,000–12,000/mo", safety: 7.2, transport: 7.2, nightlife: 7.0, studentFit: 7.0,
    commute: "60–85 min by AUC bus", bestFor: "Shops and restaurants on the west bank", caution: "A long ride to New Cairo",
    landmarks: ["Mohandessin"] }),
  s({ slug: "giza", name: "Giza (Cairo University)", area: "Giza", at: [30.0268, 31.2059],
    description: "District around Cairo University and the Giza Zoo.", rent: "EGP 5,000–8,500/mo",
    safety: 6.6, transport: 7.4, nightlife: 4.6, studentFit: 5.6, commute: "65–90 min by car",
    caution: "Far from AUC's New Cairo campus", landmarks: ["Cairo University", "Giza Zoo"] }),
];

export type CairoListing = Listing & { districtSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const cairoListings: CairoListing[] = [
  { id: "cai-sample-fifth-settlement-room", districtSlug: "new-cairo-1", title: "Room near AUC", rent: 14000, currency: "EGP ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 30.0250, lng: 31.4880, description: "Furnished room in a shared compound apartment a short drive from the AUC campus.", rooms: 1, sizeSqm: 16, availableFrom: "20 Jan 2027", amenities: ["Furnished", "Air conditioning", "Compound security"] },
  { id: "cai-sample-rehab-room", districtSlug: "new-cairo-1", title: "Room in Rehab City", rent: 11000, currency: "EGP ", type: "Room", source: SAMPLE_SOURCE, lat: 30.0500, lng: 31.4900, description: "Room in a shared flat in Rehab City, on the AUC bus route.", rooms: 1, sizeSqm: 14, availableFrom: "20 Jan 2027", amenities: ["Furnished", "Air conditioning"] },
  { id: "cai-sample-maadi-room", districtSlug: "maadi", title: "Room off Road 9", rent: 10500, currency: "EGP ", type: "Room", source: SAMPLE_SOURCE, lat: 29.9620, lng: 31.3020, description: "Room in a shared villa apartment in leafy Maadi, close to Road 9 cafés.", rooms: 1, sizeSqm: 15, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Air conditioning", "Balcony"] },
  { id: "cai-sample-zamalek-studio", districtSlug: "zamalek", title: "Studio in Zamalek", rent: 19000, currency: "EGP ", type: "Studio", source: SAMPLE_SOURCE, lat: 30.0600, lng: 31.2210, description: "Small furnished studio in an older Zamalek building with a doorman.", rooms: 1, sizeSqm: 32, availableFrom: "20 Jan 2027", amenities: ["Furnished", "Doorman", "Air conditioning"] },
  { id: "cai-sample-heliopolis-room", districtSlug: "heliopolis", title: "Room in Korba", rent: 9000, currency: "EGP ", type: "Room", source: SAMPLE_SOURCE, lat: 30.0910, lng: 31.3230, description: "Room in a shared flat in historic Heliopolis,, on the AUC Heliopolis bus route.", rooms: 1, sizeSqm: 14, availableFrom: "1 Feb 2027", amenities: ["Furnished"] },
];

export function getCairoDistrictBySlug(slug: string): CairoDistrict | undefined {
  return cairoDistricts.find((x) => x.slug === slug);
}

export function getCairoListingsForDistrict(slug: string | null): CairoListing[] {
  if (!slug) return [];
  return cairoListings.filter((l) => l.districtSlug === slug);
}
