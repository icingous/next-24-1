"use client";

import { useState } from "react";
import { i18n, Locale } from "@/i18n-config";

const LocaleSwitch = (
  { current }: { current?: Locale } = { current: "uk" }
) => {
  const locales = i18n.locales;
  const [locale, setLocale] = useState(current);

  return (
    <select
      value={locale}
      className="text-black"
      onChange={(e) => setLocale(e.target.value as Locale)}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default LocaleSwitch;
