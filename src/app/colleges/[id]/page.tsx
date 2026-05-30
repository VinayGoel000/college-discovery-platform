import { CollegeOverview } from "@/components/college/detail/CollegeOverview";
import { EmptyState } from "@/components/college/detail/EmptyState";
import { CoursesSection } from "@/components/college/detail/CoursesSection";
import { PlacementsSection } from "@/components/college/detail/PlacementsSection";
import { ReviewsSection } from "@/components/college/detail/ReviewsSection";
import { AddToCompareButton } from "@/components/compare/AddToCompareButton";
import { DiscussionSection } from "@/components/discussion/DiscussionSection";
import { getMockCollegeDetail } from "@/services/mockCollegeDetail";
import { getCollegeDiscussions } from "@/services/discussionService";
import Link from "next/link";

type CollegeDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CollegeDetailPage({ params }: CollegeDetailPageProps) {
  const { id } = await params;
  const college = getMockCollegeDetail(id);
  const collegeDiscussions = getCollegeDiscussions(id);

  if (!college) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState
          description="The college you are looking for is not available in the current mock dataset."
          title="College not found."
        />
        <div className="mt-6">
          <Link
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
            href="/colleges"
          >
            Back to Colleges
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <Link
          className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
          href="/colleges"
        >
          Back to Colleges
        </Link>
        <AddToCompareButton college={college} />
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <CollegeOverview college={college} />
          <CoursesSection courses={college.courses} />
        </div>

        <div className="space-y-6">
          <PlacementsSection placement={college.placement} />
          <ReviewsSection reviews={college.reviews} />
        </div>
      </div>

      <div className="mt-6">
        <DiscussionSection collegeId={college.id} initialQuestions={collegeDiscussions} />
      </div>
    </div>
  );
}
