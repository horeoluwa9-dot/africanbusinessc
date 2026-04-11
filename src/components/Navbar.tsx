import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ABCLogo from "@/components/ABCLogo";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const primaryNav = [
  { label: "Programs", href: "/programs" },
  { label: "Learning", href: "/learning" },
  { label: "Simulation Labs", href: "/simulation-labs" },
  { label: "Admissions", href: "/admissions" },
];

const secondaryNav = [
  { label: "Faculty", href: "/faculty" },
  { label: "Community", href: "/community" },
];

const moreLinks = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Contact", href: "/contact" },
];

const allMobileLinks = [...primaryNav, ...secondaryNav, ...moreLinks];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const location = useLocation();
  const moreRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  const isRoute = (href: string) => location.pathname === href;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) setLoginOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
    setLoginOpen(false);
  }, [location]);

  const linkClass = (href: string) =>
    `px-3.5 py-1.5 rounded-full text-nav font-sans transition-all duration-300 ${
      isRoute(href) ? "bg-foreground text-background" : "text-foreground/70 hover:bg-foreground hover:text-background"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <ABCLogo className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-0.5 rounded-full px-1.5 py-1 backdrop-blur-lg border border-foreground/5" style={{ backgroundColor: 'hsl(var(--card) / 0.6)' }}>
          {primaryNav.map((link) => (
            <Link key={link.label} to={link.href} className={linkClass(link.href)}>{link.label}</Link>
          ))}
          <span className="w-px h-4 bg-foreground/10 mx-1" />
          {secondaryNav.map((link) => (
            <Link key={link.label} to={link.href} className={linkClass(link.href)}>{link.label}</Link>
          ))}
          <div ref={moreRef} className="relative">
            <button onClick={() => setMoreOpen(!moreOpen)} className="px-3.5 py-1.5 rounded-full text-nav font-sans text-foreground/70 hover:bg-foreground hover:text-background transition-all duration-300 flex items-center gap-1">
              More <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 rounded-xl border border-foreground/10 bg-card backdrop-blur-xl p-1.5 shadow-xl">
                {moreLinks.map((link) => (
                  <Link key={link.label} to={link.href} className="block px-3 py-2 rounded-lg text-sm font-sans text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden xl:flex items-center gap-3">
          <LanguageSwitcher />
          <div ref={loginRef} className="relative">
            <button onClick={() => setLoginOpen(!loginOpen)} className="text-nav font-sans text-foreground/60 hover:text-foreground transition-colors duration-300 flex items-center gap-1">
              Login <ChevronDown size={14} className={`transition-transform ${loginOpen ? "rotate-180" : ""}`} />
            </button>
            {loginOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 rounded-xl border border-foreground/10 bg-card backdrop-blur-xl p-1.5 shadow-xl">
                <Link to="/login?role=student" className="block px-3 py-2 rounded-lg text-sm font-sans text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors">Student Login</Link>
                <Link to="/login?role=faculty" className="block px-3 py-2 rounded-lg text-sm font-sans text-foreground/70 hover:bg-foreground/5 hover:text-foreground transition-colors">Faculty Login</Link>
              </div>
            )}
          </div>
          <ThemeToggle />
          <Link to="/admissions" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-btn font-sans font-medium transition-all duration-300 hover:scale-105">
            Apply Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="xl:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden mt-3 rounded-2xl p-5 backdrop-blur-xl border border-foreground/10 bg-card/95">
          <div className="flex flex-col gap-1">
            {allMobileLinks.map((link) => (
              <Link key={link.label} to={link.href} className="px-4 py-2.5 rounded-xl text-sm font-sans text-foreground/80 hover:bg-foreground/10 transition-colors" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-foreground/10 flex flex-col gap-2">
              <Link to="/login?role=student" className="text-center text-sm font-sans text-foreground/60" onClick={() => setMobileOpen(false)}>Student Login</Link>
              <Link to="/login?role=faculty" className="text-center text-sm font-sans text-foreground/60" onClick={() => setMobileOpen(false)}>Faculty Login</Link>
              <div className="flex justify-center items-center gap-3 py-1">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <Link to="/admissions" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center text-btn font-sans font-medium" onClick={() => setMobileOpen(false)}>
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
