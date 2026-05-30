import { type Placement } from "@/types";

type PlacementsSectionProps = {
  placement: Placement;
};

export function PlacementsSection({ placement }: PlacementsSectionProps) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-slate-900">Placements</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Average Package</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{placement.averagePackage}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Highest Package</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{placement.highestPackage}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Placement Percentage</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{placement.placementPercentage}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">Total Recruiters</p>
          <p className="mt-2 text-lg font-semibold text-slate-900">{placement.totalRecruiters}</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 sm:col-span-2 xl:col-span-3">
          <p className="text-xs uppercase tracking-wide text-slate-500">Top Recruiters</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {placement.topRecruiters.map((recruiter) => (
              <span
                key={recruiter}
                className="rounded-full border border-[var(--border)] bg-white px-3 py-1 text-sm text-slate-700"
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
