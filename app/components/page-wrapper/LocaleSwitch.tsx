"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { i18n, Locale } from "@/i18n-config";

const LocaleSwitch = (
  { current }: { current?: Locale } = { current: "uk" }
) => {
  const locales = i18n.locales;
  const [locale, setLocale] = useState(current as Locale);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!locale) return;

    const path = [
      locale,
      ...pathname
        .split("/")
        .filter((seg) => seg)
        .filter((_, i) => i > 0),
    ].join("/");

    router.push(`/${path}`);
  }, [locale, pathname, router]);

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
