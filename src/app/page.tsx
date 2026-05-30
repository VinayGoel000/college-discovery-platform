"use client";

import Link from "next/link";
import { useState } from "react";

import { AuthEntryModal } from "@/components/auth/AuthEntryModal";
import { mockColleges } from "@/data/mockColleges";

const featuredIds = ["iit-delhi", "iit-bombay", "iit-kanpur", "iit-madras", "nit-trichy", "vit-vellore", "srm-chennai", "amity-noida"];

const featureCards = [
  { icon: "🏫", title: "Discover Colleges", description: "Explore colleges across India with a curated, premium browsing experience." },
  { icon: "⚖", title: "Compare Colleges", description: "Evaluate fees, ratings, courses, and placement signals side by side." },
  { icon: "🎯", title: "Predict Admission Chances", description: "Use the predictor to understand where your profile may stand." },
  { icon: "💬", title: "College Discussions", description: "Read real conversations around admissions, campus life, and placements." },
  { icon: "📚", title: "Courses & Placements", description: "Inspect programs, outcomes, and the academic fit for each college." },
  { icon: "⭐", title: "Save Favorites", description: "Save colleges and comparisons for a personalized short list." }
];

export default function HomePage() {
  const [authOpen, setAuthOpen] = useState(false);

  const featuredColleges = featuredIds
    .map((id) => mockColleges.find((college) => college.id === id))
    .filter((college): college is (typeof mockColleges)[number] => Boolean(college));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_35%),linear-gradient(135deg,#0f172a_0%,#111827_45%,#1f2937_100%)] px-6 py-16 text-white shadow-[0_30px_90px_rgba(15,23,42,0.35)] sm:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(300px,0.95fr)] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">College Discovery Platform</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
              Discover Your Perfect College
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore colleges, compare universities, predict admissions, and connect with students.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="inline-flex h-12 items-center justify-center rounded-full bg-amber-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300" href="/register">
                Register
              </Link>
              <Link className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-white transition hover:bg-white/10" href="/login">
                Sign In
              </Link>
              <button
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 px-5 text-sm font-semibold text-white transition hover:bg-slate-950/55"
                onClick={() => setAuthOpen(true)}
                type="button"
              >
                Continue as Guest
              </button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {featuredColleges.slice(0, 4).map((college) => (
              <article key={college?.id} className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur">
                <p className="text-sm font-semibold text-white">{college?.name}</p>
                <p className="mt-2 text-sm text-slate-300">{college?.location}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-slate-300">Rating</span>
                  <span className="font-semibold text-amber-300">{college?.rating.toFixed(1)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-slate-300">Fees</span>
                  <span className="font-semibold text-white">
                    {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(college?.fees ?? 0)}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Featured Colleges</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Thousands of colleges can be discovered here through a premium, searchable experience.
            </p>
          </div>
          <Link className="text-sm font-semibold text-[var(--primary)] hover:underline" href="/colleges">
            Browse all colleges
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredColleges.map((college) => (
            <Link
              key={college?.id}
              className="group rounded-3xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              href={`/colleges/${college?.id}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-[var(--card-foreground)] transition group-hover:text-[var(--primary)]">
                    {college?.name}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{college?.location}</p>
                </div>
                <div className="rounded-full bg-[var(--surface-elevated)] px-3 py-1 text-sm font-semibold text-[var(--foreground)]">
                  {college?.rating.toFixed(1)}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-[var(--muted)]">Fees</span>
                <span className="font-semibold text-[var(--foreground)]">
                  {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(college?.fees ?? 0)}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--muted)]">
                Click through for more details, comparisons, and discussion insights.
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-[var(--foreground)]">Platform Features</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface-elevated)] text-xl">
                  {feature.icon}
                </span>
                <div>
                  <p className="text-base font-semibold text-[var(--foreground)]">{feature.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AuthEntryModal
        description="Create an account or continue as a guest to explore the platform."
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        title="Welcome to College Discovery Platform"
      />
    </div>
  );
}
