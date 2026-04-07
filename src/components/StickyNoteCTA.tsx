import { ArrowRight } from "lucide-react";

const StickyNoteCTA = () => (
  <section className="py-24 px-6">
    <div className="mx-auto max-w-3xl">
      <div
        className="bg-primary text-primary-foreground p-10 md:p-14 rounded-3xl transition-all duration-300 hover:rotate-0 hover:scale-[1.02] cursor-pointer"
        style={{ transform: "rotate(2deg)" }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
          Ready to <em className="italic">build</em> your future?
        </h2>
        <p className="font-sans text-base opacity-80 max-w-lg mb-8">
          Join a cohort of ambitious African entrepreneurs and leaders. Applications
          for the Q3 2026 intake are now open.
        </p>
        <div className="border-t border-primary-foreground/20 pt-6 flex items-center justify-between">
          <span className="font-sans text-sm font-medium opacity-70">Next cohort starts September 2026</span>
          <a href="#apply" className="inline-flex items-center gap-2 font-sans font-semibold text-sm hover:gap-3 transition-all duration-300">
            Apply Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default StickyNoteCTA;
