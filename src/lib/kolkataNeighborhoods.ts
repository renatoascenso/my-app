import type { Listing } from "./listings";

// The 16 boroughs of the Kolkata Municipal Corporation, from Cossipore in the north to Joka in the south-west.
// Boundaries: KMC wards from the DataMeet Municipal Spatial Data project (CC BY-SA 2.5 India), merged into
// boroughs using the 144-ward structure in use before the 2026 delimitation. Wards 142–144 (Joka) are
// missing from that dataset and were filled in from the city boundary in OpenStreetMap (ODbL).
// Both are credited in KolkataExplorer.
// IIM Calcutta (home of CEMS) is on its campus at Joka, in Borough XVI. Commute times refer to that campus;
// rents are estimated monthly ranges for a room in a shared flat or paying-guest (PG) home (INR);
// scores are editorial judgments.

export type KolkataBorough = {
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

type Area = "North Kolkata" | "Central Kolkata" | "South Kolkata" | "South-west Kolkata";
type Entry = {
  slug: string; name: string; area: Area; at: [number, number]; description: string; commute: string;
  rent?: string; safety?: number; transport?: number; nightlife?: number; studentFit?: number;
  bestFor?: string; caution?: string; landmarks?: string[];
};
const s = ({ area, at, landmarks = [], ...e }: Entry): KolkataBorough => ({
  rent: "₹6,000–10,000/mo", safety: 7.0, transport: 7.4, nightlife: 5.0, studentFit: 5.0,
  bestFor: "Local life at low prices", caution: "Far from Joka — expect a long trip in heavy traffic",
  ...e,
  landmarks,
  badge: area,
  lat: at[0],
  lng: at[1],
});

export const kolkataBoroughs: KolkataBorough[] = [
  // ── South-west Kolkata ──
  s({ slug: "borough-xvi", name: "Joka & Thakurpukur (Borough XVI)", area: "South-west Kolkata", at: [22.4441, 88.3017],
    description: "The south-western edge of the city along Diamond Harbour Road, with the IIM Calcutta campus at Joka, Thakurpukur and Sakher Bazar. IIM Calcutta students, including exchange students, normally live in the campus hostels.",
    rent: "₹5,000–9,000/mo", safety: 7.4, transport: 6.0, nightlife: 3.0, studentFit: 8.6,
    commute: "On campus, or 5–20 min by auto-rickshaw or car", bestFor: "Living at or next to IIM Calcutta",
    caution: "Quiet suburb — central Kolkata is an hour or more away",
    landmarks: ["IIM Calcutta", "Joka metro station", "Thakurpukur", "Sakher Bazar", "Haridevpur"] }),
  s({ slug: "borough-xiv", name: "Behala West & Taratala (Borough XIV)", area: "South-west Kolkata", at: [22.4874, 88.3134],
    description: "Busy residential area around Behala Chowrasta and Taratala, along Diamond Harbour Road towards the city.",
    rent: "₹6,000–10,000/mo", safety: 7.0, transport: 7.0, nightlife: 4.4, studentFit: 7.0,
    commute: "20–40 min by car or Purple Line metro", bestFor: "Affordable flats closest to Joka",
    caution: "Diamond Harbour Road is often jammed", landmarks: ["Behala Chowrasta", "Taratala"] }),
  s({ slug: "borough-xiii", name: "Behala East (Borough XIII)", area: "South-west Kolkata", at: [22.4895, 88.3390],
    description: "Residential neighbourhoods east of Behala between Diamond Harbour Road and Tollygunge.",
    rent: "₹6,000–10,000/mo", safety: 7.0, transport: 6.4, nightlife: 3.8, studentFit: 6.4,
    commute: "25–45 min by car", bestFor: "Quiet residential living near Joka", caution: "Narrow lanes and waterlogging in the monsoon" }),
  s({ slug: "borough-xv", name: "Metiabruz & Garden Reach (Borough XV)", area: "South-west Kolkata", at: [22.5436, 88.2679],
    description: "Riverside port and industrial area along the Hooghly, with the Metiabruz garment markets.",
    rent: "₹5,000–8,000/mo", safety: 6.0, transport: 5.4, nightlife: 2.6, studentFit: 3.6,
    commute: "40–60 min by car", caution: "Industrial and congested; few student rentals", landmarks: ["Metiabruz"] }),

  // ── South Kolkata ──
  s({ slug: "borough-x", name: "Tollygunge, Jadavpur & Golf Green (Borough X)", area: "South Kolkata", at: [22.4995, 88.3716],
    description: "Lively south Kolkata with Jadavpur University, Tollygunge, Lake Gardens, Golf Green and South City Mall.",
    rent: "₹7,000–12,000/mo", safety: 7.6, transport: 8.0, nightlife: 6.4, studentFit: 8.2,
    commute: "35–55 min by car", bestFor: "Student life in south Kolkata",
    caution: "Popular with students, so good rooms go quickly",
    landmarks: ["Jadavpur University", "Tollygunge", "Lake Gardens", "Golf Green", "South City Mall"] }),
  s({ slug: "borough-viii", name: "Ballygunge, Gariahat & Kalighat (Borough VIII)", area: "South Kolkata", at: [22.5195, 88.3654],
    description: "Established, well-off south Kolkata around Gariahat market, Rashbehari Avenue, the Kalighat Temple and Rabindra Sarobar lake.",
    rent: "₹9,000–16,000/mo", safety: 7.8, transport: 8.4, nightlife: 6.8, studentFit: 7.8,
    commute: "40–60 min by car", bestFor: "Shops, cafés and the lakes",
    caution: "Among the more expensive parts of the city",
    landmarks: ["Gariahat", "Rashbehari Avenue", "Kalighat Temple", "Rabindra Sarobar", "Ballygunge"] }),
  s({ slug: "borough-ix", name: "Bhowanipore, Chetla & Kidderpore (Borough IX)", area: "South Kolkata", at: [22.5326, 88.3454],
    description: "Old residential and commercial areas south of the Maidan, from Bhowanipore to Chetla, Majerhat and the Kidderpore docks.",
    rent: "₹7,000–12,000/mo", safety: 7.0, transport: 8.0, nightlife: 5.4, studentFit: 6.4,
    commute: "40–60 min by car", bestFor: "Central location south of the Maidan",
    caution: "Congested around the docks", landmarks: ["Bhowanipore", "Chetla", "Majerhat", "Kidderpore", "Hastings"] }),
  s({ slug: "borough-xi", name: "Bansdroni (Borough XI)", area: "South Kolkata", at: [22.4736, 88.3607],
    description: "Residential neighbourhoods in the far south of the city around Bansdroni.",
    rent: "₹6,000–9,000/mo", safety: 7.2, transport: 6.8, nightlife: 3.6, studentFit: 6.0,
    commute: "35–55 min by car", bestFor: "Lower rents in south Kolkata", landmarks: ["Bansdroni"] }),
  s({ slug: "borough-xii", name: "Topsia & EM Bypass (Borough XII)", area: "South Kolkata", at: [22.5135, 88.4031],
    description: "Newer apartment blocks and hospitals along the Eastern Metropolitan Bypass, from Topsia to the Ruby crossing.",
    rent: "₹8,000–13,000/mo", safety: 7.4, transport: 7.0, nightlife: 5.4, studentFit: 6.6,
    commute: "45–70 min by car", bestFor: "Modern flats near the Bypass",
    caution: "Car-oriented and far from Joka", landmarks: ["Ruby General Hospital", "Topsia"] }),

  // ── Central Kolkata ──
  s({ slug: "borough-vii", name: "Park Street, Park Circus & Tangra (Borough VII)", area: "Central Kolkata", at: [22.5552, 88.3501],
    description: "The heart of the city's nightlife on Park Street, the Maidan and Victoria Memorial, Park Circus, Quest Mall, Science City and the Chinatown of Tangra.",
    rent: "₹9,000–16,000/mo", safety: 7.2, transport: 8.6, nightlife: 8.8, studentFit: 7.6,
    commute: "50–80 min by car", bestFor: "Restaurants, bars and city life",
    caution: "A long trip to Joka at rush hour",
    landmarks: ["Park Street", "Victoria Memorial", "Maidan", "Park Circus", "Quest Mall", "Science City", "Tangra"] }),
  s({ slug: "borough-vi", name: "Esplanade, New Market & College Street (Borough VI)", area: "Central Kolkata", at: [22.5633, 88.3504],
    description: "Busy central district around Esplanade and New Market, up to the bookshops of College Street.",
    rent: "₹7,000–12,000/mo", safety: 6.6, transport: 9.0, nightlife: 6.6, studentFit: 6.4,
    commute: "50–80 min by car", bestFor: "Central location with metro links",
    caution: "Crowded and noisy", landmarks: ["Esplanade", "New Market", "College Street"] }),
  s({ slug: "borough-v", name: "Burrabazar & Sealdah (Borough V)", area: "Central Kolkata", at: [22.5820, 88.3542],
    description: "Wholesale markets of Burrabazar near the Howrah Bridge, Eden Gardens and the area around Sealdah station.",
    rent: "₹6,000–10,000/mo", safety: 6.2, transport: 8.6, nightlife: 4.4, studentFit: 4.4,
    commute: "55–85 min by car", caution: "Very congested; few student rentals",
    landmarks: ["Burrabazar", "Eden Gardens", "Sealdah railway station"] }),
  s({ slug: "borough-iv", name: "Jorasanko & Girish Park (Borough IV)", area: "Central Kolkata", at: [22.5850, 88.3590],
    description: "Old north-central Kolkata with Tagore's family home at Jorasanko and the streets around Girish Park.",
    rent: "₹6,000–9,500/mo", safety: 6.6, transport: 8.0, nightlife: 4.0, studentFit: 4.6,
    commute: "60–90 min by car", landmarks: ["Jorasanko Thakur Bari", "Girish Park"] }),

  // ── North Kolkata ──
  s({ slug: "borough-iii", name: "Ultadanga, Kankurgachi & Phoolbagan (Borough III)", area: "North Kolkata", at: [22.5805, 88.3907],
    description: "Residential and commercial areas on the eastern side of north Kolkata, from Maniktala to Ultadanga, close to Salt Lake.",
    rent: "₹7,000–11,000/mo", safety: 7.0, transport: 8.0, nightlife: 5.0, studentFit: 5.6,
    commute: "60–90 min by car", bestFor: "Easy access to Salt Lake",
    landmarks: ["Ultadanga", "Kankurgachi", "Phoolbagan", "Maniktala", "Narkeldanga"] }),
  s({ slug: "borough-ii", name: "Shyambazar & Hatibagan (Borough II)", area: "North Kolkata", at: [22.6013, 88.3725],
    description: "Traditional north Kolkata around the Shyambazar five-point crossing and the Hatibagan market.",
    rent: "₹6,000–9,000/mo", safety: 7.0, transport: 8.0, nightlife: 4.4, studentFit: 4.6,
    commute: "65–95 min by car", landmarks: ["Shyambazar", "Hatibagan"] }),
  s({ slug: "borough-i", name: "Cossipore & Belgachia (Borough I)", area: "North Kolkata", at: [22.6173, 88.3737],
    description: "The northern end of the city along the Hooghly, with Bagbazar, Cossipore, Chitpur, Paikpara and Belgachia.",
    rent: "₹5,500–8,500/mo", safety: 7.0, transport: 7.0, nightlife: 3.4, studentFit: 4.0,
    commute: "70–100 min by car", caution: "The farthest part of the city from Joka",
    landmarks: ["Cossipore", "Bagbazar", "Chitpur", "Paikpara", "Belgachia"] }),
];

export type KolkataListing = Listing & { boroughSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const kolkataListings: KolkataListing[] = [
  { id: "kol-sample-joka-room", boroughSlug: "borough-xvi", title: "Room near IIM Calcutta", rent: 8000, currency: "₹", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 22.4560, lng: 88.3030, description: "Furnished room in a family-run PG home near Joka metro station, a short ride from the IIM Calcutta campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Meals included", "Wifi included"] },
  { id: "kol-sample-behala-room", boroughSlug: "borough-xiv", title: "Room in Behala", rent: 9000, currency: "₹", type: "Room", source: SAMPLE_SOURCE, lat: 22.4890, lng: 88.3150, description: "Room in a shared flat near Behala Chowrasta, on Diamond Harbour Road.", rooms: 1, sizeSqm: 13, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Air conditioning"] },
  { id: "kol-sample-jadavpur-room", boroughSlug: "borough-x", title: "Room near Jadavpur", rent: 10000, currency: "₹", type: "Room", source: SAMPLE_SOURCE, lat: 22.4960, lng: 88.3680, description: "Room in a shared flat close to Jadavpur University, popular with students.", rooms: 1, sizeSqm: 12, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Wifi included"] },
  { id: "kol-sample-ballygunge-studio", boroughSlug: "borough-viii", title: "Studio near Gariahat", rent: 16000, currency: "₹", type: "Studio", source: SAMPLE_SOURCE, lat: 22.5180, lng: 88.3640, description: "Small furnished studio in a building with a caretaker, close to Gariahat market.", rooms: 1, sizeSqm: 28, availableFrom: "1 Feb 2027", amenities: ["Furnished", "Air conditioning", "Power backup"] },
  { id: "kol-sample-park-street-room", boroughSlug: "borough-vii", title: "Room off Park Street", rent: 13000, currency: "₹", type: "Room", source: SAMPLE_SOURCE, lat: 22.5530, lng: 88.3520, description: "Room in a shared flat a few minutes' walk from Park Street.", rooms: 1, sizeSqm: 13, availableFrom: "15 Jan 2027", amenities: ["Furnished", "Air conditioning"] },
];

export function getKolkataBoroughBySlug(slug: string): KolkataBorough | undefined {
  return kolkataBoroughs.find((x) => x.slug === slug);
}

export function getKolkataListingsForBorough(slug: string | null): KolkataListing[] {
  if (!slug) return [];
  return kolkataListings.filter((l) => l.boroughSlug === slug);
}
