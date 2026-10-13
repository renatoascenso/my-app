export type City = {
  slug: string;
  name: string;
  country: string;
  aliases?: string[]; // other spellings people search for, e.g. "Zürich", "Genève"

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
  heroCredit?: { text: string; url: string }; // required by the photo's license (e.g. CC BY-SA)
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
    slug: "zurich",
    name: "Zurich",
    country: "Switzerland",
    aliases: ["Zürich", "Zuerich", "Zurigo", "Zurique"],
    rent: "CHF 900–1,400",
    risk: "Extremely low vacancy",
    bestFor: "ETH & UZH students, career networking, lake and nature",
    dashboard: {
      description:
        "Switzerland's largest city and financial center, home to ETH Zurich and the University of Zurich — together more than 55,000 students. Expect excellent public transport, the lake and forest within minutes, and one of the tightest rental markets in Europe: only about 1 in 1,000 flats in the city stands empty.",
      costOfLiving: "CHF 2,000–2,700/month (rent, food, transport, insurance)",
      heroImage: "/cities/zurich-hero.jpg",
      heroCredit: {
        text: "Thomas Wolf, www.foto-tw.de · CC BY-SA 3.0 DE",
        url: "https://commons.wikimedia.org/wiki/File:Altstadt_Z%C3%BCrich_2015.jpg",
      },
      quickFacts: {
        population: "452,000 (end of 2025; metro area ~1.5M)",
        averageRent: "CHF 900–1,400/mo for a room in a shared flat",
        languages: "German (Swiss German dialect), English widely used at ETH and in business",
        transportScore: "9.5/10",
        safetyScore: "8.7/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July through mid-September and again in January, ahead of ETH and UZH semester starts. Affordable rooms near the main campuses or in Kreis 4, 5 and 6 typically receive dozens of messages within hours of being posted.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "The city's vacancy rate was just 0.10% in June 2025. Landlords pick from many applicants and expect a complete dossier — ID or permit, proof of income or a guarantor, and often a Swiss debt-collection extract (Betreibungsauszug) — which is hard to provide when you're just arriving.",
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
          trustScore: 4.6,
          audience: "Students of ETH, UZH and other Zurich universities",
          pros: [
            "Non-profit student housing foundation",
            "Rooms well below market rent",
            "Furnished options and short-term sublets",
          ],
          cons: ["Very high demand — apply the day you're admitted", "Limited availability at semester start"],
        },
        {
          name: "UZH & ETH Housing Office",
          trustScore: 4.4,
          audience: "Students and researchers of UZH and ETH",
          pros: [
            "Run by the universities themselves",
            "Private rooms offered specifically to students",
            "Advice on contracts and scams",
          ],
          cons: ["You need to register with your admission or contract", "Rooms are limited and not guaranteed"],
        },
        {
          name: "WG-Zimmer.ch",
          trustScore: 4.0,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "Largest shared-flat listing site in German-speaking Switzerland",
            "Direct contact with flatmates",
            "Many short-term and sublet offers",
          ],
          cons: ["Fierce competition in Zurich", "Mostly German-language"],
        },
        {
          name: "Flatfox",
          trustScore: 4.1,
          audience: "Students & young professionals",
          pros: [
            "Clean, modern search interface",
            "Many listings from Zurich property managers",
            "Direct online applications",
          ],
          cons: ["Few furnished rooms", "Popular listings fill within hours"],
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
          trustScore: 3.0,
          audience: "Incoming students and expats",
          pros: [
            "Free to use",
            "Sublets and short-term rooms from other students",
            "Some English-language offers",
          ],
          cons: [
            "No listing verification",
            "Frequent scam posts",
            "No dispute resolution",
          ],
        },
      ],
      risks: [
        {
          title: "Rental scams",
          text: "ETH warns about very cheap listings in great locations where the 'landlord' is abroad and can't show the flat, but asks for a deposit or first rent to send the keys. Never transfer money before you've seen the room (in person or via a live video call) and verified who you're dealing with.",
        },
        {
          title: "Application dossier",
          text: "For regular flats, landlords expect a Betreibungsauszug (debt-collection extract), copies of ID or permit, and proof of income or a guarantor. As a new arrival you often can't provide all of this — student housing, WGs and sublets are much more realistic for your first months.",
        },
        {
          title: "Deposits and blocked accounts",
          text: "Swiss law caps the rental deposit at 3 months' rent, held in a blocked account in the tenant's name (Mietkautionskonto). Paying a deposit in cash or to a private account is a red flag; deposit insurance providers are an alternative if you can't open a Swiss bank account yet.",
        },
        {
          title: "Registration and sublet rules",
          text: "Coming from abroad, you must register at the city's Personenmeldeamt within 14 days of arriving — by appointment only, and with your rental contract, ID and health insurance proof. Many rooms are sublets (Untermiete) — ask for written proof that the main tenant is allowed to sublet, or you risk losing the room at short notice.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "geneva",
    name: "Geneva",
    country: "Switzerland",
    aliases: ["Genève", "Geneve", "Genf", "Ginevra", "Genebra"],
    rent: "CHF 900–1,400",
    risk: "Vacancy rate of just 0.34%",
    bestFor: "UNIGE & Graduate Institute students, international atmosphere, the lake",
    dashboard: {
      description:
        "A compact, international city at the tip of Lake Geneva, home to the University of Geneva (over 18,000 students), the Graduate Institute and dozens of international organizations. Expect trams everywhere, French as the everyday language, and one of the tightest rental markets in Switzerland.",
      costOfLiving: "CHF 2,000–2,700/month (rent, food, transport, insurance)",
      heroImage: "/cities/geneva-hero.jpg",
      heroCredit: {
        text: "Thibaut120094 · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Rade_de_Gen%C3%A8ve_2010-10-02.JPG",
      },
      quickFacts: {
        population: "About 200,000 in the city; 536,000 in the canton (2025)",
        averageRent: "CHF 900–1,400/mo for a room in a shared flat",
        languages: "French, English widely used at the universities and international organizations",
        transportScore: "9.0/10",
        safetyScore: "7.8/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to mid-September and again in January, ahead of the UNIGE semesters. The Ciguë student housing cooperative reports around fifteen applicants for every room it can offer.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Only 858 of the canton's 252,906 apartments stood empty on 1 June 2025 — a vacancy rate of 0.34%. Regular flats go to applicants with a full Swiss dossier, so student residences, the university's housing office and shared flats are the realistic options for newcomers.",
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
          name: "UNIGE Housing Office (BLOG)",
          trustScore: 4.5,
          audience: "Students enrolled at the University of Geneva",
          pros: [
            "Rooms and studios managed by the university",
            "Shared flats and some couple housing",
            "No Swiss guarantor needed",
          ],
          cons: ["Only for eligible UNIGE students", "Limited places at semester start"],
        },
        {
          name: "Cité Universitaire (FULE)",
          trustScore: 4.4,
          audience: "University students aged 18 to 35",
          pros: [
            "About 850 rooms on one campus",
            "Rooms from around CHF 480/month",
            "International community",
          ],
          cons: ["Waiting lists", "Age limit of 35"],
        },
        {
          name: "Ciguë",
          trustScore: 4.3,
          audience: "Students and people in training",
          pros: [
            "Non-profit housing cooperative with about 700 beds",
            "Affordable shared flats",
            "Community-run",
          ],
          cons: ["Around 15 applicants per room", "Few short stays"],
        },
        {
          name: "Flatfox",
          trustScore: 4.1,
          audience: "Students & young professionals",
          pros: [
            "Clean, modern search interface",
            "Shared flats and sublets as well as apartments",
            "Direct online applications",
          ],
          cons: ["Few furnished rooms", "Popular listings fill within hours"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Incoming students, interns and expats",
          pros: [
            "Free to use",
            "Many sublets from interns and students",
            "English-language offers",
          ],
          cons: [
            "No listing verification",
            "Frequent scam posts",
            "No dispute resolution",
          ],
        },
      ],
      risks: [
        {
          title: "Rental scams",
          text: "Geneva's international, short-stay crowd makes it a target for fake listings: cheap furnished flats, a landlord who is 'abroad', and a request for a deposit before any viewing. Never pay before you've seen the room and checked who you're renting from.",
        },
        {
          title: "Dossier requirements",
          text: "For regular flats, agencies expect a debt-collection extract, residence permit and proof of income or a Swiss guarantor. As a new arrival, aim for university housing, cooperatives, shared flats and sublets first.",
        },
        {
          title: "Deposits and blocked accounts",
          text: "Swiss law caps the rental deposit at 3 months' rent, held in a blocked account in the tenant's name. Deposit insurance providers are an alternative if you can't open a Swiss bank account yet. Paying a deposit in cash or to a private account is a red flag.",
        },
        {
          title: "Registration within 14 days",
          text: "Coming from abroad, you must announce your arrival within 14 days and apply for your study permit with the cantonal population office (OCPM). Living across the border in France changes your permit, insurance and transport situation — check before you sign anything there.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "bern",
    name: "Bern",
    country: "Switzerland",
    aliases: ["Berne", "Berna"],
    rent: "CHF 650–1,000",
    risk: "Few vacancies, fast-moving WG market",
    bestFor: "Uni Bern, PH Bern & BFH students, Aare swims, calm city life",
    dashboard: {
      description:
        "Switzerland's federal city: a UNESCO-listed old town wrapped by the Aare river, with the University of Bern (about 18,000 students) right next to the main station. Bern feels relaxed and compact — you can walk or cycle almost everywhere — but rooms near the university still go fast.",
      costOfLiving: "CHF 1,700–2,300/month (rent, food, transport, insurance)",
      heroImage: "/cities/bern-hero.jpg",
      heroCredit: {
        text: "Daniel Kraft · CC BY-SA 3.0",
        url: "https://commons.wikimedia.org/wiki/File:Bern_Altstadt_von_Rosengarten_20211007.jpg",
      },
      quickFacts: {
        population: "146,867 (end of 2025)",
        averageRent: "CHF 650–1,000/mo for a room in a shared flat",
        languages: "German (Bernese Swiss German), English widely used at the university",
        transportScore: "9.0/10",
        safetyScore: "8.8/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July through mid-September and again in January, ahead of the university semesters. WG rooms in Länggasse, Breitenrain and Lorraine are the first to go.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Only 351 flats stood empty in the city on 1 June 2025 — a vacancy rate of 0.44%. Regular flats require a full Swiss application dossier, so student houses, WGs and sublets are the realistic options for newcomers.",
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
          name: "VBSL (Berner Studentenlogierhaus)",
          trustScore: 4.4,
          audience: "Students and young people in training",
          pros: [
            "Non-profit association housing around 780 students",
            "Rooms from about CHF 560/month",
            "No Swiss guarantor needed",
          ],
          cons: ["Waiting lists at semester start", "Limited short stays"],
        },
        {
          name: "WG-Zimmer.ch",
          trustScore: 4.0,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "Largest shared-flat listing site in German-speaking Switzerland",
            "Direct contact with flatmates",
            "Many sublets during semester breaks",
          ],
          cons: ["Competitive near the university", "Mostly German-language"],
        },
        {
          name: "Flatfox",
          trustScore: 4.1,
          audience: "Students & young professionals",
          pros: [
            "Clean, modern search interface",
            "Many listings from Bern property managers",
            "Direct online applications",
          ],
          cons: ["Few furnished rooms", "Popular listings fill within hours"],
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
          trustScore: 3.0,
          audience: "Incoming students and expats",
          pros: [
            "Free to use",
            "Sublets from students on exchange",
            "Some English-language offers",
          ],
          cons: [
            "No listing verification",
            "Frequent scam posts",
            "No dispute resolution",
          ],
        },
      ],
      risks: [
        {
          title: "Rental scams",
          text: "Watch out for cheap furnished flats offered by a 'landlord abroad' who asks for a deposit or first rent before any viewing. Never transfer money before you've seen the room (in person or by live video) and checked who you're dealing with.",
        },
        {
          title: "Application dossier",
          text: "For regular flats, landlords expect a debt-collection extract (Betreibungsauszug), ID or permit and proof of income or a guarantor. Student houses, WGs and sublets are much more realistic in your first months.",
        },
        {
          title: "Deposits and blocked accounts",
          text: "Swiss law caps the rental deposit at 3 months' rent, held in a blocked account in the tenant's name. Deposit insurance providers are an alternative if you can't open a Swiss bank account yet. Paying a deposit in cash or to a private account is a red flag.",
        },
        {
          title: "Registration within 14 days",
          text: "Coming from abroad, you must register with the city's Einwohnerdienste within 14 days and apply for your study permit — bring your rental contract if you have one.",
        },
      ],
      studentQuotes: [],
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

// Lowercase and strip accents so "Zürich", "zurich" and "ZURICH" all match.
function normalize(text: string): string {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
}

function searchableNames(city: City): string[] {
  return [city.name, ...(city.aliases ?? [])].map(normalize);
}

export function findCityByQuery(query: string): City | undefined {
  const normalized = normalize(query);
  if (!normalized) return undefined;
  return cities.find((city) => searchableNames(city).includes(normalized));
}

/** Cities whose name, alias or country contains the query (name matches first). */
export function searchCities(query: string): City[] {
  const normalized = normalize(query);
  if (!normalized) return [];
  const byName = cities.filter((city) => searchableNames(city).some((name) => name.includes(normalized)));
  const byCountry = cities.filter(
    (city) => !byName.includes(city) && normalize(city.country).includes(normalized)
  );
  return [...byName, ...byCountry];
}

export const countryFlags: Record<string, string> = {
  Switzerland: "🇨🇭",
  Portugal: "🇵🇹",
  Denmark: "🇩🇰",
};

/** Countries with their cities, most cities first, then alphabetically. */
export function citiesByCountry(): { country: string; cities: City[] }[] {
  const groups = new Map<string, City[]>();
  for (const city of cities) {
    groups.set(city.country, [...(groups.get(city.country) ?? []), city]);
  }
  return [...groups.entries()]
    .map(([country, list]) => ({ country, cities: list }))
    .sort((a, b) => b.cities.length - a.cities.length || a.country.localeCompare(b.country));
}

export function slugify(text: string): string {
  return normalize(text)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
