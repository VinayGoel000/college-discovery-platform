"use client";

import { type CollegeSortDirection } from "@/lib/collegeFilters";

type RatingSortProps = {
  value: CollegeSortDirection;
  onChange: (value: CollegeSortDirection) => void;
};

export function RatingSort({ value, onChange }: RatingSortProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--foreground)]" htmlFor="rating-sort">
        Rating Sort
      </label>
      <select
        id="rating-sort"
        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--input)] px-4 text-sm text-[var(--input-foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--ring)]"
        onChange={(event) => onChange(event.target.value as CollegeSortDirection)}
        value={value}
      >
        <option value="default">Default</option>
        <option value="asc">Rating Low to High</option>
        <option value="desc">Rating High to Low</option>
      </select>
    </div>
  );
}
