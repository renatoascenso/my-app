import type { Listing } from "./listings";

// Budapest's 23 districts (kerületek, I–XXIII).
// Boundaries: © OpenStreetMap contributors (ODbL), credited in BudapestExplorer — no openly
// licensed official district layer was available. Room prices are estimated ranges; scores are
// editorial judgments.

export type BudapestKerulet = {
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

type Base = Omit<BudapestKerulet, "slug" | "badge" | "lat" | "lng"> & {
  roman: string;
  side: "Buda" | "Pest";
  at: [number, number];
};
const k = ({ roman, side, at, ...rest }: Base): BudapestKerulet => ({
  ...rest,
  slug: `district-${roman.toLowerCase()}`,
  badge: `District ${roman} · ${side}`,
  lat: at[0],
  lng: at[1],
});

export const budapestKeruletek: BudapestKerulet[] = [
  k({ roman: "I", side: "Buda", name: "Várkerület", at: [47.49696, 19.03577],
    description: "Castle Hill with Buda Castle, the Fisherman's Bastion and the Víziváros quarter below it on the Danube.",
    rent: "HUF 150,000–200,000/mo", safety: 9.0, transport: 8.4, nightlife: 5.5, studentFit: 6.8,
    commute: "10–15 min to the center", bestFor: "Historic charm and views", caution: "Touristy and pricey; few student rooms",
    landmarks: ["Buda Castle"] }),
  k({ roman: "II", side: "Buda", name: "Rózsadomb & Pasarét", at: [47.54216, 18.97958],
    description: "Leafy, well-off hills of Buda with villas, parks and forests, plus the busy Széll Kálmán tér transport hub nearby.",
    rent: "HUF 150,000–210,000/mo", safety: 9.0, transport: 7.8, nightlife: 4.5, studentFit: 6.8,
    commute: "15–30 min to the center", bestFor: "Green, calm and safe streets", caution: "Hilly and among the most expensive areas",
    landmarks: [] }),
  k({ roman: "III", side: "Buda", name: "Óbuda-Békásmegyer", at: [47.56995, 19.03355],
    description: "Historic Óbuda with its Roman ruins and main square, Óbuda University, and large housing estates further north along the HÉV suburban rail.",
    rent: "HUF 110,000–150,000/mo", safety: 8.4, transport: 7.6, nightlife: 5.0, studentFit: 7.4,
    commute: "Óbuda University on site; 15–25 min to the center", bestFor: "Óbuda University students and Danube-side living", caution: "Northern estates are far from the center",
    landmarks: ["Óbuda University", "Óbuda main square"] }),
  k({ roman: "IV", side: "Pest", name: "Újpest", at: [47.57962, 19.0958],
    description: "A former separate town in the north of Pest, at the end of metro line M3.",
    rent: "HUF 90,000–130,000/mo", safety: 7.6, transport: 8.0, nightlife: 4.0, studentFit: 6.8,
    commute: "20–25 min to the center on M3", bestFor: "Lower rents with a direct metro", caution: "Far from campus life",
    landmarks: [] }),
  k({ roman: "V", side: "Pest", name: "Belváros-Lipótváros", at: [47.50036, 19.05067],
    description: "Downtown Pest: the Parliament, Deák tér, Váci utca and the Danube promenade, plus Central European University.",
    rent: "HUF 160,000–220,000/mo", safety: 8.6, transport: 10, nightlife: 8.6, studentFit: 7.6,
    commute: "CEU on site; 5–10 min to most central campuses", bestFor: "Living in the very center", caution: "Budapest's most expensive district; tourist crowds",
    landmarks: ["Parliament", "Deák tér", "Central European University"] }),
  k({ roman: "VI", side: "Pest", name: "Terézváros", at: [47.50954, 19.06527],
    description: "Andrássy Avenue with the Opera, the Liszt Academy and lively streets around Liszt Ferenc tér, between downtown and the City Park.",
    rent: "HUF 140,000–190,000/mo", safety: 8.2, transport: 9.6, nightlife: 9.0, studentFit: 8.6,
    commute: "5–15 min to the central campuses", bestFor: "Central, lively living", caution: "Noise around the nightlife streets",
    landmarks: ["Andrássy Avenue and the Opera", "Liszt Academy"] }),
  k({ roman: "VII", side: "Pest", name: "Erzsébetváros", at: [47.50236, 19.0735],
    description: "The old Jewish Quarter and Budapest's nightlife heart, home to the famous ruin bars like Szimpla Kert.",
    rent: "HUF 130,000–180,000/mo", safety: 7.6, transport: 9.4, nightlife: 9.8, studentFit: 8.8,
    commute: "5–15 min to the central campuses", bestFor: "Nightlife and a central location", caution: "Very loud at night; party tourism",
    landmarks: ["Szimpla Kert and the ruin bars"] }),
  k({ roman: "VIII", side: "Pest", name: "Józsefváros", at: [47.49059, 19.08829],
    description: "From the elegant Palace Quarter to the modern Corvin Quarter, with Semmelweis University's campus along Üllői út and Keleti station.",
    rent: "HUF 110,000–160,000/mo", safety: 7.0, transport: 9.2, nightlife: 7.4, studentFit: 9.0,
    commute: "Semmelweis University nearby; 10 min to the center", bestFor: "Medical students and good value near the center", caution: "Some streets further out feel unsafe at night",
    landmarks: ["Corvin Quarter", "Keleti station", "Rákóczi tér"] }),
  k({ roman: "IX", side: "Pest", name: "Ferencváros", at: [47.46534, 19.09036],
    description: "Corvinus University at the Central Market Hall, the café-lined Ráday utca, Semmelweis University's buildings and newer riverside developments.",
    rent: "HUF 120,000–170,000/mo", safety: 8.0, transport: 9.0, nightlife: 7.8, studentFit: 9.2,
    commute: "Corvinus on site; 5–15 min to the center", bestFor: "Corvinus and Semmelweis students", caution: "Outer parts are industrial",
    landmarks: ["Corvinus University", "Ráday utca", "Groupama Aréna"] }),
  k({ roman: "X", side: "Pest", name: "Kőbánya", at: [47.48336, 19.15862],
    description: "An eastern district of former industry and housing estates, with lower rents.",
    rent: "HUF 90,000–120,000/mo", safety: 7.2, transport: 7.4, nightlife: 3.5, studentFit: 6.4,
    commute: "20–30 min to the center", bestFor: "Low rents", caution: "Far from campuses and nightlife",
    landmarks: [] }),
  k({ roman: "XI", side: "Buda", name: "Újbuda", at: [47.46027, 19.01888],
    description: "Budapest's university district on the Buda side: BME (Budapest University of Technology and Economics), ELTE's Lágymányos campus, and the student life of Bartók Béla út, with metro M4.",
    rent: "HUF 120,000–170,000/mo", safety: 8.6, transport: 9.0, nightlife: 7.4, studentFit: 9.6,
    commute: "BME and ELTE Lágymányos on site; 10–15 min to the center", bestFor: "BME and ELTE science students", caution: "High demand before each semester",
    landmarks: ["BME (Budapest University of Technology and Economics)", "ELTE Lágymányos campus", "Gellért"] }),
  k({ roman: "XII", side: "Buda", name: "Hegyvidék", at: [47.50131, 18.97745],
    description: "The green Buda Hills: villas, forests and lookout towers, a calm residential area west of the center.",
    rent: "HUF 150,000–200,000/mo", safety: 9.2, transport: 7.0, nightlife: 3.5, studentFit: 6.2,
    commute: "20–35 min to the center", bestFor: "Nature and quiet", caution: "Hilly, far from nightlife, expensive",
    landmarks: [] }),
  k({ roman: "XIII", side: "Pest", name: "Angyalföld & Újlipótváros", at: [47.53673, 19.07173],
    description: "Újlipótváros' Bauhaus streets and cafés by the Danube, plus the business area around Váci út and residential Angyalföld on metro M3.",
    rent: "HUF 120,000–170,000/mo", safety: 8.6, transport: 9.0, nightlife: 6.5, studentFit: 8.0,
    commute: "10–20 min to the center", bestFor: "Pleasant, central-feeling living", caution: "Busy around Váci út",
    landmarks: ["Újlipótváros"] }),
  k({ roman: "XIV", side: "Pest", name: "Zugló", at: [47.51811, 19.11367],
    description: "Heroes' Square and the City Park with the Széchenyi baths, plus residential streets home to Budapest Metropolitan University.",
    rent: "HUF 110,000–150,000/mo", safety: 8.4, transport: 8.0, nightlife: 5.0, studentFit: 7.8,
    commute: "METU on site; 15–20 min to the center", bestFor: "Parks and value", caution: "Further from the river and nightlife",
    landmarks: ["Heroes' Square", "Budapest Metropolitan University"] }),
  k({ roman: "XV", side: "Pest", name: "Rákospalota & Újpalota", at: [47.55894, 19.13818],
    description: "North-eastern residential areas of houses and housing estates.",
    rent: "HUF 85,000–115,000/mo", safety: 7.6, transport: 6.8, nightlife: 2.5, studentFit: 5.6,
    commute: "30–40 min to the center", bestFor: "Low rents", caution: "No metro; long bus rides",
    landmarks: [] }),
  k({ roman: "XVI", side: "Pest", name: "Mátyásföld & Sashalom", at: [47.51832, 19.20405],
    description: "A garden-city district of family houses on the eastern edge, linked by the HÉV.",
    rent: "HUF 85,000–115,000/mo", safety: 8.6, transport: 6.0, nightlife: 2.0, studentFit: 5.0,
    commute: "35–45 min to the center", bestFor: "Suburban calm", caution: "Very far from campuses",
    landmarks: [] }),
  k({ roman: "XVII", side: "Pest", name: "Rákosmente", at: [47.47572, 19.26924],
    description: "Budapest's largest district by area, a suburban patchwork of former villages in the far east.",
    rent: "HUF 80,000–110,000/mo", safety: 8.4, transport: 5.6, nightlife: 2.0, studentFit: 4.6,
    commute: "40–50 min to the center", bestFor: "Space and quiet", caution: "Very far from student life",
    landmarks: [] }),
  k({ roman: "XVIII", side: "Pest", name: "Pestszentlőrinc-Pestszentimre", at: [47.43023, 19.20174],
    description: "South-eastern suburbs around Liszt Ferenc International Airport.",
    rent: "HUF 85,000–115,000/mo", safety: 8.2, transport: 6.0, nightlife: 2.0, studentFit: 5.0,
    commute: "35–45 min to the center", bestFor: "Low rents near the airport", caution: "Aircraft noise; far from campuses",
    landmarks: ["Budapest Liszt Ferenc Airport"] }),
  k({ roman: "XIX", side: "Pest", name: "Kispest", at: [47.44929, 19.14396],
    description: "A southern district with the Wekerle garden estate, close to the Kőbánya-Kispest metro terminus (M3).",
    rent: "HUF 90,000–120,000/mo", safety: 7.6, transport: 7.6, nightlife: 3.0, studentFit: 6.2,
    commute: "20–25 min to the center on M3", bestFor: "Affordable rooms with a metro", caution: "Little nightlife",
    landmarks: [] }),
  k({ roman: "XX", side: "Pest", name: "Pesterzsébet", at: [47.43334, 19.12085],
    description: "A southern residential district of small houses and estates.",
    rent: "HUF 85,000–115,000/mo", safety: 7.6, transport: 6.6, nightlife: 2.5, studentFit: 5.6,
    commute: "30–35 min to the center", bestFor: "Low rents", caution: "No metro",
    landmarks: [] }),
  k({ roman: "XXI", side: "Pest", name: "Csepel", at: [47.41961, 19.06864],
    description: "The northern tip of Csepel Island: former industrial town with housing estates and a HÉV line.",
    rent: "HUF 80,000–110,000/mo", safety: 7.2, transport: 6.6, nightlife: 2.5, studentFit: 5.4,
    commute: "30–40 min to the center", bestFor: "Low rents", caution: "Far from campus life",
    landmarks: [] }),
  k({ roman: "XXII", side: "Buda", name: "Budafok-Tétény", at: [47.41017, 18.99956],
    description: "Buda's southern edge, known for its wine cellars along the Danube.",
    rent: "HUF 85,000–115,000/mo", safety: 8.4, transport: 6.4, nightlife: 2.5, studentFit: 5.4,
    commute: "35–45 min to the center", bestFor: "Quiet suburban living", caution: "Long commute",
    landmarks: [] }),
  k({ roman: "XXIII", side: "Pest", name: "Soroksár", at: [47.38934, 19.14416],
    description: "Budapest's southernmost and least populated district, semi-rural along the Danube.",
    rent: "HUF 75,000–100,000/mo", safety: 8.2, transport: 5.8, nightlife: 1.5, studentFit: 4.4,
    commute: "40–50 min to the center", bestFor: "The lowest rents", caution: "Very far from everything students need",
    landmarks: [] }),
];

export type BudapestKeruletListing = Listing & { keruletSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const budapestListings: BudapestKeruletListing[] = [
  { id: "bp-sample-corvin-room", keruletSlug: "district-viii", title: "Room near Semmelweis", rent: 140000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 47.4880, lng: 19.0700, description: "Room in a shared flat near the Corvin Quarter, a short walk to Semmelweis University.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Address registration possible"] },
  { id: "bp-sample-ruinbar-room", keruletSlug: "district-vii", title: "Room in the Jewish Quarter", rent: 155000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, lat: 47.4970, lng: 19.0640, description: "Room in a high-ceilinged flat close to the ruin bars.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"], riskNote: "Higher caution" },
  { id: "bp-sample-raday-room", keruletSlug: "district-ix", title: "Room near Corvinus", rent: 145000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 47.4870, lng: 19.0630, description: "Room near Ráday utca, a 5-minute walk to Corvinus University.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "bp-sample-bme-room", keruletSlug: "district-xi", title: "Room near BME", rent: 140000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, lat: 47.4780, lng: 19.0500, description: "Room in a shared flat near BME and the M4 at Bartók Béla út.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "bp-sample-andrassy-room", keruletSlug: "district-vi", title: "Room off Andrássy Avenue", rent: 165000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, lat: 47.5040, lng: 19.0620, description: "Room in a classic apartment near the Opera and the Liszt Academy.", rooms: 1, sizeSqm: 15, availableFrom: "1 Oct 2026", amenities: ["Furnished"] },
  { id: "bp-sample-ujlipot-room", keruletSlug: "district-xiii", title: "Room in Újlipótváros", rent: 145000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, lat: 47.5200, lng: 19.0560, description: "Bright room in a Bauhaus building close to the Danube.", rooms: 1, sizeSqm: 14, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "bp-sample-downtown-studio", keruletSlug: "district-v", title: "Studio downtown", rent: 260000, currency: "HUF ", type: "Studio", source: SAMPLE_SOURCE, lat: 47.4990, lng: 19.0500, description: "Small furnished studio near Deák tér.", rooms: 1, sizeSqm: 26, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "bp-sample-zuglo-room", keruletSlug: "district-xiv", title: "Room near METU", rent: 120000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, lat: 47.5150, lng: 19.1220, description: "Room in a quiet flat near Budapest Metropolitan University.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "bp-sample-obuda-room", keruletSlug: "district-iii", title: "Room in Óbuda", rent: 125000, currency: "HUF ", type: "Room", source: SAMPLE_SOURCE, lat: 47.5380, lng: 19.0420, description: "Room near Óbuda's main square and the HÉV.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished"] },
];

export function getBudapestKeruletBySlug(slug: string): BudapestKerulet | undefined {
  return budapestKeruletek.find((x) => x.slug === slug);
}

export function getBudapestListingsForKerulet(slug: string | null): BudapestKeruletListing[] {
  if (!slug) return [];
  return budapestListings.filter((l) => l.keruletSlug === slug);
}
