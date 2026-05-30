import { type Course } from "@/types";

type CoursesSectionProps = {
  courses: Course[];
};

export function CoursesSection({ courses }: CoursesSectionProps) {
  return (
    <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[var(--foreground)]">Courses</h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article key={course.id} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-elevated)] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-[var(--foreground)]">{course.name}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">{course.degreeType}</p>
              </div>
              <span className="rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                {course.seatsAvailable} seats
              </span>
            </div>
            <div className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <p>
                <span className="font-medium text-[var(--foreground)]">Duration:</span> {course.duration}
              </p>
              <p>
                <span className="font-medium text-[var(--foreground)]">Total Fees:</span> {course.totalFees}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
