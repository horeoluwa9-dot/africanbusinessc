import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
    <section id="programs" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <span className="font-sans text-sm font-medium text-primary tracking-wider uppercase">Programs</span>
          <h2 className="text-4xl md:text-5xl text-foreground mt-3">
            Designed for African Markets.{" "}
            <em className="font-serif italic">Built for the World.</em>
          </h2>
        </div>

        {/* Folder tabs */}
        <div className="flex gap-1 relative z-10 -mb-[2px]">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-t-2xl font-sans text-sm font-medium transition-all duration-300 origin-bottom ${
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

        {/* Content area with serrated top */}
        <div className="relative">
          <div className="serrated-edge bg-card" />
          <div className="bg-card rounded-b-3xl rounded-tr-3xl p-8 md:p-12 grid-pattern">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs[activeTab].map((program) => (
                <div
                  key={program.title}
                  className="group border border-foreground/5 rounded-3xl p-6 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-sans font-medium">
                      {program.duration}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-foreground/5 text-foreground/50 text-xs font-sans">
                      {program.format}
                    </span>
                  </div>
                  <h3 className="text-xl text-foreground font-light mb-2">{program.title}</h3>
                  <p className="text-foreground/50 font-sans text-base mb-6">{program.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-primary font-sans text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Explore Program <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
