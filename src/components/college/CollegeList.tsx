import { CollegeCard } from "./CollegeCard";
import { type College } from "@/types";

type CollegeListProps = {
  colleges: College[];
};

export function CollegeList({ colleges }: CollegeListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {colleges.map((college) => (
        <CollegeCard key={college.id} college={college} />
      ))}
    </div>
  );
}
