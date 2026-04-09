import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";

const Careers = () => (
  <PageLayout>
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="mx-auto max-w-7xl text-left">
        <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Careers</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
          Join the <em className="font-serif italic text-primary">Team</em>
        </h1>
        <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
          Help us build the future of business education in Africa. We're always looking for talented, mission-driven individuals.
        </p>
      </div>
    </section>
    <section className="px-4 md:px-6 pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="border border-foreground/5 rounded-2xl p-8 bg-card text-center">
          <h2 className="text-2xl text-foreground font-light mb-3">No Open Positions Right Now</h2>
          <p className="font-sans text-sm text-foreground/60 mb-6">Check back soon or send us your CV for future opportunities.</p>
          <a href="mailto:careers@africabusinesscollege.com" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105 inline-block">
            Send Your CV
          </a>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Careers;
