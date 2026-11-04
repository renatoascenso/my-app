import type { Listing } from "./listings";

// Tokyo's 23 special wards. Boundaries: © OpenStreetMap contributors (ODbL), credited in TokyoExplorer.
// Keio's CEMS courses run on the Mita campus (Minato ward) and the Hiyoshi campus (Kohoku, Yokohama — outside this map).
// Commute times refer to Keio Mita. Rents are estimated monthly ranges for a share-house room or small 1K flat (JPY);
// scores are editorial judgments.

export type TokyoWard = {
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

type Zone = "central" | "west" | "east";
const BADGES: Record<Zone, string> = { central: "Central Tokyo", west: "West Tokyo", east: "East Tokyo" };
type Entry = Omit<TokyoWard, "badge" | "lat" | "lng"> & { zone: Zone; at: [number, number] };
const s = ({ zone, at, ...rest }: Entry): TokyoWard => ({ ...rest, badge: BADGES[zone], lat: at[0], lng: at[1] });

export const tokyoWards: TokyoWard[] = [
  s({ slug: "minato", name: "Minato", zone: "central", at: [35.6491, 139.7425],
    description: "Keio's Mita campus, Keio's Takanawa international dormitory, Tamachi and Shirokane, plus Roppongi's nightlife and the Tokyo Tower area.",
    rent: "¥85,000–150,000/mo", safety: 9.4, transport: 9.8, nightlife: 9.0, studentFit: 9.0,
    commute: "Keio Mita on site; Tamachi and Mita stations a short walk away", bestFor: "Keio students who want to walk to class", caution: "Tokyo's most expensive ward",
    landmarks: ["Keio University (Mita campus)", "Tamachi station", "Roppongi", "Tokyo Tower"] }),
  s({ slug: "shinagawa", name: "Shinagawa", zone: "central", at: [35.6133, 139.7325],
    description: "Gotanda, Osaki and Togoshi-Ginza's long shopping street, a short train ride south of Mita — and Meguro station, which sits in this ward.",
    rent: "¥70,000–110,000/mo", safety: 9.2, transport: 9.4, nightlife: 6.5, studentFit: 8.4,
    commute: "10–20 min by train", bestFor: "Good value close to Mita", caution: "Busy around the big stations",
    landmarks: ["Gotanda", "Togoshi-Ginza", "Meguro station"] }),
  s({ slug: "meguro", name: "Meguro", zone: "west", at: [35.6324, 139.6987],
    description: "Nakameguro's riverside cafés, Jiyugaoka's boutiques and the Tokyu Toyoko line, which runs straight to Keio's Hiyoshi campus.",
    rent: "¥75,000–120,000/mo", safety: 9.4, transport: 9.0, nightlife: 7.0, studentFit: 8.6,
    commute: "20–25 min to Mita; 15–20 min to Hiyoshi on the Toyoko line", bestFor: "Students splitting time between Mita and Hiyoshi", caution: "Popular and pricey",
    landmarks: ["Nakameguro", "Jiyugaoka"] }),
  s({ slug: "shibuya", name: "Shibuya", zone: "west", at: [35.658, 139.7016],
    description: "Shibuya Crossing, Harajuku, Ebisu and Yoyogi Park — youth culture and nightlife, and the start of the Toyoko line to Hiyoshi.",
    rent: "¥85,000–140,000/mo", safety: 9.0, transport: 9.8, nightlife: 9.6, studentFit: 8.0,
    commute: "20–25 min by train", bestFor: "Nightlife and fashion", caution: "Expensive and crowded",
    landmarks: ["Shibuya Crossing", "Harajuku", "Ebisu", "Yoyogi Park"] }),
  s({ slug: "ota", name: "Ota", zone: "west", at: [35.5626, 139.7161],
    description: "Southern ward with Kamata, Omori, leafy Den-en-chofu and Haneda Airport; Keio runs a residence in the Omori area.",
    rent: "¥60,000–90,000/mo", safety: 9.0, transport: 8.6, nightlife: 5.0, studentFit: 7.6,
    commute: "20–30 min by train; Den-en-chofu is close to Hiyoshi", bestFor: "Lower rents with fast trains to Mita", caution: "Spread out; check your line",
    landmarks: ["Kamata", "Den-en-chofu", "Haneda Airport"] }),
  s({ slug: "setagaya", name: "Setagaya", zone: "west", at: [35.6436, 139.6713],
    description: "Tokyo's most populous ward: Shimokitazawa's vintage shops and live houses, Sangenjaya and quiet residential streets.",
    rent: "¥65,000–100,000/mo", safety: 9.4, transport: 8.4, nightlife: 7.0, studentFit: 8.0,
    commute: "30–40 min by train", bestFor: "Bohemian Shimokitazawa and calm streets", caution: "Long rides to Mita from the west of the ward",
    landmarks: ["Shimokitazawa", "Sangenjaya"] }),
  s({ slug: "chuo", name: "Chuo", zone: "central", at: [35.6684, 139.7734],
    description: "Ginza, Nihonbashi and Tsukishima — shopping, business and high-rise living by the bay.",
    rent: "¥85,000–140,000/mo", safety: 9.4, transport: 9.6, nightlife: 7.0, studentFit: 6.8,
    commute: "15–20 min by subway", bestFor: "Central living", caution: "Expensive", landmarks: ["Ginza", "Nihonbashi", "Tsukishima"] }),
  s({ slug: "chiyoda", name: "Chiyoda", zone: "central", at: [35.6812, 139.7671],
    description: "The Imperial Palace, Tokyo Station, Marunouchi and Akihabara's electronics town.",
    rent: "¥90,000–150,000/mo", safety: 9.4, transport: 9.8, nightlife: 6.0, studentFit: 6.4,
    commute: "15–20 min by subway", bestFor: "Central location", caution: "Very few affordable rooms", landmarks: ["Tokyo station", "Imperial Palace", "Akihabara"] }),
  s({ slug: "shinjuku", name: "Shinjuku", zone: "central", at: [35.6896, 139.7006],
    description: "Shinjuku station's skyscrapers, Kabukicho and Golden Gai's bars, plus Waseda University.",
    rent: "¥75,000–120,000/mo", safety: 8.6, transport: 9.8, nightlife: 9.6, studentFit: 7.8,
    commute: "25–30 min by train", bestFor: "Nightlife and transport", caution: "Kabukicho can feel rough at night", landmarks: ["Shinjuku station", "Golden Gai", "Waseda University"] }),
  s({ slug: "bunkyo", name: "Bunkyo", zone: "central", at: [35.7126, 139.762],
    description: "Tokyo's university ward with the University of Tokyo's Hongo campus, quiet streets and gardens.",
    rent: "¥70,000–110,000/mo", safety: 9.6, transport: 9.0, nightlife: 4.0, studentFit: 8.0,
    commute: "25–30 min by subway", bestFor: "Quiet, studious neighbourhoods", caution: "Little nightlife", landmarks: ["University of Tokyo (Hongo)", "Koishikawa Korakuen"] }),
  s({ slug: "koto", name: "Koto", zone: "east", at: [35.6551, 139.7963],
    description: "Toyosu's waterfront towers, Kiyosumi-Shirakawa's coffee shops and reclaimed islands in Tokyo Bay.",
    rent: "¥65,000–100,000/mo", safety: 9.2, transport: 8.6, nightlife: 5.0, studentFit: 7.2,
    commute: "25–35 min by train", bestFor: "New apartments by the bay", caution: "Some areas are far from stations", landmarks: ["Toyosu", "Kiyosumi-Shirakawa"] }),
  s({ slug: "taito", name: "Taito", zone: "east", at: [35.7148, 139.7967],
    description: "Old Tokyo around Asakusa, Ueno Park and Yanaka, with cheaper guesthouses and share houses.",
    rent: "¥60,000–95,000/mo", safety: 9.0, transport: 9.2, nightlife: 6.5, studentFit: 7.4,
    commute: "30 min by subway", bestFor: "Traditional Tokyo at fair prices", caution: "Touristy around Asakusa", landmarks: ["Asakusa", "Ueno Park"] }),
  s({ slug: "sumida", name: "Sumida", zone: "east", at: [35.7152, 139.8188],
    description: "Tokyo Skytree, Ryogoku's sumo stadium and old craftsmen's neighbourhoods.",
    rent: "¥60,000–90,000/mo", safety: 9.0, transport: 8.4, nightlife: 4.0, studentFit: 6.8,
    commute: "30–35 min by subway", bestFor: "Affordable east-side living", caution: "Longer commute", landmarks: ["Tokyo Skytree", "Ryogoku Kokugikan"] }),
  s({ slug: "toshima", name: "Toshima", zone: "central", at: [35.7295, 139.7109],
    description: "Ikebukuro's malls, anime shops and nightlife, plus Rikkyo University.",
    rent: "¥65,000–100,000/mo", safety: 8.8, transport: 9.4, nightlife: 8.0, studentFit: 7.6,
    commute: "30–35 min by train", bestFor: "Lively Ikebukuro", caution: "Far north of Mita", landmarks: ["Ikebukuro", "Rikkyo University"] }),
  s({ slug: "nakano", name: "Nakano", zone: "west", at: [35.7061, 139.6731],
    description: "Nakano Broadway's subculture shops and good-value housing just west of Shinjuku.",
    rent: "¥60,000–90,000/mo", safety: 9.2, transport: 8.8, nightlife: 6.5, studentFit: 7.6,
    commute: "35–40 min by train", bestFor: "Cheaper rooms near Shinjuku", caution: "Long commute to Mita", landmarks: ["Nakano Broadway"] }),
  s({ slug: "suginami", name: "Suginami", zone: "west", at: [35.6987, 139.6271],
    description: "Koenji and Asagaya's live music, second-hand shops and izakaya along the Chuo line.",
    rent: "¥55,000–85,000/mo", safety: 9.2, transport: 8.4, nightlife: 7.0, studentFit: 7.2,
    commute: "40–45 min by train", bestFor: "Alternative scene and low rents", caution: "Long commute", landmarks: ["Koenji", "Asagaya"] }),
  s({ slug: "kita", name: "Kita", zone: "east", at: [35.7652, 139.7343],
    description: "Akabane's cheap izakaya and residential north Tokyo.",
    rent: "¥55,000–85,000/mo", safety: 9.0, transport: 8.4, nightlife: 5.0, studentFit: 6.0,
    commute: "40–45 min by train", bestFor: "Low rents with fast trains", caution: "Far from Mita", landmarks: ["Akabane"] }),
  s({ slug: "arakawa", name: "Arakawa", zone: "east", at: [35.7397, 139.7823],
    description: "Quiet north-eastern ward served by the Toden Arakawa tram line.",
    rent: "¥55,000–80,000/mo", safety: 9.0, transport: 8.0, nightlife: 3.0, studentFit: 5.8,
    commute: "40–45 min by train", bestFor: "Old-town atmosphere at low rents", caution: "Long commute", landmarks: ["Nippori"] }),
  s({ slug: "itabashi", name: "Itabashi", zone: "west", at: [35.7683, 139.6846],
    description: "North-western residential ward with affordable apartments.",
    rent: "¥55,000–80,000/mo", safety: 9.0, transport: 8.0, nightlife: 3.0, studentFit: 5.6,
    commute: "45–50 min by train", bestFor: "Affordable flats", caution: "Long commute", landmarks: ["Itabashi"] }),
  s({ slug: "nerima", name: "Nerima", zone: "west", at: [35.7458, 139.6199],
    description: "Leafy north-western ward with houses, farms and anime studios.",
    rent: "¥55,000–80,000/mo", safety: 9.4, transport: 7.6, nightlife: 2.5, studentFit: 5.2,
    commute: "50–55 min by train", bestFor: "Space and calm", caution: "Long commute", landmarks: ["Nerima"] }),
  s({ slug: "adachi", name: "Adachi", zone: "east", at: [35.7779, 139.7949],
    description: "Large north-eastern residential ward with some of the lowest rents in the 23 wards.",
    rent: "¥50,000–75,000/mo", safety: 8.6, transport: 7.8, nightlife: 3.0, studentFit: 5.2,
    commute: "50–60 min by train", bestFor: "The lowest rents", caution: "Very long commute", landmarks: ["Kita-Senju"] }),
  s({ slug: "katsushika", name: "Katsushika", zone: "east", at: [35.7541, 139.8505],
    description: "Shibamata's old-Tokyo streets and quiet residential areas in the east.",
    rent: "¥50,000–75,000/mo", safety: 9.0, transport: 7.6, nightlife: 2.5, studentFit: 4.8,
    commute: "50–60 min by train", bestFor: "Traditional neighbourhoods", caution: "Very long commute", landmarks: ["Shibamata"] }),
  s({ slug: "edogawa", name: "Edogawa", zone: "east", at: [35.6414, 139.8611],
    description: "Eastern ward with Kasai's seaside park and a large Indian community around Nishi-Kasai.",
    rent: "¥55,000–80,000/mo", safety: 9.0, transport: 7.8, nightlife: 2.5, studentFit: 5.0,
    commute: "45–55 min by train", bestFor: "Family-friendly, low-cost living", caution: "Far from Mita", landmarks: ["Kasai Rinkai Park", "Nishi-Kasai"] }),
];

export type TokyoListing = Listing & { wardSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const tokyoListings: TokyoListing[] = [
  { id: "tk-sample-mita-sharehouse", wardSlug: "minato", title: "Share-house room near Tamachi", rent: 92000, currency: "¥", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 35.6450, lng: 139.7460, description: "Furnished private room in a share house, a 7-minute walk to Keio Mita. No key money; utilities included.", rooms: 1, sizeSqm: 10, availableFrom: "1 Apr 2027", amenities: ["Furnished", "Utilities included", "Wifi included"] },
  { id: "tk-sample-mita-1k", wardSlug: "minato", title: "1K flat in Mita", rent: 125000, currency: "¥", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 35.6480, lng: 139.7400, description: "Compact 1K apartment near Mita station. Deposit and key money of one month each; guarantor company required.", rooms: 1, sizeSqm: 20, availableFrom: "1 Apr 2027", amenities: ["Air conditioning", "Private bathroom", "Auto-lock"], riskNote: "Higher caution" },
  { id: "tk-sample-gotanda-room", wardSlug: "shinagawa", title: "Room in a Gotanda share house", rent: 78000, currency: "¥", type: "Room", source: SAMPLE_SOURCE, lat: 35.6260, lng: 139.7230, description: "Private room with shared kitchen, a few stops from Mita on the Toei Asakusa line.", rooms: 1, sizeSqm: 9, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "tk-sample-nakameguro-room", wardSlug: "meguro", title: "Share-house room in Nakameguro", rent: 85000, currency: "¥", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 35.6440, lng: 139.6990, description: "Room near the Toyoko line — handy for both Mita and Hiyoshi.", rooms: 1, sizeSqm: 10, availableFrom: "1 Apr 2027", amenities: ["Furnished", "Utilities included", "Lounge"] },
  { id: "tk-sample-kamata-room", wardSlug: "ota", title: "Room in Kamata", rent: 62000, currency: "¥", type: "Room", source: SAMPLE_SOURCE, lat: 35.5620, lng: 139.7160, description: "Affordable share-house room with fast trains to Shinagawa and Tamachi.", rooms: 1, sizeSqm: 9, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "tk-sample-shimokita-room", wardSlug: "setagaya", title: "Room in Shimokitazawa", rent: 72000, currency: "¥", type: "Room", source: SAMPLE_SOURCE, lat: 35.6615, lng: 139.6680, description: "Share-house room close to Shimokitazawa's cafés and live houses.", rooms: 1, sizeSqm: 9, availableFrom: "1 Apr 2027", amenities: ["Furnished", "Wifi included"] },
  { id: "tk-sample-koenji-room", wardSlug: "suginami", title: "Room in Koenji", rent: 60000, currency: "¥", type: "Room", source: SAMPLE_SOURCE, lat: 35.7055, lng: 139.6500, description: "Budget share-house room on the Chuo line.", rooms: 1, sizeSqm: 8, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Utilities included"] },
];

export function getTokyoWardBySlug(slug: string): TokyoWard | undefined {
  return tokyoWards.find((x) => x.slug === slug);
}

export function getTokyoListingsForWard(slug: string | null): TokyoListing[] {
  if (!slug) return [];
  return tokyoListings.filter((l) => l.wardSlug === slug);
}
