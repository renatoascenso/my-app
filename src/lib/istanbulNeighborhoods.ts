import type { Listing } from "./listings";

// Istanbul's 39 districts (ilçe). Boundaries: © OpenStreetMap contributors (ODbL), credited in IstanbulExplorer.
// Koç University's Rumelifeneri campus (Graduate School of Business, home of CEMS) is at the far north of Sarıyer.
// Commute times refer to the Rumelifeneri campus. Rents are estimated monthly ranges for a room in a shared flat (TRY);
// scores are editorial judgments.

export type IstanbulDistrict = {
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

type Side = "europe" | "asia";
type Entry = {
  slug: string; name: string; side: Side; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const s = ({ side, at, landmarks = [], ...e }: Entry): IstanbulDistrict => ({
  rent: "TL 15,000–25,000/mo", safety: 8.0, transport: 7.0, nightlife: 3.0, studentFit: 4.5,
  bestFor: "Lower rents far from campus", caution: "Very long commute to Rumelifeneri (often 1.5 hours or more)",
  ...e,
  landmarks,
  badge: side === "europe" ? "European side" : "Asian side",
  lat: at[0],
  lng: at[1],
});

export const istanbulDistricts: IstanbulDistrict[] = [
  // ── Around Koç ──
  s({ slug: "sariyer", name: "Sarıyer", side: "europe", at: [41.2055, 29.073],
    description: "Koç University's Rumelifeneri campus sits in the forests at the district's northern tip, near the Black Sea. Further south lie Sarıyer's Bosphorus villages, İstinye, Tarabya and the Maslak business district.",
    rent: "TL 25,000–45,000/mo", safety: 9.0, transport: 6.4, nightlife: 5.0, studentFit: 9.0,
    commute: "On campus; 20–40 min by bus or shuttle from Sarıyer centre and Hacıosman metro", bestFor: "Koç students — most live on campus", caution: "The campus is remote; living off campus means long bus rides",
    landmarks: ["Koç University (Rumelifeneri campus)", "Hacıosman metro", "Maslak", "İstinye"] }),
  s({ slug: "besiktas", name: "Beşiktaş", side: "europe", at: [41.0425, 29.007],
    description: "Lively Bosphorus district with Beşiktaş's bars and fish market, Bebek and Ortaköy, and Boğaziçi University.",
    rent: "TL 30,000–50,000/mo", safety: 8.8, transport: 9.0, nightlife: 9.2, studentFit: 8.2,
    commute: "45–75 min by metro and bus", bestFor: "Students who want city life and the Bosphorus", caution: "Expensive; long ride to Rumelifeneri",
    landmarks: ["Bebek", "Ortaköy", "Boğaziçi University"] }),
  s({ slug: "sisli", name: "Şişli", side: "europe", at: [41.0670, 28.996],
    description: "Business and shopping district around Mecidiyeköy, Nişantaşı and the M2 metro, with direct trains north to Hacıosman.",
    rent: "TL 25,000–45,000/mo", safety: 8.6, transport: 9.4, nightlife: 7.8, studentFit: 7.6,
    commute: "50–70 min by M2 metro and bus", bestFor: "Fast M2 metro connection towards Koç", caution: "Busy and congested", landmarks: ["Nişantaşı", "Mecidiyeköy"] }),
  s({ slug: "kagithane", name: "Kağıthane", side: "europe", at: [41.0796, 28.9854],
    description: "Central, more affordable district between Şişli and Eyüpsultan with new towers along the Kağıthane stream.",
    rent: "TL 20,000–35,000/mo", safety: 8.0, transport: 8.0, nightlife: 4.0, studentFit: 6.8,
    commute: "60–80 min by bus and metro", bestFor: "Lower rents near the centre", caution: "Mixed neighbourhoods", landmarks: ["Kağıthane"] }),
  s({ slug: "beyoglu", name: "Beyoğlu", side: "europe", at: [41.0370, 28.985],
    description: "Taksim, İstiklal Avenue, Cihangir and Karaköy — Istanbul's nightlife and cultural heart.",
    rent: "TL 25,000–45,000/mo", safety: 7.6, transport: 9.2, nightlife: 9.6, studentFit: 7.6,
    commute: "60–80 min by metro and bus", bestFor: "Nightlife and culture", caution: "Crowded; old buildings; long commute", landmarks: ["Taksim", "İstiklal Avenue", "Karaköy"] }),
  s({ slug: "eyupsultan", name: "Eyüpsultan", side: "europe", at: [41.1653, 28.8832],
    description: "Historic Eyüp on the Golden Horn and large forested areas stretching north.",
    rent: "TL 18,000–30,000/mo", safety: 8.4, transport: 6.8, nightlife: 2.5, studentFit: 5.2,
    commute: "60–90 min", bestFor: "Quiet, traditional neighbourhoods", caution: "Long commute", landmarks: ["Eyüp Sultan Mosque"] }),
  s({ slug: "fatih", name: "Fatih", side: "europe", at: [41.0055, 28.9768],
    description: "The historic peninsula with Sultanahmet, the Grand Bazaar and Istanbul University.",
    rent: "TL 18,000–30,000/mo", safety: 7.6, transport: 8.8, nightlife: 5.0, studentFit: 6.4,
    commute: "75–90 min", bestFor: "History and Istanbul University", caution: "Touristy and far from Koç", landmarks: ["Sultanahmet", "Grand Bazaar"] }),

  // ── Asian side ──
  s({ slug: "kadikoy", name: "Kadıköy", side: "asia", at: [40.984, 29.026],
    description: "The Asian side's lively centre: Moda's cafés and bars, the Kadıköy market and ferries across the Bosphorus.",
    rent: "TL 25,000–45,000/mo", safety: 8.8, transport: 8.6, nightlife: 9.0, studentFit: 7.4,
    commute: "75–100 min by ferry, metro and bus", bestFor: "Alternative, youthful atmosphere", caution: "Very long commute to Rumelifeneri", landmarks: ["Moda", "Kadıköy market"] }),
  s({ slug: "uskudar", name: "Üsküdar", side: "asia", at: [41.0230, 29.015],
    description: "Conservative, historic Bosphorus district with the Marmaray rail tunnel to the European side.",
    rent: "TL 20,000–35,000/mo", safety: 8.8, transport: 8.4, nightlife: 3.5, studentFit: 5.8,
    commute: "70–90 min", bestFor: "Bosphorus views on the Asian side", caution: "Long commute", landmarks: ["Maiden's Tower"] }),
  s({ slug: "beykoz", name: "Beykoz", side: "asia", at: [41.1387, 29.2216],
    description: "Green north-eastern district along the Asian shore of the Bosphorus.",
    rent: "TL 20,000–35,000/mo", safety: 9.0, transport: 5.0, nightlife: 1.5, studentFit: 4.4,
    commute: "75–100 min", bestFor: "Nature", caution: "Car needed; across the Bosphorus from Koç", landmarks: ["Anadolu Kavağı"] }),
  s({ slug: "atasehir", name: "Ataşehir", side: "asia", at: [40.9844, 29.1459], description: "Modern towers and the financial centre on the Asian side.", commute: "80–100 min", rent: "TL 20,000–35,000/mo", transport: 7.6, landmarks: ["Istanbul Financial Center"] }),

  // ── Further out (European side) ──
  s({ slug: "bakirkoy", name: "Bakırköy", side: "europe", at: [40.9809, 28.8329], description: "Seaside district with shopping streets and the Marmaray line.", commute: "80–100 min", rent: "TL 20,000–35,000/mo", transport: 8.0 }),
  s({ slug: "zeytinburnu", name: "Zeytinburnu", side: "europe", at: [41.0053, 28.9084], description: "Dense residential district just outside the old city walls.", commute: "80–100 min" }),
  s({ slug: "bayrampasa", name: "Bayrampaşa", side: "europe", at: [41.0507, 28.8985], description: "Residential district with Istanbul's main bus terminal nearby.", commute: "75–95 min" }),
  s({ slug: "gaziosmanpasa", name: "Gaziosmanpaşa", side: "europe", at: [41.0729, 28.9018], description: "Working-class residential district north-west of the centre.", commute: "75–95 min", safety: 7.2 }),
  s({ slug: "esenler", name: "Esenler", side: "europe", at: [41.0624, 28.8698], description: "Dense residential district in the west.", commute: "80–100 min", safety: 7.2 }),
  s({ slug: "gungoren", name: "Güngören", side: "europe", at: [41.0200, 28.8748], description: "Compact, densely built residential district.", commute: "85–100 min", safety: 7.4 }),
  s({ slug: "bagcilar", name: "Bağcılar", side: "europe", at: [41.0450, 28.834], description: "One of Istanbul's most populous districts, with industry and housing.", commute: "85–105 min", safety: 7.2 }),
  s({ slug: "bahcelievler", name: "Bahçelievler", side: "europe", at: [41.0097, 28.8386], description: "Residential district near the Marmara coast and the metrobus line.", commute: "85–105 min" }),
  s({ slug: "kucukcekmece", name: "Küçükçekmece", side: "europe", at: [41.0211, 28.7765], description: "Western district around Küçükçekmece Lake.", commute: "90–110 min" }),
  s({ slug: "avcilar", name: "Avcılar", side: "europe", at: [41.0374, 28.7172], description: "Western district with Istanbul University's Avcılar campus.", commute: "100–120 min", studentFit: 5.0 }),
  s({ slug: "basaksehir", name: "Başakşehir", side: "europe", at: [41.1037, 28.7721], description: "Planned suburb with large housing estates and the City Hospital.", commute: "90–110 min" }),
  s({ slug: "sultangazi", name: "Sultangazi", side: "europe", at: [41.1209, 28.8752], description: "Residential district on the northern edge of the city.", commute: "80–100 min", safety: 7.2 }),
  s({ slug: "esenyurt", name: "Esenyurt", side: "europe", at: [41.0492, 28.658], description: "Turkey's most populous district, with more than a million residents in high-rise blocks.", commute: "110–130 min", safety: 7.0 }),
  s({ slug: "beylikduzu", name: "Beylikdüzü", side: "europe", at: [40.9879, 28.6439], description: "Western coastal suburb at the end of the metrobus line.", commute: "110–130 min" }),
  s({ slug: "buyukcekmece", name: "Büyükçekmece", side: "europe", at: [41.0570, 28.5589], description: "Coastal town on the far western edge of the metropolis.", commute: "2+ hours" }),
  s({ slug: "arnavutkoy", name: "Arnavutköy", side: "europe", at: [41.2483, 28.6816], description: "Rural north-west with Istanbul Airport.", commute: "60–90 min by car", landmarks: ["Istanbul Airport"] }),
  s({ slug: "catalca", name: "Çatalca", side: "europe", at: [41.3196, 28.4138], description: "Rural western district with villages and farmland.", commute: "2+ hours", transport: 3.5 }),
  s({ slug: "silivri", name: "Silivri", side: "europe", at: [41.1979, 28.1957], description: "Seaside town at the far western end of the province.", commute: "2+ hours", transport: 3.5 }),

  // ── Further out (Asian side) ──
  s({ slug: "umraniye", name: "Ümraniye", side: "asia", at: [41.0272, 29.1275], description: "Large residential and business district inland on the Asian side.", commute: "80–100 min" }),
  s({ slug: "maltepe", name: "Maltepe", side: "asia", at: [40.9439, 29.1591], description: "Coastal district with a long seaside park.", commute: "90–110 min" }),
  s({ slug: "kartal", name: "Kartal", side: "asia", at: [40.9156, 29.2032], description: "South-eastern coastal district on the M4 metro.", commute: "100–120 min" }),
  s({ slug: "pendik", name: "Pendik", side: "asia", at: [40.9573, 29.3549], description: "South-eastern district with Sabiha Gökçen Airport.", commute: "2 hours", landmarks: ["Sabiha Gökçen Airport"] }),
  s({ slug: "tuzla", name: "Tuzla", side: "asia", at: [40.8916, 29.3718], description: "Shipyards and Sabancı University's campus area at the province's south-east edge.", commute: "2+ hours" }),
  s({ slug: "sancaktepe", name: "Sancaktepe", side: "asia", at: [40.9994, 29.2256], description: "Growing residential district on the Asian side.", commute: "90–110 min" }),
  s({ slug: "sultanbeyli", name: "Sultanbeyli", side: "asia", at: [40.9682, 29.2698], description: "Residential district in the east.", commute: "100–120 min" }),
  s({ slug: "cekmekoy", name: "Çekmeköy", side: "asia", at: [41.0729, 29.295], description: "Green suburb with forests at the edge of the Asian side.", commute: "90–110 min" }),
  s({ slug: "sile", name: "Şile", side: "asia", at: [41.0892, 29.6415], description: "Black Sea resort town and villages at the eastern tip of the province.", commute: "2+ hours", transport: 3.0 }),
  s({ slug: "adalar", name: "Adalar", side: "asia", at: [40.8763, 29.091], description: "The car-free Princes' Islands, reached by ferry.", commute: "2+ hours", transport: 4.0, safety: 9.0, landmarks: ["Büyükada"] }),
];

export type IstanbulListing = Listing & { districtSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const istanbulListings: IstanbulListing[] = [
  { id: "is-sample-sariyer-room", districtSlug: "sariyer", title: "Room in Sarıyer centre", rent: 28000, currency: "TL ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.1665, lng: 29.0505, description: "Furnished room in a shared flat near the Sarıyer bus station, with buses towards Rumelifeneri.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Wifi included"] },
  { id: "is-sample-maslak-studio", districtSlug: "sariyer", title: "Studio in a Maslak residence", rent: 45000, currency: "TL ", type: "Studio", source: SAMPLE_SOURCE, lat: 41.1100, lng: 29.0200, description: "Furnished studio in a serviced residence near the M2 metro.", rooms: 1, sizeSqm: 35, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Gym", "Security"], riskNote: "Higher caution" },
  { id: "is-sample-besiktas-room", districtSlug: "besiktas", title: "Room near Beşiktaş square", rent: 32000, currency: "TL ", type: "Room", source: SAMPLE_SOURCE, lat: 41.0440, lng: 29.0060, description: "Room in a student flat close to ferries and buses.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished"] },
  { id: "is-sample-sisli-room", districtSlug: "sisli", title: "Room in Mecidiyeköy", rent: 27000, currency: "TL ", type: "Room", source: SAMPLE_SOURCE, lat: 41.0670, lng: 28.9960, description: "Room on the M2 metro line with direct trains to Hacıosman.", rooms: 1, sizeSqm: 11, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "is-sample-kadikoy-room", districtSlug: "kadikoy", title: "Room in Moda", rent: 30000, currency: "TL ", type: "Room", source: SAMPLE_SOURCE, lat: 40.9840, lng: 29.0260, description: "Room in a shared flat near Moda's cafés.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Balcony"] },
];

export function getIstanbulDistrictBySlug(slug: string): IstanbulDistrict | undefined {
  return istanbulDistricts.find((x) => x.slug === slug);
}

export function getIstanbulListingsForDistrict(slug: string | null): IstanbulListing[] {
  if (!slug) return [];
  return istanbulListings.filter((l) => l.districtSlug === slug);
}
