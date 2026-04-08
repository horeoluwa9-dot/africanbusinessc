import { Building, Globe, TrendingUp, Lightbulb, Handshake, Check, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import heroImg from "@/assets/showcase-2.jpg";

const partnerCategories = [
  { icon: Building, title: "Universities", desc: "Academic collaboration and research partnerships." },
  { icon: TrendingUp, title: "Businesses", desc: "Industry insights and real-world applications." },
  { icon: Globe, title: "Investors", desc: "Capital networks and venture support." },
  { icon: Lightbulb, title: "Innovation Hubs", desc: "Startup ecosystems and incubation." },
  { icon: Handshake, title: "Global Partners", desc: "International collaboration and exchange." },
];

const partnerLogos = [
  { name: "Global Partners Alliance", initials: "GPA" },
  { name: "Horizon Ventures Group", initials: "HVG" },
  { name: "Nexus Capital Partners", initials: "NCP" },
  { name: "Pinnacle Development Fund", initials: "PDF" },
  { name: "Atlas Innovation Hub", initials: "AIH" },
  { name: "Meridian Business Forum", initials: "MBF" },
  { name: "Keystone Advisory", initials: "KA" },
  { name: "Elevate Africa Group", initials: "EAG" },
];

const Partnerships = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Partnerships</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
            Building With Leading <em className="font-serif italic text-primary">Institutions</em> and Organizations
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
        <div className="hidden lg:block">
          <img src={heroImg} alt="Business partnership" className="w-full rounded-2xl object-cover max-h-80 opacity-80" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Overview */}
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Our Approach to <em className="font-serif italic">Partnerships</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 max-w-2xl">
          ABC's partnership model is built on collaboration, practical impact, and cross-sector relationships. We work with institutions and organizations that share our commitment to advancing African business education.
        </p>
      </div>
    </section>

    {/* Partner Categories */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
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
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          Our <em className="font-serif italic">Partners</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {partnerLogos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center gap-2 p-4 border border-foreground/5 rounded-2xl bg-card hover:border-primary/20 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-sans text-xs font-semibold text-foreground/30">{logo.initials}</span>
              </div>
              <span className="font-sans text-[10px] text-foreground/40 text-center">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Ways We Collaborate */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-6">
          Ways We <em className="font-serif italic">Collaborate</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {["Program co-creation", "Research and insights", "Mentorship and faculty", "Venture support", "Events and ecosystem engagement"].map((item) => (
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
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          Partnership <em className="font-serif italic">Impact</em>
        </h2>
        <ul className="space-y-2 max-w-xl">
          {["Programs enhanced with real-world insights", "Stronger student outcomes", "Access to networks and opportunities", "Cross-border collaboration"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
              <Check size={14} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Featured Collaborations */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          Featured <em className="font-serif italic">Collaborations</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { partner: "Horizon Ventures × ABC", desc: "Co-developed a Fintech & Innovation certificate program, with partner engineers as guest lecturers and real API integrations in coursework." },
            { partner: "Pinnacle Advisory × ABC", desc: "Provided strategy case studies and mentorship from senior partners for our MBA capstone projects." },
          ].map((c) => (
            <div key={c.partner} className="border border-foreground/5 rounded-2xl p-6 bg-background/50">
              <h3 className="text-lg text-foreground font-light mb-2">{c.partner}</h3>
              <p className="font-sans text-xs text-foreground/50">{c.desc}</p>
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
          <h2 className="text-3xl md:text-4xl text-foreground mb-3">
            Partner With <em className="font-serif italic">ABC</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-6">
            We welcome partnerships with institutions, companies, investors, and ecosystem builders committed to African business development.
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
