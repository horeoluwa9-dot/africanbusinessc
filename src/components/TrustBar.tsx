const stats = [
  { value: "500+", label: "Graduates" },
  { value: "12", label: "African Markets" },
  { value: "35+", label: "Faculty & Mentors" },
  { value: "8", label: "Programs" },
  { value: "4", label: "Simulation Labs" },
];

const TrustBar = () => (
  <section className="py-12 px-6 border-y border-foreground/5">
    <div className="mx-auto max-w-7xl flex flex-wrap justify-between gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 min-w-[120px]">
          <span className="font-serif text-3xl font-light text-primary">{stat.value}</span>
          <span className="font-sans text-sm text-foreground/50">{stat.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
