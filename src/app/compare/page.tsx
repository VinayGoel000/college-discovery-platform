"use client";

import Link from "next/link";

import { CompareEmptyState } from "@/components/compare/CompareEmptyState";
import { CompareTable } from "@/components/compare/CompareTable";
import { useCompare } from "@/context/CompareContext";

function ComparePageContent() {
  const { selectedColleges, clearComparison } = useCompare();

  if (selectedColleges.length === 0) {
    return <CompareEmptyState />;
  }

  if (selectedColleges.length === 1) {
    return (
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">
          Please select at least 2 colleges to compare.
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
            href="/colleges"
          >
            Browse Colleges
          </Link>
          <button
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
            onClick={clearComparison}
            type="button"
          >
            Clear Selection
          </button>
        </div>
      </div>
    );
  }

  if (selectedColleges.length > 3) {
    return (
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-[var(--foreground)]">
          You can compare a maximum of 3 colleges.
        </h1>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-[var(--foreground)]">Compare Colleges</h1>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Compare colleges side by side to evaluate courses, placements, fees, and overall value.
          </p>
        </div>
        <button
          className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
          onClick={clearComparison}
          type="button"
        >
          Clear Comparison
        </button>
      </div>
      <CompareTable colleges={selectedColleges} />
    </div>
  );
}

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <ComparePageContent />
    </div>
  );
}
