import type { Listing } from "./listings";

// Amsterdam's stadsdelen, plus the Weesp stadsgebied and the Westpoort port area.
// Boundaries: Gemeente Amsterdam, Kernregistratie gebieden (CC0), credited in AmsterdamExplorer.
// Room prices are estimated ranges; scores are editorial judgments.

export type AmsterdamStadsdeel = {
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

type Base = Omit<AmsterdamStadsdeel, "lat" | "lng" | "badge"> & { at: [number, number]; badge?: string };
const s = ({ at, badge = "Stadsdeel", ...rest }: Base): AmsterdamStadsdeel => ({ ...rest, badge, lat: at[0], lng: at[1] });

export const amsterdamStadsdelen: AmsterdamStadsdeel[] = [
  s({ slug: "centrum", name: "Centrum", at: [52.37162, 4.89973],
    description: "The canal ring, the Jordaan, De Wallen and the area around Centraal Station — and the UvA's city-center campuses at Oudemanhuispoort and Roeterseiland.",
    rent: "€1,000–€1,250/mo", safety: 7.6, transport: 9.8, nightlife: 9.8, studentFit: 8.2,
    commute: "UvA city campuses on site; 20 min by bike to the VU", bestFor: "Living on the canals, close to UvA", caution: "Amsterdam's highest rents and tourist crowds",
    landmarks: ["Dam square", "Centraal Station", "Jordaan", "UvA Roeterseiland", "UvA Oudemanhuispoort"] }),
  s({ slug: "west", name: "West", at: [52.37905, 4.8629],
    description: "Lively 19th- and 20th-century neighborhoods just west of the canals: Oud-West, De Baarsjes, Bos en Lommer and the Westerpark with its cultural park.",
    rent: "€900–€1,100/mo", safety: 8.0, transport: 9.2, nightlife: 8.4, studentFit: 8.6,
    commute: "10–15 min by bike to the UvA; 15–20 min to the VU", bestFor: "Cafés, markets and parks close to the center", caution: "Very competitive for shared flats",
    landmarks: ["Westerpark", "De Hallen", "Bos en Lommer"] }),
  s({ slug: "nieuw-west", name: "Nieuw-West", at: [52.36643, 4.80331],
    description: "Spacious post-war garden cities around the Sloterplas lake — Slotervaart, Osdorp and Geuzenveld — with trams and metro line 50 to the rest of the city.",
    rent: "€750–€900/mo", safety: 7.4, transport: 7.8, nightlife: 4.5, studentFit: 7.2,
    commute: "25–30 min to the UvA and the VU", bestFor: "Lower rents and more space", caution: "Far from campus life and nightlife",
    landmarks: ["Sloterplas", "Osdorp"] }),
  s({ slug: "zuid", name: "Zuid", at: [52.34135, 4.87474],
    description: "From De Pijp and the Museumplein to the Zuidas business district and the VU campus — plus the Vondelpark. VU's Uilenstede student campus lies just across the border in Amstelveen.",
    rent: "€950–€1,200/mo", safety: 8.6, transport: 9.4, nightlife: 8.0, studentFit: 8.8,
    commute: "VU and Amsterdam UMC (VUmc) on site; 15 min by bike to the UvA", bestFor: "VU students, De Pijp and the Vondelpark", caution: "Expensive, especially around the Zuidas",
    landmarks: ["VU Amsterdam", "Zuidas", "De Pijp", "Vondelpark", "Rijksmuseum", "RAI"] }),
  s({ slug: "oost", name: "Oost", at: [52.35724, 4.96251],
    description: "Diverse Oost around the Dappermarkt and Oosterpark, the HvA's Amstel campus and the UvA's Science Park, out to the newer island district of IJburg.",
    rent: "€850–€1,050/mo", safety: 8.0, transport: 8.8, nightlife: 7.0, studentFit: 9.0,
    commute: "UvA Science Park and HvA on site; 10–15 min to Roeterseiland", bestFor: "UvA science and HvA students", caution: "IJburg is far from the center",
    landmarks: ["UvA Science Park", "HvA Amstel campus", "Dappermarkt", "Watergraafsmeer", "IJburg", "Amstel station"] }),
  s({ slug: "noord", name: "Noord", at: [52.39996, 4.97616],
    description: "Across the IJ: the creative NDSM wharf, the A'DAM Tower and village-like streets, connected by free ferries and the North-South metro line.",
    rent: "€750–€950/mo", safety: 8.0, transport: 7.8, nightlife: 6.5, studentFit: 7.8,
    commute: "20–25 min to the UvA by ferry or metro; 25–30 min to the VU", bestFor: "Creative scene and more space for the money", caution: "Depends on ferries or the metro to cross the IJ",
    landmarks: ["NDSM wharf", "A'DAM Tower"] }),
  s({ slug: "zuidoost", name: "Zuidoost", at: [52.30588, 4.96922],
    description: "The Bijlmer and Gaasperdam: a green, multicultural district with the Johan Cruijff ArenA, the Ziggo Dome and the Amsterdam UMC (AMC) hospital and medical faculty.",
    rent: "€700–€900/mo", safety: 7.0, transport: 8.0, nightlife: 5.0, studentFit: 7.6,
    commute: "AMC on site; 20–25 min to the UvA by metro", bestFor: "Medicine students at the AMC and lower rents", caution: "Some areas feel unsafe at night",
    landmarks: ["Amsterdam UMC (AMC)", "Johan Cruijff ArenA", "Bijlmer ArenA station"] }),
  s({ slug: "weesp", name: "Weesp", badge: "Stadsgebied", at: [52.30398, 5.05441],
    description: "A historic fortified town that became part of Amsterdam in 2022, with its own station and direct trains to the city.",
    rent: "€700–€900/mo", safety: 8.8, transport: 7.0, nightlife: 3.0, studentFit: 6.2,
    commute: "20–30 min by train to the UvA and the VU", bestFor: "A quiet small-town feel", caution: "Little student life",
    landmarks: ["Weesp station"] }),
  s({ slug: "westpoort", name: "Westpoort", badge: "Port area", at: [52.40976, 4.80034],
    description: "Amsterdam's port and industrial area west of the city, with offices and warehouses but hardly any homes.",
    rent: "Hardly any housing", safety: 6.0, transport: 6.0, nightlife: 2.0, studentFit: 2.0,
    commute: "Not a residential area", bestFor: "Not suitable for living", caution: "Almost no residential housing",
    landmarks: ["Port of Amsterdam"] }),
];

export type AmsterdamStadsdeelListing = Listing & { stadsdeelSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const amsterdamListings: AmsterdamStadsdeelListing[] = [
  { id: "am-sample-roeterseiland-room", stadsdeelSlug: "centrum", title: "Room near Roeterseiland", rent: 1050, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 52.3650, lng: 4.9120, description: "Room in a shared flat in the Plantage, a 5-minute walk to the UvA Roeterseiland campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Registration possible"] },
  { id: "am-sample-jordaan-studio", stadsdeelSlug: "centrum", title: "Studio in the Jordaan", rent: 1650, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 52.3760, lng: 4.8820, description: "Small furnished studio in a canal-side building in the Jordaan.", rooms: 1, sizeSqm: 24, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "am-sample-sciencepark-room", stadsdeelSlug: "oost", title: "Room near Science Park", rent: 880, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 52.3560, lng: 4.9540, description: "Room in a student complex a short bike ride from UvA Science Park.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Registration possible"] },
  { id: "am-sample-vu-room", stadsdeelSlug: "zuid", title: "Room near the VU", rent: 950, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.3330, lng: 4.8720, description: "Room in Buitenveldert, a 5-minute bike ride to the VU campus.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "am-sample-pijp-room", stadsdeelSlug: "zuid", title: "Room in De Pijp", rent: 1100, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.3545, lng: 4.8935, description: "Room in a shared flat near the Albert Cuyp market.", rooms: 1, sizeSqm: 11, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "am-sample-west-room", stadsdeelSlug: "west", title: "Room in Oud-West", rent: 980, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.3670, lng: 4.8680, description: "Room near De Hallen and the Kinkerstraat, 10 minutes by bike to the UvA.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "am-sample-noord-room", stadsdeelSlug: "noord", title: "Room in Noord", rent: 820, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.3950, lng: 4.9100, description: "Room in a shared house close to the ferry to Centraal Station.", rooms: 1, sizeSqm: 14, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Garden"] },
  { id: "am-sample-zuidoost-room", stadsdeelSlug: "zuidoost", title: "Room near the AMC", rent: 760, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.3150, lng: 4.9550, description: "Room shared with medicine students, near metro line 54.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "am-sample-nieuwwest-room", stadsdeelSlug: "nieuw-west", title: "Room by the Sloterplas", rent: 800, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.3650, lng: 4.8100, description: "Spacious room with tram 1 to the center.", rooms: 1, sizeSqm: 15, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Balcony"] },
];

export function getAmsterdamStadsdeelBySlug(slug: string): AmsterdamStadsdeel | undefined {
  return amsterdamStadsdelen.find((x) => x.slug === slug);
}

export function getAmsterdamListingsForStadsdeel(slug: string | null): AmsterdamStadsdeelListing[] {
  if (!slug) return [];
  return amsterdamListings.filter((l) => l.stadsdeelSlug === slug);
}
