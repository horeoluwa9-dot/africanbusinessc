import { Cpu, TrendingUp, Globe, Shield, Users, BarChart3, Activity, Layers, ArrowRight, Check, Zap, Target, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const steps = [
  { num: "01", title: "Enter Scenario", desc: "You are placed in a real-world business situation with real data and constraints." },
  { num: "02", title: "Make Decisions", desc: "Choose actions across strategy, finance, operations, and growth." },
  { num: "03", title: "See Outcomes", desc: "Experience the results of your decisions with measurable impact metrics." },
  { num: "04", title: "Iterate", desc: "Adjust and improve your approach based on feedback and outcomes." },
];

const sims = [
  { icon: Cpu, title: "Entrepreneurship Simulation", desc: "Build and scale a startup from zero to market with real constraints and decisions." },
  { icon: TrendingUp, title: "Startup Fundraising Simulation", desc: "Raise capital, negotiate term sheets, and manage investor relationships." },
  { icon: Globe, title: "Market Expansion Simulation", desc: "Enter and grow in new African markets using live economic data." },
  { icon: Shield, title: "Economic Policy Simulation", desc: "Understand macro-level decision-making and its impact on business." },
  { icon: Users, title: "Leadership Decision Simulation", desc: "Navigate complex organizational challenges, crises, and strategic pivots." },
];

const tools = [
  { icon: BarChart3, title: "Financial Modeling Tools", desc: "Build professional financial models and projections" },
  { icon: Activity, title: "Market Analysis Dashboards", desc: "Real-time market analysis with industry data" },
  { icon: TrendingUp, title: "Investment Evaluation Tools", desc: "Evaluate deals and investment opportunities" },
  { icon: Layers, title: "Startup Valuation Tools", desc: "Industry-standard valuation methodologies" },
  { icon: Target, title: "Strategy Frameworks", desc: "Structured frameworks for strategic decisions" },
  { icon: Brain, title: "Business Planning", desc: "Comprehensive business planning environments" },
];

const SimulationLabs = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Simulation Labs</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Learn Business by Making <em className="font-serif italic text-primary">Real Decisions</em>
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          ABC Simulation Labs place you in real-world business environments where your decisions shape outcomes.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>

    {/* Dashboard Preview */}
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="border border-foreground/5 rounded-2xl p-5 md:p-8 bg-card">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">Simulation Dashboard — Live Preview</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
            {[
              { label: "Market Share", val: "23.4%", change: "+2.1%" },
              { label: "Revenue", val: "₦340K", change: "+12%" },
              { label: "Team Size", val: "18", change: "+3" },
              { label: "Runway", val: "14mo", change: "-2mo" },
            ].map((m) => (
              <div key={m.label} className="bg-background rounded-xl p-3 border border-foreground/5">
                <p className="font-mono text-[10px] text-foreground/40 uppercase">{m.label}</p>
                <p className="font-sans text-xl font-semibold text-foreground mt-1">{m.val}</p>
                <p className={`font-mono text-[10px] mt-1 ${m.change.startsWith('+') ? 'text-primary' : 'text-destructive'}`}>{m.change}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="md:col-span-2 bg-background rounded-xl p-4 border border-foreground/5">
              <p className="font-mono text-[10px] text-foreground/40 uppercase mb-3">Decision Panel</p>
              <div className="space-y-2">
                {["Expand to East Africa", "Raise Series A", "Hire CTO"].map((d, i) => (
                  <div key={d} className="flex items-center justify-between p-2.5 rounded-lg bg-card border border-foreground/5">
                    <span className="font-sans text-xs text-foreground/70">{d}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-medium ${i === 0 ? 'bg-primary/10 text-primary' : 'bg-foreground/5 text-foreground/40'}`}>
                      {i === 0 ? 'Active' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-background rounded-xl p-4 border border-foreground/5">
              <p className="font-mono text-[10px] text-foreground/40 uppercase mb-3">Performance</p>
              <div className="space-y-3">
                {[
                  { label: "Strategy", pct: 78 },
                  { label: "Finance", pct: 65 },
                  { label: "Operations", pct: 82 },
                  { label: "Leadership", pct: 71 },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="flex justify-between mb-1">
                      <span className="font-sans text-[10px] text-foreground/50">{p.label}</span>
                      <span className="font-mono text-[10px] text-primary">{p.pct}%</span>
                    </div>
                    <div className="h-1 bg-foreground/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary/60 rounded-full" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What Are Simulation Labs */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Overview</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4 max-w-2xl">
          What Are <em className="font-serif italic">Simulation Labs</em>?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <p className="font-sans text-sm text-foreground/60">
            Simulation Labs are interactive business environments where you face real-world scenarios, make critical decisions, and see the immediate impact of your choices. Unlike traditional case studies, our simulations are dynamic, data-driven, and designed to build practical decision-making skills.
          </p>
          <ul className="space-y-2">
            {["Interactive business environments with real data", "Real-world scenarios from African markets", "Decision-based learning with immediate feedback", "Measurable outcomes and performance tracking"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* How It Works */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Process</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          How Simulation Learning <em className="font-serif italic">Works</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={step.num} className="relative border border-foreground/5 rounded-2xl p-5 bg-card group hover:border-primary/20 transition-all duration-300">
              <span className="font-mono text-3xl font-light text-primary/30">{step.num}</span>
              <h3 className="text-base text-foreground font-light mt-2 mb-1.5">{step.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{step.desc}</p>
              {i < 3 && <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 text-foreground/10" size={16} />}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Types of Simulations */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Environments</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Simulation <em className="font-serif italic">Environments</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sims.map((sim) => (
            <div key={sim.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 transition-all duration-300 hover:border-primary/20 group">
              <sim.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{sim.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{sim.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Why It Matters */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Impact</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
              Why Simulation-Based Learning <em className="font-serif italic">Matters</em>
            </h2>
          </div>
          <ul className="space-y-3">
            {[
              { icon: Zap, text: "Learn by doing, not just studying" },
              { icon: Target, text: "Experience real consequences of decisions" },
              { icon: Brain, text: "Build decision-making confidence" },
              { icon: Globe, text: "Prepare for real-world complexity" },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-3 p-3 rounded-xl border border-foreground/5 bg-card">
                <item.icon className="text-primary shrink-0 mt-0.5" size={18} strokeWidth={1.5} />
                <span className="font-sans text-sm text-foreground/70">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Business Instrument Studio */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Business Instrument Studio</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-3 max-w-2xl">
          Professional-Grade <em className="font-serif italic">Tools</em> for Real Decisions
        </h2>
        <p className="font-sans text-sm text-foreground/60 mb-8 max-w-xl">
          Students don't just simulate — they use real professional tools. A dedicated environment where real decisions are made with industry-standard instruments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <div key={tool.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5">
              <tool.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{tool.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Sample Experience */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Experience</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6">
          A Typical Simulation <em className="font-serif italic">Experience</em>
        </h2>
        <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
          <p className="font-serif italic text-base text-foreground/80 mb-4 leading-relaxed">
            "You are leading a startup entering a new East African market. Your product has traction in Nigeria, but the regulatory environment, consumer behavior, and competitive landscape are entirely different. "You are leading a startup entering a new East African market. Your product has traction in Nigeria, but the regulatory environment, consumer behavior, and competitive landscape are entirely different. You have ₦500M in runway and 6 months to prove product-market fit." and 6 months to prove product-market fit."
          </p>
          <div className="space-y-3 mt-6">
            <div className="flex items-start gap-3">
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">Decision 1</span>
              <span className="font-sans text-xs text-foreground/60">Choose your market entry strategy: direct launch, local partnership, or acquisition.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">Decision 2</span>
              <span className="font-sans text-xs text-foreground/60">Allocate your budget across marketing, product localization, and team building.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">Outcome</span>
              <span className="font-sans text-xs text-foreground/60">See how your decisions affect market share, burn rate, and growth trajectory over 12 simulated months.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Learning Outcomes */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Outcomes</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          What You <em className="font-serif italic">Gain</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Brain, label: "Decision-making ability" },
            { icon: Target, label: "Strategic thinking" },
            { icon: Zap, label: "Practical experience" },
            { icon: Shield, label: "Confidence in execution" },
          ].map((o) => (
            <div key={o.label} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 text-center">
              <o.icon className="text-primary mx-auto mb-3" size={24} strokeWidth={1.5} />
              <p className="font-sans text-xs text-foreground/70">{o.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Final CTA */}
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Experience Business, Don't Just <em className="font-serif italic">Study</em> It
        </h2>
        <p className="font-sans text-sm text-foreground/60 mb-8">
          Step into real business scenarios and build the skills that matter.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Explore Programs
          </Link>
          <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default SimulationLabs;
