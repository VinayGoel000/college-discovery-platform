"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid w-full gap-0 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-[linear-gradient(180deg,rgba(15,23,42,0.95),rgba(30,41,59,0.92))] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-300">Welcome Back</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Sign In</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
            Mock sign in UI for the future authentication flow. No backend is connected yet.
          </p>
        </div>

        <div className="p-8 sm:p-10">
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="login-password">
                Password
              </label>
              <input
                id="login-password"
                className="h-12 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
              type="button"
            >
              Sign In
            </button>
          </form>

          <p className="mt-5 text-sm text-[var(--muted)]">
            New here?{" "}
            <Link className="font-semibold text-[var(--primary)] hover:underline" href="/register">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
