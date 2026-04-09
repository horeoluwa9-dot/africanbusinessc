import { ArrowRight, Award, CreditCard, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const StickyNoteCTA = () => {
  // Countdown to a future date
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const target = new Date("2026-09-01T00:00:00").getTime();
    const update = () => {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Faculty Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-left">
            <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">World-Class Faculty</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2">
              Learn from Builders, Not Just <em className="font-serif italic">Teachers</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {[
              { name: "Dr. Kwame Asante", role: "Venture Strategy", org: "Founder @ Nexus", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
              { name: "Amina Diallo", role: "Market Operations", org: "Ex-Flutterwave", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200" },
              { name: "Yusuf Ibrahim", role: "Venture Finance", org: "Partner @ Greenhill", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
              { name: "Ngozi Chidie", role: "Innovation Leadership", org: "Board Advisor", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
            ].map((f) => (
              <div key={f.name} className="border border-foreground/5 rounded-2xl p-4 bg-card text-center">
                <img src={f.img} alt={f.name} className="w-16 h-16 rounded-full mx-auto mb-3 object-cover" loading="lazy" />
                <h4 className="font-sans text-xs font-medium text-foreground">{f.name}</h4>
                <p className="font-sans text-[10px] text-primary">{f.role}</p>
                <p className="font-sans text-[10px] text-foreground/40">{f.org}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/faculty" className="text-primary font-sans text-xs font-medium hover:underline">Meet Our Faculty →</Link>
            <Link to="/programs" className="text-primary font-sans text-xs font-medium hover:underline">Explore Programs →</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-6 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-6">
          <div className="mb-10 text-left">
            <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2">
              What Our Students Are <em className="font-serif italic">Building</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { quote: "ABC gave me the precise frameworks to navigate cross-border payments in West Africa. My venture scaled from 2 markets to 5 during the MBA program.", name: "David Okafor", role: "Founder, Payswitch Africa", program: "MBA Program" },
              { quote: "The simulation labs were a game changer. Making high-stakes decisions in the lab before doing it in my real board room was invaluable.", name: "Fatima Bello", role: "Director of Ops, AgroGrow", program: "Executive Leadership" },
              { quote: "The faculty don't just teach — they've built businesses. That changes everything about how you learn.", name: "Amara Osei", role: "CEO, NovaPay", program: "Entrepreneurship Accelerator" },
            ].map((t) => (
              <div key={t.name} className="border border-foreground/5 rounded-2xl p-5 bg-background/50">
                <p className="font-serif italic text-sm text-foreground/80 mb-4">"{t.quote}"</p>
                <p className="font-sans text-xs font-medium text-foreground">{t.name}</p>
                <p className="font-sans text-[10px] text-foreground/50">{t.role}</p>
                <p className="font-sans text-[10px] text-primary mt-1">{t.program}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/community" className="text-primary font-sans text-xs font-medium hover:underline">Join Community →</Link>
            <Link to="/programs" className="text-primary font-sans text-xs font-medium hover:underline">Explore Programs →</Link>
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Community */}
      <section className="py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-left">
            <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Community</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2">
              A Pan-African Network of <em className="font-serif italic">Builders</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { val: "2,500+", label: "Members" },
              { val: "40+", label: "Cities" },
              { val: "150+", label: "Founders" },
              { val: "₦8B+", label: "Ventures" },
            ].map((s) => (
              <div key={s.label} className="border border-foreground/5 rounded-2xl p-4 bg-card text-center">
                <p className="font-serif text-2xl text-primary">{s.val}</p>
                <p className="font-sans text-xs text-foreground/50 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            <Link to="/community" className="text-primary font-sans text-xs font-medium hover:underline">Join Community →</Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Alumni Network", "Founder Community", "Investor Connections", "Regional Meetups", "Venture Showcases"].map((item) => (
              <span key={item} className="px-3 py-1.5 rounded-full border border-foreground/10 text-xs font-sans text-foreground/50">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Events & Cohorts */}
      <section className="py-20 px-4 md:px-6 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-6">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
            <div>
              <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Upcoming Highlights</span>
              <h2 className="text-3xl md:text-4xl text-foreground mt-2">
                Events & <em className="font-serif italic">Cohorts</em>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { type: "Info Session", title: "Open Day: MBA 2026", date: "May 12, 2026", location: "Virtual" },
              { type: "Conference", title: "Pan-African Tech Summit", date: "June 5, 2026", location: "Nairobi & Virtual" },
              { type: "Deadline", title: "MBA Application Cycle 1", date: "July 15, 2026", location: "Final Intake" },
            ].map((e) => (
              <div key={e.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">{e.type}</span>
                <h3 className="text-base text-foreground font-light mt-3 mb-2">{e.title}</h3>
                <p className="font-sans text-xs text-foreground/40">{e.date}</p>
                <p className="font-sans text-[10px] text-foreground/30">{e.location}</p>
                <Link to="/admissions" className="mt-3 inline-block text-primary font-sans text-xs font-medium">Register →</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Financial Access */}
      <section className="py-20 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-left">
            <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Financial Access</span>
            <h2 className="text-3xl md:text-4xl text-foreground mt-2">
              Access Should Not Be a <em className="font-serif italic">Barrier</em>
            </h2>
            <p className="font-sans text-sm text-foreground/50 mt-3 max-w-xl">
              We provide scholarships and flexible pathways to ensure the next African giants have the opportunity to build.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: Award, title: "Scholarships", desc: "Merit & Need-based funding" },
              { icon: CreditCard, title: "Flexible Payments", desc: "Interest-free installment plans" },
              { icon: HeartHandshake, title: "Financial Support", desc: "Dedicated support for qualified applicants" },
            ].map((item) => (
              <div key={item.title} className="border border-foreground/5 rounded-2xl p-6 bg-card">
                <item.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
                <h3 className="text-base text-foreground font-light mb-1.5">{item.title}</h3>
                <p className="font-sans text-xs text-foreground/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA with Countdown */}
      <section className="py-20 px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <div
            className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02] cursor-pointer"
            style={{ transform: "rotate(2deg)" }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-light mb-3">
              Ready to Build the <em className="italic">Future</em>?
            </h2>
            <p className="font-sans text-sm opacity-80 max-w-lg mb-6">
              Join a global network of innovators transforming the continent's business landscape.
            </p>
            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <p className="font-serif text-3xl font-light">{timeLeft.days}</p>
                <p className="font-sans text-[10px] opacity-60">Days</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-light">{timeLeft.hours}</p>
                <p className="font-sans text-[10px] opacity-60">Hours</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl font-light">{timeLeft.mins}</p>
                <p className="font-sans text-[10px] opacity-60">Mins</p>
              </div>
            </div>
            <div className="border-t border-primary-foreground/20 pt-5 flex items-center justify-between">
              <span className="font-sans text-xs font-medium opacity-70">Next cohort starts September 2026</span>
              <Link to="/admissions" className="inline-flex items-center gap-2 font-sans font-semibold text-xs hover:gap-3 transition-all duration-300">
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyNoteCTA;
