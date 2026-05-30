import Link from "next/link";

export function CompareEmptyState() {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center shadow-sm">
      <h1 className="text-2xl font-semibold text-[var(--foreground)]">
        No colleges selected for comparison.
      </h1>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
        Select 2 to 3 colleges from the listing page or the college detail page to compare them
        side by side.
      </p>
      <Link
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
        href="/colleges"
      >
        Browse Colleges
      </Link>
    </div>
  );
}
