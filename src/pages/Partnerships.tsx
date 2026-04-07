import { Building, Globe, TrendingUp, Lightbulb, Handshake, ArrowRight, Check, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const partnerCategories = [
  { icon: Building, title: "Universities", desc: "Academic collaboration and research" },
  { icon: TrendingUp, title: "Businesses", desc: "Industry insights and real-world applications" },
  { icon: Globe, title: "Investors", desc: "Capital networks and venture support" },
  { icon: Lightbulb, title: "Innovation Hubs", desc: "Startup ecosystems and incubation" },
  { icon: Handshake, title: "Global Partners", desc: "International collaboration" },
];

// Abstract logos — neutral geometric shapes
const partnerLogos = [
  { name: "Apex Ventures", shape: "circle" },
  { name: "Meridian Group", shape: "square" },
  { name: "Nova Institute", shape: "triangle" },
  { name: "Atlas Foundation", shape: "hexagon" },
  { name: "Prism Capital", shape: "diamond" },
  { name: "Forge Labs", shape: "pentagon" },
  { name: "Summit Partners", shape: "circle" },
  { name: "Keystone Advisory", shape: "square" },
  { name: "Elevate Fund", shape: "triangle" },
  { name: "Quantum Institute", shape: "hexagon" },
  { name: "Pinnacle Group", shape: "diamond" },
  { name: "Horizon Collective", shape: "pentagon" },
];

const LogoShape = ({ shape, name }: { shape: string; name: string }) => {
  const baseClass = "w-full h-full flex items-center justify-center bg-foreground/5 border border-foreground/10 transition-all duration-300 hover:border-primary/30";
  const initial = name.split(' ').map(n => n[0]).join('');
  
  return (
    <div className={`${baseClass} ${shape === 'circle' ? 'rounded-full' : shape === 'square' ? 'rounded-xl' : 'rounded-2xl'} aspect-square`}>
      <span className="font-sans text-sm font-medium text-foreground/30">{initial}</span>
    </div>
  );
};

const Partnerships = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Partnerships</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Building With Leading <em className="font-serif italic text-primary">Institutions</em>
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          ABC collaborates with universities, businesses, investors, and innovation ecosystems to deliver real-world business education.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#partner-form" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Partner With Us
          </a>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Approach</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
          Our Approach to <em className="font-serif italic">Partnerships</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 max-w-2xl">
          We build collaborative ecosystems focused on practical impact. Our partnerships span academic institutions, industry leaders, investors, and innovation hubs — creating cross-sector relationships that enhance the learning experience.
        </p>
      </div>
    </section>

    {/* Partner Categories */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Categories</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Who We <em className="font-serif italic">Work</em> With
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {partnerCategories.map((cat) => (
            <div key={cat.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 transition-all duration-300 hover:border-primary/20">
              <cat.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{cat.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Partner Logo Grid */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Network</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Our <em className="font-serif italic">Partners</em>
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16">
                <LogoShape shape={logo.shape} name={logo.name} />
              </div>
              <span className="font-sans text-[10px] text-foreground/40 text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Partnership Types */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Collaboration</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6">
          Ways We <em className="font-serif italic">Collaborate</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {["Program co-creation", "Research and insights", "Mentorship and faculty", "Venture support", "Events and ecosystem engagement", "Cross-border collaboration"].map((item) => (
            <div key={item} className="flex items-center gap-3 p-4 rounded-xl border border-foreground/5 bg-background/50">
              <Check size={16} className="text-primary shrink-0" />
              <span className="font-sans text-sm text-foreground/70">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Impact */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Impact</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Partnership <em className="font-serif italic">Impact</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { val: "15+", label: "Partner institutions" },
            { val: "8", label: "Programs enhanced" },
            { val: "200+", label: "Mentorship hours" },
            { val: "5", label: "Countries" },
          ].map((s) => (
            <div key={s.label} className="border border-foreground/5 rounded-2xl p-5 bg-card text-center">
              <p className="font-serif text-2xl text-primary">{s.val}</p>
              <p className="font-sans text-xs text-foreground/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Collaborations */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Featured</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Featured <em className="font-serif italic">Collaborations</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { partner: "Apex Ventures", what: "Co-developed the Startup Fundraising Simulation with real investor data and decision frameworks.", impact: "300+ students trained in fundraising" },
            { partner: "Nova Institute", what: "Joint research on African market entry strategies, integrated into the Market Expansion program.", impact: "Published 5 research papers" },
          ].map((c) => (
            <div key={c.partner} className="border border-foreground/5 rounded-2xl p-6 bg-background/50">
              <h3 className="text-lg text-foreground font-light mb-2">{c.partner}</h3>
              <p className="font-sans text-xs text-foreground/50 mb-3">{c.what}</p>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="font-sans text-xs text-primary font-medium">{c.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Partner With ABC CTA */}
    <section id="partner-form" className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="border border-foreground/5 rounded-2xl p-8 bg-card text-center">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Get Involved</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-3">
            Partner With <em className="font-serif italic">ABC</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-6">
            We welcome partnerships with institutions, companies, investors, and ecosystem builders who share our vision for African business education.
          </p>
          <a href="mailto:partnerships@africabusinesscollege.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            <Mail size={16} />
            Submit Partnership Inquiry
          </a>
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Let's Build the Future of Business Education in <em className="font-serif italic">Africa</em>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a href="#partner-form" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Partner With Us
          </a>
          <a href="mailto:hello@africabusinesscollege.com" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
            Contact
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Partnerships;
