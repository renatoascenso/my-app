import type { Listing } from "./listings";

// Seoul's 25 autonomous districts (gu). Boundaries: © OpenStreetMap contributors (ODbL), credited in SeoulExplorer.
// Korea University Business School (Anam campus, home of CEMS) is in Seongbuk-gu.
// Commute times refer to the Anam campus. Rents are estimated monthly ranges for a one-room or goshiwon room
// (KRW), usually with a separate deposit; scores are editorial judgments.

export type SeoulGu = {
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

type Side = "north" | "south";
type Entry = Omit<SeoulGu, "badge" | "lat" | "lng"> & { side: Side; at: [number, number] };
const s = ({ side, at, ...rest }: Entry): SeoulGu => ({
  ...rest,
  badge: side === "north" ? "North of the Han River" : "South of the Han River",
  lat: at[0],
  lng: at[1],
});

export const seoulGus: SeoulGu[] = [
  // ── Around Korea University ──
  s({ slug: "seongbuk-gu", name: "Seongbuk-gu", side: "north", at: [37.5893, 127.0322],
    description: "Korea University's Anam campus with the Business School, the student streets of Anam-dong full of one-rooms and cheap restaurants, plus quiet hillside neighbourhoods further north.",
    rent: "₩500,000–700,000/mo", safety: 9.0, transport: 8.8, nightlife: 6.5, studentFit: 9.6,
    commute: "Business School on site; Anam and Korea University stations on Line 6", bestFor: "Korea University and CEMS students who want to walk to class", caution: "Rooms near campus fill up before each semester; many one-rooms are small",
    landmarks: ["Korea University (Anam campus)", "Korea University Business School", "Anam station", "Korea University station"] }),
  s({ slug: "dongdaemun-gu", name: "Dongdaemun-gu", side: "north", at: [37.5803, 127.0469],
    description: "Right next to Korea University's east side: Jegi-dong, Hoegi with Kyung Hee University, and the Cheongnyangni transport hub.",
    rent: "₩450,000–650,000/mo", safety: 8.6, transport: 9.0, nightlife: 5.5, studentFit: 8.8,
    commute: "10–15 min walk or bus", bestFor: "Cheaper rooms a short walk from campus", caution: "Older buildings around the markets",
    landmarks: ["Cheongnyangni station", "Kyung Hee University", "Gyeongdong Market"] }),
  s({ slug: "jongno-gu", name: "Jongno-gu", side: "north", at: [37.5714, 126.9916],
    description: "Historic Seoul with the palaces, Insadong, Bukchon and Daehangno's theatre district around Hyehwa, home to SKKU's Humanities campus.",
    rent: "₩550,000–800,000/mo", safety: 9.0, transport: 9.4, nightlife: 7.8, studentFit: 8.2,
    commute: "15–20 min by subway or bus", bestFor: "History, culture and Daehangno's student life", caution: "Pricier near the palaces; older houses",
    landmarks: ["Gyeongbokgung", "Daehangno (Hyehwa)", "Insadong"] }),
  s({ slug: "seongdong-gu", name: "Seongdong-gu", side: "north", at: [37.5446, 127.056],
    description: "Seongsu-dong's cafés and converted factories, the Wangsimni hub and Hanyang University.",
    rent: "₩550,000–800,000/mo", safety: 9.0, transport: 9.0, nightlife: 7.0, studentFit: 8.0,
    commute: "15–20 min by subway", bestFor: "Trendy cafés and Hanyang University", caution: "Seongsu is getting expensive",
    landmarks: ["Seongsu-dong", "Wangsimni station", "Hanyang University"] }),
  s({ slug: "jung-gu", name: "Jung-gu", side: "north", at: [37.5609, 126.9862],
    description: "Downtown Seoul: Myeongdong, City Hall, Namdaemun and Dongdaemun Design Plaza.",
    rent: "₩600,000–900,000/mo", safety: 9.0, transport: 9.6, nightlife: 7.8, studentFit: 7.0,
    commute: "20 min by subway", bestFor: "Central living close to everything", caution: "Busy, touristy and pricey",
    landmarks: ["Myeongdong", "Dongdaemun Design Plaza", "Seoul City Hall"] }),
  s({ slug: "gangbuk-gu", name: "Gangbuk-gu", side: "north", at: [37.6472, 127.0048],
    description: "Residential north with Mia and Suyu, below Bukhansan National Park, on the Ui LRT and Line 4.",
    rent: "₩400,000–600,000/mo", safety: 8.8, transport: 8.0, nightlife: 4.5, studentFit: 7.2,
    commute: "20–30 min by bus or subway", bestFor: "Lower rents near the mountains", caution: "Hilly; quieter at night",
    landmarks: ["Bukhansan National Park", "Mia"] }),
  s({ slug: "jungnang-gu", name: "Jungnang-gu", side: "north", at: [37.5954, 127.0928],
    description: "Affordable residential district east of the Jungnangcheon stream, on Lines 6 and 7.",
    rent: "₩400,000–600,000/mo", safety: 8.6, transport: 8.0, nightlife: 3.5, studentFit: 7.0,
    commute: "20–30 min by subway", bestFor: "Low rents with a Line 6 connection", caution: "Little student life", landmarks: ["Sangbong"] }),
  s({ slug: "nowon-gu", name: "Nowon-gu", side: "north", at: [37.6551, 127.0736],
    description: "Large apartment district in the north-east with several universities, on Lines 4 and 7.",
    rent: "₩400,000–600,000/mo", safety: 9.0, transport: 8.0, nightlife: 4.0, studentFit: 6.8,
    commute: "35–45 min by subway", bestFor: "Quiet, affordable living", caution: "Long commute", landmarks: ["Nowon station"] }),
  s({ slug: "dobong-gu", name: "Dobong-gu", side: "north", at: [37.6664, 127.0328],
    description: "Northernmost district at the foot of Dobongsan.",
    rent: "₩380,000–550,000/mo", safety: 9.0, transport: 7.6, nightlife: 2.5, studentFit: 5.8,
    commute: "35–45 min by subway", bestFor: "Hiking and low rents", caution: "Far from campus", landmarks: ["Dobongsan"] }),
  s({ slug: "gwangjin-gu", name: "Gwangjin-gu", side: "north", at: [37.5476, 127.0893],
    description: "Konkuk University and Sejong University, the busy Konkuk University station area and the Han River parks.",
    rent: "₩500,000–700,000/mo", safety: 8.8, transport: 9.0, nightlife: 8.0, studentFit: 8.4,
    commute: "25–30 min by subway", bestFor: "University nightlife and river parks", caution: "Lively and loud at weekends",
    landmarks: ["Konkuk University", "Children's Grand Park"] }),
  s({ slug: "seodaemun-gu", name: "Seodaemun-gu", side: "north", at: [37.5658, 126.9386],
    description: "University district with Yonsei and Ewha around Sinchon.",
    rent: "₩550,000–800,000/mo", safety: 9.0, transport: 9.0, nightlife: 8.4, studentFit: 8.4,
    commute: "30–35 min by subway", bestFor: "Sinchon's student life", caution: "Far west of Korea University",
    landmarks: ["Yonsei University", "Ewha Womans University"] }),
  s({ slug: "mapo-gu", name: "Mapo-gu", side: "north", at: [37.5563, 126.9236],
    description: "Hongdae's clubs, indie music and street performers, plus Hongik University and Mangwon's cafés.",
    rent: "₩550,000–850,000/mo", safety: 8.6, transport: 9.2, nightlife: 9.6, studentFit: 8.2,
    commute: "35–40 min by subway", bestFor: "Nightlife and creative scene", caution: "Loud at night; long ride to Anam",
    landmarks: ["Hongdae", "Hongik University", "Mangwon"] }),
  s({ slug: "yongsan-gu", name: "Yongsan-gu", side: "north", at: [37.5345, 126.9946],
    description: "Itaewon's international restaurants and bars, Namsan and the Yongsan rail hub.",
    rent: "₩600,000–900,000/mo", safety: 8.6, transport: 9.0, nightlife: 9.0, studentFit: 7.2,
    commute: "30 min by subway", bestFor: "International community and nightlife", caution: "Pricey; hilly streets",
    landmarks: ["Itaewon", "N Seoul Tower", "Yongsan station"] }),
  s({ slug: "eunpyeong-gu", name: "Eunpyeong-gu", side: "north", at: [37.6176, 126.9266],
    description: "North-western residential district with Bukhansan's western trails and the Bulgwang area.",
    rent: "₩400,000–600,000/mo", safety: 9.0, transport: 7.8, nightlife: 3.0, studentFit: 6.2,
    commute: "40–50 min by subway", bestFor: "Nature and lower rents", caution: "Long commute", landmarks: ["Bulgwang"] }),

  // ── South of the river ──
  s({ slug: "gangnam-gu", name: "Gangnam-gu", side: "south", at: [37.4983, 127.0585],
    description: "Seoul's wealthy business and shopping district around Gangnam station, Sinsa and COEX.",
    rent: "₩700,000–1,100,000/mo", safety: 9.0, transport: 9.4, nightlife: 8.6, studentFit: 6.8,
    commute: "35–45 min by subway", bestFor: "Internships and nightlife south of the river", caution: "Expensive; long ride to Anam",
    landmarks: ["Gangnam station", "COEX", "Sinsa"] }),
  s({ slug: "seocho-gu", name: "Seocho-gu", side: "south", at: [37.4784, 127.0132],
    description: "Upmarket district with the courts, the Seoul Arts Center and Express Bus Terminal.",
    rent: "₩700,000–1,000,000/mo", safety: 9.2, transport: 9.0, nightlife: 6.0, studentFit: 6.4,
    commute: "40–45 min by subway", bestFor: "Calm, upmarket living", caution: "Expensive", landmarks: ["Seoul Arts Center", "Express Bus Terminal"] }),
  s({ slug: "songpa-gu", name: "Songpa-gu", side: "south", at: [37.5055, 127.1053],
    description: "Lotte World Tower, Olympic Park and big apartment complexes in south-east Seoul.",
    rent: "₩600,000–900,000/mo", safety: 9.2, transport: 9.0, nightlife: 6.0, studentFit: 6.4,
    commute: "40–50 min by subway", bestFor: "Parks and modern apartments", caution: "Far from campus", landmarks: ["Lotte World Tower", "Olympic Park"] }),
  s({ slug: "gangdong-gu", name: "Gangdong-gu", side: "south", at: [37.549, 127.1472],
    description: "Eastern residential district on Lines 5 and 8.",
    rent: "₩500,000–750,000/mo", safety: 9.0, transport: 8.2, nightlife: 3.5, studentFit: 5.8,
    commute: "45–55 min by subway", bestFor: "Quiet apartments", caution: "Long commute", landmarks: ["Cheonho"] }),
  s({ slug: "gwanak-gu", name: "Gwanak-gu", side: "south", at: [37.4651, 126.9509],
    description: "Home to Seoul National University, with cheap student rooms around Seoul National University station and Sillim.",
    rent: "₩400,000–600,000/mo", safety: 8.6, transport: 8.4, nightlife: 7.0, studentFit: 7.6,
    commute: "50–60 min by subway", bestFor: "Seoul National University students and very cheap rooms", caution: "Far from Korea University",
    landmarks: ["Seoul National University", "Sillim"] }),
  s({ slug: "dongjak-gu", name: "Dongjak-gu", side: "south", at: [37.4976, 126.9514],
    description: "Noryangjin's fish market and exam-prep academies, plus Chung-Ang and Soongsil universities.",
    rent: "₩450,000–650,000/mo", safety: 9.0, transport: 8.6, nightlife: 5.0, studentFit: 7.2,
    commute: "40–50 min by subway", bestFor: "Cheap rooms near the river", caution: "Long commute to Anam",
    landmarks: ["Noryangjin", "Chung-Ang University"] }),
  s({ slug: "yeongdeungpo-gu", name: "Yeongdeungpo-gu", side: "south", at: [37.5207, 126.9142],
    description: "Yeouido's financial district and parks, plus the Yeongdeungpo shopping hub.",
    rent: "₩550,000–850,000/mo", safety: 8.6, transport: 9.2, nightlife: 6.5, studentFit: 6.4,
    commute: "40–50 min by subway", bestFor: "Finance internships in Yeouido", caution: "Far from campus", landmarks: ["Yeouido", "The Hyundai Seoul"] }),
  s({ slug: "yangcheon-gu", name: "Yangcheon-gu", side: "south", at: [37.5271, 126.8624],
    description: "Mokdong's large apartment complexes and tutoring academies.",
    rent: "₩500,000–750,000/mo", safety: 9.0, transport: 8.2, nightlife: 3.5, studentFit: 5.6,
    commute: "55–65 min by subway", bestFor: "Family-style apartments", caution: "Very long commute", landmarks: ["Mokdong"] }),
  s({ slug: "guro-gu", name: "Guro-gu", side: "south", at: [37.4958, 126.8538],
    description: "Digital complexes and diverse neighbourhoods in south-west Seoul.",
    rent: "₩400,000–600,000/mo", safety: 8.4, transport: 8.4, nightlife: 4.0, studentFit: 5.6,
    commute: "55–65 min by subway", bestFor: "Low rents in the west", caution: "Very long commute", landmarks: ["Guro Digital Complex"] }),
  s({ slug: "geumcheon-gu", name: "Geumcheon-gu", side: "south", at: [37.46, 126.8998],
    description: "Gasan Digital Complex's offices and outlet malls in the south-west.",
    rent: "₩400,000–600,000/mo", safety: 8.4, transport: 8.0, nightlife: 3.5, studentFit: 5.2,
    commute: "60 min by subway", bestFor: "Cheap rooms near office parks", caution: "Very long commute", landmarks: ["Gasan Digital Complex"] }),
  s({ slug: "gangseo-gu", name: "Gangseo-gu", side: "south", at: [37.5657, 126.8186],
    description: "Western district around Gimpo Airport and the new Magok business district.",
    rent: "₩450,000–700,000/mo", safety: 9.0, transport: 8.0, nightlife: 3.5, studentFit: 5.2,
    commute: "60–70 min by subway", bestFor: "Magok internships", caution: "Very far from Anam", landmarks: ["Gimpo Airport", "Magok"] }),
];

export type SeoulListing = Listing & { guSlug: string };

// Sample listings to demonstrate the map — not real offers. Monthly rent; deposits vary.
export const SAMPLE_SOURCE = "Sample listing";

export const seoulListings: SeoulListing[] = [
  { id: "se-sample-anam-oneroom", guSlug: "seongbuk-gu", title: "One-room near Anam station", rent: 600000, currency: "₩", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 37.5870, lng: 127.0300, description: "Furnished one-room with a kitchenette, a 5-minute walk to Korea University. Deposit ₩5,000,000.", rooms: 1, sizeSqm: 18, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Air conditioning", "Washing machine"] },
  { id: "se-sample-anam-goshiwon", guSlug: "seongbuk-gu", title: "Goshiwon room in Anam-dong", rent: 450000, currency: "₩", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 37.5860, lng: 127.0285, description: "Small private room with shared kitchen; rice and kimchi included. Deposit ₩200,000.", rooms: 1, sizeSqm: 7, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Utilities included", "Shared kitchen"], riskNote: "Higher caution" },
  { id: "se-sample-jegi-oneroom", guSlug: "dongdaemun-gu", title: "One-room in Jegi-dong", rent: 520000, currency: "₩", type: "Studio", source: SAMPLE_SOURCE, lat: 37.5785, lng: 127.0360, description: "One-room near Jegi-dong station, 10 minutes' walk to the campus. Deposit ₩5,000,000.", rooms: 1, sizeSqm: 17, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Air conditioning"] },
  { id: "se-sample-hyehwa-room", guSlug: "jongno-gu", title: "Share-house room in Hyehwa", rent: 550000, currency: "₩", type: "Room", source: SAMPLE_SOURCE, lat: 37.5825, lng: 127.0020, description: "Room in a share house near Daehangno, with Line 4 to the city.", rooms: 1, sizeSqm: 10, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Shared kitchen", "Wifi included"] },
  { id: "se-sample-seongsu-oneroom", guSlug: "seongdong-gu", title: "One-room in Seongsu", rent: 750000, currency: "₩", type: "Studio", source: SAMPLE_SOURCE, lat: 37.5440, lng: 127.0560, description: "Newer one-room near Seongsu's cafés and Line 2. Deposit ₩10,000,000.", rooms: 1, sizeSqm: 20, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Air conditioning", "Elevator"] },
  { id: "se-sample-hongdae-room", guSlug: "mapo-gu", title: "Share-house room near Hongdae", rent: 650000, currency: "₩", type: "Room", source: SAMPLE_SOURCE, lat: 37.5560, lng: 126.9240, description: "Room in an international share house close to Hongik University station.", rooms: 1, sizeSqm: 10, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Utilities included"] },
];

export function getSeoulGuBySlug(slug: string): SeoulGu | undefined {
  return seoulGus.find((x) => x.slug === slug);
}

export function getSeoulListingsForGu(slug: string | null): SeoulListing[] {
  if (!slug) return [];
  return seoulListings.filter((l) => l.guSlug === slug);
}
