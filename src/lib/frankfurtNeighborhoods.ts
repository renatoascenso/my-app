import type { Listing } from "./listings";

// Frankfurt am Main's 16 local districts (Ortsbezirke).
// Boundaries: Stadt Frankfurt am Main, www.frankfurt.de (Datenlizenz Deutschland – Namensnennung 2.0),
// credited in FrankfurtExplorer. Room prices are estimated WG ranges; scores are editorial judgments.

export type FrankfurtOrtsbezirk = {
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

type Base = Omit<FrankfurtOrtsbezirk, "lat" | "lng"> & { at: [number, number] };
const b = ({ at, ...rest }: Base): FrankfurtOrtsbezirk => ({ ...rest, lat: at[0], lng: at[1] });

export const frankfurtOrtsbezirke: FrankfurtOrtsbezirk[] = [
  b({ slug: "innenstadt-i", name: "Innenstadt I", number: 1, at: [50.10431, 8.65099],
    description: "The city center with the Römer, the Zeil shopping street and the skyscrapers, plus the Bahnhofsviertel, Gutleut and the Gallus with the new Europaviertel.",
    rent: "€650–€800/mo", safety: 7.0, transport: 10, nightlife: 9.0, studentFit: 7.6,
    commute: "10–15 min to the Westend campus", bestFor: "Central living and nightlife", caution: "The Bahnhofsviertel has a visible drug scene",
    landmarks: ["Römer", "Zeil", "Main Tower", "Hauptbahnhof", "Bahnhofsviertel", "Europaviertel"] }),
  b({ slug: "innenstadt-ii", name: "Innenstadt II", number: 2, at: [50.12068, 8.6445],
    description: "Westend and Bockenheim: Goethe University's main Westend campus and the older Bockenheim campus, the Palmengarten, the Messe trade fair and lively Leipziger Straße.",
    rent: "€650–€820/mo", safety: 8.6, transport: 9.4, nightlife: 7.8, studentFit: 9.6,
    commute: "Goethe University Westend and Bockenheim on site", bestFor: "Goethe University students", caution: "Westend is among Frankfurt's priciest areas",
    landmarks: ["Goethe University (Westend campus)", "Bockenheimer Warte", "Palmengarten", "Messe Frankfurt"] }),
  b({ slug: "innenstadt-iii", name: "Innenstadt III", number: 3, at: [50.12924, 8.68891],
    description: "The Nordend: Frankfurt's popular café quarter around Oeder Weg and Berger Straße's western end, with the Frankfurt University of Applied Sciences and the Frankfurt School of Finance & Management.",
    rent: "€650–€800/mo", safety: 8.6, transport: 9.0, nightlife: 8.4, studentFit: 9.2,
    commute: "Frankfurt UAS and Frankfurt School on site; 10 min to the Westend campus", bestFor: "Cafés, Altbau flats and student life", caution: "High demand",
    landmarks: ["Frankfurt UAS (Nibelungenplatz)", "Frankfurt School of Finance & Management", "Oeder Weg"] }),
  b({ slug: "bornheim-ostend", name: "Bornheim/Ostend", number: 4, at: [50.12068, 8.71674],
    description: "Bornheim's 'Berger', with apple-wine taverns and markets, and the Ostend around the European Central Bank and the Osthafen.",
    rent: "€620–€780/mo", safety: 8.2, transport: 8.8, nightlife: 8.2, studentFit: 8.6,
    commute: "15–20 min to the Westend campus", bestFor: "Neighborhood life on the Berger Straße", caution: "Popular and competitive",
    landmarks: ["Berger Straße", "European Central Bank"] }),
  b({ slug: "sud", name: "Süd", number: 5, at: [50.06667, 8.63759],
    description: "Sachsenhausen south of the Main with the Museumsufer and apple-wine pubs, the university hospital in Niederrad, the Städelschule, the city forest, the stadium and the airport.",
    rent: "€600–€780/mo", safety: 8.2, transport: 8.4, nightlife: 7.8, studentFit: 8.4,
    commute: "University hospital on site; 15–25 min to the Westend campus", bestFor: "Medicine students and riverside living", caution: "Aircraft noise in the south",
    landmarks: ["Alt-Sachsenhausen", "Museumsufer", "University Hospital (Niederrad)", "Städelschule", "Frankfurt Airport", "Deutsche Bank Park"] }),
  b({ slug: "west", name: "West", number: 6, at: [50.09607, 8.5539],
    description: "The western districts around Höchst's historic old town, Nied, Griesheim and Sossenheim, with S-Bahn links to the center.",
    rent: "€500–€650/mo", safety: 7.2, transport: 7.8, nightlife: 4.5, studentFit: 7.0,
    commute: "20–30 min to the Westend campus", bestFor: "Lower rents", caution: "Far from student life; mixed areas",
    landmarks: ["Höchst old town"] }),
  b({ slug: "mitte-west", name: "Mitte-West", number: 7, at: [50.13517, 8.6127],
    description: "Rödelheim, Hausen and Praunheim: residential areas along the Nidda with good S-Bahn and U-Bahn connections.",
    rent: "€560–€700/mo", safety: 8.0, transport: 8.0, nightlife: 4.5, studentFit: 7.6,
    commute: "15–20 min to the Westend campus", bestFor: "Good value near Bockenheim", caution: "Quiet in the evenings",
    landmarks: ["Rödelheim"] }),
  b({ slug: "nord-west", name: "Nord-West", number: 8, at: [50.16434, 8.62299],
    description: "Heddernheim, Niederursel and the Nordweststadt — including Goethe University's Riedberg science campus, which officially lies in Niederursel.",
    rent: "€560–€700/mo", safety: 8.0, transport: 8.0, nightlife: 4.0, studentFit: 8.2,
    commute: "Riedberg science campus on site; 20 min to the Westend campus", bestFor: "Science students at Riedberg", caution: "Suburban, with little nightlife",
    landmarks: ["Goethe University (Riedberg science campus)", "Nordwestzentrum"] }),
  b({ slug: "mitte-nord", name: "Mitte-Nord", number: 9, at: [50.1503, 8.65912],
    description: "Dornbusch, Eschersheim and Ginnheim: calm residential areas on the U1–U3 lines just north of the Westend campus.",
    rent: "€580–€720/mo", safety: 8.6, transport: 8.4, nightlife: 4.5, studentFit: 8.0,
    commute: "10–15 min to the Westend campus", bestFor: "Quiet living close to the university", caution: "Few bars and cafés",
    landmarks: ["Eschersheim"] }),
  b({ slug: "nord-ost", name: "Nord-Ost", number: 10, at: [50.16372, 8.68834],
    description: "Eckenheim, Preungesheim, Frankfurter Berg and Berkersheim in the north, on the U5 and S-Bahn.",
    rent: "€520–€660/mo", safety: 7.6, transport: 7.6, nightlife: 3.5, studentFit: 6.8,
    commute: "20–30 min to the Westend campus", bestFor: "Lower rents", caution: "Long commute",
    landmarks: [] }),
  b({ slug: "ost", name: "Ost", number: 11, at: [50.13638, 8.74269],
    description: "Seckbach, Riederwald and Fechenheim in the east, with vineyards on the Lohrberg and industry along the Main.",
    rent: "€520–€660/mo", safety: 7.6, transport: 7.4, nightlife: 3.5, studentFit: 6.6,
    commute: "25–30 min to the Westend campus", bestFor: "Low rents and green edges", caution: "Far from campuses",
    landmarks: ["Fechenheim"] }),
  b({ slug: "kalbach-riedberg", name: "Kalbach/Riedberg", number: 12, at: [50.18462, 8.63895],
    description: "The new Riedberg quarter right next to Goethe University's science campus, plus the village of Kalbach.",
    rent: "€560–€700/mo", safety: 8.8, transport: 7.6, nightlife: 3.0, studentFit: 7.8,
    commute: "Next to the Riedberg campus; 25 min to the Westend campus", bestFor: "Living next to the science campus", caution: "Very quiet; few student flatshares",
    landmarks: ["Riedberg"] }),
  b({ slug: "nieder-erlenbach", name: "Nieder-Erlenbach", number: 13, at: [50.20872, 8.70921],
    description: "A village-like district on Frankfurt's northern edge.",
    rent: "€500–€640/mo", safety: 9.0, transport: 5.6, nightlife: 2.0, studentFit: 4.8,
    commute: "35–45 min to the Westend campus", bestFor: "Village calm", caution: "Bus-dependent and far from campuses",
    landmarks: [] }),
  b({ slug: "harheim", name: "Harheim", number: 14, at: [50.18584, 8.68984],
    description: "A small village district in the north with fields along the Nidda.",
    rent: "€500–€640/mo", safety: 9.0, transport: 5.6, nightlife: 2.0, studentFit: 4.8,
    commute: "35–45 min to the Westend campus", bestFor: "Quiet, rural feel", caution: "Very few rooms for students",
    landmarks: [] }),
  b({ slug: "nieder-eschbach", name: "Nieder-Eschbach", number: 15, at: [50.20107, 8.66809],
    description: "A northern district on the U2, with a village center and newer housing.",
    rent: "€520–€650/mo", safety: 8.6, transport: 6.6, nightlife: 2.0, studentFit: 5.6,
    commute: "25–30 min to the Westend campus on the U2", bestFor: "Quiet with a direct U-Bahn", caution: "Little to do in the evenings",
    landmarks: [] }),
  b({ slug: "bergen-enkheim", name: "Bergen-Enkheim", number: 16, at: [50.15917, 8.76682],
    description: "An eastern district on the Berger Rücken hills with a historic center, at the end of the U4.",
    rent: "€520–€660/mo", safety: 8.6, transport: 6.8, nightlife: 2.5, studentFit: 5.4,
    commute: "30–35 min to the Westend campus", bestFor: "Green surroundings", caution: "Far from student life",
    landmarks: [] }),
];

export type FrankfurtOrtsbezirkListing = Listing & { ortsbezirkSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const frankfurtListings: FrankfurtOrtsbezirkListing[] = [
  { id: "fr-sample-bockenheim-room", ortsbezirkSlug: "innenstadt-ii", title: "WG room near the Westend campus", rent: 690, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.1230, lng: 8.6560, description: "Room in a 3-person WG in Bockenheim, a 10-minute walk to the Westend campus.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Anmeldung possible"] },
  { id: "fr-sample-nordend-room", ortsbezirkSlug: "innenstadt-iii", title: "WG room in the Nordend", rent: 670, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.1270, lng: 8.6880, description: "Altbau room near Frankfurt UAS and the Oeder Weg cafés.", rooms: 1, sizeSqm: 15, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "fr-sample-bornheim-room", ortsbezirkSlug: "bornheim-ostend", title: "Room near the Berger Straße", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.1240, lng: 8.7090, description: "Room in a shared flat in Bornheim, close to the U4.", rooms: 1, sizeSqm: 13, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "fr-sample-sachsenhausen-room", ortsbezirkSlug: "sud", title: "Room in Sachsenhausen", rent: 650, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.1010, lng: 8.6880, description: "Room in a WG near the Museumsufer and the apple-wine quarter.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Balcony"] },
  { id: "fr-sample-bahnhof-studio", ortsbezirkSlug: "innenstadt-i", title: "Furnished studio near the Hauptbahnhof", rent: 1050, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 50.1085, lng: 8.6690, description: "Small furnished studio close to the main station.", rooms: 1, sizeSqm: 22, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "fr-sample-riedberg-room", ortsbezirkSlug: "nord-west", title: "Room near the Riedberg campus", rent: 600, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.1680, lng: 8.6280, description: "Room in a shared flat a short walk to the science campus.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Anmeldung possible"] },
  { id: "fr-sample-kalbach-room", ortsbezirkSlug: "kalbach-riedberg", title: "Room in the Riedberg quarter", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.1780, lng: 8.6380, description: "Room in a newer building in the Riedberg quarter.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Elevator"] },
  { id: "fr-sample-hoechst-room", ortsbezirkSlug: "west", title: "Room in Höchst", rent: 540, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.1010, lng: 8.5460, description: "Budget room near the Höchst old town and S-Bahn.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished"] },
  { id: "fr-sample-roedelheim-room", ortsbezirkSlug: "mitte-west", title: "Room in Rödelheim", rent: 590, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.1250, lng: 8.6060, description: "Room in a WG near the Rödelheim S-Bahn station, 15 minutes to Bockenheim.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
];

export function getFrankfurtOrtsbezirkBySlug(slug: string): FrankfurtOrtsbezirk | undefined {
  return frankfurtOrtsbezirke.find((x) => x.slug === slug);
}

export function getFrankfurtListingsForOrtsbezirk(slug: string | null): FrankfurtOrtsbezirkListing[] {
  if (!slug) return [];
  return frankfurtListings.filter((l) => l.ortsbezirkSlug === slug);
}
