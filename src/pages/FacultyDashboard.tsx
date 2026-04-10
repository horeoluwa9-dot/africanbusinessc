import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Users, Calendar, FileText, Cpu, MessageSquare, BarChart3, Settings,
  Search, Bell, Menu, X, ChevronRight, Plus, Eye, Edit, Play, Clock, CheckCircle, TrendingUp, Send,
  User, Shield, BellRing
} from "lucide-react";
import abcLogo from "@/assets/abc-logo-new.png";
import ThemeToggle from "@/components/ThemeToggle";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: BookOpen, label: "Programs", id: "programs" },
  { icon: Users, label: "Students", id: "students" },
  { icon: Calendar, label: "Sessions", id: "sessions" },
  { icon: FileText, label: "Assignments", id: "assignments" },
  { icon: Cpu, label: "Simulation Labs", id: "simulations" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const allSearchableItems = [
  { title: "Entrepreneurship Fundamentals", type: "Program", section: "programs" },
  { title: "Venture Building", type: "Program", section: "programs" },
  { title: "African Market Strategy", type: "Program", section: "programs" },
  { title: "Amina K.", type: "Student", section: "students" },
  { title: "David M.", type: "Student", section: "students" },
  { title: "Market Analysis Report", type: "Assignment", section: "assignments" },
  { title: "Business Model Canvas", type: "Assignment", section: "assignments" },
  { title: "Entrepreneurship Simulation", type: "Simulation", section: "simulations" },
];

const notifications = [
  { id: 1, title: "New Submission", message: "Amina K. submitted Market Analysis Report", time: "2h ago", read: false, type: "system" },
  { id: 2, title: "Session Tomorrow", message: "Entrepreneurship — Week 7 at 10:00 AM", time: "3h ago", read: false, type: "system" },
  { id: 3, title: "Student Message", message: "David M. is asking about office hours", time: "5h ago", read: false, type: "messages" },
  { id: 4, title: "Simulation Complete", message: "Fatou S. completed Fundraising simulation (91%)", time: "Yesterday", read: true, type: "system" },
  { id: 5, title: "Reference Request", message: "Fatou S. requested a reference letter", time: "2 days ago", read: true, type: "messages" },
];

const FacultyDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [settingsTab, setSettingsTab] = useState("profile");
  const [notifFilter, setNotifFilter] = useState("all");
  const [notifList, setNotifList] = useState(notifications);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return allSearchableItems.filter(i => i.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery]);

  const handleNav = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
  };

  const markAllRead = () => setNotifList(prev => prev.map(n => ({ ...n, read: true })));
  const markRead = (id: number) => setNotifList(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));

  const filteredNotifs = notifList.filter(n => {
    if (notifFilter === "unread") return !n.read;
    if (notifFilter === "system") return n.type === "system";
    if (notifFilter === "messages") return n.type === "messages";
    return true;
  });

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-foreground/5 bg-card p-4 shrink-0 sticky top-0 h-screen">
        <Link to="/" className="flex items-center gap-2 mb-6 px-2">
          <img src={abcLogo} alt="ABC" className="h-8 w-auto" />
        </Link>
        <nav className="flex-1 space-y-0.5">
          {sidebarItems.map((item) => (
            <button key={item.label} onClick={() => handleNav(item.id)} className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-sans transition-all duration-200 ${activeSection === item.id ? "bg-primary/10 text-primary font-medium" : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"}`}>
              <item.icon size={18} strokeWidth={1.5} />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="border-t border-foreground/5 pt-3 mt-3">
          <div className="flex items-center gap-2 px-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="font-sans text-xs text-foreground/50">KA</span>
            </div>
            <div>
              <p className="font-sans text-sm text-foreground">Dr. Kwame Asante</p>
              <p className="font-sans text-xs text-foreground/40">Faculty</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/80" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-64 h-full bg-card p-4 border-r border-foreground/5">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-foreground/60"><X size={18} /></button>
            <Link to="/" className="flex items-center gap-2 mb-6 px-2">
              <img src={abcLogo} alt="ABC" className="h-8 w-auto" />
            </Link>
            <nav className="space-y-0.5">
              {sidebarItems.map((item) => (
                <button key={item.label} onClick={() => handleNav(item.id)} className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-sans transition-all ${activeSection === item.id ? "bg-primary/10 text-primary font-medium" : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"}`}>
                  <item.icon size={18} strokeWidth={1.5} />
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 h-14 border-b border-foreground/5 bg-card/80 backdrop-blur-lg flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground/60"><Menu size={18} /></button>
            <span className="font-sans text-sm font-medium text-foreground capitalize">{activeSection}</span>
            <div className="hidden md:flex items-center gap-2 bg-foreground/5 rounded-lg px-3 py-2 ml-4 relative">
              <Search size={15} className="text-foreground/40" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                className="bg-transparent border-none outline-none text-sm font-sans text-foreground placeholder:text-foreground/30 w-44"
              />
              {searchFocused && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-1 w-72 rounded-xl border border-foreground/10 bg-card p-2 shadow-xl z-50">
                  {searchResults.slice(0, 6).map((r) => (
                    <button
                      key={r.title}
                      onMouseDown={() => { setActiveSection(r.section); setSearchQuery(""); }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-foreground/5 transition-colors flex items-center justify-between"
                    >
                      <span className="font-sans text-sm text-foreground">{r.title}</span>
                      <span className="font-sans text-xs text-foreground/30">{r.type}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => { setActiveSection("settings"); setSettingsTab("notifications"); }}
              className="relative text-foreground/60 hover:text-foreground transition-colors"
            >
              <Bell size={17} />
              {notifList.some(n => !n.read) && <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary" />}
            </button>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="font-sans text-xs text-foreground/50">KA</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">

            {/* Dashboard Overview */}
            {activeSection === "dashboard" && (
              <>
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl text-foreground font-serif font-light">
                      Welcome, <em className="italic text-primary">Dr. Asante</em>
                    </h1>
                    <p className="font-sans text-sm text-foreground/50 mt-1">3 active programs · 87 students · 2 sessions this week</p>
                  </div>
                  <button onClick={() => handleNav("sessions")} className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">
                    <Plus size={15} /> Create Session
                  </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Active Programs", val: "3", icon: BookOpen },
                    { label: "Total Students", val: "87", icon: Users },
                    { label: "Sessions This Week", val: "2", icon: Calendar },
                    { label: "Pending Reviews", val: "12", icon: FileText },
                  ].map((s) => (
                    <div key={s.label} className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <div className="flex items-center justify-between mb-2">
                        <s.icon size={17} className="text-primary" />
                        <span className="font-mono text-xl text-foreground font-semibold">{s.val}</span>
                      </div>
                      <p className="font-sans text-xs text-foreground/40">{s.label}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h2 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Program Management</h2>
                      {[
                        { title: "Entrepreneurship Fundamentals", students: 32, status: "Active" },
                        { title: "Venture Building", students: 28, status: "Active" },
                        { title: "African Market Strategy", students: 27, status: "Active" },
                      ].map((p) => (
                        <div key={p.title} className="border border-foreground/5 rounded-xl p-4 bg-card mb-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-base text-foreground font-light">{p.title}</h3>
                              <p className="font-sans text-xs text-foreground/40 mt-0.5">{p.students} students enrolled</p>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <button onClick={() => handleNav("programs")} className="p-1.5 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground transition-colors"><Eye size={15} /></button>
                              <button className="p-1.5 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground transition-colors"><Edit size={15} /></button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h2 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Pending Reviews</h2>
                      {[
                        { title: "Market Analysis Report", student: "Amina K.", submitted: "2 hours ago" },
                        { title: "Business Model Canvas", student: "David M.", submitted: "Yesterday" },
                        { title: "Competitive Research", student: "Grace M.", submitted: "Yesterday" },
                      ].map((a) => (
                        <div key={a.title + a.student} className="border border-foreground/5 rounded-xl p-3 bg-card flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2.5">
                            <FileText size={15} className="text-foreground/30" />
                            <div>
                              <p className="font-sans text-sm text-foreground">{a.title}</p>
                              <p className="font-sans text-xs text-foreground/30">{a.student} · {a.submitted}</p>
                            </div>
                          </div>
                          <button onClick={() => handleNav("assignments")} className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-sans font-medium hover:bg-primary/20 transition-colors">
                            Review
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Quick Actions</h3>
                      <div className="space-y-1.5">
                        {[
                          { label: "Create Session", icon: Plus, action: "sessions" },
                          { label: "Review Assignments", icon: FileText, action: "assignments" },
                          { label: "Message Students", icon: MessageSquare, action: "messages" },
                        ].map((a) => (
                          <button key={a.label} onClick={() => handleNav(a.action)} className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-foreground/5 transition-colors text-foreground/60 hover:text-foreground text-left">
                            <a.icon size={15} className="text-primary" />
                            <span className="font-sans text-sm">{a.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Upcoming Sessions</h3>
                      {[
                        { title: "Entrepreneurship — Week 7", time: "Tomorrow, 10:00 AM", students: 32 },
                        { title: "Market Strategy — Workshop", time: "Thu, 2:00 PM", students: 27 },
                      ].map((s) => (
                        <div key={s.title} className="mb-3 last:mb-0">
                          <p className="font-sans text-sm text-foreground">{s.title}</p>
                          <p className="font-sans text-xs text-foreground/40 flex items-center gap-1 mt-0.5">
                            <Clock size={12} /> {s.time} · {s.students} students
                          </p>
                          <button className="mt-1.5 flex items-center gap-1 text-primary font-sans text-xs font-medium">
                            <Play size={12} /> Start Session
                          </button>
                        </div>
                      ))}
                    </div>

                    <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">Analytics</h3>
                      <div className="space-y-2.5">
                        {[
                          { label: "Engagement Rate", val: "89%" },
                          { label: "Completion Rate", val: "76%" },
                          { label: "Avg Assignment Score", val: "82%" },
                          { label: "Student Satisfaction", val: "4.7/5" },
                        ].map((a) => (
                          <div key={a.label} className="flex items-center justify-between">
                            <span className="font-sans text-xs text-foreground/50">{a.label}</span>
                            <span className="font-mono text-sm text-primary">{a.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Programs Management */}
            {activeSection === "programs" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl text-foreground font-serif font-light">Program <em className="italic text-primary">Management</em></h1>
                  <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-full font-sans font-semibold text-sm"><Plus size={15} /> New Program</button>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Entrepreneurship Fundamentals", students: 32, modules: 12, completion: 45 },
                    { title: "Venture Building", students: 28, modules: 8, completion: 62 },
                    { title: "African Market Strategy", students: 27, modules: 10, completion: 38 },
                  ].map((p) => (
                    <div key={p.title} className="border border-foreground/5 rounded-2xl p-6 bg-card">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-lg text-foreground font-light">{p.title}</h2>
                          <p className="font-sans text-sm text-foreground/40 mt-1">{p.students} students · {p.modules} modules</p>
                        </div>
                        <div className="flex gap-1.5">
                          <button className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground"><Eye size={15} /></button>
                          <button className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground"><Edit size={15} /></button>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 h-2 bg-foreground/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${p.completion}%` }} />
                        </div>
                        <span className="font-mono text-sm text-primary">{p.completion}% avg completion</span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-sans font-medium">Manage Content</button>
                        <button className="px-3 py-1.5 rounded-lg bg-foreground/5 text-foreground/60 text-sm font-sans">View Students</button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Students */}
            {activeSection === "students" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl text-foreground font-serif font-light">Students</h1>
                  <div className="flex items-center gap-2 bg-foreground/5 rounded-lg px-3 py-2">
                    <Search size={15} className="text-foreground/40" />
                    <input type="text" placeholder="Search students..." className="bg-transparent border-none outline-none text-sm font-sans text-foreground placeholder:text-foreground/30 w-44" />
                  </div>
                </div>
                <div className="border border-foreground/5 rounded-2xl bg-card overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-foreground/5">
                        <th className="text-left py-3 px-4 font-sans text-xs text-foreground/40 uppercase">Name</th>
                        <th className="text-left py-3 px-4 font-sans text-xs text-foreground/40 uppercase">Program</th>
                        <th className="text-left py-3 px-4 font-sans text-xs text-foreground/40 uppercase">Progress</th>
                        <th className="text-left py-3 px-4 font-sans text-xs text-foreground/40 uppercase">Status</th>
                        <th className="text-left py-3 px-4 font-sans text-xs text-foreground/40 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Amina K.", program: "Entrepreneurship", progress: 72, status: "Active" },
                        { name: "David M.", program: "Venture Building", progress: 45, status: "Active" },
                        { name: "Fatou S.", program: "Market Strategy", progress: 88, status: "Active" },
                        { name: "Samuel O.", program: "Entrepreneurship", progress: 60, status: "Active" },
                        { name: "Grace M.", program: "Venture Building", progress: 33, status: "At Risk" },
                        { name: "Kofi A.", program: "Market Strategy", progress: 91, status: "Active" },
                      ].map((s) => (
                        <tr key={s.name} className="border-b border-foreground/5 last:border-0 hover:bg-foreground/5 transition-colors">
                          <td className="py-3 px-4 font-sans text-sm text-foreground">{s.name}</td>
                          <td className="py-3 px-4 font-sans text-sm text-foreground/50">{s.program}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                                <div className="h-full bg-primary/60 rounded-full" style={{ width: `${s.progress}%` }} />
                              </div>
                              <span className="font-mono text-xs text-foreground/40">{s.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-sans font-medium ${s.status === "Active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}`}>{s.status}</span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-foreground/40 hover:text-foreground"><Eye size={15} /></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* Sessions */}
            {activeSection === "sessions" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl text-foreground font-serif font-light">Sessions</h1>
                  <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-full font-sans font-semibold text-sm"><Plus size={15} /> Create Session</button>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Entrepreneurship — Week 7", date: "Jul 14, 2026", time: "10:00 AM", students: 32, status: "Upcoming" },
                    { title: "Market Strategy — Workshop", date: "Jul 16, 2026", time: "2:00 PM", students: 27, status: "Upcoming" },
                    { title: "Venture Building — Module 5", date: "Jul 18, 2026", time: "11:00 AM", students: 28, status: "Upcoming" },
                    { title: "Entrepreneurship — Week 6", date: "Jul 7, 2026", time: "10:00 AM", students: 32, status: "Completed" },
                  ].map((s) => (
                    <div key={s.title + s.date} className="border border-foreground/5 rounded-xl p-4 bg-card flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Calendar size={17} className="text-primary" />
                        <div>
                          <p className="font-sans text-sm text-foreground">{s.title}</p>
                          <p className="font-sans text-xs text-foreground/30">{s.date} · {s.time} · {s.students} students</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-medium ${s.status === "Upcoming" ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground/40"}`}>{s.status}</span>
                        {s.status === "Upcoming" && (
                          <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-sans font-medium">Start</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Assignments */}
            {activeSection === "assignments" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Assignment <em className="italic text-primary">Reviews</em></h1>
                <div className="space-y-3">
                  {[
                    { title: "Market Analysis Report", student: "Amina K.", program: "Entrepreneurship", submitted: "2 hours ago", status: "Pending Review" },
                    { title: "Business Model Canvas", student: "David M.", program: "Venture Building", submitted: "Yesterday", status: "Pending Review" },
                    { title: "Competitive Research", student: "Grace M.", program: "Venture Building", submitted: "Yesterday", status: "Pending Review" },
                    { title: "Growth Strategy Plan", student: "Fatou S.", program: "Market Strategy", submitted: "2 days ago", status: "Reviewed" },
                    { title: "Financial Projections", student: "Samuel O.", program: "Entrepreneurship", submitted: "3 days ago", status: "Reviewed" },
                  ].map((a) => (
                    <div key={a.title + a.student} className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-sans text-sm text-foreground font-medium">{a.title}</p>
                          <p className="font-sans text-xs text-foreground/40">{a.student} · {a.program} · {a.submitted}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-medium ${a.status === "Pending Review" ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground/40"}`}>{a.status}</span>
                          {a.status === "Pending Review" && (
                            <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-sans font-medium">Review</button>
                          )}
                        </div>
                      </div>
                      {a.status === "Pending Review" && (
                        <div className="mt-3 p-3 rounded-lg bg-foreground/5">
                          <textarea placeholder="Write feedback..." className="w-full bg-transparent border-none outline-none text-sm font-sans text-foreground placeholder:text-foreground/30 resize-none h-16" />
                          <div className="flex justify-end gap-2 mt-2">
                            <button className="px-3 py-1.5 rounded-lg bg-foreground/10 text-foreground/60 text-xs font-sans">Save Draft</button>
                            <button className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-sans font-medium flex items-center gap-1"><Send size={12} /> Submit Feedback</button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Simulation Monitoring */}
            {activeSection === "simulations" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Simulation <em className="italic text-primary">Monitoring</em></h1>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: "Active Simulations", val: "24" },
                    { label: "Avg Score", val: "73%" },
                    { label: "Completed", val: "156" },
                  ].map((m) => (
                    <div key={m.label} className="border border-foreground/5 rounded-xl p-4 bg-card text-center">
                      <p className="font-mono text-xl text-primary">{m.val}</p>
                      <p className="font-sans text-xs text-foreground/40 mt-1">{m.label}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {[
                    { student: "Amina K.", sim: "Entrepreneurship", score: 82, decisions: 24, status: "In Progress" },
                    { student: "David M.", sim: "Market Expansion", score: 68, decisions: 18, status: "In Progress" },
                    { student: "Fatou S.", sim: "Fundraising", score: 91, decisions: 30, status: "Completed" },
                    { student: "Samuel O.", sim: "Entrepreneurship", score: 75, decisions: 22, status: "In Progress" },
                  ].map((s) => (
                    <div key={s.student + s.sim} className="border border-foreground/5 rounded-xl p-4 bg-card flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Cpu size={17} className="text-primary" />
                        <div>
                          <p className="font-sans text-sm text-foreground">{s.student} — {s.sim}</p>
                          <p className="font-sans text-xs text-foreground/30">{s.decisions} decisions made · Score: {s.score}%</p>
                        </div>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-sans font-medium ${s.status === "Completed" ? "bg-primary/10 text-primary" : "bg-foreground/5 text-foreground/50"}`}>{s.status}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Messages */}
            {activeSection === "messages" && (
              <>
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl text-foreground font-serif font-light">Messages</h1>
                  <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-full font-sans font-semibold text-sm"><Plus size={15} /> New Message</button>
                </div>
                <div className="space-y-2">
                  {[
                    { from: "Amina K.", message: "Question about the financial projections assignment", time: "1h ago", unread: true },
                    { from: "David M.", message: "Can we schedule office hours this week?", time: "3h ago", unread: true },
                    { from: "Grace M.", message: "Thank you for the feedback on my report!", time: "Yesterday", unread: false },
                    { from: "Fatou S.", message: "Request for reference letter", time: "2 days ago", unread: false },
                  ].map((m) => (
                    <div key={m.from + m.time} className={`border rounded-xl p-4 bg-card flex items-start gap-3 ${m.unread ? "border-primary/20" : "border-foreground/5"}`}>
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <span className="font-sans text-xs text-foreground/50">{m.from.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-sans text-sm font-medium text-foreground">{m.from}</p>
                          <span className="font-sans text-xs text-foreground/30">{m.time}</span>
                        </div>
                        <p className="font-sans text-sm text-foreground/50 mt-0.5">{m.message}</p>
                      </div>
                      {m.unread && <div className="w-2 h-2 rounded-full bg-primary shrink-0 mt-1" />}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Analytics */}
            {activeSection === "analytics" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Analytics</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Engagement Rate", val: "89%", trend: "+3%" },
                    { label: "Completion Rate", val: "76%", trend: "+5%" },
                    { label: "Avg Assignment Score", val: "82%", trend: "+2%" },
                    { label: "Satisfaction", val: "4.7/5", trend: "+0.2" },
                  ].map((a) => (
                    <div key={a.label} className="border border-foreground/5 rounded-xl p-4 bg-card">
                      <p className="font-sans text-xs text-foreground/40">{a.label}</p>
                      <p className="font-mono text-xl text-foreground mt-1">{a.val}</p>
                      <p className="font-mono text-xs text-primary mt-1">{a.trend}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
                    <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Program Performance</h3>
                    {[
                      { program: "Entrepreneurship", engagement: 92, completion: 78 },
                      { program: "Venture Building", engagement: 87, completion: 72 },
                      { program: "Market Strategy", engagement: 85, completion: 81 },
                    ].map((p) => (
                      <div key={p.program} className="mb-4 last:mb-0">
                        <p className="font-sans text-sm text-foreground mb-2">{p.program}</p>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-sans text-xs text-foreground/40 w-20">Engagement</span>
                          <div className="flex-1 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${p.engagement}%` }} />
                          </div>
                          <span className="font-mono text-xs text-primary">{p.engagement}%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-sans text-xs text-foreground/40 w-20">Completion</span>
                          <div className="flex-1 h-1.5 bg-foreground/5 rounded-full overflow-hidden">
                            <div className="h-full bg-primary/60 rounded-full" style={{ width: `${p.completion}%` }} />
                          </div>
                          <span className="font-mono text-xs text-foreground/40">{p.completion}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
                    <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Student Activity</h3>
                    <div className="space-y-3">
                      {[
                        { label: "Active this week", val: "74/87" },
                        { label: "Assignments submitted", val: "42" },
                        { label: "Simulation sessions", val: "156" },
                        { label: "Forum posts", val: "89" },
                        { label: "Office hour requests", val: "12" },
                      ].map((s) => (
                        <div key={s.label} className="flex items-center justify-between">
                          <span className="font-sans text-sm text-foreground/50">{s.label}</span>
                          <span className="font-mono text-sm text-primary">{s.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Settings - Enhanced with merged notifications */}
            {activeSection === "settings" && (
              <>
                <h1 className="text-2xl text-foreground font-serif font-light">Settings</h1>
                
                <div className="flex gap-1 border-b border-foreground/5 pb-0">
                  {[
                    { id: "profile", label: "Profile", icon: User },
                    { id: "account", label: "Account", icon: Shield },
                    { id: "notifications", label: "Notifications", icon: BellRing },
                    { id: "preferences", label: "Preferences", icon: Settings },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSettingsTab(tab.id)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-sans transition-all border-b-2 -mb-px ${
                        settingsTab === tab.id ? "border-primary text-primary font-medium" : "border-transparent text-foreground/50 hover:text-foreground"
                      }`}
                    >
                      <tab.icon size={15} />
                      {tab.label}
                    </button>
                  ))}
                </div>

                {settingsTab === "profile" && (
                  <div className="border border-foreground/5 rounded-2xl p-6 bg-card space-y-5">
                    <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "Full Name", value: "Dr. Kwame Asante", type: "text" },
                        { label: "Email", value: "kwame@abc.edu", type: "email" },
                        { label: "Phone", value: "+233 20 123 4567", type: "tel" },
                        { label: "Department", value: "Entrepreneurship", type: "text" },
                      ].map((f) => (
                        <div key={f.label}>
                          <label className="font-sans text-xs text-foreground/40 block mb-1">{f.label}</label>
                          <input type={f.type} defaultValue={f.value} className="w-full px-3 py-2.5 rounded-xl bg-foreground/5 border border-foreground/5 text-sm font-sans text-foreground outline-none focus:border-primary/30 transition-colors" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <label className="font-sans text-xs text-foreground/40 block mb-1">Teaching Programs</label>
                      <div className="flex gap-2 flex-wrap">
                        {["Entrepreneurship Fundamentals", "Venture Building", "African Market Strategy"].map((p) => (
                          <span key={p} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-sans">{p}</span>
                        ))}
                      </div>
                    </div>
                    <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans font-semibold text-sm">Save Changes</button>
                  </div>
                )}

                {settingsTab === "account" && (
                  <div className="border border-foreground/5 rounded-2xl p-6 bg-card space-y-5">
                    <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider">Security</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-sans text-xs text-foreground/40 block mb-1">Current Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 rounded-xl bg-foreground/5 border border-foreground/5 text-sm font-sans text-foreground outline-none focus:border-primary/30" />
                      </div>
                      <div>
                        <label className="font-sans text-xs text-foreground/40 block mb-1">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 rounded-xl bg-foreground/5 border border-foreground/5 text-sm font-sans text-foreground outline-none focus:border-primary/30" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans font-semibold text-sm">Update Password</button>
                      <button className="border border-destructive/30 text-destructive px-5 py-2.5 rounded-full font-sans text-sm hover:bg-destructive/10 transition-colors">Logout All Devices</button>
                    </div>
                  </div>
                )}

                {settingsTab === "notifications" && (
                  <div className="space-y-4">
                    <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider">Notification Feed</h3>
                        <button onClick={markAllRead} className="font-sans text-xs text-primary hover:underline">Mark all read</button>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {["all", "unread", "system", "messages"].map((f) => (
                          <button key={f} onClick={() => setNotifFilter(f)} className={`px-3 py-1 rounded-full text-xs font-sans capitalize transition-colors ${notifFilter === f ? "bg-primary/10 text-primary font-medium" : "bg-foreground/5 text-foreground/50 hover:text-foreground"}`}>
                            {f}
                          </button>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {filteredNotifs.length === 0 ? (
                          <p className="font-sans text-sm text-foreground/40 text-center py-6">No new notifications</p>
                        ) : (
                          filteredNotifs.map((n) => (
                            <div key={n.id} onClick={() => markRead(n.id)} className={`p-3 rounded-xl border cursor-pointer transition-colors ${n.read ? "border-foreground/5 bg-card" : "border-primary/20 bg-primary/5"}`}>
                              <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                  {!n.read && <div className="w-2 h-2 rounded-full bg-primary shrink-0" />}
                                  <div>
                                    <p className="font-sans text-sm text-foreground font-medium">{n.title}</p>
                                    <p className="font-sans text-xs text-foreground/50 mt-0.5">{n.message}</p>
                                  </div>
                                </div>
                                <span className="font-sans text-xs text-foreground/30 shrink-0 ml-3">{n.time}</span>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="border border-foreground/5 rounded-2xl p-6 bg-card">
                      <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        {["Email notifications", "Session reminders", "Assignment submissions", "Student messages", "Platform alerts"].map((n) => (
                          <div key={n} className="flex items-center justify-between p-2 rounded-lg">
                            <span className="font-sans text-sm text-foreground/60">{n}</span>
                            <div className="w-9 h-5 rounded-full bg-primary/30 relative cursor-pointer">
                              <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-primary" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {settingsTab === "preferences" && (
                  <div className="border border-foreground/5 rounded-2xl p-6 bg-card space-y-5">
                    <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider">Display</h3>
                    <div className="flex items-center justify-between p-3 rounded-xl bg-foreground/5">
                      <div>
                        <p className="font-sans text-sm text-foreground">Theme</p>
                        <p className="font-sans text-xs text-foreground/40">Switch between light and dark mode</p>
                      </div>
                      <ThemeToggle />
                    </div>
                    <h3 className="font-sans text-sm font-semibold text-foreground/60 uppercase tracking-wider">Teaching Preferences</h3>
                    <div className="space-y-3">
                      {["Session availability reminders", "Auto-grade simple assignments", "Student progress alerts"].map((pref) => (
                        <div key={pref} className="flex items-center justify-between p-2 rounded-lg">
                          <span className="font-sans text-sm text-foreground/60">{pref}</span>
                          <div className="w-9 h-5 rounded-full bg-primary/30 relative cursor-pointer">
                            <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-primary" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans font-semibold text-sm">Save Preferences</button>
                  </div>
                )}
              </>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default FacultyDashboard;
