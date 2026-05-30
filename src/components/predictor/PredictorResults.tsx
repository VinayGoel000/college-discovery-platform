"use client";

import Link from "next/link";

import { useCompare } from "@/context/CompareContext";
import { type College } from "@/types";
import { type PredictorResult } from "@/lib/predictorLogic";

type PredictorResultsProps = {
  results: PredictorResult[];
};

const formatMoney = (value: number) => `₹${new Intl.NumberFormat("en-IN").format(value)}`;

function ResultCard({ result, onCompare }: { result: PredictorResult; onCompare: () => void }) {
  return (
    <article className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-[var(--foreground)]">{result.name}</h3>
          <p className="mt-1 text-sm text-[var(--muted)]">{result.location}</p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">{result.state}</p>
        </div>
        <div className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-sm font-semibold text-[var(--foreground)]">
          {result.rating.toFixed(1)}
        </div>
      </div>

      <div className="mt-4 grid gap-3 text-sm text-[var(--muted)]">
        <div className="flex items-center justify-between gap-4">
          <span>Fees</span>
          <span className="font-semibold text-[var(--foreground)]">{formatMoney(result.fees)}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Accepted Exam</span>
          <span className="font-semibold text-[var(--foreground)]">{result.matchedExam}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Closing Rank</span>
          <span className="font-semibold text-[var(--foreground)]">{result.closingRank}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span>Chance Category</span>
          <span className="font-semibold text-[var(--primary)]">{result.chance}</span>
        </div>
      </div>

        <div className="mt-5 flex flex-wrap gap-3">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--border)] px-4 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
          href={`/colleges/${result.id}`}
        >
          View Details
        </Link>
        <button
          className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--primary)] px-4 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
          onClick={onCompare}
          type="button"
        >
          Compare
        </button>
      </div>
    </article>
  );
}

export function PredictorResults({ results }: PredictorResultsProps) {
  const { addCollegeById } = useCompare();

  return (
    <div className="space-y-8">
      {(["High Chance", "Moderate Chance", "Low Chance"] as const).map((section) => {
        const sectionResults = results.filter((result) => result.chance === section);

        if (sectionResults.length === 0) {
          return null;
        }

        return (
          <section key={section} className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{section}</h2>
              <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
                {sectionResults.length} colleges
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sectionResults.map((result) => (
                <ResultCard
                  key={result.id}
                  onCompare={() => addCollegeById(result.id)}
                  result={result}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
