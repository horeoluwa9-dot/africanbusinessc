import { useState } from "react";
import { Check, ArrowRight, Users, Briefcase, Rocket, Award, CreditCard, HeartHandshake, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const whoFor = [
  { icon: Rocket, title: "Entrepreneurs", desc: "Building or scaling a venture in African markets" },
  { icon: Briefcase, title: "Professionals", desc: "Seeking practical business skills and career advancement" },
  { icon: Users, title: "Founders", desc: "Looking to refine strategy and grow their business" },
  { icon: Award, title: "Executives & Leaders", desc: "Driving innovation within organizations" },
];

const steps = [
  { num: "1", title: "Explore Programs", desc: "Choose the program that fits your goals" },
  { num: "2", title: "Submit Application", desc: "Complete a simple online application" },
  { num: "3", title: "Admission Review", desc: "Applications are reviewed by the team" },
  { num: "4", title: "Receive Decision", desc: "Get acceptance and next steps" },
  { num: "5", title: "Enroll", desc: "Secure your place and begin" },
];

const faqs = [
  { q: "Do I need prior experience?", a: "No. Our programs are designed for various levels — from beginners to executives. We look for ambition, curiosity, and commitment." },
  { q: "Is this fully online?", a: "Yes. ABC is a virtual-first institution. All programs are delivered online with live sessions, simulations, and cohort-based learning." },
  { q: "How long are programs?", a: "Programs range from 3 to 12 months depending on the track. Check individual program pages for details." },
  { q: "Can I work while studying?", a: "Yes. Our programs are designed for working professionals with flexible schedules and recorded sessions available." },
  { q: "What happens after I apply?", a: "Our admissions team reviews your application within 5-7 business days. You'll receive an email with next steps." },
];

const Admissions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", country: "", role: "", industry: "", program: "", motivation: "", linkedin: "", source: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.country || !formData.program || !formData.motivation) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Admissions</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
            Start Your Journey at Africa Business <em className="font-serif italic text-primary">College</em>
          </h1>
          <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
            Join a new generation of entrepreneurs, professionals, and leaders building real impact across African markets.
          </p>
          <p className="font-sans text-xs text-primary mt-2">Next cohort starting soon</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#apply-form" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">Apply Now</a>
            <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8">Who This Is <em className="font-serif italic">For</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {whoFor.map((w) => (
              <div key={w.title} className="border border-foreground/5 rounded-2xl p-5 bg-card hover:border-primary/20 transition-all duration-300">
                <w.icon className="text-primary mb-3" size={24} strokeWidth={1.5} />
                <h3 className="text-base text-foreground font-light mb-1">{w.title}</h3>
                <p className="font-sans text-xs text-foreground/50">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Process */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8">How Admissions <em className="font-serif italic">Works</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {steps.map((s) => (
              <div key={s.num} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 text-center">
                <span className="font-mono text-2xl font-light text-primary/40">{s.num}</span>
                <h3 className="text-sm text-foreground font-light mt-2 mb-1">{s.title}</h3>
                <p className="font-sans text-[10px] text-foreground/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Requirements */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl text-foreground mb-4">Admissions <em className="font-serif italic">Criteria</em></h2>
            <ul className="space-y-2">
              {["Interest in business, entrepreneurship, or leadership", "Willingness to learn and execute", "Basic professional or academic background"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />{item}
                </li>
              ))}
            </ul>
            <p className="font-serif italic text-xs text-foreground/40 mt-4">"Not sure if you qualify? Apply anyway."</p>
          </div>
          <div>
            <h2 className="text-3xl text-foreground mb-4">Cohort Dates & <em className="font-serif italic">Deadlines</em></h2>
            <div className="space-y-3">
              <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                <p className="font-sans text-xs text-foreground">Next cohort: <strong>September 2026</strong></p>
                <p className="font-sans text-[10px] text-foreground/40 mt-1">Application deadline: August 1, 2026</p>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">Limited cohort spots available</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Scholarships */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl text-foreground mb-4">Tuition & <em className="font-serif italic">Payment</em></h2>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: CreditCard, title: "Flexible Payment Plans", desc: "Interest-free installment options available" },
                { icon: Award, title: "Merit Scholarships", desc: "Based on application strength and potential" },
                { icon: HeartHandshake, title: "Need-Based Support", desc: "Financial assistance for qualifying applicants" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl border border-foreground/5 bg-background/50">
                  <item.icon size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-sans text-xs text-foreground font-medium">{item.title}</h3>
                    <p className="font-sans text-[10px] text-foreground/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-foreground mb-4">Scholarships & <em className="font-serif italic">Access</em></h2>
            <p className="font-sans text-sm text-foreground/60 mb-4">
              ABC is committed to making world-class business education accessible. We offer merit-based scholarships, need-based support, and access initiatives.
            </p>
            <Link to="/programs" className="inline-flex items-center gap-2 text-primary font-sans text-xs font-medium">
              View Scholarship Options <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Application Form */}
      <section id="apply-form" className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-2 text-center">
            Apply to Africa Business <em className="font-serif italic">College</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-8 text-center">Complete your application to join the next cohort.</p>

          <form onSubmit={handleSubmit} className="space-y-6 border border-foreground/5 rounded-2xl p-6 md:p-8 bg-card">
            <div>
              <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Country *</label>
                  <input type="text" required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Professional Background</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Current Role</label>
                  <input type="text" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Industry</label>
                  <input type="text" value={formData.industry} onChange={(e) => setFormData({...formData, industry: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Program Interest</h3>
              <div className="space-y-4">
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Select Program *</label>
                  <select required value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30">
                    <option value="">Choose a program</option>
                    <option>Entrepreneurship</option>
                    <option>Venture Building</option>
                    <option>Digital Business</option>
                    <option>Investment & Finance</option>
                    <option>Innovation Leadership</option>
                    <option>Technology for Business</option>
                    <option>African Market Strategy</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">Why are you applying? *</label>
                  <textarea required value={formData.motivation} onChange={(e) => setFormData({...formData, motivation: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30 resize-none h-20" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Additional Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">LinkedIn / Portfolio (optional)</label>
                  <input type="url" value={formData.linkedin} onChange={(e) => setFormData({...formData, linkedin: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
                <div>
                  <label className="font-sans text-[10px] text-foreground/40">How did you hear about ABC?</label>
                  <input type="text" value={formData.source} onChange={(e) => setFormData({...formData, source: e.target.value})} className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                </div>
              </div>
            </div>

            <button type="submit" disabled={submitting} className="w-full bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-2xl pt-4">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8 text-center">Admissions <em className="font-serif italic">FAQs</em></h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="border border-foreground/5 rounded-xl bg-background/50 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                  <span className="font-sans text-xs text-foreground">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={14} className="text-primary shrink-0" /> : <ChevronDown size={14} className="text-foreground/40 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="font-sans text-xs text-foreground/50">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Support */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-foreground mb-3">Need <em className="font-serif italic">Help</em>?</h2>
          <p className="font-sans text-sm text-foreground/60 mb-4">Our admissions team is here to guide you.</p>
          <a href="mailto:admissions@africabusinesscollege.com" className="text-primary font-sans text-xs font-medium">admissions@africabusinesscollege.com</a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Take the Next <em className="font-serif italic">Step</em>
          </h2>
          <p className="font-sans text-sm text-foreground/60 mb-8">Next cohort starting soon</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#apply-form" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">Apply Now</a>
            <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Explore Programs</Link>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {submitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSubmitted(false)} />
          <div className="relative bg-card border border-foreground/10 rounded-2xl p-8 max-w-md w-full text-center animate-fade-up">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Check className="text-primary" size={24} />
            </div>
            <h3 className="text-xl text-foreground font-serif font-light mb-2">Application Submitted Successfully</h3>
            <p className="font-sans text-xs text-foreground/60 mb-6">
              Thank you for applying to Africa Business College. Our admissions team will review your application and get back to you shortly.
            </p>
            <div className="space-y-2 text-left mb-6">
              {["Application review in progress", "You will receive an email update", "Next steps will be shared if selected"].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <Check size={12} className="text-primary shrink-0" />
                  <span className="font-sans text-[10px] text-foreground/50">{s}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/" className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-semibold text-xs">Go to Homepage</Link>
              <Link to="/programs" className="border border-foreground/20 text-foreground px-5 py-2 rounded-full font-sans text-xs">Explore Programs</Link>
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Admissions;
