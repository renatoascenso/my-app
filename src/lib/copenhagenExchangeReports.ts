import type { ExchangeReportsData } from "./exchangeReports";

export const copenhagenExchangeReports: ExchangeReportsData = {
  cityLabel: "Copenhagen",
  universities: [
    { id: "all", name: "All universities" },
    { id: "cbs", name: "Copenhagen Business School (CBS)" },
    { id: "ucph", name: "University of Copenhagen (UCPH)" },
    { id: "itu", name: "IT University of Copenhagen (ITU)" },
  ],
  questions: [
    {
      id: "neighborhoods",
      question: "Which neighborhoods or residences do past exchange students recommend?",
    },
    {
      id: "budget",
      question: "How much should I budget for rent per month?",
    },
    {
      id: "booking",
      question: "What's the safest way to find and book a room, and what should I watch out for?",
    },
  ],
  answers: {
    all: {
      neighborhoods:
        "Frederiksberg comes up constantly regardless of university — it's home to CBS's Nimbusparken dorm and UCPH's Housing Foundation dorms alike. Nørrebro and Islands Brygge (Amager Vest) are the next most-mentioned areas for private housing.",
      budget:
        "Budget roughly CHF/EUR 800–1,100/month for rent across all three universities. CBS's Nimbusparken dorm tends to be the cheapest reliable option; private housing near UCPH or ITU runs higher.",
      booking:
        "Apply to official university housing the moment applications open — deadlines and lottery systems vary by school, and ITU students in particular need to plan for a later admission timeline. If you miss official housing, Facebook groups and housingfoundation.dk are the most-cited fallback options, though reports warn availability drops fast.",
    },
    cbs: {
      neighborhoods:
        "Nearly every CBS report points to the same place: Nimbusparken ('Nimbus') in Frederiksberg, a CBS-run dorm just minutes from campus by bike, with 10–12 exchange students sharing a kitchen. It's the top recommendation in 4 of 5 CBS reports.",
      budget:
        "Nimbus runs about CHF/EUR 800/month for a private room with your own bathroom (shared kitchen). One older report found a private room through CBS's Housing Office for around CHF 700/month.",
      booking:
        "CBS housing is allocated by random draw, not first-come-first-served — but apply the moment the window opens anyway, since accommodation isn't guaranteed and the private market is very competitive. If you don't get a CBS dorm spot, CBS can help connect you with private landlords as a backup.",
    },
    ucph: {
      neighborhoods:
        "Recommendations vary more here: UCPH's own Housing Foundation dorms in Frederiksberg (Mariendalsvej specifically), or private options in Nørrebro, Frederiksberg, and near Islands Brygge. One report used Basestack Bryggen, a private studio provider next to South Campus, though it flagged cleanliness issues at handover.",
      budget:
        "Expect roughly CHF/EUR 1,000–1,100/month. One report split an Airbnb in Enghave Brygge at CHF 1,100/person; Housing Foundation dorms are described as 'relatively expensive' but easier to book than the open market.",
      booking:
        "housingfoundation.dk is the official route — cheaper options exist there but get taken quickly, so apply as early as possible on a first-come-first-served basis. Some students got rooms through personal connections, which isn't something you can plan around, so treat the official channels as your main path.",
    },
    itu: {
      neighborhoods:
        "Only one report so far, but it specifically recommends Nørrebro — central, close to cafés and restaurants.",
      budget:
        "Budget around CHF/EUR 1,000/month for rent — comparable to what CBS and UCPH students report overall.",
      booking:
        "Important ITU-specific catch: admission decisions come out later (early-to-mid November) than the deadline for official Copenhagen student housing, so by the time you're accepted, those options are often already gone. Plan on searching Facebook groups or short/mid-term rentals independently instead.",
    },
  },
  sources: [
    { author: "Sarah Maier", universityId: "cbs", university: "Copenhagen Business School", semester: "Autumn 2023" },
    { author: "Laurin Curschellas & Theodor Rotenhan", universityId: "cbs", university: "Copenhagen Business School", semester: "Autumn 2025" },
    { author: "Dolores Hermann & Maeva Isch", universityId: "cbs", university: "Copenhagen Business School", semester: "Autumn 2025" },
    { author: "Julian Franz", universityId: "cbs", university: "Copenhagen Business School", semester: "Autumn 2017" },
    { author: "Lara Kaninke & Joel Mäder", universityId: "cbs", university: "Copenhagen Business School", semester: "Autumn 2023" },
    { author: "Fabienne Schmid & Eric Gülünay", universityId: "ucph", university: "University of Copenhagen", semester: "Autumn 2025" },
    { author: "Claudia Schuler", universityId: "ucph", university: "University of Copenhagen", semester: "Spring 2022" },
    { author: "Maximilian Wälti & Anne-Sophie Bregenzer", universityId: "ucph", university: "University of Copenhagen", semester: "Autumn 2025" },
    { author: "Ruben Madlener & Finn Welz", universityId: "ucph", university: "University of Copenhagen", semester: "Autumn 2024" },
    { author: "Stefan Krummenacher", universityId: "itu", university: "IT University of Copenhagen", semester: "Spring 2025" },
  ],
};
