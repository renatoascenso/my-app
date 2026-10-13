import type { Listing } from "./listings";

// London's 32 boroughs and the City of London.
// Boundaries: Office for National Statistics, Local Authority Districts (December 2025) BGC,
// Open Government Licence v3.0 — credited in LondonExplorer. "Inner"/"Outer" follows the ONS
// statistical definition. Room prices are estimated ranges; scores are editorial judgments.

export type LondonBorough = {
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

type Base = Omit<LondonBorough, "lat" | "lng" | "badge"> & { at: [number, number]; inner?: boolean; badge?: string };
const b = ({ at, inner = false, badge, ...rest }: Base): LondonBorough => ({
  ...rest,
  badge: badge ?? (inner ? "Inner London" : "Outer London"),
  lat: at[0],
  lng: at[1],
});

export const londonBoroughs: LondonBorough[] = [
  // Inner London
  b({ slug: "city-of-london", name: "City of London", badge: "The City", at: [51.51486, -0.09214],
    description: "The Square Mile: London's historic financial district around St Paul's and the Bank of England. Busy on weekdays, very quiet at weekends, with few homes.",
    rent: "£1,200–£1,500/mo", safety: 8.8, transport: 10, nightlife: 6.5, studentFit: 6.0,
    commute: "10–15 min to Bloomsbury and the Strand", bestFor: "A central address, if you can afford it", caution: "Very few rooms and high prices",
    landmarks: ["St Paul's Cathedral"] }),
  b({ slug: "westminster", name: "Westminster", inner: true, at: [51.51389, -0.16127],
    description: "The West End, Soho, Mayfair and Marylebone, plus LSE, King's College's Strand campus, the University of Westminster and Imperial College's South Kensington campus on the borough's western edge.",
    rent: "£1,150–£1,450/mo", safety: 7.8, transport: 10, nightlife: 9.6, studentFit: 7.8,
    commute: "LSE, KCL Strand and Imperial on site", bestFor: "Living in the heart of London", caution: "Among the most expensive places in the UK",
    landmarks: ["LSE", "King's College London (Strand)", "Imperial College (South Kensington)", "University of Westminster (Regent Street)", "Oxford Circus", "Hyde Park"] }),
  b({ slug: "camden", name: "Camden", inner: true, at: [51.54637, -0.15739],
    description: "Bloomsbury — home to UCL, SOAS and Birkbeck — King's Cross with UAL's Central Saint Martins, Camden Town's markets and music venues, and Hampstead Heath.",
    rent: "£1,000–£1,250/mo", safety: 7.8, transport: 9.8, nightlife: 9.0, studentFit: 9.4,
    commute: "UCL, SOAS and Central Saint Martins on site", bestFor: "UCL students and London's student heart", caution: "High demand; small, pricey rooms",
    landmarks: ["UCL", "SOAS", "Central Saint Martins (King's Cross)", "King's Cross", "Camden Market", "Hampstead Heath"] }),
  b({ slug: "islington", name: "Islington", inner: true, at: [51.54848, -0.11025],
    description: "Georgian squares, Upper Street's restaurants around Angel and City St George's University at Northampton Square, close to the City.",
    rent: "£950–£1,200/mo", safety: 7.8, transport: 9.4, nightlife: 8.4, studentFit: 8.8,
    commute: "15–20 min to Bloomsbury; City St George's on site", bestFor: "Restaurants and a short commute", caution: "Expensive around Angel",
    landmarks: ["City St George's (Northampton Square)", "Angel"] }),
  b({ slug: "hackney", name: "Hackney", inner: true, at: [51.55226, -0.06335],
    description: "East London's creative hub: Shoreditch, Dalston and Hackney Central, with bars, warehouses and London Fields — served by the Overground rather than the Tube.",
    rent: "£900–£1,100/mo", safety: 7.2, transport: 8.2, nightlife: 9.4, studentFit: 8.8,
    commute: "25–35 min to Bloomsbury", bestFor: "Nightlife and creative scene", caution: "Few Tube stations; some areas feel unsafe late at night",
    landmarks: ["Shoreditch", "Dalston"] }),
  b({ slug: "tower-hamlets", name: "Tower Hamlets", inner: true, at: [51.5172, -0.03558],
    description: "Whitechapel, Bethnal Green and Mile End with Queen Mary University of London, plus the towers of Canary Wharf and the Tower of London.",
    rent: "£900–£1,100/mo", safety: 7.0, transport: 9.2, nightlife: 7.8, studentFit: 8.8,
    commute: "QMUL on site; 25–30 min to Bloomsbury", bestFor: "Queen Mary students and good value near the City", caution: "Higher crime rates in parts of the borough",
    landmarks: ["Queen Mary University of London (Mile End)", "Whitechapel", "Canary Wharf", "Tower of London"] }),
  b({ slug: "southwark", name: "Southwark", inner: true, at: [51.47314, -0.07459],
    description: "From London Bridge and Borough Market — home to King's College's Guy's campus — to Elephant & Castle with London South Bank University, and lively Peckham.",
    rent: "£900–£1,100/mo", safety: 7.4, transport: 9.0, nightlife: 8.4, studentFit: 8.8,
    commute: "KCL Guy's and LSBU on site; 15–25 min to the Strand", bestFor: "KCL and LSBU students", caution: "Southern parts depend on buses and trains",
    landmarks: ["King's College London (Guy's)", "London South Bank University", "Elephant & Castle", "Peckham"] }),
  b({ slug: "lambeth", name: "Lambeth", inner: true, at: [51.45311, -0.11826],
    description: "The South Bank and Waterloo, home to King's College's Waterloo campus, down through Vauxhall, Stockwell and Brixton.",
    rent: "£900–£1,100/mo", safety: 7.2, transport: 9.0, nightlife: 8.8, studentFit: 8.4,
    commute: "KCL Waterloo on site; 15–25 min to the Strand", bestFor: "Brixton's nightlife and the South Bank", caution: "Mixed safety, especially at night",
    landmarks: ["King's College London (Waterloo)", "Brixton"] }),
  b({ slug: "wandsworth", name: "Wandsworth", inner: true, at: [51.45135, -0.18641],
    description: "Battersea, Clapham Junction, Balham and Tooting — with City St George's medical campus in Tooting and the University of Roehampton.",
    rent: "£950–£1,150/mo", safety: 8.2, transport: 8.6, nightlife: 7.6, studentFit: 8.0,
    commute: "City St George's (Tooting) and Roehampton on site; 25–35 min to central London", bestFor: "Young professionals' vibe and green commons", caution: "Pricey near Clapham and Battersea",
    landmarks: ["City St George's (Tooting)", "University of Roehampton", "Clapham Junction", "Tooting"] }),
  b({ slug: "hammersmith-and-fulham", name: "Hammersmith and Fulham", inner: true, at: [51.49594, -0.22125],
    description: "Riverside Hammersmith and Fulham, Shepherd's Bush and White City, where Imperial College has its newer campus.",
    rent: "£950–£1,150/mo", safety: 8.0, transport: 9.0, nightlife: 7.0, studentFit: 7.8,
    commute: "Imperial White City on site; 20–30 min to central London", bestFor: "Imperial students and riverside living", caution: "Expensive in Fulham",
    landmarks: ["Imperial College (White City)", "Hammersmith", "Fulham"] }),
  b({ slug: "kensington-and-chelsea", name: "Kensington and Chelsea", inner: true, at: [51.50162, -0.19273],
    description: "Notting Hill, Chelsea and South Kensington with its museums — right next to Imperial College — London's most expensive borough.",
    rent: "£1,150–£1,500/mo", safety: 8.6, transport: 9.4, nightlife: 7.0, studentFit: 6.8,
    commute: "5–15 min to Imperial; 20–25 min to central London", bestFor: "Living near Imperial, if budget allows", caution: "SW7 is London's priciest postcode for rooms",
    landmarks: ["Notting Hill", "South Kensington"] }),
  b({ slug: "lewisham", name: "Lewisham", inner: true, at: [51.44809, -0.02022],
    description: "South-east London around New Cross — home to Goldsmiths — Deptford and Lewisham town center, with the DLR and Overground.",
    rent: "£800–£950/mo", safety: 7.2, transport: 7.8, nightlife: 7.2, studentFit: 8.6,
    commute: "Goldsmiths on site; 25–35 min to central London", bestFor: "Goldsmiths students and value", caution: "Some areas less safe at night",
    landmarks: ["Goldsmiths (New Cross)", "Lewisham"] }),
  b({ slug: "haringey", name: "Haringey", inner: true, at: [51.59037, -0.10744],
    description: "North London from leafy Highgate and Crouch End to Wood Green and Tottenham, on the Piccadilly and Victoria lines.",
    rent: "£800–£950/mo", safety: 7.2, transport: 8.0, nightlife: 6.5, studentFit: 7.6,
    commute: "20–30 min to Bloomsbury", bestFor: "Good value with Tube links", caution: "Large differences between the west and the east of the borough",
    landmarks: ["Wood Green", "Tottenham"] }),
  b({ slug: "newham", name: "Newham", inner: true, at: [51.52834, 0.0364],
    description: "Stratford and the Queen Elizabeth Olympic Park, with the University of East London's Docklands campus and some of inner London's lowest room rents.",
    rent: "£750–£900/mo", safety: 6.8, transport: 8.8, nightlife: 5.5, studentFit: 7.8,
    commute: "UEL on site; 25–35 min to central London", bestFor: "Low rents with fast links via Stratford", caution: "Some areas feel unsafe at night",
    landmarks: ["Stratford", "Queen Elizabeth Olympic Park", "University of East London (Docklands)"] }),
  // Outer London
  b({ slug: "greenwich", name: "Greenwich", at: [51.47275, 0.05668],
    description: "Maritime Greenwich and its park, the University of Greenwich at the Old Royal Naval College, and residential areas out to Woolwich and Eltham.",
    rent: "£800–£950/mo", safety: 7.6, transport: 7.6, nightlife: 5.5, studentFit: 7.8,
    commute: "University of Greenwich on site; 30–40 min to central London", bestFor: "Greenwich students and riverside charm", caution: "Longer commutes to central campuses",
    landmarks: ["University of Greenwich (Old Royal Naval College)", "Greenwich Park"] }),
  b({ slug: "waltham-forest", name: "Waltham Forest", at: [51.59404, -0.01261],
    description: "Walthamstow's market and village, Leyton and Leytonstone, on the Victoria and Central lines.",
    rent: "£780–£920/mo", safety: 7.4, transport: 7.8, nightlife: 5.5, studentFit: 7.2,
    commute: "25–35 min to central London", bestFor: "Value with a direct Victoria line", caution: "Far from most campuses",
    landmarks: ["Walthamstow"] }),
  b({ slug: "brent", name: "Brent", at: [51.55854, -0.26779],
    description: "Diverse north-west London around Wembley, Kilburn and Willesden, with the Jubilee and Bakerloo lines.",
    rent: "£800–£950/mo", safety: 7.2, transport: 8.0, nightlife: 5.0, studentFit: 7.2,
    commute: "25–35 min to central London", bestFor: "Mid-range rents with Jubilee line access", caution: "Event crowds around Wembley",
    landmarks: ["Wembley Stadium"] }),
  b({ slug: "ealing", name: "Ealing", at: [51.52247, -0.33102],
    description: "West London's 'Queen of the Suburbs', with Ealing Broadway on the Elizabeth line and the University of West London.",
    rent: "£800–£950/mo", safety: 8.0, transport: 8.0, nightlife: 5.0, studentFit: 7.2,
    commute: "20–30 min to central London on the Elizabeth line", bestFor: "Green, calm and well connected", caution: "Far from east and south London campuses",
    landmarks: ["Ealing Broadway"] }),
  b({ slug: "barnet", name: "Barnet", at: [51.61603, -0.20998],
    description: "A large northern borough with Middlesex University's Hendon campus and suburbs along the Northern line.",
    rent: "£780–£920/mo", safety: 8.2, transport: 7.4, nightlife: 4.0, studentFit: 7.0,
    commute: "Middlesex University on site; 30–45 min to central London", bestFor: "Middlesex students and quiet suburbs", caution: "Long commute to central campuses",
    landmarks: ["Middlesex University (Hendon)"] }),
  b({ slug: "richmond-upon-thames", name: "Richmond upon Thames", at: [51.44215, -0.31297],
    description: "Leafy riverside south-west London with Richmond Park, Kew Gardens and Twickenham.",
    rent: "£850–£1,000/mo", safety: 9.0, transport: 7.4, nightlife: 5.0, studentFit: 6.6,
    commute: "35–45 min to central London", bestFor: "Green, safe and calm", caution: "Expensive for outer London",
    landmarks: ["Richmond Park"] }),
  b({ slug: "kingston-upon-thames", name: "Kingston upon Thames", at: [51.3879, -0.28687],
    description: "A riverside market town with Kingston University and a big student population, linked by trains to Waterloo.",
    rent: "£780–£920/mo", safety: 8.6, transport: 6.8, nightlife: 6.0, studentFit: 8.0,
    commute: "Kingston University on site; 30–40 min to Waterloo by train", bestFor: "Kingston University students", caution: "No Tube",
    landmarks: ["Kingston University", "Kingston town centre"] }),
  b({ slug: "merton", name: "Merton", at: [51.40996, -0.19723],
    description: "Wimbledon and its famous tennis club, Colliers Wood and Morden at the end of the Northern line.",
    rent: "£800–£950/mo", safety: 8.4, transport: 7.6, nightlife: 5.0, studentFit: 7.0,
    commute: "30–40 min to central London", bestFor: "Calm suburbs with good trains", caution: "Few student flatshares",
    landmarks: ["Wimbledon"] }),
  b({ slug: "hounslow", name: "Hounslow", at: [51.46838, -0.36712],
    description: "West London near Heathrow, from Chiswick by the river to Hounslow and Brentford.",
    rent: "£750–£900/mo", safety: 7.6, transport: 7.4, nightlife: 4.0, studentFit: 6.6,
    commute: "40–50 min to central London", bestFor: "Lower rents in the west", caution: "Aircraft noise in places",
    landmarks: [] }),
  b({ slug: "hillingdon", name: "Hillingdon", at: [51.5415, -0.44564],
    description: "London's far west, home to Brunel University in Uxbridge and Heathrow Airport.",
    rent: "£700–£850/mo", safety: 7.8, transport: 6.8, nightlife: 4.0, studentFit: 7.4,
    commute: "Brunel on site; 50–60 min to central London", bestFor: "Brunel students", caution: "Very far from central London",
    landmarks: ["Brunel University London (Uxbridge)", "Heathrow Airport"] }),
  b({ slug: "harrow", name: "Harrow", at: [51.59772, -0.34125],
    description: "Residential north-west London around Harrow-on-the-Hill, with the University of Westminster's Harrow campus.",
    rent: "£720–£850/mo", safety: 8.2, transport: 7.2, nightlife: 3.5, studentFit: 6.6,
    commute: "30–40 min to central London on the Metropolitan line", bestFor: "Quiet suburbs at lower rents", caution: "Little nightlife",
    landmarks: [] }),
  b({ slug: "redbridge", name: "Redbridge", at: [51.58568, 0.0759],
    description: "North-east suburbs around Ilford, with the Elizabeth line into central London.",
    rent: "£720–£850/mo", safety: 7.6, transport: 7.6, nightlife: 4.0, studentFit: 6.6,
    commute: "25–35 min to central London on the Elizabeth line", bestFor: "Lower rents with the Elizabeth line", caution: "Far from campuses",
    landmarks: ["Ilford"] }),
  b({ slug: "enfield", name: "Enfield", at: [51.651, -0.08722],
    description: "London's northern edge, from Edmonton to Enfield Town, with Overground and Piccadilly line links.",
    rent: "£700–£850/mo", safety: 7.4, transport: 6.8, nightlife: 3.5, studentFit: 6.2,
    commute: "40–50 min to central London", bestFor: "Lower rents", caution: "Long commutes",
    landmarks: [] }),
  b({ slug: "croydon", name: "Croydon", at: [51.35535, -0.08713],
    description: "South London's biggest town center with fast trains to London Bridge and Victoria and its own tram network.",
    rent: "£700–£850/mo", safety: 7.0, transport: 7.6, nightlife: 5.0, studentFit: 6.6,
    commute: "30–45 min to central London by train", bestFor: "Lower rents with fast trains", caution: "Some areas feel unsafe at night",
    landmarks: ["Croydon town centre"] }),
  b({ slug: "sutton", name: "Sutton", at: [51.36209, -0.17754],
    description: "Quiet southern suburbs around Sutton town center.",
    rent: "£700–£830/mo", safety: 8.6, transport: 6.6, nightlife: 3.5, studentFit: 5.8,
    commute: "40–50 min to central London", bestFor: "Safe, quiet suburbs", caution: "Far from student life",
    landmarks: [] }),
  b({ slug: "bromley", name: "Bromley", at: [51.37199, 0.05158],
    description: "London's largest borough by area, stretching from suburban Bromley to countryside in the south-east.",
    rent: "£720–£850/mo", safety: 8.6, transport: 6.6, nightlife: 3.5, studentFit: 5.8,
    commute: "35–50 min to central London", bestFor: "Green surroundings", caution: "Far from campuses",
    landmarks: [] }),
  b({ slug: "bexley", name: "Bexley", at: [51.45881, 0.14035],
    description: "South-east suburbs around Bexleyheath and Erith, close to Kent.",
    rent: "£680–£800/mo", safety: 8.2, transport: 6.2, nightlife: 3.0, studentFit: 5.4,
    commute: "45–60 min to central London", bestFor: "Low rents", caution: "No Tube; long commutes",
    landmarks: [] }),
  b({ slug: "barking-and-dagenham", name: "Barking and Dagenham", at: [51.54536, 0.13396],
    description: "One of London's most affordable boroughs, around Barking town center on the District and Hammersmith & City lines.",
    rent: "£680–£800/mo", safety: 6.8, transport: 7.2, nightlife: 3.5, studentFit: 6.0,
    commute: "35–45 min to central London", bestFor: "The lowest rents", caution: "Far from campuses; some areas less safe",
    landmarks: [] }),
  b({ slug: "havering", name: "Havering", at: [51.56439, 0.22112],
    description: "London's far eastern edge around Romford, with the Elizabeth line into the city.",
    rent: "£650–£780/mo", safety: 8.0, transport: 6.6, nightlife: 4.0, studentFit: 5.4,
    commute: "40–50 min to central London", bestFor: "Low rents and space", caution: "Very far from central campuses",
    landmarks: [] }),
];

export type LondonBoroughListing = Listing & { boroughSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const londonListings: LondonBoroughListing[] = [
  { id: "ld-sample-camden-room", boroughSlug: "camden", title: "Room in Camden Town", rent: 1100, currency: "£", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 51.5390, lng: -0.1420, description: "Double room in a 4-person flatshare, 20 minutes' walk to UCL.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
  { id: "ld-sample-qmul-room", boroughSlug: "tower-hamlets", title: "Room near Queen Mary", rent: 950, currency: "£", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 51.5230, lng: -0.0420, description: "Room in a shared flat a short walk from the Mile End campus.", rooms: 1, sizeSqm: 10, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "ld-sample-southwark-room", boroughSlug: "southwark", title: "Room near Elephant & Castle", rent: 980, currency: "£", type: "Room", source: SAMPLE_SOURCE, lat: 51.4960, lng: -0.0950, description: "Room close to LSBU and KCL's Guy's campus, on the Northern line.", rooms: 1, sizeSqm: 10, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "ld-sample-brixton-room", boroughSlug: "lambeth", title: "Room in Brixton", rent: 920, currency: "£", type: "Room", source: SAMPLE_SOURCE, lat: 51.4620, lng: -0.1140, description: "Room in a Victorian house share near the Victoria line.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Garden"] },
  { id: "ld-sample-dalston-room", boroughSlug: "hackney", title: "Room in Dalston", rent: 960, currency: "£", type: "Room", source: SAMPLE_SOURCE, lat: 51.5470, lng: -0.0740, description: "Room in a warehouse-style flatshare close to the Overground.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"], riskNote: "Higher caution" },
  { id: "ld-sample-angel-studio", boroughSlug: "islington", title: "Studio near Angel", rent: 1650, currency: "£", type: "Studio", source: SAMPLE_SOURCE, lat: 51.5340, lng: -0.1060, description: "Small furnished studio near Upper Street, 15 minutes to Bloomsbury.", rooms: 1, sizeSqm: 22, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"] },
  { id: "ld-sample-newcross-room", boroughSlug: "lewisham", title: "Room near Goldsmiths", rent: 820, currency: "£", type: "Room", source: SAMPLE_SOURCE, lat: 51.4750, lng: -0.0360, description: "Room in a student house share in New Cross.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
  { id: "ld-sample-stratford-room", boroughSlug: "newham", title: "Room in Stratford", rent: 830, currency: "£", type: "Room", source: SAMPLE_SOURCE, lat: 51.5420, lng: 0.0000, description: "Room in a newer flat near Stratford station and the Olympic Park.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Gym"] },
  { id: "ld-sample-whitecity-room", boroughSlug: "hammersmith-and-fulham", title: "Room near Imperial White City", rent: 1000, currency: "£", type: "Room", source: SAMPLE_SOURCE, lat: 51.5120, lng: -0.2250, description: "Room in a flatshare near the White City campus and the Central line.", rooms: 1, sizeSqm: 11, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Bills included"] },
];

export function getLondonBoroughBySlug(slug: string): LondonBorough | undefined {
  return londonBoroughs.find((x) => x.slug === slug);
}

export function getLondonListingsForBorough(slug: string | null): LondonBoroughListing[] {
  if (!slug) return [];
  return londonListings.filter((l) => l.boroughSlug === slug);
}
