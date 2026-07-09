export type City = {
  slug: string;
  name: string;
  country: string;
  rent: string;
  risk: string;
  bestFor: string;
  dashboard?: CityDashboard;
};

export type PlatformGroup = {
  name: string;
  url: string;
  description: string;
};

export type PlatformCard = {
  name: string;
  trustScore: number; // out of 5
  audience: string;
  pros: string[];
  cons: string[];
  featured?: boolean;
  groups?: PlatformGroup[];
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
          name: "Flatio",
          trustScore: 4.2,
          audience: "Students & digital nomads wanting furnished, no-deposit stays",
          pros: [
            "No-deposit options",
            "Verified, fully furnished listings",
            "StayProtection move-in guarantee",
          ],
          cons: ["Pricier than direct landlord listings", "Best suited to stays of 1+ month"],
        },
        {
          name: "BeRoomie",
          trustScore: 3.8,
          audience: "Students who want to match with a compatible roommate first",
          pros: [
            "Swipe-based roommate matching",
            "Free to use",
            "Filters by lifestyle, habits & schedule",
          ],
          cons: [
            "Matching-focused, not a full listings database",
            "Smaller user base in Lisbon than in larger cities",
          ],
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
          groups: [
            {
              name: "Lisbon Expat Rooms, Flats & Roommates",
              url: "https://www.facebook.com/groups/LisbonRoomies/",
              description:
                "Broker-free group for posting and finding shared apartments and room rentals — expat guides flag occasional scammers, so verify before paying anything.",
            },
            {
              name: "Erasmus & Expats in Lisbon | Accommodation (rooms & apartments)",
              url: "https://www.facebook.com/groups/accommodationinlisbon/",
              description:
                "Purpose-built for Erasmus students and expats searching for rooms and apartments in Lisbon.",
            },
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
    dashboard: {
      description:
        "A compact, hillside Swiss city built around its UNESCO-listed old town, with the University of St. Gallen (HSG) driving a steady stream of student demand. Expect a small, walkable center, excellent public transport, and a rental market where good rooms disappear fast.",
      costOfLiving: "CHF 1,400–1,900/month (rent, food, transport, essentials)",
      heroImage: "/cities/st-gallen-hero.jpg",
      quickFacts: {
        population: "~80,000 (canton: 530,000)",
        averageRent: "CHF 650–950/mo",
        languages: "German (Swiss German dialect), English widely used at HSG",
        transportScore: "9.0/10",
        safetyScore: "9.2/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "August through September, and again in January, ahead of HSG's autumn and spring semesters. Rooms close to campus or the old town are often gone within a day of being listed.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Vacancy rates in the city are very low, and most landlords require a blocked Swiss deposit account (Mietkautionskonto) equal to up to 3 months' rent, which typically needs a Swiss bank account to set up.",
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
          name: "WOKO",
          trustScore: 4.5,
          audience: "Students seeking cooperative housing",
          pros: [
            "Student-run housing cooperative",
            "Below-market rents",
            "Long-term community focus",
          ],
          cons: ["Long waiting lists", "Limited spots for exchange students"],
        },
        {
          name: "WG-Zimmer.ch",
          trustScore: 4.0,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "Largest shared-flat listing site in German-speaking Switzerland",
            "Direct contact with flatmates",
            "Wide price range",
          ],
          cons: ["High competition for good listings", "Mostly German-language"],
        },
        {
          name: "Flatfox",
          trustScore: 4.1,
          audience: "Students & young professionals",
          pros: [
            "Clean, modern search interface",
            "Verified agency listings",
            "Direct online applications",
          ],
          cons: ["Fewer shared-room listings", "Popular listings fill within hours"],
        },
        {
          name: "Homegate",
          trustScore: 3.8,
          audience: "Long-term renters & locals",
          pros: [
            "Largest overall listing volume in Switzerland",
            "Detailed search filters",
            "Direct landlord/agency contact",
          ],
          cons: [
            "Mostly unfurnished, long-term flats",
            "Requires a full Swiss application dossier",
          ],
        },
        {
          name: "Facebook groups",
          trustScore: 3.2,
          audience: "Incoming & current HSG students",
          pros: [
            "Free to use",
            "Sublet and short-term options from other students",
            "Fast-moving deals",
          ],
          cons: [
            "No listing verification",
            "Higher scam risk",
            "No dispute resolution",
          ],
          groups: [
            {
              name: "Sharing Is Caring – University of St. Gallen (HSG)",
              url: "https://www.facebook.com/groups/sharingiscaringunisg/",
              description:
                "HSG's long-running student marketplace group — mostly books, furniture, and tutoring, but rooms and shared flats are also regularly posted.",
            },
            {
              name: "GeilWohnen.ch – St. Gallen",
              url: "https://www.facebook.com/groups/GeilWohnen.St.Gallen/",
              description:
                "A general, city-wide Swiss housing group (not HSG-specific) where rooms, WGs, and flats in St. Gallen get posted.",
            },
          ],
        },
      ],
      risks: [
        {
          title: "Blocked deposit accounts",
          text: "Most landlords require a Mietkautionskonto — a blocked deposit account holding up to 3 months' rent — which usually requires a Swiss bank account. Start this process as early as possible, ideally before arrival.",
        },
        {
          title: "Mandatory registration (Anmeldung)",
          text: "You must register your address with the local Einwohnamt within 14 days of moving in, and you'll need a signed rental contract to do so — don't delay signing your lease.",
        },
        {
          title: "Fixed lease terms & notice periods",
          text: "Many contracts run for a fixed minimum term with 3-month notice periods, and subletting without the landlord's written permission is a common source of disputes.",
        },
        {
          title: "Furnished vs. unfurnished",
          text: "Private long-term flats are frequently listed unfurnished, sometimes without kitchen appliances or light fixtures, while student rooms and WGs are usually furnished. Confirm exactly what's included before signing.",
        },
      ],
      studentQuotes: [
        {
          quote:
            "I got on the WOKO waiting list the day I got my HSG admission letter — it paid off, but I wouldn't have found a spot otherwise.",
          author: "Lena, Master's student from Austria",
        },
        {
          quote:
            "Opening a Swiss bank account just to pay the deposit took longer than I expected. Start that process the moment you have a signed contract.",
          author: "Marco, exchange student from Italy",
        },
        {
          quote:
            "WG-Zimmer moves fast — I messaged ten listings the same day they went up and only heard back from two.",
          author: "Priya, exchange student from the UK",
        },
      ],
    },
  },
  {
    slug: "copenhagen",
    name: "Copenhagen",
    country: "Denmark",
    rent: "DKK 5,500–8,500",
    risk: "Large upfront payments",
    bestFor: "CBS & CEMS students, cycling, Nordic design and calm",
    dashboard: {
      description:
        "Denmark's bike-friendly, design-forward capital, home to Copenhagen Business School (CBS) and its large CEMS exchange community. Expect flat terrain built for cycling, a compact and walkable city, and one of the tightest — and most expensive — rental markets in Northern Europe.",
      costOfLiving: "DKK 9,000–13,000/month (rent, food, transport, essentials)",
      heroImage: "/cities/copenhagen-hero.jpg",
      quickFacts: {
        population: "~660,000 (metro: 1.3M)",
        averageRent: "DKK 5,500–8,500/mo",
        languages: "Danish, near-universal English",
        transportScore: "9.3/10",
        safetyScore: "9.0/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July through September ahead of CBS's autumn semester, and again in January for spring intake. Housing here is notoriously scarce — many students start searching 4–6 months in advance.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Danish landlords commonly require large upfront payments — a deposit plus several months of prepaid rent — and official student dorms (kollegier) often have waiting lists that need to be joined months or even a year ahead.",
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
          name: "Housing Foundation",
          trustScore: 4.6,
          audience: "International & exchange students at Copenhagen's universities",
          pros: [
            "Nonprofit run in partnership with CBS and other universities",
            "Vetted landlords and standardized contracts",
            "Dedicated support for international students",
          ],
          cons: ["Limited inventory relative to demand", "Waiting lists open months in advance"],
        },
        {
          name: "Boligportal.dk",
          trustScore: 4.0,
          audience: "Long-term renters & locals",
          pros: [
            "Largest rental listing site in Denmark",
            "Detailed search filters",
            "Direct landlord contact",
          ],
          cons: [
            "Mostly Danish-language",
            "No renter protection",
            "High competition for good listings",
          ],
        },
        {
          name: "Akutbolig.dk",
          trustScore: 3.6,
          audience: "Students needing short-term housing or a sublet",
          pros: [
            "Good for bridging a gap while you keep searching",
            "Fast-moving listings",
            "Free to browse",
          ],
          cons: ["Mostly short-term, not built for full-year leases", "Quality varies a lot"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.2,
          audience: "Incoming & current CBS students",
          pros: [
            "Free to use",
            "Large, active local communities",
            "Fast-moving deals",
          ],
          cons: [
            "No listing verification",
            "Higher scam risk",
            "No dispute resolution",
          ],
          groups: [
            {
              name: "Lejeboliger til unge og studerende, gratis og sikkert",
              url: "https://www.facebook.com/groups/351428802097/",
              description:
                "Copenhagen's largest rental group (~50,000 members), aimed at young people and students — posts move fast, so it rewards checking daily over posting.",
            },
            {
              name: "Kollektiver i København",
              url: "https://www.facebook.com/groups/276651505784150/",
              description:
                "A ~30,000-member group focused specifically on shared flats (kollektiver) in Copenhagen, run by Boligsurf.dk.",
            },
          ],
        },
        {
          name: "Findroommate.dk",
          trustScore: 3.7,
          audience: "Students looking for shared flats",
          pros: [
            "Roommate matching",
            "Wide price range",
            "English-friendly platform",
          ],
          cons: ["Smaller inventory", "Popular listings fill within hours"],
        },
      ],
      risks: [
        {
          title: "Large upfront payments",
          text: "Danish landlords commonly require a deposit of up to 3 months' rent plus several months of prepaid rent — meaning several months' rent can be due before you even move in.",
        },
        {
          title: "Kollegium waiting lists",
          text: "Official student dorms (kollegier) via Housing Foundation or similar organizations often require joining a queue many months, sometimes a year, in advance of arrival.",
        },
        {
          title: "CPR number and bank account",
          text: "You'll typically need a Danish CPR (personal registration) number to open a bank account, and many landlords expect rent paid from a Danish account — plan for this gap in the first weeks.",
        },
        {
          title: "Subletting rules (fremleje)",
          text: "Subletting without the primary tenant's registered permission is common in informal listings but not always legal, and can leave you without protection if something goes wrong.",
        },
      ],
      studentQuotes: [
        {
          quote:
            "I joined the Housing Foundation waitlist as soon as I got my CBS offer letter, and I still almost didn't get a spot in time.",
          author: "Maja, exchange student from Germany",
        },
        {
          quote:
            "Getting a CPR number and a Danish bank account before I could pay my deposit was the most stressful part of moving.",
          author: "Diego, CEMS student from Spain",
        },
        {
          quote:
            "Boligportal moves incredibly fast — I messaged the same day a listing went up and it was already gone by evening.",
          author: "Freya, exchange student from the UK",
        },
      ],
    },
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
