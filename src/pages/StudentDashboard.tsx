import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Cpu, Users, FileText, Calendar, MessageSquare, Settings,
  Search, Bell, ChevronRight, Play, Clock, CheckCircle, ArrowRight, Menu, X,
  Upload, Video, BarChart3, Download, Bookmark
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: BookOpen, label: "My Programs", id: "programs" },
  { icon: Cpu, label: "Simulation Labs", id: "simulations" },
  { icon: FileText, label: "Assignments", id: "assignments" },
  { icon: Calendar, label: "Calendar", id: "calendar" },
  { icon: Users, label: "Community", id: "community" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: Download, label: "Resources", id: "resources" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const StudentDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const handleNav = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-foreground/5 bg-card p-4 shrink-0 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 mb-6 px-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <span className="font-sans text-[10px] font-semibold text-primary-foreground">ABC</span>
          </div>
          <span className="font-serif text-sm font-light text-foreground">Africa Business College</span>
        </Link>
        <nav className="flex-1 space-y-0.5">
          {sidebarItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item.id)}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary font-medium"
                  : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
              }`}
            >
              <item.icon size={16} strokeWidth={1.5} />
              {item.label}
            </button>
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
                <button key={item.label} onClick={() => handleNav(item.id)} className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans transition-all ${activeSection === item.id ? "bg-primary/10 text-primary font-medium" : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"}`}>
                  <item.icon size={16} strokeWidth={1.5} />
                  {item.label}
                </button>
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
            <span className="font-sans text-xs font-medium text-foreground capitalize">{activeSection}</span>
            <div className="hidden md:flex items-center gap-2 bg-foreground/5 rounded-lg px-3 py-1.5 ml-4">
              <Search size={14} className="text-foreground/40" />
              <input type="text" placeholder="Search programs, lessons, simulations..." className="bg-transparent border-none outline-none text-xs font-sans text-foreground placeholder:text-foreground/30 w-52" />
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

            {/* Dashboard Overview */}
            {activeSection === "dashboard" && (
              <>
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
                    <button onClick={() => setActiveSection("programs")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-semibold text-xs transition-all duration-300 hover:scale-105">
                      <Play size={14} /> Continue Learning
                    </button>
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
                          <button onClick={() => setActiveSection("programs")} className="text-primary font-sans text-[10px] font-medium flex items-center gap-1">
                            Resume <ChevronRight size={12} />
                          </button>
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
                        <button onClick={() => setActiveSection("simulations")} className="text-xs font-sans text-primary font-medium flex items-center gap-1">
                          {s.status === "In Progress" ? "Continue" : "Start"} <ChevronRight size={12} />
                        </button>
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
                    <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Quick Actions</h3>
                      <div className="space-y-1.5">
                        {[
                          { label: "Continue Learning", icon: Play, action: "programs" },
                          { label: "Join Next Session", icon: Calendar, action: "calendar" },
                          { label: "Open Simulation", icon: Cpu, action: "simulations" },
                        ].map((a) => (
                          <button key={a.label} onClick={() => setActiveSection(a.action)} className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-foreground/5 transition-colors text-foreground/60 hover:text-foreground text-left">
                            <a.icon size={14} className="text-primary" />
                            <span className="font-sans text-xs">{a.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

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

                    <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Community</h3>
                      <p className="font-sans text-xs text-foreground/50 mb-2">3 new discussions in your cohort</p>
                      <button onClick={() => setActiveSection("community")} className="text-primary font-sans text-xs font-medium flex items-center gap-1">
                        Go to Community <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* My Programs View */}
            {activeSection === "programs" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl text-foreground font-serif font-light">My <em className="italic text-primary">Programs</em></h1>
                </div>
                <div className="space-y-4">
                  {[
                    { title: "Entrepreneurship Fundamentals", module: "Module 6: Market Validation", progress: 50, modules: ["Module 1: Ideation ✓", "Module 2: Business Model ✓", "Module 3: Market Research ✓", "Module 4: Financial Planning ✓", "Module 5: Team Building ✓", "Module 6: Market Validation →", "Module 7: Growth Strategy", "Module 8: Fundraising", "Module 9: Operations", "Module 10: Scaling", "Module 11: Exit Strategy", "Module 12: Capstone Project"] },
                    { title: "Digital Business", module: "Module 2: E-commerce Foundations", progress: 15, modules: ["Module 1: Digital Landscape ✓", "Module 2: E-commerce Foundations →", "Module 3: Digital Marketing", "Module 4: Analytics", "Module 5: Platform Strategy", "Module 6: Growth Hacking"] },
                  ].map((p) => (
                    <div key={p.title} className="border border-foreground/5 rounded-2xl p-6 bg-card">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-lg text-foreground font-light">{p.title}</h2>
                          <p className="font-sans text-xs text-foreground/40 mt-1">{p.module}</p>
                        </div>
                        <span className="font-mono text-sm text-primary">{p.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/5 rounded-full overflow-hidden mb-4">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${p.progress}%` }} />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {p.modules.map((m) => (
                          <div key={m} className={`p-2.5 rounded-lg text-xs font-sans ${m.includes("✓") ? "bg-primary/10 text-primary" : m.includes("→") ? "bg-primary/5 text-foreground border border-primary/20" : "bg-foreground/5 text-foreground/40"}`}>
                            {m}
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all hover:scale-105">
                          <Play size={12} className="inline mr-1" /> Continue Learning
                        </button>
                        <button className="border border-foreground/10 text-foreground/60 px-4 py-2 rounded-full font-sans text-xs hover:border-foreground/30 transition-all">
                          Mark as Complete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Simulation Labs View */}
            {activeSection === "simulations" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Simulation <em className="italic text-primary">Labs</em></h1>
                <div className="space-y-4">
                  {[
                    { title: "Entrepreneurship Simulation", desc: "Build and scale a virtual startup from idea to market.", status: "In Progress", metrics: { revenue: "₦4.2M", users: "1,200", runway: "14mo" } },
                    { title: "Market Expansion Simulation", desc: "Navigate regulatory and market dynamics across Africa.", status: "Not Started", metrics: null },
                    { title: "Startup Fundraising Simulation", desc: "Practice pitching to VCs with AI-powered feedback.", status: "Not Started", metrics: null },
                  ].map((s) => (
                    <div key={s.title} className="border border-foreground/5 rounded-2xl p-6 bg-card">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h2 className="text-lg text-foreground font-light">{s.title}</h2>
                          <p className="font-sans text-xs text-foreground/40 mt-1">{s.desc}</p>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-medium ${s.status === "In Progress" ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground/40"}`}>{s.status}</span>
                      </div>
                      {s.metrics && (
                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {Object.entries(s.metrics).map(([k, v]) => (
                            <div key={k} className="bg-foreground/5 rounded-xl p-3">
                              <p className="font-mono text-[10px] text-foreground/40 uppercase">{k}</p>
                              <p className="font-sans text-lg font-semibold text-primary mt-1">{v}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-2">
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all hover:scale-105">
                          {s.status === "In Progress" ? "Continue Simulation" : "Start Simulation"}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Assignments View */}
            {activeSection === "assignments" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Assignments</h1>
                <div className="space-y-3">
                  {[
                    { title: "Market Analysis Report", program: "Entrepreneurship", due: "Jul 15, 2026", status: "Pending", grade: null },
                    { title: "Business Model Canvas", program: "Entrepreneurship", due: "Jul 20, 2026", status: "Pending", grade: null },
                    { title: "Competitor Research", program: "Entrepreneurship", due: "Jul 10, 2026", status: "Submitted", grade: null },
                    { title: "Digital Strategy Proposal", program: "Digital Business", due: "Jul 8, 2026", status: "Graded", grade: "A" },
                    { title: "E-commerce Market Map", program: "Digital Business", due: "Jul 1, 2026", status: "Graded", grade: "B+" },
                  ].map((a) => (
                    <div key={a.title} className="border border-foreground/5 rounded-xl p-4 bg-card flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText size={16} className={a.status === "Graded" ? "text-primary" : a.status === "Submitted" ? "text-primary/60" : "text-foreground/30"} />
                        <div>
                          <p className="font-sans text-xs text-foreground">{a.title}</p>
                          <p className="font-sans text-[10px] text-foreground/30">{a.program} · Due: {a.due}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {a.grade && <span className="font-mono text-xs text-primary font-semibold">{a.grade}</span>}
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-sans font-medium ${a.status === "Pending" ? "bg-primary/10 text-primary" : a.status === "Submitted" ? "bg-foreground/10 text-foreground/60" : "bg-primary/10 text-primary"}`}>{a.status}</span>
                        {a.status === "Pending" && (
                          <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-sans font-medium hover:bg-primary/20 transition-colors">
                            <Upload size={10} /> Submit
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Calendar View */}
            {activeSection === "calendar" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Calendar & <em className="italic text-primary">Sessions</em></h1>
                <div className="space-y-3">
                  {[
                    { title: "Market Validation Workshop", date: "Jul 14, 2026", time: "2:00 PM - 3:30 PM", type: "Live Class", instructor: "Dr. Kwame Asante" },
                    { title: "Guest Speaker: VC Insights", date: "Jul 16, 2026", time: "4:00 PM - 5:00 PM", type: "Guest Session", instructor: "Amina Diallo" },
                    { title: "Cohort Discussion: Fundraising", date: "Jul 18, 2026", time: "10:00 AM - 11:00 AM", type: "Discussion", instructor: "Peer-led" },
                    { title: "Module 7: Growth Strategy", date: "Jul 21, 2026", time: "2:00 PM - 3:30 PM", type: "Live Class", instructor: "Yusuf Ibrahim" },
                  ].map((s) => (
                    <div key={s.title} className="border border-foreground/5 rounded-xl p-4 bg-card flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Video size={16} className="text-primary" />
                        <div>
                          <p className="font-sans text-xs text-foreground">{s.title}</p>
                          <p className="font-sans text-[10px] text-foreground/30">{s.date} · {s.time}</p>
                          <p className="font-sans text-[10px] text-foreground/40">{s.instructor}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-foreground/5 text-foreground/50 text-[10px] font-sans">{s.type}</span>
                        <button className="px-3 py-1 rounded-lg bg-primary text-primary-foreground text-[10px] font-sans font-medium hover:bg-primary/90 transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Community View */}
            {activeSection === "community" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Community</h1>
                <div className="space-y-3">
                  <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">Cohort Discussions</h2>
                  {[
                    { title: "Best resources for market research in Nigeria?", author: "Amina K.", replies: 12, time: "2 hours ago" },
                    { title: "Looking for co-founder — AgTech startup", author: "David M.", replies: 8, time: "5 hours ago" },
                    { title: "Recap: Last week's VC masterclass", author: "Fatou S.", replies: 15, time: "Yesterday" },
                  ].map((d) => (
                    <div key={d.title} className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <p className="font-sans text-xs text-foreground">{d.title}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="font-sans text-[10px] text-foreground/40">{d.author}</span>
                        <span className="font-sans text-[10px] text-foreground/30">{d.replies} replies</span>
                        <span className="font-sans text-[10px] text-foreground/30">{d.time}</span>
                      </div>
                    </div>
                  ))}
                  <Link to="/community" className="text-primary font-sans text-xs font-medium flex items-center gap-1 mt-3">
                    Go to Full Community <ArrowRight size={12} />
                  </Link>
                </div>
              </>
            )}

            {/* Messages View */}
            {activeSection === "messages" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Messages</h1>
                <div className="space-y-2">
                  {[
                    { from: "Dr. Kwame Asante", message: "Great work on your market analysis. A few notes...", time: "1h ago", unread: true },
                    { from: "Amina K.", message: "Hey! Want to collaborate on the group project?", time: "3h ago", unread: true },
                    { from: "ABC Support", message: "Your assignment has been graded.", time: "Yesterday", unread: false },
                  ].map((m) => (
                    <div key={m.from + m.time} className={`border rounded-xl p-4 bg-card flex items-start gap-3 ${m.unread ? "border-primary/20" : "border-foreground/5"}`}>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="font-sans text-[10px] text-foreground/50">{m.from.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-sans text-xs font-medium text-foreground">{m.from}</p>
                          <span className="font-sans text-[10px] text-foreground/30">{m.time}</span>
                        </div>
                        <p className="font-sans text-xs text-foreground/50 mt-0.5">{m.message}</p>
                      </div>
                      {m.unread && <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Resources View */}
            {activeSection === "resources" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Resources & <em className="italic text-primary">Tools</em></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { title: "Business Plan Template", type: "Template", format: "DOCX" },
                    { title: "Financial Model Sheet", type: "Spreadsheet", format: "XLSX" },
                    { title: "Market Research Guide", type: "Guide", format: "PDF" },
                    { title: "Pitch Deck Template", type: "Template", format: "PPTX" },
                    { title: "Competitive Analysis Framework", type: "Framework", format: "PDF" },
                    { title: "Startup Valuation Calculator", type: "Tool", format: "XLSX" },
                  ].map((r) => (
                    <div key={r.title} className="border border-foreground/5 rounded-xl p-4 bg-card flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText size={16} className="text-foreground/30" />
                        <div>
                          <p className="font-sans text-xs text-foreground">{r.title}</p>
                          <p className="font-sans text-[10px] text-foreground/30">{r.type} · {r.format}</p>
                        </div>
                      </div>
                      <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-primary transition-colors">
                        <Download size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Settings View */}
            {activeSection === "settings" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Settings</h1>
                <div className="border border-foreground/5 rounded-2xl p-6 bg-card space-y-6">
                  <div>
                    <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Profile</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-sans text-[10px] text-foreground/40">Full Name</label>
                        <input type="text" defaultValue="John Doe" className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                      </div>
                      <div>
                        <label className="font-sans text-[10px] text-foreground/40">Email</label>
                        <input type="email" defaultValue="john@example.com" className="w-full mt-1 px-3 py-2 rounded-lg bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Notifications</h3>
                    <div className="space-y-2">
                      {["Email notifications", "Session reminders", "Assignment deadlines", "Community updates"].map((n) => (
                        <div key={n} className="flex items-center justify-between p-2 rounded-lg">
                          <span className="font-sans text-xs text-foreground/60">{n}</span>
                          <div className="w-8 h-4 rounded-full bg-primary/30 relative cursor-pointer">
                            <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-primary" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <button className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-semibold text-xs">Save Changes</button>
                </div>
              </>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;
