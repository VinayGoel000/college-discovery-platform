"use client";

import Link from "next/link";

import { useCompare } from "@/context/CompareContext";

export function CompareSidebar() {
  const { selectedColleges, removeCollege, clearComparison, canCompare } = useCompare();

  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--border)] bg-[var(--surface)] shadow-2xl lg:bottom-6 lg:right-6 lg:inset-x-auto lg:w-80 lg:rounded-3xl lg:border lg:shadow-xl">
      <div className="max-h-72 overflow-y-auto p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[var(--foreground)]">Selected Colleges</h2>
          <button
            className="text-xs font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
            onClick={clearComparison}
            type="button"
          >
            Clear
          </button>
        </div>

        {selectedColleges.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--muted)]">
            Add colleges from listing or detail pages to compare them here.
          </p>
        ) : (
          <div className="mt-4 space-y-2">
            {selectedColleges.map((college) => (
              <div
                key={college.id}
                className="flex items-center justify-between gap-3 rounded-2xl border border-[var(--border)] px-3 py-2 text-sm"
              >
                <span className="font-medium text-[var(--foreground)]">{college.name}</span>
                <button
                  className="text-xs font-semibold text-[var(--primary)]"
                  onClick={() => removeCollege(college.id)}
                  type="button"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4">
          <Link
            aria-disabled={!canCompare}
            className={[
              "inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition",
              canCompare
                ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95"
                : "cursor-not-allowed bg-[var(--surface-elevated)] text-[var(--muted)]"
            ].join(" ")}
            href="/compare"
          >
            Compare Now
          </Link>
        </div>
      </div>
    </aside>
  );
}
