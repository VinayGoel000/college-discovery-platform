"use client";

import { useMemo, useState } from "react";

import { FeesSort } from "@/components/college/FeesSort";
import { RatingSort } from "@/components/college/RatingSort";
import { StateFilter } from "@/components/college/StateFilter";
import { PredictorEmptyState } from "@/components/predictor/PredictorEmptyState";
import { PredictorForm, type PredictorFormValues } from "@/components/predictor/PredictorForm";
import { PredictorResults } from "@/components/predictor/PredictorResults";
import { defaultCollegeFilters, type CollegeFiltersState } from "@/lib/collegeFilters";
import { type PredictorExam } from "@/lib/predictorLogic";
import { predictColleges } from "@/services/predictorService";

type PredictorState = PredictorFormValues & {
  filters: CollegeFiltersState;
};

export default function PredictorPage() {
  const [state, setState] = useState<PredictorState>({
    exam: "None" as PredictorExam,
    rank: "",
    filters: defaultCollegeFilters
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const predictedResults = useMemo(() => {
    const rank = Number(state.rank);

    if (!submitted || state.exam === "None" || !Number.isFinite(rank) || rank <= 0) {
      return [];
    }

    const predicted = predictColleges({ exam: state.exam, rank });

    const filtered = predicted.filter((college) => {
      if (state.filters.states.length > 0 && !state.filters.states.includes(college.state)) {
        return false;
      }

      return true;
    });

    return [...filtered].sort((left, right) => {
      if (state.filters.feesSort !== "default") {
        const feeDelta =
          state.filters.feesSort === "asc" ? left.fees - right.fees : right.fees - left.fees;
        if (feeDelta !== 0) {
          return feeDelta;
        }
      }

      if (state.filters.ratingSort !== "default") {
        const ratingDelta =
          state.filters.ratingSort === "asc"
            ? left.rating - right.rating
            : right.rating - left.rating;
        if (ratingDelta !== 0) {
          return ratingDelta;
        }
      }

      return left.name.localeCompare(right.name);
    });
  }, [state.exam, state.filters, state.rank, submitted]);

  const handleSubmit = () => {
    if (state.exam === "None") {
      setError("Please select an exam.");
      setSubmitted(false);
      return;
    }

    if (state.rank.trim().length === 0) {
      setError("Please enter your rank.");
      setSubmitted(false);
      return;
    }

    const rank = Number(state.rank);
    if (!Number.isFinite(rank) || rank <= 0) {
      setError("Please enter a valid rank.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <PredictorForm
          error={error}
          onChange={(values) => setState((current) => ({ ...current, ...values }))}
          onSubmit={handleSubmit}
          values={{ exam: state.exam, rank: state.rank }}
        />

        {submitted ? (
          predictedResults.length === 0 ? (
            <PredictorEmptyState
              description="Try a different exam or rank. You can also reset the filters and browse all colleges."
              title="No colleges found for your rank and exam."
            />
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm lg:grid-cols-[minmax(0,1fr)_220px_220px]">
                <StateFilter
                  onChange={(states) =>
                    setState((current) => ({ ...current, filters: { ...current.filters, states } }))
                  }
                  value={state.filters.states}
                />
                <FeesSort
                  onChange={(feesSort) =>
                    setState((current) => ({ ...current, filters: { ...current.filters, feesSort } }))
                  }
                  value={state.filters.feesSort}
                />
                <RatingSort
                  onChange={(ratingSort) =>
                    setState((current) => ({ ...current, filters: { ...current.filters, ratingSort } }))
                  }
                  value={state.filters.ratingSort}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-semibold text-[var(--foreground)]">Predicted Colleges</h2>
                <button
                  className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--border)] px-4 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
                  onClick={() =>
                    setState((current) => ({
                      ...current,
                      filters: defaultCollegeFilters
                    }))
                  }
                  type="button"
                >
                  Reset Filters
                </button>
              </div>

              <PredictorResults results={predictedResults} />
            </div>
          )
        ) : null}
      </div>
    </div>
  );
}
