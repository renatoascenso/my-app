import type { Listing } from "./listings";

// 28 subdistricts (街道) and towns (镇) whose centre lies within about 8 km of Tsinghua University.
// Boundaries: © OpenStreetMap contributors (ODbL), credited in BeijingExplorer.
// Tsinghua SEM (home of CEMS) is on the main campus in Qinghuayuan, Haidian District. Commute times refer to SEM;
// rents are estimated monthly ranges for a room in a shared flat (RMB); scores are editorial judgments.

export type BeijingSubdistrict = {
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

type District = "Haidian" | "Chaoyang" | "Xicheng" | "Dongcheng" | "Changping";
type Entry = {
  slug: string; name: string; district: District; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const s = ({ district, at, landmarks = [], ...e }: Entry): BeijingSubdistrict => ({
  rent: "RMB 3,000–4,500/mo", safety: 9.0, transport: 7.8, nightlife: 3.5, studentFit: 6.0,
  bestFor: "Quieter residential compounds", caution: "Further from Tsinghua; check the metro connection",
  ...e,
  landmarks,
  badge: `${district} District`,
  lat: at[0],
  lng: at[1],
});

export const beijingSubdistricts: BeijingSubdistrict[] = [
  // ── Tsinghua and Wudaokou ──
  s({ slug: "qinghuayuan", name: "Qinghuayuan", district: "Haidian", at: [40.0025, 116.3206],
    description: "Tsinghua University's main campus. The School of Economics and Management and the Zijing international student apartments in the campus's north-east corner are both here.",
    rent: "On-campus housing", safety: 9.6, transport: 8.0, nightlife: 3.0, studentFit: 9.8,
    commute: "On campus; 10–20 min by bike to SEM", bestFor: "Tsinghua students — most international students live in Zijing",
    caution: "Campus rooms are double rooms and limited; apply early",
    landmarks: ["Tsinghua SEM", "Zijing student apartments", "Tsinghua Science Park"] }),
  s({ slug: "xueyuanlu", name: "Xueyuanlu", district: "Haidian", at: [39.9981, 116.3488],
    description: "Wudaokou, Beijing's best-known student quarter, at Tsinghua's east gate, with Line 13, cafés, bars and Korean restaurants. Several universities line Xueyuan Road.",
    rent: "RMB 3,500–5,500/mo", safety: 9.0, transport: 9.0, nightlife: 8.6, studentFit: 9.6,
    commute: "10–20 min by bike or on foot", bestFor: "Students who want to live next to campus with an international scene",
    caution: "Highest rents for small, older flats; rooms go fast before semester",
    landmarks: ["Wudaokou station", "Beijing Language and Culture University", "Beijing Forestry University", "University of Science and Technology Beijing"] }),
  s({ slug: "zhongguancun", name: "Zhongguancun", district: "Haidian", at: [39.9781, 116.3231],
    description: "China's tech hub south of the universities, with Haidian Huangzhuang and Zhongguancun stations on Line 4, malls and the Huaqing Jiayuan compound near Wudaokou.",
    rent: "RMB 3,500–5,500/mo", safety: 9.2, transport: 9.4, nightlife: 6.6, studentFit: 8.6,
    commute: "15–25 min by bike or Line 4", bestFor: "Short commutes and good shopping",
    caution: "Expensive; busy roads", landmarks: ["Haidian Huangzhuang station", "Huaqing Jiayuan"] }),
  s({ slug: "yanyuan", name: "Yanyuan", district: "Haidian", at: [39.9912, 116.3041],
    description: "Peking University's campus, west of Tsinghua. Off-campus flats are scarce inside the subdistrict.",
    rent: "RMB 3,500–5,000/mo", safety: 9.4, transport: 8.4, nightlife: 4.5, studentFit: 7.4,
    commute: "10–20 min by bike", bestFor: "Being close to both Tsinghua and Peking University",
    caution: "Mostly campus land — few private rentals", landmarks: ["Peking University"] }),
  s({ slug: "dongsheng", name: "Dongsheng", district: "Haidian", at: [40.0408, 116.3607],
    description: "Township north and east of Tsinghua, mixing newer housing estates with business parks such as Dongsheng Science Park.",
    rent: "RMB 3,000–4,500/mo", safety: 9.0, transport: 7.6, nightlife: 3.5, studentFit: 7.4,
    commute: "15–30 min by bike or bus", bestFor: "Newer flats close to campus",
    caution: "Scattered parts — check which part a flat is in", landmarks: ["Dongsheng Science Park"] }),
  s({ slug: "huayuanlu", name: "Huayuanlu", district: "Haidian", at: [39.9769, 116.3563],
    description: "University area around Beihang University and the Beijing Film Academy, south-east of Wudaokou.",
    rent: "RMB 3,000–4,500/mo", safety: 9.0, transport: 8.6, nightlife: 5.0, studentFit: 7.8,
    commute: "20–30 min by bike or metro", bestFor: "Student life at a slightly lower price than Wudaokou",
    caution: "Older housing compounds", landmarks: ["Beihang University", "Beijing Film Academy"] }),
  s({ slug: "haidian-subdistrict", name: "Haidian Subdistrict", district: "Haidian", at: [39.9728, 116.2975],
    description: "Older core of Haidian around Renmin University and the bookshops and offices west of Zhongguancun.",
    rent: "RMB 3,500–5,000/mo", safety: 9.0, transport: 8.8, nightlife: 5.4, studentFit: 7.6,
    commute: "20–30 min by Line 4 or bike", bestFor: "Central Haidian with many universities nearby",
    caution: "Not to be confused with Haidian Town further west", landmarks: ["Renmin University of China"] }),
  s({ slug: "beitaipingzhuang", name: "Beitaipingzhuang", district: "Haidian", at: [39.9589, 116.3517],
    description: "University district around Beijing Normal University and Beijing University of Posts and Telecommunications, near Zhichunlu.",
    rent: "RMB 3,000–4,500/mo", safety: 9.0, transport: 8.8, nightlife: 5.0, studentFit: 7.6,
    commute: "25–40 min by metro or bike", bestFor: "Student atmosphere and good metro links",
    caution: "Older compounds; traffic on the Third Ring Road", landmarks: ["Beijing Normal University", "BUPT", "Zhichunlu station"] }),
  s({ slug: "beixiaguan", name: "Beixiaguan", district: "Haidian", at: [39.9532, 116.3300],
    description: "Residential and campus area around Beijing Jiaotong University and Dazhongsi.",
    rent: "RMB 3,000–4,500/mo", safety: 9.0, transport: 8.6, nightlife: 4.0, studentFit: 7.0,
    commute: "30–40 min by metro", landmarks: ["Beijing Jiaotong University", "Dazhongsi station"] }),
  s({ slug: "qinghe", name: "Qinghe", district: "Haidian", at: [40.0384, 116.3218],
    description: "Busy residential area north of the campuses around Qinghe railway station, with large housing estates and malls.",
    rent: "RMB 2,800–4,000/mo", safety: 9.0, transport: 8.2, nightlife: 4.0, studentFit: 7.0,
    commute: "20–35 min by bus, metro or bike", bestFor: "Lower rents with a short commute",
    landmarks: ["Qinghe railway station"] }),
  s({ slug: "shangdi", name: "Shangdi", district: "Haidian", at: [40.0339, 116.2977],
    description: "Tech office district along Line 13 with Shangdi and Xi'erqi stations and Beijing Sport University.",
    rent: "RMB 2,800–4,000/mo", safety: 9.0, transport: 8.2, nightlife: 3.0, studentFit: 6.4,
    commute: "25–35 min by Line 13", bestFor: "Students with internships at the tech parks",
    caution: "Line 13 is very crowded at rush hour", landmarks: ["Shangdi station", "Xi'erqi station", "Beijing Sport University"] }),
  s({ slug: "qinglongqiao", name: "Qinglongqiao", district: "Haidian", at: [40.0065, 116.2696],
    description: "Parkland west of the universities with the Summer Palace and the Old Summer Palace (Yuanmingyuan).",
    rent: "RMB 2,800–4,000/mo", safety: 9.4, transport: 6.8, nightlife: 2.0, studentFit: 5.6,
    commute: "20–40 min by bike or bus", bestFor: "Green surroundings", caution: "Few rentals; mostly parks",
    landmarks: ["Summer Palace", "Old Summer Palace (Yuanmingyuan)"] }),
  s({ slug: "xisanqi", name: "Xisanqi", district: "Haidian", at: [40.0385, 116.3434],
    description: "Residential compounds north of Dongsheng along Line 8, popular with young workers.",
    rent: "RMB 2,800–3,800/mo", safety: 9.0, transport: 7.8, nightlife: 3.0, studentFit: 6.6,
    commute: "30–40 min by bus or bike", bestFor: "Cheaper rooms north of campus", landmarks: ["Yongtaizhuang station"] }),
  s({ slug: "malianwa", name: "Malianwa", district: "Haidian", at: [40.0316, 116.2700],
    description: "North-western residential area next to Zhongguancun Software Park.",
    rent: "RMB 2,800–3,800/mo", safety: 9.0, transport: 7.0, nightlife: 2.5, studentFit: 5.6,
    commute: "30–45 min by bus or bike", landmarks: ["Zhongguancun Software Park", "Anheqiao North station"] }),
  s({ slug: "zizhuyuan", name: "Zizhuyuan", district: "Haidian", at: [39.9495, 116.3049],
    description: "Residential area around Zizhuyuan Park and Minzu University of China.",
    rent: "RMB 3,000–4,500/mo", safety: 9.0, transport: 8.4, nightlife: 4.0, studentFit: 6.8,
    commute: "35–45 min by metro", landmarks: ["Minzu University of China", "Zizhuyuan Park"] }),
  s({ slug: "shuguang", name: "Shuguang", district: "Haidian", at: [39.9541, 116.2784],
    description: "Quiet residential area west of the Third Ring Road around Chedaogou and Changchunqiao.",
    commute: "40–50 min by metro or bus", landmarks: ["Chedaogou station", "Changchunqiao station"] }),
  s({ slug: "haidian-town", name: "Haidian Town", district: "Haidian", at: [39.9963, 116.2486],
    description: "Scattered township land in western Haidian, largely parks, villages and campuses.",
    rent: "RMB 2,500–3,500/mo", transport: 6.0, nightlife: 2.0, studentFit: 4.6,
    commute: "40–60 min", caution: "Scattered parts with few rentals and poor transport" }),

  // ── Chaoyang ──
  s({ slug: "aoyuncun", name: "Aoyuncun (Olympic Village)", district: "Chaoyang", at: [40.0160, 116.3834],
    description: "The Olympic Green with the Bird's Nest and Water Cube, and the residential estates around it.",
    rent: "RMB 3,000–4,500/mo", safety: 9.2, transport: 8.4, nightlife: 4.4, studentFit: 6.6,
    commute: "25–40 min by metro", bestFor: "Parks and modern flats",
    landmarks: ["National Stadium (Bird's Nest)", "National Aquatics Center (Water Cube)", "Olympic Forest Park"] }),
  s({ slug: "yayuncun", name: "Yayuncun", district: "Chaoyang", at: [39.9836, 116.3898],
    description: "Asian Games Village area south of the Olympic Green, with Beitucheng station and the China National Convention Center.",
    rent: "RMB 3,200–4,800/mo", safety: 9.0, transport: 8.8, nightlife: 5.4, studentFit: 6.6,
    commute: "30–40 min by metro", landmarks: ["Beitucheng station", "China National Convention Center"] }),
  s({ slug: "datun", name: "Datun", district: "Chaoyang", at: [40.0014, 116.4182],
    description: "Large residential compounds east of the Olympic Green around Datunlu East station.",
    rent: "RMB 3,000–4,500/mo", commute: "35–50 min by metro", landmarks: ["Datunlu East station"] }),
  s({ slug: "xiaoguan", name: "Xiaoguan", district: "Chaoyang", at: [39.9807, 116.4137],
    description: "Small residential subdistrict around Huixinxijie Nankou station.",
    rent: "RMB 3,000–4,500/mo", commute: "35–50 min by metro", landmarks: ["Huixinxijie Nankou station"] }),
  s({ slug: "anzhen", name: "Anzhen", district: "Chaoyang", at: [39.9677, 116.3917],
    description: "Residential area inside the North Third Ring Road around Anhuaqiao and Huangsi.",
    rent: "RMB 3,200–4,800/mo", commute: "40–50 min by metro", landmarks: ["Anhuaqiao station"] }),

  // ── Xicheng and Dongcheng ──
  s({ slug: "desheng", name: "Desheng", district: "Xicheng", at: [39.9584, 116.3756],
    description: "Northern Xicheng between the Second and Third Ring Roads around Hepingxiqiao.",
    rent: "RMB 3,500–5,000/mo", transport: 8.6, nightlife: 5.0, studentFit: 5.8,
    commute: "40–50 min by metro", landmarks: ["Hepingxiqiao station"] }),
  s({ slug: "xinjiekou", name: "Xinjiekou", district: "Xicheng", at: [39.9336, 116.3584],
    description: "Old-city neighbourhood of hutongs and shops near the Second Ring Road.",
    rent: "RMB 3,500–5,500/mo", transport: 8.6, nightlife: 6.4, studentFit: 6.0,
    commute: "40–55 min by metro", bestFor: "Hutong life in the old city", caution: "Older buildings, often without heating upgrades",
    landmarks: ["Xinjiekou"] }),
  s({ slug: "zhanlanlu", name: "Zhanlanlu", district: "Xicheng", at: [39.9308, 116.3388],
    description: "Western Xicheng around Xizhimen, Beijing Zoo, the Beijing Exhibition Center and Beijing North railway station.",
    rent: "RMB 3,500–5,000/mo", transport: 9.4, nightlife: 5.0, studentFit: 6.0,
    commute: "35–50 min by Line 4 or 13", bestFor: "Transport hub with direct lines to Haidian",
    landmarks: ["Xizhimen station", "Beijing Zoo", "Beijing Exhibition Center", "Beijing North railway station"] }),
  s({ slug: "hepingli", name: "Hepingli", district: "Dongcheng", at: [39.9557, 116.4032],
    description: "Residential Dongcheng north of the Second Ring Road, with Ditan Park.",
    rent: "RMB 3,500–5,000/mo", transport: 8.6, nightlife: 4.6, studentFit: 5.8,
    commute: "45–55 min by metro", landmarks: ["Ditan Park", "Hepingli Beijie station"] }),

  // ── Changping ──
  s({ slug: "huilongguan", name: "Huilongguan", district: "Changping", at: [40.0683, 116.3139],
    description: "One of Beijing's largest residential areas, north of the Fifth Ring Road, popular with young tech workers.",
    rent: "RMB 2,500–3,500/mo", safety: 8.8, transport: 7.4, nightlife: 3.0, studentFit: 6.2,
    commute: "35–50 min by Line 13 and bus", bestFor: "Low rents with a direct metro line", caution: "Crowded Line 13 at rush hour",
    landmarks: ["Longze station"] }),
  s({ slug: "dongxiaokou", name: "Dongxiaokou", district: "Changping", at: [40.0735, 116.3774],
    description: "Large residential township north of the Fifth Ring Road between Huilongguan and Tiantongyuan.",
    rent: "RMB 2,300–3,300/mo", safety: 8.8, transport: 7.0, nightlife: 2.5, studentFit: 5.4,
    commute: "45–60 min by metro and bus", bestFor: "Lowest rents on this map" }),
];

export type BeijingListing = Listing & { subdistrictSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const beijingListings: BeijingListing[] = [
  { id: "bj-sample-wudaokou-room", subdistrictSlug: "xueyuanlu", title: "Room near Wudaokou station", rent: 4500, currency: "RMB ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 39.9935, lng: 116.3395, description: "Furnished room in a shared flat a few minutes' walk from Wudaokou station and Tsinghua's east gate.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Wifi included", "Heating included"] },
  { id: "bj-sample-wudaokou-studio", subdistrictSlug: "xueyuanlu", title: "Studio on Chengfu Road", rent: 7500, currency: "RMB ", type: "Studio", source: SAMPLE_SOURCE, lat: 39.9960, lng: 116.3440, description: "Small furnished studio in an older compound, by bike to campus.", rooms: 1, sizeSqm: 28, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Air conditioning"], riskNote: "Higher caution" },
  { id: "bj-sample-zhongguancun-room", subdistrictSlug: "zhongguancun", title: "Room near Huaqing Jiayuan", rent: 4800, currency: "RMB ", type: "Room", source: SAMPLE_SOURCE, lat: 39.9895, lng: 116.3290, description: "Room in a three-bedroom flat in a gated compound near Wudaokou.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Heating included"] },
  { id: "bj-sample-qinghe-room", subdistrictSlug: "qinghe", title: "Room in Qinghe", rent: 3300, currency: "RMB ", type: "Room", source: SAMPLE_SOURCE, lat: 40.0380, lng: 116.3250, description: "Room in a shared flat in a newer estate, with buses towards Tsinghua.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Utilities included"] },
  { id: "bj-sample-huayuanlu-room", subdistrictSlug: "huayuanlu", title: "Room near Beihang", rent: 3800, currency: "RMB ", type: "Room", source: SAMPLE_SOURCE, lat: 39.9780, lng: 116.3560, description: "Room in a student flat close to Beihang University.", rooms: 1, sizeSqm: 11, availableFrom: "1 Mar 2027", amenities: ["Furnished"] },
];

export function getBeijingSubdistrictBySlug(slug: string): BeijingSubdistrict | undefined {
  return beijingSubdistricts.find((x) => x.slug === slug);
}

export function getBeijingListingsForSubdistrict(slug: string | null): BeijingListing[] {
  if (!slug) return [];
  return beijingListings.filter((l) => l.subdistrictSlug === slug);
}
