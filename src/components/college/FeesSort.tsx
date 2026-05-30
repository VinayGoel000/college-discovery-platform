"use client";

import { type CollegeSortDirection } from "@/lib/collegeFilters";

type FeesSortProps = {
  value: CollegeSortDirection;
  onChange: (value: CollegeSortDirection) => void;
};

export function FeesSort({ value, onChange }: FeesSortProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700" htmlFor="fees-sort">
        Fees Sort
      </label>
      <select
        id="fees-sort"
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
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
