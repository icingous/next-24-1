export const i18n = {
  default: "uk",
  locales: ["uk", "en"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
