import Link from "next/link";

type PredictorEmptyStateProps = {
  title: string;
  description: string;
};

export function PredictorEmptyState({ title, description }: PredictorEmptyStateProps) {
  return (
    <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center shadow-sm">
      <h2 className="text-2xl font-semibold text-[var(--foreground)]">{title}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">{description}</p>
      <Link
        className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
        href="/colleges"
      >
        Browse All Colleges
      </Link>
    </div>
  );
}
