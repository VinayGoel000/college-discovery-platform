import { type CollegeDetail } from "@/types";

type CollegeOverviewProps = {
  college: CollegeDetail;
};

const overviewMeta = [
  { label: "Established Year" },
  { label: "Ownership Type" }
] as const;

export function CollegeOverview({ college }: CollegeOverviewProps) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft">
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            alt={college.name}
            className="h-64 w-full object-cover lg:h-full"
            src={college.imageUrl}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">{college.name}</h1>
              <p className="mt-2 text-sm text-slate-600">{college.location}</p>
            </div>
            <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              {college.rating.toFixed(1)} / 5
            </div>
          </div>

          <p className="text-sm leading-7 text-slate-600">{college.description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Annual Fees</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(college.fees)}
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">Website</p>
              <a
                className="mt-2 block break-all text-sm font-semibold text-blue-700 hover:underline"
                href={college.websiteUrl}
                rel="noreferrer"
                target="_blank"
              >
                {college.websiteUrl}
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-[var(--border)] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{overviewMeta[0].label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{college.establishedYear}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{overviewMeta[1].label}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">{college.ownershipType}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
