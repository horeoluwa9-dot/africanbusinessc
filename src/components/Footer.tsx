import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import ABCLogo from "@/components/ABCLogo";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setSubscribing(true);
    setTimeout(() => { setSubscribing(false); setSubscribed(true); }, 1000);
  };

  return (
    <footer className="py-14 px-4 md:px-6 border-t border-foreground/5 bg-card">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-3">
              <ABCLogo className="h-10 w-auto" />
            </Link>
            <p className="font-sans text-footer text-muted-foreground mb-4 max-w-xs">
              A virtual-first African business institution building the next generation of entrepreneurs, leaders, and innovators.
            </p>
            <div className="flex items-center gap-3">
              {["LinkedIn", "Twitter", "YouTube"].map((s) => (
                <span key={s} className="font-sans text-sm text-muted-foreground/50 hover:text-primary transition-colors cursor-pointer">{s}</span>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-sans text-sm font-semibold text-foreground mb-1">Stay Informed</p>
              <p className="font-sans text-footer text-muted-foreground mb-2">Get insights, deadlines, and updates from ABC.</p>
              <form onSubmit={handleSubscribe} className="flex gap-1.5">
                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(""); }} className="flex-1 px-3 py-2 rounded-full bg-foreground/5 border border-border text-sm font-sans text-foreground outline-none focus:border-primary/30" />
                <button type="submit" disabled={subscribing} className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-sans font-medium text-sm transition-all hover:scale-105 disabled:opacity-50 shrink-0">
                  {subscribing ? "..." : "Subscribe"}
                </button>
              </form>
              {emailError && <p className="font-sans text-sm text-destructive mt-1">{emailError}</p>}
            </div>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-3">About ABC</h4>
            <ul className="space-y-1.5">
              {[
                { label: "About", to: "/about" },
                { label: "Faculty", to: "/faculty" },
                { label: "Learning", to: "/learning" },
                { label: "Simulation Labs", to: "/simulation-labs" },
                { label: "Careers", to: "/careers" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-footer text-muted-foreground hover:text-primary transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-3">Programs</h4>
            <ul className="space-y-1.5">
              {[
                { label: "All Programs", to: "/programs" },
                { label: "Entrepreneurship", to: "/programs/entrepreneurship" },
                { label: "Venture Building", to: "/programs/venture-building" },
                { label: "Digital Business", to: "/programs/digital-business" },
                { label: "Innovation Leadership", to: "/programs/innovation-leadership" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-footer text-muted-foreground hover:text-primary transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-1.5">
              {[
                { label: "Insights", to: "/insights" },
                { label: "Community", to: "/community" },
                { label: "Partnerships", to: "/partnerships" },
                { label: "Admissions", to: "/admissions" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-footer text-muted-foreground hover:text-primary transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-foreground/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-sm text-muted-foreground/50">© 2026 Africa Business College. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="font-sans text-sm text-muted-foreground/50 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-sans text-sm text-muted-foreground/50 hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/accreditation" className="font-sans text-sm text-muted-foreground/50 hover:text-primary transition-colors">Accreditation</Link>
          </div>
          <p className="font-sans text-sm text-muted-foreground/50">Powered by CycleBreeze</p>
        </div>
      </div>

      {subscribed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSubscribed(false)} />
          <div className="relative bg-card border border-foreground/10 rounded-2xl p-8 max-w-sm w-full text-center animate-fade-up">
            <Mail className="text-primary mx-auto mb-3" size={28} />
            <h3 className="text-lg text-foreground font-serif font-semibold mb-2">You're Subscribed</h3>
            <p className="font-sans text-sm text-muted-foreground mb-4">You will receive insights, updates, and opportunities from ABC.</p>
            <button onClick={() => setSubscribed(false)} className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-medium text-sm">Close</button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
