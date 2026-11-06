import type { StudyField } from "@/generated/prisma/enums";

/** Display names for StudyField, shared by the admin form and the city pages. */
export const studyFieldLabels: Record<StudyField, string> = {
  BUSINESS: "Business",
  ECONOMICS: "Economics",
  COMPUTER_SCIENCE: "Computer science",
  ENGINEERING: "Engineering",
  LAW: "Law",
  MEDICINE: "Medicine",
  NATURAL_SCIENCES: "Natural sciences",
  SOCIAL_SCIENCES: "Social sciences",
  HUMANITIES: "Humanities",
  ARTS_DESIGN: "Arts & design",
  ARCHITECTURE: "Architecture",
};
