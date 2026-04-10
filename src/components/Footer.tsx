import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Mail } from "lucide-react";
import abcLogo from "@/assets/abc-logo-new.png";

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
    <>
      {/* Top CTA */}
      <section className="py-20 px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Start Learning by <em className="font-serif italic">Building</em>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
              Apply Now
            </Link>
            <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-14 px-4 md:px-6 border-t border-foreground/5 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-2.5 mb-3">
                <img src={abcLogo} alt="ABC" className="h-8 w-auto" />
              </Link>
              <p className="font-sans text-xs text-foreground/40 mb-4 max-w-xs">
                A virtual-first African business institution building the next generation of entrepreneurs, leaders, and innovators.
              </p>
              <div className="flex items-center gap-3">
                {["LinkedIn", "Twitter", "YouTube"].map((s) => (
                  <span key={s} className="font-sans text-[10px] text-foreground/30 hover:text-primary transition-colors cursor-pointer">{s}</span>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-6">
                <p className="font-sans text-xs font-semibold text-foreground mb-1">Stay Informed</p>
                <p className="font-sans text-[10px] text-foreground/40 mb-2">Get insights, deadlines, and updates from ABC.</p>
                <form onSubmit={handleSubscribe} className="flex gap-1.5">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    className="flex-1 px-3 py-1.5 rounded-full bg-foreground/5 border border-foreground/5 text-[10px] font-sans text-foreground outline-none focus:border-primary/30"
                  />
                  <button type="submit" disabled={subscribing} className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-sans font-semibold text-[10px] transition-all hover:scale-105 disabled:opacity-50 shrink-0">
                    {subscribing ? "..." : "Subscribe"}
                  </button>
                </form>
                {emailError && <p className="font-sans text-[10px] text-destructive mt-1">{emailError}</p>}
              </div>
            </div>

            {/* About ABC */}
            <div>
              <h4 className="font-sans text-xs font-semibold text-foreground mb-3">About ABC</h4>
              <ul className="space-y-1.5">
                {[
                  { label: "About", to: "/about" },
                  { label: "Faculty", to: "/faculty" },
                  { label: "Learning", to: "/learning" },
                  { label: "Simulation Labs", to: "/simulation-labs" },
                  { label: "Careers", to: "/careers" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-sans text-xs text-foreground/40 hover:text-primary transition-colors duration-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-sans text-xs font-semibold text-foreground mb-3">Programs</h4>
              <ul className="space-y-1.5">
                {[
                  { label: "All Programs", to: "/programs" },
                  { label: "Entrepreneurship", to: "/programs" },
                  { label: "Venture Building", to: "/programs" },
                  { label: "Digital Business", to: "/programs" },
                  { label: "Innovation Leadership", to: "/programs" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-sans text-xs text-foreground/40 hover:text-primary transition-colors duration-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-sans text-xs font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-1.5">
                {[
                  { label: "Insights", to: "/insights" },
                  { label: "Community", to: "/community" },
                  { label: "Partnerships", to: "/partnerships" },
                  { label: "Admissions", to: "/admissions" },
                  { label: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="font-sans text-xs text-foreground/40 hover:text-primary transition-colors duration-300">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-foreground/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="font-sans text-[10px] text-foreground/30">© 2026 Africa Business College. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="font-sans text-[10px] text-foreground/30 hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="font-sans text-[10px] text-foreground/30 hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/accreditation" className="font-sans text-[10px] text-foreground/30 hover:text-primary transition-colors">Accreditation</Link>
            </div>
            <p className="font-sans text-[10px] text-foreground/30">Powered by CycleBreeze</p>
          </div>
        </div>

        {/* Subscribe Success Modal */}
        {subscribed && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSubscribed(false)} />
            <div className="relative bg-card border border-foreground/10 rounded-2xl p-8 max-w-sm w-full text-center animate-fade-up">
              <Mail className="text-primary mx-auto mb-3" size={28} />
              <h3 className="text-lg text-foreground font-serif font-light mb-2">You're Subscribed</h3>
              <p className="font-sans text-xs text-foreground/60 mb-4">You will receive insights, updates, and opportunities from ABC.</p>
              <button onClick={() => setSubscribed(false)} className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-semibold text-xs">Close</button>
            </div>
          </div>
        )}
      </footer>
    </>
  );
};

export default Footer;
