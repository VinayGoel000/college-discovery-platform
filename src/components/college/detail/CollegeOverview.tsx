import { type CollegeDetail } from "@/types";
import Link from "next/link";

type CollegeOverviewProps = {
  college: CollegeDetail;
};

const overviewMeta = [
  { label: "Established Year" },
  { label: "Ownership Type" }
] as const;

export function CollegeOverview({ college }: CollegeOverviewProps) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="overflow-hidden rounded-2xl bg-[var(--surface-elevated)]">
          <img
            alt={college.name}
            className="h-72 w-full object-cover lg:h-full"
            src={college.imageUrl}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-[var(--foreground)]">{college.name}</h1>
              <p className="mt-2 text-sm text-[var(--muted)]">{college.location}</p>
              <p className="mt-1 text-sm font-medium text-[var(--muted)]">{college.state}</p>
            </div>
            <div className="rounded-full bg-[var(--surface-elevated)] px-4 py-2 text-sm font-semibold text-[var(--foreground)]">
              {college.rating.toFixed(1)} / 5
            </div>
          </div>

          <p className="text-sm leading-7 text-[var(--muted)]">{college.description}</p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--surface-elevated)] p-4">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Annual Fees</p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">
                {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(college.fees)}
              </p>
            </div>
            <div className="rounded-xl bg-[var(--surface-elevated)] p-4">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Website</p>
              <a
                className="mt-2 block break-all text-sm font-semibold text-[var(--primary)] hover:underline"
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
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">{overviewMeta[0].label}</p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{college.establishedYear}</p>
            </div>
            <div className="rounded-xl border border-[var(--border)] p-4">
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">{overviewMeta[1].label}</p>
              <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{college.ownershipType}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
