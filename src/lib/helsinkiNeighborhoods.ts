import type { Listing } from "./listings";

// Helsinki's 34 basic districts (peruspiirit) from the city's official district division (piirijako).
// Boundaries: City of Helsinki, land areas only, CC BY 4.0 — credited in HelsinkiExplorer.
// Commute times refer to the University of Helsinki's City Centre campus unless stated.
// Room prices are estimated ranges; scores are editorial judgments.

export type HelsinkiPeruspiiri = {
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

type Base = Omit<HelsinkiPeruspiiri, "lat" | "lng" | "badge"> & { at: [number, number]; inner?: boolean };
const s = ({ at, inner = false, ...rest }: Base): HelsinkiPeruspiiri => ({
  ...rest,
  badge: inner ? "Inner city" : "Outer city",
  lat: at[0],
  lng: at[1],
});

const INNER = "€600–850/mo";
const MIDDLE = "€500–700/mo";
const OUTER = "€450–620/mo";

export const helsinkiPeruspiirit: HelsinkiPeruspiiri[] = [
  // ── Southern & central inner city ──
  s({ slug: "vironniemi", name: "Vironniemi", inner: true, at: [60.17292, 24.94804],
    description: "The historic core around Senate Square, Kruununhaka and Kluuvi — home to the University of Helsinki's City Centre campus, the National Library, Helsinki Central Station and the Music Centre.",
    rent: INNER, safety: 8.6, transport: 10, nightlife: 8.4, studentFit: 9.0,
    commute: "City Centre campus on site", bestFor: "UH students who want to walk to lectures", caution: "Few rentals and high prices",
    landmarks: ["University of Helsinki (City Centre campus)", "Helsinki Central Station", "Senate Square", "Music Centre (Sibelius Academy)"] }),
  s({ slug: "ullanlinna", name: "Ullanlinna", inner: true, at: [60.15814, 24.94225],
    description: "Elegant southern districts — Punavuori's design shops and bars, Eira's Art Nouveau streets, the Kaivopuisto seaside park — plus the island fortress of Suomenlinna.",
    rent: INNER, safety: 8.8, transport: 9.0, nightlife: 8.6, studentFit: 7.8,
    commute: "10–15 min by tram or on foot", bestFor: "Cafés, bars and seaside walks", caution: "Helsinki's priciest area; small, old flats",
    landmarks: ["Punavuori", "Kaivopuisto", "Suomenlinna"] }),
  s({ slug: "kampinmalmi", name: "Kampinmalmi", inner: true, at: [60.16503, 24.91863],
    description: "Kamppi's shopping and transport hub, Etu-Töölö, the new Jätkäsaari waterfront and Ruoholahti — with Hanken School of Economics and metro lines west towards Aalto's Otaniemi campus.",
    rent: INNER, safety: 8.4, transport: 9.8, nightlife: 8.0, studentFit: 8.8,
    commute: "5–10 min to the City Centre campus; about 10 min by metro from Ruoholahti to Aalto", bestFor: "Hanken students and anyone commuting to Aalto", caution: "Busy around Kamppi; new waterfront flats are pricey",
    landmarks: ["Hanken School of Economics", "Kamppi", "Ruoholahti", "Hietaniemi beach"] }),
  s({ slug: "taka-toolo", name: "Taka-Töölö", inner: true, at: [60.18419, 24.92224],
    description: "Calm, central Töölö between Hesperia Park, the Olympic Stadium and Töölönlahti bay, with tram lines straight into the centre.",
    rent: INNER, safety: 9.0, transport: 9.0, nightlife: 5.5, studentFit: 8.2,
    commute: "10–15 min by tram", bestFor: "Quiet inner-city living near parks", caution: "Older buildings; competitive market",
    landmarks: ["Hesperia Park", "Olympic Stadium", "Töölönlahti bay"] }),
  s({ slug: "lauttasaari", name: "Lauttasaari", at: [60.1574, 24.87458],
    description: "A green island west of the centre with beaches and seaside trails, on the metro line between the city centre and Aalto's Otaniemi campus.",
    rent: MIDDLE, safety: 9.0, transport: 8.6, nightlife: 4.0, studentFit: 8.0,
    commute: "About 5 min by metro to the centre; about 10 min to Aalto", bestFor: "Students splitting time between Helsinki and Aalto", caution: "Quiet in the evenings",
    landmarks: ["Lauttasaari metro station"] }),
  s({ slug: "kallio", name: "Kallio", inner: true, at: [60.18431, 24.96155],
    description: "Helsinki's bohemian student heartland: Hakaniemi market, Sörnäinen, bars, saunas and second-hand shops, plus the new Kalasatama towers — all on the metro.",
    rent: INNER, safety: 7.6, transport: 9.6, nightlife: 9.6, studentFit: 9.4,
    commute: "5–10 min by metro or tram", bestFor: "Nightlife, culture and a student vibe", caution: "Lively and loud at night; some small, older flats",
    landmarks: ["Hakaniemi", "Kallio Church", "Sörnäinen"] }),
  s({ slug: "alppiharju", name: "Alppiharju", inner: true, at: [60.18962, 24.94396],
    description: "Compact area next to Kallio around the Linnanmäki amusement park and Alppipuisto, with trams and the metro close by.",
    rent: INNER, safety: 7.8, transport: 9.2, nightlife: 8.0, studentFit: 8.8,
    commute: "10 min by tram", bestFor: "Kallio's vibe at slightly lower rents", caution: "Small district with limited supply",
    landmarks: ["Linnanmäki"] }),
  s({ slug: "vallila", name: "Vallila", inner: true, at: [60.19532, 24.96267],
    description: "Wooden-house idylls and converted workshops north of Kallio, with Hermanni and Toukola nearby and good tram links.",
    rent: MIDDLE, safety: 8.4, transport: 8.8, nightlife: 6.0, studentFit: 8.4,
    commute: "15 min by tram; 10 min to Kumpula campus", bestFor: "Kumpula students and a village feel close to Kallio", caution: "Popular and fairly priced, so listings go fast",
    landmarks: ["Vallila wooden houses"] }),
  s({ slug: "pasila", name: "Pasila", inner: true, at: [60.2069, 24.92771],
    description: "Helsinki's second rail hub, rebuilt around the Tripla mall, with Haaga-Helia's Pasila campus and the Central Park on its doorstep.",
    rent: MIDDLE, safety: 8.0, transport: 9.6, nightlife: 4.5, studentFit: 8.2,
    commute: "5 min by train to Central Station", bestFor: "Haaga-Helia students and easy train travel", caution: "Large construction areas; quieter after shop hours",
    landmarks: ["Pasila station", "Mall of Tripla", "Haaga-Helia (Pasila campus)"] }),
  s({ slug: "vanhakaupunki", name: "Vanhakaupunki", inner: true, at: [60.21172, 24.96117],
    description: "Kumpula's science campus of the University of Helsinki, the Arabianranta design district with Metropolia's Arabia campus, and the Old Town rapids.",
    rent: MIDDLE, safety: 8.6, transport: 8.4, nightlife: 4.5, studentFit: 8.8,
    commute: "Kumpula campus on site; 15–20 min by tram to the centre", bestFor: "Science and Metropolia Arabia students", caution: "Some parts are a walk from the nearest tram",
    landmarks: ["University of Helsinki (Kumpula campus)", "Metropolia (Arabia campus)", "Arabianranta"] }),

  // ── West ──
  s({ slug: "reijola", name: "Reijola", at: [60.19642, 24.90264],
    description: "Meilahti's hospital and medicine campus of the University of Helsinki, plus Ruskeasuo and Laakso next to Central Park.",
    rent: MIDDLE, safety: 8.8, transport: 8.4, nightlife: 3.5, studentFit: 8.4,
    commute: "Meilahti campus on site; 15 min by tram to the centre", bestFor: "Medical students", caution: "Few bars and shops in the evening",
    landmarks: ["University of Helsinki (Meilahti campus)", "Ruskeasuo"] }),
  s({ slug: "munkkiniemi", name: "Munkkiniemi", at: [60.20305, 24.87161],
    description: "Leafy western seaside districts with Munkkivuori and Lehtisaari, on the tram line and close to the Espoo border and Otaniemi.",
    rent: MIDDLE, safety: 9.2, transport: 7.8, nightlife: 3.0, studentFit: 7.6,
    commute: "20–25 min by tram; about 15–20 min by bus to Aalto", bestFor: "Calm living between Helsinki and Aalto", caution: "No metro; few student flats",
    landmarks: ["Munkkiniemi"] }),
  s({ slug: "haaga", name: "Haaga", at: [60.22181, 24.89281],
    description: "Residential north-west with good train links from Huopalahti and Pohjois-Haaga stations, and Central Park forests to the east.",
    rent: OUTER, safety: 8.4, transport: 8.0, nightlife: 2.5, studentFit: 7.2,
    commute: "15–20 min by train", bestFor: "Good value near the rail line", caution: "Quiet; most life is in the centre",
    landmarks: ["Huopalahti station"] }),
  s({ slug: "pitajanmaki", name: "Pitäjänmäki", at: [60.22793, 24.85494],
    description: "A business and residential area with Konala and Reimarla on the western rail line towards Leppävaara.",
    rent: OUTER, safety: 8.2, transport: 7.4, nightlife: 2.0, studentFit: 6.4,
    commute: "20–25 min by train", bestFor: "Lower rents on the train line", caution: "Little student life",
    landmarks: ["Pitäjänmäki station"] }),
  s({ slug: "kaarela", name: "Kaarela", at: [60.24863, 24.88028],
    description: "North-western suburbs with Kannelmäki and Malminkartano, both on the ring rail line to the airport and the centre.",
    rent: OUTER, safety: 7.6, transport: 7.6, nightlife: 2.0, studentFit: 6.4,
    commute: "20–25 min by train", bestFor: "Affordable flats near the train", caution: "Far from campuses",
    landmarks: ["Kannelmäki"] }),

  // ── North ──
  s({ slug: "maunula", name: "Maunula", at: [60.22847, 24.925],
    description: "Green 1950s neighbourhoods north of Central Park, with a stop on light rail line 15.",
    rent: OUTER, safety: 8.0, transport: 7.6, nightlife: 2.0, studentFit: 7.0,
    commute: "20–25 min by bus or light rail + tram", bestFor: "Quiet, green and affordable", caution: "Bus-dependent for the centre",
    landmarks: ["Maunula"] }),
  s({ slug: "lansi-pakila", name: "Länsi-Pakila", at: [60.24147, 24.93099],
    description: "Detached houses and gardens in north Helsinki, mostly family homes.",
    rent: OUTER, safety: 9.0, transport: 6.2, nightlife: 1.5, studentFit: 5.2,
    commute: "25–35 min by bus", bestFor: "Suburban calm", caution: "Very few rentals for students",
    landmarks: ["Pakila"] }),
  s({ slug: "tuomarinkyla", name: "Tuomarinkylä", at: [60.26209, 24.93185],
    description: "The city's northern edge with Paloheinä's outdoor area, Torpparinmäki and the Haltiala farm.",
    rent: OUTER, safety: 9.0, transport: 5.8, nightlife: 1.0, studentFit: 5.0,
    commute: "30–40 min by bus", bestFor: "Outdoor life", caution: "Long commute; few rentals",
    landmarks: ["Paloheinä"] }),
  s({ slug: "oulunkyla", name: "Oulunkylä", at: [60.23097, 24.9651],
    description: "A village-like district with its own train station and a stop on light rail line 15 to Viikki and Otaniemi.",
    rent: OUTER, safety: 8.6, transport: 8.0, nightlife: 2.5, studentFit: 7.4,
    commute: "About 10 min by train", bestFor: "Good value with fast trains", caution: "Quiet evenings",
    landmarks: ["Oulunkylä station"] }),
  s({ slug: "ita-pakila", name: "Itä-Pakila", at: [60.25043, 24.96224],
    description: "Residential north-east with detached houses and smaller apartment blocks in Itä-Pakila and Tuomarinkylä's edges.",
    rent: OUTER, safety: 9.0, transport: 6.4, nightlife: 1.5, studentFit: 5.4,
    commute: "25–35 min by bus", bestFor: "Quiet family-style areas", caution: "Few student rentals",
    landmarks: ["Itä-Pakila"] }),

  // ── North-east ──
  s({ slug: "latokartano", name: "Latokartano", at: [60.22489, 25.01318],
    description: "Viikki's campus of the University of Helsinki for life sciences, with modern eco-neighbourhoods, a nature reserve and Hoas student housing; light rail line 15 stops here.",
    rent: OUTER, safety: 8.8, transport: 7.6, nightlife: 2.0, studentFit: 8.4,
    commute: "Viikki campus on site; 20–25 min by bus to the centre", bestFor: "Viikki students who like nature", caution: "Bus-dependent for the centre",
    landmarks: ["University of Helsinki (Viikki campus)", "Viikki nature reserve"] }),
  s({ slug: "pukinmaki", name: "Pukinmäki", at: [60.24486, 24.9863],
    description: "Residential area on the main rail line north of Oulunkylä.",
    rent: OUTER, safety: 8.2, transport: 7.6, nightlife: 1.5, studentFit: 6.4,
    commute: "15 min by train", bestFor: "Affordable flats on the train line", caution: "Little to do locally",
    landmarks: ["Pukinmäki station"] }),
  s({ slug: "malmi", name: "Malmi", at: [60.25327, 25.01877],
    description: "North-east hub with shops, a train station, Tapanila's wooden villas and the former Malmi airport area.",
    rent: OUTER, safety: 7.2, transport: 7.8, nightlife: 2.5, studentFit: 6.6,
    commute: "15–20 min by train", bestFor: "Low rents with fast trains", caution: "Mixed reputation around the station at night",
    landmarks: ["Malmi station", "Tapanila"] }),
  s({ slug: "suutarila", name: "Suutarila", at: [60.27489, 24.99901],
    description: "Northern suburbs around Siltamäki, mostly family homes.",
    rent: OUTER, safety: 8.4, transport: 6.4, nightlife: 1.0, studentFit: 5.2,
    commute: "30–35 min by train or bus", bestFor: "Quiet suburban living", caution: "Long commute",
    landmarks: ["Siltamäki"] }),
  s({ slug: "puistola", name: "Puistola", at: [60.27052, 25.04739],
    description: "Northern suburbs around Puistola station on the main rail line, mostly family homes.",
    rent: OUTER, safety: 8.2, transport: 7.0, nightlife: 1.0, studentFit: 5.6,
    commute: "20–25 min by train", bestFor: "Lower rents and a village feel", caution: "Far from campuses",
    landmarks: ["Puistola station"] }),
  s({ slug: "jakomaki", name: "Jakomäki", at: [60.25912, 25.07832],
    description: "A small, high-rise suburb at Helsinki's north-eastern edge.",
    rent: OUTER, safety: 6.6, transport: 6.0, nightlife: 1.0, studentFit: 5.0,
    commute: "35–40 min by bus or bus + metro", bestFor: "The lowest rents", caution: "Isolated; check the area before signing",
    landmarks: ["Jakomäki"] }),

  // ── South-east ──
  s({ slug: "kulosaari", name: "Kulosaari", at: [60.18587, 25.00741],
    description: "An island villa district just east of Kalasatama, on the metro line.",
    rent: MIDDLE, safety: 9.0, transport: 8.4, nightlife: 2.0, studentFit: 6.8,
    commute: "About 10 min by metro", bestFor: "Quiet living close to the centre", caution: "Few rentals; mostly villas",
    landmarks: ["Kulosaari metro station"] }),
  s({ slug: "herttoniemi", name: "Herttoniemi", at: [60.20001, 25.0381],
    description: "Eastern districts around Herttoniemi metro, with Roihuvuori's cherry park and plenty of mid-priced flats.",
    rent: OUTER, safety: 8.2, transport: 8.4, nightlife: 3.0, studentFit: 7.6,
    commute: "About 15 min by metro", bestFor: "Good value on the metro", caution: "Some areas a bus ride from the metro",
    landmarks: ["Herttoniemi metro station", "Roihuvuori"] }),
  s({ slug: "laajasalo", name: "Laajasalo", at: [60.17, 25.05061],
    description: "A large green island district in the south-east with seaside paths. The Kruunuvuori Bridge opened to pedestrians and cyclists in April 2026; trams across it to the centre are due in early 2027.",
    rent: OUTER, safety: 8.8, transport: 6.4, nightlife: 1.5, studentFit: 6.0,
    commute: "25–35 min by bus + metro", bestFor: "Seaside nature", caution: "Bus-dependent until the tram starts in 2027",
    landmarks: ["Laajasalo"] }),

  // ── East ──
  s({ slug: "vartiokyla", name: "Vartiokylä", at: [60.21345, 25.09004],
    description: "East Helsinki around Itäkeskus, one of the Nordics' largest shopping centres, with the metro and light rail line 15.",
    rent: OUTER, safety: 7.0, transport: 8.6, nightlife: 3.0, studentFit: 7.2,
    commute: "About 15 min by metro", bestFor: "Low rents and shopping on the metro", caution: "Busy, mixed-reputation areas around the centre at night",
    landmarks: ["Itäkeskus"] }),
  s({ slug: "myllypuro", name: "Myllypuro", at: [60.22118, 25.06289],
    description: "Home to Metropolia's large Myllypuro campus, next to the metro station and student housing.",
    rent: OUTER, safety: 7.6, transport: 8.4, nightlife: 2.5, studentFit: 8.2,
    commute: "Metropolia Myllypuro on site; about 15 min by metro to the centre", bestFor: "Metropolia students", caution: "Quiet outside term time",
    landmarks: ["Metropolia (Myllypuro campus)", "Myllypuro metro station"] }),
  s({ slug: "mellunkyla", name: "Mellunkylä", at: [60.23622, 25.08807],
    description: "Kontula, Kivikko and Mellunmäki at the end of the eastern metro branch.",
    rent: OUTER, safety: 6.8, transport: 8.0, nightlife: 2.0, studentFit: 6.6,
    commute: "20–25 min by metro", bestFor: "Low rents on the metro", caution: "Check the exact building and area",
    landmarks: ["Kontula"] }),
  s({ slug: "vuosaari", name: "Vuosaari", at: [60.2123, 25.15061],
    description: "Beaches, nature trails and the harbour at the end of the eastern metro line.",
    rent: OUTER, safety: 7.8, transport: 7.8, nightlife: 2.5, studentFit: 6.6,
    commute: "About 20–25 min by metro", bestFor: "Beaches and nature at low rents", caution: "Long commute to the western campuses",
    landmarks: ["Vuosaari metro station"] }),
  s({ slug: "ostersundom", name: "Östersundom", at: [60.26309, 25.19476],
    description: "Rural easternmost Helsinki with farms, forests and the coast — few homes and no rail.",
    rent: OUTER, safety: 9.0, transport: 4.0, nightlife: 0.5, studentFit: 3.6,
    commute: "40–60 min by bus + metro", bestFor: "Countryside living", caution: "Almost no student rentals; car useful",
    landmarks: ["Östersundom"] }),
];

export type HelsinkiPeruspiiriListing = Listing & { peruspiiriSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const helsinkiListings: HelsinkiPeruspiiriListing[] = [
  { id: "hk-sample-kallio-room", peruspiiriSlug: "kallio", title: "Room in a Kallio shared flat", rent: 650, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.1835, lng: 24.9525, description: "Furnished room in a three-room flat near Hakaniemi metro.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Bills included"] },
  { id: "hk-sample-kruununhaka-studio", peruspiiriSlug: "vironniemi", title: "Studio near the City Centre campus", rent: 950, currency: "€", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.1720, lng: 24.9560, description: "Small studio in Kruununhaka, a 5-minute walk to the University of Helsinki.", rooms: 1, sizeSqm: 22, availableFrom: "1 Dec 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "hk-sample-kamppi-room", peruspiiriSlug: "kampinmalmi", title: "Room near Ruoholahti metro", rent: 700, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.1640, lng: 24.9140, description: "Room in a shared flat, about 10 minutes by metro to Aalto.", rooms: 1, sizeSqm: 13, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Washing machine"] },
  { id: "hk-sample-kumpula-room", peruspiiriSlug: "vanhakaupunki", title: "Shared-flat room near Kumpula", rent: 480, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.2075, lng: 24.9720, description: "Unfurnished room in a student flat in Arabianranta, a walk to Kumpula campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Internet included", "Sauna in building"] },
  { id: "hk-sample-pasila-room", peruspiiriSlug: "pasila", title: "Room near Pasila station", rent: 600, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.2010, lng: 24.9300, description: "Room in a newer flat next to Tripla and the trains.", rooms: 1, sizeSqm: 12, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Balcony"] },
  { id: "hk-sample-lauttasaari-room", peruspiiriSlug: "lauttasaari", title: "Room on Lauttasaari", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.1590, lng: 24.8830, description: "Room in a shared flat near the metro — handy for both the centre and Aalto.", rooms: 1, sizeSqm: 13, availableFrom: "1 Jan 2027", amenities: ["Furnished", "Bills included"] },
  { id: "hk-sample-viikki-room", peruspiiriSlug: "latokartano", title: "Student room in Viikki", rent: 430, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 60.2280, lng: 25.0150, description: "Unfurnished room in a student flat next to the Viikki campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Dec 2026", amenities: ["Internet included", "Shared kitchen"] },
  { id: "hk-sample-myllypuro-studio", peruspiiriSlug: "myllypuro", title: "Studio near Metropolia Myllypuro", rent: 680, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 60.2240, lng: 25.0740, description: "Unfurnished studio a few minutes from the campus and the metro.", rooms: 1, sizeSqm: 25, availableFrom: "1 Jan 2027", amenities: ["Kitchenette", "Private bathroom"] },
  { id: "hk-sample-herttoniemi-room", peruspiiriSlug: "herttoniemi", title: "Room in Herttoniemi", rent: 540, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 60.1960, lng: 25.0320, description: "Room in a shared flat near Herttoniemi metro.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished"] },
];

export function getHelsinkiPeruspiiriBySlug(slug: string): HelsinkiPeruspiiri | undefined {
  return helsinkiPeruspiirit.find((x) => x.slug === slug);
}

export function getHelsinkiListingsForPeruspiiri(slug: string | null): HelsinkiPeruspiiriListing[] {
  if (!slug) return [];
  return helsinkiListings.filter((l) => l.peruspiiriSlug === slug);
}
