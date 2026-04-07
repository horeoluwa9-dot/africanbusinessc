import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Programs", href: "/programs" },
  { label: "Learning", href: "/#learning" },
  { label: "Simulation Labs", href: "/simulation-labs" },
  { label: "Faculty", href: "/faculty" },
  { label: "Community", href: "/community" },
  { label: "Partnerships", href: "/partnerships" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isRoute = (href: string) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <span className="font-sans font-semibold text-xs text-primary-foreground">ABC</span>
          </div>
          <span className="font-serif text-lg font-light text-foreground tracking-tight">
            Africa Business College
          </span>
        </Link>

        <div className="hidden xl:flex items-center gap-0.5 rounded-full px-1.5 py-1 backdrop-blur-lg" style={{ backgroundColor: 'rgba(231,229,228,0.05)' }}>
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.startsWith("/#") ? (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                  isRoute(link.href)
                    ? "bg-foreground text-background"
                    : "text-foreground/70 hover:bg-foreground hover:text-background"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium text-foreground/70 transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <Link to="/dashboard" className="text-xs font-sans font-medium text-foreground/60 hover:text-foreground transition-colors duration-300">
            Login
          </Link>
          <Link
            to="/programs"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-xs font-sans font-semibold transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        <button
          className="xl:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="xl:hidden mt-3 rounded-2xl p-5 backdrop-blur-xl" style={{ backgroundColor: 'rgba(28,25,23,0.95)' }}>
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-2.5 rounded-xl text-sm font-sans text-foreground/80 hover:bg-foreground/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2.5 rounded-xl text-sm font-sans text-foreground/80 hover:bg-foreground/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <div className="mt-3 pt-3 border-t border-foreground/10 flex flex-col gap-2">
              <Link to="/dashboard" className="text-center text-xs font-sans text-foreground/60" onClick={() => setMobileOpen(false)}>Login</Link>
              <Link to="/programs" className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-center text-xs font-sans font-semibold" onClick={() => setMobileOpen(false)}>
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
