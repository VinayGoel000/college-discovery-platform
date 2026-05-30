import Link from "next/link";

type EmptyDiscussionStateProps = {
  collegeHref?: string;
};

export function EmptyDiscussionState({ collegeHref }: EmptyDiscussionStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center shadow-sm">
      <h3 className="text-lg font-semibold text-[var(--foreground)]">No discussions yet for this college.</h3>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">
        Be the first to ask about placements, hostel life, fees, faculty, or campus experience.
      </p>
      {collegeHref ? (
        <div className="mt-6">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
            href={collegeHref}
          >
            Ask First Question
          </Link>
        </div>
      ) : null}
    </div>
  );
}

