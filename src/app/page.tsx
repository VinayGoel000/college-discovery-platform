import Link from "next/link";

import { CollegeCard } from "@/components/college/CollegeCard";
import { mockColleges } from "@/data/mockColleges";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-slate-50 px-6 py-16 shadow-sm sm:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
            College Discovery Platform
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Find the right college with clarity and confidence.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore curated colleges, compare essentials, and move from discovery to decision
            with a foundation designed for scale.
          </p>

          <Link
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-slate-950 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            href="/colleges"
          >
            Browse Colleges
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Featured Colleges</h2>
            <p className="mt-2 text-sm text-slate-600">
              A small preview from the same reusable mock dataset powering the college page.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mockColleges.slice(0, 3).map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>
    </div>
  );
}
