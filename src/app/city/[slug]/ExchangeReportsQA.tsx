"use client";

import { useState } from "react";
import {
  getReportCount,
  getSourcesFor,
  type ExchangeReportsData,
} from "@/lib/exchangeReports";

export default function ExchangeReportsQA({ data }: { data: ExchangeReportsData }) {
  const [universityId, setUniversityId] = useState("all");
  const [questionId, setQuestionId] = useState<string | null>(null);
  const [showSources, setShowSources] = useState(false);

  const university = data.universities.find((u) => u.id === universityId)!;
  const answer = questionId ? data.answers[universityId][questionId] : null;
  const sources = getSourcesFor(data, universityId);

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          Prototype — early preview
        </span>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Ask past HSG exchange students
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Answers below are drawn from real, open-access HSG exchange
          experience reports for {data.cityLabel} — not a live chatbot yet,
          just a preview of how this could work. Pick a university and a
          question.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Filter by host university
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.universities.map((u) => (
              <button
                key={u.id}
                type="button"
                onClick={() => {
                  setUniversityId(u.id);
                  setQuestionId(null);
                }}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
                  universityId === u.id
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {u.name}
                <span
                  className={
                    universityId === u.id ? "ml-1.5 text-blue-100" : "ml-1.5 text-slate-400"
                  }
                >
                  ({getReportCount(data, u.id)})
                </span>
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs font-medium uppercase tracking-wide text-slate-500">
            Ask a question
          </p>
          <div className="mt-2 flex flex-col gap-2">
            {data.questions.map((q) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setQuestionId(q.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                  questionId === q.id
                    ? "border-blue-600 bg-blue-50 text-blue-900"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                {q.question}
              </button>
            ))}
          </div>

          {answer && (
            <div className="animate-zoom-in-fade mt-6 rounded-xl bg-blue-50/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
                Answer — based on {getReportCount(data, universityId)} report
                {getReportCount(data, universityId) === 1 ? "" : "s"} from {university.name}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-800">{answer}</p>
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowSources((v) => !v)}
            className="mt-6 text-xs font-semibold text-blue-600 hover:underline"
          >
            {showSources ? "Hide sources" : "Show sources"}
          </button>
          {showSources && (
            <ul className="mt-3 space-y-1.5 text-xs text-slate-500">
              {sources.map((s) => (
                <li key={s.author}>
                  {s.author} — {s.university}, {s.semester}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
