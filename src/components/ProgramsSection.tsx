import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tabs = [
  { id: "entrepreneurship", label: "Entrepreneurship" },
  { id: "business", label: "Business & Finance" },
  { id: "leadership", label: "Leadership" },
  { id: "technology", label: "Technology" },
];

const programs: Record<string, Array<{ title: string; desc: string; duration: string; format: string }>> = {
  entrepreneurship: [
    { title: "Entrepreneurship Fundamentals", desc: "Build from idea to operational business in African markets.", duration: "12 Weeks", format: "Cohort-Based" },
    { title: "Venture Building & Startup Ops", desc: "Structured startup creation and scaling methodologies.", duration: "6 Months", format: "Live + Async" },
  ],
  business: [
    { title: "Digital Business & Commerce", desc: "E-commerce, digital operations, and online market strategies.", duration: "12 Weeks", format: "Cohort-Based" },
    { title: "Investment & Finance", desc: "Capital markets, fundraising, and investment evaluation for Africa.", duration: "6 Months", format: "Blended" },
  ],
  leadership: [
    { title: "Innovation Leadership", desc: "Leading organizations, teams, and cultures of innovation.", duration: "8 Weeks", format: "Live + Async" },
    { title: "African Market Strategy", desc: "Market entry, expansion, and competitive positioning across Africa.", duration: "12 Weeks", format: "Cohort-Based" },
  ],
  technology: [
    { title: "Technology for Business", desc: "Applying technology solutions to business problems.", duration: "10 Weeks", format: "Self-Paced" },
  ],
};

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState("entrepreneurship");

  return (
    <section id="programs" className="py-20 px-4 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Programs</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2">
            Designed for African Markets.{" "}
            <em className="font-serif italic">Built for the World.</em>
          </h2>
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
              {programs[activeTab].map((program) => (
                <div
                  key={program.title}
                  className="group border border-foreground/5 rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">
                      {program.duration}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-foreground/5 text-foreground/50 text-[10px] font-sans">
                      {program.format}
                    </span>
                  </div>
                  <h3 className="text-lg text-foreground font-light mb-1.5">{program.title}</h3>
                  <p className="text-foreground/50 font-sans text-xs mb-4">{program.desc}</p>
                  <Link to="/programs" className="inline-flex items-center gap-1.5 text-primary font-sans text-xs font-medium group-hover:gap-2.5 transition-all duration-300">
                    Explore Program <ArrowRight size={14} />
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
