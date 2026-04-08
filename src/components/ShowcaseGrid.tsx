import { Link } from "react-router-dom";
import { Play, BookOpen, Cpu } from "lucide-react";

const ShowcaseGrid = () => (
  <section className="py-20 px-4 md:px-6">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Learning Experience</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 max-w-2xl">
          A Practical, Execution-Focused <em className="font-serif italic">Ecosystem</em>
        </h2>
        <p className="font-sans text-sm text-foreground/50 mt-3 max-w-xl">
          We've built a learning model that bridges the gap between theoretical knowledge and real-world execution. ABC students don't just study business—they build it.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Play, title: "Live Interactive Classes", desc: "Real-time engagement with global faculty and industry practitioners." },
          { icon: BookOpen, title: "Cohort-Based Learning", desc: "Deep relationships with ambitious peers from over 30 countries." },
          { icon: Cpu, title: "Simulation Labs", desc: "Test high-stakes business decisions in a risk-free virtual environment." },
        ].map((item) => (
          <div key={item.title} className="border border-foreground/5 rounded-2xl p-6 bg-card transition-all duration-300 hover:border-primary/20">
            <item.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
            <h3 className="text-base text-foreground font-light mb-2">{item.title}</h3>
            <p className="font-sans text-xs text-foreground/50">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Link to="/programs" className="text-primary font-sans text-xs font-medium hover:underline">Explore Learning →</Link>
        <Link to="/simulation-labs" className="text-primary font-sans text-xs font-medium hover:underline">View Simulations →</Link>
      </div>

      {/* Learning Platform Preview */}
      <div className="border border-foreground/5 rounded-2xl p-5 md:p-8 bg-card/50">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">Now Playing</span>
          <span className="px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/40 text-[10px] font-sans">LIVE SEMINAR</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="aspect-video rounded-xl overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
              alt="Learning session"
              className="w-full h-full object-cover opacity-80"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-sans text-sm text-foreground font-medium">Module 4: Venture Scaling</p>
            <p className="font-sans text-xs text-foreground/40 mt-1">Learn strategies for scaling ventures across multiple African markets with real case studies.</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-foreground/40">ABC Learning Platform</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ShowcaseGrid;
