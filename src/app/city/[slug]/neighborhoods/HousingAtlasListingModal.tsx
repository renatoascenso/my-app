"use client";

import { useState } from "react";
import type { Listing } from "@/lib/lisbonMetro";
import {
  CURRENT_VISITOR_HOME_UNIVERSITY,
  sortReviewsByHomeUniversity,
  type HousingAtlasListingDetail,
} from "@/lib/housingAtlasListings";
import SourceBadge from "./SourceBadge";
import HomeUniversityBadge from "./HomeUniversityBadge";
import CollapsibleSection from "./CollapsibleSection";

const scamTips = [
  "Never transfer money in advance, before viewing the property in person or via video call.",
  "Be extra careful if a listing seems unusually cheap or too good to be true.",
  "Never share personal documents (ID, bank details) before signing a lease.",
  "Don't sign a contract before you've viewed the property.",
];

function PhotoIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <circle cx="8.5" cy="10.5" r="1.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16l-5.5-5.5-4 4L8 11l-5 5" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
    </svg>
  );
}

function Fact({ label, value }: { label: string; value: string | number }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function BoolFact({ label, value }: { label: string; value: boolean }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className={value ? "font-bold text-emerald-600" : "text-slate-300"}>
        {value ? "✓" : "–"}
      </span>
      <span className={value ? "text-slate-700" : "text-slate-400"}>{label}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
      {children}
    </span>
  );
}

const genderEmoji: Record<string, string> = { Female: "👩", Male: "👨" };
const statusEmoji: Record<string, string> = {
  "Master student": "🎓",
  "Bachelor student": "🎓",
  "Exchange student": "🌍",
  Intern: "💼",
};
const flagEmoji: Record<string, string> = {
  Portuguese: "🇵🇹",
  German: "🇩🇪",
  Italian: "🇮🇹",
  Spanish: "🇪🇸",
  French: "🇫🇷",
  Austrian: "🇦🇹",
};

