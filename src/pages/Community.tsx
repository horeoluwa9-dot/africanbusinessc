import { Users, Globe, Calendar, MessageSquare, Rocket, Award, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const communityElements = [
  { icon: Users, title: "Alumni Network", desc: "Stay connected beyond your program with lifelong peer access." },
  { icon: Rocket, title: "Founder Community", desc: "Connect with builders and entrepreneurs across Africa." },
  { icon: Award, title: "Investor Connections", desc: "Access to funding networks and venture capital." },
  { icon: Globe, title: "Regional Meetups", desc: "In-person connections across major African cities." },
  { icon: Star, title: "Venture Showcases", desc: "Present and discover startups from the ABC ecosystem." },
];

const ventures = [
  { name: "NovaPay", founder: "Amara Osei · Cohort 2025", desc: "Digital payments platform serving 500K+ users across West Africa." },
  { name: "GreenFields", founder: "Fatima Al-Hassan · Cohort 2025", desc: "AgTech company improving crop yields for smallholder farmers." },
  { name: "AfriHealth", founder: "David Mensah · Cohort 2024", desc: "Telemedicine platform connecting 100K+ patients to specialists." },
];

const testimonials = [
  { quote: "The alumni network alone was worth the investment. I found my co-founder through ABC.", name: "Kofi Adu", role: "Co-Founder, AgriFlow", program: "MBA 2025" },
  { quote: "ABC's community is unlike any other — diverse, ambitious, and genuinely supportive.", name: "Zainab Musa", role: "Director, ImpactHub Lagos", program: "Executive 2024" },
  { quote: "From day one, I was connected to investors, mentors, and peers who accelerated my journey.", name: "Pierre Habimana", role: "CEO, KigaliTech", program: "Entrepreneurship 2025" },
];

const Community = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Community</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Join a Community of <em className="font-serif italic text-primary">Builders</em>
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          ABC is more than a learning platform. It's a network of entrepreneurs, professionals, and leaders building across Africa.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
            Apply Now
          </Link>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">
            Explore Programs
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="px-4 md:px-6 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { val: "2,500+", label: "Alumni Network" },
            { val: "40+", label: "African Countries" },
            { val: "150+", label: "Ventures Launched" },
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

    {/* What You Join */}
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          What You <em className="font-serif italic">Join</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 max-w-2xl">
          A network of founders and operators committed to building in Africa. The ABC community provides collaborative learning, long-term relationships, and access to resources that accelerate your journey.
        </p>
      </div>
    </section>

    {/* Community Elements */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          Inside the ABC <em className="font-serif italic">Community</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {communityElements.map((el) => (
            <div key={el.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 transition-all duration-300 hover:border-primary/20">
              <el.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{el.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{el.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Cohort + Pan-African */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl text-foreground mb-4">
            Learn <em className="font-serif italic">Together</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">
            The cohort experience creates deep bonds through shared learning, collaboration, and accountability.
          </p>
          <ul className="space-y-2">
            {["Peer collaboration & group projects", "Structured discussions & debates", "Shared accountability", "Cross-border networking"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-3xl text-foreground mb-4">
            A Pan-African <em className="font-serif italic">Network</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">
            Students from over 30 African countries collaborate, share perspectives, and build cross-border relationships that last beyond the classroom.
          </p>
          <ul className="space-y-2">
            {["Multi-country representation", "Cross-border collaboration", "Diverse perspectives", "Regional chapters"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Alumni Outcomes */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          What Our Community <em className="font-serif italic">Builds</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ventures.map((v) => (
            <div key={v.name} className="border border-foreground/5 rounded-2xl p-5 bg-background/50">
              <h3 className="text-lg text-foreground font-light mb-1">{v.name}</h3>
              <p className="font-sans text-[10px] text-primary mb-2">{v.founder}</p>
              <p className="font-sans text-xs text-foreground/50">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Testimonials */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          Voices From the <em className="font-serif italic">Community</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-foreground/5 rounded-2xl p-5 bg-card">
              <p className="font-serif italic text-sm text-foreground/80 mb-4">"{t.quote}"</p>
              <p className="font-sans text-xs font-medium text-foreground">{t.name}</p>
              <p className="font-sans text-[10px] text-foreground/50">{t.role}</p>
              <p className="font-sans text-[10px] text-primary mt-1">{t.program}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Community Events */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <h2 className="text-3xl md:text-4xl text-foreground mb-8">
          Community <em className="font-serif italic">Events</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { type: "Networking", title: "Alumni Mixer: Nairobi", date: "May 20, 2026", location: "Nairobi" },
            { type: "Event", title: "Founder Pitch Night", date: "June 5, 2026", location: "Virtual" },
            { type: "Conference", title: "Investor Connect", date: "June 15, 2026", location: "Lagos" },
          ].map((e) => (
            <div key={e.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">{e.type}</span>
              <h3 className="text-base text-foreground font-light mt-3 mb-2">{e.title}</h3>
              <p className="font-sans text-xs text-foreground/40">{e.date}</p>
              <p className="font-sans text-[10px] text-foreground/30">{e.location}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Final CTA */}
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl text-foreground mb-4">
          Build With People Who Are <em className="font-serif italic">Building</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 mb-8">Join the next cohort</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
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

export default Community;
