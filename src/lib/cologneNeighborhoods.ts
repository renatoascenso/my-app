import type { Listing } from "./listings";

// Cologne's 9 city districts (Stadtbezirke).
// Boundaries: Stadt Köln, Offene Daten Köln, dl-de/zero-2.0 — credited in CologneExplorer.
// The University of Cologne's main campus (incl. the WiSo faculty, home of CEMS) is in Lindenthal.
// Room prices are estimated ranges for a WG room; scores are editorial judgments.

export type CologneStadtbezirk = {
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

type Base = Omit<CologneStadtbezirk, "lat" | "lng" | "badge"> & { at: [number, number]; bank: "centre" | "left" | "right" };
const BADGES = { centre: "City centre", left: "Left bank of the Rhine", right: "Right bank of the Rhine" } as const;
const s = ({ at, bank, ...rest }: Base): CologneStadtbezirk => ({
  ...rest,
  badge: BADGES[bank],
  lat: at[0],
  lng: at[1],
});

export const cologneStadtbezirke: CologneStadtbezirk[] = [
  s({ slug: "innenstadt", name: "Innenstadt", bank: "centre", at: [50.937, 6.9597],
    description: "Cologne's centre: the cathedral and Altstadt, the Belgisches Viertel's cafés and bars, the student nightlife of the Kwartier Latäng around Zülpicher Straße, the Südstadt — and Deutz across the Rhine with TH Köln's main campus.",
    rent: "€600–800/mo", safety: 7.4, transport: 9.8, nightlife: 9.6, studentFit: 9.2,
    commute: "5–15 min by bike or tram to the University of Cologne", bestFor: "Nightlife and living in the middle of everything", caution: "Most expensive district; loud around the Ringe and Zülpicher Straße at weekends",
    landmarks: ["Cologne Cathedral", "Kwartier Latäng (Zülpicher Straße)", "Belgisches Viertel", "Südstadt", "TH Köln (Deutz campus)", "Köln Hauptbahnhof"] }),
  s({ slug: "lindenthal", name: "Lindenthal", bank: "left", at: [50.9285, 6.905],
    description: "The University of Cologne's main campus with the WiSo faculty, the University Hospital and the German Sport University, plus student favourite Sülz, leafy Klettenberg and the Stadtwald park.",
    rent: "€580–750/mo", safety: 8.8, transport: 8.8, nightlife: 6.8, studentFit: 9.4,
    commute: "University of Cologne on site; Sülz is a 5–10 min walk", bestFor: "University of Cologne and CEMS students", caution: "Sülz is in high demand — expect many applicants per room",
    landmarks: ["University of Cologne (main campus)", "Sülz", "Klettenberg", "University Hospital Cologne", "German Sport University", "Stadtwald"] }),
  s({ slug: "ehrenfeld", name: "Ehrenfeld", bank: "left", at: [50.9579, 6.89],
    description: "Cologne's creative quarter: Venloer Straße's cafés, street art, clubs in old factory halls and a diverse population, with Bickendorf and Bocklemünd further out.",
    rent: "€550–720/mo", safety: 7.6, transport: 8.8, nightlife: 9.0, studentFit: 8.8,
    commute: "10–15 min by bike or tram", bestFor: "Clubs, food and an alternative vibe", caution: "Popular and getting pricier; some streets are loud at night",
    landmarks: ["Venloer Straße", "Ehrenfeld station"] }),
  s({ slug: "nippes", name: "Nippes", bank: "left", at: [50.9857, 6.9463],
    description: "A lively but relaxed northern district around the Neusser Straße market, with Riehl's zoo and Rhine meadows and good tram links to the centre.",
    rent: "€530–680/mo", safety: 8.2, transport: 8.6, nightlife: 6.4, studentFit: 8.2,
    commute: "20–25 min by tram or bike", bestFor: "Neighbourhood feel at fairer rents", caution: "Further from the university than Sülz or Ehrenfeld",
    landmarks: ["Neusser Straße", "Cologne Zoo"] }),
  s({ slug: "rodenkirchen", name: "Rodenkirchen", bank: "left", at: [50.8935, 6.99],
    description: "Southern districts along the Rhine: villa-lined Marienburg, Bayenthal, student-friendly Zollstock and the riverside village of Rodenkirchen with its beach.",
    rent: "€520–680/mo", safety: 8.8, transport: 7.8, nightlife: 4.0, studentFit: 7.4,
    commute: "15–25 min by bike or tram", bestFor: "Green, calm living by the Rhine", caution: "Quieter evenings; outer parts need the tram",
    landmarks: ["Zollstock", "Bayenthal", "Rodenkirchen Rhine beach"] }),
  s({ slug: "kalk", name: "Kalk", bank: "right", at: [50.94, 7.004],
    description: "A former industrial district on the right bank, now diverse and changing fast, with the Köln Arcaden mall and lower rents just east of Deutz.",
    rent: "€480–620/mo", safety: 6.8, transport: 8.4, nightlife: 5.5, studentFit: 7.6,
    commute: "20–30 min by tram", bestFor: "Lower rents close to the centre", caution: "Mixed reputation around Kalk Post at night",
    landmarks: ["Kalk Post", "Köln Arcaden"] }),
  s({ slug: "muelheim", name: "Mülheim", bank: "right", at: [50.965, 7.005],
    description: "North-eastern districts around Wiener Platz and the creative Schanzenstraße, plus quieter Buchheim, Holweide and Dellbrück.",
    rent: "€480–620/mo", safety: 7.0, transport: 8.0, nightlife: 5.5, studentFit: 7.2,
    commute: "25–30 min by tram", bestFor: "Affordable rooms and a creative scene", caution: "Check the exact street around Wiener Platz",
    landmarks: ["Wiener Platz", "Schanzenstraße"] }),
  s({ slug: "porz", name: "Porz", bank: "right", at: [50.88, 7.062],
    description: "South-eastern districts along the Rhine with a small-town centre and Cologne Bonn Airport on the edge.",
    rent: "€450–580/mo", safety: 7.8, transport: 7.0, nightlife: 2.5, studentFit: 6.0,
    commute: "35–45 min by tram or S-Bahn", bestFor: "Low rents and more space", caution: "Long commute; little student life",
    landmarks: ["Porz centre", "Cologne Bonn Airport"] }),
  s({ slug: "chorweiler", name: "Chorweiler", bank: "left", at: [51.026, 6.897],
    description: "The far north of the city, from the high-rise centre of Chorweiler to villages like Worringen near the Rhine.",
    rent: "€420–550/mo", safety: 6.6, transport: 7.0, nightlife: 1.5, studentFit: 5.4,
    commute: "30–40 min by S-Bahn and tram", bestFor: "The lowest rents", caution: "Far from campus; check the area before signing",
    landmarks: ["Chorweiler centre", "Worringen"] }),
];

export type CologneStadtbezirkListing = Listing & { stadtbezirkSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const cologneListings: CologneStadtbezirkListing[] = [
  { id: "kn-sample-suelz-wg", stadtbezirkSlug: "lindenthal", title: "WG room in Sülz", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.922, lng: 6.92, description: "Room in a three-person WG, a 10-minute walk to the University of Cologne.", rooms: 1, sizeSqm: 14, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Balcony", "Bills included"] },
  { id: "kn-sample-lindenthal-studio", stadtbezirkSlug: "lindenthal", title: "Studio near the university", rent: 820, currency: "€", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.9265, lng: 6.9235, description: "Furnished studio next to the main campus and the tram.", rooms: 1, sizeSqm: 24, availableFrom: "1 Apr 2027", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "kn-sample-zuelpicher-wg", stadtbezirkSlug: "innenstadt", title: "WG room in the Kwartier Latäng", rent: 690, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.931, lng: 6.937, description: "Room in a student WG near Zülpicher Platz, 10 minutes by bike to the university.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Wifi included"] },
  { id: "kn-sample-belgisches-wg", stadtbezirkSlug: "innenstadt", title: "Room in the Belgisches Viertel", rent: 750, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.9385, lng: 6.938, description: "Room in an old-building flat with high ceilings near Brüsseler Platz.", rooms: 1, sizeSqm: 16, availableFrom: "1 Mar 2027", amenities: ["Furnished", "Washing machine"] },
  { id: "kn-sample-ehrenfeld-wg", stadtbezirkSlug: "ehrenfeld", title: "WG room on Venloer Straße", rent: 610, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.95, lng: 6.918, description: "Room in a four-person WG close to Ehrenfeld station.", rooms: 1, sizeSqm: 14, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Bills included"] },
  { id: "kn-sample-nippes-wg", stadtbezirkSlug: "nippes", title: "Room in Nippes", rent: 580, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.96, lng: 6.953, description: "Room in a shared flat near the Neusser Straße market.", rooms: 1, sizeSqm: 13, availableFrom: "1 Mar 2027", amenities: ["Furnished"] },
  { id: "kn-sample-zollstock-wg", stadtbezirkSlug: "rodenkirchen", title: "WG room in Zollstock", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.906, lng: 6.94, description: "Room in a quiet WG with a tram line to the centre and the university.", rooms: 1, sizeSqm: 14, availableFrom: "1 Apr 2027", amenities: ["Furnished", "Balcony"] },
  { id: "kn-sample-kalk-wg", stadtbezirkSlug: "kalk", title: "Room in Kalk", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.9395, lng: 7.0, description: "Room in a renovated shared flat near Kalk Post.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Bills included"] },
];

export function getCologneStadtbezirkBySlug(slug: string): CologneStadtbezirk | undefined {
  return cologneStadtbezirke.find((x) => x.slug === slug);
}

export function getCologneListingsForStadtbezirk(slug: string | null): CologneStadtbezirkListing[] {
  if (!slug) return [];
  return cologneListings.filter((l) => l.stadtbezirkSlug === slug);
}
