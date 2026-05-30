"use client";

import { useCompare } from "@/context/CompareContext";
import { type CollegeDetail } from "@/types";

type AddToCompareButtonProps = {
  college: CollegeDetail;
};

export function AddToCompareButton({ college }: AddToCompareButtonProps) {
  const { addCollegeById, selectedCollegeIds } = useCompare();
  const isSelected = selectedCollegeIds.includes(college.id);

  return (
    <button
      className={[
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition",
        isSelected
          ? "bg-[var(--surface-elevated)] text-[var(--foreground)]"
          : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95"
      ].join(" ")}
      onClick={() => addCollegeById(college.id)}
      type="button"
    >
      {isSelected ? "Added To Compare" : "+ Add To Compare"}
    </button>
  );
}
