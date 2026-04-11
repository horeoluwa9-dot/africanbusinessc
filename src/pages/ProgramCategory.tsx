import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Clock, Users, BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getProgramBySlug } from "@/data/programs";

const levels = ["All", "Beginner", "Intermediate", "Advanced", "Executive"];

const ProgramCategory = () => {
  const { programSlug } = useParams<{ programSlug: string }>();
  const program = getProgramBySlug(programSlug || "");
  const [activeLevel, setActiveLevel] = useState("All");

  if (!program) {
    return (
      <PageLayout>
        <section className="pt-24 pb-16 px-4 md:px-6">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl text-foreground font-serif">Program Not Found</h1>
            <Link to="/programs" className="text-primary font-sans text-base mt-4 inline-block">← Back to Programs</Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const filtered = activeLevel === "All"
    ? program.courses
    : program.courses.filter(c => c.level === activeLevel);

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/programs" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">Programs</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-sans text-sm text-foreground">{program.title}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-hero text-foreground font-serif font-bold">{program.title}</h1>
          <p className="font-sans text-body text-muted-foreground mt-4 max-w-2xl">{program.description}</p>
          <div className="mt-4 flex flex-wrap gap-4 items-center">
            <span className="font-sans text-sm text-muted-foreground">Duration: <strong className="text-foreground">{program.duration}</strong></span>
            <span className="font-sans text-sm text-muted-foreground">Level: <strong className="text-foreground">{program.level}</strong></span>
            <span className="font-sans text-sm text-muted-foreground">Format: <strong className="text-foreground">{program.format}</strong></span>
          </div>
          <div className="mt-6">
            <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-medium text-btn transition-all duration-300 hover:scale-105 inline-block">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="px-4 md:px-6 pb-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {levels.map(l => (
              <button key={l} onClick={() => setActiveLevel(l)} className={`px-4 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 ${activeLevel === l ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground border border-border"}`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="px-4 md:px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Courses ({filtered.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(course => (
              <div key={course.slug} className="group border border-border rounded-2xl p-5 bg-card transition-all duration-300 hover:border-primary/30">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-label font-sans font-medium uppercase">{course.level}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground text-label font-sans uppercase">{course.duration}</span>
                </div>
                <h3 className="text-card-title font-serif font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-foreground/60 font-sans text-sm mb-3 line-clamp-2">{course.description}</p>
                <p className="font-sans text-sm text-muted-foreground mb-4">{course.modules.length} modules · {course.instructor}</p>
                <Link to={`/programs/${program.slug}/${course.slug}`} className="inline-flex items-center gap-1.5 text-primary font-sans text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                  View Course <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Ready to Start <em className="italic">{program.title}</em>?</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-medium text-btn transition-all hover:scale-105">Apply Now</Link>
            <Link to="/programs" className="border border-border text-foreground px-7 py-3 rounded-full font-sans font-medium text-btn hover:border-foreground/30 transition-all">All Programs</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProgramCategory;
