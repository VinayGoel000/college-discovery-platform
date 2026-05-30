"use client";

import { INDIAN_STATES_AND_UTS } from "@/lib/collegeFilters";

type StateFilterProps = {
  value: string[];
  onChange: (value: string[]) => void;
};

export function StateFilter({ value, onChange }: StateFilterProps) {
  const selectedCount = value.length;

  const toggleState = (state: string) => {
    if (state === "__all__") {
      onChange([]);
      return;
    }

    onChange(
      value.includes(state)
        ? value.filter((item) => item !== state)
        : [...value, state]
    );
  };

  return (
    <details className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <summary className="cursor-pointer list-none text-sm font-semibold text-[var(--foreground)]">
        States and UTs
        <span className="ml-2 rounded-full bg-[var(--surface-elevated)] px-2 py-0.5 text-xs font-medium text-[var(--muted)]">
          {selectedCount === 0 ? "All States" : `${selectedCount} selected`}
        </span>
      </summary>

      <div className="mt-4 max-h-72 overflow-auto pr-1">
        <label className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm hover:bg-[var(--surface-elevated)]">
          <input
            checked={value.length === 0}
            onChange={() => toggleState("__all__")}
            type="radio"
            name="state-filter"
          />
          <span className="font-medium text-[var(--foreground)]">All States</span>
        </label>

        <div className="mt-2 grid gap-1 sm:grid-cols-2">
          {INDIAN_STATES_AND_UTS.map((state) => (
            <label
              key={state}
              className="flex cursor-pointer items-center gap-3 rounded-xl px-2 py-2 text-sm hover:bg-[var(--surface-elevated)]"
            >
              <input
                checked={value.includes(state)}
                onChange={() => toggleState(state)}
                type="checkbox"
              />
              <span className="text-[var(--foreground)]">{state}</span>
            </label>
          ))}
        </div>
      </div>
    </details>
  );
}
