export const CURRENT_VISITOR_HOME_UNIVERSITY = "University of St. Gallen";

export type FlatInfo = {
  propertyType: string;
  totalRooms: number;
  totalBathrooms: number;
  furnished: boolean;
  floor: string;
  elevator: boolean;
  internetIncluded: boolean;
  washingMachine: boolean;
  kitchen: string;
};

export type RoomDetails = {
  roomSizeSqm: number;
  bedType: string;
  wardrobe: boolean;
  desk: boolean;
  chair: boolean;
  window: boolean;
  privateBalcony: boolean;
  privateBathroom: boolean;
  heating: string;
};

export type LocationInfo = {
  address: string;
  district: string;
  municipality: string;
  distanceToMetro: string;
  walkToMetro: string;
  walkToUniversity: string;
};

export type PriceBreakdown = {
  monthlyRent: number;
  monthlyBills: number;
  securityDeposit: number;
  bookingFee: number;
  cleaningFee?: number;
};

export type AboutInfo = {
  description: string;
  equipment: string[];
  kitchenEquipment: string[];
  bathroomInfo: string;
  commonAreas: string;
  importantNotes: string;
  fees: string;
  moveInInfo: string;
  houseRules: string[];
};

export type MonthAvailability = {
  month: string;
  status: "available" | "occupied";
};

export type AvailabilityInfo = {
  availableFrom: string;
  minStayMonths: number;
  maxStayMonths: number;
  months: MonthAvailability[];
};

export type LandlordReview = {
  studentName: string;
  university: string;
  rating: number;
  quote: string;
};

export type LandlordInfo = {
  name: string;
  avatarInitials: string;
  joinedYear: number;
  responseTime: string;
  languages: string[];
  propertiesCount: number;
  successfulRentals: number;
  verified: boolean;
  rating: number;
  description: string;
  reviews: LandlordReview[];
};

export type FlatmateSummary = {
  genderMix: string[];
  statusTags: string[];
  nationalities: string[];
  ageRange: string;
  languages: string[];
  lifestyleTags: string[];
  compatibilityScore: number;
  compatibilityNote: string;
};

export type HousingAtlasListingDetail = {
  listingId: string;
  flatInfo: FlatInfo;
  roomDetails: RoomDetails;
  location: LocationInfo;
  priceBreakdown: PriceBreakdown;
  about: AboutInfo;
  availability: AvailabilityInfo;
  landlord: LandlordInfo;
  flatmates: FlatmateSummary;
};

