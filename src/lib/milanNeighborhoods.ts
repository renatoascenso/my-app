import type { Listing } from "./listings";

// Milan's 9 municipi.
// Boundaries: Comune di Milano, Open Data (CC BY 4.0), credited in MilanExplorer.
// Room prices are estimated ranges for a single room; scores are editorial judgments.

export type MilanMunicipio = {
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

type Base = Omit<MilanMunicipio, "slug" | "lat" | "lng"> & { at: [number, number] };
const m = ({ at, ...rest }: Base): MilanMunicipio => ({ ...rest, slug: `municipio-${rest.number}`, lat: at[0], lng: at[1] });

export const milanMunicipi: MilanMunicipio[] = [
  m({ number: 1, name: "Centro storico", at: [45.46663, 9.18563],
    description: "Everything inside the old ring of the Bastioni: the Duomo, Brera, the Castello Sforzesco and Parco Sempione, plus the Università Statale's main building and the Università Cattolica.",
    rent: "€780–€900/mo", safety: 8.6, transport: 10, nightlife: 8.5, studentFit: 7.8,
    commute: "Statale and Cattolica on site; 15–20 min to Politecnico and Bocconi", bestFor: "Living in the heart of the city", caution: "Milan's most expensive rooms",
    landmarks: ["Duomo", "Brera", "Castello Sforzesco", "Università Statale (Via Festa del Perdono)", "Università Cattolica"] }),
  m({ number: 2, name: "Centrale, Gorla, Greco", at: [45.50341, 9.22459],
    description: "From the Stazione Centrale north along Via Padova: the multicultural, increasingly trendy NoLo area and residential Gorla, Greco and Crescenzago on metro line 1.",
    rent: "€600–€720/mo", safety: 7.0, transport: 9.0, nightlife: 6.5, studentFit: 7.8,
    commute: "15–20 min to Politecnico (Città Studi) and Bicocca", bestFor: "Value with good metro links", caution: "Some streets around the station and Via Padova feel rough at night",
    landmarks: ["Stazione Centrale", "NoLo (Via Padova)"] }),
  m({ number: 3, name: "Città Studi, Lambrate", at: [45.48498, 9.24004],
    description: "Milan's engineering and science quarter: the Politecnico's Leonardo campus and the Statale's science faculties in Città Studi, plus Lambrate station and its design district.",
    rent: "€650–€780/mo", safety: 8.4, transport: 9.0, nightlife: 6.5, studentFit: 9.2,
    commute: "You're at Politecnico Leonardo and the Statale's Città Studi campus", bestFor: "Politecnico and science students", caution: "High demand before each semester",
    landmarks: ["Politecnico (Leonardo campus)", "Città Studi (Statale sciences)", "Lambrate station"] }),
  m({ number: 4, name: "Vittoria, Forlanini", at: [45.44891, 9.23943],
    description: "A large south-eastern district from Porta Romana station and Corvetto out to the Forlanini park and the new Santa Giulia area, crossed by metro line 3.",
    rent: "€600–€720/mo", safety: 7.6, transport: 8.4, nightlife: 5.5, studentFit: 7.6,
    commute: "15–20 min to Bocconi; 20–25 min to the Statale", bestFor: "Good value south-east of the center", caution: "Corvetto is less safe at night",
    landmarks: ["Porta Romana station", "Corvetto", "Parco Forlanini"] }),
  m({ number: 5, name: "Vigentino, Gratosoglio", at: [45.42014, 9.19558],
    description: "Bocconi University and its student residences sit at this district's northern tip, near the Fondazione Prada; further south are residential Vigentino and Gratosoglio and the Parco Agricolo Sud.",
    rent: "€620–€750/mo", safety: 7.8, transport: 7.8, nightlife: 5.0, studentFit: 8.6,
    commute: "Bocconi on site in the north; 15 min to the Statale", bestFor: "Bocconi students", caution: "Southern areas are far from the center",
    landmarks: ["Bocconi University", "Fondazione Prada", "Gratosoglio"] }),
  m({ number: 6, name: "Barona, Lorenteggio", at: [45.44147, 9.14355],
    description: "The Navigli canals and Zona Tortona's design scene in the north, IULM University, and the residential Barona and Lorenteggio areas further out on the new M4 line.",
    rent: "€600–€720/mo", safety: 7.8, transport: 8.0, nightlife: 8.5, studentFit: 8.4,
    commute: "IULM on site; 15–20 min to Bocconi and the Statale", bestFor: "Aperitivo by the canals and IULM students", caution: "Navigli rooms are noisy and pricey",
    landmarks: ["Naviglio Grande", "Zona Tortona", "IULM University", "Lorenteggio", "Barona"] }),
  m({ number: 7, name: "Baggio, De Angeli, San Siro", at: [45.46902, 9.09645],
    description: "The western district around San Siro stadium and the elegant De Angeli area, stretching out to Baggio and the edge of the city.",
    rent: "€580–€700/mo", safety: 7.6, transport: 7.8, nightlife: 4.5, studentFit: 7.0,
    commute: "20–30 min to the Statale and Cattolica", bestFor: "Calm residential streets", caution: "Long commutes from the outer areas",
    landmarks: ["San Siro stadium", "Baggio"] }),
  m({ number: 8, name: "Fiera, Gallaratese, Quarto Oggiaro", at: [45.49932, 9.13001],
    description: "CityLife's skyscrapers and the MiCo congress center close to the center, then Gallaratese and Quarto Oggiaro to the north-west on metro lines 1 and 5.",
    rent: "€620–€750/mo", safety: 7.4, transport: 8.4, nightlife: 5.0, studentFit: 7.2,
    commute: "15–30 min to the Statale and Cattolica", bestFor: "Modern flats near CityLife", caution: "Quarto Oggiaro has a rougher reputation",
    landmarks: ["CityLife", "Gallaratese", "Quarto Oggiaro"] }),
  m({ number: 9, name: "Garibaldi, Niguarda", at: [45.51197, 9.18157],
    description: "Porta Nuova's towers and the lively Isola neighborhood, the Politecnico's Bovisa campus, Milano-Bicocca University and Niguarda hospital in the north.",
    rent: "€620–€760/mo", safety: 8.0, transport: 8.8, nightlife: 7.5, studentFit: 9.0,
    commute: "Bicocca and Politecnico Bovisa on site; 10–15 min to the center", bestFor: "Bicocca and Bovisa students, Isola nightlife", caution: "Prices near Porta Nuova rival the center",
    landmarks: ["Isola", "Porta Nuova (Piazza Gae Aulenti)", "Università di Milano-Bicocca", "Politecnico (Bovisa campus)", "Niguarda hospital"] }),
];

export type MilanMunicipioListing = Listing & { municipioSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const milanListings: MilanMunicipioListing[] = [
  { id: "mi-sample-polimi-room", municipioSlug: "municipio-3", title: "Room near Politecnico Leonardo", rent: 690, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 45.4800, lng: 9.2290, description: "Single room in a 4-person flat, a 5-minute walk to Piazza Leonardo da Vinci.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Registered contract"] },
  { id: "mi-sample-bocconi-room", municipioSlug: "municipio-5", title: "Room near Bocconi", rent: 760, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 45.4480, lng: 9.1900, description: "Room in a shared flat close to Bocconi and the tram to the Duomo.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "mi-sample-brera-studio", municipioSlug: "municipio-1", title: "Studio in Brera", rent: 1250, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 45.4715, lng: 9.1870, description: "Small furnished studio in a historic building in Brera.", rooms: 1, sizeSqm: 25, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "mi-sample-isola-room", municipioSlug: "municipio-9", title: "Room in Isola", rent: 740, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.4885, lng: 9.1885, description: "Room in a shared flat near Piazzale Segrino and the Garibaldi station.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "mi-sample-bicocca-room", municipioSlug: "municipio-9", title: "Room near Bicocca", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.5150, lng: 9.2100, description: "Room in a modern flat a short walk from the Milano-Bicocca campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "mi-sample-navigli-room", municipioSlug: "municipio-6", title: "Room by the Navigli", rent: 720, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.4500, lng: 9.1700, description: "Room in a classic ringhiera building along the Naviglio Grande.", rooms: 1, sizeSqm: 11, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "mi-sample-nolo-room", municipioSlug: "municipio-2", title: "Room in NoLo", rent: 620, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.4935, lng: 9.2210, description: "Room in a shared flat near metro line 1, 15 minutes to Città Studi.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Registered contract"] },
  { id: "mi-sample-citylife-room", municipioSlug: "municipio-8", title: "Room near CityLife", rent: 700, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.4800, lng: 9.1550, description: "Room in a newer building close to the M5 and the CityLife park.", rooms: 1, sizeSqm: 13, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Elevator"] },
  { id: "mi-sample-lodi-room", municipioSlug: "municipio-4", title: "Room near Porta Romana", rent: 650, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 45.4430, lng: 9.2150, description: "Room on metro line 3, a few stops from Bocconi and the Duomo.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
];

export function getMilanMunicipioBySlug(slug: string): MilanMunicipio | undefined {
  return milanMunicipi.find((x) => x.slug === slug);
}

export function getMilanListingsForMunicipio(slug: string | null): MilanMunicipioListing[] {
  if (!slug) return [];
  return milanListings.filter((l) => l.municipioSlug === slug);
}
