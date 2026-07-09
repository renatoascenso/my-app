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
];

export function getHousingAtlasListingDetail(listingId: string): HousingAtlasListingDetail | undefined {
  return housingAtlasListingDetails.find((d) => d.listingId === listingId);
}

export function sortReviewsByHomeUniversity(reviews: LandlordReview[]): LandlordReview[] {
  const matching = reviews.filter((r) => r.university === CURRENT_VISITOR_HOME_UNIVERSITY);
  const others = reviews.filter((r) => r.university !== CURRENT_VISITOR_HOME_UNIVERSITY);
  return [...matching, ...others];
}
