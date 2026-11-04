import type { ThemeMode } from "../../types/portfolio";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

export default function ThemeToggle({
  theme,
  onToggle,
}: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>

      <span className="theme-toggle__label">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
