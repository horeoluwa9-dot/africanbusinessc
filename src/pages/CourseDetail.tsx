import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown, ChevronUp, Play, BookOpen, FileText, Cpu, Clock, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { getProgramBySlug, getCourseBySlug } from "@/data/programs";

const CourseDetail = () => {
  const { programSlug, courseSlug } = useParams<{ programSlug: string; courseSlug: string }>();
  const program = getProgramBySlug(programSlug || "");
  const course = getCourseBySlug(programSlug || "", courseSlug || "");
  const [openModule, setOpenModule] = useState<number | null>(0);

  if (!program || !course) {
    return (
      <PageLayout>
        <section className="pt-24 pb-16 px-4 md:px-6">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl text-foreground font-serif">Course Not Found</h1>
            <Link to="/programs" className="text-primary font-sans text-base mt-4 inline-block">← Back to Programs</Link>
          </div>
        </section>
      </PageLayout>
    );
  }

  const getLessonIcon = (lesson: string) => {
    if (lesson.startsWith("Video")) return <Play size={14} className="text-primary" />;
    if (lesson.startsWith("Reading")) return <BookOpen size={14} className="text-primary" />;
    if (lesson.startsWith("Simulation")) return <Cpu size={14} className="text-primary" />;
    return <FileText size={14} className="text-primary" />;
  };

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Link to="/programs" className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">Programs</Link>
            <span className="text-muted-foreground">/</span>
            <Link to={`/programs/${program.slug}`} className="font-sans text-sm text-muted-foreground hover:text-foreground transition-colors">{program.title}</Link>
            <span className="text-muted-foreground">/</span>
            <span className="font-sans text-sm text-foreground">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Hero */}
              <div>
                <span className="font-sans text-label text-primary uppercase tracking-wider">Part of {program.title}</span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-foreground font-serif font-bold mt-2">{course.title}</h1>
                <p className="font-sans text-body text-muted-foreground mt-4">{course.description}</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <span className="flex items-center gap-1.5 font-sans text-sm text-muted-foreground"><Clock size={14} /> {course.duration}</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-sm font-sans font-medium">{course.level}</span>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/admissions" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-sans font-medium text-btn transition-all hover:scale-105">Apply Now</Link>
                  <Link to={`/programs/${program.slug}`} className="border border-border text-foreground px-6 py-3 rounded-full font-sans font-medium text-btn hover:border-foreground/30 transition-all">Back to Program</Link>
                </div>
              </div>

              {/* What You'll Learn */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.outcomes.map(o => (
                    <div key={o} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-sans text-sm text-foreground">{o}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Modules */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Course Structure</h2>
                <div className="space-y-2">
                  {course.modules.map((mod, i) => (
                    <div key={mod.title} className="border border-border rounded-xl bg-card overflow-hidden">
                      <button
                        onClick={() => setOpenModule(openModule === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-primary/50">0{i + 1}</span>
                          <div>
                            <p className="font-sans text-base text-foreground font-medium">{mod.title}</p>
                            <p className="font-sans text-sm text-muted-foreground">{mod.lessons.length} items</p>
                          </div>
                        </div>
                        {openModule === i ? <ChevronUp size={16} className="text-primary shrink-0" /> : <ChevronDown size={16} className="text-muted-foreground shrink-0" />}
                      </button>
                      {openModule === i && (
                        <div className="px-4 pb-4 space-y-2">
                          {mod.lessons.map(lesson => (
                            <div key={lesson} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-secondary/50">
                              {getLessonIcon(lesson)}
                              <span className="font-sans text-sm text-foreground/80">{lesson}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">Tools You'll Use</h2>
                <div className="flex flex-wrap gap-2">
                  {course.tools.map(t => (
                    <span key={t} className="px-4 py-2 rounded-full border border-border text-sm font-sans text-foreground/80">{t}</span>
                  ))}
                </div>
              </div>

              {/* Instructor */}
              <div className="border border-border rounded-2xl p-6 bg-card">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">Instructor</h2>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-serif text-lg text-muted-foreground">{course.instructor.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="font-sans text-base font-medium text-foreground">{course.instructor}</p>
                    <p className="font-sans text-sm text-muted-foreground">ABC Faculty</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-2">Start Building Real Business Skills</h2>
                <p className="font-sans text-sm text-muted-foreground mb-6">Next cohort starting soon</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/admissions" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-medium text-btn hover:scale-105 transition-all">Apply Now</Link>
                  <Link to="/programs" className="border border-border text-foreground px-7 py-3 rounded-full font-sans font-medium text-btn hover:border-foreground/30 transition-all">Explore Programs</Link>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-4">
                <div className="border border-border rounded-2xl p-6 bg-card">
                  <h3 className="font-sans text-base font-semibold text-foreground mb-4">Course Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-muted-foreground">Duration</span>
                      <span className="font-sans text-sm text-foreground font-medium">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-muted-foreground">Level</span>
                      <span className="font-sans text-sm text-foreground font-medium">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-muted-foreground">Program</span>
                      <span className="font-sans text-sm text-foreground font-medium">{program.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-muted-foreground">Modules</span>
                      <span className="font-sans text-sm text-foreground font-medium">{course.modules.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-sans text-sm text-muted-foreground">Instructor</span>
                      <span className="font-sans text-sm text-foreground font-medium">{course.instructor}</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                      <Cpu size={14} className="text-primary" /> Includes simulations
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                      <FileText size={14} className="text-primary" /> Includes projects
                    </div>
                  </div>
                  <Link to="/admissions" className="w-full bg-primary text-primary-foreground px-5 py-3 rounded-full font-sans font-medium text-btn mt-6 block text-center hover:scale-105 transition-all">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CourseDetail;
