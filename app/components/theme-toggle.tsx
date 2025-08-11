"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const isDark = (mounted ? resolvedTheme : theme) === "dark";

  return (
    <div className="relative w-16 h-8 flex justify-center overflow-hidden rounded-full border border-border bg-card text-card-foreground">
      <button
        type="button"
        aria-label="Toggle theme"
        title="Toggle theme"
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex justify-center items-center hover:cursor-pointer relative size-8 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 rounded-full"
        aria-pressed={isDark}
      >
        {mounted && (isDark ? (
          <Moon className="w-5 h-5" />
        ) : (
          <Sun className="w-5 h-5" />
        ))}
      </button>
    </div>
  );
}

export default ThemeToggle;


