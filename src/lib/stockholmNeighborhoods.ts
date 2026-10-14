import type { Listing } from "./listings";

// Stockholm's 11 district areas (stadsdelsområden) as organised since 2023–2025:
// Norrmalm + Östermalm form Norra innerstaden, Rinkeby-Kista + Spånga-Tensta form Järva.
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

type Base = Omit<StockholmStadsdel, "lat" | "lng" | "badge"> & { at: [number, number]; inner?: boolean };
const s = ({ at, inner = false, ...rest }: Base): StockholmStadsdel => ({
  ...rest,
  badge: inner ? "Inner city" : "Outer city",
  lat: at[0],
  lng: at[1],
});

export const stockholmStadsdelar: StockholmStadsdel[] = [
  s({ slug: "norra-innerstaden", name: "Norra innerstaden", inner: true, at: [59.34359, 18.09124],
    description: "Norrmalm and Östermalm: the city center around T-Centralen, Vasastan's cafés, Stureplan's nightlife and Djurgården — plus KTH's main campus, the Stockholm School of Economics and Stockholm University's Frescati campus with the Lappis student village.",
    rent: "SEK 7,000–9,500/mo", safety: 8.6, transport: 9.8, nightlife: 9.0, studentFit: 9.0,
    commute: "KTH, SSE and Stockholm University on site", bestFor: "KTH, SSE and SU students who want everything close by", caution: "Stockholm's highest rents; Östermalm is the priciest",
    landmarks: ["KTH (Valhallavägen)", "Stockholm University (Frescati)", "Lappis student housing", "Stockholm School of Economics", "Albano campus", "Stockholm Central", "Odenplan", "Stureplan", "Djurgården"] }),
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
];

export type StockholmStadsdelListing = Listing & { stadsdelSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const stockholmListings: StockholmStadsdelListing[] = [
  { id: "st-sample-kth-room", stadsdelSlug: "norra-innerstaden", title: "Sublet room near KTH", rent: 7500, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 59.3480, lng: 18.0650, description: "Furnished room in a two-room flat on Östermalm, a 5-minute walk to KTH.", rooms: 1, sizeSqm: 12, availableFrom: "15 Aug 2026", amenities: ["Furnished", "Landlord consent confirmed"] },
  { id: "st-sample-lappis-room", stadsdelSlug: "norra-innerstaden", title: "Corridor room near Frescati", rent: 5200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 59.3660, lng: 18.0510, description: "Corridor room with a shared kitchen, a short walk to Stockholm University.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Shared kitchen"] },
  { id: "st-sample-soder-room", stadsdelSlug: "sodermalm", title: "Room on Söder", rent: 7200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3140, lng: 18.0700, description: "Room in a shared flat near Medborgarplatsen.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "st-sample-kungsholmen-studio", stadsdelSlug: "kungsholmen", title: "Studio on Kungsholmen", rent: 11500, currency: "SEK ", type: "Studio", source: SAMPLE_SOURCE, lat: 59.3330, lng: 18.0300, description: "Sublet one-room flat near Fridhemsplan, 10 minutes to KI Solna.", rooms: 1, sizeSqm: 26, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "st-sample-liljeholmen-room", stadsdelSlug: "hagersten-alvsjo", title: "Room in Liljeholmen", rent: 6300, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3080, lng: 18.0200, description: "Room in a newer flat on the red metro line, close to Söder.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "st-sample-kista-room", stadsdelSlug: "jarva", title: "Room near KTH Kista", rent: 5200, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.4030, lng: 17.9450, description: "Room in a shared flat close to Kista Science City and the blue line.", rooms: 1, sizeSqm: 12, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "st-sample-arsta-room", stadsdelSlug: "enskede-arsta-vantor", title: "Room in Årsta", rent: 5800, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.2980, lng: 18.0600, description: "Quiet room with the Tvärbanan tram and buses to Söder.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "st-sample-bromma-room", stadsdelSlug: "bromma", title: "Room in a Bromma villa", rent: 5900, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.3380, lng: 17.9750, description: "Room in a family house near Alvik, with the green line to the center.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Garden"] },
  { id: "st-sample-farsta-room", stadsdelSlug: "farsta", title: "Room in Farsta", rent: 5000, currency: "SEK ", type: "Room", source: SAMPLE_SOURCE, lat: 59.2450, lng: 18.0900, description: "Room in a shared flat near Farsta centrum and the metro.", rooms: 1, sizeSqm: 12, availableFrom: "1 Nov 2026", amenities: ["Furnished"] },
];

export function getStockholmStadsdelBySlug(slug: string): StockholmStadsdel | undefined {
  return stockholmStadsdelar.find((x) => x.slug === slug);
}

export function getStockholmListingsForStadsdel(slug: string | null): StockholmStadsdelListing[] {
  if (!slug) return [];
  return stockholmListings.filter((l) => l.stadsdelSlug === slug);
}
