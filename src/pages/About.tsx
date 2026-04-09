import { Check, ArrowRight, Target, Zap, BookOpen, Globe, Users, Award, Cpu, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import aboutVideoCall from "@/assets/about-video-call.png";
import aboutClassroom from "@/assets/about-classroom.png";
import aboutStudents from "@/assets/about-students.png";
import aboutPartnership from "@/assets/about-partnership.png";

const leaders = [
  { name: "Adebayo Ogunlesi", role: "Founder & President", bg: "Built and scaled 3 tech ventures across Africa before founding ABC.", initials: "AO" },
  { name: "Dr. Ngozi Ekechi", role: "Academic Director", bg: "Former Dean at Lagos Business School with 20+ years shaping business education.", initials: "NE" },
  { name: "Kwame Mensah", role: "Head of Partnerships", bg: "Led strategic partnerships at Andela and Flutterwave across 15 African markets.", initials: "KM" },
];

const About = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">About ABC</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
            Building Africa's Next Generation of Business <em className="font-serif italic text-primary">Leaders</em>
          </h1>
          <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
            Africa Business College is a virtual-first institution focused on entrepreneurship, innovation, and execution, designed specifically for African markets.
          </p>
          <p className="font-serif italic text-xs text-foreground/40 mt-2">
            "Where ideas become ventures, and learning becomes execution."
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
              Explore Programs
            </Link>
            <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
              Apply Now
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={aboutStudents} alt="ABC Students" className="w-full rounded-2xl object-cover max-h-80 opacity-80" loading="lazy" />
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl md:text-4xl text-foreground mb-6">
            Our <em className="font-serif italic">Mission</em> & Vision
          </h2>
          <div className="space-y-6">
            <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
              <h3 className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Mission</h3>
              <p className="font-sans text-sm text-foreground/70">
                To equip African entrepreneurs, professionals, and leaders with practical business knowledge and execution capability.
              </p>
            </div>
            <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
              <h3 className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mb-2">Vision</h3>
              <p className="font-sans text-sm text-foreground/70">
                To build a generation of African leaders capable of creating, scaling, and sustaining globally competitive ventures.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center">
          <img src={aboutPartnership} alt="Partnership" className="w-full rounded-2xl object-cover max-h-72 opacity-70" loading="lazy" />
        </div>
      </div>
    </section>

    {/* The Problem */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">The Challenge</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-6 max-w-2xl">
          Business Education Is <em className="font-serif italic">Broken</em> for Emerging Markets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {["Too theoretical — not adapted to real business environments", "Not practical — focuses on case studies, not execution", "Not designed for African realities — ignores local contexts", "Lacks execution focus — students leave without real skills"].map((item) => (
            <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-foreground/5 bg-background/50">
              <Target size={16} className="text-destructive mt-0.5 shrink-0" />
              <span className="font-sans text-xs text-foreground/60">{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* The ABC Approach */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Our Approach</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          A New Model of Business <em className="font-serif italic">Education</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { icon: Zap, title: "Learn → Apply → Build", desc: "Progressive learning that ends with real output" },
            { icon: Cpu, title: "Simulations Over Theory", desc: "Practice decisions before making them in real life" },
            { icon: Layers, title: "Real Tools", desc: "Industry-standard business instruments" },
            { icon: Users, title: "Practitioner Mentors", desc: "Learn from those who've built, not just taught" },
            { icon: Globe, title: "Africa-First", desc: "Context designed for African markets" },
          ].map((item) => (
            <div key={item.title} className="border border-foreground/5 rounded-2xl p-5 bg-card transition-all duration-300 hover:border-primary/20">
              <item.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-sm text-foreground font-light mb-1">{item.title}</h3>
              <p className="font-sans text-[10px] text-foreground/50">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Learning Philosophy */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Philosophy</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Built for <em className="font-serif italic">Execution</em>
          </h2>
          <ul className="space-y-2">
            {["Cohort-based learning with structured milestones", "Real-world projects with industry partners", "Capstone outcomes that become real ventures", "Continuous feedback from practitioners"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <img src={aboutVideoCall} alt="Virtual learning" className="w-full rounded-2xl object-cover max-h-64 opacity-70" loading="lazy" />
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Built for Africa */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="hidden lg:block">
          <img src={aboutClassroom} alt="Digital classroom" className="w-full rounded-2xl object-cover max-h-64 opacity-70" loading="lazy" />
        </div>
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Identity</span>
          <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
            Designed for <em className="font-serif italic">African</em> Markets
          </h2>
          <ul className="space-y-2">
            {["Built around local realities and constraints", "Regional diversity and cross-border strategies", "Market-specific frameworks and case studies", "Pan-African network spanning 40+ countries"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Technology Platform */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Infrastructure</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
          Powered by Advanced Digital <em className="font-serif italic">Infrastructure</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 mb-6 max-w-xl">
          ABC runs on a fully digital-first platform with simulation environments, learning dashboards, and scalable systems. Built by CycleBreeze.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Simulation Environments", "Learning Dashboards", "Progress Tracking", "Scalable Systems"].map((item) => (
            <div key={item} className="border border-foreground/5 rounded-2xl p-4 bg-background/50 text-center">
              <p className="font-sans text-xs text-foreground/70">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Outcomes & Impact */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Impact</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Measured by What Our Students <em className="font-serif italic">Build</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { val: "150+", label: "Ventures Launched" },
            { val: "2,500+", label: "Careers Advanced" },
            { val: "40+", label: "Countries" },
            { val: "₦8B+", label: "Capital Raised" },
          ].map((s) => (
            <div key={s.label} className="border border-foreground/5 rounded-2xl p-5 bg-card text-center">
              <p className="font-serif text-2xl text-primary">{s.val}</p>
              <p className="font-sans text-xs text-foreground/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Leadership</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          <em className="font-serif italic">Leadership</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leaders.map((l) => (
            <div key={l.name} className="border border-foreground/5 rounded-2xl p-6 bg-background/50">
              <div className="w-16 h-16 rounded-full bg-muted border border-foreground/5 mb-3 flex items-center justify-center">
                <span className="font-serif text-lg text-foreground/40">{l.initials}</span>
              </div>
              <h3 className="text-base text-foreground font-light">{l.name}</h3>
              <p className="font-sans text-[10px] text-primary font-medium">{l.role}</p>
              <p className="font-sans text-xs text-foreground/50 mt-2">{l.bg}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Credibility */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-foreground mb-6">
          Built with Industry and Academic <em className="font-serif italic">Insight</em>
        </h2>
        <ul className="space-y-2 max-w-xl">
          {["Strategic partnerships with leading institutions", "Faculty with real industry experience", "Curriculum aligned with market demands", "Advisory board of investors and operators"].map((item) => (
            <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
              <Check size={14} className="text-primary mt-0.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Final CTA */}
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Join a New Generation of <em className="font-serif italic">Builders</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 mb-8">Next cohort starting soon</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Apply Now
          </Link>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
