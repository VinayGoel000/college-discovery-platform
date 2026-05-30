"use client";

export type CollegeFilterState = {
  location: string;
  minRating: number;
  feeRange: "all" | "low" | "mid" | "high";
};

type CollegeFiltersProps = {
  filters: CollegeFilterState;
  onChange: (filters: CollegeFilterState) => void;
};

export function CollegeFilters({ filters, onChange }: CollegeFiltersProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="location">
          Location
        </label>
        <input
          id="location"
          className="h-11 w-full rounded-lg border border-[var(--border)] px-3 text-sm outline-none transition focus:border-[var(--primary)]"
          onChange={(event) => onChange({ ...filters, location: event.target.value })}
          placeholder="Filter by location"
          type="text"
          value={filters.location}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="min-rating">
          Minimum Rating
        </label>
        <input
          id="min-rating"
          className="w-full"
          min="0"
          max="5"
          onChange={(event) => onChange({ ...filters, minRating: Number(event.target.value) })}
          type="range"
          value={filters.minRating}
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="fee-range">
          Fee Range
        </label>
        <select
          id="fee-range"
          className="h-11 w-full rounded-lg border border-[var(--border)] px-3 text-sm outline-none transition focus:border-[var(--primary)]"
          onChange={(event) => onChange({ ...filters, feeRange: event.target.value as CollegeFilterState["feeRange"] })}
          value={filters.feeRange}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
