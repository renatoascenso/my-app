-- Data: the four main business schools in Lisbon (first university profiles).
-- Sources checked 2026-11-06; every housing row carries its source link.
-- ON CONFLICT DO NOTHING: if a school with the same name already exists in Lisbon,
-- it is left untouched, and the child rows below insert nothing (their university id won't exist).

INSERT INTO "University" ("id","citySlug","name","shortName","parentUniversity","fields","website","housingPageUrl","offersHousing","housingSummary","published","lastCheckedAt","lastEditedBy","updatedAt") VALUES
('seed_lis_novasbe','lisbon','Nova School of Business and Economics','Nova SBE','Universidade Nova de Lisboa',ARRAY['BUSINESS','ECONOMICS']::"StudyField"[],
 'https://www.novasbe.unl.pt/','https://www.novasbe.unl.pt/en/life-at-nova-sbe/getting-started','PARTNER',
 'Nova SBE doesn''t run its own residences. It points students to partner residences and housing platforms, several of them in Carcavelos near the campus. Subsidised rooms through SAS NOVA (Universidade Nova de Lisboa''s student services) go to scholarship holders first.',
 true,'2026-11-06','initial import',NOW()),
('seed_lis_catolica','lisbon','Católica Lisbon School of Business & Economics','Católica-Lisbon','Universidade Católica Portuguesa',ARRAY['BUSINESS','ECONOMICS']::"StudyField"[],
 'https://clsbe.lisboa.ucp.pt/','https://clsbe.lisboa.ucp.pt/node/62040','NO',
 'Católica-Lisbon has no on-campus housing. After you apply, the International Relations Office gives international students a list of temporary and permanent accommodation options, some with student discounts. Rooms are not guaranteed.',
 true,'2026-11-06','initial import',NOW()),
('seed_lis_ibs','lisbon','Iscte Business School','IBS','Iscte – University Institute of Lisbon',ARRAY['BUSINESS','ECONOMICS']::"StudyField"[],
 'https://ibs.iscte-iul.pt/','https://www.iscte-iul.pt/study-8020/student-accommodation','LIMITED',
 'Iscte is opening three new residences in Odivelas, Amadora and Sintra, outside central Lisbon. Places go first to students who have moved to Lisbon, especially scholarship holders; exchange students come after them. You apply online with your Iscte email.',
 true,'2026-11-06','initial import',NOW()),
('seed_lis_iseg','lisbon','ISEG – Lisbon School of Economics & Management','ISEG','Universidade de Lisboa',ARRAY['ECONOMICS','BUSINESS']::"StudyField"[],
 'https://www.iseg.ulisboa.pt/','https://www.iseg.ulisboa.pt/internacional/en/?p=1508','LIMITED',
 'ISEG has no on-campus housing; its international office lists private providers such as Inlife, Spotahome, Livensa Living and Nido. Universidade de Lisboa runs its own student residences, with priority for scholarship holders who have moved to Lisbon.',
 true,'2026-11-06','initial import',NOW())
ON CONFLICT ("citySlug","name") DO NOTHING;

INSERT INTO "Campus" ("id","universityId","name","address","lat","lng","isMain","sortOrder","updatedAt")
SELECT v.* FROM (VALUES
  ('seed_lis_novasbe_c1','seed_lis_novasbe','Carcavelos campus','Carcavelos, Cascais',38.6782,-9.3259,true,0,NOW()),
  ('seed_lis_catolica_c1','seed_lis_catolica','Palma de Cima campus','Palma de Cima, 1649-023 Lisboa',38.7491,-9.1660,true,0,NOW()),
  ('seed_lis_ibs_c1','seed_lis_ibs','Lisbon campus','Avenida das Forças Armadas, 1649-026 Lisboa',38.7486,-9.1540,true,0,NOW()),
  ('seed_lis_iseg_c1','seed_lis_iseg','Quelhas campus','Rua do Quelhas 6, 1200-781 Lisboa',38.7106,-9.1556,true,0,NOW())
) AS v("id","universityId","name","address","lat","lng","isMain","sortOrder","updatedAt")
WHERE EXISTS (SELECT 1 FROM "University" u WHERE u."id" = v."universityId")
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "UniversityHousing" ("id","universityId","campusId","name","provider","description","audiences","roomTypes","sourceUrl","published","lastCheckedAt","lastEditedBy","updatedAt")
SELECT v."id",v."universityId",v."campusId",v."name",v."provider",v."description",v."audiences"::"StudyLevel"[],v."roomTypes",v."sourceUrl",true,DATE '2026-11-06','initial import',NOW() FROM (VALUES
  ('seed_lis_ibs_h1','seed_lis_ibs','seed_lis_ibs_c1','Odivelas university residence','Iscte',
   'New residence next to Odivelas Monastery, about 15 minutes'' walk from Odivelas metro (yellow line). No opening date published yet.',
   '{}','100 single and 52 double rooms, all with private bathroom','https://www.iscte-iul.pt/study-8020/student-accommodation'),
  ('seed_lis_ibs_h2','seed_lis_ibs','seed_lis_ibs_c1','Amadora university residence','Iscte',
   'New residence near Portas de Benfica, about 5 minutes'' walk from Amadora Este metro (blue line). Opening in stages until December 2026, fully running from the second semester of 2026/27.',
   '{}','219 single rooms','https://www.iscte-iul.pt/study-8020/student-accommodation'),
  ('seed_lis_ibs_h3','seed_lis_ibs',NULL,'Sintra university residence','Iscte',
   'New residence at Portela de Sintra, about 5 minutes'' walk from the train station; mainly useful for Iscte''s Sintra campus. Opening in stages until December 2026, fully running from the second semester of 2026/27.',
   '{}','197 single rooms with private bathroom; a kitchenette shared by every two rooms','https://www.iscte-iul.pt/study-8020/student-accommodation'),
  ('seed_lis_iseg_h1','seed_lis_iseg',NULL,'Universidade de Lisboa residences','SASULisboa (Universidade de Lisboa student services)',
   'Twelve student residences across Lisbon for ULisboa students who have moved away from home; scholarship holders get priority. Exchange students are not mentioned, so ask alojamento@sas.ulisboa.pt.',
   '{BACHELOR,MASTER,PHD}','Single and double rooms, adapted rooms, a few double apartments','https://www.sas.ulisboa.pt/introducao-ao-alojamento')
) AS v("id","universityId","campusId","name","provider","description","audiences","roomTypes","sourceUrl")
WHERE EXISTS (SELECT 1 FROM "University" u WHERE u."id" = v."universityId")
ON CONFLICT ("id") DO NOTHING;

INSERT INTO "HousingDeadline" ("id","housingId","intake","audience","note","updatedAt")
SELECT 'seed_lis_iseg_h1_d1','seed_lis_iseg_h1','Academic year 2027/28','ALL',
  'Current residents re-apply in July. Dates for new applications are announced later and depend on free places (the 2026/27 round opened on 27 August 2026).',NOW()
WHERE EXISTS (SELECT 1 FROM "UniversityHousing" h WHERE h."id" = 'seed_lis_iseg_h1')
ON CONFLICT ("id") DO NOTHING;
