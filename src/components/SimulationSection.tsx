import { Cpu, TrendingUp, Globe, Shield, Users, BarChart3, Activity, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const sims = [
  { icon: Cpu, title: "Entrepreneurship", desc: "Build and run a startup through growth stages with real-time metrics" },
  { icon: TrendingUp, title: "Startup Fundraising", desc: "Navigate investor negotiations, term sheets, and capital structure" },
  { icon: Globe, title: "Market Expansion", desc: "Plan and execute expansion into new African markets using live data" },
  { icon: Shield, title: "Economic Policy", desc: "Navigate macroeconomic scenarios affecting business decisions" },
  { icon: Users, title: "Leadership Decision", desc: "Manage crises, team conflicts, and strategic pivots in real-time" },
];

const tools = [
  { icon: BarChart3, title: "Financial Modeling", desc: "Professional-grade financial models and projections" },
  { icon: Activity, title: "Market Analysis", desc: "Real-time market analysis dashboards and insights" },
  { icon: TrendingUp, title: "Startup Valuation", desc: "Industry-standard valuation tools and frameworks" },
  { icon: Layers, title: "Strategy Frameworks", desc: "Business planning environments and strategic tools" },
];

const SimulationSection = () => (
  <section id="simulation-labs" className="py-20 px-4 md:px-6 bg-card relative">
    <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
    <div className="mx-auto max-w-7xl pt-6">
      <div className="mb-10 text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Simulation Labs</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 max-w-2xl">
          Test Real Business <em className="font-serif italic">Decisions</em> in a Risk-Free Environment
        </h2>
        <p className="font-sans text-sm text-foreground/50 mt-3 max-w-xl">
          ABC's unique simulation environments let students test real-world decisions through interactive systems with immediate feedback and measurable outcomes.
        </p>
      </div>

      {/* Simulation dashboard preview */}
      <div className="mb-12 border border-foreground/5 rounded-2xl p-5 md:p-8 bg-background/50">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
          {["Revenue", "Users", "Burn Rate", "Runway", "MRR"].map((metric, i) => (
            <div key={metric} className="bg-card rounded-xl p-3 border border-foreground/5">
              <p className="font-mono text-[10px] text-foreground/40 uppercase">{metric}</p>
              <p className="font-sans text-lg font-semibold text-primary mt-1">
                {["$24K", "1.2K", "$8K", "18mo", "$12K"][i]}
              </p>
              <div className="mt-2 h-1 bg-foreground/5 rounded-full overflow-hidden">
                <div className="h-full bg-primary/60 rounded-full" style={{ width: `${[72, 45, 30, 85, 60][i]}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-foreground/30">
          <Activity size={14} />
          <span className="font-mono text-[10px] uppercase tracking-wider">Live simulation dashboard preview</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sims.map((sim) => (
          <div key={sim.title} className="border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/20 group">
            <sim.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-lg text-foreground font-light mb-1.5">{sim.title}</h3>
            <p className="font-sans text-xs text-foreground/50">{sim.desc}</p>
          </div>
        ))}
      </div>

      {/* Business Instrument Studio */}
      <div className="mt-16 pt-12 border-t border-foreground/5">
        <div className="mb-8 text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Business Instrument Studio</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 max-w-2xl">
            Professional-Grade <em className="font-serif italic">Tools</em> for Real Decisions
          </h2>
          <p className="font-sans text-sm text-foreground/50 mt-3 max-w-xl">
            A dedicated environment where students use professional-grade business tools to make real decisions. Students learn by doing real work, not just consuming content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {tools.map((tool) => (
            <div key={tool.title} className="border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 group">
              <tool.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{tool.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{tool.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/simulation-labs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block">
            Explore Simulation Labs
          </Link>
        </div>
      </div>
    </div>
    <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
  </section>
);

export default SimulationSection;
