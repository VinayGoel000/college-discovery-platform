"use client";

type CollegeSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CollegeSearch({ value, onChange }: CollegeSearchProps) {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="college-search">
        Search
      </label>
      <input
        id="college-search"
        className="h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--input)] px-3 text-sm text-[var(--input-foreground)] outline-none transition placeholder:text-[var(--placeholder)] focus:border-[var(--primary)]"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search colleges"
        type="search"
        value={value}
      />
    </div>
  );
}
