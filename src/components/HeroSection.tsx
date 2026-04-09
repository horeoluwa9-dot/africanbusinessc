import heroImage from "@/assets/hero-abstract.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block font-sans text-xs font-medium text-primary tracking-wider uppercase mb-4">
              Admissions Open for 2026
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              A New Generation of African{" "}
              <em className="not-italic font-serif italic text-primary">Business</em>{" "}
              Leadership
            </h1>
          </div>

          <p className="opacity-0 animate-fade-up text-foreground/60 text-base font-sans max-w-md" style={{ animationDelay: "0.15s" }}>
            Africa Business College is a virtual-first institution equipping entrepreneurs, innovators, and executives with practical business knowledge designed for African markets.
          </p>

          <div className="opacity-0 animate-fade-up flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
              Explore Programs
            </Link>
            <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
              Apply Now
            </Link>
          </div>

          <div className="opacity-0 animate-fade-up flex items-center gap-4 mt-2" style={{ animationDelay: "0.45s" }}>
            <span className="font-sans text-xs text-foreground/50">100% Online</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span className="font-sans text-xs text-foreground/50">Pan-African Network</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span className="font-sans text-xs text-foreground/50">Built by CycleBreeze</span>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="opacity-0 animate-fade-in relative" style={{ animationDelay: "0.3s" }}>
            {/* Learning Platform Preview Card */}
            <div className="w-full border border-foreground/5 rounded-2xl p-5 bg-card/80 backdrop-blur-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="font-mono text-[10px] text-foreground/40 uppercase tracking-wider">Learning Progress</span>
                </div>
                <span className="font-sans text-[10px] text-foreground/30">Mentors</span>
              </div>

              <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-background/50 border border-foreground/5">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=120" alt="Course" className="w-12 h-12 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-sans text-xs font-medium text-foreground">Advanced Venture Strategy</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-sans text-[10px] text-foreground/40">Progress</span>
                    <div className="flex-1 h-1 bg-foreground/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
                    </div>
                    <span className="font-mono text-[10px] text-primary">65%</span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">Continue</span>
                  <span className="px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/40 text-[10px] font-sans">Details</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="p-2.5 rounded-lg bg-background/50 border border-foreground/5">
                  <p className="font-sans text-[10px] text-foreground/40">Module 4: Markets</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                </div>
                <div className="p-2.5 rounded-lg bg-background/50 border border-foreground/5">
                  <p className="font-sans text-[10px] text-foreground/40">Live Session at 2PM</p>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1" />
                </div>
                <div className="p-2.5 rounded-lg bg-background/50 border border-foreground/5">
                  <p className="font-sans text-[10px] text-foreground/40">Module 3: Finance</p>
                  <p className="font-sans text-[8px] text-foreground/30 mt-0.5">Completed</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
                <div>
                  <p className="font-sans text-xs text-foreground/70">Learning Progress</p>
                  <p className="font-mono text-lg text-primary font-semibold">84% Complete</p>
                </div>
                <span className="font-sans text-[10px] text-foreground/30">Built by CycleBreeze</span>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 md:left-8 bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]"
              style={{ transform: "rotate(6deg)" }}
            >
              <p className="font-serif italic text-base">30+ Programs</p>
              <p className="font-sans text-xs font-medium opacity-80">Starting Q3 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
