export function CollegeDetailSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)]">
        <div className="space-y-6">
          <div className="h-80 animate-pulse rounded-3xl bg-[var(--surface-elevated)]" />
          <div className="h-72 animate-pulse rounded-3xl bg-[var(--surface-elevated)]" />
        </div>
        <div className="space-y-6">
          <div className="h-64 animate-pulse rounded-3xl bg-[var(--surface-elevated)]" />
          <div className="h-72 animate-pulse rounded-3xl bg-[var(--surface-elevated)]" />
        </div>
      </div>
    </div>
  );
}
