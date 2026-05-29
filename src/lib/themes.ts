export type ThemeId =
  | "midnight"
  | "slate-light"
  | "paper-cream"
  | "midnight-navy"
  | "mocha-warm"
  | "forest";

export interface Theme {
  id: ThemeId;
  label: string;
  hint: string;
  preview: { bg: string; accent: string; text: string };
}

export const themes: Theme[] = [
  {
    id: "midnight",
    label: "Midnight",
    hint: "Default dark",
    preview: { bg: "#0c0c0f", accent: "#7c6af7", text: "#e8e8f0" },
  },
  {
    id: "slate-light",
    label: "Slate Light",
    hint: "Clean & editorial",
    preview: { bg: "#fafafa", accent: "#6d4cf2", text: "#0f172a" },
  },
  {
    id: "paper-cream",
    label: "Paper Cream",
    hint: "Warm editorial",
    preview: { bg: "#f5efe2", accent: "#c2410c", text: "#2a241c" },
  },
  {
    id: "midnight-navy",
    label: "Midnight Navy",
    hint: "Softer dark",
    preview: { bg: "#0a1628", accent: "#7c6af7", text: "#e6edf6" },
  },
  {
    id: "mocha-warm",
    label: "Mocha Warm",
    hint: "Cozy dark",
    preview: { bg: "#1c1917", accent: "#fb7185", text: "#ede8e0" },
  },
  {
    id: "forest",
    label: "Forest Terminal",
    hint: "Coder green",
    preview: { bg: "#0d1f1c", accent: "#84cc16", text: "#e4f1ed" },
  },
];

export const DEFAULT_THEME: ThemeId = "midnight";
export const THEME_STORAGE_KEY = "theme";
