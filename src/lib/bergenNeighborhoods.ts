import type { Listing } from "./listings";

// Bergen's 8 boroughs (bydeler). Boundaries: © OpenStreetMap contributors (ODbL), credited in BergenExplorer —
// the municipality's own borough layer has no stated open licence.
// NHH (Norwegian School of Economics, home of CEMS) is in Ytre Sandviken, borough Bergenhus.
// Commute times refer to NHH. Room prices are estimated monthly ranges for a room in a shared flat;
// scores are editorial judgments.

export type BergenBydel = {
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

type Base = Omit<BergenBydel, "lat" | "lng" | "badge"> & { at: [number, number]; inner?: boolean };
const s = ({ at, inner = false, ...rest }: Base): BergenBydel => ({
  ...rest,
  badge: inner ? "Central Bergen" : "Outer borough",
  lat: at[0],
  lng: at[1],
});

export const bergenBydeler: BergenBydel[] = [
  s({ slug: "bergenhus", name: "Bergenhus", inner: true, at: [60.3975, 5.3245],
    description: "Central Bergen: Bryggen and the harbour, Nordnes, the student streets of Møhlenpris, the University of Bergen's campus on Nygårdshøyden and Sandviken to the north — where NHH sits on the hillside at Helleveien.",
    rent: "NOK 6,500–9,000/mo", safety: 8.6, transport: 9.4, nightlife: 9.0, studentFit: 9.4,
    commute: "NHH on site in Sandviken; 10–20 min by bus from the centre", bestFor: "NHH and UiB students who want city life", caution: "Highest rents; Sandviken is steep and the centre can be loud at weekends",
    landmarks: ["NHH Norwegian School of Economics", "Bryggen", "University of Bergen (Nygårdshøyden)", "Møhlenpris", "Sandviken", "Bergen station", "Fløyen"] }),
  s({ slug: "arstad", name: "Årstad", inner: true, at: [60.3729, 5.3471],
    description: "South of the centre around Danmarksplass and Kronstad, with Western Norway University of Applied Sciences' Kronstad campus and the large Fantoft student village, all on the Bybanen light rail.",
    rent: "NOK 5,500–7,500/mo", safety: 8.4, transport: 9.0, nightlife: 6.0, studentFit: 8.8,
    commute: "25–35 min by Bybanen and bus", bestFor: "Students on a budget who want quick links to the centre", caution: "Busy roads around Danmarksplass",
    landmarks: ["Fantoft student village", "Western Norway University of Applied Sciences (Kronstad)", "Danmarksplass"] }),
  s({ slug: "asane", name: "Åsane", at: [60.4661, 5.324],
    description: "The northern borough around the Åsane shopping centre — the closest outer borough to NHH, with buses along the main road into Sandviken.",
    rent: "NOK 5,000–6,800/mo", safety: 8.6, transport: 7.4, nightlife: 2.5, studentFit: 7.2,
    commute: "15–25 min by bus", bestFor: "NHH students who want more space for less", caution: "Car-oriented suburbs; little student life",
    landmarks: ["Åsane senter"] }),
  s({ slug: "laksevag", name: "Laksevåg", at: [60.387, 5.29],
    description: "Across Puddefjorden from the centre, from waterfront Damsgård to the suburbs of Loddefjord in the west.",
    rent: "NOK 5,000–6,800/mo", safety: 8.2, transport: 7.6, nightlife: 3.0, studentFit: 7.0,
    commute: "25–35 min by bus", bestFor: "Lower rents close to the centre", caution: "Outer parts depend on buses",
    landmarks: ["Damsgård", "Loddefjord"] }),
  s({ slug: "fyllingsdalen", name: "Fyllingsdalen", at: [60.348, 5.291],
    description: "A residential valley west of Ulriken around the Oasen shopping centre, linked to the centre by Bybanen line 2.",
    rent: "NOK 5,000–6,800/mo", safety: 8.2, transport: 8.0, nightlife: 2.5, studentFit: 6.8,
    commute: "30–35 min by Bybanen and bus", bestFor: "Affordable flats on the light rail", caution: "Quiet; few student flats",
    landmarks: ["Oasen"] }),
  s({ slug: "fana", name: "Fana", at: [60.32, 5.355],
    description: "Bergen's most populous borough in the south, from Paradis and Nesttun on the Bybanen line to lakes, farms and hiking areas further out.",
    rent: "NOK 5,000–7,000/mo", safety: 8.8, transport: 7.6, nightlife: 2.5, studentFit: 6.8,
    commute: "35–45 min by Bybanen and bus", bestFor: "Nature and space along the light rail", caution: "Long commute to NHH",
    landmarks: ["Nesttun", "Paradis"] }),
  s({ slug: "ytrebygda", name: "Ytrebygda", at: [60.293, 5.2181],
    description: "South-western borough with Bergen Airport Flesland, the Sandsli business area and the Bybanen terminus.",
    rent: "NOK 4,800–6,500/mo", safety: 8.6, transport: 7.0, nightlife: 1.5, studentFit: 5.8,
    commute: "45–55 min by Bybanen and bus", bestFor: "Students who work near the airport", caution: "Far from NHH and the centre",
    landmarks: ["Bergen Airport Flesland"] }),
  s({ slug: "arna", name: "Arna", at: [60.42, 5.466],
    description: "East of Ulriken, linked to Bergen station by a short train ride through the mountain, with quiet villages around the fjord.",
    rent: "NOK 4,500–6,000/mo", safety: 8.8, transport: 6.8, nightlife: 1.0, studentFit: 5.6,
    commute: "30–40 min by train and bus", bestFor: "The lowest rents with a fast train to the centre", caution: "Little going on locally",
    landmarks: ["Arna station"] }),
];

export type BergenBydelListing = Listing & { bydelSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const bergenListings: BergenBydelListing[] = [
  { id: "bg-sample-sandviken-room", bydelSlug: "bergenhus", title: "Room in Sandviken near NHH", rent: 6800, currency: "NOK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.42, lng: 5.308, description: "Furnished room in a three-person kollektiv, a 10-minute walk to NHH.", rooms: 1, sizeSqm: 13, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Internet included"] },
  { id: "bg-sample-mohlenpris-room", bydelSlug: "bergenhus", title: "Room in Møhlenpris", rent: 7200, currency: "NOK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.384, lng: 5.317, description: "Room in a student kollektiv close to the University of Bergen and the centre.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Washing machine"] },
  { id: "bg-sample-nordnes-studio", bydelSlug: "bergenhus", title: "Hybel on Nordnes", rent: 11500, currency: "NOK ", type: "Studio", source: SAMPLE_SOURCE, lat: 60.397, lng: 5.31, description: "Furnished studio with its own kitchen in a wooden house on Nordnes.", rooms: 1, sizeSqm: 22, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Private bathroom", "Electricity included"], riskNote: "Higher caution" },
  { id: "bg-sample-fantoft-room", bydelSlug: "arstad", title: "Room near Fantoft", rent: 4800, currency: "NOK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.346, lng: 5.353, description: "Room with a shared kitchen near the Fantoft Bybanen stop.", rooms: 1, sizeSqm: 11, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Shared kitchen"] },
  { id: "bg-sample-danmarksplass-room", bydelSlug: "arstad", title: "Room by Danmarksplass", rent: 6200, currency: "NOK ", type: "Room", source: SAMPLE_SOURCE, lat: 60.373, lng: 5.346, description: "Room in a shared flat on the Bybanen line.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Furnished"] },
  { id: "bg-sample-asane-room", bydelSlug: "asane", title: "Room in Åsane", rent: 5600, currency: "NOK ", type: "Room", source: SAMPLE_SOURCE, lat: 60.466, lng: 5.324, description: "Room in a house with a direct bus to Sandviken and NHH.", rooms: 1, sizeSqm: 14, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Parking"] },
  { id: "bg-sample-laksevag-room", bydelSlug: "laksevag", title: "Room in Laksevåg", rent: 5500, currency: "NOK ", type: "Room", source: SAMPLE_SOURCE, lat: 60.387, lng: 5.29, description: "Room in a shared flat across the harbour from the centre.", rooms: 1, sizeSqm: 12, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Sea view"] },
];

export function getBergenBydelBySlug(slug: string): BergenBydel | undefined {
  return bergenBydeler.find((x) => x.slug === slug);
}

export function getBergenListingsForBydel(slug: string | null): BergenBydelListing[] {
  if (!slug) return [];
  return bergenListings.filter((l) => l.bydelSlug === slug);
}
