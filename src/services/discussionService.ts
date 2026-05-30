import { mockDiscussions, type DiscussionAnswer, type DiscussionQuestion } from "@/data/mockDiscussions";

export type DiscussionDraft = {
  title: string;
  description: string;
};

export type DiscussionStats = {
  totalQuestions: number;
  totalAnswers: number;
};

const cloneQuestions = (questions: DiscussionQuestion[]): DiscussionQuestion[] =>
  questions.map((question) => ({
    ...question,
    answers: question.answers.map((answer) => ({ ...answer }))
  }));

export function getCollegeDiscussions(collegeId: string): DiscussionQuestion[] {
  const collegeDiscussions = mockDiscussions.find((discussion) => discussion.collegeId === collegeId);
  return collegeDiscussions ? cloneQuestions(collegeDiscussions.questions) : [];
}

export function getDiscussionStats(questions: DiscussionQuestion[]): DiscussionStats {
  return questions.reduce<DiscussionStats>(
    (stats, question) => ({
      totalQuestions: stats.totalQuestions + 1,
      totalAnswers: stats.totalAnswers + question.answers.length
    }),
    { totalQuestions: 0, totalAnswers: 0 }
  );
}

export function searchDiscussions(questions: DiscussionQuestion[], query: string): DiscussionQuestion[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return questions;
  }

  return questions.filter((question) => {
    const haystack = [question.title, question.description, question.author, ...question.answers.map((answer) => answer.message), ...question.answers.map((answer) => answer.author)]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedQuery);
  });
}

export function createDiscussionQuestion(
  questions: DiscussionQuestion[],
  draft: DiscussionDraft,
  author = "Guest User"
): DiscussionQuestion[] {
  const now = new Date().toISOString();
  const newQuestion: DiscussionQuestion = {
    id: `discussion-${Date.now()}`,
    title: draft.title.trim(),
    description: draft.description.trim(),
    author,
    createdAt: now,
    answers: []
  };

  return [newQuestion, ...questions];
}

export function createDiscussionAnswer(message: string, author = "Guest User"): DiscussionAnswer {
  return {
    id: `answer-${Date.now()}`,
    author,
    message: message.trim(),
    createdAt: new Date().toISOString()
  };
}

