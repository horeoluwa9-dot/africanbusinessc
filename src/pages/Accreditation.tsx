import { Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const Accreditation = () => (
  <PageLayout>
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Accreditation</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Academic <em className="font-serif italic text-primary">Standards</em> & Recognition
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          Africa Business College is committed to maintaining the highest standards of business education quality and academic rigor.
        </p>
      </div>
    </section>
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl text-foreground mb-4">Our <em className="font-serif italic">Commitment</em></h2>
            <ul className="space-y-2">
              {["Rigorous curriculum design aligned with global standards", "Faculty with real-world industry experience", "Continuous quality improvement processes", "Partnerships with recognized institutions", "Outcomes-focused educational approach"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-foreground/60 font-sans text-xs">
                  <Check size={14} className="text-primary mt-0.5 shrink-0" />{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
            <h3 className="text-lg text-foreground font-light mb-3">Recognition Path</h3>
            <p className="font-sans text-xs text-foreground/60 mb-4">
              ABC is actively pursuing formal accreditation and institutional recognition. Our programs are designed to meet and exceed the standards set by leading business education bodies.
            </p>
            <p className="font-sans text-xs text-foreground/40">
              For accreditation inquiries, contact: accreditation@africabusinesscollege.com
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="px-4 md:px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl text-foreground mb-4">Learn More About <em className="font-serif italic">ABC</em></h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/about" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">About ABC</Link>
          <Link to="/programs" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Explore Programs</Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Accreditation;
