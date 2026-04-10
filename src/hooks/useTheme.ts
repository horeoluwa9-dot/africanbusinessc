import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setThemeState] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("abc-theme") as "light" | "dark") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
    localStorage.setItem("abc-theme", theme);
  }, [theme]);

  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"));

  return { theme, setTheme: setThemeState, toggleTheme };
}
