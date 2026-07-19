export type ExchangeUniversity = {
  id: string;
  name: string;
};

export type ExchangeQuestion = {
  id: string;
  question: string;
};

export type ExchangeSource = {
  author: string;
  universityId: string;
  university: string;
  semester: string;
};

export type ExchangeReportsData = {
  cityLabel: string;
  universities: ExchangeUniversity[];
  questions: ExchangeQuestion[];
  answers: Record<string, Record<string, string>>;
  sources: ExchangeSource[];
};

export function getReportCount(data: ExchangeReportsData, universityId: string): number {
  return universityId === "all"
    ? data.sources.length
    : data.sources.filter((s) => s.universityId === universityId).length;
}

export function getSourcesFor(data: ExchangeReportsData, universityId: string): ExchangeSource[] {
  return universityId === "all"
    ? data.sources
    : data.sources.filter((s) => s.universityId === universityId);
}
