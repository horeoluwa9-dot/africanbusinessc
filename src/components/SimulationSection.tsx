import { Cpu, TrendingUp, Globe, Shield, Users, BarChart3, Activity, Layers, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const sims = [
  { icon: Cpu, title: "Entrepreneurship Simulation", desc: "Build and scale a virtual startup from idea to market." },
  { icon: TrendingUp, title: "Startup Fundraising Simulation", desc: "Practice pitching to VCs with AI-powered feedback." },
  { icon: Globe, title: "Market Expansion Simulation", desc: "Navigate regulatory and market dynamics across Africa." },
  { icon: Users, title: "Leadership Decision Lab", desc: "Navigate complex organizational dynamics under pressure." },
  { icon: Shield, title: "Economic Policy Simulation", desc: "Design business-friendly policies and understand impact." },
];

const tools = [
  { icon: BarChart3, title: "Financial Modeling", desc: "Build complex financial models with African market data." },
  { icon: Activity, title: "Market Analysis", desc: "Real-time market intelligence and competitive mapping." },
  { icon: TrendingUp, title: "Investment Evaluation", desc: "Assess opportunities with valuation frameworks." },
  { icon: Layers, title: "Startup Valuation", desc: "Real-time company valuation with scenario modeling." },
  { icon: Target, title: "Strategy Frameworks", desc: "Structured strategic planning for African contexts." },
  { icon: Brain, title: "Business Planning", desc: "End-to-end business plan creation and validation." },
];

const SimulationSection = () => (
  <section id="simulation-labs" className="py-20 px-4 md:px-6 bg-card relative">
    <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
    <div className="mx-auto max-w-7xl pt-6">
      {/* Simulation Labs */}
      <div className="mb-10 text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Simulation Labs</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 max-w-2xl">
          Learn by Doing, Not Just <em className="font-serif italic">Studying</em>
        </h2>
        <p className="font-sans text-sm text-foreground/50 mt-3 max-w-xl">
          Students test real-world business decisions through interactive simulations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        {sims.map((sim) => (
          <div key={sim.title} className="border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/20 group">
            <sim.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-base text-foreground font-light mb-1.5">{sim.title}</h3>
            <p className="font-sans text-xs text-foreground/50">{sim.desc}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 text-center">
        <Link to="/simulation-labs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block">
          Explore Simulation Labs
        </Link>
      </div>

      {/* Business Instrument Studio */}
      <div className="pt-12 border-t border-foreground/5">
        <div className="mb-8 text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Business Instrument Studio</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 max-w-2xl">
            Use Real Business <em className="font-serif italic">Tools</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {tools.map((tool) => (
            <div key={tool.title} className="border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5 group">
              <tool.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{tool.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{tool.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-serif italic text-sm text-foreground/60 text-center mt-6">
          "You don't just learn business. You practice it with real tools."
        </p>
      </div>
    </div>
    <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
  </section>
);

export default SimulationSection;
