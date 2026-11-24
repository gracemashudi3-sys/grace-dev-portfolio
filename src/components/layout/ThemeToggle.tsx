import { useState } from "react";
import {
  applyThemeChoice,
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
    <fieldset
      aria-label="Theme"
      className="m-0 inline-flex w-fit min-w-0 rounded-full border border-border bg-surface p-0.5"
    >
      {themeChoices.map((option) => {
        const selected = option === choice;
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            onClick={() => select(option)}
            className={`rounded-full px-2 py-0.5 text-xs ${
              selected ? "bg-canvas text-ink" : "text-muted hover:text-ink"
            }`}
          >
            {themeLabels[option]}
          </button>
        );
      })}
    </fieldset>
  );
}
