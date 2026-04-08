import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "all", label: "All" },
  { id: "beginner", label: "Beginner" },
  { id: "advanced", label: "Advanced" },
  { id: "executive", label: "Executive" },
];

const programs = [
  { title: "Entrepreneurship", desc: "Master the foundations of starting and scaling a business within the unique constraints of African markets.", duration: "6 Months", level: "beginner" },
  { title: "Venture Building", desc: "Intensive, cohort-driven program focusing on the systematic creation and acceleration of new ventures.", duration: "12 Months", level: "advanced" },
  { title: "Digital Business", desc: "Leveraging emerging tech to transform traditional business models and capture value in the digital economy.", duration: "4 Months", level: "beginner" },
  { title: "Investment & Finance", desc: "Deep dive into capital structures, fundraising strategies, and financial management for high-growth firms.", duration: "8 Months", level: "advanced" },
  { title: "Innovation Leadership", desc: "Developing the strategic mindset and leadership capabilities required to drive organizational innovation.", duration: "5 Months", level: "executive" },
  { title: "Market Strategy", desc: "Navigating fragmented markets, cross-border trade, and localized consumer behavior across Africa.", duration: "3 Months", level: "beginner" },
];

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? programs : programs.filter((p) => p.level === activeTab);

  return (
    <section id="programs" className="py-20 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Programs</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">
            Designed for Africa's Next <em className="font-serif italic">Leaders</em>
          </h2>
          <p className="font-sans text-sm text-foreground/50 mt-3 max-w-xl">
            Build institutional rigor and practical execution skills through our industry-leading specialized programs.
          </p>
        </div>

        <div className="flex gap-1 relative z-10 -mb-[2px] overflow-x-auto">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-t-2xl font-sans text-xs font-medium transition-all duration-300 origin-bottom whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-card text-primary scale-105 -translate-y-1"
                  : "bg-muted/30 text-foreground/50 hover:text-foreground/80"
              }`}
              style={{ transform: `rotate(${activeTab === tab.id ? 0 : -1.5 + i * 0.5}deg) ${activeTab === tab.id ? 'translateY(-4px) scale(1.05)' : ''}` }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="serrated-edge bg-card" />
          <div className="bg-card rounded-b-2xl rounded-tr-2xl p-6 md:p-10 grid-pattern">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map((program) => (
                <div
                  key={program.title}
                  className="group border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">
                      {program.duration}
                    </span>
                  </div>
                  <h3 className="text-lg text-foreground font-light mb-1.5">{program.title}</h3>
                  <p className="text-foreground/50 font-sans text-xs mb-4">{program.desc}</p>
                  <Link to="/programs" className="inline-flex items-center gap-1.5 text-primary font-sans text-xs font-medium group-hover:gap-2.5 transition-all duration-300">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-sans text-sm font-medium hover:gap-3 transition-all duration-300">
            View All Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
