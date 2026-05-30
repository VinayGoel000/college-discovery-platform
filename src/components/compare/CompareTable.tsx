import { type CollegeDetail } from "@/types";

type CompareTableProps = {
  colleges: CollegeDetail[];
};

const formatMoney = (value: number) => new Intl.NumberFormat("en-IN").format(value);

const comparisonRows = [
  {
    label: "College Name",
    getValue: (college: CollegeDetail) => college.name
  },
  {
    label: "Location",
    getValue: (college: CollegeDetail) => college.location
  },
  {
    label: "State",
    getValue: (college: CollegeDetail) => college.state
  },
  {
    label: "Rating",
    getValue: (college: CollegeDetail) => college.rating.toFixed(1)
  },
  {
    label: "Fees",
    getValue: (college: CollegeDetail) => `₹${formatMoney(college.fees)}`
  },
  {
    label: "Established Year",
    getValue: (college: CollegeDetail) => String(college.establishedYear)
  },
  {
    label: "Ownership Type",
    getValue: (college: CollegeDetail) => college.ownershipType
  },
  {
    label: "Total Courses",
    getValue: (college: CollegeDetail) => String(college.availableCourses.length)
  },
  {
    label: "Placement %",
    getValue: (college: CollegeDetail) => college.placement.placementPercentage
  },
  {
    label: "Average Package",
    getValue: (college: CollegeDetail) => college.placement.averagePackage
  },
  {
    label: "Highest Package",
    getValue: (college: CollegeDetail) => college.placement.highestPackage
  }
] as const;

export function CompareTable({ colleges }: CompareTableProps) {
  return (
    <div className="space-y-6">
      <div className="hidden overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm lg:block">
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface-elevated)]">
                <th className="w-56 px-5 py-4 text-sm font-semibold text-[var(--foreground)]">Feature</th>
                {colleges.map((college) => (
                  <th key={college.id} className="px-5 py-4 text-sm font-semibold text-[var(--foreground)]">
                    {college.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-[var(--border)] last:border-b-0">
                  <td className="px-5 py-4 text-sm font-medium text-[var(--muted)]">{row.label}</td>
                  {colleges.map((college) => (
                    <td key={`${college.id}-${row.label}`} className="px-5 py-4 text-sm text-[var(--foreground)]">
                      {row.getValue(college)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-4 lg:hidden">
        {colleges.map((college) => (
          <article
            key={college.id}
            className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-[var(--foreground)]">{college.name}</h2>
            <div className="mt-4 grid gap-3 text-sm">
              {comparisonRows.map((row) => (
                <div key={`${college.id}-${row.label}`} className="flex items-center justify-between gap-4 border-b border-dashed border-[var(--border)] pb-2 last:border-b-0 last:pb-0">
                  <span className="text-[var(--muted)]">{row.label}</span>
                  <span className="text-right font-medium text-[var(--foreground)]">{row.getValue(college)}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
