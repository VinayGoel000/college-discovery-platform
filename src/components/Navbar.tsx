"use client";

import Link from "next/link";
import { useState } from "react";

import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { useAuth } from "@/context/AuthContext";
import { useSavedItems } from "@/context/SavedItemsContext";
import { useCompare } from "@/context/CompareContext";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/colleges", label: "Colleges" },
  { href: "/predictor", label: "Predict College" }
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { count } = useCompare();
  const { user, isGuest, logout, openAuthPrompt } = useAuth();
  const { savedColleges, savedComparisons } = useSavedItems();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-[var(--foreground)]">
            College Discovery Platform
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="text-sm font-medium text-[var(--muted)] transition hover:text-[var(--foreground)]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
            <Link
              className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
              href="/compare"
            >
              Compare ({count})
            </Link>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)]">
              {isGuest ? "Guest User" : user.name}
            </div>
            {isGuest ? (
              <>
                <button
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
                  onClick={openAuthPrompt}
                  type="button"
                >
                  Sign In
                </button>
                <Link
                  className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
                  href="/register"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
                  href="/saved"
                >
                  Saved Colleges ({savedColleges.length})
                </Link>
                <Link
                  className="rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
                  href="/compare"
                >
                  Saved Comparisons ({savedComparisons.length})
                </Link>
                <button
                  className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
                  onClick={logout}
                  type="button"
                >
                  Logout
                </button>
              </>
            )}
            <ThemeSwitcher />
          </div>

          <button
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] md:hidden"
            onClick={() => setMobileMenuOpen((value) => !value)}
            type="button"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                href="/compare"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare ({count})
              </Link>
              {isGuest ? (
                <>
                  <button
                    className="rounded-xl px-3 py-2 text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                    onClick={openAuthPrompt}
                    type="button"
                  >
                    Sign In
                  </button>
                  <Link
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                    href="/register"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                    href="/saved"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Saved Colleges ({savedColleges.length})
                  </Link>
                  <Link
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                    href="/compare"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Saved Comparisons ({savedComparisons.length})
                  </Link>
                  <button
                    className="rounded-xl px-3 py-2 text-left text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-elevated)]"
                    onClick={logout}
                    type="button"
                  >
                    Logout
                  </button>
                </>
              )}
            </nav>

            <div className="mt-4">
              <ThemeSwitcher compact />
            </div>
          </div>
        ) : null}
      </header>

    </>
  );
}
