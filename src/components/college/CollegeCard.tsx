import { type College } from "@/types";
import Link from "next/link";

type CollegeCardProps = {
  college: College;
};

export function CollegeCard({ college }: CollegeCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Link href={`/colleges/${college.id}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{college.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{college.location}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
              {college.state}
            </p>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
            {college.rating.toFixed(1)}
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{college.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {college.availableCourses.slice(0, 4).map((course) => (
            <span key={course} className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {course}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-slate-500">Annual Fees</span>
          <span className="font-semibold text-slate-900">
            {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(college.fees)}
          </span>
        </div>
      </Link>
    </article>
  );
}
