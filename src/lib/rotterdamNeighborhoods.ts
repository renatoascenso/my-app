import type { Listing } from "./listings";

// Rotterdam's 14 residential areas (gebieden), without the port and industrial wijken.
// Boundaries: CBS/Kadaster Wijk- en Buurtkaart 2024 via PDOK (CC0), credited in RotterdamExplorer.
// Room prices are estimated ranges; scores are editorial judgments.

export type RotterdamGebied = {
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

type Base = Omit<RotterdamGebied, "lat" | "lng" | "badge"> & { at: [number, number]; badge?: string };
const g = ({ at, badge = "Gebied", ...rest }: Base): RotterdamGebied => ({ ...rest, badge, lat: at[0], lng: at[1] });

export const rotterdamGebieden: RotterdamGebied[] = [
  g({ slug: "centrum", name: "Centrum", at: [51.91566, 4.4769],
    description: "Rotterdam's modern downtown around Rotterdam Centraal, the Markthal and the Witte de Withstraat, with Erasmus MC, the Willem de Kooning Academy and Hogeschool Rotterdam's Museumpark campus.",
    rent: "€750–€900/mo", safety: 7.6, transport: 9.8, nightlife: 9.2, studentFit: 8.6,
    commute: "15 min by tram or metro to Woudestein; Erasmus MC on site", bestFor: "Nightlife, architecture and medicine students", caution: "The city's highest rents",
    landmarks: ["Rotterdam Centraal", "Markthal", "Witte de Withstraat", "Erasmus MC", "Hogeschool Rotterdam (Museumpark)", "Willem de Kooning Academy", "Euromast"] }),
  g({ slug: "kralingen-crooswijk", name: "Kralingen-Crooswijk", at: [51.92718, 4.51565],
    description: "Erasmus University's Woudestein campus, the green Kralingse Bos and Plas, and the classic student streets of Kralingen — Rotterdam's student heart.",
    rent: "€700–€850/mo", safety: 8.4, transport: 8.8, nightlife: 7.4, studentFit: 9.6,
    commute: "You're at Woudestein", bestFor: "Erasmus students who want to bike to class", caution: "Rooms near campus go fast in summer",
    landmarks: ["Erasmus University (Woudestein)", "Kralingse Plas", "Crooswijk"] }),
  g({ slug: "noord", name: "Noord", at: [51.93177, 4.46378],
    description: "Lively 19th-century neighborhoods north of the station: the Zwaanshals and Noordplein cafés, Blijdorp with the zoo, and the Oude Noorden.",
    rent: "€680–€820/mo", safety: 8.0, transport: 8.8, nightlife: 7.8, studentFit: 8.8,
    commute: "15–20 min by bike to Woudestein", bestFor: "Cafés and neighborhood life near the center", caution: "Popular and competitive",
    landmarks: ["Zwaanshals", "Blijdorp zoo"] }),
  g({ slug: "delfshaven", name: "Delfshaven", at: [51.91241, 4.44553],
    description: "West of the center: the historic harbor of Delfshaven, the diverse Middelland and Nieuwe Westen neighborhoods, and the Coolhaven area.",
    rent: "€620–€760/mo", safety: 7.4, transport: 8.8, nightlife: 7.0, studentFit: 8.2,
    commute: "20–25 min to Woudestein by metro", bestFor: "Character and value close to the center", caution: "Some streets feel rough at night",
    landmarks: ["Historic Delfshaven"] }),
  g({ slug: "feijenoord", name: "Feijenoord", at: [51.89892, 4.50147],
    description: "South of the river: the skyscrapers of Kop van Zuid and the Wilhelminapier, trendy Katendrecht, and the multicultural Afrikaanderwijk.",
    rent: "€600–€780/mo", safety: 7.4, transport: 8.4, nightlife: 7.2, studentFit: 7.8,
    commute: "20–25 min to Woudestein", bestFor: "River views and Katendrecht's restaurants", caution: "Big differences between the pier and the inland streets",
    landmarks: ["Wilhelminapier (Kop van Zuid)", "Katendrecht", "Afrikaanderwijk"] }),
  g({ slug: "charlois", name: "Charlois", at: [51.8791, 4.47753],
    description: "A large southern district around Zuidplein and the Ahoy venue, with some of the city's most affordable rooms.",
    rent: "€520–€650/mo", safety: 6.8, transport: 7.8, nightlife: 4.5, studentFit: 7.0,
    commute: "30 min to Woudestein", bestFor: "Lower rents with metro access", caution: "Lower safety ratings in parts of the district",
    landmarks: ["Zuidplein", "Ahoy"] }),
  g({ slug: "ijsselmonde", name: "IJsselmonde", at: [51.88784, 4.54341],
    description: "South-eastern residential areas like Lombardijen and Beverwaard, and Feyenoord's stadium De Kuip.",
    rent: "€550–€680/mo", safety: 7.4, transport: 7.2, nightlife: 3.5, studentFit: 6.8,
    commute: "25–35 min to Woudestein", bestFor: "Quiet and affordable", caution: "Far from student life",
    landmarks: ["De Kuip stadium"] }),
  g({ slug: "prins-alexander", name: "Prins Alexander", at: [51.95337, 4.55734],
    description: "Rotterdam's most populous area, with modern neighborhoods around the Alexandrium shopping center and Hogeschool Rotterdam's Kralingse Zoom campus.",
    rent: "€580–€700/mo", safety: 8.2, transport: 8.0, nightlife: 3.5, studentFit: 7.6,
    commute: "10–20 min to Woudestein by metro", bestFor: "Hogeschool Rotterdam students and newer flats", caution: "Suburban, with little nightlife",
    landmarks: ["Hogeschool Rotterdam (Kralingse Zoom)", "Alexandrium"] }),
  g({ slug: "hillegersberg-schiebroek", name: "Hillegersberg-Schiebroek", at: [51.95762, 4.4874],
    description: "A green and well-off area around the Bergse Plassen lakes, popular with families.",
    rent: "€650–€800/mo", safety: 9.0, transport: 7.6, nightlife: 3.5, studentFit: 6.8,
    commute: "20–25 min by bike to Woudestein", bestFor: "Calm, green surroundings", caution: "Few rooms for students",
    landmarks: ["Bergse Plassen"] }),
  g({ slug: "overschie", name: "Overschie", at: [51.95294, 4.42639],
    description: "A small, village-like area in the north-west next to Rotterdam The Hague Airport, on the way to Delft.",
    rent: "€580–€700/mo", safety: 8.4, transport: 7.0, nightlife: 3.0, studentFit: 6.4,
    commute: "30 min to Woudestein", bestFor: "A quiet base between Rotterdam and Delft", caution: "Aircraft noise near the airport",
    landmarks: ["Rotterdam The Hague Airport"] }),
  g({ slug: "hoogvliet", name: "Hoogvliet", at: [51.86173, 4.36326],
    description: "A residential satellite town in the south-west, on metro lines C and D.",
    rent: "€500–€620/mo", safety: 7.4, transport: 6.8, nightlife: 2.5, studentFit: 5.6,
    commute: "40–45 min to Woudestein by metro", bestFor: "Low rents", caution: "Far from campus and the center",
    landmarks: [] }),
  g({ slug: "pernis", name: "Pernis", at: [51.88764, 4.38824],
    description: "A small former fishing village surrounded by the port and its industry.",
    rent: "€520–€640/mo", safety: 8.0, transport: 6.0, nightlife: 2.0, studentFit: 4.8,
    commute: "40 min to Woudestein", bestFor: "Village life", caution: "Very few student rooms; industrial surroundings",
    landmarks: [] }),
  g({ slug: "rozenburg", name: "Rozenburg", at: [51.91557, 4.23179],
    description: "A village in the middle of the port area, part of Rotterdam since 2010.",
    rent: "€500–€620/mo", safety: 8.0, transport: 5.0, nightlife: 2.0, studentFit: 4.0,
    commute: "50–60 min to Woudestein", bestFor: "Not practical for most students", caution: "Very remote from the universities",
    landmarks: [] }),
  g({ slug: "hoek-van-holland", name: "Hoek van Holland", at: [51.97057, 4.14938],
    description: "Rotterdam's seaside village at the mouth of the river, with beaches, dunes and the ferry to England.",
    rent: "€550–€700/mo", safety: 8.6, transport: 6.0, nightlife: 3.0, studentFit: 4.6,
    commute: "60 min to Woudestein by metro", bestFor: "Beach life", caution: "Very remote from the universities",
    landmarks: ["Hoek van Holland beach"] }),
];

export type RotterdamGebiedListing = Listing & { gebiedSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const rotterdamListings: RotterdamGebiedListing[] = [
  { id: "rd-sample-kralingen-room", gebiedSlug: "kralingen-crooswijk", title: "Room near Woudestein", rent: 740, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 51.9200, lng: 4.5200, description: "Room in a student house in Kralingen, a 5-minute bike ride to Erasmus University.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Registration possible"] },
  { id: "rd-sample-crooswijk-room", gebiedSlug: "kralingen-crooswijk", title: "Room in Crooswijk", rent: 680, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 51.9280, lng: 4.4950, description: "Room in a renovated flat between the center and Kralingen.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Bills included"] },
  { id: "rd-sample-centrum-studio", gebiedSlug: "centrum", title: "Studio near the Witte de Withstraat", rent: 1150, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 51.9180, lng: 4.4800, description: "Furnished studio in the city center, close to bars and the metro.", rooms: 1, sizeSqm: 25, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "rd-sample-noord-room", gebiedSlug: "noord", title: "Room near the Zwaanshals", rent: 720, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 51.9330, lng: 4.4680, description: "Room in an older house in Rotterdam Noord with a shared garden.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Garden"] },
  { id: "rd-sample-delfshaven-room", gebiedSlug: "delfshaven", title: "Room in Middelland", rent: 650, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 51.9100, lng: 4.4450, description: "Room in a shared flat near the Coolhaven metro station.", rooms: 1, sizeSqm: 12, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "rd-sample-katendrecht-room", gebiedSlug: "feijenoord", title: "Room on Katendrecht", rent: 760, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 51.9010, lng: 4.4800, description: "Room in a modern flat on the Katendrecht peninsula.", rooms: 1, sizeSqm: 13, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Balcony"] },
  { id: "rd-sample-charlois-room", gebiedSlug: "charlois", title: "Budget room near Zuidplein", rent: 560, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 51.8850, lng: 4.4750, description: "Room in a shared flat close to metro line D.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
  { id: "rd-sample-alexander-room", gebiedSlug: "prins-alexander", title: "Room near Kralingse Zoom", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 51.9500, lng: 4.5500, description: "Room in a newer flat on the metro to Hogeschool Rotterdam and Erasmus.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Registration possible"] },
  { id: "rd-sample-hillegersberg-room", gebiedSlug: "hillegersberg-schiebroek", title: "Room by the Bergse Plassen", rent: 700, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 51.9580, lng: 4.4900, description: "Quiet room in a family home near the lakes.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
];

export function getRotterdamGebiedBySlug(slug: string): RotterdamGebied | undefined {
  return rotterdamGebieden.find((x) => x.slug === slug);
}

export function getRotterdamListingsForGebied(slug: string | null): RotterdamGebiedListing[] {
  if (!slug) return [];
  return rotterdamListings.filter((l) => l.gebiedSlug === slug);
}
