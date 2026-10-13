import type { Listing } from "./listings";

// Barcelona's 10 districts (districtes).
// Boundaries: Ajuntament de Barcelona, Open Data BCN (CC BY 4.0), credited in BarcelonaExplorer.
// Room prices are estimated ranges; scores are editorial judgments.

export type BarcelonaDistricte = {
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

type Base = Omit<BarcelonaDistricte, "lat" | "lng"> & { at: [number, number] };
const d = ({ at, ...rest }: Base): BarcelonaDistricte => ({ ...rest, lat: at[0], lng: at[1] });

export const barcelonaDistrictes: BarcelonaDistricte[] = [
  d({ slug: "ciutat-vella", name: "Ciutat Vella", number: 1, at: [41.38113, 2.18074],
    description: "The old city: the Gothic Quarter, El Raval, El Born and La Barceloneta by the beach, plus UPF's Mar campus. Atmospheric and central, but crowded with tourists.",
    rent: "€550–€700/mo", safety: 6.6, transport: 9.6, nightlife: 9.8, studentFit: 8.0,
    commute: "10–15 min to UPF Ciutadella; 25–30 min to Zona Universitària", bestFor: "Nightlife, the beach and living in the center", caution: "Pickpocketing, noise and small, dark flats",
    landmarks: ["La Rambla", "El Raval", "El Born", "Barceloneta beach", "UPF Mar campus"] }),
  d({ slug: "eixample", name: "Eixample", number: 2, at: [41.3916, 2.16448],
    description: "Cerdà's famous grid of wide avenues and modernist buildings — the Sagrada Família, UB's historic building and the Hospital Clínic medical campus — with excellent metro links everywhere.",
    rent: "€620–€780/mo", safety: 8.0, transport: 9.8, nightlife: 8.0, studentFit: 8.6,
    commute: "20 min to Zona Universitària; UB historic building on site", bestFor: "Central, convenient living near UB", caution: "Traffic noise on the main avenues; high demand",
    landmarks: ["UB historic building (Plaça Universitat)", "Hospital Clínic", "Sagrada Família"] }),
  d({ slug: "sants-montjuic", name: "Sants-Montjuïc", number: 3, at: [41.34988, 2.14364],
    description: "From the Montjuïc hill and Plaça d'Espanya to Poble-sec's tapas bars and the Sants neighborhood around the main train station.",
    rent: "€520–€650/mo", safety: 7.6, transport: 9.2, nightlife: 7.5, studentFit: 8.0,
    commute: "20 min to Zona Universitària", bestFor: "Value close to the center", caution: "Quieter and less polished around the port",
    landmarks: ["Sants station", "Plaça d'Espanya", "Poble-sec", "Montjuïc castle"] }),
  d({ slug: "les-corts", name: "Les Corts", number: 4, at: [41.38693, 2.11824],
    description: "Home to the Zona Universitària on the Diagonal — UB's Diagonal campus, UPC's Campus Nord and ESADE in Pedralbes — plus FC Barcelona's Camp Nou.",
    rent: "€600–€750/mo", safety: 8.8, transport: 8.8, nightlife: 5.0, studentFit: 8.8,
    commute: "You're at the Zona Universitària", bestFor: "UB, UPC and ESADE students who want a short walk to class", caution: "Quiet in the evenings; match days near the stadium",
    landmarks: ["UB Diagonal campus", "UPC Campus Nord", "ESADE (Pedralbes)", "Camp Nou"] }),
  d({ slug: "sarria-sant-gervasi", name: "Sarrià-Sant Gervasi", number: 5, at: [41.41143, 2.11176],
    description: "Barcelona's most affluent district, rising from Sant Gervasi and Bonanova up into the Collserola hills and Tibidabo, with several private universities nearby.",
    rent: "€650–€800/mo", safety: 9.2, transport: 8.0, nightlife: 5.5, studentFit: 7.2,
    commute: "15–20 min to Zona Universitària", bestFor: "Safety, calm and green views", caution: "The most expensive area; hilly streets",
    landmarks: ["Bonanova", "Tibidabo"] }),
  d({ slug: "gracia", name: "Gràcia", number: 6, at: [41.41026, 2.15223],
    description: "A former village with its own identity: small squares full of terraces like Plaça del Sol, independent shops, the Festa Major in August and Gaudí's Park Güell.",
    rent: "€600–€750/mo", safety: 8.4, transport: 9.0, nightlife: 8.5, studentFit: 9.0,
    commute: "20–25 min to Zona Universitària", bestFor: "Students who want neighborhood life and squares", caution: "Very high demand; small flats",
    landmarks: ["Plaça del Sol", "Park Güell"] }),
  d({ slug: "horta-guinardo", name: "Horta-Guinardó", number: 7, at: [41.42917, 2.15057],
    description: "A hilly residential district with the Bunkers del Carmel viewpoint, the Sant Pau modernist site, the Vall d'Hebron hospital and UB's Mundet campus.",
    rent: "€480–€600/mo", safety: 8.2, transport: 7.8, nightlife: 4.5, studentFit: 7.6,
    commute: "30 min to Zona Universitària; UB Mundet and Vall d'Hebron on site", bestFor: "Lower rents and medicine or education students", caution: "Steep streets, far from the beach",
    landmarks: ["Bunkers del Carmel", "Sant Pau modernist site", "Vall d'Hebron hospital", "UB Mundet campus"] }),
  d({ slug: "nou-barris", name: "Nou Barris", number: 8, at: [41.44631, 2.17508],
    description: "A working-class northern district at the foot of Collserola, with some of the lowest rents in the city and metro lines 1, 3, 4 and 5.",
    rent: "€430–€530/mo", safety: 7.0, transport: 7.8, nightlife: 3.5, studentFit: 6.8,
    commute: "35–40 min to Zona Universitària", bestFor: "Tight budgets", caution: "Far from campuses and the center",
    landmarks: [] }),
  d({ slug: "sant-andreu", name: "Sant Andreu", number: 9, at: [41.43503, 2.1933],
    description: "A calm district built around the old village of Sant Andreu de Palomar, with markets, the Fabra i Coats cultural factory and Rodalies trains to the center.",
    rent: "€470–€580/mo", safety: 8.0, transport: 8.0, nightlife: 4.5, studentFit: 7.0,
    commute: "35 min to Zona Universitària", bestFor: "A local, village feel at lower prices", caution: "Long commute to the western campuses",
    landmarks: ["Fabra i Coats", "La Maquinista"] }),
  d({ slug: "sant-marti", name: "Sant Martí", number: 10, at: [41.40763, 2.20104],
    description: "Poblenou and the 22@ tech district, the beaches from Bogatell to Llevant, the Vila Olímpica and UPF's Ciutadella and Poblenou campuses; UPC's Diagonal-Besòs campus is just across the city limit.",
    rent: "€580–€720/mo", safety: 8.2, transport: 8.8, nightlife: 7.0, studentFit: 8.6,
    commute: "UPF campuses on site; 35 min to Zona Universitària", bestFor: "UPF students and beach life", caution: "Rising prices in Poblenou",
    landmarks: ["UPF Ciutadella campus", "UPF Poblenou campus", "Poblenou (22@)"] }),
];

export type BarcelonaDistricteListing = Listing & { districteSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const barcelonaListings: BarcelonaDistricteListing[] = [
  { id: "bc-sample-eixample-room", districteSlug: "eixample", title: "Room near Plaça Universitat", rent: 680, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.3880, lng: 2.1610, description: "Room in a modernist flat in the Eixample, a short walk to UB's historic building.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Empadronamiento possible"] },
  { id: "bc-sample-gracia-room", districteSlug: "gracia", title: "Room in Gràcia", rent: 650, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.4010, lng: 2.1560, description: "Room in a shared flat near Plaça del Sol, with the metro to the Diagonal.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "bc-sample-raval-room", districteSlug: "ciutat-vella", title: "Room in El Raval", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.3800, lng: 2.1680, description: "Room in an older building in the heart of the old city.", rooms: 1, sizeSqm: 9, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Wifi included"], riskNote: "Higher caution" },
  { id: "bc-sample-poblenou-room", districteSlug: "sant-marti", title: "Room near UPF Poblenou", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.4030, lng: 2.1950, description: "Room shared with UPF students, ten minutes from the beach.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "bc-sample-lescorts-room", districteSlug: "les-corts", title: "Room near Zona Universitària", rent: 660, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.3860, lng: 2.1250, description: "Room in a quiet flat a short walk from the UB and UPC Diagonal campuses.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "bc-sample-sants-room", districteSlug: "sants-montjuic", title: "Room in Sants", rent: 580, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.3760, lng: 2.1380, description: "Room near Sants station with direct metro to the Diagonal.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
  { id: "bc-sample-horta-room", districteSlug: "horta-guinardo", title: "Room in Guinardó", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.4200, lng: 2.1650, description: "Bright room with city views, on metro line 4.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Terrace"] },
  { id: "bc-sample-sarria-studio", districteSlug: "sarria-sant-gervasi", title: "Studio in Sant Gervasi", rent: 950, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 41.3990, lng: 2.1300, description: "Small furnished studio in a calm residential street.", rooms: 1, sizeSqm: 25, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "bc-sample-noubarris-room", districteSlug: "nou-barris", title: "Budget room in Nou Barris", rent: 460, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.4420, lng: 2.1780, description: "Room in a family-run shared flat near metro line 5.", rooms: 1, sizeSqm: 10, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
];

export function getBarcelonaDistricteBySlug(slug: string): BarcelonaDistricte | undefined {
  return barcelonaDistrictes.find((x) => x.slug === slug);
}

export function getBarcelonaListingsForDistricte(slug: string | null): BarcelonaDistricteListing[] {
  if (!slug) return [];
  return barcelonaListings.filter((l) => l.districteSlug === slug);
}
