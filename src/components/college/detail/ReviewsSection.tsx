import { type Review } from "@/types";

type ReviewsSectionProps = {
  reviews: Review[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const formatDate = (date: string) =>
    new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));

  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--foreground)]">Reviews</h2>
      <div className="mt-5 space-y-4">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-[var(--foreground)]">{review.studentName}</h3>
                <p className="mt-1 text-xs text-[var(--muted)]">{formatDate(review.reviewDate)}</p>
              </div>
              <div className="rounded-full bg-[var(--surface)] px-3 py-1 text-sm font-semibold text-[var(--foreground)]">
                {"★".repeat(review.rating)}{"☆".repeat(Math.max(0, 5 - review.rating))}
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{review.reviewText}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
