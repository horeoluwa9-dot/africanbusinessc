import { Sun, Moon } from "lucide-react";
import { useThemeContext } from "@/contexts/ThemeContext";

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 hover:bg-foreground/10 text-foreground/60 hover:text-foreground ${className}`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
