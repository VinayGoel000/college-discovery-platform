"use client";

import { useMemo, useState } from "react";
import { CollegeFilters, type CollegeFilterState } from "@/components/college/CollegeFilters";
import { CollegeList } from "@/components/college/CollegeList";
import { CollegePagination } from "@/components/college/CollegePagination";
import { CollegeSearch } from "@/components/college/CollegeSearch";
import { type College } from "@/types";

const colleges: College[] = [
  {
    id: "c1",
    name: "National Institute of Technology",
    location: "Delhi, India",
    fees: "INR 1.8L / year",
    rating: 4.7,
    description: "A strong engineering-focused institute with a vibrant campus culture."
  },
  {
    id: "c2",
    name: "St. Xavier's College",
    location: "Mumbai, India",
    fees: "INR 1.4L / year",
    rating: 4.5,
    description: "Known for academic depth, campus life, and multidisciplinary learning."
  },
  {
    id: "c3",
    name: "Christ University",
    location: "Bengaluru, India",
    fees: "INR 2.1L / year",
    rating: 4.6,
    description: "Popular for business, arts, and professional programs with modern facilities."
  },
  {
    id: "c4",
    name: "Pune Institute of Computer Technology",
    location: "Pune, India",
    fees: "INR 1.2L / year",
    rating: 4.4,
    description: "Engineering and technology programs with strong industry alignment."
  }
];

export default function CollegesPage() {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<CollegeFilterState>({
    location: "",
    minRating: 0,
    feeRange: "all"
  });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch =
        search.trim().length === 0 ||
        `${college.name} ${college.location}`.toLowerCase().includes(search.toLowerCase());
      const matchesLocation =
        filters.location.trim().length === 0 ||
        college.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesRating = college.rating >= filters.minRating;
      const matchesFeeRange =
        filters.feeRange === "all" ||
        (filters.feeRange === "low" && college.fees.includes("1.")) ||
        (filters.feeRange === "mid" && college.fees.includes("2.")) ||
        (filters.feeRange === "high" && college.fees.includes("3."));

      return matchesSearch && matchesLocation && matchesRating && matchesFeeRange;
    });
  }, [filters.location, filters.minRating, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <header>
          <h1 className="text-3xl font-semibold text-slate-900">College Listing</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            This page is intentionally architecture-first: it uses typed dummy data and prepares
            the component boundaries for future API integration.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-soft">
            <CollegeSearch value={search} onChange={setSearch} />
            <CollegeFilters
              filters={filters}
              onChange={setFilters}
            />
          </aside>

          <section className="space-y-4">
            <CollegeList colleges={filteredColleges} />
            {filteredColleges.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-4 py-10 text-center text-sm text-slate-500">
                No colleges match the current search and filter state.
              </div>
            ) : null}
            <CollegePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
