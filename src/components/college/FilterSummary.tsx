"use client";

import { type CollegeFiltersState, type CollegeSortDirection } from "@/lib/collegeFilters";

type FilterSummaryProps = {
  filters: CollegeFiltersState;
  onReset: () => void;
};

function sortLabel(value: CollegeSortDirection, kind: "fees" | "rating") {
  if (value === "asc") {
    return `${kind === "fees" ? "Fees" : "Rating"} Low to High`;
  }

  if (value === "desc") {
    return `${kind === "fees" ? "Fees" : "Rating"} High to Low`;
  }

  return "Default";
}

export function FilterSummary({ filters, onReset }: FilterSummaryProps) {
  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.states.length > 0 ||
    filters.feesSort !== "default" ||
    filters.ratingSort !== "default";

  if (!hasActiveFilters) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2 text-sm">
          {filters.search.trim().length > 0 ? (
            <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1.5 font-medium text-[var(--foreground)]">
              Search: {filters.search.trim()}
            </span>
          ) : null}
          {filters.states.length > 0 ? (
            <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1.5 font-medium text-[var(--foreground)]">
              States: {filters.states.join(", ")}
            </span>
          ) : null}
          {filters.feesSort !== "default" ? (
            <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1.5 font-medium text-[var(--foreground)]">
              Fees: {sortLabel(filters.feesSort, "fees")}
            </span>
          ) : null}
          {filters.ratingSort !== "default" ? (
            <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1.5 font-medium text-[var(--foreground)]">
              Rating: {sortLabel(filters.ratingSort, "rating")}
            </span>
          ) : null}
        </div>
        <button
          className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--border)] px-4 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
          onClick={onReset}
          type="button"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
}
