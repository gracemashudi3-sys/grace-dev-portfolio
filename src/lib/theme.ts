export const THEME_STORAGE_KEY = "theme";

export const themeChoices = ["dark", "light", "system"] as const;

export type ThemeChoice = (typeof themeChoices)[number];

export function isThemeChoice(value: string | null): value is ThemeChoice {
  return value === "dark" || value === "light" || value === "system";
}

export function readThemeChoice(): ThemeChoice {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeChoice(stored) ? stored : "dark";
  } catch {
    return "dark";
  }
}

export function applyThemeChoice(choice: ThemeChoice): void {
  document.documentElement.dataset.theme = choice;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // Private browsing can reject storage. The attribute still updates this visit.
  }
}
