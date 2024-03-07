"use client";

import React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const ThemeButton = () => {
  const { setTheme, theme } = useTheme();

  const setThemeHandler = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div>
      <Button variant={"default"} onClick={setThemeHandler}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  );
};

export default ThemeButton;

