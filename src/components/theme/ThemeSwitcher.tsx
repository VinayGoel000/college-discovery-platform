"use client";

import { useTheme, type ThemeName } from "@/context/ThemeContext";

const themeOptions: Array<{
  label: string;
  value: ThemeName;
  icon: string;
}> = [
  { label: "Light", value: "light", icon: "☀" },
  { label: "Dark", value: "dark", icon: "🌙" },
  { label: "Developer", value: "developer", icon: "💜" }
];

type ThemeSwitcherProps = {
  className?: string;
  compact?: boolean;
};

export function ThemeSwitcher({ className = "", compact = false }: ThemeSwitcherProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {themeOptions.map((option) => {
        const isActive = option.value === theme;

        return (
          <button
            key={option.value}
            aria-pressed={isActive}
            className={[
              "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition",
              "focus:outline-none focus:ring-4 focus:ring-[color:var(--primary-rgb)]/20",
              isActive
                ? "border-[var(--primary)] bg-[var(--primary)] text-[var(--primary-foreground)] shadow-sm"
                : "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
              compact ? "justify-center" : ""
            ].join(" ")}
            onClick={() => setTheme(option.value)}
            type="button"
          >
            <span aria-hidden="true">{option.icon}</span>
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
