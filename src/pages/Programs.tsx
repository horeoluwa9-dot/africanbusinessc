import { useState } from "react";
import { ArrowRight, Clock, Users, BookOpen, Check, Star, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import heroImg from "@/assets/elearning-hero.png";

const categories = ["All", "Entrepreneurship", "Finance", "Technology", "Leadership", "Strategy"];

const allPrograms = [
  { title: "Entrepreneurship", desc: "Master the foundations of starting and scaling a business within the unique constraints of African markets.", duration: "6 Months", format: "Cohort-Based", level: "Beginner", focus: "Startups", category: "Entrepreneurship" },
  { title: "Venture Building", desc: "Intensive, cohort-driven program focusing on the systematic creation and acceleration of new ventures.", duration: "12 Months", format: "Hybrid", level: "Advanced", focus: "Venture Creation", category: "Entrepreneurship" },
  { title: "Digital Business", desc: "Leveraging emerging tech to transform traditional business models and capture value in the digital economy.", duration: "4 Months", format: "Online", level: "Beginner", focus: "Digital Transformation", category: "Technology" },
  { title: "Investment & Finance", desc: "Deep dive into capital structures, fundraising strategies, and financial management for high-growth firms.", duration: "8 Months", format: "Cohort-Based", level: "Advanced", focus: "Capital & Finance", category: "Finance" },
  { title: "Innovation Leadership", desc: "Developing the strategic mindset and leadership capabilities required to drive organizational innovation.", duration: "5 Months", format: "Hybrid", level: "Executive", focus: "Innovation", category: "Leadership" },
  { title: "Technology for Business", desc: "Apply AI, machine learning, and emerging tech to solve real business challenges in African contexts.", duration: "6 Months", format: "Online", level: "Advanced", focus: "AI & Tech", category: "Technology" },
  { title: "African Market Strategy", desc: "Navigating fragmented markets, cross-border trade, and localized consumer behavior across Africa.", duration: "3 Months", format: "Online", level: "Beginner", focus: "Market Strategy", category: "Strategy" },
];

const outcomes = [
  { icon: BookOpen, label: "Practical business skills" },
  { icon: Users, label: "Real-world execution experience" },
  { icon: Star, label: "Business frameworks" },
  { icon: ChevronRight, label: "Strategic thinking" },
  { icon: Check, label: "Portfolio of work" },
];

const testimonials = [
  { quote: "ABC gave me the precise frameworks to navigate cross-border payments in West Africa. My venture scaled from 2 markets to 5.", name: "David Okafor", role: "Founder, Payswitch Africa", program: "MBA Program" },
  { quote: "The simulation labs were a game changer. Making high-stakes decisions in the lab before doing it in my real board room was invaluable.", name: "Fatima Bello", role: "Director of Ops, AgroGrow", program: "Executive Leadership" },
  { quote: "The faculty don't just teach — they've built businesses. That changes everything about how you learn.", name: "Amara Osei", role: "CEO, NovaPay", program: "Entrepreneurship Accelerator" },
];

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allPrograms
    : allPrograms.filter((p) => p.category === activeCategory);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Programs</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
              Explore Our <em className="font-serif italic text-primary">Programs</em>
            </h1>
            <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
              Practical, execution-focused programs designed for African entrepreneurs, professionals, and leaders.
            </p>
            <div className="mt-6">
              <a href="#program-grid" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block">
                Explore Programs
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <img src={heroImg} alt="Young professionals" className="w-full rounded-2xl object-cover max-h-80 opacity-80" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 md:px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground/60 hover:text-foreground border border-foreground/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Program Grid */}
      <section id="program-grid" className="px-4 md:px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((program) => (
              <div key={program.title} className="group border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 bg-card">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">{program.level}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-foreground/5 text-foreground/50 text-[10px] font-sans">{program.format}</span>
                </div>
                <h3 className="text-lg text-foreground font-light mb-1.5">{program.title}</h3>
                <p className="text-foreground/50 font-sans text-xs mb-3">{program.desc}</p>
                <p className="font-sans text-[10px] text-foreground/40 mb-4">{program.duration}</p>
                <Link to={`/programs/${program.title.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-')}`} className="inline-flex items-center gap-1.5 text-primary font-sans text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                  Explore Program <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Featured Program</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
            <div>
              <h2 className="text-3xl md:text-4xl text-foreground mb-3">
                <em className="font-serif italic">Investment & Finance</em>
              </h2>
              <p className="font-sans text-sm text-foreground/60 mb-4">
                Deep dive into capital structures, fundraising strategies, and financial management for high-growth firms. This flagship program prepares you to navigate Africa's evolving investment landscape.
              </p>
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <span className="font-sans text-xs text-foreground/50">Duration: <strong className="text-foreground">8 Months</strong></span>
                <span className="font-sans text-xs text-foreground/50">Format: <strong className="text-foreground">Cohort-Based</strong></span>
                <span className="font-sans text-xs text-foreground/50">Level: <strong className="text-foreground">Advanced</strong></span>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block">
                  View Details
                </Link>
                <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
                  Apply Now
                </Link>
              </div>
            </div>
            <div className="border border-foreground/5 rounded-2xl p-6 bg-background/50">
              <h4 className="font-sans text-xs font-medium text-primary mb-4 uppercase tracking-wider">Key Outcomes</h4>
              <div className="grid grid-cols-2 gap-3">
                {["Validated Business Model", "Investor-Ready Pitch", "Market Entry Strategy", "Financial Projections", "Growth Playbook", "Mentor Network"].map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 p-2.5 rounded-xl bg-card border border-foreground/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="font-sans text-xs text-foreground/70">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Program Comparison */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Compare</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
            Compare <em className="font-serif italic">Programs</em>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-foreground/10">
                  {["Program", "Duration", "Level", "Focus Area", "Format"].map((h) => (
                    <th key={h} className="py-3 px-4 font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allPrograms.map((p) => (
                  <tr key={p.title} className="border-b border-foreground/5 hover:bg-card transition-colors">
                    <td className="py-3 px-4 font-sans text-sm text-foreground">{p.title}</td>
                    <td className="py-3 px-4 font-sans text-xs text-foreground/60">{p.duration}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-sans font-medium ${p.level === "Advanced" ? "bg-primary/10 text-primary" : p.level === "Executive" ? "bg-primary/20 text-primary" : "bg-foreground/5 text-foreground/60"}`}>
                        {p.level}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-sans text-xs text-foreground/60">{p.focus}</td>
                    <td className="py-3 px-4 font-sans text-xs text-foreground/60">{p.format}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Outcomes</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
            What You Will <em className="font-serif italic">Gain</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {outcomes.map((o) => (
              <div key={o.label} className="border border-foreground/5 rounded-2xl p-5 text-center">
                <o.icon className="text-primary mx-auto mb-3" size={24} strokeWidth={1.5} />
                <p className="font-sans text-xs text-foreground/70">{o.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Cohort Experience */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Cohort</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
                Learn With a <em className="font-serif italic">Cohort</em>
              </h2>
              <p className="font-sans text-sm text-foreground/60 mb-6">
                At ABC, you learn alongside a carefully selected group of peers from across Africa. The cohort model creates accountability, collaboration, and lifelong connections.
              </p>
              <ul className="space-y-2">
                {["Peer learning & collaboration", "Shared accountability structures", "Structured progress milestones", "Cross-border networking"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                    <Check size={14} className="text-primary mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "30", label: "Students per cohort" },
                { val: "12", label: "Countries represented" },
                { val: "95%", label: "Completion rate" },
                { val: "4.8", label: "Avg satisfaction" },
              ].map((s) => (
                <div key={s.label} className="border border-foreground/5 rounded-2xl p-5 bg-card text-center">
                  <p className="font-serif text-2xl text-primary">{s.val}</p>
                  <p className="font-sans text-[10px] text-foreground/50 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Stories</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
            Student <em className="font-serif italic">Experiences</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="border border-foreground/5 rounded-2xl p-5 bg-background/50">
                <p className="font-serif italic text-sm text-foreground/80 mb-4">"{t.quote}"</p>
                <p className="font-sans text-xs font-medium text-foreground">{t.name}</p>
                <p className="font-sans text-[10px] text-foreground/50">{t.role}</p>
                <p className="font-sans text-[10px] text-primary mt-1">{t.program}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Upcoming Cohorts */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Upcoming</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
            Upcoming <em className="font-serif italic">Programs</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { program: "Entrepreneurship", start: "May 2026", deadline: "April 15, 2026" },
              { program: "Investment & Finance", start: "June 2026", deadline: "May 20, 2026" },
              { program: "Innovation Leadership", start: "September 2026", deadline: "August 1, 2026" },
            ].map((c) => (
              <div key={c.program} className="border border-foreground/5 rounded-2xl p-5 bg-card">
                <h3 className="text-base text-foreground font-light mb-3">{c.program}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-foreground/50 font-sans text-xs">
                    <Calendar size={14} className="text-primary" />
                    Starts {c.start}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/50 font-sans text-xs">
                    <Clock size={14} className="text-primary" />
                    Deadline: {c.deadline}
                  </div>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">
                  Limited spots available
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Find the Right <em className="font-serif italic">Program</em> for You
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#program-grid" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
              Explore Programs
            </a>
            <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Programs;
