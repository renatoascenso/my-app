import type { Listing } from "./listings";

// Stockholm's district areas (stadsdelsområden) as organised since 2023–2025, with Norra innerstaden
// split into its stadsdelar (Norrmalm, Vasastan, Östermalm, Norra Djurgården, Djurgården/Gärdet/Hjorthagen)
// so the campus areas stand apart; Rinkeby-Kista + Spånga-Tensta form Järva. The six neighbouring
// municipalities with campuses or commuter housing (Solna, Sundbyberg, Lidingö, Danderyd, Nacka, Huddinge)
// are added as their own zones.
// Boundaries: © OpenStreetMap contributors (ODbL), credited in StockholmExplorer — the city's own
// district layer is not openly licensed. Room prices are estimated ranges; scores are editorial judgments.

export type StockholmStadsdel = {
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

type Base = Omit<StockholmStadsdel, "lat" | "lng" | "badge"> & { at: [number, number]; inner?: boolean; badge?: string };
const s = ({ at, inner = false, badge, ...rest }: Base): StockholmStadsdel => ({
  ...rest,
  badge: badge ?? (inner ? "Inner city" : "Outer city"),
  lat: at[0],
  lng: at[1],
});

export const stockholmStadsdelar: StockholmStadsdel[] = [
  s({ slug: "norrmalm", name: "Norrmalm", inner: true, at: [59.3308, 18.06947],
    description: "The city center around T-Centralen, Sergels torg and Kungsträdgården, with Skeppsholmen's museums across the bridge. Every metro line and the airport trains meet here.",
    rent: "SEK 7,500–10,000/mo", safety: 8.2, transport: 10, nightlife: 8.6, studentFit: 7.8,
    commute: "10–15 min to KTH, SSE and SU", bestFor: "Being at the center of every transport line", caution: "Few residential flats and high rents; busy around T-Centralen at night",
    landmarks: ["Stockholm Central", "Sergels torg", "Kungsträdgården", "Skeppsholmen"] }),
  s({ slug: "vasastan", name: "Vasastan", inner: true, at: [59.34432, 18.04515],
    description: "A lively residential district of 19th-century blocks around Odenplan, Sankt Eriksplan and Vasaparken, full of cafés and restaurants. The Stockholm School of Economics is on Sveavägen.",
    rent: "SEK 7,000–9,500/mo", safety: 8.8, transport: 9.6, nightlife: 8.0, studentFit: 9.2,
    commute: "SSE on site; 10–15 min to KTH and SU", bestFor: "SSE students and anyone who wants a classic inner-city neighbourhood", caution: "One of the most sought-after sublet areas; expect competition",
    landmarks: ["Stockholm School of Economics", "Odenplan", "Vasaparken", "Sankt Eriksplan"] }),
  s({ slug: "ostermalm", name: "Östermalm", inner: true, at: [59.33738, 18.08521],
    description: "Stockholm's most upmarket district: grand apartment blocks, Östermalmshallen food hall, Karlaplan and the bars and clubs of Stureplan. KTH's main campus is just to the north.",
    rent: "SEK 8,000–10,500/mo", safety: 9.0, transport: 9.4, nightlife: 9.2, studentFit: 8.2,
    commute: "5–15 min to KTH; 15 min to SU", bestFor: "KTH students who can afford a central address", caution: "Stockholm's highest rents",
    landmarks: ["Stureplan", "Östermalmshallen", "Karlaplan"] }),
  s({ slug: "norra-djurgarden", name: "Norra Djurgården", inner: true, at: [59.36185, 18.06947],
    description: "Stockholm's main campus area inside the Royal National City Park: KTH's main campus, Stockholm University's Frescati campus, the shared Albano campus and the Lappis student village. Most housing here is student housing.",
    rent: "SEK 4,500–6,500/mo (student housing)", safety: 8.8, transport: 8.6, nightlife: 5.0, studentFit: 9.6,
    commute: "KTH and SU on site", bestFor: "KTH and SU students in student housing", caution: "Few private rentals; student-housing queues are long",
    landmarks: ["KTH (Valhallavägen)", "Stockholm University (Frescati)", "Albano campus", "Lappis student housing"] }),
  s({ slug: "djurgarden-gardet", name: "Djurgården, Gärdet & Hjorthagen", inner: true, at: [59.33643, 18.11966],
    description: "Green eastern areas: the island of Djurgården with Skansen and the Vasa Museum, the open fields of Gärdet, and the new Hjorthagen/Norra Djurgårdsstaden flats near Ropsten.",
    rent: "SEK 7,000–9,500/mo", safety: 9.0, transport: 8.0, nightlife: 4.0, studentFit: 7.2,
    commute: "10–20 min to KTH and SU", bestFor: "Green space close to the center", caution: "Few rentals; Djurgården itself is mostly parkland",
    landmarks: ["Vasa Museum", "Skansen", "Gärdet", "Ropsten"] }),
  s({ slug: "kungsholmen", name: "Kungsholmen", inner: true, at: [59.32909, 18.01531],
    description: "An island district west of the center with the City Hall, waterfront walks and Fridhemsplan's shops. Karolinska Institutet's Solna campus is just across the city line.",
    rent: "SEK 6,500–9,000/mo", safety: 8.8, transport: 9.4, nightlife: 7.0, studentFit: 8.2,
    commute: "10–15 min to KTH and SU; 10 min to KI Solna", bestFor: "KI students and calm inner-city living", caution: "Expensive and in high demand",
    landmarks: ["Stockholm City Hall", "Fridhemsplan"] }),
  s({ slug: "sodermalm", name: "Södermalm", inner: true, at: [59.31379, 18.068],
    description: "Söder: the creative south island with SoFo's boutiques, Hornstull, Medborgarplatsen and Fotografiska — and Gamla stan, the old town, which belongs to this district.",
    rent: "SEK 6,500–9,000/mo", safety: 8.2, transport: 9.4, nightlife: 9.4, studentFit: 8.8,
    commute: "15–20 min to KTH and SU", bestFor: "Nightlife, cafés and creative scene", caution: "Very competitive sublet market",
    landmarks: ["Gamla stan", "SoFo", "Medborgarplatsen", "Hornstull", "Fotografiska"] }),
  s({ slug: "bromma", name: "Bromma", at: [59.34114, 17.93586],
    description: "Green, well-off western suburbs with villas and lakeside walks, around Alvik and Bromma Airport, on the green metro line and the Tvärbanan tram.",
    rent: "SEK 5,500–7,500/mo", safety: 9.0, transport: 7.8, nightlife: 3.5, studentFit: 6.8,
    commute: "20–30 min to KTH and SU", bestFor: "Quiet, green surroundings", caution: "Few student sublets; little nightlife",
    landmarks: ["Alvik", "Bromma Airport"] }),
  s({ slug: "jarva", name: "Järva", at: [59.3977, 17.91182],
    description: "The north-western district formed by Rinkeby-Kista and Spånga-Tensta: Kista Science City with KTH's Kista campus and tech companies, plus diverse neighborhoods like Rinkeby and Tensta on the blue metro line.",
    rent: "SEK 4,500–6,000/mo", safety: 6.4, transport: 7.8, nightlife: 3.0, studentFit: 7.0,
    commute: "KTH Kista on site; 25–30 min to central Stockholm", bestFor: "KTH Kista students and low rents", caution: "Parts of the area have higher crime rates; check the exact neighborhood",
    landmarks: ["Kista Science City", "KTH Kista", "Tensta"] }),
  s({ slug: "hasselby-vallingby", name: "Hässelby-Vällingby", at: [59.37153, 17.83324],
    description: "Western suburbs around Vällingby centrum, one of the first planned suburbs in Europe, at the end of the green metro line.",
    rent: "SEK 4,800–6,500/mo", safety: 8.0, transport: 7.2, nightlife: 3.0, studentFit: 6.4,
    commute: "30–40 min to KTH and SU", bestFor: "More space at lower rents", caution: "Long commute",
    landmarks: ["Vällingby centrum"] }),
  s({ slug: "hagersten-alvsjo", name: "Hägersten-Älvsjö", at: [59.29282, 17.9897],
    description: "South-western areas from trendy Liljeholmen and Hägerstensåsen to Älvsjö with the Stockholmsmässan fair, plus the Konstfack art school at Telefonplan.",
    rent: "SEK 5,500–7,500/mo", safety: 8.4, transport: 8.4, nightlife: 5.0, studentFit: 7.8,
    commute: "Konstfack on site; 20–25 min to KTH and SU", bestFor: "Konstfack students and good-value living near Söder", caution: "Popular around Liljeholmen",
    landmarks: ["Liljeholmen", "Konstfack (Telefonplan)", "Stockholmsmässan"] }),
  s({ slug: "skarholmen", name: "Skärholmen", at: [59.28509, 17.90607],
    description: "South-western suburbs around the large Skärholmen shopping center, on the red metro line.",
    rent: "SEK 4,500–6,000/mo", safety: 7.0, transport: 7.4, nightlife: 2.5, studentFit: 6.0,
    commute: "30–40 min to KTH and SU", bestFor: "Low rents", caution: "Far from campuses and nightlife",
    landmarks: ["Skärholmen centrum"] }),
  s({ slug: "enskede-arsta-vantor", name: "Enskede-Årsta-Vantör", at: [59.27813, 18.05133],
    description: "Southern districts with garden-city Enskede, Årsta and the Avicii Arena (Globen) area, on the green metro line and the Tvärbanan tram.",
    rent: "SEK 5,000–7,000/mo", safety: 7.8, transport: 8.0, nightlife: 4.0, studentFit: 7.2,
    commute: "20–30 min to KTH and SU", bestFor: "Mid-range rents close to Söder", caution: "Outer parts are quieter and farther away",
    landmarks: ["Avicii Arena (Globen)", "Årsta"] }),
  s({ slug: "skarpnack", name: "Skarpnäck", at: [59.26399, 18.14124],
    description: "South-eastern suburbs next to the Nacka nature reserve, at the end of the green metro line.",
    rent: "SEK 5,000–6,800/mo", safety: 8.0, transport: 7.2, nightlife: 3.0, studentFit: 6.6,
    commute: "25–35 min to KTH and SU", bestFor: "Nature on the doorstep", caution: "Little student life",
    landmarks: ["Skarpnäck"] }),
  s({ slug: "farsta", name: "Farsta", at: [59.25187, 18.09187],
    description: "Southern suburbs around Farsta centrum and its lakes, on the green metro line and commuter trains.",
    rent: "SEK 4,800–6,500/mo", safety: 7.8, transport: 7.6, nightlife: 3.0, studentFit: 6.4,
    commute: "30–40 min to KTH and SU", bestFor: "Lower rents with direct metro", caution: "Long commute",
    landmarks: ["Farsta centrum"] }),
  s({ slug: "solna", name: "Solna", badge: "Neighbouring municipality", at: [59.36908, 18.0083],
    description: "A separate municipality bordering the inner city to the north-west, home to Karolinska Institutet's main campus and Karolinska University Hospital, the Hagaparken royal park and the Mall of Scandinavia. Served by the blue metro line, commuter trains and the Tvärbanan tram.",
    rent: "SEK 6,000–8,000/mo", safety: 8.6, transport: 8.8, nightlife: 4.5, studentFit: 8.4,
    commute: "KI Solna on site; 15–20 min to KTH and SU", bestFor: "Karolinska Institutet students", caution: "Popular with KI students; rooms near campus go fast",
    landmarks: ["Karolinska Institutet (Solna)", "Karolinska University Hospital", "Hagaparken", "Mall of Scandinavia"] }),
  s({ slug: "sundbyberg", name: "Sundbyberg", badge: "Neighbouring municipality", at: [59.37826, 17.96007],
    description: "Sweden's smallest municipality by area, a compact town just north-west of the city with its own centre, the blue metro line, commuter trains and the Tvärbanan tram.",
    rent: "SEK 5,500–7,500/mo", safety: 8.0, transport: 8.6, nightlife: 4.0, studentFit: 7.4,
    commute: "15–20 min to KI Solna; 20–30 min to KTH and SU", bestFor: "Lower rents with fast links to the center", caution: "Little student life of its own",
    landmarks: ["Sundbybergs centrum"] }),
  s({ slug: "lidingo", name: "Lidingö", badge: "Neighbouring municipality", at: [59.36624, 18.17941],
    description: "An island municipality north-east of the city, mostly villas and nature, linked by the Lidingöbanan tram to Ropsten at the end of the red metro line.",
    rent: "SEK 6,000–8,000/mo", safety: 9.2, transport: 6.6, nightlife: 2.5, studentFit: 6.0,
    commute: "20–30 min to KTH; 25–35 min to SU", bestFor: "Quiet island living with nature around", caution: "Few rooms for rent; you change at Ropsten for almost every trip",
    landmarks: ["Lidingö centrum", "Lidingöbanan tram"] }),
  s({ slug: "danderyd", name: "Danderyd", badge: "Neighbouring municipality", at: [59.40604, 18.05485],
    description: "An affluent villa municipality north of the city, with Danderyd Hospital and Mörby centrum at the end of the red metro line and the Roslagsbanan train.",
    rent: "SEK 6,000–8,000/mo", safety: 9.2, transport: 7.4, nightlife: 2.0, studentFit: 6.2,
    commute: "15–25 min to SU and KTH", bestFor: "Quiet, safe surroundings near the northern campuses", caution: "Very few rentals; mostly rooms in family homes",
    landmarks: ["Danderyd Hospital", "Mörby centrum"] }),
  s({ slug: "nacka", name: "Nacka", badge: "Neighbouring municipality", at: [59.30048, 18.25437],
    description: "A large municipality east of Södermalm, from the Sickla and Nacka Forum areas to the Saltsjöbaden coast, reached by bus and the Saltsjöbanan train from Slussen.",
    rent: "SEK 5,500–7,500/mo", safety: 8.4, transport: 6.8, nightlife: 3.0, studentFit: 6.4,
    commute: "20–35 min to KTH and SU via Slussen", bestFor: "Nature and the sea close to Söder", caution: "No metro yet — buses can be slow at rush hour",
    landmarks: ["Nacka Forum", "Sickla", "Nackareservatet"] }),
  s({ slug: "huddinge", name: "Huddinge", badge: "Neighbouring municipality", at: [59.214, 18.01642],
    description: "A large southern municipality whose Flemingsberg campus hosts Karolinska Institutet, Södertörn University and part of KTH, about a quarter of an hour from Stockholm City by commuter train.",
    rent: "SEK 4,800–6,500/mo", safety: 7.6, transport: 7.2, nightlife: 2.5, studentFit: 7.6,
    commute: "Flemingsberg campus on site; 15–20 min by commuter train to the center", bestFor: "KI Flemingsberg, Södertörn and KTH Flemingsberg students", caution: "Far from the inner-city campuses and nightlife",
    landmarks: ["Flemingsberg campus", "Södertörn University", "KI Flemingsberg"] }),
];

export type StockholmStadsdelListing = Listing & { stadsdelSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const stockholmListings: StockholmStadsdelListing[] = [
  { id: "st-sample-kth-room", stadsdelSlug: "ostermalm", title: "Sublet room near KTH", rent: 7500, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 59.3420, lng: 18.0780, description: "Furnished room in a two-room flat on Östermalm, a 5-minute walk to KTH.", rooms: 1, sizeSqm: 12, availableFrom: "15 Aug 2026", amenities: ["Furnished", "Landlord consent confirmed"] },
  { id: "st-sample-lappis-room", stadsdelSlug: "norra-djurgarden", title: "Corridor room near Frescati", rent: 5200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 59.3660, lng: 18.0510, description: "Corridor room with a shared kitchen, a short walk to Stockholm University.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Shared kitchen"] },
  { id: "st-sample-soder-room", stadsdelSlug: "sodermalm", title: "Room on Söder", rent: 7200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3140, lng: 18.0700, description: "Room in a shared flat near Medborgarplatsen.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "st-sample-kungsholmen-studio", stadsdelSlug: "kungsholmen", title: "Studio on Kungsholmen", rent: 11500, currency: "SEK ", type: "Studio", source: SAMPLE_SOURCE, lat: 59.3330, lng: 18.0300, description: "Sublet one-room flat near Fridhemsplan, 10 minutes to KI Solna.", rooms: 1, sizeSqm: 26, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "st-sample-liljeholmen-room", stadsdelSlug: "hagersten-alvsjo", title: "Room in Liljeholmen", rent: 6300, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3080, lng: 18.0200, description: "Room in a newer flat on the red metro line, close to Söder.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "st-sample-kista-room", stadsdelSlug: "jarva", title: "Room near KTH Kista", rent: 5200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.4030, lng: 17.9450, description: "Room in a shared flat close to Kista Science City and the blue line.", rooms: 1, sizeSqm: 12, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "st-sample-arsta-room", stadsdelSlug: "enskede-arsta-vantor", title: "Room in Årsta", rent: 5800, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.2980, lng: 18.0600, description: "Quiet room with the Tvärbanan tram and buses to Söder.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "st-sample-bromma-room", stadsdelSlug: "bromma", title: "Room in a Bromma villa", rent: 5900, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3380, lng: 17.9750, description: "Room in a family house near Alvik, with the green line to the center.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Garden"] },
  { id: "st-sample-farsta-room", stadsdelSlug: "farsta", title: "Room in Farsta", rent: 5000, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.2450, lng: 18.0900, description: "Room in a shared flat near Farsta centrum and the metro.", rooms: 1, sizeSqm: 12, availableFrom: "1 Nov 2026", amenities: ["Furnished"] },
  { id: "st-sample-vasastan-room", stadsdelSlug: "vasastan", title: "Room near Odenplan", rent: 8200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3440, lng: 18.0450, description: "Sublet room in a shared flat a few minutes from Odenplan and SSE.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Landlord consent confirmed"] },
  { id: "st-sample-solna-room", stadsdelSlug: "solna", title: "Room near KI Solna", rent: 6800, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 59.3600, lng: 18.0000, description: "Room in a shared flat near Solna centrum, a short tram ride to Karolinska Institutet.", rooms: 1, sizeSqm: 12, availableFrom: "15 Aug 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "st-sample-flemingsberg-room", stadsdelSlug: "huddinge", title: "Room in Flemingsberg", rent: 5200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.2230, lng: 17.9500, description: "Room in a shared flat a short walk from the Flemingsberg campus and commuter train.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
];

export function getStockholmStadsdelBySlug(slug: string): StockholmStadsdel | undefined {
  return stockholmStadsdelar.find((x) => x.slug === slug);
}

export function getStockholmListingsForStadsdel(slug: string | null): StockholmStadsdelListing[] {
  if (!slug) return [];
  return stockholmListings.filter((l) => l.stadsdelSlug === slug);
}
