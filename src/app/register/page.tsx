"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid w-full gap-0 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-sm lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-8 sm:p-10">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="register-name">
                Full Name
              </label>
              <input
                id="register-name"
                className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="register-email">
                Email
              </label>
              <input
                id="register-email"
                className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="register-password">
                Password
              </label>
              <input
                id="register-password"
                className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                type="password"
                placeholder="Create a password"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="register-confirm-password">
                Confirm Password
              </label>
              <input
                id="register-confirm-password"
                className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                type="password"
                placeholder="Confirm your password"
              />
            </div>
            <button
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
              type="button"
            >
              Register
            </button>
          </form>

          <p className="mt-5 text-sm text-[var(--muted)]">
            Already have an account?{" "}
            <Link className="font-semibold text-[var(--primary)] hover:underline" href="/login">
              Sign in
            </Link>
          </p>
        </div>

        <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.92))] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Get Started</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Register</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            This UI is ready for the future auth flow while keeping the current experience fully mock-based.
          </p>
        </div>
      </div>
    </div>
  );
}
