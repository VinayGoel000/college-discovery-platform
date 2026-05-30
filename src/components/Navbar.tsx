import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/colleges", label: "Colleges" }
];

export function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-semibold text-slate-900" href="/">
          College Discovery Platform
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          {navItems.map((item) => (
            <Link key={item.href} className="transition hover:text-slate-900" href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
