export type City = {
  slug: string;
  name: string;
  country: string;
  rent: string;
  risk: string;
  bestFor: string;
  dashboard?: CityDashboard;
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
  heroImage?: string;
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
      heroImage: "/cities/lisbon-hero.jpg",
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
