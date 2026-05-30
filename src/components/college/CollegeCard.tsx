"use client";

import Link from "next/link";
import { useState } from "react";

import { useAuth } from "@/context/AuthContext";
import { useCompare } from "@/context/CompareContext";
import { useSavedItems } from "@/context/SavedItemsContext";
import { type College } from "@/types";

type CollegeCardProps = {
  college: College;
};

export function CollegeCard({ college }: CollegeCardProps) {
  const { addCollegeById, selectedCollegeIds } = useCompare();
  const { isGuest, openAuthPrompt } = useAuth();
  const { toggleSavedCollege, isSavedCollege } = useSavedItems();
  const [feedback, setFeedback] = useState<string | null>(null);
  const isSelected = selectedCollegeIds.includes(college.id);
  const isSaved = isSavedCollege(college.id);

  const handleSave = () => {
    const result = toggleSavedCollege(college.id);
    if (result.message) {
      setFeedback(result.message);
      openAuthPrompt();
      return;
    }
    setFeedback(result.saved ? "Saved to favorites." : "Removed from favorites.");
  };

  return (
    <article className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link href={`/colleges/${college.id}`} className="focus:outline-none">
              <h3 className="text-lg font-semibold text-[var(--card-foreground)] transition group-hover:text-[var(--primary)]">
                {college.name}
              </h3>
            </Link>
            <p className="mt-1 text-sm text-[var(--muted)]">{college.location}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--muted)]">{college.state}</p>
          </div>
          <div className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-sm font-semibold text-[var(--foreground)]">
            {college.rating.toFixed(1)}
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-[var(--muted)]">{college.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {college.availableCourses.slice(0, 4).map((course) => (
            <span
              key={course}
              className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-xs font-medium text-[var(--muted)]"
            >
              {course}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-[var(--muted)]">Annual Fees</span>
          <span className="font-semibold text-[var(--foreground)]">
            {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(college.fees)}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <button
            className={[
              "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition",
              isSelected
                ? "bg-[var(--surface-elevated)] text-[var(--foreground)]"
                : "bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-95"
            ].join(" ")}
            onClick={() => addCollegeById(college.id)}
            type="button"
          >
            {isSelected ? "Added" : "+ Compare"}
          </button>
          <button
            className={[
              "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition",
              isSaved
                ? "border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--foreground)]"
                : "border border-[var(--border)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
            ].join(" ")}
            onClick={handleSave}
            type="button"
          >
            {isSaved ? "Saved" : "Save"}
          </button>
          <Link
            className="text-sm font-medium text-[var(--primary)] transition hover:opacity-80"
            href={`/colleges/${college.id}`}
          >
            View Details
          </Link>
        </div>

        {feedback ? <p className="mt-3 text-xs text-[var(--muted)]">{feedback}</p> : null}
      </article>
  );
}
