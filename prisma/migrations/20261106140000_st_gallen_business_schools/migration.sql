-- Data: business schools in St.Gallen (HSG and OST School of Management).
-- Sources checked 2026-11-06 on unisg.ch and ost.ch; every housing row carries its source link.
-- Skips anything that already exists (same pattern as the Lisbon migration).

INSERT INTO "University" ("id","citySlug","name","shortName","parentUniversity","fields","website","housingPageUrl","offersHousing","housingSummary","published","lastCheckedAt","lastEditedBy","updatedAt") VALUES
('seed_sg_hsg','st-gallen','University of St.Gallen','HSG',NULL,ARRAY['BUSINESS','ECONOMICS','LAW','COMPUTER_SCIENCE']::"StudyField"[],
 'https://www.unisg.ch/en/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','LIMITED',
 'HSG''s Housing Office rents furnished rooms only to exchange and guest students (partner universities, CEMS, Engage GSM, Themis): CHF 700–1,050 a month with bills included and no deposit, for a fixed semester. Degree students search the private market; HSG points to the Sharing is Caring Facebook group, the SHSG marketplace, Flatfox and wgzimmer.ch.',
 true,'2026-11-06','initial import',NOW()),
('seed_sg_ost','st-gallen','OST School of Management','OST','OST – Eastern Switzerland University of Applied Sciences',ARRAY['BUSINESS']::"StudyField"[],
 'https://www.ost.ch/en/','https://www.ost.ch/de/die-ost/services/internationales/austauschsemester-an-der-ost/incomings-departement-wirtschaft','PARTNER',
 'OST''s St.Gallen campus, right by the main station, has no housing of its own. For exchange students at the School of Management, the International Office arranges rooms through an external provider, Homestay AG. Everyone else searches the private market.',
 true,'2026-11-06','initial import',NOW())
ON CONFLICT ("citySlug","name") DO NOTHING;

