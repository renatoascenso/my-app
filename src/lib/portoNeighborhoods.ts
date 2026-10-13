import type { Listing } from "./listings";

// Porto's 7 official parishes (freguesias), incl. the three 2013 parish unions.
// Boundaries: Direção-Geral do Território, CAOP2025 (CC BY 4.0), credited in PortoExplorer.
// Rents are estimated ranges for a room; scores are editorial judgments.

export type PortoFreguesia = {
  slug: string;
  name: string;
  shortName: string;
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

export const portoFreguesias: PortoFreguesia[] = [
  {
    slug: "centro-historico",
    name: "Cedofeita, Santo Ildefonso, Sé, Miragaia, São Nicolau e Vitória",
    shortName: "Historic center",
    lat: 41.15359,
    lng: -8.61594,
    description:
      "The union of Porto's six central parishes: the UNESCO-listed Ribeira and Sé, the Clérigos and Aliados area, the student and gallery streets of Cedofeita, and Boavista up to the Casa da Música. Home to the University's rectorate and the Santo António hospital campus.",
    rent: "€450–€650/mo",
    safety: 7.4,
    transport: 9.4,
    nightlife: 9.5,
    studentFit: 8.6,
    commute: "Walk to the center campuses; 10–15 min to Campo Alegre, 20–25 min to Asprela by metro",
    bestFor: "Nightlife, culture and living in the heart of the city",
    caution: "Tourist rentals push prices up; noisy nights around Galerias de Paris and Ribeira",
    landmarks: ["São Bento station", "Ribeira", "Sé Cathedral", "Torre dos Clérigos", "Avenida dos Aliados", "Mercado do Bolhão", "Casa da Música"],
  },
  {
    slug: "lordelo-massarelos",
    name: "Lordelo do Ouro e Massarelos",
    shortName: "Lordelo do Ouro & Massarelos",
    lat: 41.15297,
    lng: -8.64495,
    description:
      "West of the center along the Douro, including the Campo Alegre university campus (Faculties of Sciences and Arts), the Crystal Palace gardens and the Serralves museum and park.",
    rent: "€450–€600/mo",
    safety: 8.4,
    transport: 8.2,
    nightlife: 6.0,
    studentFit: 8.8,
    commute: "Campo Alegre on site; 25–30 min to Asprela",
    bestFor: "Sciences and Arts students at Campo Alegre, river walks",
    caution: "Hilly, and bus-dependent in parts",
    landmarks: ["Campo Alegre campus (FCUP, FLUP)", "Crystal Palace gardens", "Serralves", "Bom Sucesso market"],
  },
  {
    slug: "paranhos",
    name: "Paranhos",
    shortName: "Paranhos",
    lat: 41.17425,
    lng: -8.60425,
    description:
      "One of Porto's most populous parishes, in the north of the city, with the Asprela campus — Engineering (FEUP), Medicine and São João hospital, Economics (FEP) and ISEP. Lots of student housing and residences at lower prices.",
    rent: "€350–€500/mo",
    safety: 8.0,
    transport: 8.2,
    nightlife: 4.5,
    studentFit: 9.2,
    commute: "Asprela on site; 15–20 min to the center by metro",
    bestFor: "Engineering, medicine and economics students",
    caution: "Residential and quiet; nightlife is in the center",
    landmarks: ["Asprela campus (FEUP, FEP)", "São João hospital (Faculty of Medicine)", "ISEP"],
  },
  {
    slug: "ramalde",
    name: "Ramalde",
    shortName: "Ramalde",
    lat: 41.17139,
    lng: -8.64292,
    description:
      "A residential parish in the north-west between Boavista and Matosinhos, with housing estates, shopping centers and metro lines towards the airport and the beach.",
    rent: "€380–€520/mo",
    safety: 8.0,
    transport: 8.0,
    nightlife: 3.5,
    studentFit: 7.2,
    commute: "20–25 min to the center, 25–30 min to Asprela",
    bestFor: "Good value close to Boavista and the coast",
    caution: "Some estates feel anonymous; far from the nightlife",
    landmarks: ["Ramalde"],
  },
  {
    slug: "aldoar-foz-nevogilde",
    name: "Aldoar, Foz do Douro e Nevogilde",
    shortName: "Aldoar, Foz & Nevogilde",
    lat: 41.162,
    lng: -8.67243,
    description:
      "Porto's seaside: the elegant Foz do Douro where the river meets the Atlantic, Nevogilde's villas and Aldoar, with the huge Parque da Cidade. Home to the Católica university campus in Foz.",
    rent: "€450–€650/mo",
    safety: 8.8,
    transport: 7.0,
    nightlife: 5.5,
    studentFit: 7.2,
    commute: "Católica Foz on site; 30–40 min to the center or Asprela by bus",
    bestFor: "Católica students, beach and ocean walks",
    caution: "Expensive and far from the U.Porto campuses",
    landmarks: ["Parque da Cidade", "Católica Porto (Foz campus)", "Foz do Douro"],
  },
  {
    slug: "bonfim",
    name: "Bonfim",
    shortName: "Bonfim",
    lat: 41.15171,
    lng: -8.59612,
    description:
      "An eastern parish next to the center that has become popular with students and young creatives, with traditional streets, the Fontainhas viewpoints over the Douro and new cafés.",
    rent: "€400–€550/mo",
    safety: 7.6,
    transport: 8.4,
    nightlife: 7.0,
    studentFit: 8.4,
    commute: "10–15 min walk to the center; 20 min to Asprela by metro",
    bestFor: "Central living at lower prices",
    caution: "Mixed blocks — check the street before you sign",
    landmarks: ["Fontainhas", "Bonfim church"],
  },
  {
    slug: "campanha",
    name: "Campanhã",
    shortName: "Campanhã",
    lat: 41.15864,
    lng: -8.57599,
    description:
      "Porto's eastern parish around the main railway station and the Dragão stadium. The cheapest part of the city, with major regeneration projects but also some deprived areas.",
    rent: "€330–€480/mo",
    safety: 6.8,
    transport: 8.6,
    nightlife: 3.5,
    studentFit: 7.0,
    commute: "15 min to the center by metro; 20–25 min to Asprela",
    bestFor: "Lowest rents with metro and train links",
    caution: "Some deprived areas — visit before renting",
    landmarks: ["Campanhã station", "Estádio do Dragão"],
  },
];

export type PortoFreguesiaListing = Listing & { freguesiaSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const portoListings: PortoFreguesiaListing[] = [
  { id: "op-sample-asprela-room", freguesiaSlug: "paranhos", title: "Room near FEUP", rent: 400, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.1775, lng: -8.6010, description: "Furnished room in a 4-person student flat, a 5-minute walk to FEUP and the Asprela metro stop.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included", "Washing machine"] },
  { id: "op-sample-saojoao-room", freguesiaSlug: "paranhos", title: "Room close to São João hospital", rent: 420, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.1795, lng: -8.6045, description: "Quiet room in a flat shared with medicine students.", rooms: 1, sizeSqm: 13, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "op-sample-campo-alegre-room", freguesiaSlug: "lordelo-massarelos", title: "Room by the Campo Alegre campus", rent: 480, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.1540, lng: -8.6390, description: "Room in a 3-person flat a few minutes from FCUP and FLUP.", rooms: 1, sizeSqm: 14, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "op-sample-cedofeita-room", freguesiaSlug: "centro-historico", title: "Room on Rua de Cedofeita", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.1530, lng: -8.6200, description: "Bright room in a renovated building in the Cedofeita gallery district.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "op-sample-ribeira-studio", freguesiaSlug: "centro-historico", title: "Small studio near the Ribeira", rent: 750, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 41.1420, lng: -8.6125, description: "Compact studio in a historic building close to the river.", rooms: 1, sizeSqm: 22, availableFrom: "1 Sep 2026", amenities: ["Private bathroom", "Kitchenette"], riskNote: "Higher caution" },
  { id: "op-sample-bonfim-room", freguesiaSlug: "bonfim", title: "Room in Bonfim", rent: 430, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.1480, lng: -8.5975, description: "Room in a traditional house shared with young professionals, 15 minutes on foot to the center.", rooms: 1, sizeSqm: 14, availableFrom: "15 Oct 2026", amenities: ["Furnished", "Garden"] },
  { id: "op-sample-foz-room", freguesiaSlug: "aldoar-foz-nevogilde", title: "Room near the Católica Foz campus", rent: 550, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.1560, lng: -8.6710, description: "Room in a family-run flat, a short walk to the Católica campus and the sea.", rooms: 1, sizeSqm: 15, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "op-sample-campanha-room", freguesiaSlug: "campanha", title: "Budget room near Campanhã station", rent: 360, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.1500, lng: -8.5870, description: "Simple room with metro and trains to every campus nearby.", rooms: 1, sizeSqm: 11, availableFrom: "1 Nov 2026", amenities: ["Furnished"] },
];

export function getPortoFreguesiaBySlug(slug: string): PortoFreguesia | undefined {
  return portoFreguesias.find((f) => f.slug === slug);
}

export function getPortoListingsForFreguesia(slug: string | null): PortoFreguesiaListing[] {
  if (!slug) return [];
  return portoListings.filter((l) => l.freguesiaSlug === slug);
}