export default function HousingAtlasListingModal({
  listing,
  detail,
  similarListings,
  onSelectListing,
}: {
  listing: Listing;
  detail: HousingAtlasListingDetail;
  similarListings: Listing[];
  onSelectListing: (id: string) => void;
}) {
  const [mediaNote, setMediaNote] = useState<string | null>(null);
  const [contactClicked, setContactClicked] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [showMapNote, setShowMapNote] = useState(false);

  const { flatInfo, roomDetails, location, priceBreakdown, about, availability, landlord, flatmates } =
    detail;

  const totalMonthly = priceBreakdown.monthlyRent + priceBreakdown.monthlyBills;
  const sortedReviews = sortReviewsByHomeUniversity(landlord.reviews);
  const orderedSimilar = [
    ...similarListings.filter((l) => l.source === "HousingAtlas"),
    ...similarListings.filter((l) => l.source !== "HousingAtlas"),
  ];

  return (
    <div>
      {/* Gallery hero */}
      <div className="grid grid-cols-4 grid-rows-2 gap-1 overflow-hidden rounded-t-2xl">
        <div className="col-span-2 row-span-2 flex aspect-square min-w-0 flex-col items-center justify-center gap-2 bg-gradient-to-br from-blue-100 via-slate-100 to-blue-200 text-blue-400 sm:aspect-auto">
          <PhotoIcon className="h-10 w-10" />
          <span className="w-full px-4 text-center text-xs font-medium uppercase tracking-wide">
            Prototype listing — photos coming soon
          </span>
        </div>
        {["Bedroom", "Kitchen", "Bathroom", "Living room"].map((label) => (
          <div
            key={label}
            className="flex aspect-square min-w-0 flex-col items-center justify-center gap-1 bg-slate-100 px-1 text-slate-400"
          >
            <PhotoIcon className="h-5 w-5" />
            <span className="w-full truncate text-center text-[9px] font-medium uppercase tracking-wide">
              {label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 border-b border-slate-100 px-6 py-3 sm:px-8">
        <button
          type="button"
          onClick={() => setMediaNote("Full photo gallery will be available once landlords upload real photos.")}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          See all photos
        </button>
        <button
          type="button"
          onClick={() => setMediaNote("Video tours are coming soon to HousingAtlas.")}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          Watch video
        </button>
        <button
          type="button"
          onClick={() => setMediaNote("3D walkthroughs are coming soon to HousingAtlas.")}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          3D Walkthrough
        </button>
      </div>
      {mediaNote && (
        <p className="border-b border-slate-100 bg-slate-50 px-6 py-2 text-xs text-slate-500 sm:px-8">
          {mediaNote}
        </p>
      )}

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {listing.featured && (
            <span className="inline-flex w-fit items-center rounded-full bg-blue-600 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Recommended
            </span>
          )}
          {listing.homeUniversityFriendly && <HomeUniversityBadge />}
          <SourceBadge source={listing.source} />
        </div>

        <h3 className="mt-3 text-2xl font-bold text-slate-900">{listing.title}</h3>
        <p className="mt-1 text-2xl font-bold text-slate-900">
          {listing.currency}{listing.rent}
          <span className="text-sm font-normal text-slate-500">/mo</span>
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Fact label="Type" value={listing.type} />
          <Fact label="Rooms rented" value={listing.rooms} />
          <Fact label="Size" value={`${listing.sizeSqm} m²`} />
          <Fact label="Available from" value={listing.availableFrom} />
        </div>

        {/* Property information */}
        <CollapsibleSection title="Entire flat information" defaultOpen>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Fact label="Property type" value={flatInfo.propertyType} />
            <Fact label="Total rooms" value={flatInfo.totalRooms} />
            <Fact label="Total bathrooms" value={flatInfo.totalBathrooms} />
            <Fact label="Floor" value={flatInfo.floor} />
            <Fact label="Kitchen" value={flatInfo.kitchen} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <BoolFact label="Furnished" value={flatInfo.furnished} />
            <BoolFact label="Elevator" value={flatInfo.elevator} />
            <BoolFact label="Internet included" value={flatInfo.internetIncluded} />
            <BoolFact label="Washing machine" value={flatInfo.washingMachine} />
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Room details">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Fact label="Room size" value={`${roomDetails.roomSizeSqm} m²`} />
            <Fact label="Bed type" value={roomDetails.bedType} />
            <Fact label="Heating" value={roomDetails.heating} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            <BoolFact label="Wardrobe" value={roomDetails.wardrobe} />
            <BoolFact label="Desk" value={roomDetails.desk} />
            <BoolFact label="Chair" value={roomDetails.chair} />
            <BoolFact label="Window" value={roomDetails.window} />
            <BoolFact label="Private balcony" value={roomDetails.privateBalcony} />
            <BoolFact label="Private bathroom" value={roomDetails.privateBathroom} />
          </div>
        </CollapsibleSection>

        {/* Location */}
        <CollapsibleSection title="Location">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Fact label="Address" value={location.address} />
            <Fact label="District" value={location.district} />
            <Fact label="Municipality" value={location.municipality} />
            <Fact label="Distance to metro" value={location.distanceToMetro} />
            <Fact label="Walk to metro" value={location.walkToMetro} />
            <Fact label="Walk to university" value={location.walkToUniversity} />
          </div>
          <button
            type="button"
            onClick={() => setShowMapNote((v) => !v)}
            className="mt-4 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            See on map
          </button>
          {showMapNote && (
            <p className="mt-2 text-xs text-slate-500">
              This will open an interactive map in a future version of HousingAtlas.
            </p>
          )}
        </CollapsibleSection>

        {/* Price */}
        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/40 p-5">
          <p className="text-sm font-semibold text-slate-900">Price breakdown</p>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Monthly rent</span>
              <span className="font-semibold text-slate-900">{listing.currency}{priceBreakdown.monthlyRent}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Monthly bills</span>
              <span className="font-semibold text-slate-900">{listing.currency}{priceBreakdown.monthlyBills}</span>
            </div>
            <div className="flex items-center justify-between border-t border-blue-100 pt-2">
              <span className="font-medium text-slate-700">Total monthly cost</span>
              <span className="font-bold text-slate-900">{listing.currency}{totalMonthly}</span>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-slate-600">Security deposit</span>
              <span className="font-semibold text-slate-900">{listing.currency}{priceBreakdown.securityDeposit}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Booking fee</span>
              <span className="font-semibold text-slate-900">{listing.currency}{priceBreakdown.bookingFee}</span>
            </div>
            {priceBreakdown.cleaningFee !== undefined && (
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Cleaning fee</span>
                <span className="font-semibold text-slate-900">{listing.currency}{priceBreakdown.cleaningFee}</span>
              </div>
            )}
          </div>
        </div>

        {/* About the property */}
        <CollapsibleSection title="About the property">
          <p className="text-sm leading-relaxed text-slate-700">{about.description}</p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Equipment</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {about.equipment.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Kitchen equipment
              </p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {about.kitchenEquipment.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Bathrooms</p>
              <p className="mt-1 text-slate-700">{about.bathroomInfo}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Common areas</p>
              <p className="mt-1 text-slate-700">{about.commonAreas}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Important notes
              </p>
              <p className="mt-1 text-slate-700">{about.importantNotes}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Fees</p>
              <p className="mt-1 text-slate-700">{about.fees}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Move-in</p>
              <p className="mt-1 text-slate-700">{about.moveInInfo}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">House rules</p>
              <ul className="mt-1 list-inside list-disc space-y-1 text-slate-700">
                {about.houseRules.map((rule) => (
                  <li key={rule}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        {/* Safe payment */}
        <div className="mt-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 p-5 text-white">
          <div className="flex items-center gap-2">
            <ShieldIcon />
            <p className="text-sm font-bold uppercase tracking-wide">
              Safe payment with HousingAtlas
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-blue-50">
            Your payment stays protected until after you move in. Funds are only
            released to the landlord once your move-in has been successfully
            completed.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-blue-50">
            If something is seriously different from the listing, HousingAtlas
            helps resolve the issue and can initiate a refund according to our
            protection policy.
          </p>
        </div>

        {/* Availability */}
        <CollapsibleSection title="Availability">
          <div className="grid grid-cols-3 gap-3">
            <Fact label="Available from" value={availability.availableFrom} />
            <Fact label="Minimum stay" value={`${availability.minStayMonths} months`} />
            <Fact label="Maximum stay" value={`${availability.maxStayMonths} months`} />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4">
            {availability.months.map((m) => (
              <div
                key={m.month}
                className={`rounded-lg border px-2 py-2 text-center text-xs font-medium ${
                  m.status === "available"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-slate-200 bg-slate-100 text-slate-400 line-through"
                }`}
              >
                {m.month}
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Available
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              Occupied
            </span>
          </div>
        </CollapsibleSection>

        {/* Trusted landlord */}
        <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
              {landlord.avatarInitials}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-base font-semibold text-slate-900">{landlord.name}</p>
                {landlord.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="mt-0.5 text-xs text-slate-500">
                Joined HousingAtlas in {landlord.joinedYear}
              </p>
              <div className="mt-1.5 flex items-center gap-1">
                <span className="text-sm text-amber-500">
                  {"★".repeat(Math.round(landlord.rating))}
                  {"☆".repeat(5 - Math.round(landlord.rating))}
                </span>
                <span className="text-xs font-medium text-slate-600">
                  {landlord.rating.toFixed(1)}
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">{landlord.description}</p>

          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Fact label="Response time" value={landlord.responseTime} />
            <Fact label="Properties" value={landlord.propertiesCount} />
            <Fact label="Successful rentals" value={landlord.successfulRentals} />
            <Fact label="Languages" value={landlord.languages.join(", ")} />
          </div>

          <button
            type="button"
            onClick={() => setShowReviews((v) => !v)}
            className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
          >
            {showReviews ? "Hide references" : "View references"}
          </button>

          {showReviews && (
            <div className="mt-4 space-y-3">
              {sortedReviews.map((review) => {
                const isHomeUniversity = review.university === CURRENT_VISITOR_HOME_UNIVERSITY;
                return (
                  <div
                    key={`${review.studentName}-${review.university}`}
                    className={`rounded-xl border p-3 ${
                      isHomeUniversity ? "border-blue-300 bg-blue-50/50" : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-slate-900">
                        {review.studentName}{" "}
                        <span className="font-normal text-slate-500">
                          ({review.university})
                        </span>
                      </p>
                      <span className="shrink-0 text-xs text-amber-500">
                        {"★".repeat(review.rating)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{review.quote}</p>
                    {isHomeUniversity && (
                      <span className="mt-1.5 inline-block text-[10px] font-semibold uppercase tracking-wide text-blue-600">
                        From your home university
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Flatmates */}
        <CollapsibleSection
          title="Current flatmates"
          subtitle="A snapshot of who you'd be living with"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Who lives here</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {flatmates.genderMix.map((g) => (
                  <Tag key={g}>
                    {genderEmoji[g] ?? "🧑"} {g}
                  </Tag>
                ))}
                {flatmates.statusTags.map((s) => (
                  <Tag key={s}>
                    {statusEmoji[s] ?? "🎓"} {s}
                  </Tag>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Nationalities</p>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {flatmates.nationalities.map((n) => (
                  <Tag key={n}>
                    {flagEmoji[n] ?? "🌐"} {n}
                  </Tag>
                ))}
              </div>
            </div>
            <Fact label="Age range" value={flatmates.ageRange} />
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Languages</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {flatmates.languages.map((l) => (
                <Tag key={l}>{l}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Lifestyle</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {flatmates.lifestyleTags.map((l) => (
                <Tag key={l}>{l}</Tag>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Compatibility score</p>
              <p className="text-lg font-bold text-blue-700">{flatmates.compatibilityScore}% match</p>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                style={{ width: `${flatmates.compatibilityScore}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-slate-600">{flatmates.compatibilityNote}</p>
          </div>

          <p className="mt-3 text-xs italic text-slate-400">
            Flatmate information is continuously updated by current tenants
            through HousingAtlas.
          </p>
        </CollapsibleSection>

        {listing.riskNote && (
          <div className="mt-5 rounded-xl bg-amber-50 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-700">Caution</p>
            <p className="mt-1 text-sm text-slate-700">{listing.riskNote}</p>
          </div>
        )}

        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-900">Protect yourself from scams</p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
            {scamTips.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-amber-600">⚠</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <button
            type="button"
            onClick={() => setContactClicked(true)}
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto sm:px-6"
          >
            Contact via HousingAtlas
          </button>
          {contactClicked && (
            <p className="mt-2 text-xs text-slate-500">
              This is a demo — messaging isn&apos;t connected yet in the prototype.
            </p>
          )}
        </div>

        {/* Similar properties */}
        {orderedSimilar.length > 0 && (
          <div className="mt-8 border-t border-slate-100 pt-5">
            <p className="text-base font-semibold text-slate-900">Similar rooms you may like</p>
            <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
              {orderedSimilar.map((similar) => (
                <button
                  key={similar.id}
                  type="button"
                  onClick={() => onSelectListing(similar.id)}
                  className="w-48 shrink-0 rounded-xl border border-slate-200 bg-white p-3 text-left shadow-sm transition hover:shadow-md"
                >
                  {similar.source === "HousingAtlas" && (
                    <span className="mb-1.5 inline-block rounded-full bg-blue-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                      HousingAtlas
                    </span>
                  )}
                  <p className="line-clamp-2 text-sm font-semibold text-slate-900">
                    {similar.title}
                  </p>
                  <p className="mt-1 text-base font-bold text-slate-900">
                    {similar.currency}{similar.rent}
                    <span className="text-xs font-normal text-slate-500">/mo</span>
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {similar.type} · {similar.source}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
