import { type College } from "@/types";
import Link from "next/link";

type CollegeCardProps = {
  college: College;
};

export function CollegeCard({ college }: CollegeCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-soft">
      <Link href={`/colleges/${college.id}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{college.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{college.location}</p>
          </div>
          <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
            {college.rating.toFixed(1)}
          </div>
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-600">{college.description}</p>
        <div className="mt-5 flex items-center justify-between text-sm">
          <span className="text-slate-500">Fees</span>
          <span className="font-semibold text-slate-900">{college.fees}</span>
        </div>
      </Link>
    </article>
  );
}
