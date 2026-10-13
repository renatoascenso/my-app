import type { Listing } from "./listings";

// Rome's 15 municipi.
// Boundaries: ISTAT, Basi territoriali 2021 – aree sub-comunali (CC BY 4.0), credited in RomeExplorer.
// Room prices are estimated ranges for a single room; scores are editorial judgments.

export type RomeMunicipio = {
  slug: string;
  name: string;
  number: number;
  roman: string;
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

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"];
type Base = Omit<RomeMunicipio, "slug" | "roman" | "lat" | "lng"> & { at: [number, number] };
const m = ({ at, ...rest }: Base): RomeMunicipio => ({
  ...rest,
  slug: `municipio-${rest.number}`,
  roman: ROMAN[rest.number - 1],
  lat: at[0],
  lng: at[1],
});

export const romeMunicipi: RomeMunicipio[] = [
  m({ number: 1, name: "Centro Storico", at: [41.89853, 12.47861],
    description: "Historic Rome inside and around the Aurelian walls: the Colosseum, Trastevere, Testaccio, Prati, Termini station and John Cabot University.",
    rent: "€680–€800/mo", safety: 7.8, transport: 9.4, nightlife: 9.6, studentFit: 8.2,
    commute: "10–20 min to Sapienza", bestFor: "Living among the monuments, nightlife in Trastevere and Testaccio", caution: "Rome's priciest rooms; tourist crowds and short-term lets",
    landmarks: ["Colosseum", "Trastevere", "Testaccio", "Prati", "Termini station", "John Cabot University"] }),
  m({ number: 2, name: "Parioli, Nomentano, San Lorenzo", at: [41.9207, 12.50135],
    description: "Sapienza's Città Universitaria and the Policlinico, the student quarter of San Lorenzo, Piazza Bologna, elegant Parioli and LUISS on Viale Romania.",
    rent: "€600–€720/mo", safety: 8.2, transport: 9.0, nightlife: 8.4, studentFit: 9.6,
    commute: "You're at Sapienza; LUISS on Viale Romania too", bestFor: "Sapienza and LUISS students", caution: "San Lorenzo is loud at night; Parioli is expensive",
    landmarks: ["Sapienza (Città Universitaria)", "San Lorenzo", "Policlinico Umberto I", "Piazza Bologna", "Parioli", "LUISS (Viale Romania)", "Tiburtina station"] }),
  m({ number: 3, name: "Monte Sacro", at: [41.99636, 12.55424],
    description: "Residential north-east Rome: Monte Sacro and Talenti close in, newer areas like Bufalotta further out, with metro line B1 to the center.",
    rent: "€520–€620/mo", safety: 8.2, transport: 7.6, nightlife: 4.5, studentFit: 7.4,
    commute: "20–30 min to Sapienza on metro B1", bestFor: "Quieter living with a direct line to Sapienza", caution: "Outer areas depend on buses",
    landmarks: ["Monte Sacro", "Bufalotta"] }),
  m({ number: 4, name: "Tiburtino", at: [41.93245, 12.59109],
    description: "A large eastern district along Via Tiburtina, from Casal Bertone and Pietralata out to Rebibbia, served by metro line B.",
    rent: "€480–€580/mo", safety: 7.2, transport: 7.4, nightlife: 4.5, studentFit: 7.0,
    commute: "20–35 min to Sapienza", bestFor: "Lower rents near metro B", caution: "Mixed areas; check the exact street",
    landmarks: ["Casal Bertone"] }),
  m({ number: 5, name: "Prenestino, Centocelle", at: [41.89234, 12.58066],
    description: "Pigneto's bars and street art, multicultural Torpignattara and lively Centocelle, linked by metro line C and the trams along Via Prenestina.",
    rent: "€480–€580/mo", safety: 7.2, transport: 8.0, nightlife: 8.0, studentFit: 8.2,
    commute: "15–25 min to Sapienza", bestFor: "Alternative nightlife at fair prices", caution: "Some streets feel rough late at night",
    landmarks: ["Pigneto", "Torpignattara", "Centocelle"] }),
  m({ number: 6, name: "Delle Torri", at: [41.88718, 12.68977],
    description: "Rome's far eastern edge, home to the Tor Vergata university campus and hospital, with metro line C toward the center.",
    rent: "€400–€500/mo", safety: 6.8, transport: 6.6, nightlife: 3.0, studentFit: 7.2,
    commute: "Tor Vergata on site; 45–60 min to Sapienza", bestFor: "Tor Vergata students on a budget", caution: "Far from the center; some areas have a poor reputation",
    landmarks: ["Tor Vergata campus", "Tor Vergata hospital"] }),
  m({ number: 7, name: "Appio-Latino, Tuscolano, Cinecittà", at: [41.84013, 12.58164],
    description: "Rome's most populous municipio, along metro line A from Re di Roma and Furio Camillo to the Cinecittà film studios, with the Parco degli Acquedotti.",
    rent: "€520–€620/mo", safety: 8.0, transport: 8.6, nightlife: 5.5, studentFit: 7.8,
    commute: "20–30 min to Sapienza; metro A to Termini", bestFor: "Good value on metro A", caution: "Long commute from the outer end",
    landmarks: ["Cinecittà"] }),
  m({ number: 8, name: "Ostiense, Garbatella", at: [41.82865, 12.52921],
    description: "Roma Tre's home: the Ostiense riverside with its street art and clubs, the garden-city charm of Garbatella and the Appia Antica park further south.",
    rent: "€540–€650/mo", safety: 7.8, transport: 8.2, nightlife: 8.0, studentFit: 8.8,
    commute: "Roma Tre on site; 25 min to Sapienza", bestFor: "Roma Tre students and nightlife", caution: "Rents rising around the campus",
    landmarks: ["Roma Tre (Ostiense)", "Garbatella"] }),
  m({ number: 9, name: "EUR", at: [41.75769, 12.49773],
    description: "The rational-style business district of EUR with its lake and offices, and residential Laurentino further south, on metro line B.",
    rent: "€500–€600/mo", safety: 8.4, transport: 7.4, nightlife: 4.5, studentFit: 7.0,
    commute: "15 min to Roma Tre; 35 min to Sapienza", bestFor: "Calm, modern living on metro B", caution: "Very quiet in the evenings",
    landmarks: ["EUR", "Laurentino"] }),
  m({ number: 10, name: "Ostia", at: [41.73993, 12.36246],
    description: "Rome's seaside: Ostia's beaches, the Ostia Antica ruins and Acilia, linked to the city by the Roma–Lido train.",
    rent: "€450–€550/mo", safety: 6.8, transport: 6.0, nightlife: 5.0, studentFit: 6.0,
    commute: "45–60 min to Sapienza", bestFor: "Beach life", caution: "Far from campuses; train service is unreliable",
    landmarks: ["Ostia beaches"] }),
  m({ number: 11, name: "Arvalia, Portuense", at: [41.83066, 12.37676],
    description: "South-west Rome along the Tiber: Marconi near Roma Tre, Magliana and Portuense, with the Corviale estate further out.",
    rent: "€480–€580/mo", safety: 7.2, transport: 7.0, nightlife: 4.0, studentFit: 7.2,
    commute: "10–15 min to Roma Tre; 35–40 min to Sapienza", bestFor: "Budget rooms near Roma Tre", caution: "Weaker transport in the outer areas",
    landmarks: ["Magliana"] }),
  m({ number: 12, name: "Monte Verde", at: [41.87103, 12.34471],
    description: "Leafy Monteverde above Trastevere, with the Villa Pamphili park and the American University of Rome nearby.",
    rent: "€550–€650/mo", safety: 8.6, transport: 7.2, nightlife: 5.5, studentFit: 7.6,
    commute: "30–35 min to Sapienza; tram 8 to the center", bestFor: "Green, safe streets close to Trastevere", caution: "No metro",
    landmarks: ["Monteverde", "Villa Pamphili"] }),
  m({ number: 13, name: "Aurelio", at: [41.91042, 12.34613],
    description: "The area west of the Vatican along Via Aurelia and metro line A, from Aurelio to Boccea.",
    rent: "€540–€640/mo", safety: 8.2, transport: 7.6, nightlife: 4.5, studentFit: 7.2,
    commute: "25–35 min to Sapienza", bestFor: "Living close to the Vatican and Prati", caution: "Quiet nightlife",
    landmarks: ["Aurelio"] }),
  m({ number: 14, name: "Monte Mario", at: [41.97555, 12.34551],
    description: "North-west Rome around Monte Mario, Primavalle and the Gemelli hospital, home to the Università Cattolica's medical faculty.",
    rent: "€500–€600/mo", safety: 7.8, transport: 6.8, nightlife: 4.0, studentFit: 7.4,
    commute: "Cattolica (Gemelli) on site; 35–45 min to Sapienza", bestFor: "Medicine students at the Gemelli", caution: "Hilly, bus-dependent areas",
    landmarks: ["Policlinico Gemelli (Università Cattolica)", "Primavalle"] }),
  m({ number: 15, name: "Cassia, Flaminia", at: [42.0238, 12.4224],
    description: "Northern Rome from Ponte Milvio and the Foro Italico out along Via Cassia and Via Flaminia into green suburbs.",
    rent: "€550–€700/mo", safety: 8.6, transport: 6.8, nightlife: 7.0, studentFit: 7.0,
    commute: "30–40 min to Sapienza", bestFor: "Ponte Milvio's bars and a residential feel", caution: "Few metro links; rents rising near Ponte Milvio",
    landmarks: ["Ponte Milvio", "Foro Italico"] }),
];

export type RomeMunicipioListing = Listing & { municipioSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const romeListings: RomeMunicipioListing[] = [
  { id: "ro-sample-sanlorenzo-room", municipioSlug: "municipio-2", title: "Room in San Lorenzo", rent: 600, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.8975, lng: 12.5170, description: "Single room in a student flat, a 5-minute walk to Sapienza's Città Universitaria.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Registered contract"] },
  { id: "ro-sample-bologna-room", municipioSlug: "municipio-2", title: "Room near Piazza Bologna", rent: 640, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.9125, lng: 12.5205, description: "Bright room on metro line B, two stops from Policlinico.", rooms: 1, sizeSqm: 13, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Balcony"] },
  { id: "ro-sample-pigneto-room", municipioSlug: "municipio-5", title: "Room in Pigneto", rent: 530, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.8885, lng: 12.5285, description: "Room in a shared flat near metro line C and Pigneto's bars.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "ro-sample-garbatella-room", municipioSlug: "municipio-8", title: "Room near Roma Tre", rent: 580, currency: "€", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 41.8610, lng: 12.4875, description: "Room in Garbatella, a short walk to the Roma Tre campus on Via Ostiense.", rooms: 1, sizeSqm: 12, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Registered contract"] },
  { id: "ro-sample-trastevere-studio", municipioSlug: "municipio-1", title: "Studio in Trastevere", rent: 1100, currency: "€", type: "Studio", source: SAMPLE_SOURCE, lat: 41.8880, lng: 12.4700, description: "Small furnished studio in an old building in Trastevere.", rooms: 1, sizeSqm: 24, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "ro-sample-torvergata-room", municipioSlug: "municipio-6", title: "Room near Tor Vergata", rent: 430, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.8580, lng: 12.6100, description: "Room in a shared flat close to the Tor Vergata campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "ro-sample-monteverde-room", municipioSlug: "municipio-12", title: "Room in Monteverde", rent: 590, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.8800, lng: 12.4580, description: "Quiet room near Villa Pamphili with tram 8 to the center.", rooms: 1, sizeSqm: 13, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "ro-sample-gemelli-room", municipioSlug: "municipio-14", title: "Room near the Gemelli", rent: 520, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.9300, lng: 12.4320, description: "Room shared with medicine students, near the Gemelli hospital.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
  { id: "ro-sample-tuscolano-room", municipioSlug: "municipio-7", title: "Room on metro A", rent: 550, currency: "€", type: "Room", source: SAMPLE_SOURCE, lat: 41.8600, lng: 12.5550, description: "Room in the Tuscolano area, 15 minutes to Termini on metro line A.", rooms: 1, sizeSqm: 11, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Elevator"] },
];

export function getRomeMunicipioBySlug(slug: string): RomeMunicipio | undefined {
  return romeMunicipi.find((x) => x.slug === slug);
}

export function getRomeListingsForMunicipio(slug: string | null): RomeMunicipioListing[] {
  if (!slug) return [];
  return romeListings.filter((l) => l.municipioSlug === slug);
}
