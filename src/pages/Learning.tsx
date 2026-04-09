import { Check, ArrowRight, Play, BookOpen, Cpu, Layers, Target, Brain, Zap, Users, BarChart3, Activity, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import aboutVideoCall from "@/assets/about-video-call.png";
import aboutClassroom from "@/assets/about-classroom.png";

const steps = [
  { num: "01", icon: BookOpen, title: "Learn", desc: "Live sessions + curated content from practitioners" },
  { num: "02", icon: Layers, title: "Apply", desc: "Projects + exercises based on real business challenges" },
  { num: "03", icon: Cpu, title: "Simulate", desc: "Decision-making environments with real consequences" },
  { num: "04", icon: Target, title: "Build", desc: "Capstone projects that become real ventures" },
];

const sims = [
  "Entrepreneurship Simulation", "Startup Fundraising Simulation", "Market Expansion Simulation",
  "Leadership Decision Lab", "Economic Policy Simulation",
];

const tools = [
  { icon: BarChart3, title: "Financial Modeling" },
  { icon: Activity, title: "Market Analysis" },
  { icon: TrendingUp, title: "Investment Evaluation" },
  { icon: Layers, title: "Startup Valuation" },
  { icon: Target, title: "Strategy Frameworks" },
  { icon: Brain, title: "Business Planning" },
];

const Learning = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Learning Experience</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
            Learn by <em className="font-serif italic text-primary">Doing</em>, Not Just Studying
          </h1>
          <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
            ABC combines live learning, real-world projects, simulations, and mentorship to create an execution-focused business education.
          </p>
          <p className="font-serif italic text-xs text-foreground/40 mt-2">
            Built for entrepreneurs, operators, and decision-makers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">Explore Programs</Link>
            <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Apply Now</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={aboutVideoCall} alt="Virtual learning" className="w-full rounded-2xl object-cover max-h-80 opacity-80" loading="lazy" />
        </div>
      </div>
    </section>

    {/* How Learning Works */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Process</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          How Learning <em className="font-serif italic">Works</em> at ABC
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.num} className="relative border border-foreground/5 rounded-2xl p-5 bg-background/50 group hover:border-primary/20 transition-all duration-300">
              <span className="font-mono text-3xl font-light text-primary/30">{s.num}</span>
              <s.icon className="text-primary mt-2 mb-2" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{s.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{s.desc}</p>
              {i < 3 && <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 text-foreground/10" size={16} />}
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Learning Format */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Format</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6">
            Structured, Flexible, and <em className="font-serif italic">Cohort-Based</em>
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {["Live Classes", "Recorded Sessions", "Cohort Learning", "Flexible Access"].map((item) => (
              <div key={item} className="border border-foreground/5 rounded-2xl p-4 bg-card text-center">
                <p className="font-sans text-xs text-foreground/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={aboutClassroom} alt="Digital classroom" className="w-full rounded-2xl object-cover max-h-64 opacity-70" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Practical Learning */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-6">
          Built Around <em className="font-serif italic">Real Work</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {["Real-world projects with industry partners", "Case-based learning from African markets", "Capstone execution — build something real", "Business problem solving with live data"].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-foreground/5 bg-background/50">
              <Check size={14} className="text-primary mt-0.5 shrink-0" />
              <span className="font-sans text-xs text-foreground/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Simulation Labs */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Simulation Labs</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Practice Real Decisions in Simulated <em className="font-serif italic">Environments</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {sims.map((s) => (
            <div key={s} className="border border-foreground/5 rounded-2xl p-4 bg-card text-center hover:border-primary/20 transition-all duration-300">
              <Cpu className="text-primary mx-auto mb-2" size={20} strokeWidth={1.5} />
              <p className="font-sans text-xs text-foreground/70">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/simulation-labs" className="inline-flex items-center gap-2 text-primary font-sans text-xs font-medium hover:gap-3 transition-all duration-300">
            Explore Simulation Labs <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>

    {/* Business Instrument Studio */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Business Instrument Studio</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Use the Tools Real Businesses <em className="font-serif italic">Use</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {tools.map((t) => (
            <div key={t.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 hover:border-primary/20 transition-all duration-300">
              <t.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <p className="font-sans text-xs text-foreground/70">{t.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Mentorship */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-foreground mb-6">
          Guided by <em className="font-serif italic">Practitioners</em>
        </h2>
        <ul className="space-y-2 max-w-xl">
          {["Learn from entrepreneurs, investors, and operators", "Continuous feedback on your work", "Office hours and mentorship sessions", "Industry connections that last beyond the program"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
              <Check size={14} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Outcomes */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          What You <em className="font-serif italic">Leave</em> With
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["A validated business idea", "Practical business skills", "Real project portfolio", "Network connections"].map((item) => (
            <div key={item} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 text-center">
              <p className="font-sans text-xs text-foreground/70">{item}</p>
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
          Start Learning by <em className="font-serif italic">Building</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 mb-8">Next cohort starting soon</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">Apply Now</Link>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Explore Programs</Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Learning;
