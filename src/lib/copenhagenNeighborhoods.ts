import type { Listing } from "./listings";

export type District = {
  slug: string;
  name: string;
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

export const copenhagenDistricts: District[] = [
  {
    slug: "frederiksberg",
    name: "Frederiksberg",
    lat: 55.6794,
    lng: 12.5237,
    description:
      "Home to CBS's Solbjerg Plads campus — a green, upscale, independently governed municipality wrapped inside Copenhagen, known for Frederiksberg Have park and quiet, leafy streets.",
    rent: "DKK 6,500–9,500/mo",
    safety: 9.2,
    transport: 9.0,
    nightlife: 5.5,
    studentFit: 9.4,
    commute: "0–10 min to CBS by foot or bike",
    bestFor: "CBS's own neighborhood — the shortest possible commute to class",
    caution: "Among the most expensive districts for students; competition for rooms is fierce",
    landmarks: ["CBS Solbjerg Plads campus", "Frederiksberg Have", "Frederiksberg Runddel"],
  },
  {
    slug: "vesterbro-kongens-enghave",
    name: "Vesterbro-Kongens Enghave",
    lat: 55.6497,
    lng: 12.5443,
    description:
      "A former red-light district turned Copenhagen's trendiest neighborhood, anchored by the Kødbyen (Meatpacking District) nightlife scene and the Central Station — a short bike ride from CBS.",
    rent: "DKK 6,000–8,800/mo",
    safety: 8.6,
    transport: 9.2,
    nightlife: 8.5,
    studentFit: 8.8,
    commute: "10–15 min to CBS by bike",
    bestFor: "Nightlife, Kødbyen food scene, very central and well connected",
    caution: "Popular and pricier than average, with weekend noise near Kødbyen",
    landmarks: ["Kødbyen (Meatpacking District)", "Copenhagen Central Station", "Enghaveparken"],
  },
  {
    slug: "indre-by",
    name: "Indre By",
    lat: 55.6900,
    lng: 12.6090,
    description:
      "Copenhagen's compact historic core, home to Nyhavn's colorful harbor houses, Strøget's shopping streets, and Christianshavn — beautiful and extremely central, but the priciest district in the city.",
    rent: "DKK 7,500–11,000/mo",
    safety: 8.8,
    transport: 9.5,
    nightlife: 8.0,
    studentFit: 7.5,
    commute: "15–20 min to CBS by bike or metro",
    bestFor: "Historic charm, Nyhavn, unbeatable central location",
    caution: "The most expensive district in Copenhagen, and tourist-heavy in summer",
    landmarks: ["Nyhavn", "Strøget", "Christiansborg Palace", "Christianshavn"],
  },
  {
    slug: "amager-vest",
    name: "Amager Vest",
    lat: 55.6430,
    lng: 12.5664,
    description:
      "Home to Islands Brygge's famous harbor bath and a short metro ride from the center, this modern district also stretches into Ørestad's university and business area.",
    rent: "DKK 6,000–8,500/mo",
    safety: 8.5,
    transport: 8.8,
    nightlife: 6.0,
    studentFit: 8.2,
    commute: "15–20 min to CBS by metro",
    bestFor: "Harbor swimming at Islands Brygge, modern flats, strong metro access",
    caution: "Ørestad can feel sterile and windswept compared to the older city",
    landmarks: ["Islands Brygge Harbor Bath", "Ørestad", "Fields shopping mall"],
  },
  {
    slug: "oesterbro",
    name: "Østerbro",
    lat: 55.7138,
    lng: 12.5970,
    description:
      "A leafy, affluent residential district bordering Fælledparken, Copenhagen's largest park, popular with families and young professionals who want green space without leaving the city.",
    rent: "DKK 6,500–9,500/mo",
    safety: 9.0,
    transport: 8.5,
    nightlife: 5.0,
    studentFit: 7.0,
    commute: "20–25 min to CBS by bike",
    bestFor: "Green living near Fælledparken, calm residential streets",
    caution: "A longer commute to CBS and fewer student-oriented rentals",
    landmarks: ["Fælledparken", "Parken Stadium", "Østerbrogade"],
  },
  {
    slug: "noerrebro",
    name: "Nørrebro",
    lat: 55.6960,
    lng: 12.5494,
    description:
      "Copenhagen's most multicultural and creative district, packed with vintage shops and late-night cafés, with a strong student population around Nørreport and the lakes.",
    rent: "DKK 5,800–8,200/mo",
    safety: 8.0,
    transport: 8.8,
    nightlife: 8.2,
    studentFit: 8.5,
    commute: "20–25 min to CBS by bike",
    bestFor: "Multicultural, bohemian, strong student community, great food scene",
    caution: "Some streets feel less polished after dark; popular so rooms move fast",
    landmarks: ["Assistens Cemetery", "The Lakes (Søerne)", "Superkilen park"],
  },
  {
    slug: "valby",
    name: "Valby",
    lat: 55.6581,
    lng: 12.4985,
    description:
      "A once-industrial district steadily gentrifying around its old brewery grounds, offering better value than the inner city while staying well connected by S-train.",
    rent: "DKK 5,200–7,500/mo",
    safety: 8.2,
    transport: 7.8,
    nightlife: 4.5,
    studentFit: 6.5,
    commute: "20–25 min to CBS by S-train and bike",
    bestFor: "Better value, up-and-coming, Carlsberg Byen redevelopment",
    caution: "Still gentrifying in parts, with a real commute to central campus",
    landmarks: ["Carlsberg Byen", "Valby Park"],
  },
  {
    slug: "vanloese",
    name: "Vanløse",
    lat: 55.6900,
    lng: 12.4914,
    description:
      "A quiet, mostly residential suburb at the end of two metro lines, popular with families and offering some of the more affordable rents within easy transit reach of the center.",
    rent: "DKK 4,800–7,000/mo",
    safety: 8.4,
    transport: 7.5,
    nightlife: 2.5,
    studentFit: 5.0,
    commute: "25–30 min to CBS by metro",
    bestFor: "Affordable, quiet, direct metro line into the city",
    caution: "Suburban feel with little nightlife of its own",
    landmarks: ["Vanløse metro station", "Damhussøen lake"],
  },
  {
    slug: "broenshoej-husum",
    name: "Brønshøj-Husum",
    lat: 55.7102,
    lng: 12.4878,
    description:
      "An outer residential district of low-rise housing and green space, affordable but the furthest from both CBS and the city's nightlife core.",
    rent: "DKK 4,500–6,800/mo",
    safety: 8.1,
    transport: 6.5,
    nightlife: 1.5,
    studentFit: 3.8,
    commute: "30–35 min to CBS by bus and bike",
    bestFor: "Cheapest rents in the city, quiet suburban living",
    caution: "Long commute and thin public transport in the evenings",
    landmarks: ["Utterslev Mose nature reserve"],
  },
  {
    slug: "bispebjerg",
    name: "Bispebjerg",
    lat: 55.7145,
    lng: 12.5352,
    description:
      "A mixed residential district anchored by its hospital, with the increasingly popular Nordvest pocket drawing young renters priced out of neighboring Nørrebro.",
    rent: "DKK 5,200–7,600/mo",
    safety: 8.0,
    transport: 7.6,
    nightlife: 4.0,
    studentFit: 6.0,
    commute: "25–30 min to CBS by bike or bus",
    bestFor: "Nordvest's up-and-coming cafés, better value than neighboring Nørrebro",
    caution: "Uneven character across the district, with hospital traffic in parts",
    landmarks: ["Bispebjerg Hospital", "Nordvest", "Utterslev Mose"],
  },
  {
    slug: "amager-oest",
    name: "Amager Øst",
    lat: 55.6656,
    lng: 12.6338,
    description:
      "A residential district stretching from Sundbyøster to Amager Strandpark's beach and dunes, popular with families and offering easy access to the airport and metro.",
    rent: "DKK 5,300–7,800/mo",
    safety: 8.3,
    transport: 8.0,
    nightlife: 3.5,
    studentFit: 5.5,
    commute: "25–30 min to CBS by metro",
    bestFor: "Amager Strandpark beach, family-friendly, close to the airport",
    caution: "A real commute to campus and the inner-city nightlife scene",
    landmarks: ["Amager Strandpark", "Kastrup"],
  },
];

export type DistrictListing = Listing & { districtSlug: string };

export const copenhagenListings: DistrictListing[] = [
  {
    id: "ha-frederiksberg-room",
    districtSlug: "frederiksberg",
    title: "Bright room 8 minutes from CBS",
    rent: 7200,
    currency: "DKK ",
    type: "Room",
    source: "HousingAtlas",
    featured: true,
    homeUniversityFriendly: true,
    lat: 55.6811,
    lng: 12.5259,
    description:
      "A bright, furnished room in a shared flat near Frederiksberg Runddel, an eight-minute bike ride from the CBS Solbjerg Plads campus. The landlord has hosted CEMS exchange students for years.",
    rooms: 1,
    sizeSqm: 16,
    availableFrom: "1 Sep 2026",
    amenities: ["Furnished", "Wifi included", "Washing machine", "Bike included"],
  },
  {
    id: "ha-vesterbro-studio",
    districtSlug: "vesterbro-kongens-enghave",
    title: "Modern studio near Kødbyen",
    rent: 8500,
    currency: "DKK ",
    type: "Studio",
    source: "HousingAtlas",
    homeUniversityFriendly: true,
    lat: 55.6664,
    lng: 12.5583,
    description:
      "A self-contained studio a short walk from the Kødbyen food and nightlife scene, with an easy bike ride to both CBS and Copenhagen Central Station.",
    rooms: 1,
    sizeSqm: 27,
    availableFrom: "15 Sep 2026",
    amenities: ["Furnished", "Private bathroom", "Kitchenette", "Wifi included"],
  },
  {
    id: "housingfoundation-noerrebro-room",
    districtSlug: "noerrebro",
    title: "Shared room by the lakes",
    rent: 6200,
    currency: "DKK ",
    type: "Room",
    source: "Housing Foundation",
    lat: 55.6892,
    lng: 12.5581,
    description:
      "A room in a 3-person shared flat close to Copenhagen's lakes (Søerne), popular with students who want Nørrebro's energy with an easy bike commute into the center.",
    rooms: 1,
    sizeSqm: 13,
    availableFrom: "1 Oct 2026",
    amenities: ["Furnished", "Shared kitchen", "Bike storage"],
    sourceUrl: "https://www.housingfoundation.dk",
  },
  {
    id: "boligportal-indreby-room",
    districtSlug: "indre-by",
    title: "Room in the historic center",
    rent: 7800,
    currency: "DKK ",
    type: "Room",
    source: "Boligportal.dk",
    lat: 55.6836,
    lng: 12.5941,
    description:
      "A room in a classic Copenhagen apartment near Christianshavn's canals, a short bike ride from CBS and walking distance from Nyhavn.",
    rooms: 1,
    sizeSqm: 14,
    availableFrom: "1 Sep 2026",
    amenities: ["Furnished", "Wifi included", "Shared kitchen"],
    sourceUrl: "https://www.boligportal.dk",
  },
  {
    id: "cbshousing-amager-room",
    districtSlug: "amager-vest",
    title: "Room near Islands Brygge harbor bath",
    rent: 6800,
    currency: "DKK ",
    type: "Room",
    source: "CBS Housing Facebook Group",
    riskNote: "Higher caution",
    lat: 55.6641,
    lng: 12.5822,
    description:
      "A sublet room close to the Islands Brygge harbor bath, listed informally with limited photos and no verified reviews yet — worth extra diligence before committing given the caution flag.",
    rooms: 1,
    sizeSqm: 12,
    availableFrom: "Immediately",
    amenities: ["Furnished", "Wifi included"],
  },
];

export function getDistrictBySlug(slug: string): District | undefined {
  return copenhagenDistricts.find((d) => d.slug === slug);
}

export function getListingsForDistrictSlug(slug: string | null): Listing[] {
  if (!slug) return [];
  return copenhagenListings.filter((l) => l.districtSlug === slug);
}
