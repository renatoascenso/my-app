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
    slug: "porto",
    name: "Porto",
    country: "Portugal",
    aliases: ["Oporto"],
    rent: "€400–€600",
    risk: "Informal contracts and deposit scams",
    bestFor: "U.Porto & Católica students, river life, lower costs than Lisbon",
    dashboard: {
      description:
        "Portugal's second city, stacked on the hills above the Douro river, with a historic center that is a UNESCO World Heritage Site. The University of Porto — the country's largest — has more than 4,600 international students, spread over campuses in the center, at Campo Alegre and at Asprela. Expect steep streets, a lively student scene and rents that are lower than Lisbon's but rising.",
      costOfLiving: "€900–€1,300/month (rent, food, transport, essentials)",
      heroImage: "/cities/porto-hero.jpg",
      heroCredit: {
        text: "Jakub Hałun · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:View_of_Porto_old_town_from_Cais_de_Gaia_with_Porto_Cathedral,_20250605_1614_9873.jpg",
      },
      quickFacts: {
        population: "About 250,000 in the municipality (metro area: 1.7M)",
        averageRent: "€400–€600/mo for a room (median about €440)",
        languages: "Portuguese, English widely spoken by younger people",
        transportScore: "7.8/10",
        safetyScore: "8.0/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July to September and again in January–February, ahead of the U.Porto semesters. Rooms near the Asprela and Campo Alegre campuses and in the center are the first to go.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Short-term tourist rentals compete with students for flats in the center. The median room rent was about €440/month in mid-2025 (Idealista). Many offers are informal — no registered contract and no receipts — which leaves tenants with little protection.",
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
          name: "U.Porto residences (SASUP)",
          trustScore: 4.4,
          audience: "Students of the University of Porto",
          pros: [
            "Run by the university's social services",
            "Lowest prices in the city",
            "No guarantor needed",
          ],
          cons: ["Priority for scholarship students", "Very limited places"],
        },
        {
          name: "Idealista",
          trustScore: 4.0,
          audience: "Students & young professionals",
          pros: [
            "Portugal's largest property portal",
            "Rooms as well as flats",
            "Price data by area",
          ],
          cons: ["Many listings in Portuguese only", "Fake listings appear regularly"],
        },
        {
          name: "Uniplaces",
          trustScore: 3.9,
          audience: "International students booking from abroad",
          pros: [
            "Book online before arriving",
            "Student-focused, English-language",
            "Booking protection on payments",
          ],
          cons: ["Service fees", "Photos may differ from reality — check reviews"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Many rooms from leaving Erasmus students",
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
          title: "Deposit scams",
          text: "A common trick: a cheap, well-photographed room, a landlord who is 'abroad', and a request to pay the deposit by bank transfer before any viewing. Never pay before seeing the room (in person or by live video) and checking the landlord's identity.",
        },
        {
          title: "Legal deposit limits",
          text: "Portuguese law caps the security deposit (caução) at two months' rent, and advance rent at two months as well. Anything above that is not allowed — even if the contract says otherwise.",
        },
        {
          title: "Informal contracts",
          text: "Ask for a written contract registered with the tax office (Finanças) and electronic rent receipts. Without them you have little protection, can't prove your address, and may lose your deposit.",
        },
        {
          title: "Get your NIF early",
          text: "You'll need a Portuguese tax number (NIF) to sign a lease, open a bank account and get a phone contract. Get it as soon as you arrive — or before, through a representative.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "paris",
    name: "Paris",
    country: "France",
    aliases: ["Parigi", "París"],
    rent: "€800–€1,000",
    risk: "Very high rents and illegal overpricing",
    bestFor: "Sorbonne, Sciences Po, PSL & Paris Cité students, culture, career",
    dashboard: {
      description:
        "France's capital and its biggest student city, with about 390,000 students spread over universities and grandes écoles across the 20 arrondissements. Expect world-class culture, an excellent metro, tiny flats and some of the highest rents in Europe — but also strong student support, from CROUS residences to free rent guarantees and housing aid.",
      costOfLiving: "€1,300–€1,800/month (rent, food, transport, essentials)",
      heroImage: "/cities/paris-hero.jpg",
      heroCredit: {
        text: "Jebulon · CC0",
        url: "https://commons.wikimedia.org/wiki/File:Pont_Alexandre_III_depuis_pont_de_la_Concorde_Paris.jpg",
      },
      quickFacts: {
        population: "2.11 million in the city (Île-de-France region: 12M+)",
        averageRent: "€795/mo for a room in a shared flat; €974/mo for a studio",
        languages: "French; English common in universities and business, less so with landlords",
        transportScore: "9.6/10",
        safetyScore: "7.2/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, ahead of the academic year — CROUS applications open in spring through the national student portal. January brings a second, smaller wave for the spring semester.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Average student rents reached €974/month for a studio and €795 for a room in a shared flat in 2025 (Studapart). Landlords usually require a guarantor with French income — the free state guarantee Visale solves this for most students under 30.",
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
          name: "CROUS residences",
          trustScore: 4.5,
          audience: "Students enrolled in French higher education",
          pros: [
            "Public student housing at the lowest prices",
            "Eligible for housing aid (APL)",
            "No guarantor hassle with Visale",
          ],
          cons: ["Priority for scholarship students", "Demand far exceeds supply in Paris"],
        },
        {
          name: "Cité internationale universitaire",
          trustScore: 4.4,
          audience: "International students and researchers (mostly master's and above)",
          pros: [
            "Campus of residence houses in the 14th arrondissement",
            "Very international community",
            "Rooms through partner universities or national houses",
          ],
          cons: ["Admission criteria and limited places", "Often reserved for longer stays"],
        },
        {
          name: "Studapart",
          trustScore: 4.0,
          audience: "Students of partner schools and universities",
          pros: [
            "Student-focused housing platform",
            "Partnered with many French schools",
            "Online booking with guarantee options",
          ],
          cons: ["Service fees", "Prices at market level"],
        },
        {
          name: "Leboncoin & PAP",
          trustScore: 3.5,
          audience: "Students comfortable searching in French",
          pros: [
            "Largest number of private listings",
            "Direct contact with owners (PAP: no agency fees)",
            "Rooms, studios and sublets",
          ],
          cons: ["Fake listings and scams", "Competition is intense"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Sublets from students on exchange",
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
          title: "Rent above the legal cap",
          text: "Paris limits rents per square meter by area (encadrement des loyers), but in 2024–25 about 31% of listings exceeded the cap. Check any offer with the city's rent simulator — and note the current scheme was set to run until 24 November 2026 unless extended.",
        },
        {
          title: "Guarantor requirements",
          text: "Most landlords ask for a guarantor earning three times the rent in France. Visale, the free state guarantee from Action Logement, covers students under 30 — including international students once their visa is valid.",
        },
        {
          title: "Deposits and scams",
          text: "By law the deposit is at most one month's rent (unfurnished) or two months' (furnished). Never pay a deposit or 'reservation fee' before visiting and signing a lease — fake listings on classified sites are common.",
        },
        {
          title: "Paperwork after arrival",
          text: "Non-EU students must validate their long-stay student visa (VLS-TS) online within 3 months of arrival. With a valid lease you can apply for CAF housing aid (APL), which can cover a significant part of the rent.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "lyon",
    name: "Lyon",
    country: "France",
    aliases: ["Lione", "Lyons"],
    rent: "€500–€650",
    risk: "Tight market and rents above the legal cap",
    bestFor: "Lyon 1, 2 & 3, ENS, INSA and emlyon students, food and culture",
    dashboard: {
      description:
        "France's second student hub, with about 190,000 students across the metropolitan area. Lyon combines a UNESCO-listed old town, two rivers and a famous food scene with a manageable size. Universities sit along the Rhône in the 7th and 8th, while the big La Doua campus (Lyon 1, INSA) is just across the border in Villeurbanne.",
      costOfLiving: "€1,000–€1,400/month (rent, food, transport, essentials)",
      heroImage: "/cities/lyon-hero.jpg",
      heroCredit: {
        text: "Tournasol7 · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:View_of_Lyon_(4).jpg",
      },
      quickFacts: {
        population: "521,000 in the city (metropolitan area: 1.4M)",
        averageRent: "€505/mo for a room in a shared flat; €650/mo for a studio",
        languages: "French; English common at universities, less so with landlords",
        transportScore: "8.8/10",
        safetyScore: "7.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, ahead of the academic year — around nine applicants compete for each student listing. CROUS applications open in spring through the national student portal.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Average student rents reached €650/month for a studio and €505 for a room in a shared flat in 2025 (Studapart). Rent control applies in Lyon and Villeurbanne, but 24% of listings still exceeded the cap in 2025.",
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
          name: "CROUS residences",
          trustScore: 4.5,
          audience: "Students enrolled in French higher education",
          pros: [
            "Public student housing at the lowest prices",
            "Eligible for housing aid (APL)",
            "Residences near the main campuses",
          ],
          cons: ["Priority for scholarship students", "Demand exceeds supply"],
        },
        {
          name: "Studapart",
          trustScore: 4.0,
          audience: "Students of partner schools and universities",
          pros: [
            "Student-focused housing platform",
            "Partnered with many Lyon schools",
            "Online booking with guarantee options",
          ],
          cons: ["Service fees", "Prices at market level"],
        },
        {
          name: "Leboncoin & PAP",
          trustScore: 3.5,
          audience: "Students comfortable searching in French",
          pros: [
            "Largest number of private listings",
            "Direct contact with owners (PAP: no agency fees)",
            "Rooms, studios and sublets",
          ],
          cons: ["Fake listings and scams", "Fast-moving market"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Sublets from students on exchange",
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
          title: "Rent above the legal cap",
          text: "Rent control (encadrement des loyers) applies in Lyon and Villeurbanne to unfurnished and furnished main residences. Check any offer with the Métropole de Lyon's online simulator — about a quarter of listings exceed the cap.",
        },
        {
          title: "Guarantor requirements",
          text: "Most landlords ask for a guarantor with French income. Visale, the free state guarantee from Action Logement, covers students under 30 — including international students once their visa is valid.",
        },
        {
          title: "Deposits and scams",
          text: "By law the deposit is at most one month's rent (unfurnished) or two months' (furnished). Never pay a deposit or 'reservation fee' before visiting and signing a lease.",
        },
        {
          title: "Paperwork after arrival",
          text: "Non-EU students must validate their long-stay student visa (VLS-TS) online within 3 months of arrival. With a valid lease you can apply for CAF housing aid (APL).",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "berlin",
    name: "Berlin",
    country: "Germany",
    aliases: ["Berlino", "Berlim"],
    rent: "€550–€750",
    risk: "Scams and sublets without registration",
    bestFor: "HU, FU, TU, UdK & Charité students, nightlife, creative scene",
    dashboard: {
      description:
        "Germany's capital and largest university city, with more than 200,000 students across four universities, the Charité and dozens of other colleges. Berlin is big, international and still cheaper than Munich — but finding a room has become a competitive sport, and student dorms cover only about one student in twenty.",
      costOfLiving: "€1,100–€1,500/month (rent, food, transport, insurance)",
      heroImage: "/cities/berlin-hero.jpg",
      heroCredit: {
        text: "Hans-Jürgen Neubert · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Berlin_East_Side_Oberbaumbr%C3%BCcke.jpg",
      },
      quickFacts: {
        population: "3.91 million (end of 2025)",
        averageRent: "€550–€750/mo for a WG room; dorms average about €340",
        languages: "German; English widely spoken among students and in the start-up scene",
        transportScore: "9.2/10",
        safetyScore: "7.4/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "August to October and again in March–April, ahead of the winter and summer semesters. WG castings with dozens of applicants per room are normal in Friedrichshain, Kreuzberg, Neukölln and Prenzlauer Berg.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Berlin had 206,458 students in winter 2025/26, but the Studierendenwerk's roughly 9,100 dorm places house only about 5% of them, with an average wait of two semesters. Most students end up in WGs, where rooms in Germany's biggest cities averaged around €690 before the 2025 winter semester (WG-Gesucht/MMI).",
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
          name: "Studierendenwerk Berlin",
          trustScore: 4.5,
          audience: "Students enrolled at Berlin universities",
          pros: [
            "Cheapest rooms in the city (about €340 warm on average)",
            "Registration (Anmeldung) always possible",
            "Dorms all over the city",
          ],
          cons: ["Waiting time of about two semesters", "Only ~9,100 places"],
        },
        {
          name: "WG-Gesucht",
          trustScore: 4.1,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "Germany's largest WG platform",
            "Thousands of Berlin rooms and sublets",
            "Direct contact with flatmates",
          ],
          cons: ["Fierce competition and WG castings", "Scam listings slip through"],
        },
        {
          name: "ImmoScout24",
          trustScore: 3.8,
          audience: "Long-term renters",
          pros: [
            "Largest flat listing portal in Germany",
            "Many unfurnished apartments",
            "Detailed filters",
          ],
          cons: ["Requires SCHUFA, income proof and German documents", "Hundreds of applicants per flat"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Incoming and international students",
          pros: [
            "Free to use",
            "Many short-term sublets",
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
          title: "Scams",
          text: "Classic Berlin scams: a beautiful flat at a low price, an owner 'abroad', and a request to pay a deposit through a fake booking service before you get keys. Never pay before a viewing and a signed contract — and never send ID scans to strangers.",
        },
        {
          title: "Registration (Anmeldung)",
          text: "You must register your address at a Bürgeramt within 14 days of moving in, using a confirmation from the landlord (Wohnungsgeberbestätigung). Many short sublets don't allow this — without it you can't get a tax ID, a bank account or a residence permit easily. Ask before you sign.",
        },
        {
          title: "Deposits and rent caps",
          text: "The deposit (Kaution) may be at most three months' net cold rent, and can be paid in three installments. Berlin's rent brake (Mietpreisbremse) limits rents for new contracts, but overpriced furnished and temporary lets are common — ask what's included.",
        },
        {
          title: "Paperwork for regular flats",
          text: "Landlords usually ask for a SCHUFA credit report, proof of income or a guarantor, and ID. As a new arrival, WG rooms, dorms and sublets with registration are far more realistic in your first months.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "munich",
    name: "Munich",
    country: "Germany",
    aliases: ["München", "Muenchen", "Monaco di Baviera", "Munique"],
    rent: "€750–€950",
    risk: "Germany's highest rents and long dorm waiting lists",
    bestFor: "LMU, TUM & Hochschule München students, Alps and lakes, career",
    dashboard: {
      description:
        "Bavaria's capital and one of Europe's top university cities: LMU and TUM alone have more than 100,000 students, plus Hochschule München and many smaller schools. Munich is safe, green and close to the Alps — and the most expensive student city in Germany, with WG rooms around €850.",
      costOfLiving: "€1,300–€1,700/month (rent, food, transport, insurance)",
      heroImage: "/cities/munich-hero.jpg",
      heroCredit: {
        text: "Martin Falbisoner · CC BY-SA 3.0",
        url: "https://commons.wikimedia.org/wiki/File:Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG",
      },
      quickFacts: {
        population: "1.61 million (end of 2025)",
        averageRent: "€850/mo median for a WG room (winter 2025/26)",
        languages: "German (Bavarian accent); English widely used at TUM and LMU",
        transportScore: "9.2/10",
        safetyScore: "9.0/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "August to October and again in March–April, ahead of the winter and summer semesters. At the start of winter semester 2025/26, about 8,700 students were on the Studierendenwerk's waiting list.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "WG rooms in Munich had a median asking rent of €850 in winter 2025/26 — the highest in Germany (WG-Gesucht/MMI). Regular flats are scarce and landlords pick applicants with German income, SCHUFA and guarantors.",
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
          name: "Studierendenwerk München Oberbayern",
          trustScore: 4.5,
          audience: "Students enrolled at Munich universities",
          pros: [
            "About 9,200 places incl. the Studentenstadt and Olympic Village",
            "Far below market rents",
            "Registration (Anmeldung) always possible",
          ],
          cons: ["Thousands on the waiting list", "Apply as soon as you're admitted"],
        },
        {
          name: "WG-Gesucht",
          trustScore: 4.1,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "Germany's largest WG platform",
            "Many sublets during semester breaks",
            "Direct contact with flatmates",
          ],
          cons: ["Very competitive in Munich", "Scam listings slip through"],
        },
        {
          name: "ImmoScout24",
          trustScore: 3.8,
          audience: "Long-term renters",
          pros: [
            "Largest flat listing portal in Germany",
            "Many unfurnished apartments",
            "Detailed filters",
          ],
          cons: ["Requires SCHUFA, income proof and German documents", "Expensive and heavily contested"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Incoming and international students",
          pros: [
            "Free to use",
            "Short-term sublets from exchange students",
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
          title: "Scams",
          text: "High prices make Munich a target for fake listings: a surprisingly cheap flat, an owner 'abroad', and a request to pay through a fake booking or key-delivery service. Never pay before a viewing and a signed contract.",
        },
        {
          title: "Registration (Anmeldung)",
          text: "You must register your address within 14 days of moving in, with a confirmation from the landlord (Wohnungsgeberbestätigung). Make sure sublets allow registration — you'll need it for a tax ID, bank account and residence permit.",
        },
        {
          title: "Deposits and rent caps",
          text: "The deposit (Kaution) may be at most three months' net cold rent and can be paid in three installments. The rent brake (Mietpreisbremse) applies in Munich, but furnished and temporary lets are often far above it.",
        },
        {
          title: "Apply for dorms early",
          text: "Apply to the Studierendenwerk as soon as you have your admission — waiting lists are long at semester start. Until then, temporary sublets and WG rooms in outer districts are the realistic options.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "madrid",
    name: "Madrid",
    country: "Spain",
    aliases: ["Madri", "Madryt"],
    rent: "€500–€700",
    risk: "Rising room prices and fake listings on popular portals",
    bestFor: "Complutense, UPM, UAM, UC3M & IE students, nightlife, sunshine",
    dashboard: {
      description:
        "Spain's capital and its biggest university city: Complutense, the Politécnica (UPM), the Autónoma (UAM), Carlos III (UC3M), Rey Juan Carlos (URJC) and private schools like IE and Comillas. Madrid is lively, sunny and well connected — but a room in a shared flat now averages about €575 a month, and good rooms near the campuses go fast before September.",
      costOfLiving: "€1,000–€1,300/month (rent, food, transport, phone)",
      heroImage: "/cities/madrid-hero.jpg",
      heroCredit: {
        text: "FouPic · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Inicio_de_la_Gran_Via_-_edificio_Metr%C3%B3polis.jpg",
      },
      quickFacts: {
        population: "3.53 million (1 January 2025)",
        averageRent: "€575/mo average for a room in a shared flat (idealista, 2025)",
        languages: "Spanish; English common at IE and in international programs",
        transportScore: "9.4/10",
        safetyScore: "8.2/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, before the academic year starts in September, with a second wave in January when spring-semester exchange students arrive.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Room prices in Madrid rose again in 2025 to an average of €575 a month (idealista). Rooms in Chamberí, Moncloa and Centro go within days, and many landlords prefer tenants who can show income, a guarantor or a Spanish bank account.",
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
          name: "idealista",
          trustScore: 4.1,
          audience: "Students looking for rooms or whole flats",
          pros: [
            "Spain's largest property portal",
            "Separate section for rooms in shared flats",
            "Price history and area statistics",
          ],
          cons: ["Very competitive in central districts", "Fake listings slip through"],
        },
        {
          name: "Badi",
          trustScore: 3.9,
          audience: "Students looking for flatmates",
          pros: [
            "App built for room rentals",
            "Profiles of the flatmates you'd live with",
            "In-app chat before viewing",
          ],
          cons: ["Listing quality varies", "Popular rooms get many requests"],
        },
        {
          name: "Spotahome",
          trustScore: 3.8,
          audience: "Students booking from abroad",
          pros: [
            "Video tours of properties",
            "Book online before you arrive",
            "Mid-term stays of a semester or a year",
          ],
          cons: ["Booking fee on top of rent", "No in-person viewing before you pay"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from exchange students",
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
          title: "Scams",
          text: "Watch for the classic pattern: a central flat far below market price, an owner 'abroad' and a request to pay a deposit by transfer or through a fake booking service before you can see it. Never pay before a viewing (in person or by live video) and a written contract.",
        },
        {
          title: "Deposit (fianza) and agency fees",
          text: "For a flat rented as a home, the legal deposit is one month's rent; landlords may ask for at most two more months as an extra guarantee. Since the 2023 housing law, agency and contract-handling fees must be paid by the landlord, not the tenant.",
        },
        {
          title: "Room contracts",
          text: "Renting a single room in a shared flat often falls outside the housing protections of Spain's tenancy law (LAU). Get a written contract that states the rent, what bills are included, the deposit and the notice period.",
        },
        {
          title: "Empadronamiento and NIE",
          text: "Register your address on the city's Padrón (empadronamiento) — you'll need it for public services and many paperwork steps — and get your NIE or EU registration certificate if you stay longer than three months. Check that the landlord allows registration before you sign.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    country: "Spain",
    aliases: ["Barna", "Barcelone", "Barcellona"],
    rent: "€550–€750",
    risk: "Spain's most expensive rooms and fake listings aimed at newcomers",
    bestFor: "UB, UPC, UPF & ESADE students, beach life, Erasmus",
    dashboard: {
      description:
        "Catalonia's capital and one of Europe's favorite student cities: the Universitat de Barcelona (UB), UPC, UPF and business schools like ESADE, with the beach and the mountains both in reach. It is also Spain's most expensive city for a room — about €600 a month on average — and Catalonia now caps rents in tight markets like Barcelona, including rooms.",
      costOfLiving: "€1,050–€1,400/month (rent, food, transport, phone)",
      heroImage: "/cities/barcelona-hero.jpg",
      heroCredit: {
        text: "zenilorac · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Vista_de_Barcelona.jpg",
      },
      quickFacts: {
        population: "1.73 million (1 January 2025)",
        averageRent: "€600/mo average for a room in a shared flat (idealista, 2025)",
        languages: "Catalan and Spanish; English common in international programs",
        transportScore: "9.4/10",
        safetyScore: "7.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, before the academic year starts in September, and again in January for spring-semester exchange students.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "At about €600 a month, Barcelona has Spain's highest average room price (idealista, 2025). Supply is tight in Gràcia, Eixample and near the campuses, and some landlords have moved flats to coliving or sales since Catalonia's 2025 rules extended rent caps to rooms and seasonal lets.",
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
          name: "idealista",
          trustScore: 4.1,
          audience: "Students looking for rooms or whole flats",
          pros: [
            "Spain's largest property portal",
            "Separate section for rooms in shared flats",
            "Price history and area statistics",
          ],
          cons: ["Very competitive in central districts", "Fake listings slip through"],
        },
        {
          name: "Badi",
          trustScore: 3.9,
          audience: "Students looking for flatmates",
          pros: [
            "Room-rental app founded in Barcelona",
            "Profiles of the flatmates you'd live with",
            "In-app chat before viewing",
          ],
          cons: ["Listing quality varies", "Popular rooms get many requests"],
        },
        {
          name: "Spotahome",
          trustScore: 3.8,
          audience: "Students booking from abroad",
          pros: [
            "Video tours of properties",
            "Book online before you arrive",
            "Mid-term stays of a semester or a year",
          ],
          cons: ["Booking fee on top of rent", "No in-person viewing before you pay"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from exchange students",
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
          title: "Scams",
          text: "Barcelona's tight market is a magnet for fake listings: a central flat at a bargain price, an owner who is 'abroad' and a deposit requested by transfer before any viewing. Never pay before a viewing (in person or by live video) and a written contract.",
        },
        {
          title: "Rent caps",
          text: "Barcelona is a stressed housing market, so rents are capped by the official reference index. Under rules Catalonia adopted in 2025, the cap also covers seasonal lets and rooms — the rents of all rooms in a flat together may not exceed the cap for the whole flat. Ask for the index value if a price looks high.",
        },
        {
          title: "Deposit (fianza) and agency fees",
          text: "For a flat rented as a home, the legal deposit is one month's rent, and the landlord must lodge it with the Catalan housing agency (INCASÒL). Since the 2023 housing law, agency and contract-handling fees must be paid by the landlord, not the tenant.",
        },
        {
          title: "Empadronament and NIE",
          text: "Register your address on the city's Padró — you'll need it for public services and much of your paperwork — and get your NIE or EU registration certificate if you stay longer than three months. Appointments can take weeks, so book early and check that the landlord allows registration.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "milan",
    name: "Milan",
    country: "Italy",
    aliases: ["Milano", "Mailand", "Milão", "Milán"],
    rent: "€650–€800",
    risk: "Italy's priciest rooms and unregistered 'in nero' contracts",
    bestFor: "Politecnico, Bocconi, Statale, Cattolica & Bicocca students, design and fashion, career",
    dashboard: {
      description:
        "Italy's economic capital and its biggest student city: the Politecnico, Bocconi, the Università Statale, the Cattolica, Milano-Bicocca, IULM and many design and fashion schools. Milan is international, well connected and full of opportunities — and the most expensive city in Italy for a single room, at around €700 a month.",
      costOfLiving: "€1,100–€1,500/month (rent, food, transport, phone)",
      heroImage: "/cities/milan-hero.jpg",
      heroCredit: {
        text: "kuhnmi · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Piazza_del_Duomo_-_kuhnmi.jpg",
      },
      quickFacts: {
        population: "1.37 million (end of 2024)",
        averageRent: "€704/mo average for a single room (Immobiliare.it, August 2026)",
        languages: "Italian; English widely used at Bocconi and the Politecnico",
        transportScore: "9.2/10",
        safetyScore: "7.8/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July to September, before the academic year starts, and again in January–February for the second semester and incoming exchange students.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "A single room averaged €704 a month in August 2026 — still Italy's highest, though 4% lower than a year before (Immobiliare.it). The center and Porta Nuova pass €800. Many listings are taken within days, and some landlords push for unregistered cash contracts.",
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
          name: "Immobiliare.it",
          trustScore: 4.1,
          audience: "Students looking for rooms or whole flats",
          pros: [
            "Italy's largest property portal",
            "Room listings with neighborhood price data",
            "Many agency-managed listings",
          ],
          cons: ["Agency fees on many flats", "Fake listings slip through"],
        },
        {
          name: "idealista",
          trustScore: 4.0,
          audience: "Students looking for rooms in shared flats",
          pros: [
            "Large section for rooms (stanze)",
            "Alerts for new listings",
            "Price statistics by area",
          ],
          cons: ["Very competitive in student areas", "Scam listings slip through"],
        },
        {
          name: "University residences",
          trustScore: 4.4,
          audience: "Students enrolled at Milan's universities",
          pros: [
            "Run by or with the universities",
            "Below-market prices for scholarship holders",
            "Always a registered address",
          ],
          cons: ["Few places for the number of students", "Apply as soon as you're admitted"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from exchange students",
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
          title: "Scams",
          text: "The classic pattern: a central room well below market price, an owner who is 'abroad' and a request to pay a deposit by transfer or through a fake booking site before any viewing. Never pay before a viewing (in person or by live video) and a written contract.",
        },
        {
          title: "Registered contracts only",
          text: "Every lease must be registered with the Agenzia delle Entrate. Avoid 'in nero' cash deals: without a registered contract you have no legal protection and can't register your residence. Students studying away from home can use a special transitional contract (contratto per studenti universitari) of 6 to 36 months.",
        },
        {
          title: "Deposit",
          text: "By law the deposit (deposito cauzionale) can be at most three months' rent. Agree in writing on the condition of the room when you move in, and expect agency fees if you rent through an agency.",
        },
        {
          title: "Codice fiscale and residence",
          text: "You need an Italian tax code (codice fiscale) to sign a contract, and should register your residence at the Comune if you stay longer than three months. Non-EU students also need their permit of stay (permesso di soggiorno), which asks for a valid address.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "rome",
    name: "Rome",
    country: "Italy",
    aliases: ["Roma", "Rom", "Roma Capitale"],
    rent: "€550–€700",
    risk: "Rising room prices and unregistered 'in nero' contracts",
    bestFor: "Sapienza, Roma Tre, Tor Vergata & LUISS students, history and culture",
    dashboard: {
      description:
        "Italy's capital is home to Sapienza — one of Europe's largest universities — plus Roma Tre, Tor Vergata, LUISS, the Cattolica's medical school and international colleges like John Cabot. Rome is big and spread out, so where you live decides your commute. A single room costs about €615 a month on average, and prices rose 7% in a year.",
      costOfLiving: "€950–€1,250/month (rent, food, transport, phone)",
      heroImage: "/cities/rome-hero.jpg",
      heroCredit: {
        text: "Wilfredor · CC0",
        url: "https://commons.wikimedia.org/wiki/File:Colosseum_of_Rome_and_Roman_forum.jpg",
      },
      quickFacts: {
        population: "2.75 million (end of 2024)",
        averageRent: "€615/mo average for a single room (Immobiliare.it, August 2026)",
        languages: "Italian; English common at LUISS, John Cabot and in international programs",
        transportScore: "7.6/10",
        safetyScore: "7.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July to September, before the academic year starts, and again in January–February for the second semester and incoming exchange students.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "A single room averaged €615 a month in August 2026, up 7% in a year; the historic center tops €730 (Immobiliare.it). Short-term tourist lets compete for flats in the center, and metro coverage is thin, so rooms near Sapienza and the metro lines go first.",
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
          name: "Immobiliare.it",
          trustScore: 4.1,
          audience: "Students looking for rooms or whole flats",
          pros: [
            "Italy's largest property portal",
            "Room listings with neighborhood price data",
            "Many agency-managed listings",
          ],
          cons: ["Agency fees on many flats", "Fake listings slip through"],
        },
        {
          name: "idealista",
          trustScore: 4.0,
          audience: "Students looking for rooms in shared flats",
          pros: [
            "Large section for rooms (stanze)",
            "Alerts for new listings",
            "Price statistics by area",
          ],
          cons: ["Very competitive near Sapienza", "Scam listings slip through"],
        },
        {
          name: "DiSCo Lazio residences",
          trustScore: 4.3,
          audience: "Students eligible for Lazio's right-to-study support",
          pros: [
            "Very low cost for eligible students",
            "Residences near the main universities",
            "Always a registered address",
          ],
          cons: ["Income-based eligibility", "Few places; strict deadlines"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from exchange students",
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
          title: "Scams",
          text: "The classic pattern: a room near the center well below market price, an owner who is 'abroad' and a request to pay a deposit by transfer or through a fake booking site before any viewing. Never pay before a viewing (in person or by live video) and a written contract.",
        },
        {
          title: "Registered contracts only",
          text: "Every lease must be registered with the Agenzia delle Entrate. Avoid 'in nero' cash deals: without a registered contract you have no legal protection and can't register your residence. Students studying away from home can use a special transitional contract (contratto per studenti universitari) of 6 to 36 months.",
        },
        {
          title: "Deposit",
          text: "By law the deposit (deposito cauzionale) can be at most three months' rent. Agree in writing on the condition of the room when you move in, and expect agency fees if you rent through an agency.",
        },
        {
          title: "Codice fiscale and residence",
          text: "You need an Italian tax code (codice fiscale) to sign a contract, and should register your residence at your municipio's registry office if you stay longer than three months. Non-EU students also need their permit of stay (permesso di soggiorno), which asks for a valid address.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    aliases: ["Amsterdão", "Ámsterdam", "Amsterdam-Weesp"],
    rent: "€850–€1,100",
    risk: "Extreme shortage, overpriced rooms and rental scams",
    bestFor: "UvA, VU & HvA students, cycling city, international atmosphere",
    dashboard: {
      description:
        "The Netherlands' capital is home to the University of Amsterdam (UvA), the Vrije Universiteit (VU) and the Amsterdam University of Applied Sciences (HvA), with thousands of English-taught programs. Amsterdam is compact, international and best explored by bike — but it has the country's tightest housing market, with rooms averaging about €950 a month.",
      costOfLiving: "€1,400–€1,800/month (rent, food, insurance, phone)",
      heroImage: "/cities/amsterdam-hero.jpg",
      heroCredit: {
        text: "Massimo Catarinella · CC BY-SA 3.0",
        url: "https://commons.wikimedia.org/wiki/File:KeizersgrachtReguliersgrachtAmsterdam.jpg",
      },
      quickFacts: {
        population: "935,000 (1 January 2025)",
        averageRent: "€950/mo average for a room (Kamernet, Q2 2026)",
        languages: "Dutch; English spoken almost everywhere",
        transportScore: "9.4/10",
        safetyScore: "8.0/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, before the academic year starts, and again in January for the second semester. Many students start looking months ahead and still arrive without a room.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Rooms averaged €950 a month in Q2 2026 (Kamernet) — and many are priced above the legal maximum under the points system. Student housing has long waiting lists, and dozens of people may respond to a single room.",
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
          name: "ROOM.nl",
          trustScore: 4.4,
          audience: "Students in the Amsterdam region",
          pros: [
            "Rooms from housing corporations like DUWO and De Key",
            "Regulated, fair rents",
            "Registration (BRP) always possible",
          ],
          cons: ["Long waiting times", "Register as early as possible"],
        },
        {
          name: "Kamernet",
          trustScore: 3.9,
          audience: "Students looking for rooms in shared houses",
          pros: [
            "The Netherlands' biggest room platform",
            "Many private rooms and sublets",
            "Alerts for new listings",
          ],
          cons: ["Paid subscription to contact landlords", "Many rooms priced above the legal maximum"],
        },
        {
          name: "Pararius",
          trustScore: 3.8,
          audience: "Students renting a whole flat, often with friends",
          pros: [
            "Large offer of flats from agents",
            "English-language site",
            "Detailed listings",
          ],
          cons: ["Expensive", "Landlords often ask for income of 3–4× the rent"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Amsterdam's shortage makes it the Netherlands' scam capital: a landlord who is 'abroad', keys sent by post or a fake booking platform, and a deposit requested before any viewing. Never pay before you've seen the room (in person or by live video) and signed a contract.",
        },
        {
          title: "Registration (BRP)",
          text: "If you stay longer than four months, you must register your address with the municipality (BRP) to get a citizen service number (BSN) — needed for work, a bank account and health insurance. Avoid rooms where the landlord won't allow registration.",
        },
        {
          title: "Check the legal maximum rent",
          text: "Room rents are capped by the official points system (WWS). Kamernet found that six in ten rooms on its platform are priced too high. Use the Huurcommissie's rent check, and know that the rent tribunal can lower your rent even after you've signed.",
        },
        {
          title: "Deposits, fees and contracts",
          text: "The deposit can be at most two months' basic rent. Agencies working for the landlord may not charge you a fee. Since July 2024 most new leases must be permanent; temporary contracts are only allowed in specific cases, such as student housing.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    country: "Netherlands",
    aliases: ["Roterdão", "Róterdam", "R'dam"],
    rent: "€650–€800",
    risk: "Overpriced rooms and scams, though the city enforces rent rules",
    bestFor: "Erasmus University & Hogeschool Rotterdam students, architecture, nightlife",
    dashboard: {
      description:
        "The Netherlands' second city and Europe's biggest port, home to Erasmus University Rotterdam (EUR), Hogeschool Rotterdam, Erasmus MC and arts schools like the Willem de Kooning Academy — with TU Delft 15 minutes away by train. Rotterdam is modern, diverse and cheaper than Amsterdam: the median room cost €710 a month in early 2026.",
      costOfLiving: "€1,150–€1,500/month (rent, food, insurance, phone)",
      heroImage: "/cities/rotterdam-hero.jpg",
      heroCredit: {
        text: "Kristoffer Trolle · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Erasmus_bridge_and_Rotterdam_skyline_(21458216300).jpg",
      },
      quickFacts: {
        population: "673,000 (1 January 2025)",
        averageRent: "€710/mo median for a room (Kamernet, Q1 2026)",
        languages: "Dutch; English widely spoken, especially at Erasmus",
        transportScore: "9.0/10",
        safetyScore: "7.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, before the academic year starts, and again in January for the second semester and exchange students.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Rooms are cheaper than in Amsterdam but scarce near Woudestein and in Kralingen and Noord. Many are still priced above the legal maximum — but unlike most Dutch cities, Rotterdam actively enforces the rules and has acted against landlords hundreds of times.",
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
          name: "Student housing (Stadswonen, SSH)",
          trustScore: 4.4,
          audience: "Students enrolled in Rotterdam",
          pros: [
            "Rooms and studios at regulated rents",
            "Short-stay options for international students",
            "Registration (BRP) always possible",
          ],
          cons: ["Waiting times for regular rooms", "Apply as early as possible"],
        },
        {
          name: "Kamernet",
          trustScore: 3.9,
          audience: "Students looking for rooms in shared houses",
          pros: [
            "The Netherlands' biggest room platform",
            "Many private rooms and sublets",
            "Alerts for new listings",
          ],
          cons: ["Paid subscription to contact landlords", "Many rooms priced above the legal maximum"],
        },
        {
          name: "Pararius",
          trustScore: 3.8,
          audience: "Students renting a whole flat, often with friends",
          pros: [
            "Large offer of flats from agents",
            "English-language site",
            "Detailed listings",
          ],
          cons: ["Expensive", "Landlords often ask for income of 3–4× the rent"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Watch for landlords who are 'abroad', keys sent by post or through a fake booking platform, and deposits requested before any viewing. Never pay before you've seen the room (in person or by live video) and signed a contract.",
        },
        {
          title: "Registration (BRP)",
          text: "If you stay longer than four months, you must register your address with the municipality (BRP) to get a citizen service number (BSN) — needed for work, a bank account and health insurance. Avoid rooms where the landlord won't allow registration.",
        },
        {
          title: "Check the legal maximum rent",
          text: "Room rents are capped by the official points system (WWS). Use the Huurcommissie's rent check: the rent tribunal can lower your rent even after you've signed, and the City of Rotterdam also acts against landlords who overcharge.",
        },
        {
          title: "Deposits, fees and contracts",
          text: "The deposit can be at most two months' basic rent. Agencies working for the landlord may not charge you a fee. Since July 2024 most new leases must be permanent; temporary contracts are only allowed in specific cases, such as student housing.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "london",
    name: "London",
    country: "United Kingdom",
    aliases: ["Londres", "Londra", "Londen", "Londyn"],
    rent: "£800–£1,100",
    risk: "Very high rents, guarantor demands and flatshare scams",
    bestFor: "UCL, Imperial, KCL, LSE & Queen Mary students, career, culture",
    dashboard: {
      description:
        "One of the world's great university cities: UCL, Imperial, King's College, LSE, Queen Mary, City St George's, Goldsmiths and dozens more. London is huge, diverse and full of opportunity — and expensive: a room in inner London now averages over £1,000 a month, so most students trade rent against commute time.",
      costOfLiving: "£1,400–£1,900/month (rent, food, transport, phone)",
      heroImage: "/cities/london-hero.jpg",
      heroCredit: {
        text: "Julian Herzog · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Palace_of_Westminster_London_2023_01.jpg",
      },
      quickFacts: {
        population: "9.12 million (mid-2025)",
        averageRent: "£1,002/mo for a room in inner London, £800 in outer London (SpareRoom, Q3 2026)",
        languages: "English",
        transportScore: "9.4/10",
        safetyScore: "7.4/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July to September, when new students and graduates arrive at the same time; competition eases a little from November to January.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Rooms averaged £1,002 a month in inner London and £800 in outer London in Q3 2026; SW7 near Imperial was the priciest postcode at £1,682 (SpareRoom). Good rooms go within days, and many landlords ask for a UK-based guarantor that international students don't have.",
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
          name: "University halls & student residences",
          trustScore: 4.4,
          audience: "First-year and international students",
          pros: [
            "Bills usually included",
            "No guarantor hassle in many halls",
            "Easy way to meet people",
          ],
          cons: ["Expensive en-suite rooms in private halls", "Limited places; apply early"],
        },
        {
          name: "SpareRoom",
          trustScore: 4.1,
          audience: "Students looking for rooms in flatshares",
          pros: [
            "The UK's biggest flatshare site",
            "Flatmate profiles and video viewings",
            "Alerts for new rooms",
          ],
          cons: ["Paid boost to contact some listings early", "Scam listings slip through"],
        },
        {
          name: "Rightmove",
          trustScore: 3.9,
          audience: "Groups renting a whole flat together",
          pros: [
            "The UK's largest property portal",
            "Most letting agents list here",
            "Detailed search filters",
          ],
          cons: ["Agents often require references and a guarantor", "Very fast-moving market"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
            "Direct contact with flatmates",
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
          title: "Scams",
          text: "Watch for 'landlords' who are abroad, refuse viewings and ask for a deposit by bank transfer to hold the room. Never pay before you've seen the room (in person or by live video) and checked that the landlord or agent is real.",
        },
        {
          title: "Deposits",
          text: "Your deposit can be at most five weeks' rent (where annual rent is under £50,000), and a holding deposit at most one week's rent. The landlord must protect your deposit in a government-approved scheme within 30 days and tell you which one.",
        },
        {
          title: "Renters' Rights Act",
          text: "Since 1 May 2026, most private tenancies in England run month to month with no fixed end date, no-fault evictions are abolished, and landlords may not accept bids above the advertised rent or more than one month's rent in advance. Student houses (HMOs) have a special possession ground for the end of the academic year.",
        },
        {
          title: "Right to Rent and council tax",
          text: "Landlords must check your right to rent before you move in — international students usually prove it with a share code. Full-time students are exempt from council tax: ask your university for a certificate and send it to your borough.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "stockholm",
    name: "Stockholm",
    country: "Sweden",
    aliases: ["Estocolmo", "Stoccolma", "Sztokholm"],
    rent: "SEK 5,000–9,000",
    risk: "Years-long housing queues, illegal sublets and rental scams",
    bestFor: "KTH, Stockholm University, KI & SSE students, nature, innovation",
    dashboard: {
      description:
        "Sweden's capital spreads across 14 islands and is home to KTH, Stockholm University, Karolinska Institutet, the Stockholm School of Economics and Konstfack. Life is green, safe and English-friendly — but first-hand contracts take years in the queue, so most students start in a student corridor or a sublet (andrahand), where a one-room flat averaged about 9,500 kr a month in 2025.",
      costOfLiving: "SEK 11,000–15,000/month (rent, food, transport, phone)",
      heroImage: "/cities/stockholm-hero.jpg",
      heroCredit: {
        text: "Julian Herzog · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Riddarholmen_Stockholm_2016_01.jpg",
      },
      quickFacts: {
        population: "999,200 (end of 2025)",
        averageRent: "SEK 9,540/mo average for a sublet one-room flat (Qasa, 2025)",
        languages: "Swedish; English spoken almost everywhere",
        transportScore: "9.2/10",
        safetyScore: "8.0/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to August, before the autumn semester starts in late August, and again in December–January for the spring semester.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "A sublet one-room flat averaged SEK 9,540 a month in Stockholm municipality and SEK 14,000 in the inner city in 2025 (Qasa), and the number of advertised sublets fell 18% in early 2026. First-hand rental contracts take many years in the city's housing queue, and even SSSB corridor rooms usually need about a year of queue time.",
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
          name: "SSSB",
          trustScore: 4.5,
          audience: "Students at Stockholm's universities",
          pros: [
            "Stockholm's largest student housing provider",
            "Corridor rooms from about SEK 3,800–5,200",
            "First-hand contracts at fair rents",
          ],
          cons: ["Queue time — join the queue as early as possible", "Membership in a student union needed to keep earning queue days"],
        },
        {
          name: "Qasa",
          trustScore: 4.0,
          audience: "Students looking for sublets (andrahand)",
          pros: [
            "Sweden's largest marketplace for rental homes",
            "Verified users and digital contracts",
            "Rent paid through the platform",
          ],
          cons: ["Service fee on top of rent", "Heavy competition for each listing"],
        },
        {
          name: "Bostadsförmedlingen",
          trustScore: 4.2,
          audience: "Anyone planning to stay in Stockholm long term",
          pros: [
            "The city's official housing queue",
            "First-hand contracts at regulated rents",
            "Includes some youth and student flats",
          ],
          cons: ["Queue times of many years for central flats", "Annual queue fee"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Stockholm's shortage attracts fake sublets: a central flat at a low price, an owner who is 'abroad' and a deposit requested before any viewing. Never pay before you've seen the home (in person or by live video), met the person and signed a contract.",
        },
        {
          title: "Illegal sublets",
          text: "To sublet a rental flat (hyresrätt), the tenant needs the landlord's approval; to rent out a cooperative flat (bostadsrätt), the owner needs the housing association's approval. Ask for proof — without it, you can be forced to move out at short notice.",
        },
        {
          title: "Check the rent",
          text: "Sublet rents must be reasonable: for a rental flat, roughly the first-hand rent plus a surcharge if it's furnished. If you've paid too much, you can apply to the Rent Tribunal (Hyresnämnden) to get money back, even after moving out — within the legal time limit.",
        },
        {
          title: "Personnummer and registration",
          text: "If you'll stay a year or more, register with the Swedish Tax Agency (Skatteverket) to get a personnummer — needed for BankID, a bank account and many services. Shorter stays usually only get a coordination number, which makes daily life harder, so plan ahead.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "vienna",
    name: "Vienna",
    country: "Austria",
    aliases: ["Wien", "Viena", "Vienne", "Wiedeń", "Bécs"],
    rent: "€500–€700",
    risk: "Rising private rents, dorm waiting lists and rental scams",
    bestFor: "University of Vienna, TU Wien, WU, MedUni & BOKU students, culture, quality of life",
    dashboard: {
      description:
        "Austria's capital is Central Europe's biggest student city: the University of Vienna, TU Wien, WU, the Medical University, BOKU, the University of Applied Arts and several universities of applied sciences. Vienna regularly tops quality-of-life rankings and has a large regulated rental sector — but private rooms for students are getting pricier, at around €620 a month for a room in a shared flat.",
      costOfLiving: "€1,000–€1,350/month (rent, food, transport, phone)",
      heroImage: "/cities/vienna-hero.jpg",
      heroCredit: {
        text: "Guido Radig · CC BY-SA 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Karlskirche_in_Wien_mit_Teich.JPG",
      },
      quickFacts: {
        population: "2.04 million (1 January 2026)",
        averageRent: "€620/mo for a private room in a shared flat (HousingAnywhere, 2026)",
        languages: "German (Viennese accent); English common at universities",
        transportScore: "9.6/10",
        safetyScore: "8.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "August to early October, before the winter semester starts on 1 October, and again in January–February for the summer semester starting in March.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Vienna's large municipal and cooperative housing stock keeps many rents low, but most of it is hard for newcomers to access. Students rely on dorms with waiting lists or the private WG market, where a room costs around €620 a month in 2026 (HousingAnywhere).",
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
          name: "Student dorms (Studentenheime)",
          trustScore: 4.5,
          audience: "Students enrolled at Vienna's universities",
          pros: [
            "Many non-profit operators across the city",
            "Furnished rooms with bills included",
            "Registration (Meldezettel) always possible",
          ],
          cons: ["Waiting lists before the winter semester", "Apply months ahead"],
        },
        {
          name: "WG-Gesucht",
          trustScore: 4.1,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "The main platform for WG rooms in Vienna",
            "Direct contact with flatmates",
            "Many short-term sublets",
          ],
          cons: ["Competitive in popular districts", "Scam listings slip through"],
        },
        {
          name: "willhaben",
          trustScore: 3.9,
          audience: "Students renting a whole flat",
          pros: [
            "Austria's largest classifieds site",
            "Many flats from private landlords and agents",
            "Detailed filters by district",
          ],
          cons: ["Mostly unfurnished flats", "Fake listings slip through"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Watch for a cheap central flat, an owner who is 'abroad' and a deposit requested by transfer or through a fake booking service before any viewing. Never pay before you've seen the room (in person or by live video) and signed a contract.",
        },
        {
          title: "Registration (Meldezettel)",
          text: "You must register your address within three days of moving in. EU citizens staying longer than three months also need a registration certificate (Anmeldebescheinigung) within four months. Make sure your landlord allows registration.",
        },
        {
          title: "Rent rules",
          text: "In many older buildings, rents are capped under the Tenancy Act (Mietrechtsgesetz), and fixed-term leases must be discounted. Fixed-term contracts must normally run at least three years, but tenants may give notice after one year. The city's arbitration board (Schlichtungsstelle) can check whether your rent is legal.",
        },
        {
          title: "Deposits and agency fees",
          text: "Deposits (Kaution) of up to three months' rent are common; get a written receipt. Since July 2023, whoever hires the estate agent pays them, so tenants usually no longer pay agency fees.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "prague",
    name: "Prague",
    country: "Czech Republic",
    aliases: ["Praha", "Prag", "Praga"],
    rent: "CZK 9,000–13,000",
    risk: "Fast-rising rents, extra service charges and rental scams",
    bestFor: "Charles University, CTU, VŠE & CZU students, history, nightlife",
    dashboard: {
      description:
        "The Czech capital is home to Charles University — founded in 1348 — the Czech Technical University (CTU), the Prague University of Economics and Business (VŠE), the Czech University of Life Sciences and several private international schools. Prague is beautiful, central and still cheaper than most Western capitals, but rents have climbed fast: a room in a shared flat now costs around CZK 10,000–11,000 a month.",
      costOfLiving: "CZK 18,000–24,000/month (rent, food, transport, phone)",
      heroImage: "/cities/prague-hero.jpg",
      heroCredit: {
        text: "Moyan Brenn · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Prague_(6365119737).jpg",
      },
      quickFacts: {
        population: "1.41 million (end of 2025)",
        averageRent: "CZK 10,000–11,000/mo for a room in a shared flat (2025)",
        languages: "Czech; English common among young people and at universities",
        transportScore: "9.4/10",
        safetyScore: "8.4/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "July to September, before the winter semester starts in late September or early October, and again in January–February for the summer semester.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Rooms in shared flats cost around CZK 10,000–11,000 a month in 2025, and fewer flats are on offer than in previous years. Dorm places are limited — Charles University and CTU dorms range from about CZK 2,800 to 8,400 a month — so apply as soon as you're admitted.",
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
          name: "University dorms (koleje)",
          trustScore: 4.5,
          audience: "Students at Prague's public universities",
          pros: [
            "Far below market rents",
            "Run by the universities",
            "Address registration handled for you",
          ],
          cons: ["Limited places; apply early", "Shared rooms are common"],
        },
        {
          name: "Sreality.cz",
          trustScore: 4.0,
          audience: "Students renting a flat or room",
          pros: [
            "The Czech Republic's largest property portal",
            "Huge choice of flats across Prague",
            "Detailed filters by district",
          ],
          cons: ["Many agency listings with commission", "Mostly in Czech"],
        },
        {
          name: "Bezrealitky",
          trustScore: 4.0,
          audience: "Students who want to rent directly from owners",
          pros: [
            "Listings directly from owners",
            "No agency commission",
            "Rooms and flatshares included",
          ],
          cons: ["Popular listings go fast", "Check contracts carefully"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Watch for a cheap central flat, an owner who is 'abroad' and a deposit requested by transfer or through a fake booking service before any viewing. Never pay before you've seen the room (in person or by live video) and signed a contract.",
        },
        {
          title: "Rent plus service charges",
          text: "Prices are often listed as rent plus 'poplatky' — service charges and energy paid on top. Ask for the total monthly cost, and note that charges are settled once a year, which can mean an extra bill.",
        },
        {
          title: "Deposits and agency fees",
          text: "The deposit (jistota) can be at most three months' rent and must be returned when you move out, minus any justified claims. Agencies often charge a commission of about one month's rent — ask before you view.",
        },
        {
          title: "Registering with the foreign police",
          text: "Foreigners must report their address in the Czech Republic — EU citizens within 30 days if staying longer, non-EU citizens within three working days. Dorms and hotels often do this for you; in a private flat, check who will.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "frankfurt",
    name: "Frankfurt",
    country: "Germany",
    aliases: ["Frankfurt am Main", "Francfort", "Francoforte", "Fráncfort"],
    rent: "€600–€750",
    risk: "High WG prices, scarce dorm places and rental scams",
    bestFor: "Goethe University, Frankfurt UAS & Frankfurt School students, finance, career",
    dashboard: {
      description:
        "Germany's financial capital is home to Goethe University with its Westend, Bockenheim, Riedberg and Niederrad campuses, the Frankfurt University of Applied Sciences, the Frankfurt School of Finance & Management, the Städelschule and the HfMDK. Frankfurt is compact, international and well connected — and one of Germany's pricier student cities, with WG rooms at a median of €630 a month.",
      costOfLiving: "€1,150–€1,500/month (rent, food, transport, insurance)",
      heroImage: "/cities/frankfurt-hero.jpg",
      heroCredit: {
        text: "Norbert Nagel · CC BY-SA 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Frankfurt_Skyline_with_river_Main_2014.jpg",
      },
      quickFacts: {
        population: "782,000 (end of 2024, city register)",
        averageRent: "€630/mo median for a WG room (winter 2026/27)",
        languages: "German; English widely used in business and at Goethe University",
        transportScore: "9.2/10",
        safetyScore: "7.8/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "August to October and again in March–April, ahead of the winter and summer semesters.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "WG rooms in Frankfurt had a median asking rent of €630 in winter 2026/27, well above the national average of about €510 (WG-Gesucht/MMI). Rooms near the Westend campus, in Bockenheim and the Nordend go fast, and landlords often prefer tenants with German income or guarantors.",
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
          name: "Studierendenwerk Frankfurt am Main",
          trustScore: 4.5,
          audience: "Students enrolled at Frankfurt's universities",
          pros: [
            "Dorms across the city, many near the campuses",
            "Far below market rents",
            "Registration (Anmeldung) always possible",
          ],
          cons: ["Waiting lists at semester start", "Apply as soon as you're admitted"],
        },
        {
          name: "WG-Gesucht",
          trustScore: 4.1,
          audience: "Students looking for shared flats (WGs)",
          pros: [
            "Germany's largest WG platform",
            "Many sublets during semester breaks",
            "Direct contact with flatmates",
          ],
          cons: ["Competitive in popular areas", "Scam listings slip through"],
        },
        {
          name: "ImmoScout24",
          trustScore: 3.8,
          audience: "Long-term renters",
          pros: [
            "Largest flat listing portal in Germany",
            "Many unfurnished apartments",
            "Detailed filters",
          ],
          cons: ["Requires SCHUFA, income proof and German documents", "Expensive and heavily contested"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Incoming and international students",
          pros: [
            "Free to use",
            "Short-term sublets from exchange students",
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
          title: "Scams",
          text: "Frankfurt's high prices attract fake listings: a cheap flat near the center, an owner 'abroad', and a request to pay through a fake booking or key-delivery service. Never pay before a viewing and a signed contract.",
        },
        {
          title: "Registration (Anmeldung)",
          text: "You must register your address within 14 days of moving in, with a confirmation from the landlord (Wohnungsgeberbestätigung). Make sure sublets allow registration — you'll need it for a tax ID, bank account and residence permit.",
        },
        {
          title: "Deposits and rent caps",
          text: "The deposit (Kaution) may be at most three months' net cold rent and can be paid in three installments. The rent brake (Mietpreisbremse) applies in Frankfurt, but furnished and temporary lets are often far above it.",
        },
        {
          title: "Apply for dorms early",
          text: "Apply to the Studierendenwerk as soon as you have your admission — places near the campuses fill up before the winter semester. Until then, temporary sublets and WG rooms in outer districts are the realistic options.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "brussels",
    name: "Brussels",
    country: "Belgium",
    aliases: ["Bruxelles", "Brussel", "Bruselas", "Bruxelas", "Bruksela"],
    rent: "€600–€800",
    risk: "Belgium's priciest student rooms and rental scams",
    bestFor: "ULB, VUB, UCLouvain Saint-Louis & KU Leuven Brussels students, EU careers",
    dashboard: {
      description:
        "Belgium's bilingual capital and the heart of the EU is home to the French-speaking ULB, the Dutch-speaking VUB, UCLouvain Saint-Louis, KU Leuven's Brussels campuses and many university colleges. Brussels is international, central and well connected — but it's by far Belgium's most expensive student city, with a student room ('kot') averaging €600–€695 a month.",
      costOfLiving: "€1,050–€1,400/month (rent, food, transport, phone)",
      heroImage: "/cities/brussels-hero.jpg",
      heroCredit: {
        text: "Edison McCullen · CC BY-SA 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Grand-Place_de_Bruxelles_en_heure_bleue.jpg",
      },
      quickFacts: {
        population: "1.26 million in the Brussels-Capital Region (1 January 2026)",
        averageRent: "€600–€695/mo for a student room, utilities included (Kotkompas, 2025)",
        languages: "French and Dutch; English widely spoken",
        transportScore: "8.8/10",
        safetyScore: "7.4/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "May to September, before the academic year starts in mid-September, and again in January–February for the second semester and Erasmus students.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "A student room costs €600 a month with shared facilities and €695 with a private bathroom; studios average €795, utilities included (Kotkompas 2025). Supply is short, many international students and interns compete for the same rooms, and Brussels doubled its tax on furnished rentals.",
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
          name: "University housing services",
          trustScore: 4.5,
          audience: "ULB, VUB and other Brussels students",
          pros: [
            "University residences near the campuses",
            "Lists of vetted private rooms",
            "Help with student lease questions",
          ],
          cons: ["Limited places", "Apply early in spring"],
        },
        {
          name: "Immoweb",
          trustScore: 4.0,
          audience: "Students renting a room or a flat",
          pros: [
            "Belgium's largest property portal",
            "Rooms, studios and flatshares",
            "Filters by municipality",
          ],
          cons: ["Very competitive", "Fake listings slip through"],
        },
        {
          name: "Spotahome",
          trustScore: 3.8,
          audience: "International students booking from abroad",
          pros: [
            "Video tours of properties",
            "Book online before you arrive",
            "Mid-term stays of a semester or a year",
          ],
          cons: ["Booking fee on top of rent", "No in-person viewing before you pay"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Watch for a cheap central room, an owner who is 'abroad' and a deposit requested by transfer or through a fake booking site before any viewing. Never pay before you've seen the room (in person or by live video) and signed a contract.",
        },
        {
          title: "Student leases",
          text: "Brussels has a dedicated student lease (bail étudiant / studentenhuurovereenkomst) with rules adapted to the academic year. Make sure your contract is written, states the rent and charges, and is registered by the landlord.",
        },
        {
          title: "Rental deposit",
          text: "The rental guarantee can be at most two months' rent when placed in a blocked bank account in your name — never pay it in cash to the landlord. Do a written check-in inventory (état des lieux) to get it back.",
        },
        {
          title: "Register at your municipality",
          text: "Register at your commune within eight working days of moving in; a local police officer usually visits to confirm your address. You'll need this for your residence card if you stay more than three months.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "dublin",
    name: "Dublin",
    country: "Ireland",
    aliases: ["Baile Átha Cliath", "Dublín", "Dublino"],
    rent: "€800–€1,100",
    risk: "Severe shortage, very high rents and frequent rental scams",
    bestFor: "Trinity, UCD, DCU & TU Dublin students, tech careers, English-speaking",
    dashboard: {
      description:
        "Ireland's capital is home to Trinity College Dublin, University College Dublin (UCD), Dublin City University (DCU), TU Dublin, the RCSI and several private colleges — and to Europe's headquarters of many tech companies. Dublin is friendly, English-speaking and lively, but it has one of Europe's tightest rental markets: a room in a shared house costs roughly €770 a month on average, and well over €1,000 in popular areas.",
      costOfLiving: "€1,300–€1,750/month (rent, food, transport, phone)",
      heroImage: "/cities/dublin-hero.jpg",
      heroCredit: {
        text: "Sean MacEntee · CC BY 2.0",
        url: "https://commons.wikimedia.org/wiki/File:Sunshine_on_the_Ha%27penny_Bridge,_Dublin_(14350608541).jpg",
      },
      quickFacts: {
        population: "1.46 million in County Dublin (Census 2022)",
        averageRent: "€769/mo estimated average for a room in a shared house (RTB-based, 2026)",
        languages: "English; Irish on signs and official documents",
        transportScore: "7.6/10",
        safetyScore: "7.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "June to September, before the academic year starts in September; January brings a smaller wave of exchange students.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Rooms in shared houses average around €770 a month (2026 estimate based on Residential Tenancies Board data), but rooms near Trinity, in Rathmines or close to UCD regularly exceed €1,000. Supply is very limited, viewings attract dozens of people, and many students turn to digs — renting a room in a family home.",
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
          name: "On-campus & student residences",
          trustScore: 4.4,
          audience: "First-year and international students",
          pros: [
            "Rooms run by the universities or purpose-built providers",
            "Close to campus, bills often included",
            "Safe, managed buildings",
          ],
          cons: ["Expensive — often €1,000+ a month", "Limited places; apply early"],
        },
        {
          name: "Daft.ie",
          trustScore: 4.0,
          audience: "Students looking for rooms or houses",
          pros: [
            "Ireland's largest property site",
            "Separate section for shared rooms",
            "Alerts for new listings",
          ],
          cons: ["Extremely competitive", "Scam listings slip through"],
        },
        {
          name: "Digs (Rent-a-Room)",
          trustScore: 4.0,
          audience: "Students happy to live with a host family",
          pros: [
            "Often cheaper than a shared house",
            "Bills and sometimes meals included",
            "Many colleges run digs schemes",
          ],
          cons: ["House rules and less independence", "Fewer legal protections than a tenancy"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "International and exchange students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
            "Direct contact with flatmates",
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
          title: "Scams",
          text: "Dublin's shortage makes it a scam hotspot: a landlord who is 'abroad', keys sent by post, and a deposit requested by transfer before any viewing. Never pay before you've seen the room in person or by live video and checked who you're dealing with.",
        },
        {
          title: "Deposits and advance rent",
          text: "For a standard tenancy, the deposit can be at most one month's rent and rent in advance at most one month, so nobody can ask for more than two months' rent to secure a room. Student-specific accommodation can accept more rent in advance if you choose.",
        },
        {
          title: "Tenancy or licence?",
          text: "Renting a room in the owner's own home (digs / Rent-a-Room) is a licence, not a tenancy, so the Residential Tenancies Board can't resolve disputes. In a regular tenancy, ask your landlord to register it with the RTB and keep written records of all payments.",
        },
        {
          title: "Rent controls",
          text: "Rent controls now apply nationwide, and a new rent-control system covers tenancies created from 1 March 2026. If you think a rent increase or a new rent breaks the rules, you can check with the RTB.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "warsaw",
    name: "Warsaw",
    country: "Poland",
    aliases: ["Warszawa", "Varsovia", "Varsóvia", "Varsovie", "Warschau"],
    rent: "PLN 1,200–1,800",
    risk: "Extra fees on top of rent, strict lease types and rental scams",
    bestFor: "University of Warsaw, Warsaw University of Technology, SGH & Kozminski students, value, career",
    dashboard: {
      description:
        "Poland's capital is its biggest student city: the University of Warsaw, the Warsaw University of Technology, SGH Warsaw School of Economics, the Medical University, SGGW, Kozminski University, SWPS and many more. Warsaw is dynamic, safe and far cheaper than Western capitals — a room averages around PLN 1,300 a month — though prices in the center are much higher.",
      costOfLiving: "PLN 3,200–4,500/month (rent, food, transport, phone)",
      heroImage: "/cities/warsaw-hero.jpg",
      heroCredit: {
        text: "Quintin Soloviev · CC BY 4.0",
        url: "https://commons.wikimedia.org/wiki/File:Skyline_of_Warsaw,_Poland_(cropped).jpg",
      },
      quickFacts: {
        population: "1.87 million (end of 2025)",
        averageRent: "PLN 1,300/mo average for a room (Otodom, July 2026)",
        languages: "Polish; English common among students and young people",
        transportScore: "9.0/10",
        safetyScore: "8.6/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "August and September, before the academic year starts on 1 October, and again in February for the summer semester.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "A room averaged about PLN 1,300 a month in July 2026 (Otodom), but central rooms often cost PLN 1,800 or more. Many listings show the rent without the administrative fee (czynsz) and utilities, and some landlords only offer an 'occasional lease' that is hard for international students to sign.",
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
          name: "University dorms (akademiki)",
          trustScore: 4.4,
          audience: "Students at Warsaw's public universities",
          pros: [
            "Far below market rents",
            "Run by the universities",
            "Registration handled for you",
          ],
          cons: ["Often shared rooms", "Limited places for international students"],
        },
        {
          name: "Otodom",
          trustScore: 4.0,
          audience: "Students renting a room or flat",
          pros: [
            "Poland's largest property portal",
            "Rooms and flats across all districts",
            "Detailed filters",
          ],
          cons: ["Many agency listings with commission", "Mostly in Polish"],
        },
        {
          name: "OLX",
          trustScore: 3.6,
          audience: "Students looking for cheaper rooms",
          pros: [
            "Huge number of private room offers",
            "Direct contact with owners",
            "Fast-moving market",
          ],
          cons: ["Little verification", "Scam listings slip through"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Watch for a cheap central flat, an owner who is 'abroad' and a deposit requested by transfer before any viewing. Never pay before you've seen the room (in person or by live video) and signed a written contract.",
        },
        {
          title: "The total monthly cost",
          text: "Listings often quote rent plus the building's administrative fee (czynsz administracyjny) and utilities (media) separately. Ask for the full monthly total in writing before you agree.",
        },
        {
          title: "Occasional leases and deposits",
          text: "Some landlords use an 'occasional lease' (najem okazjonalny), which requires a notarial statement and the address of somewhere you could move to if evicted — often impossible for newcomers. Deposits are legally capped (at 6 months' rent for occasional leases), but 1–2 months is usual; get a written receipt.",
        },
        {
          title: "Registering your stay",
          text: "Foreigners staying longer than 30 days must register their address (zameldowanie) at the city office, using the lease and the landlord's consent. EU citizens staying longer than three months must also register their residence with the Mazovian Voivodeship Office.",
        },
      ],
      studentQuotes: [],
    },
  },
  {
    slug: "budapest",
    name: "Budapest",
    country: "Hungary",
    aliases: ["Budapeszt", "Budapeste", "Budapeŝto"],
    rent: "HUF 110,000–180,000",
    risk: "Fast-rising rents, extra utility costs and rental scams",
    bestFor: "ELTE, BME, Corvinus, Semmelweis & CEU students, nightlife, value",
    dashboard: {
      description:
        "Hungary's capital straddles the Danube — hilly Buda on one side, lively Pest on the other — and hosts ELTE, BME (Budapest University of Technology and Economics), Corvinus, Semmelweis University with its large international medical programs, CEU and more. Budapest is beautiful and affordable by Western standards, but rents have climbed quickly: rooms in the inner districts now rarely cost less than HUF 100,000 a month.",
      costOfLiving: "HUF 280,000–400,000/month (rent, food, transport, phone)",
      heroImage: "/cities/budapest-hero.jpg",
      heroCredit: {
        text: "Pierre Blaché · CC0",
        url: "https://commons.wikimedia.org/wiki/File:Hungarian_Parliament_Building_2023-9.jpg",
      },
      quickFacts: {
        population: "1.69 million (1 January 2025)",
        averageRent: "HUF 100,000+/mo for a room in the inner districts (2025)",
        languages: "Hungarian; English common among students and young people",
        transportScore: "9.0/10",
        safetyScore: "8.2/10",
      },
      marketOverview: {
        peakDemand: {
          title: "Peak demand periods",
          text: "Late July to September, after the Hungarian university admissions results and before the semester starts in September, and again in January–February.",
        },
        mainChallenges: {
          title: "Main challenges",
          text: "Rooms in the inner districts rarely go for less than HUF 100,000 a month (Rentigo, 2025), and whole flats in the central districts often cost HUF 300,000 or more. Many international students arrive at the same time each September, and listings often leave out utilities (rezsi) and the building's common charge.",
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
          name: "University dorms (kollégium)",
          trustScore: 4.3,
          audience: "Students at Budapest's universities",
          pros: [
            "Far below market rents",
            "Run by or with the universities",
            "Address registration handled for you",
          ],
          cons: ["Limited places, often shared rooms", "Apply as soon as you're admitted"],
        },
        {
          name: "ingatlan.com",
          trustScore: 4.0,
          audience: "Students renting a flat or room",
          pros: [
            "Hungary's largest property portal",
            "Flats in every district",
            "Price and area filters",
          ],
          cons: ["Mostly whole flats", "Mostly in Hungarian"],
        },
        {
          name: "alberlet.hu",
          trustScore: 3.8,
          audience: "Students looking for rooms and flatshares",
          pros: [
            "Dedicated rental site",
            "Rooms in shared flats",
            "Direct contact with landlords",
          ],
          cons: ["Listing quality varies", "Popular rooms go fast"],
        },
        {
          name: "Facebook groups",
          trustScore: 3.0,
          audience: "Erasmus and international students",
          pros: [
            "Free to use",
            "Short-term sublets from other students",
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
          title: "Scams",
          text: "Watch for a cheap central flat, an owner who is 'abroad' and a deposit requested by transfer before any viewing. Never pay before you've seen the room (in person or by live video) and signed a written contract.",
        },
        {
          title: "Rent plus utilities",
          text: "Many listings quote rent without utilities (rezsi) and the building's common charge (közös költség). Ask for the full monthly total and how utilities are split before you sign.",
        },
        {
          title: "Deposit and handover",
          text: "Deposits (kaució) are usually one to two months' rent. Sign a written contract and a handover protocol listing the flat's condition and meter readings, so you can get the deposit back.",
        },
        {
          title: "Address registration",
          text: "Register your address at a government office (kormányablak) with your lease and the owner's consent. EU citizens staying longer than three months also need a registration certificate from the immigration authority — check that your landlord allows registration.",
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
  France: "🇫🇷",
  Germany: "🇩🇪",
  Spain: "🇪🇸",
  Italy: "🇮🇹",
  Netherlands: "🇳🇱",
  "United Kingdom": "🇬🇧",
  Sweden: "🇸🇪",
  Austria: "🇦🇹",
  "Czech Republic": "🇨🇿",
  Belgium: "🇧🇪",
  Ireland: "🇮🇪",
  Poland: "🇵🇱",
  Hungary: "🇭🇺",
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
