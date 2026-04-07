import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Cpu, Users, FileText, Calendar, MessageSquare, Settings,
  Search, Bell, ChevronRight, Play, Clock, CheckCircle, ArrowRight, Menu, X
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: BookOpen, label: "My Programs", path: "/dashboard#programs" },
  { icon: Cpu, label: "Simulation Labs", path: "/dashboard#simulations" },
  { icon: Users, label: "Community", path: "/dashboard#community" },
  { icon: FileText, label: "Resources", path: "/dashboard#resources" },
  { icon: Calendar, label: "Calendar", path: "/dashboard#calendar" },
  { icon: MessageSquare, label: "Messages", path: "/dashboard#messages" },
  { icon: Settings, label: "Settings", path: "/dashboard#settings" },
];

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-foreground/5 bg-card p-4 shrink-0">
        <Link to="/" className="flex items-center gap-2 mb-6 px-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <span className="font-sans text-[10px] font-semibold text-primary-foreground">ABC</span>
          </div>
          <span className="font-serif text-sm font-light text-foreground">ABC</span>
        </Link>
        <nav className="flex-1 space-y-0.5">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition-all duration-200"
            >
              <item.icon size={16} strokeWidth={1.5} />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-foreground/5 pt-3 mt-3">
          <div className="flex items-center gap-2 px-3">
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
              <span className="font-sans text-[10px] text-foreground/50">JD</span>
            </div>
            <div>
              <p className="font-sans text-xs text-foreground">John Doe</p>
              <p className="font-sans text-[10px] text-foreground/40">Student</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/80" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-60 h-full bg-card p-4 border-r border-foreground/5">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-foreground/60">
              <X size={18} />
            </button>
            <Link to="/" className="flex items-center gap-2 mb-6 px-2">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="font-sans text-[10px] font-semibold text-primary-foreground">ABC</span>
              </div>
              <span className="font-serif text-sm font-light text-foreground">ABC</span>
            </Link>
            <nav className="space-y-0.5">
              {sidebarItems.map((item) => (
                <a key={item.label} href={item.path} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition-all" onClick={() => setSidebarOpen(false)}>
                  <item.icon size={16} strokeWidth={1.5} />
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-40 h-12 border-b border-foreground/5 bg-card/80 backdrop-blur-lg flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground/60">
              <Menu size={18} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-foreground/5 rounded-lg px-3 py-1.5">
              <Search size={14} className="text-foreground/40" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-xs font-sans text-foreground placeholder:text-foreground/30 w-40" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative text-foreground/60 hover:text-foreground transition-colors">
              <Bell size={16} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary" />
            </button>
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
              <span className="font-sans text-[10px] text-foreground/50">JD</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Welcome */}
            <div>
              <h1 className="text-2xl md:text-3xl text-foreground font-serif font-light">
                Welcome back, <em className="italic text-primary">John</em>
              </h1>
              <p className="font-sans text-xs text-foreground/50 mt-1">Entrepreneurship Fundamentals — Week 6 of 12</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: '50%' }} />
                </div>
                <span className="font-mono text-xs text-primary">50%</span>
              </div>
              <div className="mt-4">
                <Link to="/programs" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-semibold text-xs transition-all duration-300 hover:scale-105">
                  <Play size={14} /> Continue Learning
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* My Programs */}
              <div className="lg:col-span-2 space-y-3">
                <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">My Programs</h2>
                {[
                  { title: "Entrepreneurship Fundamentals", module: "Module 6: Market Validation", progress: 50 },
                  { title: "Digital Business", module: "Module 2: E-commerce Foundations", progress: 15 },
                ].map((p) => (
                  <div key={p.title} className="border border-foreground/5 rounded-xl p-4 bg-card">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm text-foreground font-light">{p.title}</h3>
                        <p className="font-sans text-[10px] text-foreground/40 mt-0.5">{p.module}</p>
                      </div>
                      <Link to="/programs" className="text-primary font-sans text-[10px] font-medium flex items-center gap-1">
                        Resume <ChevronRight size={12} />
                      </Link>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-foreground/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary/60 rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                      <span className="font-mono text-[10px] text-foreground/40">{p.progress}%</span>
                    </div>
                  </div>
                ))}

                {/* Simulation Labs */}
                <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mt-6">Simulation Labs</h2>
                {[
                  { title: "Entrepreneurship Simulation", status: "In Progress" },
                  { title: "Market Expansion Simulation", status: "Not Started" },
                ].map((s) => (
                  <div key={s.title} className="border border-foreground/5 rounded-xl p-4 bg-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Cpu size={16} className="text-primary" />
                      <div>
                        <h3 className="text-sm text-foreground font-light">{s.title}</h3>
                        <span className={`font-sans text-[10px] font-medium ${s.status === "In Progress" ? "text-primary" : "text-foreground/40"}`}>{s.status}</span>
                      </div>
                    </div>
                    <Link to="/simulation-labs" className="text-xs font-sans text-primary font-medium flex items-center gap-1">
                      {s.status === "In Progress" ? "Continue" : "Start"} <ChevronRight size={12} />
                    </Link>
                  </div>
                ))}

                {/* Tasks & Deadlines */}
                <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mt-6">Tasks & Deadlines</h2>
                {[
                  { task: "Market Analysis Report", due: "Jul 15, 2026", status: "pending" },
                  { task: "Business Model Canvas", due: "Jul 20, 2026", status: "pending" },
                  { task: "Competitor Research", due: "Jul 10, 2026", status: "completed" },
                ].map((t) => (
                  <div key={t.task} className="border border-foreground/5 rounded-xl p-3 bg-card flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle size={14} className={t.status === "completed" ? "text-primary" : "text-foreground/20"} />
                      <div>
                        <p className={`font-sans text-xs ${t.status === "completed" ? "text-foreground/40 line-through" : "text-foreground"}`}>{t.task}</p>
                        <p className="font-sans text-[10px] text-foreground/30">{t.due}</p>
                      </div>
                    </div>
                    {t.status === "pending" && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">Due</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Right column */}
              <div className="space-y-4">
                {/* Quick Actions */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Quick Actions</h3>
                  <div className="space-y-1.5">
                    {[
                      { label: "Continue Learning", icon: Play, to: "/programs" },
                      { label: "Join Next Session", icon: Calendar, to: "/dashboard" },
                      { label: "Open Simulation", icon: Cpu, to: "/simulation-labs" },
                    ].map((a) => (
                      <Link key={a.label} to={a.to} className="flex items-center gap-2 p-2 rounded-lg hover:bg-foreground/5 transition-colors text-foreground/60 hover:text-foreground">
                        <a.icon size={14} className="text-primary" />
                        <span className="font-sans text-xs">{a.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Upcoming Sessions</h3>
                  {[
                    { title: "Market Validation Workshop", time: "Tomorrow, 2:00 PM" },
                    { title: "Guest Speaker: VC Insights", time: "Thu, 4:00 PM" },
                  ].map((s) => (
                    <div key={s.title} className="mb-2.5 last:mb-0">
                      <p className="font-sans text-xs text-foreground">{s.title}</p>
                      <p className="font-sans text-[10px] text-foreground/40 flex items-center gap-1 mt-0.5">
                        <Clock size={10} /> {s.time}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Progress</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Modules Done", val: "6/12" },
                      { label: "Milestones", val: "3/5" },
                      { label: "Simulations", val: "1/3" },
                      { label: "Assignments", val: "8/10" },
                    ].map((p) => (
                      <div key={p.label} className="text-center p-2 rounded-lg bg-foreground/5">
                        <p className="font-mono text-sm text-primary">{p.val}</p>
                        <p className="font-sans text-[10px] text-foreground/40">{p.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Community</h3>
                  <p className="font-sans text-xs text-foreground/50 mb-2">3 new discussions in your cohort</p>
                  <Link to="/community" className="text-primary font-sans text-xs font-medium flex items-center gap-1">
                    Go to Community <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Resources */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Resources</h3>
                  {["Business Plan Template", "Financial Model Sheet", "Market Research Guide"].map((r) => (
                    <div key={r} className="flex items-center gap-2 mb-1.5 last:mb-0">
                      <FileText size={12} className="text-foreground/30" />
                      <span className="font-sans text-xs text-foreground/60 hover:text-primary cursor-pointer transition-colors">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
