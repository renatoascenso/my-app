import type { Listing } from "./listings";

// Madrid's 21 districts (distritos).
// Boundaries: Ayuntamiento de Madrid, Geoportal (open data, reuse with attribution), credited in
// MadridExplorer. Room prices are estimated ranges; scores are editorial judgments.

export type MadridDistrito = {
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

type Base = Omit<MadridDistrito, "lat" | "lng"> & { at: [number, number] };
const d = ({ at, ...rest }: Base): MadridDistrito => ({ ...rest, lat: at[0], lng: at[1] });

export const madridDistritos: MadridDistrito[] = [
  d({ slug: "centro", name: "Centro", number: 1, at: [40.41732, -3.70528],
    description: "The historic heart of Madrid: Sol, Plaza Mayor and Gran Vía, plus the barrios students love — Malasaña, Chueca, Lavapiés and La Latina — and Comillas' ICADE campus.",
    rent: "€600–€750/mo", safety: 7.4, transport: 10, nightlife: 9.8, studentFit: 8.8,
    commute: "15–20 min to Ciudad Universitaria", bestFor: "Nightlife, culture and walking everywhere", caution: "Noisy streets, small old flats and many tourist lets",
    landmarks: ["Puerta del Sol", "Plaza Mayor", "Gran Vía", "Malasaña", "Chueca", "Lavapiés", "La Latina", "Comillas ICADE"] }),
  d({ slug: "arganzuela", name: "Arganzuela", number: 2, at: [40.39802, -3.6968],
    description: "A central, residential district between Atocha and the Madrid Río park, with the Matadero cultural center and quick links to the south and to Getafe.",
    rent: "€550–€650/mo", safety: 8.2, transport: 9.4, nightlife: 6.5, studentFit: 8.0,
    commute: "25 min to Ciudad Universitaria; Cercanías to UC3M Getafe from Atocha", bestFor: "Central living at slightly lower prices", caution: "Busy around Atocha station",
    landmarks: ["Atocha station", "Matadero Madrid", "Madrid Río"] }),
  d({ slug: "retiro", name: "Retiro", number: 3, at: [40.41124, -3.67656],
    description: "Calm, well-kept streets around the Retiro park, next to the Prado and the museum mile.",
    rent: "€580–€700/mo", safety: 8.8, transport: 9.0, nightlife: 5.5, studentFit: 7.2,
    commute: "25–30 min to Ciudad Universitaria", bestFor: "Parks, museums and quiet", caution: "Pricey and few student flatshares",
    landmarks: ["Retiro park", "Prado museum"] }),
  d({ slug: "salamanca", name: "Salamanca", number: 4, at: [40.43018, -3.67381],
    description: "Madrid's upscale grid of boulevards and designer shops around Calle Serrano, close to IE's María de Molina campus.",
    rent: "€650–€800/mo", safety: 9.0, transport: 9.2, nightlife: 6.5, studentFit: 6.8,
    commute: "25 min to Ciudad Universitaria; 5–10 min to IE", bestFor: "Safety, elegance and IE students", caution: "Among the most expensive areas in Madrid",
    landmarks: ["Calle Serrano"] }),
  d({ slug: "chamartin", name: "Chamartín", number: 5, at: [40.45747, -3.67814],
    description: "A business and residential district with the Bernabéu, Chamartín station, IE's campus on María de Molina and UPM's industrial engineering school.",
    rent: "€580–€720/mo", safety: 8.8, transport: 9.0, nightlife: 5.5, studentFit: 7.6,
    commute: "20 min to Ciudad Universitaria; IE and UPM Industriales on site", bestFor: "IE and UPM students who want a calm base", caution: "Quiet in the evenings, higher rents",
    landmarks: ["IE University (María de Molina)", "UPM Industriales", "Santiago Bernabéu", "Chamartín station"] }),
  d({ slug: "tetuan", name: "Tetuán", number: 6, at: [40.46064, -3.7],
    description: "A diverse, down-to-earth district along Bravo Murillo between the Castellana business towers and Cuatro Caminos — good value close to the center.",
    rent: "€500–€620/mo", safety: 7.6, transport: 9.2, nightlife: 6.5, studentFit: 8.2,
    commute: "15–20 min to Ciudad Universitaria", bestFor: "Value near the center", caution: "Mixed streets; check the exact block",
    landmarks: ["Calle Bravo Murillo"] }),
  d({ slug: "chamberi", name: "Chamberí", number: 7, at: [40.43756, -3.70352],
    description: "Classic Madrid neighborhood life around Plaza de Olavide and Ríos Rosas, one metro hop from Ciudad Universitaria — a favorite of Complutense and UPM students.",
    rent: "€600–€750/mo", safety: 8.8, transport: 9.6, nightlife: 7.5, studentFit: 9.0,
    commute: "10–15 min to Ciudad Universitaria", bestFor: "Students who want charm and a short commute", caution: "High demand pushes prices up",
    landmarks: ["Plaza de Olavide"] }),
  d({ slug: "fuencarral-el-pardo", name: "Fuencarral-El Pardo", number: 8, at: [40.54479, -3.75356],
    description: "Madrid's largest district: the El Pardo woodland, newer residential areas like Montecarmelo and Las Tablas, and Hospital La Paz. UAM's Cantoblanco campus sits on its northern edge.",
    rent: "€480–€600/mo", safety: 8.6, transport: 7.2, nightlife: 3.5, studentFit: 7.4,
    commute: "30–40 min to Ciudad Universitaria; Cercanías to UAM Cantoblanco", bestFor: "UAM students and quieter, newer flats", caution: "Car-oriented suburbs, far from nightlife",
    landmarks: ["UAM Cantoblanco campus", "Hospital La Paz"] }),
  d({ slug: "moncloa-aravaca", name: "Moncloa-Aravaca", number: 9, at: [40.44541, -3.75716],
    description: "Home to Ciudad Universitaria — Complutense and UPM's main campus — plus the Moncloa transport hub, Templo de Debod and the huge Casa de Campo park.",
    rent: "€550–€680/mo", safety: 8.6, transport: 9.0, nightlife: 6.5, studentFit: 9.2,
    commute: "You're at Ciudad Universitaria", bestFor: "Living next to Complutense and UPM", caution: "Moncloa itself is busy; Aravaca is far and car-oriented",
    landmarks: ["Ciudad Universitaria (Complutense, UPM)", "Moncloa interchange", "Templo de Debod", "Casa de Campo"] }),
  d({ slug: "latina", name: "Latina", number: 10, at: [40.38521, -3.77874],
    description: "A large residential district south-west of the center, from Puerta del Ángel to Aluche, with affordable flats along metro lines 5 and 10.",
    rent: "€420–€520/mo", safety: 7.8, transport: 8.2, nightlife: 4.5, studentFit: 7.2,
    commute: "30–35 min to Ciudad Universitaria", bestFor: "Lower rents with metro access", caution: "Far from campus life; not the La Latina barrio (that's in Centro)",
    landmarks: [] }),
  d({ slug: "carabanchel", name: "Carabanchel", number: 11, at: [40.37887, -3.73709],
    description: "A big, working-class district south of the Manzanares that's increasingly popular with young people and artists for its lower rents.",
    rent: "€400–€500/mo", safety: 7.2, transport: 8.4, nightlife: 5.0, studentFit: 7.4,
    commute: "30–35 min to Ciudad Universitaria", bestFor: "Budget rooms close to the center", caution: "Some areas feel rough at night",
    landmarks: ["Oporto", "Plaza Elíptica"] }),
  d({ slug: "usera", name: "Usera", number: 12, at: [40.37594, -3.70301],
    description: "A diverse southern district known for Madrid's largest Chinese community and its food scene, a short ride from Madrid Río.",
    rent: "€400–€500/mo", safety: 7.2, transport: 7.8, nightlife: 4.5, studentFit: 7.0,
    commute: "30–35 min to Ciudad Universitaria", bestFor: "Low rents and great food", caution: "Fewer students and English speakers",
    landmarks: [] }),
  d({ slug: "puente-de-vallecas", name: "Puente de Vallecas", number: 13, at: [40.38356, -3.65979],
    description: "Vallecas: a proud, lively working-class district with strong neighborhood identity along Avenida de la Albufera and metro line 1.",
    rent: "€380–€480/mo", safety: 6.8, transport: 8.2, nightlife: 5.0, studentFit: 7.0,
    commute: "35–40 min to Ciudad Universitaria", bestFor: "Some of the cheapest rooms near the center", caution: "Lower safety ratings in some parts",
    landmarks: ["Avenida de la Albufera"] }),
  d({ slug: "moratalaz", name: "Moratalaz", number: 14, at: [40.40664, -3.64135],
    description: "A green, planned residential district east of the center with parks and a calm, family feel.",
    rent: "€420–€520/mo", safety: 8.2, transport: 7.2, nightlife: 3.5, studentFit: 6.8,
    commute: "40 min to Ciudad Universitaria; 15 min to URJC Vicálvaro", bestFor: "Quiet and green", caution: "Only metro line 9 runs through it",
    landmarks: [] }),
  d({ slug: "ciudad-lineal", name: "Ciudad Lineal", number: 15, at: [40.43928, -3.64998],
    description: "A long residential district along Calle Arturo Soria, with metro lines 4, 5 and 7 and a mix of older blocks and garden villas.",
    rent: "€450–€560/mo", safety: 8.0, transport: 8.4, nightlife: 4.5, studentFit: 7.0,
    commute: "30–35 min to Ciudad Universitaria", bestFor: "Mid-range rents with good metro links", caution: "Long commute to the western campuses",
    landmarks: ["Calle Arturo Soria"] }),
  d({ slug: "hortaleza", name: "Hortaleza", number: 16, at: [40.48228, -3.63739],
    description: "A residential north-eastern district of newer developments like Sanchinarro, close to the IFEMA trade fair and the airport.",
    rent: "€470–€580/mo", safety: 8.6, transport: 7.4, nightlife: 3.5, studentFit: 6.6,
    commute: "40 min to Ciudad Universitaria", bestFor: "Newer flats and quiet streets", caution: "Far from the center and the campuses",
    landmarks: [] }),
  d({ slug: "villaverde", name: "Villaverde", number: 17, at: [40.34251, -3.69501],
    description: "A southern, largely industrial and residential district with Cercanías links to Getafe, where UC3M's main campus is.",
    rent: "€350–€450/mo", safety: 6.8, transport: 7.4, nightlife: 3.0, studentFit: 6.4,
    commute: "45 min to Ciudad Universitaria; close to UC3M Getafe by Cercanías", bestFor: "The lowest rents in the city", caution: "Far from student life; some areas feel unsafe at night",
    landmarks: [] }),
  d({ slug: "villa-de-vallecas", name: "Villa de Vallecas", number: 18, at: [40.34994, -3.61604],
    description: "The old village of Vallecas plus the large new Ensanche de Vallecas development in the south-east.",
    rent: "€380–€480/mo", safety: 7.4, transport: 7.0, nightlife: 3.0, studentFit: 6.2,
    commute: "45–50 min to Ciudad Universitaria", bestFor: "Newer flats at low prices", caution: "Remote, with little nightlife",
    landmarks: [] }),
  d({ slug: "vicalvaro", name: "Vicálvaro", number: 19, at: [40.39428, -3.57277],
    description: "A quiet eastern district that is home to the Universidad Rey Juan Carlos (URJC) Madrid-Vicálvaro campus.",
    rent: "€380–€480/mo", safety: 7.8, transport: 6.8, nightlife: 3.0, studentFit: 7.6,
    commute: "URJC on site; 50 min to Ciudad Universitaria", bestFor: "URJC students on a budget", caution: "Far from the center",
    landmarks: ["URJC Vicálvaro campus"] }),
  d({ slug: "san-blas-canillejas", name: "San Blas-Canillejas", number: 20, at: [40.43466, -3.59865],
    description: "An eastern district of residential blocks and parks, home to Atlético Madrid's Metropolitano stadium.",
    rent: "€420–€520/mo", safety: 7.8, transport: 7.6, nightlife: 3.5, studentFit: 6.6,
    commute: "40–45 min to Ciudad Universitaria", bestFor: "Affordable rooms with metro line 7", caution: "Far from the main campuses",
    landmarks: ["Metropolitano stadium"] }),
  d({ slug: "barajas", name: "Barajas", number: 21, at: [40.47558, -3.57457],
    description: "Madrid's airport district, with the old village of Barajas and quiet residential areas next to the runways.",
    rent: "€450–€550/mo", safety: 8.4, transport: 7.0, nightlife: 3.0, studentFit: 5.6,
    commute: "45–50 min to Ciudad Universitaria", bestFor: "Frequent flyers", caution: "Aircraft noise and long commutes",
    landmarks: ["Adolfo Suárez Madrid-Barajas airport"] }),
];

export type MadridDistritoListing = Listing & { distritoSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const madridListings: MadridDistritoListing[] = [
  { id: "md-sample-moncloa-room", distritoSlug: "moncloa-aravaca", title: "Room near Ciudad Universitaria", rent: 590, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 40.4380, lng: -3.7180, description: "Room in a 4-person flat near Moncloa, a short walk to the Complutense and UPM faculties.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Empadronamiento possible"] },
  { id: "md-sample-chamberi-room", distritoSlug: "chamberi", title: "Room near Plaza de Olavide", rent: 650, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 40.4330, lng: -3.7030, description: "Bright exterior room in a classic Chamberí flat, one metro hop from Ciudad Universitaria.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "md-sample-malasana-room", distritoSlug: "centro", title: "Room in Malasaña", rent: 680, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 40.4260, lng: -3.7040, description: "Room in a shared flat in the middle of Malasaña's bars and cafés.", rooms: 1, sizeSqm: 10, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Wifi included"], riskNote: "Higher caution" },
  { id: "md-sample-lavapies-studio", distritoSlug: "centro", title: "Studio in Lavapiés", rent: 850, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 40.4090, lng: -3.7010, description: "Small furnished studio in an older building near the Lavapiés metro.", rooms: 1, sizeSqm: 24, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette"] },
  { id: "md-sample-arganzuela-room", distritoSlug: "arganzuela", title: "Room near Madrid Río", rent: 580, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 40.4000, lng: -3.6950, description: "Room in a quiet flat between Delicias and Madrid Río, with Cercanías to Getafe nearby.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "md-sample-tetuan-room", distritoSlug: "tetuan", title: "Room near Bravo Murillo", rent: 540, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 40.4580, lng: -3.6980, description: "Room in a student flat on metro line 1, 20 minutes to Ciudad Universitaria.", rooms: 1, sizeSqm: 11, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Empadronamiento possible"] },
  { id: "md-sample-fuencarral-room", distritoSlug: "fuencarral-el-pardo", title: "Room for UAM students", rent: 500, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 40.5000, lng: -3.7050, description: "Room in a newer flat in the north, with Cercanías to the UAM Cantoblanco campus.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Pool"] },
  { id: "md-sample-vicalvaro-room", distritoSlug: "vicalvaro", title: "Room near URJC Vicálvaro", rent: 420, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 40.4030, lng: -3.6080, description: "Room shared with URJC students, a short walk from campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "md-sample-carabanchel-room", distritoSlug: "carabanchel", title: "Room in Carabanchel", rent: 450, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 40.3830, lng: -3.7280, description: "Budget room in a shared flat near metro line 5 to the center.", rooms: 1, sizeSqm: 10, availableFrom: "1 Nov 2026", amenities: ["Furnished"] },
];

export function getMadridDistritoBySlug(slug: string): MadridDistrito | undefined {
  return madridDistritos.find((x) => x.slug === slug);
}

export function getMadridListingsForDistrito(slug: string | null): MadridDistritoListing[] {
  if (!slug) return [];
  return madridListings.filter((l) => l.distritoSlug === slug);
}
