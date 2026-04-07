import heroImage from "@/assets/hero-abstract.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block font-sans text-xs font-medium text-primary tracking-wider uppercase mb-4">
              Est. 2026 — Virtual-First Institution
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
              A New Generation of African{" "}
              <em className="not-italic font-serif italic text-primary">Business</em>{" "}
              Leadership
            </h1>
          </div>

          <p className="opacity-0 animate-fade-up text-foreground/60 text-base font-sans max-w-md" style={{ animationDelay: "0.15s" }}>
            Equipping entrepreneurs, innovators, and executives with practical
            business knowledge designed for African markets.
          </p>

          <div className="opacity-0 animate-fade-up flex flex-wrap gap-3" style={{ animationDelay: "0.3s" }}>
            <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
              Explore Programs
            </Link>
            <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
              Apply Now
            </Link>
          </div>

          <div className="opacity-0 animate-fade-up flex items-center gap-3 mt-2" style={{ animationDelay: "0.45s" }}>
            <div className="flex -space-x-2.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background" style={{ opacity: 0.7, filter: 'grayscale(70%)' }} />
              ))}
            </div>
            <p className="text-xs font-sans text-foreground/50">
              <span className="text-foreground font-medium">500+</span> graduates across 12 African markets
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <div className="opacity-0 animate-fade-in relative" style={{ animationDelay: "0.3s" }}>
            <div
              className="w-full aspect-[3/4] md:aspect-[4/5] overflow-hidden"
              style={{ borderRadius: "10rem 10rem 1.5rem 1.5rem" }}
            >
              <img
                src={heroImage}
                alt="Abstract architectural forms representing African innovation"
                className="w-full h-full object-cover"
                width={1024}
                height={1344}
              />
            </div>

            <div
              className="absolute -bottom-4 -left-4 md:left-8 bg-primary text-primary-foreground px-5 py-3 rounded-2xl shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]"
              style={{ transform: "rotate(6deg)" }}
            >
              <p className="font-serif italic text-base">8 Programs</p>
              <p className="font-sans text-xs font-medium opacity-80">Starting Q3 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
