"use client";

import { useMemo, useState } from "react";

import { EmptyState } from "@/components/ui/EmptyState";
import { CollegeCard } from "@/components/college/CollegeCard";
import { CollegeSearchBar } from "@/components/college/CollegeSearchBar";
import { FeesSort } from "@/components/college/FeesSort";
import { FilterSummary } from "@/components/college/FilterSummary";
import { RatingSort } from "@/components/college/RatingSort";
import { StateFilter } from "@/components/college/StateFilter";
import {
  defaultCollegeFilters,
  filterColleges,
  sortColleges,
  type CollegeFiltersState
} from "@/lib/collegeFilters";
import { mockColleges } from "@/data/mockColleges";

export default function CollegesPage() {
  const [filters, setFilters] = useState<CollegeFiltersState>(defaultCollegeFilters);

  const visibleColleges = useMemo(() => {
    const filtered = filterColleges(mockColleges, filters);
    return sortColleges(filtered, filters);
  }, [filters]);

  const resetFilters = () => setFilters(defaultCollegeFilters);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            College Discovery Platform
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            College Search and Filtering System
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Search by college name or course, narrow results by state, and sort by fees or rating
            with a structure that is ready for an API-backed future.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-4 rounded-3xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
            <CollegeSearchBar
              onChange={(search) => setFilters((current) => ({ ...current, search }))}
              value={filters.search}
            />
            <StateFilter
              onChange={(states) => setFilters((current) => ({ ...current, states }))}
              value={filters.states}
            />
            <FeesSort
              onChange={(feesSort) => setFilters((current) => ({ ...current, feesSort }))}
              value={filters.feesSort}
            />
            <RatingSort
              onChange={(ratingSort) => setFilters((current) => ({ ...current, ratingSort }))}
              value={filters.ratingSort}
            />
          </aside>

          <main className="space-y-5">
            <FilterSummary filters={filters} onReset={resetFilters} />

            {visibleColleges.length === 0 ? (
              <EmptyState
                description="Try adjusting your search or filters. You can reset everything and start over in one click."
                title="No colleges match your search criteria."
              />
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {visibleColleges.map((college) => (
                  <CollegeCard key={college.id} college={college} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
