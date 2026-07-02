export type City = {
  slug: string;
  name: string;
  country: string;
  rent: string;
  risk: string;
  bestFor: string;
  dashboard?: CityDashboard;
  neighborhoods?: Neighborhood[];
};

export type Neighborhood = {
  slug: string;
  name: string;
  gridArea: string;
  rent: string;
  safety: number;
  transport: number;
  nightlife: number;
  studentFit: number;
  commute: string;
  bestFor: string;
  caution: string;
  description: string;
};

export type PlatformCard = {
  name: string;
  trustScore: number; // out of 5
  audience: string;
  pros: string[];
  cons: string[];
  featured?: boolean;
};

export type InfoCard = {
  title: string;
  text: string;
};

export type StudentQuote = {
  quote: string;
  author: string;
};

export type CityDashboard = {
  description: string;
  costOfLiving: string;
  quickFacts: {
    population: string;
    averageRent: string;
    languages: string;
    transportScore: string;
    safetyScore: string;
  };
  marketOverview: {
    peakDemand: InfoCard;
    mainChallenges: InfoCard;
  };
  platforms: PlatformCard[];
  risks: InfoCard[];
  studentQuotes: StudentQuote[];
};

export const cities: City[] = [
  {
    slug: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    rent: "€650–€950",
    risk: "High deposit scams",
    bestFor: "International students, nightlife, coastal lifestyle",
    dashboard: {
      description:
        "Portugal's sunny capital blends historic, tiled neighborhoods with a fast-growing student and international community. Expect a mild climate year-round, steep cobblestone streets, and a rental market that moves quickly during peak season.",
      costOfLiving: "€900–€1,300/month (rent, food, transport, essentials)",
      quickFacts: {
        population: "545,000 (metro: 2.9M)",
        averageRent: "€650–€950/mo",
        languages: "Portuguese, widely spoken English",
        transportScore: "8.2/10",
        safetyScore: "7.9/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July through September, ahead of the academic year. Well-priced listings near universities are often gone within days of being posted.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Landlords commonly ask for 2–3 months of deposit upfront, and reliable English-language listings are limited outside student-focused platforms.",
        },
      },
      platforms: [
        {
          name: "HousingAtlas",
          trustScore: 4.8,
          audience: "Students who want one trusted starting point",
          pros: [
            "Curated & verified listings",
            "Built-in scam and risk warnings",
            "Free to use",
          ],
          cons: ["Smaller inventory while we're in early access"],
          featured: true,
        },
        {
          name: "Uniplaces",
          trustScore: 4.2,
          audience: "International & exchange students",
          pros: [
            "Verified listings",
            "Book remotely before arrival",
            "English-language support",
          ],
          cons: ["Higher service fees", "Limited inventory outside the center"],
        },
        {
          name: "HousingAnywhere",
          trustScore: 4.0,
          audience: "International students & young professionals",
          pros: [
            "Wide European inventory",
            "Secure payment protection",
            "Flexible lease lengths",
          ],
          cons: ["Service fees on top of rent", "Photos can be outdated"],
        },
        {
          name: "Idealista",
          trustScore: 3.5,
          audience: "Long-term renters & locals",
          pros: [
            "Largest listing volume in Portugal",
            "Direct landlord contact",
            "Detailed search filters",
          ],
          cons: [
            "Mostly Portuguese-language",
            "No renter protection",
            "Occasional scam listings",
          ],
        },
        {
          name: "Erasmus Play",
          trustScore: 3.8,
          audience: "Erasmus & exchange students",
          pros: [
            "Student-only community",
            "Roommate matching",
            "Move-in ready rooms",
          ],
          cons: ["Smaller inventory", "Mostly shared housing"],
        },
        {
          name: "Facebook Groups",
          trustScore: 2.5,
          audience: "Budget-conscious students & locals",
          pros: [
            "Free to use",
            "Direct landlord/tenant contact",
            "Fast-moving deals",
          ],
          cons: [
            "No listing verification",
            "Higher scam risk",
            "No dispute resolution",
          ],
        },
      ],
      risks: [
        {
          title: "Deposit scams",
          text: "Some landlords request a deposit before offering a viewing, then disappear. Never wire money for a property you haven't seen in person or over video.",
        },
        {
          title: "Utility contracts",
          text: "Electricity, water, and internet are sometimes billed separately from rent and require a Portuguese tax number (NIF) to set up.",
        },
        {
          title: "Bureaucracy",
          text: "Registering your address, and applying for a residence permit if you're a non-EU citizen, can take weeks. Start the paperwork as soon as you sign a lease.",
        },
        {
          title: "Furnished vs. unfurnished",
          text: "Most student rentals are listed as furnished, but that can mean anything from a bare bed frame to a fully equipped kitchen. Confirm exactly what's included before signing.",
        },
      ],
      studentQuotes: [
        {
          quote:
            "I found my room through Uniplaces before I even landed — it made the first week so much less stressful.",
          author: "Sofia, Erasmus student from Italy",
        },
        {
          quote:
            "Be careful with Facebook groups. I almost sent a deposit to someone who refused to do a video call.",
          author: "Tom, exchange student from Germany",
        },
        {
          quote:
            "Setting up utilities took longer than expected because I needed a NIF number first. Start that process early.",
          author: "Ana, master's student from Brazil",
        },
      ],
    },
    neighborhoods: [
      {
        slug: "alfama",
        name: "Alfama",
        gridArea: "alfama",
        rent: "€700–€1,000/mo",
        safety: 7.8,
        transport: 7.2,
        nightlife: 8.0,
        studentFit: 7.5,
        commute: "25–35 min to major universities",
        bestFor: "Historic atmosphere, nightlife, short stays",
        caution: "Steep streets and tourist pressure",
        description:
          "Historic, scenic and central, but tourist-heavy and less practical for daily commuting.",
      },
      {
        slug: "baixa",
        name: "Baixa",
        gridArea: "baixa",
        rent: "€800–€1,200/mo",
        safety: 8.0,
        transport: 9.0,
        nightlife: 8.5,
        studentFit: 7.8,
        commute: "20–30 min to major universities",
        bestFor: "Central access, first-time arrivals, city life",
        caution: "Higher rents and tourist-heavy listings",
        description:
          "Very central and well connected, ideal for orientation but usually more expensive.",
      },
      {
        slug: "santos",
        name: "Santos",
        gridArea: "santos",
        rent: "€750–€1,100/mo",
        safety: 8.1,
        transport: 8.0,
        nightlife: 8.8,
        studentFit: 8.6,
        commute: "20–35 min to major universities",
        bestFor: "Students, nightlife, international community",
        caution: "Noise and fast-moving listings",
        description:
          "Popular with international students and young professionals, with strong nightlife and good river access.",
      },
      {
        slug: "campo-de-ourique",
        name: "Campo de Ourique",
        gridArea: "campo",
        rent: "€700–€1,000/mo",
        safety: 8.6,
        transport: 7.5,
        nightlife: 6.5,
        studentFit: 8.0,
        commute: "25–40 min to major universities",
        bestFor: "Calmer lifestyle, safety, local feel",
        caution: "Fewer student-focused listings",
        description:
          "Residential, safe and local, good for people who prefer calm over nightlife.",
      },
      {
        slug: "avenidas-novas",
        name: "Avenidas Novas",
        gridArea: "avenidas",
        rent: "€750–€1,100/mo",
        safety: 8.5,
        transport: 8.8,
        nightlife: 7.0,
        studentFit: 8.7,
        commute: "10–25 min to major universities",
        bestFor: "University access, transport, balanced lifestyle",
        caution: "Competitive demand during semester start",
        description:
          "Practical, central-north area with strong transport and good access to universities.",
      },
      {
        slug: "parque-das-nacoes",
        name: "Parque das Nações",
        gridArea: "parque",
        rent: "€850–€1,300/mo",
        safety: 8.8,
        transport: 8.4,
        nightlife: 6.8,
        studentFit: 7.2,
        commute: "30–45 min to major universities",
        bestFor: "Modern apartments, safety, riverfront lifestyle",
        caution: "Expensive and further from traditional student areas",
        description:
          "Modern, safe and clean, but usually more expensive and less student-centered.",
      },
    ],
  },
  {
    slug: "st-gallen",
    name: "St. Gallen",
    country: "Switzerland",
    rent: "CHF 650–950",
    risk: "Limited availability",
    bestFor: "HSG students, short distances, safe environment",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function findCityByQuery(query: string): City | undefined {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return undefined;
  return cities.find((city) => city.name.toLowerCase() === normalized);
}

export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function averageFromRange(text: string): number {
  const numbers = text.replace(/,/g, "").match(/\d+(\.\d+)?/g);
  if (!numbers || numbers.length === 0) return 0;
  const values = numbers.map(Number);
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}
