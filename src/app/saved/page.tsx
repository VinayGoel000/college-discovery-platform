"use client";

import Link from "next/link";

import { useSavedItems } from "@/context/SavedItemsContext";

export default function SavedPage() {
  const { savedColleges, savedComparisons } = useSavedItems();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
        <h1 className="text-3xl font-semibold text-[var(--foreground)]">Saved Items</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">
          Saved colleges and saved comparisons are stored locally for now.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Saved Colleges</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{savedColleges.length} college(s) saved.</p>
            <div className="mt-4 space-y-3">
              {savedColleges.length === 0 ? (
                <p className="text-sm text-[var(--muted)]">No saved colleges yet.</p>
              ) : (
                savedColleges.map((collegeId) => (
                  <div key={collegeId} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]">
                    {collegeId}
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">Saved Comparisons</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">{savedComparisons.length} comparison(s) saved.</p>
            <div className="mt-4 space-y-3">
              {savedComparisons.length === 0 ? (
                <p className="text-sm text-[var(--muted)]">No saved comparisons yet.</p>
              ) : (
                savedComparisons.map((comparison, index) => (
                  <div key={`${comparison.join("-")}-${index}`} className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)]">
                    {comparison.join(" vs ")}
                  </div>
                ))
              )}
            </div>
          </section>
        </div>

        <div className="mt-6">
          <Link className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95" href="/colleges">
            Browse Colleges
          </Link>
        </div>
      </div>
    </div>
  );
}
