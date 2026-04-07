import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Programs", "Learning", "Simulation Labs", "Faculty", "Admissions"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="font-sans font-semibold text-sm text-primary-foreground">ABC</span>
          </div>
          <span className="font-serif text-xl font-light text-foreground tracking-tight">
            Africa Business College
          </span>
        </div>

        {/* Center pill nav - desktop */}
        <div className="hidden lg:flex items-center gap-1 rounded-full px-2 py-1.5 backdrop-blur-lg" style={{ backgroundColor: 'rgba(231,229,228,0.05)' }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-4 py-2 rounded-full text-sm font-sans font-medium text-foreground/70 transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="#login" className="text-sm font-sans font-medium text-foreground/60 hover:text-foreground transition-colors duration-300">
            Login
          </a>
          <a
            href="#apply"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-sans font-semibold transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 rounded-3xl p-6 backdrop-blur-xl" style={{ backgroundColor: 'rgba(28,25,23,0.95)' }}>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-3 rounded-2xl text-base font-sans text-foreground/80 hover:bg-foreground/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-foreground/10 flex flex-col gap-3">
              <a href="#login" className="text-center text-sm font-sans text-foreground/60">Login</a>
              <a href="#apply" className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-center text-sm font-sans font-semibold">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
