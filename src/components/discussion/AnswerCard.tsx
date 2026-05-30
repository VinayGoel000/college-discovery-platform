import { type DiscussionAnswer } from "@/data/mockDiscussions";

type AnswerCardProps = {
  answer: DiscussionAnswer;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));

export function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-semibold text-[var(--foreground)]">{answer.author}</h4>
        <p className="text-xs text-[var(--muted)]">{formatDate(answer.createdAt)}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{answer.message}</p>
    </article>
  );
}

