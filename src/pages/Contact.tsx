import { Mail, MapPin, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const Contact = () => (
  <PageLayout>
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Contact</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Get in <em className="font-serif italic text-primary">Touch</em>
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          Have questions about ABC? Our team is here to help.
        </p>
      </div>
    </section>
    <section className="px-4 md:px-6 pb-20">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { icon: Mail, title: "Email", detail: "hello@africabusinesscollege.com", sub: "General inquiries" },
          { icon: Mail, title: "Admissions", detail: "admissions@africabusinesscollege.com", sub: "Application support" },
          { icon: Mail, title: "Partnerships", detail: "partnerships@africabusinesscollege.com", sub: "Collaboration inquiries" },
        ].map((c) => (
          <div key={c.title} className="border border-foreground/5 rounded-2xl p-6 bg-card">
            <c.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
            <h3 className="text-base text-foreground font-light mb-1">{c.title}</h3>
            <p className="font-sans text-xs text-primary">{c.detail}</p>
            <p className="font-sans text-[10px] text-foreground/40 mt-1">{c.sub}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl text-foreground mb-4">Ready to <em className="font-serif italic">Start</em>?</h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">Apply Now</Link>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Explore Programs</Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Contact;
