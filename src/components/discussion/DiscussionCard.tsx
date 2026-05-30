"use client";

import { type ReactNode } from "react";
import { type DiscussionQuestion } from "@/data/mockDiscussions";

type DiscussionCardProps = {
  discussion: DiscussionQuestion;
  isOpen: boolean;
  onToggle: (discussionId: string) => void;
  children?: ReactNode;
};

const formatDate = (date: string) =>
  new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(date));

export function DiscussionCard({ discussion, isOpen, onToggle, children }: DiscussionCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-elevated)]">
      <button
        className="flex w-full flex-col gap-4 p-5 text-left transition hover:bg-black/5"
        onClick={() => onToggle(discussion.id)}
        type="button"
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-[var(--foreground)]">{discussion.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{discussion.description}</p>
          </div>
          <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
            {discussion.answers.length} Answers
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
          <span>Asked by {discussion.author}</span>
          <span>•</span>
          <span>{formatDate(discussion.createdAt)}</span>
        </div>
      </button>

      {isOpen ? <div className="border-t border-[var(--border)] p-5">{children}</div> : null}
    </article>
  );
}

