import { Users, Globe, Calendar, MessageSquare, Rocket, Award, Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const communityElements = [
  { icon: Users, title: "Alumni Network", desc: "Stay connected beyond your program" },
  { icon: Rocket, title: "Founder Community", desc: "Connect with builders and entrepreneurs" },
  { icon: Award, title: "Investor Connections", desc: "Access to funding networks" },
  { icon: Globe, title: "Regional Meetups", desc: "In-person connections across cities" },
  { icon: Star, title: "Venture Showcases", desc: "Present and discover startups" },
];

const testimonials = [
  { quote: "The ABC community became my closest advisors. We still meet monthly to share progress.", name: "Kemi A.", role: "Founder, Accra" },
  { quote: "I found my co-founder through the ABC network. The connections here are genuine and lasting.", name: "Samuel O.", role: "CTO, Kigali" },
  { quote: "Being part of this community gave me confidence to launch my second venture.", name: "Nadia B.", role: "Serial Entrepreneur, Casablanca" },
];

const Community = () => (
  <PageLayout>
    {/* Hero */}
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Community & Alumni</span>
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

    {/* What You Join */}
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Network</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-4">
          What You <em className="font-serif italic">Join</em>
        </h2>
        <p className="font-sans text-sm text-foreground/60 max-w-2xl">
          When you join ABC, you become part of a network of founders and operators who are actively building across the continent. It's a collaborative learning environment designed for long-term relationships and mutual growth.
        </p>
      </div>
    </section>

    {/* Community Elements */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Inside</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
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

    {/* Cohort Experience */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Cohort</span>
          <h2 className="text-3xl text-foreground mt-2 mb-4">
            Learn <em className="font-serif italic">Together</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">
            Every program is cohort-based, meaning you learn alongside a group of peers who hold you accountable and push you forward.
          </p>
          <ul className="space-y-2">
            {["Peer collaboration on real projects", "Group discussions and debates", "Built-in accountability structures", "Shared progress milestones"].map((item) => (
              <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                <Check size={14} className="text-primary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Pan-African</span>
          <h2 className="text-3xl text-foreground mt-2 mb-4">
            A Pan-African <em className="font-serif italic">Network</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">
            Our students come from across the continent — Nigeria, Kenya, South Africa, Ghana, Rwanda, Senegal, and beyond. This diversity of perspectives is one of our greatest strengths.
          </p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: "12+", label: "Countries" },
              { val: "500+", label: "Alumni" },
              { val: "50+", label: "Cities" },
            ].map((s) => (
              <div key={s.label} className="border border-foreground/5 rounded-xl p-3 bg-card text-center">
                <p className="font-serif text-xl text-primary">{s.val}</p>
                <p className="font-sans text-[10px] text-foreground/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Alumni Outcomes */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Impact</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          What Our Community <em className="font-serif italic">Builds</em>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { val: "120+", label: "Startups launched" },
            { val: "85%", label: "Careers advanced" },
            { val: "200+", label: "Partnerships formed" },
            { val: "$5M+", label: "Investments secured" },
          ].map((s) => (
            <div key={s.label} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 text-center">
              <p className="font-serif text-2xl text-primary">{s.val}</p>
              <p className="font-sans text-xs text-foreground/50 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
    </section>

    {/* Events */}
    <section className="px-4 md:px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Events</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Community <em className="font-serif italic">Events</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: Calendar, title: "Virtual Sessions", desc: "Regular online gatherings and workshops" },
            { icon: MessageSquare, title: "Founder Talks", desc: "Hear from successful African founders" },
            { icon: Users, title: "Workshops", desc: "Hands-on skill-building sessions" },
            { icon: Globe, title: "Networking Events", desc: "Connect with peers across the continent" },
          ].map((e) => (
            <div key={e.title} className="border border-foreground/5 rounded-2xl p-5 bg-card">
              <e.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
              <h3 className="text-base text-foreground font-light mb-1.5">{e.title}</h3>
              <p className="font-sans text-xs text-foreground/50">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="px-4 md:px-6 py-16 bg-card relative">
      <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
      <div className="mx-auto max-w-7xl pt-4">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Voices</span>
        <h2 className="text-3xl md:text-4xl text-foreground mt-2 mb-8">
          Voices From the <em className="font-serif italic">Community</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-foreground/5 rounded-2xl p-5 bg-background/50">
              <p className="font-serif italic text-sm text-foreground/80 mb-4">"{t.quote}"</p>
              <p className="font-sans text-xs font-medium text-foreground">{t.name}</p>
              <p className="font-sans text-[10px] text-foreground/50">{t.role}</p>
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
        <div className="flex flex-wrap justify-center gap-3 mt-8">
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
