-- CreateEnum
CREATE TYPE "HousingAvailability" AS ENUM ('YES', 'LIMITED', 'PARTNER', 'NO', 'UNKNOWN');

-- CreateEnum
CREATE TYPE "StudyLevel" AS ENUM ('BACHELOR', 'MASTER', 'PHD', 'EXCHANGE', 'ALL');

-- CreateTable
CREATE TABLE "University" (
    "id" TEXT NOT NULL,
    "citySlug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT,
    "website" TEXT,
    "housingPageUrl" TEXT,
    "offersHousing" "HousingAvailability" NOT NULL DEFAULT 'UNKNOWN',
    "housingSummary" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "lastCheckedAt" TIMESTAMP(3),
    "lastEditedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "University_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campus" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "isMain" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Campus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityHousing" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "campusId" TEXT,
    "name" TEXT NOT NULL,
    "provider" TEXT,
    "address" TEXT,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "description" TEXT,
    "audiences" "StudyLevel"[],
    "roomTypes" TEXT,
    "priceMin" INTEGER,
    "priceMax" INTEGER,
    "currency" TEXT,
    "applicationUrl" TEXT,
    "sourceUrl" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "lastCheckedAt" TIMESTAMP(3) NOT NULL,
    "lastEditedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UniversityHousing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HousingDeadline" (
    "id" TEXT NOT NULL,
    "housingId" TEXT NOT NULL,
    "intake" TEXT NOT NULL,
    "audience" "StudyLevel" NOT NULL DEFAULT 'ALL',
    "opensAt" TIMESTAMP(3),
    "closesAt" TIMESTAMP(3),
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HousingDeadline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UniversityPlatformMention" (
    "id" TEXT NOT NULL,
    "universityId" TEXT NOT NULL,
    "platformName" TEXT NOT NULL,
    "sourceUrl" TEXT NOT NULL,
    "lastCheckedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UniversityPlatformMention_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "University_citySlug_idx" ON "University"("citySlug");

-- CreateIndex
CREATE UNIQUE INDEX "University_citySlug_name_key" ON "University"("citySlug", "name");

-- CreateIndex
CREATE INDEX "Campus_universityId_idx" ON "Campus"("universityId");

-- CreateIndex
CREATE INDEX "UniversityHousing_universityId_idx" ON "UniversityHousing"("universityId");

-- CreateIndex
CREATE INDEX "HousingDeadline_housingId_idx" ON "HousingDeadline"("housingId");

-- CreateIndex
CREATE UNIQUE INDEX "UniversityPlatformMention_universityId_platformName_key" ON "UniversityPlatformMention"("universityId", "platformName");

-- AddForeignKey
ALTER TABLE "Campus" ADD CONSTRAINT "Campus_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityHousing" ADD CONSTRAINT "UniversityHousing_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityHousing" ADD CONSTRAINT "UniversityHousing_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousingDeadline" ADD CONSTRAINT "HousingDeadline_housingId_fkey" FOREIGN KEY ("housingId") REFERENCES "UniversityHousing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UniversityPlatformMention" ADD CONSTRAINT "UniversityPlatformMention_universityId_fkey" FOREIGN KEY ("universityId") REFERENCES "University"("id") ON DELETE CASCADE ON UPDATE CASCADE;
