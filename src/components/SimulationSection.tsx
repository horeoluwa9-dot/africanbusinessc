import { Cpu, TrendingUp, Globe, Shield, Users } from "lucide-react";

const sims = [
  { icon: Cpu, title: "Entrepreneurship", desc: "Build and run a startup through growth stages" },
  { icon: TrendingUp, title: "Startup Fundraising", desc: "Navigate investor negotiations and capital structure" },
  { icon: Globe, title: "Market Expansion", desc: "Plan and execute expansion into new African markets" },
  { icon: Shield, title: "Economic Policy", desc: "Navigate macroeconomic scenarios affecting business" },
  { icon: Users, title: "Leadership Decision", desc: "Manage crises, team conflicts, and strategic pivots" },
];

const SimulationSection = () => (
  <section id="simulation-labs" className="py-24 px-6 bg-card relative">
    <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
    <div className="mx-auto max-w-7xl pt-8">
      <div className="mb-12">
        <span className="font-sans text-sm font-medium text-primary tracking-wider uppercase">Simulation Labs</span>
        <h2 className="text-4xl md:text-5xl text-foreground mt-3 max-w-2xl">
          Test Real Business <em className="font-serif italic">Decisions</em> in a Risk-Free Environment
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sims.map((sim) => (
          <div key={sim.title} className="border border-foreground/5 rounded-3xl p-6 transition-all duration-300 hover:border-primary/20 group">
            <sim.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
            <h3 className="text-xl text-foreground font-light mb-2">{sim.title}</h3>
            <p className="font-sans text-sm text-foreground/50">{sim.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
  </section>
);

export default SimulationSection;
