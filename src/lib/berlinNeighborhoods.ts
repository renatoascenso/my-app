import type { Listing } from "./listings";

// Berlin's 12 boroughs (Bezirke). Each panel names the neighborhoods (Ortsteile) inside it.
// Boundaries: Geoportal Berlin / ALKIS Berlin Bezirke (Datenlizenz Deutschland – Zero 2.0),
// credited in BerlinExplorer. Room prices are estimated WG ranges; scores are editorial judgments.

export type BerlinBezirk = {
  slug: string;
  name: string;
  number: number;
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

export const berlinBezirke: BerlinBezirk[] = [
  {
    slug: "mitte", name: "Mitte", number: 1, lat: 52.53287, lng: 13.3659,
    description: "The historic center (Mitte proper, with Museum Island and Unter den Linden) plus the more affordable, multicultural Wedding and Moabit. Home to Humboldt University's main building, the Charité and BHT in Wedding.",
    rent: "€600–€800/mo", safety: 7.4, transport: 10, nightlife: 8.5, studentFit: 8.4,
    commute: "HU and Charité on site; 15 min to TU, 30–35 min to FU",
    bestFor: "HU and Charité students; Wedding for lower rents", caution: "Mitte proper is pricey; parts of Wedding and Moabit are rougher",
    landmarks: ["Humboldt University", "Charité", "Brandenburg Gate", "Alexanderplatz", "Berlin Hbf", "Leopoldplatz (Wedding)", "Turmstraße (Moabit)"],
  },
  {
    slug: "friedrichshain-kreuzberg", name: "Friedrichshain-Kreuzberg", number: 2, lat: 52.50382, lng: 13.42824,
    description: "Berlin's student and nightlife heartland: Friedrichshain around Boxhagener Platz and the RAW grounds, and Kreuzberg with its canal, Görlitzer Park and Bergmannkiez. Young, international and loud.",
    rent: "€600–€800/mo", safety: 7.0, transport: 9.4, nightlife: 10, studentFit: 9.2,
    commute: "15–20 min to HU, 25 min to TU, 35–40 min to FU",
    bestFor: "Nightlife, cafés and the classic Berlin student life", caution: "Very competitive WG market; drug dealing around some parks and stations",
    landmarks: ["East Side Gallery", "Boxhagener Platz", "Görlitzer Park", "Bergmannstraße"],
  },
  {
    slug: "pankow", name: "Pankow", number: 3, lat: 52.59719, lng: 13.44025,
    description: "Berlin's most populous borough, from trendy, family-friendly Prenzlauer Berg in the south to quieter Weißensee and Pankow further north.",
    rent: "€580–€760/mo", safety: 8.4, transport: 8.6, nightlife: 7.0, studentFit: 7.8,
    commute: "15–20 min to HU (from Prenzlauer Berg), 40+ min to FU",
    bestFor: "Prenzlauer Berg's cafés and leafy streets", caution: "Prenzlauer Berg is expensive; the north is far from campuses",
    landmarks: ["Kollwitzplatz (Prenzlauer Berg)", "Kulturbrauerei", "Weißer See"],
  },
  {
    slug: "charlottenburg-wilmersdorf", name: "Charlottenburg-Wilmersdorf", number: 4, lat: 52.50104, lng: 13.27023,
    description: "The elegant west around the Kurfürstendamm, Charlottenburg Palace and Savignyplatz, home to the TU Berlin and the Berlin University of the Arts (UdK).",
    rent: "€600–€780/mo", safety: 8.6, transport: 9.0, nightlife: 6.0, studentFit: 8.2,
    commute: "TU and UdK on site; 20 min to HU, 20–25 min to FU",
    bestFor: "TU and UdK students; between TU and FU", caution: "Pricier, more bourgeois and quieter at night",
    landmarks: ["TU Berlin", "UdK Berlin", "Kurfürstendamm", "Charlottenburg Palace", "Olympiastadion"],
  },
  {
    slug: "spandau", name: "Spandau", number: 5, lat: 52.5258, lng: 13.17882,
    description: "An independent-minded borough on the western edge with its own medieval old town and citadel, rivers and forests. More affordable but far from the center.",
    rent: "€450–€600/mo", safety: 7.8, transport: 7.4, nightlife: 3.5, studentFit: 5.8,
    commute: "30–35 min to TU, 40+ min to HU or FU",
    bestFor: "Lower rents and green surroundings", caution: "Long commutes to all universities",
    landmarks: ["Spandau old town"],
  },
  {
    slug: "steglitz-zehlendorf", name: "Steglitz-Zehlendorf", number: 6, lat: 52.43484, lng: 13.23908,
    description: "A green, well-off south-west with lakes and forests, home to the Free University (FU) in Dahlem, the Botanical Garden and the Studentendorf Schlachtensee.",
    rent: "€520–€700/mo", safety: 9.0, transport: 7.8, nightlife: 3.5, studentFit: 7.8,
    commute: "FU on site; 25 min to TU, 35–40 min to HU",
    bestFor: "FU students, lakes and calm", caution: "Quiet — nightlife is a long ride away",
    landmarks: ["Free University (Dahlem)", "Botanical Garden", "Studentendorf Schlachtensee", "Schloßstraße (Steglitz)"],
  },
  {
    slug: "tempelhof-schoeneberg", name: "Tempelhof-Schöneberg", number: 7, lat: 52.44112, lng: 13.38074,
    description: "Lively, diverse Schöneberg in the north, with its café scene and queer culture, and calmer Tempelhof, Mariendorf and Lichtenrade to the south — next to the vast Tempelhofer Feld.",
    rent: "€560–€740/mo", safety: 7.8, transport: 8.6, nightlife: 7.5, studentFit: 7.8,
    commute: "20 min to TU, 25 min to HU, 25–30 min to FU",
    bestFor: "Schöneberg's café and queer scene; central south", caution: "The southern parts are far out",
    landmarks: ["Rathaus Schöneberg"],
  },
  {
    slug: "neukoelln", name: "Neukölln", number: 8, lat: 52.44108, lng: 13.45497,
    description: "North Neukölln (Reuterkiez, Schillerkiez, Rixdorf) is one of Berlin's most popular areas for students and young internationals, with bars and cafés next to the Tempelhofer Feld. The south is suburban.",
    rent: "€520–€720/mo", safety: 6.8, transport: 8.6, nightlife: 9.0, studentFit: 8.6,
    commute: "20–25 min to HU, 30 min to TU, 35 min to FU",
    bestFor: "Young international scene at slightly lower prices", caution: "Rents have risen fast; some streets feel rough at night",
    landmarks: ["Schillerkiez", "Rixdorf (Richardplatz)"],
  },
  {
    slug: "treptow-koepenick", name: "Treptow-Köpenick", number: 9, lat: 52.42959, lng: 13.61122,
    description: "Berlin's largest and greenest borough, with Treptower Park, the Müggelsee lake, historic Köpenick and the Adlershof science campus of Humboldt University.",
    rent: "€480–€650/mo", safety: 8.6, transport: 7.6, nightlife: 4.0, studentFit: 7.2,
    commute: "HU Adlershof and HTW Wilhelminenhof nearby; 30+ min to central campuses",
    bestFor: "Science students at Adlershof, lakes and forest", caution: "Far from the center and nightlife",
    landmarks: ["HU Adlershof campus", "HTW Wilhelminenhof", "Treptower Park", "Müggelsee", "Köpenick Palace"],
  },
  {
    slug: "marzahn-hellersdorf", name: "Marzahn-Hellersdorf", number: 10, lat: 52.52112, lng: 13.57883,
    description: "The eastern borough of large prefab housing estates and the Gardens of the World park. The cheapest rents in Berlin, and home to the Alice Salomon University.",
    rent: "€420–€560/mo", safety: 7.0, transport: 7.2, nightlife: 2.5, studentFit: 5.8,
    commute: "Alice Salomon University on site; 35–45 min to central campuses",
    bestFor: "Lowest rents in the city", caution: "Long commutes and little student life",
    landmarks: ["Gardens of the World", "Alice Salomon University"],
  },
  {
    slug: "lichtenberg", name: "Lichtenberg", number: 11, lat: 52.53491, lng: 13.50976,
    description: "An eastern borough mixing prefab estates, old-Berlin streets and new waterside housing at Rummelsburger Bucht, close to Friedrichshain. Home to HTW's Treskowallee campus and the Tierpark.",
    rent: "€480–€650/mo", safety: 7.4, transport: 8.4, nightlife: 5.0, studentFit: 7.4,
    commute: "HTW Treskowallee nearby; 20–25 min to HU",
    bestFor: "Good value next to Friedrichshain", caution: "Some estates feel anonymous",
    landmarks: ["Tierpark Berlin", "Rummelsburger Bucht", "HTW Treskowallee"],
  },
  {
    slug: "reinickendorf", name: "Reinickendorf", number: 12, lat: 52.59568, lng: 13.29134,
    description: "A green, suburban north-west with Lake Tegel, forests and residential neighborhoods.",
    rent: "€450–€600/mo", safety: 8.0, transport: 7.2, nightlife: 2.5, studentFit: 5.8,
    commute: "30–40 min to HU or TU, 45+ min to FU",
    bestFor: "Lakes and calm at lower rents", caution: "Far from most universities and nightlife",
    landmarks: ["Alt-Tegel"],
  },
];

export type BerlinBezirkListing = Listing & { bezirkSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const berlinListings: BerlinBezirkListing[] = [
  { id: "bl-sample-fhain-room", bezirkSlug: "friedrichshain-kreuzberg", title: "WG room near Boxhagener Platz", rent: 680, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.5105, lng: 13.4590, description: "Room in a 3-person WG in Friedrichshain, Anmeldung possible.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included", "Anmeldung possible"] },
  { id: "bl-sample-xberg-room", bezirkSlug: "friedrichshain-kreuzberg", title: "Room in Kreuzberg by the canal", rent: 720, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.4960, lng: 13.4180, description: "Bright room in an Altbau WG near the Landwehr Canal.", rooms: 1, sizeSqm: 16, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "bl-sample-neukoelln-room", bezirkSlug: "neukoelln", title: "Room in the Schillerkiez", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.4785, lng: 13.4215, description: "Room in an international WG next to the Tempelhofer Feld.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Anmeldung possible"] },
  { id: "bl-sample-wedding-room", bezirkSlug: "mitte", title: "Room in Wedding near BHT", rent: 590, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 52.5455, lng: 13.3560, description: "Room in a student WG close to the BHT campus and the U6 to HU.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "bl-sample-dahlem-room", bezirkSlug: "steglitz-zehlendorf", title: "Room near the FU campus", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 52.4540, lng: 13.2930, description: "Quiet room in a shared house, a 10-minute walk to FU Dahlem.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Garden"] },
  { id: "bl-sample-charlottenburg-studio", bezirkSlug: "charlottenburg-wilmersdorf", title: "Studio near TU Berlin", rent: 850, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 52.5100, lng: 13.3200, description: "Small furnished studio a few minutes from TU and UdK.", rooms: 1, sizeSqm: 22, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Anmeldung possible"], riskNote: "Higher caution" },
  { id: "bl-sample-adlershof-room", bezirkSlug: "treptow-koepenick", title: "Room near HU Adlershof", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.4345, lng: 13.5300, description: "Room in a WG of science students, close to the Adlershof campus.", rooms: 1, sizeSqm: 13, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Bills included"] },
  { id: "bl-sample-pberg-room", bezirkSlug: "pankow", title: "Room in Prenzlauer Berg", rent: 700, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 52.5370, lng: 13.4170, description: "Room in an Altbau WG near Kollwitzplatz.", rooms: 1, sizeSqm: 15, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
];

export function getBerlinBezirkBySlug(slug: string): BerlinBezirk | undefined {
  return berlinBezirke.find((b) => b.slug === slug);
}

export function getBerlinListingsForBezirk(slug: string | null): BerlinBezirkListing[] {
  if (!slug) return [];
  return berlinListings.filter((l) => l.bezirkSlug === slug);
}
