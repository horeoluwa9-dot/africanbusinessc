import { useState } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const categories = ["All", "Consulting", "Technology", "Investment", "Startups", "Manufacturing", "Non-Profit", "E-Commerce"];

const faculty = [
  { name: "Dr. Kwame Asante", role: "Professor of Strategy", expertise: "African Market Strategy", industry: "Consulting", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { name: "Amina Diallo", role: "Professor of Entrepreneurship", expertise: "Venture Building & Fundraising", industry: "Startups", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200" },
  { name: "Yusuf Ibrahim", role: "Professor of Finance", expertise: "African Capital Markets", industry: "Investment", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
  { name: "Ngozi Okafor", role: "Professor of Innovation", expertise: "EdTech & Digital Transformation", industry: "Technology", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
  { name: "Samuel Okonkwo", role: "Professor of Operations", expertise: "Supply Chain & Logistics", industry: "Manufacturing", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
  { name: "Fatima Al-Hassan", role: "Professor of Leadership", expertise: "Social Impact & Policy", industry: "Non-Profit", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" },
  { name: "Jean-Pierre Mbeki", role: "Adjunct Professor", expertise: "Private Equity & Venture Capital", industry: "Investment", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
  { name: "Aisha Mohammed", role: "Mentor-in-Residence", expertise: "Digital Commerce & Growth", industry: "E-Commerce", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
];

const expertiseAreas = ["Entrepreneurship", "Venture Capital", "Finance", "Technology", "Strategy", "Policy"];

const Faculty = () => {
  const [activeCat, setActiveCat] = useState("All");
  const filtered = activeCat === "All" ? faculty : faculty.filter((f) => f.industry === activeCat);

  return (
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
      <section className="px-4 md:px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Who Teaches at <em className="font-serif italic">ABC</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 max-w-2xl">
            Our faculty is a curated mix of entrepreneurs, investors, policy leaders, and operators. They bring real-world experience into every session — teaching from practice, not just theory.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 md:px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${activeCat === cat ? "bg-primary text-primary-foreground" : "bg-card text-foreground/60 hover:text-foreground border border-foreground/5"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="px-4 md:px-6 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {filtered.map((f) => (
              <div key={f.name} className="border border-foreground/5 rounded-2xl p-5 bg-card transition-all duration-300 hover:border-primary/20 group">
                {f.img ? (
                  <img src={f.img} alt={f.name} className="w-16 h-16 rounded-full mb-3 object-cover" loading="lazy" />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted border border-foreground/5 mb-3 flex items-center justify-center">
                    <span className="font-serif text-lg text-foreground/40">{f.initials}</span>
                  </div>
                )}
                <h3 className="text-base text-foreground font-light">{f.name}</h3>
                <p className="font-sans text-[10px] text-primary font-medium">{f.role}</p>
                <p className="font-sans text-xs text-foreground/40 mt-1">{f.expertise}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/40 text-[10px] font-sans">{f.industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Mentors */}
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
                  {f.img && <img src={f.img} alt={f.name} className="w-20 h-20 rounded-full object-cover shrink-0" loading="lazy" />}
                  <div>
                    <h3 className="text-lg text-foreground font-light">{f.name}</h3>
                    <p className="font-sans text-xs text-primary font-medium">{f.role}</p>
                    <p className="font-sans text-xs text-foreground/50 mt-2">{f.expertise} · {f.industry}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Areas of Expertise */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
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
      </section>

      {/* Teaching Approach */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4">
          <h2 className="text-3xl text-foreground mb-4">
            How Faculty <em className="font-serif italic">Teach</em>
          </h2>
          <ul className="space-y-2 max-w-xl">
            {["Practical sessions based on real business challenges", "Case-based learning from African market scenarios", "One-on-one mentorship and office hours", "Real-world insights and industry connections"].map((item) => (
              <li key={item} className="flex items-start gap-2 p-3 rounded-xl border border-foreground/5 bg-background/50 text-foreground/60 font-sans text-xs">
                <BookOpen size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Insights */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl text-foreground mb-4">
            Insights & <em className="font-serif italic">Perspectives</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">
            Our faculty regularly publishes research, commentary, and analysis on African business topics.
          </p>
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
            <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Faculty;
