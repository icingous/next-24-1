"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const onThemeChange = (checked: boolean) =>
    setTheme(checked ? "dark" : "light");

  return (
    <div className="flex gap-1 items-center">
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
      <Switch checked={theme === "dark"} onCheckedChange={onThemeChange} />
    </div>
  );
};

export default ThemeSwitch;

