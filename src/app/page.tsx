import { CollegeCard } from "@/components/college/CollegeCard";
import { type College } from "@/types";

const featuredColleges: College[] = [
  {
    id: "c1",
    name: "National Institute of Technology",
    location: "Delhi, India",
    fees: "INR 1.8L / year",
    rating: 4.7,
    description: "A strong engineering-focused institute with a vibrant campus culture."
  },
  {
    id: "c2",
    name: "St. Xavier's College",
    location: "Mumbai, India",
    fees: "INR 1.4L / year",
    rating: 4.5,
    description: "Known for academic depth, campus life, and multidisciplinary learning."
  },
  {
    id: "c3",
    name: "Christ University",
    location: "Bengaluru, India",
    fees: "INR 2.1L / year",
    rating: 4.6,
    description: "Popular for business, arts, and professional programs with modern facilities."
  }
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-16 shadow-soft sm:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
            College Discovery Platform
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Find the right college with clarity and confidence.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Explore curated colleges, compare essentials, and move from discovery to decision
            with a foundation designed for scale.
          </p>

          <div className="mt-8 flex flex-col gap-3 rounded-xl border border-[var(--border)] bg-slate-50 p-3 sm:flex-row">
            <input
              aria-label="Search colleges"
              className="h-12 flex-1 rounded-lg border border-[var(--border)] bg-white px-4 text-sm outline-none transition focus:border-[var(--primary)]"
              placeholder="Search colleges, locations, or courses"
              type="search"
            />
            <button className="h-12 rounded-lg bg-[var(--primary)] px-5 text-sm font-semibold text-white transition hover:opacity-95">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Featured Colleges</h2>
            <p className="mt-2 text-sm text-slate-600">
              A small set of dummy colleges to establish the visual system.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredColleges.map((college) => (
            <CollegeCard key={college.id} college={college} />
          ))}
        </div>
      </section>
    </div>
  );
}
