import { type Review } from "@/types";

type ReviewsSectionProps = {
  reviews: Review[];
};

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-soft">
      <h2 className="text-xl font-semibold text-slate-900">Reviews</h2>
      <div className="mt-5 space-y-4">
        {reviews.map((review) => (
          <article key={review.id} className="rounded-xl border border-[var(--border)] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{review.studentName}</h3>
                <p className="mt-1 text-xs text-slate-500">{review.reviewDate}</p>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                {review.rating.toFixed(1)}
              </div>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{review.reviewText}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
