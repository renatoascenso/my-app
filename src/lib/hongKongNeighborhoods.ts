import type { Listing } from "./listings";

// Hong Kong's 18 districts. Boundaries: Home Affairs Department, Hong Kong administrative boundaries (18 districts),
// via DATA.GOV.HK — credited in HongKongExplorer. HKUST (Clear Water Bay campus, home of CEMS) is in Sai Kung district.
// Commute times refer to HKUST. Rents are estimated monthly ranges for a room (HKD); scores are editorial judgments.

export type HongKongDistrict = {
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

type Region = "nt-east" | "kowloon" | "island" | "nt";
const BADGES: Record<Region, string> = {
  "nt-east": "Near HKUST",
  kowloon: "Kowloon",
  island: "Hong Kong Island",
  nt: "New Territories",
};

type Entry = Omit<HongKongDistrict, "badge" | "lat" | "lng"> & { region: Region; at: [number, number] };
const s = ({ region, at, ...rest }: Entry): HongKongDistrict => ({ ...rest, badge: BADGES[region], lat: at[0], lng: at[1] });

export const hongKongDistricts: HongKongDistrict[] = [
  s({ slug: "sai-kung", name: "Sai Kung", region: "nt-east", at: [22.3156, 114.2645],
    description: "HKUST's Clear Water Bay campus, the new towns of Tseung Kwan O and Hang Hau where many students rent, and the beaches and country parks of the Sai Kung peninsula.",
    rent: "HK$5,000–7,500/mo", safety: 9.0, transport: 7.8, nightlife: 3.5, studentFit: 9.2,
    commute: "HKUST on site; 10–15 min by minibus from Hang Hau", bestFor: "HKUST students who want to live on or near campus", caution: "Off-campus rooms near Hang Hau go fast before September",
    landmarks: ["HKUST (Clear Water Bay)", "Hang Hau", "Tseung Kwan O", "Sai Kung Town"] }),
  s({ slug: "kwun-tong", name: "Kwun Tong", region: "kowloon", at: [22.3122, 114.2263],
    description: "East Kowloon's business hub with the Kwun Tong MTR line, malls like APM and big public housing estates; buses run to HKUST.",
    rent: "HK$5,000–7,500/mo", safety: 8.4, transport: 8.8, nightlife: 5.0, studentFit: 7.8,
    commute: "25–35 min by bus or MTR + minibus", bestFor: "City life with a manageable commute", caution: "Dense and busy",
    landmarks: ["Kwun Tong MTR", "APM"] }),
  s({ slug: "wong-tai-sin", name: "Wong Tai Sin", region: "kowloon", at: [22.3445, 114.202],
    description: "Residential Kowloon district around the Wong Tai Sin Temple, Diamond Hill and Choi Hung — a major bus and minibus hub for HKUST.",
    rent: "HK$4,500–7,000/mo", safety: 8.6, transport: 8.8, nightlife: 3.5, studentFit: 7.8,
    commute: "20–30 min by bus from Choi Hung", bestFor: "Short bus rides to HKUST at lower rents", caution: "Mostly public housing; fewer private rooms",
    landmarks: ["Wong Tai Sin Temple", "Choi Hung", "Diamond Hill"] }),
  s({ slug: "kowloon-city", name: "Kowloon City", region: "kowloon", at: [22.3216, 114.1887],
    description: "Kowloon Tong's villas and schools, Kai Tak's new development and the food streets of Kowloon City.",
    rent: "HK$5,500–8,500/mo", safety: 8.8, transport: 8.4, nightlife: 5.0, studentFit: 7.2,
    commute: "30–40 min by MTR and bus", bestFor: "Quieter, leafy streets in Kowloon", caution: "Pricier in Kowloon Tong",
    landmarks: ["Kowloon Tong", "Kai Tak"] }),
  s({ slug: "yau-tsim-mong", name: "Yau Tsim Mong", region: "kowloon", at: [22.3074, 114.1655],
    description: "Tsim Sha Tsui, Jordan, Yau Ma Tei and Mong Kok — Hong Kong's most crowded shopping and nightlife streets.",
    rent: "HK$5,500–9,000/mo", safety: 7.8, transport: 9.6, nightlife: 9.2, studentFit: 7.4,
    commute: "35–45 min by MTR and minibus", bestFor: "Nightlife, shopping and street food", caution: "Many cramped subdivided flats; noisy",
    landmarks: ["Tsim Sha Tsui", "Mong Kok", "Temple Street"] }),
  s({ slug: "sham-shui-po", name: "Sham Shui Po", region: "kowloon", at: [22.3313, 114.1593],
    description: "Old working-class Kowloon with electronics and fabric markets, cheap eats and older tenement buildings.",
    rent: "HK$4,500–7,000/mo", safety: 7.6, transport: 9.0, nightlife: 6.0, studentFit: 6.8,
    commute: "40–50 min by MTR and minibus", bestFor: "Low prices and local street life", caution: "Many subdivided units in poor condition",
    landmarks: ["Sham Shui Po markets"] }),
  s({ slug: "central-and-western", name: "Central and Western", region: "island", at: [22.2748, 114.1487],
    description: "Central's financial district, SoHo and Lan Kwai Fong's bars, the Peak and HKU's campus in Pok Fu Lam.",
    rent: "HK$8,000–13,000/mo", safety: 9.0, transport: 9.4, nightlife: 9.4, studentFit: 6.4,
    commute: "45–60 min by MTR and minibus", bestFor: "Nightlife and HKU", caution: "Very expensive and far from HKUST",
    landmarks: ["Central", "Lan Kwai Fong", "The University of Hong Kong"] }),
  s({ slug: "wan-chai", name: "Wan Chai", region: "island", at: [22.2739, 114.1817],
    description: "Causeway Bay's malls, Wan Chai's bars and Happy Valley's racecourse.",
    rent: "HK$7,500–12,000/mo", safety: 8.8, transport: 9.4, nightlife: 8.8, studentFit: 6.2,
    commute: "45–55 min by MTR and minibus", bestFor: "Central island living", caution: "Expensive", landmarks: ["Causeway Bay", "Happy Valley"] }),
  s({ slug: "eastern", name: "Eastern", region: "island", at: [22.2717, 114.234],
    description: "North Point, Quarry Bay and Chai Wan on the island's east side, linked to Tseung Kwan O by the MTR.",
    rent: "HK$6,000–9,000/mo", safety: 8.8, transport: 9.0, nightlife: 5.0, studentFit: 7.0,
    commute: "35–45 min by MTR via Tseung Kwan O", bestFor: "Island living with a cross-harbour link to HKUST", caution: "Long-ish commute",
    landmarks: ["Quarry Bay", "North Point"] }),
  s({ slug: "southern", name: "Southern", region: "island", at: [22.2193, 114.2252],
    description: "Aberdeen, Repulse Bay and Stanley on the island's beach-lined south side.",
    rent: "HK$7,000–12,000/mo", safety: 9.2, transport: 7.0, nightlife: 3.5, studentFit: 5.2,
    commute: "60+ min", bestFor: "Beaches", caution: "Far from HKUST", landmarks: ["Repulse Bay", "Stanley"] }),
  s({ slug: "sha-tin", name: "Sha Tin", region: "nt", at: [22.3817, 114.1888],
    description: "Large new town along the Shing Mun River with CUHK's campus, malls and the East Rail line.",
    rent: "HK$5,000–7,500/mo", safety: 9.0, transport: 8.6, nightlife: 3.5, studentFit: 7.4,
    commute: "35–45 min by MTR and bus", bestFor: "Green new-town living", caution: "Indirect route to HKUST", landmarks: ["CUHK", "New Town Plaza"] }),
  s({ slug: "tai-po", name: "Tai Po", region: "nt", at: [22.4500, 114.1700],
    description: "Northern market town with country parks and the Tolo Harbour.",
    rent: "HK$4,500–6,500/mo", safety: 9.0, transport: 7.6, nightlife: 2.0, studentFit: 5.6,
    commute: "50–60 min", bestFor: "Countryside feel at lower rents", caution: "Long commute", landmarks: ["Tai Po Market"] }),
  s({ slug: "north", name: "North", region: "nt", at: [22.5000, 114.1300],
    description: "Sheung Shui and Fanling near the border with Shenzhen.",
    rent: "HK$4,000–6,000/mo", safety: 8.8, transport: 7.4, nightlife: 2.0, studentFit: 4.8,
    commute: "60–75 min", bestFor: "Cheap rooms near the border", caution: "Very long commute", landmarks: ["Sheung Shui"] }),
  s({ slug: "kwai-tsing", name: "Kwai Tsing", region: "nt", at: [22.3570, 114.1290],
    description: "Container port and dense housing estates in Kwai Chung and Tsing Yi.",
    rent: "HK$4,500–6,500/mo", safety: 8.6, transport: 8.4, nightlife: 2.5, studentFit: 5.6,
    commute: "50–60 min", bestFor: "Lower rents on the MTR", caution: "Industrial port areas", landmarks: ["Tsing Yi"] }),
  s({ slug: "tsuen-wan", name: "Tsuen Wan", region: "nt", at: [22.3712, 114.1135],
    description: "Western new town at the end of the Tsuen Wan MTR line.",
    rent: "HK$4,500–7,000/mo", safety: 8.8, transport: 8.4, nightlife: 3.5, studentFit: 5.4,
    commute: "55–65 min", bestFor: "Malls and lower rents", caution: "Far from HKUST", landmarks: ["Tsuen Wan MTR"] }),
  s({ slug: "tuen-mun", name: "Tuen Mun", region: "nt", at: [22.3920, 113.9750],
    description: "North-western new town with Lingnan University.",
    rent: "HK$4,000–6,000/mo", safety: 8.6, transport: 7.4, nightlife: 2.5, studentFit: 4.6,
    commute: "75–90 min", bestFor: "Lingnan University students", caution: "Very long commute to HKUST", landmarks: ["Lingnan University"] }),
  s({ slug: "yuen-long", name: "Yuen Long", region: "nt", at: [22.4450, 114.0250],
    description: "North-western town with wetlands and village houses.",
    rent: "HK$4,000–6,000/mo", safety: 8.6, transport: 7.4, nightlife: 2.5, studentFit: 4.4,
    commute: "75–90 min", bestFor: "Village houses and space", caution: "Very long commute", landmarks: ["Yuen Long Town"] }),
  s({ slug: "islands", name: "Islands", region: "nt", at: [22.2900, 113.9420],
    description: "Lantau, Lamma and Cheung Chau, plus Tung Chung and the airport.",
    rent: "HK$4,500–7,000/mo", safety: 9.2, transport: 6.2, nightlife: 2.0, studentFit: 4.2,
    commute: "75+ min", bestFor: "Island life", caution: "Ferries or long MTR rides", landmarks: ["Tung Chung", "Hong Kong International Airport"] }),
];

export type HongKongListing = Listing & { districtSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const hongKongListings: HongKongListing[] = [
  { id: "hk-sample-hanghau-room", districtSlug: "sai-kung", title: "Single room near Hang Hau MTR", rent: 7200, currency: "HK$", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 22.3160, lng: 114.2650, description: "Furnished single room in a shared flat, a short minibus ride to HKUST.", rooms: 1, sizeSqm: 8, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Air conditioning", "Wifi included"] },
  { id: "hk-sample-tko-shared", districtSlug: "sai-kung", title: "Shared room in Tseung Kwan O", rent: 5200, currency: "HK$", type: "Shared room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 22.3075, lng: 114.2595, description: "Bed in a twin room in a serviced student apartment near Tseung Kwan O MTR.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Utilities included", "Cleaning"] },
  { id: "hk-sample-clearwater-room", districtSlug: "sai-kung", title: "Room in a village house near Clear Water Bay", rent: 6500, currency: "HK$", type: "Room", source: SAMPLE_SOURCE, lat: 22.3300, lng: 114.2700, description: "Room in a shared village house, 10 minutes by bus to HKUST.", rooms: 1, sizeSqm: 11, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Roof terrace"] },
  { id: "hk-sample-choihung-room", districtSlug: "wong-tai-sin", title: "Room near Choi Hung", rent: 6000, currency: "HK$", type: "Room", source: SAMPLE_SOURCE, lat: 22.3350, lng: 114.2085, description: "Room in a private flat next to the bus and minibus stops for HKUST.", rooms: 1, sizeSqm: 8, availableFrom: "1 Feb 2027", amenities: ["Air conditioning"] },
  { id: "hk-sample-kwuntong-room", districtSlug: "kwun-tong", title: "Room in Kwun Tong", rent: 6200, currency: "HK$", type: "Room", source: SAMPLE_SOURCE, lat: 22.3125, lng: 114.2250, description: "Room in a shared flat near APM and the MTR.", rooms: 1, sizeSqm: 8, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Air conditioning"] },
  { id: "hk-sample-mongkok-studio", districtSlug: "yau-tsim-mong", title: "Small studio in Mong Kok", rent: 9500, currency: "HK$", type: "Studio", source: SAMPLE_SOURCE, lat: 22.3195, lng: 114.1690, description: "Compact studio in an older building with lift access.", rooms: 1, sizeSqm: 18, availableFrom: "1 Mar 2027", amenities: ["Air conditioning", "Private bathroom"], riskNote: "Higher caution" },
];

export function getHongKongDistrictBySlug(slug: string): HongKongDistrict | undefined {
  return hongKongDistricts.find((x) => x.slug === slug);
}

export function getHongKongListingsForDistrict(slug: string | null): HongKongListing[] {
  if (!slug) return [];
  return hongKongListings.filter((l) => l.districtSlug === slug);
}
