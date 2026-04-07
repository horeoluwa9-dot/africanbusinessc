import heroImage from "@/assets/hero-abstract.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column - 5 cols */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div className="opacity-0 animate-fade-up">
            <span className="inline-block font-sans text-sm font-medium text-primary tracking-wider uppercase mb-6">
              Est. 2026 — Virtual-First Institution
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-foreground">
              A New Generation of African{" "}
              <em className="not-italic font-serif italic text-primary">Business</em>{" "}
              Leadership
            </h1>
          </div>

          <p className="opacity-0 animate-fade-up text-foreground/60 text-lg font-sans max-w-md" style={{ animationDelay: "0.15s" }}>
            Equipping entrepreneurs, innovators, and executives with practical
            business knowledge designed for African markets.
          </p>

          <div className="opacity-0 animate-fade-up flex flex-wrap gap-4" style={{ animationDelay: "0.3s" }}>
            <a href="#programs" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-sans font-semibold text-base transition-all duration-300 hover:scale-105">
              Explore Programs
            </a>
            <a href="#apply" className="border border-foreground/20 text-foreground px-8 py-3.5 rounded-full font-sans font-medium text-base transition-all duration-300 hover:border-foreground/50">
              Apply Now
            </a>
          </div>

          {/* Social proof */}
          <div className="opacity-0 animate-fade-up flex items-center gap-4 mt-4" style={{ animationDelay: "0.45s" }}>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-background" style={{ opacity: 0.7, filter: 'grayscale(70%)' }} />
              ))}
            </div>
            <p className="text-sm font-sans text-foreground/50">
              <span className="text-foreground font-medium">500+</span> graduates across 12 African markets
            </p>
          </div>
        </div>

        {/* Right column - 7 cols */}
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

            {/* Floating sticky note badge */}
            <div
              className="absolute -bottom-6 -left-6 md:left-8 bg-primary text-primary-foreground px-6 py-4 rounded-3xl shadow-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02]"
              style={{ transform: "rotate(6deg)" }}
            >
              <p className="font-serif italic text-lg">8 Programs</p>
              <p className="font-sans text-sm font-medium opacity-80">Starting Q3 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
