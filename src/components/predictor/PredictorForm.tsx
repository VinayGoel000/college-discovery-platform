"use client";

import { type PredictorExam } from "@/lib/predictorLogic";

export type PredictorFormValues = {
  exam: PredictorExam;
  rank: string;
};

type PredictorFormProps = {
  values: PredictorFormValues;
  onChange: (values: PredictorFormValues) => void;
  onSubmit: () => void;
  error?: string;
};

const examOptions: PredictorExam[] = ["None", "JEE Main", "JEE Advanced", "CUET", "NEET", "CAT", "GATE"];

export function PredictorForm({ values, onChange, onSubmit, error }: PredictorFormProps) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
      <div className="mb-5">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">College Predictor</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Enter your exam and rank to see colleges where you have a realistic chance of admission.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[1fr_220px_auto]">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--foreground)]" htmlFor="predictor-exam">
            Exam
          </label>
          <select
            id="predictor-exam"
            className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm text-[var(--foreground)] outline-none focus:border-[var(--primary)]"
            value={values.exam}
            onChange={(event) => onChange({ ...values, exam: event.target.value as PredictorExam })}
          >
            {examOptions.map((exam) => (
              <option key={exam} value={exam}>
                {exam}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-[var(--foreground)]" htmlFor="predictor-rank">
            Rank
          </label>
          <input
            id="predictor-rank"
            type="number"
            min="1"
            placeholder="15000"
            className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
            value={values.rank}
            onChange={(event) => onChange({ ...values, rank: event.target.value })}
          />
        </div>

        <div className="flex items-end">
          <button
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
            onClick={onSubmit}
            type="button"
          >
            Predict Colleges
          </button>
        </div>
      </div>

      {error ? <p className="mt-4 text-sm font-medium text-[var(--primary)]">{error}</p> : null}
    </section>
  );
}
