"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    <Select
      onValueChange={(value: Locale) => setLocale(value as Locale)}
      defaultValue={locale}
    >
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="UI language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="uk">UK Українська</SelectItem>
        <SelectItem value="en">EN English</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitch;
