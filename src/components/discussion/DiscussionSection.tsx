"use client";

import { useState } from "react";

import { AskQuestionForm } from "@/components/discussion/AskQuestionForm";
import { DiscussionList } from "@/components/discussion/DiscussionList";
import { useAuth } from "@/context/AuthContext";
import type { DiscussionQuestion } from "@/data/mockDiscussions";
import { createDiscussionQuestion, getDiscussionStats } from "@/services/discussionService";

type DiscussionSectionProps = {
  collegeId: string;
  initialQuestions: DiscussionQuestion[];
};

export function DiscussionSection({ collegeId, initialQuestions }: DiscussionSectionProps) {
  const [questions, setQuestions] = useState(initialQuestions);
  const { isGuest } = useAuth();
  const stats = getDiscussionStats(questions);

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-[var(--foreground)]">Discussions</h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              College-specific questions and answers for {collegeId}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-[var(--muted)]">
            <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1">Questions: {stats.totalQuestions}</span>
            <span className="rounded-full bg-[var(--surface-elevated)] px-3 py-1">Answers: {stats.totalAnswers}</span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">
              {isGuest ? "Read only for guests" : "Signed in user"}
            </span>
          </div>
        </div>
      </div>

      <AskQuestionForm
        onSubmit={(draft) => {
          setQuestions((current) => createDiscussionQuestion(current, draft));
        }}
      />

      <DiscussionList collegeHref={`/colleges/${collegeId}`} questions={questions} />
    </div>
  );
}
