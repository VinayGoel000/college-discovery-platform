"use client";

import { useMemo, useState } from "react";

import { AnswerCard } from "@/components/discussion/AnswerCard";
import { DiscussionCard } from "@/components/discussion/DiscussionCard";
import { EmptyDiscussionState } from "@/components/discussion/EmptyDiscussionState";
import { useAuth } from "@/context/AuthContext";
import type { DiscussionQuestion } from "@/data/mockDiscussions";
import { searchDiscussions } from "@/services/discussionService";

type DiscussionListProps = {
  questions: DiscussionQuestion[];
  collegeHref?: string;
};

const formatStats = (count: number) => new Intl.NumberFormat("en-IN").format(count);

export function DiscussionList({ questions, collegeHref }: DiscussionListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openDiscussionId, setOpenDiscussionId] = useState<string | null>(questions[0]?.id ?? null);
  const { isGuest, openAuthPrompt } = useAuth();

  const filteredQuestions = useMemo(() => searchDiscussions(questions, searchTerm), [questions, searchTerm]);
  const totalAnswers = useMemo(
    () => filteredQuestions.reduce((sum, question) => sum + question.answers.length, 0),
    [filteredQuestions]
  );

  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Discussions &amp; Q&amp;A</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Browse college-specific conversations, answers, and recent questions.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
          <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1">
            Questions: {formatStats(filteredQuestions.length)}
          </span>
          <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1">Answers: {formatStats(totalAnswers)}</span>
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="discussion-search">
          Search Discussion
        </label>
        <input
          id="discussion-search"
          className="h-11 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)]"
          placeholder="Search placements, hostel, fees, faculty..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>

      {isGuest ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Guest mode is read only. <button className="font-semibold underline" type="button" onClick={openAuthPrompt}>Sign in to ask or answer questions.</button>
        </div>
      ) : null}

      {filteredQuestions.length === 0 ? (
        <div className="mt-6">
          <EmptyDiscussionState collegeHref={collegeHref} />
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {filteredQuestions.map((discussion) => {
            const isOpen = openDiscussionId === discussion.id;

            return (
              <DiscussionCard
                key={discussion.id}
                discussion={discussion}
                isOpen={isOpen}
                onToggle={() => setOpenDiscussionId((current) => (current === discussion.id ? null : discussion.id))}
              >
                <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[var(--muted)]">Question</p>
                    <h4 className="mt-2 text-lg font-semibold text-[var(--foreground)]">{discussion.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{discussion.description}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-wide text-[var(--muted)]">All Answers</p>
                    {discussion.answers.map((answer) => (
                      <AnswerCard key={answer.id} answer={answer} />
                    ))}
                  </div>
                </div>
              </DiscussionCard>
            );
          })}
        </div>
      )}
    </section>
  );
}
