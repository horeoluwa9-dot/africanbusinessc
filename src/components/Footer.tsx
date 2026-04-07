import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-14 px-4 md:px-6 border-t border-foreground/5">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        <div>
          <Link to="/" className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="font-sans text-[10px] font-semibold text-primary-foreground">ABC</span>
            </div>
            <span className="font-serif text-base font-light text-foreground">Africa Business College</span>
          </Link>
          <p className="font-sans text-xs text-foreground/40">
            A virtual-first African business institution equipping the next generation of leaders.
          </p>
        </div>

        {[
          { title: "Programs", links: [
            { label: "Entrepreneurship", to: "/programs" },
            { label: "Venture Building", to: "/programs" },
            { label: "Digital Business", to: "/programs" },
            { label: "Investment & Finance", to: "/programs" },
          ]},
          { title: "Institution", links: [
            { label: "Faculty & Mentors", to: "/faculty" },
            { label: "Partnerships", to: "/partnerships" },
            { label: "Community", to: "/community" },
            { label: "Simulation Labs", to: "/simulation-labs" },
          ]},
          { title: "Connect", links: [
            { label: "Apply Now", to: "/programs" },
            { label: "Student Login", to: "/dashboard" },
            { label: "Faculty Login", to: "/faculty-dashboard" },
            { label: "Contact", to: "/partnerships" },
          ]},
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-xs font-semibold text-foreground mb-3">{col.title}</h4>
            <ul className="space-y-1.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="font-sans text-xs text-foreground/40 hover:text-primary transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-foreground/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-sans text-[10px] text-foreground/30">© 2026 Africa Business College. All rights reserved.</p>
        <p className="font-sans text-[10px] text-foreground/30">Powered by CycleBreeze</p>
      </div>
    </div>
  </footer>
);

export default Footer;
