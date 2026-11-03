import type { Listing } from "./listings";

// Ottignies-Louvain-la-Neuve, grouped from Statbel's 2025 statistical sectors (CC BY 4.0) into the town's
// neighbourhoods: Louvain-la-Neuve's quartiers, the science park, Ottignies, Limelette and Céroux-Mousty.
// Louvain School of Management (Place des Doyens, home of CEMS) is in the Louvain-la-Neuve centre sector.
// Rents are estimated monthly ranges for a kot (student room); scores are editorial judgments.

export type LouvainQuartier = {
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

type Base = Omit<LouvainQuartier, "lat" | "lng" | "badge"> & { at: [number, number]; lln?: boolean };
const s = ({ at, lln = false, ...rest }: Base): LouvainQuartier => ({
  ...rest,
  badge: lln ? "Louvain-la-Neuve" : "Ottignies & villages",
  lat: at[0],
  lng: at[1],
});

export const louvainQuartiers: LouvainQuartier[] = [
  s({ slug: "lln-centre", name: "Centre", lln: true, at: [50.6687, 4.6111],
    description: "The car-free heart of Louvain-la-Neuve, built on a deck above the railway: the Grand-Place, Place de l'Université, the Aula Magna, the lake and L'esplanade shopping centre — and the Louvain School of Management at Place des Doyens.",
    rent: "€420–600/mo", safety: 8.4, transport: 9.2, nightlife: 8.8, studentFit: 9.6,
    commute: "LSM on site; everything within a 5-min walk", bestFor: "Students who want to live in the middle of campus life", caution: "Busy and loud on Thursday nights, when many students go out",
    landmarks: ["Louvain School of Management (Place des Doyens)", "Grand-Place", "Place de l'Université", "Aula Magna", "Lac de Louvain-la-Neuve", "L'esplanade"] }),
  s({ slug: "biereau", name: "Biéreau", lln: true, at: [50.6655, 4.618],
    description: "East of the centre around the Ferme du Biéreau concert venue and the academic buildings of the Biéreau zone, with student residences and kots nearby.",
    rent: "€380–520/mo", safety: 8.6, transport: 8.6, nightlife: 6.5, studentFit: 9.0,
    commute: "5–10 min walk", bestFor: "Quiet kots a short walk from the centre", caution: "Fewer shops than the centre",
    landmarks: ["Ferme du Biéreau", "Espinette"] }),
  s({ slug: "hocaille", name: "Hocaille", lln: true, at: [50.6699, 4.6039],
    description: "Western quarter around the Place de l'Hocaille and the Ferme du Blocry, with many kots and the university sports centre.",
    rent: "€380–520/mo", safety: 8.6, transport: 8.4, nightlife: 6.0, studentFit: 8.8,
    commute: "10 min walk", bestFor: "Sporty students and calmer kots", caution: "Uphill walks back from the centre",
    landmarks: ["Place de l'Hocaille", "Ferme du Blocry", "University sports centre"] }),
  s({ slug: "bruyeres", name: "Bruyères", lln: true, at: [50.6612, 4.6056],
    description: "Southern residential quarter with family homes, kots and the Bois des Bruyères woods.",
    rent: "€380–520/mo", safety: 8.8, transport: 8.0, nightlife: 4.5, studentFit: 8.4,
    commute: "10–15 min walk", bestFor: "Green surroundings close to the centre", caution: "Mix of families and students — expect quiet hours",
    landmarks: ["Bois des Bruyères"] }),
  s({ slug: "lauzelle", name: "Lauzelle", lln: true, at: [50.676, 4.601],
    description: "Northern quarter next to the Bois de Lauzelle forest, with student housing, apartments and the Athena area.",
    rent: "€370–500/mo", safety: 8.6, transport: 7.8, nightlife: 4.0, studentFit: 8.0,
    commute: "15 min walk", bestFor: "Nature lovers who still want to walk to class", caution: "Further from the centre's shops and bars",
    landmarks: ["Bois de Lauzelle"] }),
  s({ slug: "baraque", name: "La Baraque & Courbevoie", lln: true, at: [50.6715, 4.623],
    description: "The alternative, self-built neighbourhood of La Baraque with its caravans and eco-houses, and the newer Courbevoie quarter next to it.",
    rent: "€380–520/mo", safety: 8.4, transport: 7.8, nightlife: 4.5, studentFit: 7.8,
    commute: "10–15 min walk", bestFor: "Community-minded and alternative living", caution: "Limited classic kots; ask around in person",
    landmarks: ["La Baraque", "Courbevoie"] }),
  s({ slug: "parc-scientifique", name: "Science park", lln: true, at: [50.6705, 4.633],
    description: "The Louvain-la-Neuve science park and business areas east of town, with research labs and companies but little housing.",
    rent: "€400–550/mo", safety: 8.4, transport: 7.0, nightlife: 1.5, studentFit: 5.6,
    commute: "15–20 min walk or bus", bestFor: "Students with internships in the science park", caution: "Very few homes; quiet after office hours",
    landmarks: ["Science park"] }),
  s({ slug: "ottignies", name: "Ottignies", at: [50.6735, 4.5687],
    description: "The older town in the valley around Ottignies station, a major rail junction with frequent trains to Louvain-la-Neuve and Brussels, plus shops and flats at lower prices.",
    rent: "€380–550/mo", safety: 8.2, transport: 9.0, nightlife: 4.0, studentFit: 7.6,
    commute: "About 10 min by train or bus", bestFor: "Students who travel to Brussels often", caution: "Daily train or bus ride to campus",
    landmarks: ["Ottignies station"] }),
  s({ slug: "limelette", name: "Limelette", at: [50.6839, 4.5563],
    description: "A residential village north of Ottignies with houses, fields and woods.",
    rent: "€380–520/mo", safety: 9.0, transport: 6.0, nightlife: 1.0, studentFit: 5.6,
    commute: "15–20 min by bus or car", bestFor: "Quiet village living", caution: "Few rooms; buses are infrequent",
    landmarks: ["Limelette"] }),
  s({ slug: "ceroux-mousty", name: "Céroux-Mousty", at: [50.6606, 4.5345],
    description: "Rural villages west of Ottignies along the Dyle valley.",
    rent: "€380–520/mo", safety: 9.0, transport: 5.4, nightlife: 1.0, studentFit: 5.0,
    commute: "20–30 min by bus or car", bestFor: "Countryside and space", caution: "Car or bike needed; very few kots",
    landmarks: ["Céroux", "Mousty"] }),
];

export type LouvainQuartierListing = Listing & { quartierSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const louvainListings: LouvainQuartierListing[] = [
  { id: "ll-sample-centre-kot", quartierSlug: "lln-centre", title: "Kot near the Grand-Place", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.6693, lng: 4.6122, description: "Furnished kot with a shared kitchen, a 3-minute walk to the Louvain School of Management.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Internet included", "Shared kitchen"] },
  { id: "ll-sample-centre-studio", quartierSlug: "lln-centre", title: "Studio by the lake", rent: 720, currency: "€", type: "Studio", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.6668, lng: 4.6075, description: "Furnished studio with a view of the lake.", rooms: 1, sizeSqm: 24, availableFrom: "1 Sep 2027", amenities: ["Furnished", "Private bathroom", "Kitchenette"], riskNote: "Higher caution" },
  { id: "ll-sample-biereau-kot", quartierSlug: "biereau", title: "Kot in Biéreau", rent: 440, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.6655, lng: 4.618, description: "Room in a house of eight kots near the Ferme du Biéreau.", rooms: 1, sizeSqm: 11, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Shared kitchen"] },
  { id: "ll-sample-hocaille-kot", quartierSlug: "hocaille", title: "Kot in the Hocaille", rent: 460, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.67, lng: 4.6042, description: "Furnished kot close to the sports centre.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2027", amenities: ["Furnished", "Bike storage"] },
  { id: "ll-sample-bruyeres-kot", quartierSlug: "bruyeres", title: "Kot in Bruyères", rent: 430, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.6618, lng: 4.6062, description: "Room in a family house with a garden, 12 minutes' walk to the centre.", rooms: 1, sizeSqm: 14, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Garden"] },
  { id: "ll-sample-lauzelle-kot", quartierSlug: "lauzelle", title: "Kot near the Bois de Lauzelle", rent: 410, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.676, lng: 4.601, description: "Kot in a student residence next to the forest.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2027", amenities: ["Furnished", "Shared kitchen"] },
  { id: "ll-sample-ottignies-room", quartierSlug: "ottignies", title: "Room near Ottignies station", rent: 470, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 50.673, lng: 4.569, description: "Room in a shared flat a few minutes from the station, with trains to campus and Brussels.", rooms: 1, sizeSqm: 14, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Washing machine"] },
];

export function getLouvainQuartierBySlug(slug: string): LouvainQuartier | undefined {
  return louvainQuartiers.find((x) => x.slug === slug);
}

export function getLouvainListingsForQuartier(slug: string | null): LouvainQuartierListing[] {
  if (!slug) return [];
  return louvainListings.filter((l) => l.quartierSlug === slug);
}
