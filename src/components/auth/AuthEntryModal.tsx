"use client";

import Link from "next/link";

import { useAuth } from "@/context/AuthContext";

type AuthEntryModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
};

export function AuthEntryModal({
  open,
  onClose,
  title = "Please sign in to continue.",
  description = "Choose how you want to continue your college discovery journey."
}: AuthEntryModalProps) {
  const { signInAsGuest } = useAuth();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[var(--surface)] p-6 shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--primary)]">Authentication</p>
            <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{title}</h2>
            <p className="mt-2 max-w-lg text-sm leading-6 text-[var(--muted)]">{description}</p>
          </div>
          <button
            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-sm font-medium text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Link
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
            href="/register"
            onClick={onClose}
          >
            Register
          </Link>
          <Link
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
            href="/login"
            onClick={onClose}
          >
            Sign In
          </Link>
          <button
            className="inline-flex h-12 items-center justify-center rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800"
            onClick={() => {
              signInAsGuest();
              onClose();
            }}
            type="button"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}
