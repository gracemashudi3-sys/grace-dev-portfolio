import { useState } from "react";
import {
  applyThemeChoice,
  isThemeChoice,
  readThemeChoice,
  type ThemeChoice,
  themeChoices,
} from "../../lib/theme";

const themeLabels: Record<ThemeChoice, string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
};

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice>(() => readThemeChoice());

  function select(next: ThemeChoice) {
    setChoice(next);
    applyThemeChoice(next);
  }

  return (
    <label className="flex items-center gap-2 text-xs text-muted">
      Theme
      <select
        value={choice}
        onChange={(event) => {
          const next = event.target.value;
          if (isThemeChoice(next)) {
            select(next);
          }
        }}
        className="rounded-md border border-border bg-canvas px-2 py-1 text-sm text-ink"
      >
        {themeChoices.map((option) => (
          <option key={option} value={option}>
            {themeLabels[option]}
          </option>
        ))}
      </select>
    </label>
  );
}
