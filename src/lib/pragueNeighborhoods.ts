import type { Listing } from "./listings";

// Prague's 22 administrative districts (správní obvody Praha 1–22).
// Boundaries: ČÚZK, RÚIAN (CC BY 4.0), credited in PragueExplorer.
// Room prices are estimated ranges for a room in a shared flat; scores are editorial judgments.

export type PragueObvod = {
  slug: string;
  name: string;
  number: number;
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

type Base = Omit<PragueObvod, "slug" | "name" | "lat" | "lng"> & { at: [number, number] };
const o = ({ at, ...rest }: Base): PragueObvod => ({
  ...rest,
  slug: `praha-${rest.number}`,
  name: `Praha ${rest.number}`,
  lat: at[0],
  lng: at[1],
});

export const pragueObvody: PragueObvod[] = [
  o({ number: 1, badge: "Old Town · Malá Strana", at: [50.08657, 14.41368],
    description: "The historic heart: the Old Town, Malá Strana, the Castle district and the northern New Town — plus Charles University's Karolinum and Faculty of Arts.",
    rent: "CZK 13,000–17,000/mo", safety: 7.8, transport: 9.8, nightlife: 9.4, studentFit: 7.6,
    commute: "Charles University's central faculties on site", bestFor: "Living among the monuments", caution: "Tourist crowds, short-term rentals and high prices",
    landmarks: ["Old Town Square", "Prague Castle", "Karolinum (Charles University)", "Faculty of Arts (Charles University)", "Anglo-American University"] }),
  o({ number: 2, badge: "New Town · Vinohrady · Vyšehrad", at: [50.07256, 14.43043],
    description: "Elegant Vinohrady around Náměstí Míru, the southern New Town with CTU's Karlovo náměstí campus and Charles University's Albertov science faculties, and Vyšehrad.",
    rent: "CZK 11,500–14,500/mo", safety: 8.4, transport: 9.6, nightlife: 8.4, studentFit: 9.0,
    commute: "CTU (Karlovo náměstí) and Albertov on site; 10 min to the Old Town", bestFor: "Central, leafy living with cafés", caution: "Pricey and in high demand",
    landmarks: ["Náměstí Míru", "CTU (Karlovo náměstí)", "Albertov (Charles University)", "Vyšehrad", "Prague main station"] }),
  o({ number: 3, badge: "Žižkov", at: [50.08644, 14.46972],
    description: "Žižkov: a lively, slightly gritty district famous for its pubs and TV tower, home to the Prague University of Economics and Business (VŠE).",
    rent: "CZK 10,000–13,000/mo", safety: 7.6, transport: 8.6, nightlife: 9.0, studentFit: 9.2,
    commute: "VŠE on site; 10–15 min to the Old Town", bestFor: "VŠE students and pub culture", caution: "Hilly and noisy at night",
    landmarks: ["VŠE (Prague University of Economics and Business)", "Žižkov TV Tower"] }),
  o({ number: 4, badge: "Nusle · Pankrác · Krč", at: [50.0331, 14.45133],
    description: "Southern districts along metro line C: Nusle, the Pankrác business area, Krč and Braník, with green valleys along the Vltava.",
    rent: "CZK 9,000–11,500/mo", safety: 8.2, transport: 8.8, nightlife: 5.5, studentFit: 7.8,
    commute: "15–20 min to the center on metro C", bestFor: "Good value with fast metro links", caution: "Large housing estates in the south",
    landmarks: ["Pankrác"] }),
  o({ number: 5, badge: "Smíchov · Motol · Jinonice", at: [50.04784, 14.36989],
    description: "Smíchov's Anděl hub on metro B, Charles University's Jinonice campus (social sciences) and the Motol University Hospital at the end of metro A.",
    rent: "CZK 9,500–12,500/mo", safety: 8.2, transport: 9.0, nightlife: 7.4, studentFit: 8.4,
    commute: "Jinonice and Motol campuses on site; 10 min to the center", bestFor: "Social sciences and medicine students", caution: "Busy around Anděl",
    landmarks: ["Anděl (Smíchov)", "Charles University Jinonice campus", "Motol University Hospital"] }),
  o({ number: 6, badge: "Dejvice · Břevnov · Suchdol", at: [50.1045, 14.33556],
    description: "Prague's university district: CTU's Dejvice campus, the University of Chemistry and Technology, the Czech University of Life Sciences in Suchdol and the Strahov dorms.",
    rent: "CZK 10,000–13,000/mo", safety: 8.8, transport: 8.8, nightlife: 6.5, studentFit: 9.6,
    commute: "CTU, UCT and CZU on site; 10–15 min to the center on metro A", bestFor: "CTU, UCT and CZU students", caution: "Rooms near Dejvická go fast before September",
    landmarks: ["CTU (Dejvice campus)", "Dejvická", "Strahov dorms", "Czech University of Life Sciences (Suchdol)"] }),
  o({ number: 7, badge: "Holešovice · Letná", at: [50.10927, 14.42709],
    description: "Letná's park and beer garden with city views, and Holešovice's galleries, markets and clubs in former industrial buildings.",
    rent: "CZK 10,500–13,500/mo", safety: 8.4, transport: 8.8, nightlife: 8.4, studentFit: 8.8,
    commute: "10–15 min to the Old Town and Dejvice", bestFor: "Creative scene and parks", caution: "Popular and getting pricier",
    landmarks: ["Letná park", "DOX Holešovice"] }),
  o({ number: 8, badge: "Karlín · Libeň · Kobylisy", at: [50.13598, 14.45766],
    description: "Revitalized Karlín with its cafés and offices, plus Libeň, Kobylisy and the large Bohnice housing estate in the north.",
    rent: "CZK 10,000–13,000/mo", safety: 7.8, transport: 8.6, nightlife: 7.0, studentFit: 7.8,
    commute: "10–25 min to the center", bestFor: "Karlín's cafés and modern flats", caution: "Large differences between Karlín and the north",
    landmarks: ["Karlín"] }),
  o({ number: 9, badge: "Vysočany · Prosek", at: [50.10862, 14.50694],
    description: "North-eastern districts with newer residential projects in Vysočany and the Prosek housing estate on metro C.",
    rent: "CZK 9,000–11,500/mo", safety: 7.8, transport: 8.2, nightlife: 4.5, studentFit: 7.4,
    commute: "15–20 min to the center", bestFor: "Newer flats at fair prices", caution: "Little nightlife",
    landmarks: [] }),
  o({ number: 10, badge: "Vršovice · Strašnice", at: [50.06946, 14.49423],
    description: "Vršovice's hip cafés and bars near Vinohrady, plus residential Strašnice and Záběhlice, with Charles University's Third Faculty of Medicine close by.",
    rent: "CZK 9,500–12,000/mo", safety: 8.0, transport: 8.4, nightlife: 7.6, studentFit: 8.4,
    commute: "15–20 min to the center by tram or metro A", bestFor: "Young, local feel at fair prices", caution: "Some streets are far from the metro",
    landmarks: ["Vršovice", "Third Faculty of Medicine (Charles University)"] }),
  o({ number: 11, badge: "Chodov · Háje", at: [50.02253, 14.52267],
    description: "The Jižní Město housing estate around Chodov and Háje at the southern end of metro C.",
    rent: "CZK 8,500–10,500/mo", safety: 7.8, transport: 8.0, nightlife: 3.5, studentFit: 6.8,
    commute: "25–30 min to the center on metro C", bestFor: "Lower rents on the metro", caution: "Panel-block estates, little nightlife",
    landmarks: ["Chodov"] }),
  o({ number: 12, badge: "Modřany · Kamýk", at: [49.99345, 14.43577],
    description: "Residential southern Prague above the Vltava, connected mainly by trams and buses.",
    rent: "CZK 8,000–10,000/mo", safety: 8.2, transport: 6.8, nightlife: 3.0, studentFit: 6.2,
    commute: "30–40 min to the center", bestFor: "Quiet and green", caution: "No metro",
    landmarks: [] }),
  o({ number: 13, badge: "Stodůlky · Lužiny", at: [50.03602, 14.31453],
    description: "The south-western housing estates of Stodůlky and Lužiny along metro line B.",
    rent: "CZK 8,500–10,500/mo", safety: 8.2, transport: 8.0, nightlife: 3.5, studentFit: 6.8,
    commute: "20–30 min to the center on metro B", bestFor: "Lower rents with direct metro", caution: "Far from campus life",
    landmarks: ["Stodůlky"] }),
  o({ number: 14, badge: "Černý Most", at: [50.09802, 14.56444],
    description: "Eastern housing estates around Černý Most at the end of metro B.",
    rent: "CZK 8,000–10,000/mo", safety: 7.4, transport: 7.6, nightlife: 3.0, studentFit: 6.2,
    commute: "25–35 min to the center on metro B", bestFor: "Low rents", caution: "Far from campuses",
    landmarks: ["Černý Most"] }),
  o({ number: 15, badge: "Hostivař · Horní Měcholupy", at: [50.05762, 14.56033],
    description: "South-eastern residential areas around the Hostivař reservoir, near the eastern end of metro A.",
    rent: "CZK 8,000–10,000/mo", safety: 8.0, transport: 7.0, nightlife: 3.0, studentFit: 6.0,
    commute: "25–35 min to the center", bestFor: "Nature and quiet", caution: "Long commute",
    landmarks: [] }),
  o({ number: 16, badge: "Radotín · Zbraslav", at: [49.98338, 14.36763],
    description: "Small-town southern edge of Prague along the Vltava and Berounka rivers, linked by trains and buses.",
    rent: "CZK 8,000–10,000/mo", safety: 8.4, transport: 6.0, nightlife: 2.5, studentFit: 5.4,
    commute: "35–45 min to the center", bestFor: "Village life near the city", caution: "Very far from campuses",
    landmarks: [] }),
  o({ number: 17, badge: "Řepy · Zličín", at: [50.06437, 14.28681],
    description: "Western housing estates and new developments near the end of metro B.",
    rent: "CZK 8,500–10,500/mo", safety: 8.0, transport: 7.2, nightlife: 2.5, studentFit: 6.0,
    commute: "30–35 min to the center", bestFor: "Lower rents", caution: "Far from student life",
    landmarks: [] }),
  o({ number: 18, badge: "Letňany · Čakovice", at: [50.15025, 14.52329],
    description: "Northern districts around Letňany at the end of metro C, with newer housing.",
    rent: "CZK 8,000–10,000/mo", safety: 8.0, transport: 7.2, nightlife: 2.5, studentFit: 6.0,
    commute: "25–35 min to the center on metro C", bestFor: "New flats at lower prices", caution: "Little to do in the evenings",
    landmarks: [] }),
  o({ number: 19, badge: "Kbely · Vinoř · Satalice", at: [50.13394, 14.56489],
    description: "Quiet north-eastern suburbs on the edge of the city.",
    rent: "CZK 8,000–10,000/mo", safety: 8.4, transport: 5.8, nightlife: 2.0, studentFit: 5.0,
    commute: "35–45 min to the center", bestFor: "Suburban calm", caution: "Bus-dependent",
    landmarks: [] }),
  o({ number: 20, badge: "Horní Počernice", at: [50.11091, 14.62104],
    description: "A suburban district on Prague's eastern edge.",
    rent: "CZK 7,500–9,500/mo", safety: 8.4, transport: 5.6, nightlife: 2.0, studentFit: 4.8,
    commute: "40–50 min to the center", bestFor: "Quiet suburban life", caution: "Far from everything students need",
    landmarks: [] }),
  o({ number: 21, badge: "Újezd nad Lesy · Klánovice", at: [50.0808, 14.65165],
    description: "Green eastern suburbs by the Klánovice forest, with trains toward the center.",
    rent: "CZK 7,500–9,500/mo", safety: 8.6, transport: 5.8, nightlife: 2.0, studentFit: 4.8,
    commute: "35–50 min to the center", bestFor: "Forest and quiet", caution: "Very far from campuses",
    landmarks: [] }),
  o({ number: 22, badge: "Uhříněves", at: [50.02745, 14.61937],
    description: "South-eastern suburbs around Uhříněves, connected by train.",
    rent: "CZK 7,500–9,500/mo", safety: 8.4, transport: 5.8, nightlife: 2.0, studentFit: 4.8,
    commute: "35–45 min to the center", bestFor: "Low rents and space", caution: "Very far from campuses",
    landmarks: [] }),
];

export type PragueObvodListing = Listing & { obvodSlug: string };

// Sample listings to demonstrate the map — not real offers.
export const SAMPLE_SOURCE = "Sample listing";

export const pragueListings: PragueObvodListing[] = [
  { id: "pr-sample-dejvice-room", obvodSlug: "praha-6", title: "Room near CTU Dejvice", rent: 11000, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.1010, lng: 14.3960, description: "Room in a 3-person flatshare, a 5-minute walk to the Dejvice campus.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Utilities included"] },
  { id: "pr-sample-vinohrady-room", obvodSlug: "praha-2", title: "Room in Vinohrady", rent: 12500, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, lat: 50.0750, lng: 14.4400, description: "Bright room in a high-ceilinged flat near Náměstí Míru.", rooms: 1, sizeSqm: 15, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Wifi included"] },
  { id: "pr-sample-zizkov-room", obvodSlug: "praha-3", title: "Room near VŠE", rent: 10500, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, homeUniversityFriendly: true, lat: 50.0850, lng: 14.4450, description: "Room in a shared flat in Žižkov, a short walk to the VŠE campus.", rooms: 1, sizeSqm: 12, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Washing machine"] },
  { id: "pr-sample-oldtown-studio", obvodSlug: "praha-1", title: "Studio in the Old Town", rent: 22000, currency: "CZK ", type: "Studio", source: SAMPLE_SOURCE, lat: 50.0880, lng: 14.4230, description: "Small furnished studio in a historic building near Old Town Square.", rooms: 1, sizeSqm: 25, availableFrom: "1 Nov 2026", amenities: ["Furnished", "Kitchenette", "Private bathroom"], riskNote: "Higher caution" },
  { id: "pr-sample-holesovice-room", obvodSlug: "praha-7", title: "Room in Holešovice", rent: 11500, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, lat: 50.1000, lng: 14.4400, description: "Room in a flatshare close to Letná park and the tram.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished", "Balcony"] },
  { id: "pr-sample-karlin-room", obvodSlug: "praha-8", title: "Room in Karlín", rent: 12000, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, lat: 50.0930, lng: 14.4500, description: "Room in a renovated building near Křižíkova metro station.", rooms: 1, sizeSqm: 14, availableFrom: "15 Sep 2026", amenities: ["Furnished", "Elevator"] },
  { id: "pr-sample-smichov-room", obvodSlug: "praha-5", title: "Room near Anděl", rent: 10500, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, lat: 50.0700, lng: 14.4030, description: "Room in a shared flat close to the Anděl hub and metro B.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Utilities included"] },
  { id: "pr-sample-vrsovice-room", obvodSlug: "praha-10", title: "Room in Vršovice", rent: 10000, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, lat: 50.0690, lng: 14.4500, description: "Room near Krymská street's cafés, with trams to the center.", rooms: 1, sizeSqm: 13, availableFrom: "1 Sep 2026", amenities: ["Furnished"] },
  { id: "pr-sample-pankrac-room", obvodSlug: "praha-4", title: "Room near Pankrác", rent: 9500, currency: "CZK ", type: "Room", source: SAMPLE_SOURCE, lat: 50.0560, lng: 14.4400, description: "Room in a flatshare on metro C, 10 minutes to the center.", rooms: 1, sizeSqm: 12, availableFrom: "1 Oct 2026", amenities: ["Furnished", "Washing machine"] },
];

export function getPragueObvodBySlug(slug: string): PragueObvod | undefined {
  return pragueObvody.find((x) => x.slug === slug);
}

export function getPragueListingsForObvod(slug: string | null): PragueObvodListing[] {
  if (!slug) return [];
  return pragueListings.filter((l) => l.obvodSlug === slug);
}
