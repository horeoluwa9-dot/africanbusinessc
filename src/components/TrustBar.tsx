const stats = [
  { value: "5,000+", label: "Students" },
  { value: "200+", label: "Mentors" },
  { value: "30+", label: "Programs" },
  { value: "85%", label: "Placement Rate" },
];

const partners = [
  "Global Partners Alliance",
  "Horizon Ventures",
  "Nexus Capital",
  "Atlas Innovation Hub",
  "Meridian Forum",
  "Keystone Advisory",
];

const TrustBar = () => (
  <section className="py-10 px-4 md:px-6 border-y border-foreground/5">
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-wrap justify-between gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-0.5 min-w-[100px]">
            <span className="font-serif text-2xl font-light text-primary">{stat.value}</span>
            <span className="font-sans text-xs text-foreground/50">{stat.label}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="font-sans text-[10px] text-foreground/30 uppercase tracking-wider mb-4">
          Trusted by founders, professionals, and institutions across Africa
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((p) => (
            <span key={p} className="font-sans text-xs text-foreground/20 hover:text-foreground/40 transition-colors">{p}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBar;
