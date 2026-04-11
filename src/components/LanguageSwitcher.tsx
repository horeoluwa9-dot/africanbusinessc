import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";

const languages = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "zh", label: "中文", short: "ZH" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "es", label: "Español", short: "ES" },
];

const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState(() => localStorage.getItem("abc_language") || "en");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (code: string) => {
    setLang(code);
    localStorage.setItem("abc_language", code);
    if (code === "ar") {
      document.documentElement.dir = "rtl";
    } else {
      document.documentElement.dir = "ltr";
    }
    setOpen(false);
  };

  const current = languages.find(l => l.code === lang) || languages[0];

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-sans text-foreground/60 hover:text-foreground transition-colors duration-300"
      >
        <Globe size={16} />
        <span>{current.short}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-40 rounded-xl border border-foreground/10 bg-card backdrop-blur-xl p-1.5 shadow-xl z-50">
          {languages.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l.code)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm font-sans transition-colors ${
                lang === l.code
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
