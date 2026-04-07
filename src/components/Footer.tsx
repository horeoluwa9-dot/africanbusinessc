const Footer = () => (
  <footer className="py-16 px-6 border-t border-foreground/5">
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="font-sans text-xs font-semibold text-primary-foreground">ABC</span>
            </div>
            <span className="font-serif text-lg font-light text-foreground">Africa Business College</span>
          </div>
          <p className="font-sans text-sm text-foreground/40">
            A virtual-first African business institution equipping the next generation of leaders.
          </p>
        </div>

        {[
          { title: "Programs", links: ["Entrepreneurship", "Venture Building", "Digital Business", "Investment & Finance"] },
          { title: "Institution", links: ["About ABC", "Faculty & Mentors", "Partnerships", "Insights"] },
          { title: "Connect", links: ["Admissions", "Contact", "Community", "Alumni Network"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-sans text-sm font-semibold text-foreground mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-sans text-sm text-foreground/40 hover:text-primary transition-colors duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-foreground/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-sans text-xs text-foreground/30">© 2026 Africa Business College. All rights reserved.</p>
        <p className="font-sans text-xs text-foreground/30">Powered by CycleBreeze</p>
      </div>
    </div>
  </footer>
);

export default Footer;
