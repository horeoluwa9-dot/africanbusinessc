import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StickyNoteCTA = () => (
  <section className="py-20 px-4 md:px-6">
    <div className="mx-auto max-w-3xl">
      <div
        className="bg-primary text-primary-foreground p-8 md:p-12 rounded-2xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02] cursor-pointer"
        style={{ transform: "rotate(2deg)" }}
      >
        <h2 className="text-2xl md:text-3xl font-serif font-light mb-3">
          Ready to <em className="italic">build</em> your future?
        </h2>
        <p className="font-sans text-sm opacity-80 max-w-lg mb-6">
          Join a cohort of ambitious African entrepreneurs and leaders. Applications
          for the Q3 2026 intake are now open.
        </p>
        <div className="border-t border-primary-foreground/20 pt-5 flex items-center justify-between">
          <span className="font-sans text-xs font-medium opacity-70">Next cohort starts September 2026</span>
          <Link to="/programs" className="inline-flex items-center gap-2 font-sans font-semibold text-xs hover:gap-3 transition-all duration-300">
            Apply Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default StickyNoteCTA;
