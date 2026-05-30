"use client";

type CollegeSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CollegeSearchBar({ value, onChange }: CollegeSearchBarProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-[var(--foreground)]" htmlFor="college-search">
        Search by college name or course
      </label>
      <input
        id="college-search"
        className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--input)] px-4 text-sm text-[var(--input-foreground)] outline-none transition placeholder:text-[var(--placeholder)] focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--ring)]"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try IIT Delhi, NIT Trichy, BTech, MBA..."
        type="search"
        value={value}
      />
    </div>
  );
}