export const housingAtlasListingDetails: HousingAtlasListingDetail[] = [
  {
    listingId: "ha-gulbenkian-room",
    flatInfo: {
      propertyType: "Shared apartment",
      totalRooms: 3,
      totalBathrooms: 1,
      furnished: true,
      floor: "3rd floor",
      elevator: true,
      internetIncluded: true,
      washingMachine: true,
      kitchen: "Shared, fully equipped",
    },
    roomDetails: {
      roomSizeSqm: 14,
      bedType: "Double bed",
      wardrobe: true,
      desk: true,
      chair: true,
      window: true,
      privateBalcony: false,
      privateBathroom: false,
      heating: "Central heating",
    },
    location: {
      address: "Rua Marquês de Fronteira 12, 3ºC (prototype address)",
      district: "Avenidas Novas",
      municipality: "Lisbon",
      distanceToMetro: "350 m",
      walkToMetro: "5 min",
      walkToUniversity: "12 min to Nova SBE",
    },
    priceBreakdown: {
      monthlyRent: 820,
      monthlyBills: 60,
      securityDeposit: 820,
      bookingFee: 50,
      cleaningFee: 40,
    },
    about: {
      description:
        "A bright double room in a well-kept 3-bedroom apartment two minutes from the Gulbenkian gardens. The apartment gets plenty of natural light and has been home to exchange students for the past three years.",
      equipment: ["Wifi", "TV in living room", "Central heating", "Washing machine"],
      kitchenEquipment: ["Fridge", "Oven", "Microwave", "Stovetop", "Kettle", "Toaster"],
      bathroomInfo: "1 shared bathroom with shower, used by 3 tenants.",
      commonAreas: "Shared living room and kitchen, cleaned weekly on a rotating tenant schedule.",
      importantNotes: "No smoking indoors. Pets are not allowed.",
      fees: "The booking fee is paid once to confirm your room. The security deposit is refundable at move-out, subject to a standard condition check.",
      moveInInfo: "Keys are handed over in person by the landlord or a trusted representative on your arrival date.",
      houseRules: [
        "No smoking indoors",
        "No pets",
        "Quiet hours after 11pm on weekdays",
        "Guests welcome with advance notice",
      ],
    },
    availability: {
      availableFrom: "1 Sep 2026",
      minStayMonths: 3,
      maxStayMonths: 12,
      months: [
        { month: "Aug 2026", status: "occupied" },
        { month: "Sep 2026", status: "available" },
        { month: "Oct 2026", status: "available" },
        { month: "Nov 2026", status: "available" },
        { month: "Dec 2026", status: "available" },
        { month: "Jan 2027", status: "available" },
        { month: "Feb 2027", status: "available" },
        { month: "Mar 2027", status: "available" },
        { month: "Apr 2027", status: "available" },
        { month: "May 2027", status: "available" },
        { month: "Jun 2027", status: "available" },
        { month: "Jul 2027", status: "occupied" },
      ],
    },
    landlord: {
      name: "Mariana Costa",
      avatarInitials: "MC",
      joinedYear: 2023,
      responseTime: "Usually responds within 2 hours",
      languages: ["Portuguese", "English", "Spanish"],
      propertiesCount: 4,
      successfulRentals: 27,
      verified: true,
      rating: 4.8,
      description:
        "Mariana has been hosting international students near Avenidas Novas for over three years. She's known for quick communication and keeping the apartment well maintained.",
      reviews: [
        {
          studentName: "Renato",
          university: "University of St. Gallen",
          rating: 5,
          quote: "Mariana was super responsive and the room was exactly as described. Would recommend to any HSG student!",
        },
        {
          studentName: "Anna",
          university: "University of Mannheim",
          rating: 5,
          quote: "Great location and a very clean apartment. Mariana helped me a lot with paperwork.",
        },
        {
          studentName: "Marco",
          university: "Bocconi University",
          rating: 4,
          quote: "Good experience overall — a small delay with the deposit return, but it was resolved quickly.",
        },
      ],
    },
    flatmates: {
      genderMix: ["Female", "Male"],
      statusTags: ["Master student", "Exchange student"],
      nationalities: ["Portuguese", "German"],
      ageRange: "22–26",
      languages: ["English", "Portuguese", "German"],
      lifestyleTags: ["Clean", "Social", "Occasionally cooks together", "Quiet during weekdays"],
      compatibilityScore: 92,
      compatibilityNote:
        "You match well because you have similar study status, lifestyle preferences and hobbies.",
    },
  },
  {
    listingId: "ha-campo-pequeno-room",
    flatInfo: {
      propertyType: "Shared apartment",
      totalRooms: 2,
      totalBathrooms: 1,
      furnished: true,
      floor: "1st floor",
      elevator: true,
      internetIncluded: true,
      washingMachine: true,
      kitchen: "Shared, fully equipped, recently renovated",
    },
    roomDetails: {
      roomSizeSqm: 13,
      bedType: "Single bed",
      wardrobe: true,
      desk: true,
      chair: true,
      window: true,
      privateBalcony: false,
      privateBathroom: false,
      heating: "Electric radiators",
    },
    location: {
      address: "Avenida de Roma 45, 1ºA (prototype address)",
      district: "Avenidas Novas",
      municipality: "Lisbon",
      distanceToMetro: "200 m",
      walkToMetro: "3 min",
      walkToUniversity: "15 min to ISCTE",
    },
    priceBreakdown: {
      monthlyRent: 875,
      monthlyBills: 55,
      securityDeposit: 875,
      bookingFee: 50,
      cleaningFee: 40,
    },
    about: {
      description:
        "A modern, recently renovated room in a quiet building near Campo Pequeno, within walking distance of Entrecampos and several university campuses. Bright shared living room with balcony access.",
      equipment: ["Wifi", "Smart TV", "Electric heating", "Washing machine"],
      kitchenEquipment: ["Fridge", "Induction stovetop", "Oven", "Dishwasher", "Kettle"],
      bathroomInfo: "1 shared bathroom with bathtub, used by 2 tenants.",
      commonAreas: "Bright shared living room with balcony access.",
      importantNotes: "No smoking indoors.",
      fees: "The booking fee is paid once to confirm your room. The security deposit is refundable at move-out, subject to a standard condition check.",
      moveInInfo: "Keys are handed over in person by the landlord on your arrival date; remote check-in can be arranged on request.",
      houseRules: [
        "No smoking indoors",
        "Quiet hours after 11pm on weekdays",
        "Guests welcome with advance notice",
      ],
    },
    availability: {
      availableFrom: "1 Sep 2026",
      minStayMonths: 5,
      maxStayMonths: 12,
      months: [
        { month: "Aug 2026", status: "occupied" },
        { month: "Sep 2026", status: "available" },
        { month: "Oct 2026", status: "available" },
        { month: "Nov 2026", status: "available" },
        { month: "Dec 2026", status: "available" },
        { month: "Jan 2027", status: "available" },
        { month: "Feb 2027", status: "available" },
        { month: "Mar 2027", status: "available" },
        { month: "Apr 2027", status: "available" },
        { month: "May 2027", status: "available" },
        { month: "Jun 2027", status: "occupied" },
        { month: "Jul 2027", status: "occupied" },
      ],
    },
    landlord: {
      name: "João Ferreira",
      avatarInitials: "JF",
      joinedYear: 2022,
      responseTime: "Usually responds within 1 hour",
      languages: ["Portuguese", "English", "French"],
      propertiesCount: 6,
      successfulRentals: 41,
      verified: true,
      rating: 4.9,
      description:
        "João specializes in renting to exchange students and has hosted students from several partner universities, including a number from HSG.",
      reviews: [
        {
          studentName: "Renato",
          university: "University of St. Gallen",
          rating: 5,
          quote: "João was incredibly helpful, especially with the arrival process. Highly recommend for HSG students!",
        },
        {
          studentName: "Sofia",
          university: "Bocconi University",
          rating: 5,
          quote: "Lovely, modern room and a very fair landlord. Communication was excellent throughout.",
        },
        {
          studentName: "Lukas",
          university: "WU Vienna",
          rating: 4,
          quote: "Good stay overall, the neighborhood is quieter than I expected which I liked.",
        },
      ],
    },
    flatmates: {
      genderMix: ["Male", "Male"],
      statusTags: ["Exchange student", "Intern"],
      nationalities: ["Italian", "Austrian"],
      ageRange: "21–25",
      languages: ["English", "Italian"],
      lifestyleTags: ["Social", "Gym", "Football", "Movie nights"],
      compatibilityScore: 88,
      compatibilityNote:
        "You match well because you have similar study status, lifestyle preferences and hobbies.",
    },
  },
  {
    listingId: "ha-rosenberg-room",
    flatInfo: {
      propertyType: "Shared apartment",
      totalRooms: 3,
      totalBathrooms: 1,
      furnished: true,
      floor: "2nd floor",
      elevator: false,
      internetIncluded: true,
      washingMachine: true,
      kitchen: "Shared, fully equipped",
    },
    roomDetails: {
      roomSizeSqm: 15,
      bedType: "Single bed",
      wardrobe: true,
      desk: true,
      chair: true,
      window: true,
      privateBalcony: false,
      privateBathroom: false,
      heating: "Central heating",
    },
    location: {
      address: "Rosenbergstrasse 34, 2. Stock (prototype address)",
      district: "Rosenberg-Kreubleiche",
      municipality: "St.Gallen",
      distanceToMetro: "250 m to nearest bus stop",
      walkToMetro: "3 min",
      walkToUniversity: "5 min to HSG main building",
    },
    priceBreakdown: {
      monthlyRent: 850,
      monthlyBills: 70,
      securityDeposit: 2550,
      bookingFee: 50,
    },
    about: {
      description:
        "A bright single room in a well-kept 3-bedroom flat five minutes' walk from the HSG main building. The apartment has hosted exchange students for the past four years and the landlord is used to short Swiss registration timelines.",
      equipment: ["Wifi", "TV in living room", "Central heating", "Washing machine"],
      kitchenEquipment: ["Fridge", "Oven", "Induction stovetop", "Kettle", "Toaster"],
      bathroomInfo: "1 shared bathroom with shower, used by 3 tenants.",
      commonAreas: "Shared living room and kitchen, cleaned on a rotating tenant schedule.",
      importantNotes: "No smoking indoors. A signed rental contract is required to complete your Anmeldung (address registration).",
      fees: "The booking fee confirms your room. The security deposit (3 months' rent) is paid into a blocked Swiss deposit account and refunded at move-out, subject to a standard condition check.",
      moveInInfo: "Keys are handed over in person by the landlord on your arrival date.",
      houseRules: [
        "No smoking indoors",
        "No pets",
        "Quiet hours after 10pm on weekdays",
        "Guests welcome with advance notice",
      ],
    },
    availability: {
      availableFrom: "1 Sep 2026",
      minStayMonths: 4,
      maxStayMonths: 12,
      months: [
        { month: "Aug 2026", status: "occupied" },
        { month: "Sep 2026", status: "available" },
        { month: "Oct 2026", status: "available" },
        { month: "Nov 2026", status: "available" },
        { month: "Dec 2026", status: "available" },
        { month: "Jan 2027", status: "available" },
        { month: "Feb 2027", status: "available" },
        { month: "Mar 2027", status: "available" },
        { month: "Apr 2027", status: "available" },
        { month: "May 2027", status: "available" },
        { month: "Jun 2027", status: "occupied" },
        { month: "Jul 2027", status: "occupied" },
      ],
    },
    landlord: {
      name: "Claudia Meier",
      avatarInitials: "CM",
      joinedYear: 2021,
      responseTime: "Usually responds within 3 hours",
      languages: ["German", "English"],
      propertiesCount: 3,
      successfulRentals: 19,
      verified: true,
      rating: 4.9,
      description:
        "Claudia has rented rooms to HSG exchange students for over five years and is well known for helping with the Anmeldung and deposit-account paperwork.",
      reviews: [
        {
          studentName: "Elif",
          university: "Bocconi University",
          rating: 5,
          quote: "Claudia helped me set up my deposit account before I even landed. Couldn't have asked for a smoother start.",
        },
        {
          studentName: "Jonas",
          university: "WU Vienna",
          rating: 5,
          quote: "Five minutes to the main building — I never had to rush to a lecture again.",
        },
        {
          studentName: "Renato",
          university: "University of St. Gallen",
          rating: 4,
          quote: "Great location, though the shared bathroom gets busy during morning rush before 9am classes.",
        },
      ],
    },
    flatmates: {
      genderMix: ["Female", "Female", "Male"],
      statusTags: ["Master's student", "Exchange student"],
      nationalities: ["Swiss", "Italian"],
      ageRange: "21–25",
      languages: ["English", "German", "Italian"],
      lifestyleTags: ["Quiet during exam periods", "Cooks together on weekends", "Early risers"],
      compatibilityScore: 90,
      compatibilityNote:
        "You match well because you have similar study status, lifestyle preferences and hobbies.",
    },
  },
  {
    listingId: "ha-kreuzbleiche-studio",
    flatInfo: {
      propertyType: "Studio",
      totalRooms: 1,
      totalBathrooms: 1,
      furnished: true,
      floor: "Ground floor",
      elevator: false,
      internetIncluded: true,
      washingMachine: true,
      kitchen: "Private kitchenette",
    },
    roomDetails: {
      roomSizeSqm: 26,
      bedType: "Double bed",
      wardrobe: true,
      desk: true,
      chair: true,
      window: true,
      privateBalcony: true,
      privateBathroom: true,
      heating: "Electric radiators",
    },
    location: {
      address: "Joosrütistrasse 14 (prototype address)",
      district: "Hölzli-Joosrüti",
      municipality: "St.Gallen",
      distanceToMetro: "180 m to nearest bus stop",
      walkToMetro: "2 min",
      walkToUniversity: "7 min to HSG main building",
    },
    priceBreakdown: {
      monthlyRent: 1050,
      monthlyBills: 80,
      securityDeposit: 3150,
      bookingFee: 50,
      cleaningFee: 60,
    },
    about: {
      description:
        "A self-contained studio with its own kitchenette and bathroom, in Hölzli-Joosrüti, a short walk from both the Kreuzbleiche sports ground and the HSG campus. Good for a student who wants full independence.",
      equipment: ["Wifi", "Smart TV", "Electric heating", "Washing machine"],
      kitchenEquipment: ["Fridge", "Induction stovetop", "Microwave", "Kettle"],
      bathroomInfo: "Private bathroom with shower.",
      commonAreas: "None — fully self-contained studio.",
      importantNotes: "No smoking indoors. A signed rental contract is required for your Anmeldung.",
      fees: "The booking fee confirms your studio. The security deposit (3 months' rent) is paid into a blocked Swiss deposit account and refunded at move-out, subject to a standard condition check.",
      moveInInfo: "Keys are handed over in person by the landlord; remote check-in can be arranged on request.",
      houseRules: [
        "No smoking indoors",
        "No subletting without written permission",
        "Quiet hours after 10pm on weekdays",
      ],
    },
    availability: {
      availableFrom: "15 Sep 2026",
      minStayMonths: 6,
      maxStayMonths: 12,
      months: [
        { month: "Aug 2026", status: "occupied" },
        { month: "Sep 2026", status: "available" },
        { month: "Oct 2026", status: "available" },
        { month: "Nov 2026", status: "available" },
        { month: "Dec 2026", status: "available" },
        { month: "Jan 2027", status: "available" },
        { month: "Feb 2027", status: "available" },
        { month: "Mar 2027", status: "available" },
        { month: "Apr 2027", status: "available" },
        { month: "May 2027", status: "occupied" },
        { month: "Jun 2027", status: "occupied" },
        { month: "Jul 2027", status: "occupied" },
      ],
    },
    landlord: {
      name: "Thomas Bruderer",
      avatarInitials: "TB",
      joinedYear: 2020,
      responseTime: "Usually responds within 1 hour",
      languages: ["German", "English", "French"],
      propertiesCount: 5,
      successfulRentals: 33,
      verified: true,
      rating: 4.7,
      description:
        "Thomas rents exclusively to students near the HSG campus and is known for fast communication and a straightforward deposit process.",
      reviews: [
        {
          studentName: "Sofia",
          university: "Bocconi University",
          rating: 5,
          quote: "Having my own kitchen and bathroom made the whole exchange semester so much easier.",
        },
        {
          studentName: "Lukas",
          university: "University of Mannheim",
          rating: 4,
          quote: "Great location, though the studio is compact — fine for one person, tight for visitors.",
        },
        {
          studentName: "Priya",
          university: "London School of Economics",
          rating: 5,
          quote: "Thomas replied within the hour every time. Very easy landlord to deal with.",
        },
      ],
    },
    flatmates: {
      genderMix: [],
      statusTags: ["Exchange student"],
      nationalities: [],
      ageRange: "22–27",
      languages: [],
      lifestyleTags: ["Lives alone", "Quiet building"],
      compatibilityScore: 100,
      compatibilityNote: "This is a private studio, so there are no flatmates to match with.",
    },
  },
  {
    listingId: "ha-frederiksberg-room",
    flatInfo: {
      propertyType: "Shared apartment",
      totalRooms: 3,
      totalBathrooms: 1,
      furnished: true,
      floor: "3rd floor",
      elevator: true,
      internetIncluded: true,
      washingMachine: true,
      kitchen: "Shared, fully equipped",
    },
    roomDetails: {
      roomSizeSqm: 16,
      bedType: "Double bed",
      wardrobe: true,
      desk: true,
      chair: true,
      window: true,
      privateBalcony: false,
      privateBathroom: false,
      heating: "Central heating",
    },
    location: {
      address: "Falkoner Allé 22, 3. tv (prototype address)",
      district: "Frederiksberg",
      municipality: "Copenhagen",
      distanceToMetro: "300 m to Frederiksberg metro/train station",
      walkToMetro: "4 min",
      walkToUniversity: "8 min by bike to CBS Solbjerg Plads",
    },
    priceBreakdown: {
      monthlyRent: 7200,
      monthlyBills: 650,
      securityDeposit: 21600,
      bookingFee: 500,
    },
    about: {
      description:
        "A bright double room in a well-kept 3-bedroom apartment near Frederiksberg Runddel, an eight-minute bike ride from the CBS Solbjerg Plads campus. The landlord has hosted CEMS and other exchange students for years and knows exactly what incoming students need.",
      equipment: ["Wifi", "TV in living room", "Central heating", "Washing machine"],
      kitchenEquipment: ["Fridge", "Oven", "Induction stovetop", "Kettle", "Toaster"],
      bathroomInfo: "1 shared bathroom with shower, used by 3 tenants.",
      commonAreas: "Shared living room and kitchen, cleaned on a rotating tenant schedule.",
      importantNotes: "No smoking indoors. A Danish CPR number is required before your rental contract can be registered.",
      fees: "The booking fee confirms your room. The security deposit (3 months' rent) is refundable at move-out, subject to a standard condition check.",
      moveInInfo: "Keys are handed over in person by the landlord on your arrival date.",
      houseRules: [
        "No smoking indoors",
        "No pets",
        "Quiet hours after 11pm on weekdays",
        "Guests welcome with advance notice",
      ],
    },
    availability: {
      availableFrom: "1 Sep 2026",
      minStayMonths: 4,
      maxStayMonths: 12,
      months: [
        { month: "Aug 2026", status: "occupied" },
        { month: "Sep 2026", status: "available" },
        { month: "Oct 2026", status: "available" },
        { month: "Nov 2026", status: "available" },
        { month: "Dec 2026", status: "available" },
        { month: "Jan 2027", status: "available" },
        { month: "Feb 2027", status: "available" },
        { month: "Mar 2027", status: "available" },
        { month: "Apr 2027", status: "available" },
        { month: "May 2027", status: "available" },
        { month: "Jun 2027", status: "occupied" },
        { month: "Jul 2027", status: "occupied" },
      ],
    },
    landlord: {
      name: "Mette Holm",
      avatarInitials: "MH",
      joinedYear: 2021,
      responseTime: "Usually responds within 2 hours",
      languages: ["Danish", "English", "German"],
      propertiesCount: 3,
      successfulRentals: 22,
      verified: true,
      rating: 4.9,
      description:
        "Mette has rented rooms to CBS exchange and CEMS students for over four years and is known for quick communication and helping with the CPR registration process.",
      reviews: [
        {
          studentName: "Renato",
          university: "University of St. Gallen",
          rating: 5,
          quote: "Mette helped me get set up with a CPR number faster than I thought possible. Perfect location for CBS.",
        },
        {
          studentName: "Camille",
          university: "HEC Paris",
          rating: 5,
          quote: "Eight minutes to Solbjerg Plads by bike, exactly as advertised. Great flatmates too.",
        },
        {
          studentName: "Lorenzo",
          university: "Bocconi University",
          rating: 4,
          quote: "Great room and location, though the shared bathroom gets busy before early CEMS block seminars.",
        },
      ],
    },
    flatmates: {
      genderMix: ["Female", "Male"],
      statusTags: ["CEMS student", "Exchange student"],
      nationalities: ["Danish", "French"],
      ageRange: "22–26",
      languages: ["English", "Danish", "French"],
      lifestyleTags: ["Clean", "Social", "Cooks together on weekends", "Quiet during exam periods"],
      compatibilityScore: 91,
      compatibilityNote:
        "You match well because you have similar study status, lifestyle preferences and hobbies.",
    },
  },
  {
    listingId: "ha-vesterbro-studio",
    flatInfo: {
      propertyType: "Studio",
      totalRooms: 1,
      totalBathrooms: 1,
      furnished: true,
      floor: "2nd floor",
      elevator: false,
      internetIncluded: true,
      washingMachine: true,
      kitchen: "Private kitchenette",
    },
    roomDetails: {
      roomSizeSqm: 27,
      bedType: "Double bed",
      wardrobe: true,
      desk: true,
      chair: true,
      window: true,
      privateBalcony: false,
      privateBathroom: true,
      heating: "Central heating",
    },
    location: {
      address: "Skydebanegade 6 (prototype address)",
      district: "Vesterbro-Kongens Enghave",
      municipality: "Copenhagen",
      distanceToMetro: "250 m to Copenhagen Central Station",
      walkToMetro: "3 min",
      walkToUniversity: "12 min by bike to CBS Solbjerg Plads",
    },
    priceBreakdown: {
      monthlyRent: 8500,
      monthlyBills: 700,
      securityDeposit: 25500,
      bookingFee: 500,
      cleaningFee: 400,
    },
    about: {
      description:
        "A self-contained studio a short walk from the Kødbyen food and nightlife scene, with an easy bike ride to both CBS and Copenhagen Central Station. Good for a student who wants full independence in the middle of the action.",
      equipment: ["Wifi", "Smart TV", "Central heating", "Washing machine"],
      kitchenEquipment: ["Fridge", "Induction stovetop", "Microwave", "Kettle"],
      bathroomInfo: "Private bathroom with shower.",
      commonAreas: "None — fully self-contained studio.",
      importantNotes: "No smoking indoors. A Danish CPR number is required before your rental contract can be registered.",
      fees: "The booking fee confirms your studio. The security deposit (3 months' rent) is refundable at move-out, subject to a standard condition check.",
      moveInInfo: "Keys are handed over in person by the landlord; remote check-in can be arranged on request.",
      houseRules: [
        "No smoking indoors",
        "No subletting without written permission",
        "Quiet hours after 11pm on weekdays",
      ],
    },
    availability: {
      availableFrom: "15 Sep 2026",
      minStayMonths: 6,
      maxStayMonths: 12,
      months: [
        { month: "Aug 2026", status: "occupied" },
        { month: "Sep 2026", status: "available" },
        { month: "Oct 2026", status: "available" },
        { month: "Nov 2026", status: "available" },
        { month: "Dec 2026", status: "available" },
        { month: "Jan 2027", status: "available" },
        { month: "Feb 2027", status: "available" },
        { month: "Mar 2027", status: "available" },
        { month: "Apr 2027", status: "available" },
        { month: "May 2027", status: "occupied" },
        { month: "Jun 2027", status: "occupied" },
        { month: "Jul 2027", status: "occupied" },
      ],
    },
    landlord: {
      name: "Anders Vig",
      avatarInitials: "AV",
      joinedYear: 2020,
      responseTime: "Usually responds within 1 hour",
      languages: ["Danish", "English"],
      propertiesCount: 4,
      successfulRentals: 29,
      verified: true,
      rating: 4.7,
      description:
        "Anders rents exclusively to international students near the city center and is known for fast communication and a straightforward deposit process.",
      reviews: [
        {
          studentName: "Isabel",
          university: "ESADE Business School",
          rating: 5,
          quote: "Having my own kitchen and bathroom made the exchange semester so much easier. Kødbyen right outside was a huge bonus.",
        },
        {
          studentName: "Felix",
          university: "WU Vienna",
          rating: 4,
          quote: "Great location, though the studio is compact — fine for one person, tight for visitors.",
        },
        {
          studentName: "Priya",
          university: "London School of Economics",
          rating: 5,
          quote: "Anders replied within the hour every time. Very easy landlord to deal with.",
        },
      ],
    },
    flatmates: {
      genderMix: [],
      statusTags: ["CEMS student"],
      nationalities: [],
      ageRange: "22–27",
      languages: [],
      lifestyleTags: ["Lives alone", "Quiet building"],
      compatibilityScore: 100,
      compatibilityNote: "This is a private studio, so there are no flatmates to match with.",
    },
  },
];

export function getHousingAtlasListingDetail(listingId: string): HousingAtlasListingDetail | undefined {
  return housingAtlasListingDetails.find((d) => d.listingId === listingId);
}

export function sortReviewsByHomeUniversity(reviews: LandlordReview[]): LandlordReview[] {
  const matching = reviews.filter((r) => r.university === CURRENT_VISITOR_HOME_UNIVERSITY);
  const others = reviews.filter((r) => r.university !== CURRENT_VISITOR_HOME_UNIVERSITY);
  return [...matching, ...others];
}
