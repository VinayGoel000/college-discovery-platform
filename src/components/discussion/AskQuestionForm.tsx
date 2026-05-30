"use client";

import { type FormEvent, useState } from "react";

import { useAuth } from "@/context/AuthContext";
import type { DiscussionDraft } from "@/services/discussionService";

type AskQuestionFormProps = {
  onSubmit: (draft: DiscussionDraft) => void;
};

export function AskQuestionForm({ onSubmit }: AskQuestionFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { isGuest, openAuthPrompt } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (!trimmedTitle || !trimmedDescription) return;

    onSubmit({ title: trimmedTitle, description: trimmedDescription });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Ask a Question</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">
            {isGuest ? "Sign in to ask questions." : "Share your question with the college community."}
          </p>
        </div>
        {isGuest ? (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
            Guest read-only
          </span>
        ) : null}
      </div>

      <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="discussion-title">
            Question Title
          </label>
          <input
            id="discussion-title"
            className="h-11 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isGuest}
            placeholder="How are placements at IIT Delhi?"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[var(--foreground)]" htmlFor="discussion-description">
            Question Description
          </label>
          <textarea
            id="discussion-description"
            className="min-h-32 w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isGuest}
            placeholder="I want to know average package for CSE branch."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="flex items-center justify-end">
          {isGuest ? (
            <button
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--surface-elevated)] px-5 text-sm font-semibold text-[var(--muted)]"
              onClick={openAuthPrompt}
              type="button"
            >
              Post Question
            </button>
          ) : (
            <button
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={!title.trim() || !description.trim()}
              type="submit"
            >
              Post Question
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
