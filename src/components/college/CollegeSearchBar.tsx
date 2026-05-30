"use client";

type CollegeSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function CollegeSearchBar({ value, onChange }: CollegeSearchBarProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-700" htmlFor="college-search">
        Search by college name or course
      </label>
      <input
        id="college-search"
        className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Try IIT Delhi, NIT Trichy, BTech, MBA..."
        type="search"
        value={value}
      />
    </div>
  );
}
