import { type Placement } from "@/types";

type PlacementsSectionProps = {
  placement: Placement;
};

export function PlacementsSection({ placement }: PlacementsSectionProps) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--foreground)]">Placements</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl bg-[var(--surface-elevated)] p-4">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Average Package</p>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{placement.averagePackage}</p>
        </div>
        <div className="rounded-2xl bg-[var(--surface-elevated)] p-4">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Highest Package</p>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{placement.highestPackage}</p>
        </div>
        <div className="rounded-2xl bg-[var(--surface-elevated)] p-4">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Placement Percentage</p>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{placement.placementPercentage}</p>
        </div>
        <div className="rounded-2xl bg-[var(--surface-elevated)] p-4">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Total Recruiters</p>
          <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">{placement.totalRecruiters}</p>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 sm:col-span-2 xl:col-span-3">
          <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Top Recruiters</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {placement.topRecruiters.map((recruiter) => (
              <span
                key={recruiter}
                className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-sm text-[var(--foreground)]"
              >
                {recruiter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
