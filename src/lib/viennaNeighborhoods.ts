import type { Listing } from "./listings";

// Vienna's 23 districts (Bezirke).
// Boundaries: Datenquelle: Stadt Wien – data.wien.gv.at (CC BY), credited in ViennaExplorer.
// Room prices are estimated ranges; scores are editorial judgments.

export type ViennaBezirk = {
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

type Base = Omit<ViennaBezirk, "lat" | "lng"> & { at: [number, number] };
const b = ({ at, ...rest }: Base): ViennaBezirk => ({ ...rest, lat: at[0], lng: at[1] });

export const viennaBezirke: ViennaBezirk[] = [
  b({ slug: "innere-stadt", name: "Innere Stadt", number: 1, at: [48.20836, 16.3694],
    description: "The historic center inside the Ringstraße: St. Stephen's Cathedral, the University of Vienna's main building, the University of Applied Arts and the Academy of Fine Arts.",
    rent: "€750–€950/mo", safety: 9.0, transport: 10, nightlife: 8.0, studentFit: 7.0,
    commute: "University of Vienna main building on site", bestFor: "Living in the heart of the city", caution: "Vienna's most expensive district; few rooms",
    landmarks: ["University of Vienna (main building)", "St. Stephen's Cathedral", "University of Applied Arts", "Academy of Fine Arts"] }),
  b({ slug: "leopoldstadt", name: "Leopoldstadt", number: 2, at: [48.20364, 16.42326],
    description: "Between the Danube Canal and the Danube: the WU (Vienna University of Economics and Business) campus, the Prater park and the lively Karmeliterviertel, on the U1 and U2.",
    rent: "€550–€700/mo", safety: 8.0, transport: 9.2, nightlife: 7.6, studentFit: 9.0,
    commute: "WU on site; 10–15 min to the University of Vienna", bestFor: "WU students and the Prater", caution: "Praterstern area can feel rough at night",
    landmarks: ["WU Vienna campus", "Prater", "Karmeliterviertel"] }),
  b({ slug: "landstrasse", name: "Landstraße", number: 3, at: [48.19376, 16.39608],
    description: "A large central district with the Belvedere palace, the Wien Mitte transport hub and residential streets close to the city center.",
    rent: "€560–€700/mo", safety: 8.6, transport: 9.4, nightlife: 6.5, studentFit: 7.8,
    commute: "10–15 min to the University of Vienna and TU Wien", bestFor: "Central living with excellent connections", caution: "Busy around Wien Mitte",
    landmarks: ["Belvedere", "Wien Mitte"] }),
  b({ slug: "wieden", name: "Wieden", number: 4, at: [48.19257, 16.37038],
    description: "TU Wien's home around Karlsplatz and the Freihaus, with cafés and the Naschmarkt close by.",
    rent: "€580–€720/mo", safety: 8.8, transport: 9.6, nightlife: 7.6, studentFit: 9.2,
    commute: "TU Wien on site; 10 min to the University of Vienna", bestFor: "TU Wien students", caution: "High demand near the campus",
    landmarks: ["TU Wien (Karlsplatz)", "TU Wien (Freihaus)"] }),
  b({ slug: "margareten", name: "Margareten", number: 5, at: [48.1868, 16.35593],
    description: "A dense, lively district south of the Naschmarkt with good-value flats and the U4 along the Wien river.",
    rent: "€520–€650/mo", safety: 8.2, transport: 8.8, nightlife: 7.0, studentFit: 8.4,
    commute: "10–15 min to TU Wien; 15–20 min to the University of Vienna", bestFor: "Value close to TU Wien", caution: "Fewer green spaces",
    landmarks: [] }),
  b({ slug: "mariahilf", name: "Mariahilf", number: 6, at: [48.19477, 16.34983],
    description: "Around Mariahilfer Straße, Vienna's main shopping street, with bars and the Naschmarkt on its edge.",
    rent: "€560–€700/mo", safety: 8.4, transport: 9.4, nightlife: 8.4, studentFit: 8.6,
    commute: "10 min to TU Wien and the University of Vienna", bestFor: "Shopping, bars and a central location", caution: "Busy and pricey",
    landmarks: ["Mariahilfer Straße"] }),
  b({ slug: "neubau", name: "Neubau", number: 7, at: [48.20253, 16.34697],
    description: "Vienna's creative district with the MuseumsQuartier, independent shops and cafés around Spittelberg and Siebensterngasse.",
    rent: "€580–€720/mo", safety: 8.6, transport: 9.2, nightlife: 8.8, studentFit: 8.8,
    commute: "10–15 min to the University of Vienna and TU Wien", bestFor: "Cafés, design and culture", caution: "High demand and small flats",
    landmarks: ["MuseumsQuartier", "Siebensterngasse"] }),
  b({ slug: "josefstadt", name: "Josefstadt", number: 8, at: [48.21104, 16.34782],
    description: "Vienna's smallest district: quiet, elegant streets right behind the University of Vienna's main building, popular with students.",
    rent: "€580–€720/mo", safety: 9.0, transport: 8.8, nightlife: 6.8, studentFit: 9.0,
    commute: "5–10 min to the University of Vienna", bestFor: "University of Vienna students who want calm", caution: "Few large flats",
    landmarks: [] }),
  b({ slug: "alsergrund", name: "Alsergrund", number: 9, at: [48.22282, 16.35649],
    description: "The University of Vienna's campus in the Altes AKH, the MedUni and General Hospital (AKH), the Servitenviertel and Spittelau — Vienna's university quarter.",
    rent: "€570–€720/mo", safety: 8.8, transport: 9.2, nightlife: 7.4, studentFit: 9.6,
    commute: "University of Vienna campus and MedUni on site", bestFor: "University of Vienna and medicine students", caution: "Rooms near the campus go fast",
    landmarks: ["University of Vienna campus (Altes AKH)", "MedUni Vienna / AKH", "Spittelau"] }),
  b({ slug: "favoriten", name: "Favoriten", number: 10, at: [48.15211, 16.38762],
    description: "Vienna's most populous district, from the Hauptbahnhof and the new Sonnwendviertel to Reumannplatz on the U1, with FH Campus Wien.",
    rent: "€450–€580/mo", safety: 7.0, transport: 8.6, nightlife: 5.0, studentFit: 7.6,
    commute: "FH Campus Wien on site; 15–20 min to the University of Vienna", bestFor: "Lower rents with fast U1 links", caution: "Some areas feel unsafe at night",
    landmarks: ["Hauptbahnhof", "FH Campus Wien", "Reumannplatz"] }),
  b({ slug: "simmering", name: "Simmering", number: 11, at: [48.16399, 16.4463],
    description: "A south-eastern district with the converted Gasometer buildings, at the end of the U3.",
    rent: "€430–€560/mo", safety: 7.6, transport: 7.8, nightlife: 4.0, studentFit: 6.8,
    commute: "20–25 min to the center on the U3", bestFor: "Low rents", caution: "Far from most campuses",
    landmarks: ["Simmering"] }),
  b({ slug: "meidling", name: "Meidling", number: 12, at: [48.17053, 16.32237],
    description: "A residential district around the Meidling train station, served by the U4, U6 and S-Bahn.",
    rent: "€460–€580/mo", safety: 7.8, transport: 8.6, nightlife: 5.0, studentFit: 7.4,
    commute: "15–20 min to TU Wien and the University of Vienna", bestFor: "Good value with great transport", caution: "Less charm than the inner districts",
    landmarks: ["Meidling station"] }),
  b({ slug: "hietzing", name: "Hietzing", number: 13, at: [48.17733, 16.24561],
    description: "Green, wealthy south-west Vienna with Schönbrunn Palace and the Lainzer Tiergarten.",
    rent: "€520–€680/mo", safety: 9.2, transport: 7.4, nightlife: 3.5, studentFit: 6.6,
    commute: "20–30 min to the center on the U4", bestFor: "Quiet and green", caution: "Few student flatshares",
    landmarks: ["Schönbrunn Palace"] }),
  b({ slug: "penzing", name: "Penzing", number: 14, at: [48.22106, 16.24159],
    description: "Western Vienna stretching into the Vienna Woods, with Hütteldorf at the end of the U4.",
    rent: "€460–€600/mo", safety: 8.4, transport: 7.4, nightlife: 3.5, studentFit: 6.8,
    commute: "20–30 min to the center", bestFor: "Nature and space", caution: "Far from campuses",
    landmarks: [] }),
  b({ slug: "rudolfsheim-funfhaus", name: "Rudolfsheim-Fünfhaus", number: 15, at: [48.19548, 16.32607],
    description: "Around the Westbahnhof and the Wiener Stadthalle: diverse, affordable and well connected by the U3 and U6.",
    rent: "€450–€580/mo", safety: 7.4, transport: 9.0, nightlife: 6.0, studentFit: 8.0,
    commute: "15 min to the University of Vienna and TU Wien", bestFor: "Low rents close to the center", caution: "Some streets feel rough at night",
    landmarks: ["Westbahnhof", "Wiener Stadthalle"] }),
  b({ slug: "ottakring", name: "Ottakring", number: 16, at: [48.2154, 16.2996],
    description: "Lively and multicultural around the Brunnenmarkt and Yppenplatz, rising to green hills at the edge of the city; the U3 ends here.",
    rent: "€450–€580/mo", safety: 7.6, transport: 8.2, nightlife: 7.2, studentFit: 8.2,
    commute: "15–20 min to the University of Vienna", bestFor: "Markets, bars and value", caution: "Quality varies a lot by street",
    landmarks: ["Brunnenmarkt"] }),
  b({ slug: "hernals", name: "Hernals", number: 17, at: [48.23371, 16.2902],
    description: "From the Gürtel out to the Vienna Woods, served mainly by trams and the S45.",
    rent: "€470–€600/mo", safety: 8.2, transport: 7.4, nightlife: 4.5, studentFit: 7.4,
    commute: "15–25 min to the University of Vienna", bestFor: "Calm streets close to Alsergrund", caution: "Few U-Bahn stations",
    landmarks: [] }),
  b({ slug: "wahring", name: "Währing", number: 18, at: [48.23555, 16.31898],
    description: "A leafy, well-off district with the BOKU (University of Natural Resources and Life Sciences) campus at Türkenschanze.",
    rent: "€520–€680/mo", safety: 9.0, transport: 7.8, nightlife: 5.0, studentFit: 8.0,
    commute: "BOKU on site; 15 min to the University of Vienna", bestFor: "BOKU students and green streets", caution: "Pricier than its neighbors",
    landmarks: ["BOKU (Türkenschanze)"] }),
  b({ slug: "dobling", name: "Döbling", number: 19, at: [48.25903, 16.3337],
    description: "Vienna's villa district with vineyards and Heurigen wine taverns in Grinzing and Nussdorf.",
    rent: "€540–€700/mo", safety: 9.2, transport: 7.4, nightlife: 4.5, studentFit: 6.8,
    commute: "20–25 min to the University of Vienna", bestFor: "Vineyards and quiet", caution: "Expensive and spread out",
    landmarks: ["Grinzing"] }),
  b({ slug: "brigittenau", name: "Brigittenau", number: 20, at: [48.2402, 16.37728],
    description: "A residential district between the Danube Canal and the Danube, home to the FH Technikum Wien.",
    rent: "€450–€580/mo", safety: 7.6, transport: 8.4, nightlife: 4.5, studentFit: 7.6,
    commute: "FH Technikum on site; 15 min to the University of Vienna", bestFor: "FH Technikum students and value", caution: "Quiet nightlife",
    landmarks: ["FH Technikum Wien"] }),
  b({ slug: "floridsdorf", name: "Floridsdorf", number: 21, at: [48.2812, 16.41118],
    description: "North of the Danube, a growing residential district at the end of the U6.",
    rent: "€430–€560/mo", safety: 7.8, transport: 7.6, nightlife: 3.5, studentFit: 6.6,
    commute: "25–30 min to the University of Vienna", bestFor: "Low rents and newer flats", caution: "Far from campuses",
    landmarks: ["Floridsdorf station"] }),
  b({ slug: "donaustadt", name: "Donaustadt", number: 22, at: [48.21889, 16.49491],
    description: "Vienna's largest district: the UN's Vienna International Centre, the Donauinsel and the new Seestadt Aspern at the end of the U2.",
    rent: "€450–€600/mo", safety: 8.2, transport: 7.6, nightlife: 4.0, studentFit: 7.0,
    commute: "20–35 min to the center", bestFor: "New buildings and the Danube", caution: "Seestadt is far out",
    landmarks: ["Vienna International Centre (UNO City)", "Seestadt Aspern"] }),
  b({ slug: "liesing", name: "Liesing", number: 23, at: [48.14328, 16.29323],
    description: "Vienna's southernmost district, with suburbs and business parks along the U6 and the S-Bahn.",
    rent: "€440–€580/mo", safety: 8.4, transport: 7.0, nightlife: 3.0, studentFit: 6.0,
    commute: "30–40 min to the center", bestFor: "Quiet suburbs", caution: "Long commute",
    landmarks: ["Liesing station"] }),
];

export type ViennaBezirkListing = Listing & { bezirkSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const viennaListings: ViennaBezirkListing[] = [
  { id: "vi-sample-alsergrund-room", bezirkSlug: "alsergrund", title: "WG room near the University of Vienna", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.2180, lng: 16.3560, description: "Room in a 3-person WG in an Altbau building, a 5-minute walk to the Altes AKH campus.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Meldezettel possible"] },
  { id: "vi-sample-wieden-room", bezirkSlug: "wieden", title: "WG room near TU Wien", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.1950, lng: 16.3660, description: "Room in a shared flat close to the Freihaus and Karlsplatz.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "vi-sample-wu-room", bezirkSlug: "leopoldstadt", title: "Room near WU", rent: 590, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.2150, lng: 16.4030, description: "Room in a WG a short walk from the WU campus and the Prater.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Bills included"] },
  { id: "vi-sample-neubau-studio", bezirkSlug: "neubau", title: "Studio in Neubau", rent: 890, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 48.2010, lng: 16.3480, description: "Small furnished studio near Siebensterngasse.", rooms: 1, sizeSqm: 26, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "vi-sample-ottakring-room", bezirkSlug: "ottakring", title: "Room near the Brunnenmarkt", rent: 500, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.2110, lng: 16.3260, description: "Room in a WG near Yppenplatz, with the U6 to the university.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "vi-sample-favoriten-room", bezirkSlug: "favoriten", title: "Room near Reumannplatz", rent: 480, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1750, lng: 16.3800, description: "Room in a shared flat on the U1, 10 minutes to Stephansplatz.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished"] },
  { id: "vi-sample-wahring-room", bezirkSlug: "wahring", title: "Room near BOKU", rent: 580, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.2330, lng: 16.3400, description: "Bright room in a WG close to Türkenschanzpark.", rooms: 1, sizeSqm: 15, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "vi-sample-margareten-room", bezirkSlug: "margareten", title: "Room in Margareten", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1880, lng: 16.3550, description: "Room in an Altbau flat, a 10-minute walk to TU Wien.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Meldezettel possible"] },
  { id: "vi-sample-seestadt-room", bezirkSlug: "donaustadt", title: "Room in Seestadt", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.2250, lng: 16.5050, description: "Room in a new-build flat by the lake, on the U2.", rooms: 1, sizeSqm: 14, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Elevator"] },
];

export function getViennaBezirkBySlug(slug: string): ViennaBezirk | undefined {
  return viennaBezirke.find((x) => x.slug === slug);
}

export function getViennaListingsForBezirk(slug: string | null): ViennaBezirkListing[] {
  if (!slug) return [];
  return viennaListings.filter((l) => l.bezirkSlug === slug);
}
