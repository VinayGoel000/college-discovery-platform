import { CollegeOverview } from "@/components/college/detail/CollegeOverview";
import { EmptyState } from "@/components/college/detail/EmptyState";
import { CoursesSection } from "@/components/college/detail/CoursesSection";
import { PlacementsSection } from "@/components/college/detail/PlacementsSection";
import { ReviewsSection } from "@/components/college/detail/ReviewsSection";
import { getMockCollegeDetail } from "@/services/mockCollegeDetail";

type CollegeDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function CollegeDetailPage({ params }: CollegeDetailPageProps) {
  const { id } = params;
  const college = getMockCollegeDetail(id);

  if (!college) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <EmptyState
          description="The college you are looking for is not available in the current mock dataset. Once the API and database are connected, this state will continue to provide a graceful fallback."
          title="College not found"
        />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
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
    </div>
  );
}
