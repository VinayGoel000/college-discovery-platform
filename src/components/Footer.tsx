export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-[var(--foreground)]">Made with ❤️ by Vinay Goel</p>
          <p className="mt-1 text-sm text-[var(--muted)]">College Discovery Platform</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--surface-elevated)]"
            href="https://vinay-goel-dev.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Contact Developer
          </a>
          <a
            className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:opacity-95"
            href="https://vinay-goel-dev.vercel.app/"
            rel="noreferrer"
            target="_blank"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
}
