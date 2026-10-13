import type { Listing } from "./listings";

// Munich's 25 city districts (Stadtbezirke).
// Boundaries: Landeshauptstadt München, GeodatenService (Datenlizenz Deutschland – Namensnennung 2.0),
// credited in MunichExplorer. Room prices are estimated WG ranges; scores are editorial judgments.

export type MunichBezirk = {
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

type Base = Omit<MunichBezirk, "lat" | "lng"> & { at: [number, number] };
const b = ({ at, ...rest }: Base): MunichBezirk => ({ ...rest, lat: at[0], lng: at[1] });

export const munichBezirke: MunichBezirk[] = [
  b({ slug: "altstadt-lehel", name: "Altstadt-Lehel", number: 1, at: [48.14108, 11.58256],
    description: "The historic center around Marienplatz and the Viktualienmarkt, plus elegant Lehel on the Isar next to the southern Englischer Garten.",
    rent: "€900–€1,100/mo", safety: 9.0, transport: 10, nightlife: 8.0, studentFit: 6.8,
    commute: "10 min to LMU/TUM (Maxvorstadt)", bestFor: "Living in the heart of the city", caution: "Very expensive and touristy",
    landmarks: ["Marienplatz", "Viktualienmarkt", "Sendlinger Tor"] }),
  b({ slug: "ludwigsvorstadt-isarvorstadt", name: "Ludwigsvorstadt-Isarvorstadt", number: 2, at: [48.13038, 11.56152],
    description: "The Glockenbach and Gärtnerplatz quarters — Munich's liveliest bar and café scene and its LGBTQ+ heart — plus the area around the main station and the Theresienwiese, home of Oktoberfest.",
    rent: "€850–€1,050/mo", safety: 8.2, transport: 9.8, nightlife: 9.5, studentFit: 8.4,
    commute: "10–15 min to LMU/TUM", bestFor: "Nightlife, cafés and the Isar", caution: "Pricey; Oktoberfest crowds in September",
    landmarks: ["Gärtnerplatz", "Hauptbahnhof", "Theresienwiese"] }),
  b({ slug: "maxvorstadt", name: "Maxvorstadt", number: 3, at: [48.14856, 11.56469],
    description: "Munich's university quarter: LMU's main building, TUM's city campus, the Pinakothek museums and countless student cafés and bookshops.",
    rent: "€850–€1,050/mo", safety: 9.0, transport: 9.6, nightlife: 8.0, studentFit: 9.6,
    commute: "You're at LMU and TUM (main buildings)", bestFor: "Walking to lectures at LMU and TUM", caution: "Expensive and the most contested WG market",
    landmarks: ["LMU main building", "TUM main campus", "Pinakotheken"] }),
  b({ slug: "schwabing-west", name: "Schwabing-West", number: 4, at: [48.16624, 11.56869],
    description: "A classic student and young-professional district north of the university, with leafy streets, cafés and quick access to the Englischer Garten.",
    rent: "€850–€1,000/mo", safety: 9.0, transport: 9.0, nightlife: 7.0, studentFit: 8.8,
    commute: "5–15 min to LMU/TUM", bestFor: "Student life close to campus", caution: "High demand and rents",
    landmarks: [] }),
  b({ slug: "au-haidhausen", name: "Au-Haidhausen", number: 5, at: [48.12981, 11.59533],
    description: "Charming 'French quarter' streets, beer gardens and the Ostbahnhof on the east bank of the Isar, with TUM's Klinikum rechts der Isar.",
    rent: "€850–€1,050/mo", safety: 9.0, transport: 9.2, nightlife: 7.5, studentFit: 8.2,
    commute: "15 min to LMU/TUM; Klinikum rechts der Isar on site", bestFor: "Cosy neighborhood feel and the Isar", caution: "Expensive",
    landmarks: ["Ostbahnhof", "Wiener Platz", "Klinikum rechts der Isar"] }),
  b({ slug: "sendling", name: "Sendling", number: 6, at: [48.11473, 11.54731],
    description: "A down-to-earth residential district south of the center with good U-Bahn links and the Isar riverside at the Flaucher.",
    rent: "€780–€950/mo", safety: 8.8, transport: 9.0, nightlife: 6.0, studentFit: 8.0,
    commute: "15–20 min to LMU/TUM", bestFor: "Good transport at slightly lower rents", caution: "Busy roads in places",
    landmarks: ["Flaucher (Isar)"] }),
  b({ slug: "sendling-westpark", name: "Sendling-Westpark", number: 7, at: [48.11682, 11.5199],
    description: "A residential south-western district around the Westpark, quieter and a bit cheaper than the center.",
    rent: "€750–€920/mo", safety: 8.8, transport: 8.6, nightlife: 4.0, studentFit: 7.4,
    commute: "20–25 min to LMU/TUM", bestFor: "Calm and green", caution: "Little nightlife",
    landmarks: ["Westpark"] }),
  b({ slug: "schwanthalerhoehe", name: "Schwanthalerhöhe", number: 8, at: [48.13611, 11.53864],
    description: "Munich's smallest district, the lively and diverse Westend next to the Theresienwiese, with many restaurants and older buildings.",
    rent: "€800–€980/mo", safety: 8.4, transport: 9.2, nightlife: 7.0, studentFit: 8.2,
    commute: "15 min to LMU/TUM", bestFor: "Central and diverse", caution: "Oktoberfest traffic in September",
    landmarks: ["Westend"] }),
  b({ slug: "neuhausen-nymphenburg", name: "Neuhausen-Nymphenburg", number: 9, at: [48.15637, 11.51915],
    description: "Popular residential district west of the center with Nymphenburg Palace, the Hirschgarten beer garden and Hochschule München's main campus.",
    rent: "€820–€1,000/mo", safety: 9.2, transport: 8.8, nightlife: 6.0, studentFit: 8.4,
    commute: "Hochschule München on site; 15 min to LMU/TUM", bestFor: "Hochschule München students, parks", caution: "Higher rents near the palace",
    landmarks: ["Nymphenburg Palace", "Hirschgarten", "Hochschule München"] }),
  b({ slug: "moosach", name: "Moosach", number: 10, at: [48.18182, 11.51117],
    description: "A residential north-western district with a village core, housing estates and U-Bahn and S-Bahn links.",
    rent: "€700–€880/mo", safety: 8.6, transport: 8.2, nightlife: 3.0, studentFit: 7.0,
    commute: "20–25 min to LMU/TUM", bestFor: "Lower rents with rail links", caution: "Quiet, few student venues",
    landmarks: ["Moosach station"] }),
  b({ slug: "milbertshofen-am-hart", name: "Milbertshofen-Am Hart", number: 11, at: [48.19628, 11.56829],
    description: "Northern district with the Olympic Park, the BMW headquarters and the Olympic Village student housing.",
    rent: "€720–€900/mo", safety: 8.2, transport: 8.6, nightlife: 4.5, studentFit: 7.8,
    commute: "15–20 min to LMU/TUM; 25 min to TUM Garching", bestFor: "Olympic Village dorms and the Olympic Park", caution: "Parts are industrial",
    landmarks: ["Olympiapark", "Olympic Village (student housing)"] }),
  b({ slug: "schwabing-freimann", name: "Schwabing-Freimann", number: 12, at: [48.19287, 11.61055],
    description: "From lively Münchner Freiheit and the northern Englischer Garten to Freimann with the Studentenstadt — and the U6 to TUM Garching.",
    rent: "€780–€980/mo", safety: 9.0, transport: 8.8, nightlife: 6.5, studentFit: 8.6,
    commute: "10–15 min to LMU/TUM; 20 min to TUM Garching", bestFor: "Studentenstadt residents and Garching commuters", caution: "Prices high near Münchner Freiheit",
    landmarks: ["Münchner Freiheit", "Studentenstadt Freimann", "Allianz Arena"] }),
  b({ slug: "bogenhausen", name: "Bogenhausen", number: 13, at: [48.15814, 11.6432],
    description: "An upmarket district east of the Isar with villas and embassies near the river, and large estates further out.",
    rent: "€800–€1,000/mo", safety: 9.2, transport: 8.4, nightlife: 4.0, studentFit: 7.0,
    commute: "20 min to LMU/TUM", bestFor: "Quiet, green and safe", caution: "Expensive and calm",
    landmarks: ["Prinzregentenplatz"] }),
  b({ slug: "berg-am-laim", name: "Berg am Laim", number: 14, at: [48.12686, 11.63237],
    description: "An eastern district close to the Ostbahnhof, including the Werksviertel nightlife and creative area.",
    rent: "€750–€920/mo", safety: 8.6, transport: 8.6, nightlife: 6.5, studentFit: 7.6,
    commute: "20 min to LMU/TUM", bestFor: "Werksviertel venues and value", caution: "Mixed industrial and residential",
    landmarks: ["Werksviertel"] }),
  b({ slug: "trudering-riem", name: "Trudering-Riem", number: 15, at: [48.12406, 11.68372],
    description: "The eastern edge with the Messestadt Riem, new housing and the Riemer Park lake.",
    rent: "€680–€850/mo", safety: 8.8, transport: 7.8, nightlife: 2.5, studentFit: 6.4,
    commute: "25–30 min to LMU/TUM", bestFor: "Newer flats and space", caution: "Far from student life",
    landmarks: [] }),
  b({ slug: "ramersdorf-perlach", name: "Ramersdorf-Perlach", number: 16, at: [48.09979, 11.63883],
    description: "Munich's most populous district, with the large Neuperlach estate and more affordable rents.",
    rent: "€680–€850/mo", safety: 7.8, transport: 8.2, nightlife: 3.0, studentFit: 6.8,
    commute: "20–25 min to LMU/TUM", bestFor: "Affordable rooms", caution: "Large estates; few student venues",
    landmarks: ["Neuperlach"] }),
  b({ slug: "obergiesing-fasangarten", name: "Obergiesing-Fasangarten", number: 17, at: [48.1027, 11.59331],
    description: "Working-class Giesing, home of TSV 1860 fans, with a growing café scene and good U-Bahn links.",
    rent: "€720–€900/mo", safety: 8.2, transport: 8.6, nightlife: 6.0, studentFit: 7.8,
    commute: "15–20 min to LMU/TUM", bestFor: "Value close to the center", caution: "Some busy main roads",
    landmarks: ["Tegernseer Platz"] }),
  b({ slug: "untergiesing-harlaching", name: "Untergiesing-Harlaching", number: 18, at: [48.09777, 11.56441],
    description: "Untergiesing by the Isar and leafy, upmarket Harlaching on the high bank, with river walks and beer gardens.",
    rent: "€750–€920/mo", safety: 9.0, transport: 8.0, nightlife: 4.5, studentFit: 7.0,
    commute: "20 min to LMU/TUM", bestFor: "Isar walks and calm", caution: "Hilly and quiet",
    landmarks: [] }),
  b({ slug: "thalkirchen-obersendling-forstenried-fuerstenried-solln", name: "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln", number: 19, at: [48.08676, 11.51354],
    description: "A large southern district from the Isar and the zoo at Thalkirchen to suburban Forstenried and Solln.",
    rent: "€700–€880/mo", safety: 9.0, transport: 7.8, nightlife: 2.5, studentFit: 6.4,
    commute: "25–30 min to LMU/TUM", bestFor: "Green surroundings", caution: "Suburban and far from campus",
    landmarks: [] }),
  b({ slug: "hadern", name: "Hadern", number: 20, at: [48.11398, 11.48346],
    description: "A south-western district next to LMU's Großhadern hospital and the Martinsried science campus.",
    rent: "€700–€880/mo", safety: 9.0, transport: 8.0, nightlife: 2.5, studentFit: 7.8,
    commute: "LMU Großhadern/Martinsried nearby; 25 min to Maxvorstadt", bestFor: "Medicine and life-science students", caution: "Quiet, little nightlife",
    landmarks: ["LMU Klinikum Großhadern"] }),
  b({ slug: "pasing-obermenzing", name: "Pasing-Obermenzing", number: 21, at: [48.15337, 11.46349],
    description: "Western district around Pasing station, a rail hub with its own shopping center and old town feel.",
    rent: "€700–€880/mo", safety: 9.0, transport: 8.8, nightlife: 3.5, studentFit: 7.0,
    commute: "15–20 min to LMU/TUM by S-Bahn", bestFor: "Fast trains at lower rents", caution: "Suburban evenings",
    landmarks: ["Pasing station"] }),
  b({ slug: "aubing-lochhausen-langwied", name: "Aubing-Lochhausen-Langwied", number: 22, at: [48.16548, 11.40912],
    description: "The far west, with village cores, new developments like Freiham and open fields.",
    rent: "€650–€820/mo", safety: 9.0, transport: 7.0, nightlife: 1.5, studentFit: 5.6,
    commute: "30–40 min to LMU/TUM", bestFor: "Lowest rents in Munich", caution: "Long commutes",
    landmarks: [] }),
  b({ slug: "allach-untermenzing", name: "Allach-Untermenzing", number: 23, at: [48.19301, 11.46332],
    description: "A quiet, suburban north-western district with houses and gardens.",
    rent: "€650–€820/mo", safety: 9.0, transport: 7.0, nightlife: 1.5, studentFit: 5.6,
    commute: "30–35 min to LMU/TUM", bestFor: "Calm and space", caution: "Far from everything student-related",
    landmarks: [] }),
  b({ slug: "feldmoching-hasenbergl", name: "Feldmoching-Hasenbergl", number: 24, at: [48.2152, 11.5223],
    description: "The northern edge with large housing estates and fields, connected by the U2 and S-Bahn.",
    rent: "€650–€820/mo", safety: 7.6, transport: 7.8, nightlife: 2.0, studentFit: 6.0,
    commute: "25–30 min to LMU/TUM", bestFor: "Budget rooms", caution: "Far from the center; some deprived areas",
    landmarks: [] }),
  b({ slug: "laim", name: "Laim", number: 25, at: [48.13624, 11.5047],
    description: "A practical residential district west of the center with S-Bahn and U-Bahn connections and a local feel.",
    rent: "€750–€920/mo", safety: 8.8, transport: 8.8, nightlife: 3.5, studentFit: 7.4,
    commute: "15–20 min to LMU/TUM", bestFor: "Good value and transport", caution: "Not much nightlife",
    landmarks: [] }),
];

export type MunichBezirkListing = Listing & { bezirkSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const munichListings: MunichBezirkListing[] = [
  { id: "mu-sample-maxvorstadt-room", bezirkSlug: "maxvorstadt", title: "WG room near LMU", rent: 920, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.1510, lng: 11.5730, description: "Room in a 3-person WG, a 5-minute walk to the LMU main building.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Anmeldung possible"] },
  { id: "mu-sample-schwabing-room", bezirkSlug: "schwabing-west", title: "Room in Schwabing-West", rent: 880, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1640, lng: 11.5700, description: "Bright Altbau room close to the U2 and the Englischer Garten.", rooms: 1, sizeSqm: 15, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "mu-sample-glockenbach-room", bezirkSlug: "ludwigsvorstadt-isarvorstadt", title: "Room in the Glockenbachviertel", rent: 950, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1300, lng: 11.5700, description: "Room in a lively WG between Gärtnerplatz and the Isar.", rooms: 1, sizeSqm: 14, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Wifi included"], riskNote: "Higher caution" },
  { id: "mu-sample-freimann-room", bezirkSlug: "schwabing-freimann", title: "Room near Studentenstadt", rent: 760, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 48.1830, lng: 11.6070, description: "Room in a shared flat near the U6 — 20 minutes to TUM Garching.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Anmeldung possible"] },
  { id: "mu-sample-giesing-room", bezirkSlug: "obergiesing-fasangarten", title: "Room in Giesing", rent: 780, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1160, lng: 11.5840, description: "Room in a WG near Tegernseer Platz with the U2 to the university.", rooms: 1, sizeSqm: 13, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "mu-sample-neuhausen-room", bezirkSlug: "neuhausen-nymphenburg", title: "Room near Hochschule München", rent: 840, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1545, lng: 11.5450, description: "Room in a student WG a short walk from the Lothstraße campus.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "mu-sample-hadern-room", bezirkSlug: "hadern", title: "Room near Großhadern", rent: 720, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 48.1140, lng: 11.4800, description: "Quiet room shared with medicine students near the LMU clinic.", rooms: 1, sizeSqm: 12, availableFrom: "15 Sep 2026", amenities: ["Furnished"] },
];

export function getMunichBezirkBySlug(slug: string): MunichBezirk | undefined {
  return munichBezirke.find((x) => x.slug === slug);
}

export function getMunichListingsForBezirk(slug: string | null): MunichBezirkListing[] {
  if (!slug) return [];
  return munichListings.filter((l) => l.bezirkSlug === slug);
}
