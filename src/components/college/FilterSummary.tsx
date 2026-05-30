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
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2 text-sm">
          {filters.search.trim().length > 0 ? (
            <span className="rounded-full bg-sky-50 px-3 py-1.5 font-medium text-sky-700">
              Search: {filters.search.trim()}
            </span>
          ) : null}
          {filters.states.length > 0 ? (
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 font-medium text-emerald-700">
              States: {filters.states.join(", ")}
            </span>
          ) : null}
          {filters.feesSort !== "default" ? (
            <span className="rounded-full bg-amber-50 px-3 py-1.5 font-medium text-amber-700">
              Fees: {sortLabel(filters.feesSort, "fees")}
            </span>
          ) : null}
          {filters.ratingSort !== "default" ? (
            <span className="rounded-full bg-violet-50 px-3 py-1.5 font-medium text-violet-700">
              Rating: {sortLabel(filters.ratingSort, "rating")}
            </span>
          ) : null}
        </div>
        <button
          className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          onClick={onReset}
          type="button"
        >
          Reset All Filters
        </button>
      </div>
    </div>
  );
}