INSERT INTO "Campus" ("id","universityId","name","address","lat","lng","isMain","sortOrder","updatedAt")
SELECT v.* FROM (VALUES
  ('seed_sg_hsg_c1','seed_sg_hsg','Main campus','Dufourstrasse 50, 9000 St.Gallen',47.4300,9.3722,true,0,NOW()),
  ('seed_sg_ost_c1','seed_sg_ost','Campus St.Gallen','Rosenbergstrasse 59, 9000 St.Gallen',47.4229,9.3677,true,0,NOW())
) AS v("id","universityId","name","address","lat","lng","isMain","sortOrder","updatedAt")
WHERE EXISTS (SELECT 1 FROM "University" u WHERE u."id" = v."universityId")
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "UniversityHousing" ("id","universityId","campusId","name","provider","description","audiences","roomTypes","priceMin","priceMax","currency","applicationUrl","sourceUrl","published","lastCheckedAt","lastEditedBy","updatedAt")
SELECT v."id",v."universityId",v."campusId",v."name",v."provider",v."description",v."audiences"::"StudyLevel"[],v."roomTypes",v."priceMin",v."priceMax",v."currency",v."applicationUrl",v."sourceUrl",true,DATE '2026-11-06','initial import',NOW() FROM (VALUES
  ('seed_sg_hsg_h1','seed_sg_hsg','seed_sg_hsg_c1','Adlerbergstrasse 13','HSG Housing Office',
   'Newly renovated building with a lift near the Olma exhibition centre, 650 m from the university (10 min walk). A shared kitchen and dining area on each floor.',
   '{EXCHANGE}','62 single rooms with private bathroom',800,1000,'CHF ',
   'https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/single-rooms-with-private-bathrooms/'),
  ('seed_sg_hsg_h2','seed_sg_hsg','seed_sg_hsg_c1','Holzstrasse 11 & 11a','HSG Housing Office',
   'House with a garden in quiet Rotmonten, between the Peter and Paul wildlife park and campus: 850 m from the university (10 min walk). Low ceilings.',
   '{EXCHANGE}','20 single rooms in shared apartments',750,950,'CHF ',
   'https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/shared-apartments/'),
  ('seed_sg_hsg_h3','seed_sg_hsg','seed_sg_hsg_c1','Langgasse 49','HSG Housing Office',
   'Classic building near the Olma convention centre, 1 km from the university (20 min walk, 15 min by bus). Some rooms have a balcony.',
   '{EXCHANGE}','16 single rooms in shared apartments',700,820,'CHF ',
   'https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/shared-apartments/'),
  ('seed_sg_hsg_h4','seed_sg_hsg','seed_sg_hsg_c1','Langgasse 121','HSG Housing Office',
   'Building with a co-working space near the Espenmoos stadium in the east of the city, 2.1 km from the university (7 min by bus).',
   '{EXCHANGE}','27 single rooms in shared apartments',700,900,'CHF ',
   'https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/shared-apartments/'),
  ('seed_sg_hsg_h5','seed_sg_hsg','seed_sg_hsg_c1','Langgasse 121 – 2.5-room flat','HSG Housing Office',
   'Furnished 64 m² ground-floor flat for up to two people, with its own kitchen and bathroom; 2.1 km from the university.',
   '{EXCHANGE}','One 2.5-room flat',1350,1350,'CHF ',
   'https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/25-room-flat/'),
  ('seed_sg_hsg_h6','seed_sg_hsg','seed_sg_hsg_c1','Steingrüeblistrasse 24','HSG Housing Office',
   'Ten apartments for groups of three to eight students in the new Städtsägi neighbourhood, 1 km from the city centre and 1.9 km from the university (25 min).',
   '{EXCHANGE}','49 single rooms in shared apartments',800,900,'CHF ',
   'https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/','https://www.unisg.ch/en/studying/exchange-programme/the-housing-office/shared-apartments/'),
  ('seed_sg_ost_h1','seed_sg_ost','seed_sg_ost_c1','Rooms through Homestay AG','Homestay AG (arranged by OST''s International Office)',
   'Furnished private room with Wi-Fi; kitchen and bathroom shared with other exchange students. The International Office places you; OST cannot take free movers at the moment.',
   '{EXCHANGE}','Private room, shared kitchen and bathroom',600,900,'€',
   NULL,'https://www.ost.ch/de/die-ost/services/internationales/austauschsemester-an-der-ost/incomings-departement-wirtschaft')
) AS v("id","universityId","campusId","name","provider","description","audiences","roomTypes","priceMin","priceMax","currency","applicationUrl","sourceUrl")
WHERE EXISTS (SELECT 1 FROM "University" u WHERE u."id" = v."universityId")
ON CONFLICT ("id") DO NOTHING;

-- HSG: same application rounds for every Housing Office building.
INSERT INTO "HousingDeadline" ("id","housingId","intake","audience","note","updatedAt")
SELECT h."id" || '_d' || r.n, h."id", r.intake, 'EXCHANGE', r.note, NOW()
FROM "UniversityHousing" h
CROSS JOIN (VALUES
  (1,'Spring semester 2027','Fully booked; you can join the waiting list on Mobility-Online.'),
  (2,'Autumn semester','Applications open on 18 May at 9:00 CET on Mobility-Online. Non-refundable CHF 250 application fee; fixed rental period 1 August–31 December.')
) AS r(n,intake,note)
WHERE h."id" IN ('seed_sg_hsg_h1','seed_sg_hsg_h2','seed_sg_hsg_h3','seed_sg_hsg_h4','seed_sg_hsg_h5','seed_sg_hsg_h6')
ON CONFLICT ("id") DO NOTHING;

-- OST: nomination and application deadlines from the School of Management's incoming page.
INSERT INTO "HousingDeadline" ("id","housingId","intake","audience","closesAt","note","updatedAt")
SELECT v.* FROM (VALUES
  ('seed_sg_ost_h1_d1','seed_sg_ost_h1','Autumn semester 2027','EXCHANGE'::"StudyLevel",TIMESTAMP '2027-06-01','Your home university must nominate you by 15 May.',NOW()),
  ('seed_sg_ost_h1_d2','seed_sg_ost_h1','Spring semester 2028','EXCHANGE'::"StudyLevel",TIMESTAMP '2027-11-01','Your home university must nominate you by 15 October.',NOW())
) AS v("id","housingId","intake","audience","closesAt","note","updatedAt")
WHERE EXISTS (SELECT 1 FROM "UniversityHousing" h WHERE h."id" = v."housingId")
ON CONFLICT ("id") DO NOTHING;
