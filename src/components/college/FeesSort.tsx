"use client";

import { type CollegeSortDirection } from "@/lib/collegeFilters";

type FeesSortProps = {
  value: CollegeSortDirection;
  onChange: (value: CollegeSortDirection) => void;
};

export function FeesSort({ value, onChange }: FeesSortProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--foreground)]" htmlFor="fees-sort">
        Fees Sort
      </label>
      <select
        id="fees-sort"
        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--input)] px-4 text-sm text-[var(--input-foreground)] outline-none transition focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--ring)]"
        onChange={(event) => onChange(event.target.value as CollegeSortDirection)}
        value={value}
      >
        <option value="default">Default</option>
        <option value="asc">Fees Low to High</option>
        <option value="desc">Fees High to Low</option>
      </select>
    </div>
  );
}
