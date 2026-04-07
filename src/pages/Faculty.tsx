import { ArrowRight, BookOpen, Users, Lightbulb, TrendingUp, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const faculty = [
  { name: "Dr. Kwame Asante", role: "Director of Entrepreneurship", expertise: "Entrepreneurship", industry: "Startups", bio: "Serial entrepreneur with 3 exits across West Africa" },
  { name: "Amara Okafor", role: "Head of Finance Programs", expertise: "Venture Capital", industry: "Investment Firms", bio: "Former partner at a leading African VC firm" },
  { name: "Prof. Fatima Mbeki", role: "Strategy Faculty", expertise: "Strategy", industry: "Corporates", bio: "15 years of corporate strategy across 8 African markets" },
  { name: "David Kimani", role: "Technology Lead", expertise: "Technology", industry: "Tech Startups", bio: "Founded two fintech companies in East Africa" },
  { name: "Sarah Adeyemi", role: "Leadership Coach", expertise: "Leadership", industry: "Government & Policy", bio: "Former advisor to multiple African governments" },
  { name: "Jean-Pierre Ndongo", role: "Market Strategy Mentor", expertise: "Market Expansion", industry: "Corporates", bio: "Led market entry for global brands across Africa" },
  { name: "Grace Mutua", role: "Innovation Faculty", expertise: "Innovation", industry: "Startups", bio: "Built innovation labs for Fortune 500 companies" },
  { name: "Youssef El-Amine", role: "Finance Mentor", expertise: "Finance", industry: "Investment Firms", bio: "Managed $200M+ in African focused funds" },
];

const expertiseAreas = ["Entrepreneurship", "Venture Capital", "Finance", "Technology", "Strategy", "Policy", "Innovation", "Market Expansion"];

const Faculty = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Faculty & Mentors</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Learn From <em className="font-serif italic text-primary">Builders</em>, Not Just Instructors
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          ABC faculty and mentors are entrepreneurs, investors, and operators shaping business across Africa.
        </p>
        <div className="mt-6">
          <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>

    {/* Faculty Overview */}
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Overview</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
          Who Teaches at <em className="font-serif italic">ABC</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 max-w-2xl">
          Our faculty is a carefully curated mix of entrepreneurs, investors, policy leaders, and industry operators. They bring real-world experience into every session, ensuring students learn from practitioners who've built, scaled, and led across African markets.
        </p>
      </div>
    </section>

    {/* Featured Faculty */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Featured</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Featured <em className="font-serif italic">Mentors</em>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {faculty.slice(0, 2).map((f) => (
            <div key={f.name} className="border border-foreground/5 rounded-2xl p-6 bg-background/50">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-muted border border-foreground/5 shrink-0 flex items-center justify-center">
                  <span className="font-serif text-lg text-foreground/40">{f.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <h3 className="text-lg text-foreground font-light">{f.name}</h3>
                  <p className="font-sans text-xs text-primary font-medium">{f.role}</p>
                  <p className="font-sans text-xs text-foreground/50 mt-2">{f.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">{f.expertise}</span>
                    <span className="px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/50 text-[10px] font-sans">{f.industry}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Faculty Grid */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Team</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Our <em className="font-serif italic">Faculty</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {faculty.map((f) => (
            <div key={f.name} className="border border-foreground/5 rounded-2xl p-5 bg-card transition-all duration-300 hover:border-primary/20 group">
              <div className="w-12 h-12 rounded-full bg-muted border border-foreground/5 mb-3 flex items-center justify-center">
                <span className="font-serif text-sm text-foreground/40">{f.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-base text-foreground font-light">{f.name}</h3>
              <p className="font-sans text-[10px] text-primary font-medium">{f.role}</p>
              <p className="font-sans text-xs text-foreground/40 mt-1">{f.expertise} · {f.industry}</p>
              <p className="font-sans text-xs text-foreground/50 mt-2">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Areas of Expertise */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Expertise</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6">
          Areas of <em className="font-serif italic">Expertise</em>
        </h2>
        <div className="flex flex-wrap gap-2">
          {expertiseAreas.map((area) => (
            <span key={area} className="px-4 py-2 rounded-full border border-foreground/10 text-xs font-sans text-foreground/70 hover:border-primary/30 hover:text-primary transition-all duration-300">
              {area}
            </span>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Industry + Teaching Approach */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Industry</span>
          <h2 className="text-3xl text-foreground mt-2 mb-4">
            Industry <em className="font-serif italic">Experience</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">
            Our faculty comes from diverse industry backgrounds, ensuring students get perspectives from across the business landscape.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {["Startups", "Investment Firms", "Corporates", "Government & Policy"].map((ind) => (
              <div key={ind} className="flex items-center gap-2 p-3 rounded-xl border border-foreground/5 bg-card">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-sans text-xs text-foreground/70">{ind}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Approach</span>
          <h2 className="text-3xl text-foreground mt-2 mb-4">
            How Faculty <em className="font-serif italic">Teach</em>
          </h2>
          <ul className="space-y-2">
            {["Practical, case-based sessions", "Real-world mentorship and guidance", "Simulation-driven learning", "Industry insights and networks"].map((item) => (
              <li key={item} className="flex items-start gap-2 p-3 rounded-xl border border-foreground/5 bg-card text-foreground/60 font-sans text-xs">
                <BookOpen size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Learn From Those Who've <em className="font-serif italic">Done</em> It
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Explore Programs
          </Link>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Faculty;
