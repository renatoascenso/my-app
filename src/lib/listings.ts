export type Listing = {
  id: string;
  title: string;
  rent: number;
  currency: string;
  type: string;
  source: string;
  featured?: boolean;
  riskNote?: string;
  lat: number;
  lng: number;
  description: string;
  rooms: number;
  sizeSqm: number;
  availableFrom: string;
  amenities: string[];
  sourceUrl?: string;
  homeUniversityFriendly?: boolean;
};

export type ListingFilters = {
  types: string[];
  sources: string[];
  amenities: string[];
  minPrice: number;
  maxPrice: number;
  availableNow: boolean;
  homeUniversityFriendly: boolean;
};

export function getListingFilterOptions(listings: Listing[]) {
  const types = [...new Set(listings.map((l) => l.type))].sort();
  const sources = [...new Set(listings.map((l) => l.source))].sort();
  const amenities = [...new Set(listings.flatMap((l) => l.amenities))].sort();
  const prices = listings.map((l) => l.rent);
  const priceBounds = {
    min: prices.length ? Math.min(...prices) : 0,
    max: prices.length ? Math.max(...prices) : 0,
  };
  return { types, sources, amenities, priceBounds };
}

export function getDefaultListingFilters(listings: Listing[]): ListingFilters {
  const { priceBounds } = getListingFilterOptions(listings);
  return {
    types: [],
    sources: [],
    amenities: [],
    minPrice: priceBounds.min,
    maxPrice: priceBounds.max,
    availableNow: false,
    homeUniversityFriendly: false,
  };
}

export function filterListings(listings: Listing[], filters: ListingFilters): Listing[] {
  return listings.filter((listing) => {
    if (filters.types.length > 0 && !filters.types.includes(listing.type)) return false;
    if (filters.sources.length > 0 && !filters.sources.includes(listing.source)) return false;
    if (filters.amenities.length > 0 && !filters.amenities.every((a) => listing.amenities.includes(a))) {
      return false;
    }
    if (listing.rent < filters.minPrice || listing.rent > filters.maxPrice) return false;
    if (filters.availableNow && listing.availableFrom !== "Immediately") return false;
    if (
      filters.homeUniversityFriendly &&
      !(listing.source === "HousingAtlas" && listing.homeUniversityFriendly)
    ) {
      return false;
    }
    return true;
  });
}
