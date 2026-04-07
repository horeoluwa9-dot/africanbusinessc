import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard, BookOpen, Users, Calendar, FileText, Cpu, MessageSquare, BarChart3, Settings,
  Search, Bell, Menu, X, ChevronRight, Plus, Eye, Edit, Play, Clock, CheckCircle, TrendingUp
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/faculty-dashboard" },
  { icon: BookOpen, label: "Programs", path: "/faculty-dashboard#programs" },
  { icon: Users, label: "Students", path: "/faculty-dashboard#students" },
  { icon: Calendar, label: "Sessions", path: "/faculty-dashboard#sessions" },
  { icon: FileText, label: "Assignments", path: "/faculty-dashboard#assignments" },
  { icon: Cpu, label: "Simulation Labs", path: "/faculty-dashboard#simulations" },
  { icon: MessageSquare, label: "Messages", path: "/faculty-dashboard#messages" },
  { icon: BarChart3, label: "Analytics", path: "/faculty-dashboard#analytics" },
  { icon: Settings, label: "Settings", path: "/faculty-dashboard#settings" },
];

const FacultyDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 border-r border-foreground/5 bg-card p-4 shrink-0">
        <Link to="/" className="flex items-center gap-2 mb-6 px-2">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <span className="font-sans text-[10px] font-semibold text-primary-foreground">ABC</span>
          </div>
          <span className="font-serif text-sm font-light text-foreground">ABC Faculty</span>
        </Link>
        <nav className="flex-1 space-y-0.5">
          {sidebarItems.map((item) => (
            <a key={item.label} href={item.path} className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-sans text-foreground/60 hover:bg-foreground/5 hover:text-foreground transition-all duration-200">
              <item.icon size={16} strokeWidth={1.5} />
              {item.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-foreground/5 pt-3 mt-3">
          <div className="flex items-center gap-2 px-3">
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
              <span className="font-sans text-[10px] text-foreground/50">KA</span>
            </div>
            <div>
              <p className="font-sans text-xs text-foreground">Dr. Kwame Asante</p>
              <p className="font-sans text-[10px] text-foreground/40">Faculty</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-background/80" onClick={() => setSidebarOpen(false)} />
          <aside className="relative w-60 h-full bg-card p-4 border-r border-foreground/5">
            <button onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-foreground/60"><X size={18} /></button>
            <Link to="/" className="flex items-center gap-2 mb-6 px-2">
              <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                <span className="font-sans text-[10px] font-semibold text-primary-foreground">ABC</span>
              </div>
              <span className="font-serif text-sm font-light text-foreground">ABC Faculty</span>
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

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-40 h-12 border-b border-foreground/5 bg-card/80 backdrop-blur-lg flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-foreground/60"><Menu size={18} /></button>
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
              <span className="font-sans text-[10px] text-foreground/50">KA</span>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            {/* Welcome */}
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl text-foreground font-serif font-light">
                  Welcome, <em className="italic text-primary">Dr. Asante</em>
                </h1>
                <p className="font-sans text-xs text-foreground/50 mt-1">3 active programs · 87 students · 2 sessions this week</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full font-sans font-semibold text-xs transition-all duration-300 hover:scale-105">
                  <Plus size={14} /> Create Session
                </button>
              </div>
            </div>

            {/* Overview Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Active Programs", val: "3", icon: BookOpen },
                { label: "Total Students", val: "87", icon: Users },
                { label: "Sessions This Week", val: "2", icon: Calendar },
                { label: "Pending Reviews", val: "12", icon: FileText },
              ].map((s) => (
                <div key={s.label} className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <s.icon size={16} className="text-primary" />
                    <span className="font-mono text-lg text-foreground font-semibold">{s.val}</span>
                  </div>
                  <p className="font-sans text-[10px] text-foreground/40">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-4">
                {/* Program Management */}
                <div>
                  <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Program Management</h2>
                  {[
                    { title: "Entrepreneurship Fundamentals", students: 32, status: "Active" },
                    { title: "Venture Building", students: 28, status: "Active" },
                    { title: "African Market Strategy", students: 27, status: "Active" },
                  ].map((p) => (
                    <div key={p.title} className="border border-foreground/5 rounded-xl p-4 bg-card mb-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-sm text-foreground font-light">{p.title}</h3>
                          <p className="font-sans text-[10px] text-foreground/40 mt-0.5">{p.students} students enrolled</p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button className="p-1.5 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground transition-colors"><Eye size={14} /></button>
                          <button className="p-1.5 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-foreground transition-colors"><Edit size={14} /></button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Student Management */}
                <div>
                  <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Recent Students</h2>
                  <div className="border border-foreground/5 rounded-xl bg-card overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-foreground/5">
                          <th className="text-left py-2 px-4 font-sans text-[10px] text-foreground/40 uppercase">Name</th>
                          <th className="text-left py-2 px-4 font-sans text-[10px] text-foreground/40 uppercase">Program</th>
                          <th className="text-left py-2 px-4 font-sans text-[10px] text-foreground/40 uppercase">Progress</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "Amina K.", program: "Entrepreneurship", progress: 72 },
                          { name: "David M.", program: "Venture Building", progress: 45 },
                          { name: "Fatou S.", program: "Market Strategy", progress: 88 },
                          { name: "Samuel O.", program: "Entrepreneurship", progress: 60 },
                        ].map((s) => (
                          <tr key={s.name} className="border-b border-foreground/5 last:border-0">
                            <td className="py-2 px-4 font-sans text-xs text-foreground">{s.name}</td>
                            <td className="py-2 px-4 font-sans text-[10px] text-foreground/50">{s.program}</td>
                            <td className="py-2 px-4">
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-1 bg-foreground/5 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary/60 rounded-full" style={{ width: `${s.progress}%` }} />
                                </div>
                                <span className="font-mono text-[10px] text-foreground/40">{s.progress}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Assignments & Reviews */}
                <div>
                  <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Pending Reviews</h2>
                  {[
                    { title: "Market Analysis Report", student: "Amina K.", submitted: "2 hours ago" },
                    { title: "Business Model Canvas", student: "David M.", submitted: "Yesterday" },
                    { title: "Competitive Research", student: "Grace M.", submitted: "Yesterday" },
                  ].map((a) => (
                    <div key={a.title + a.student} className="border border-foreground/5 rounded-xl p-3 bg-card flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <FileText size={14} className="text-foreground/30" />
                        <div>
                          <p className="font-sans text-xs text-foreground">{a.title}</p>
                          <p className="font-sans text-[10px] text-foreground/30">{a.student} · {a.submitted}</p>
                        </div>
                      </div>
                      <button className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-sans font-medium hover:bg-primary/20 transition-colors">
                        Review
                      </button>
                    </div>
                  ))}
                </div>

                {/* Simulation Monitoring */}
                <div>
                  <h2 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Simulation Monitoring</h2>
                  <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {[
                        { label: "Active Sims", val: "24" },
                        { label: "Avg Score", val: "73%" },
                        { label: "Completed", val: "156" },
                      ].map((m) => (
                        <div key={m.label} className="text-center p-2 rounded-lg bg-foreground/5">
                          <p className="font-mono text-sm text-primary">{m.val}</p>
                          <p className="font-sans text-[10px] text-foreground/40">{m.label}</p>
                        </div>
                      ))}
                    </div>
                    <Link to="/simulation-labs" className="text-primary font-sans text-xs font-medium flex items-center gap-1">
                      View All Simulations <ChevronRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {/* Quick Actions */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Quick Actions</h3>
                  <div className="space-y-1.5">
                    {[
                      { label: "Create Session", icon: Plus },
                      { label: "Review Assignments", icon: FileText },
                      { label: "Message Students", icon: MessageSquare },
                    ].map((a) => (
                      <button key={a.label} className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-foreground/5 transition-colors text-foreground/60 hover:text-foreground text-left">
                        <a.icon size={14} className="text-primary" />
                        <span className="font-sans text-xs">{a.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Upcoming Sessions</h3>
                  {[
                    { title: "Entrepreneurship — Week 7", time: "Tomorrow, 10:00 AM", students: 32 },
                    { title: "Market Strategy — Workshop", time: "Thu, 2:00 PM", students: 27 },
                  ].map((s) => (
                    <div key={s.title} className="mb-3 last:mb-0">
                      <p className="font-sans text-xs text-foreground">{s.title}</p>
                      <p className="font-sans text-[10px] text-foreground/40 flex items-center gap-1 mt-0.5">
                        <Clock size={10} /> {s.time} · {s.students} students
                      </p>
                      <button className="mt-1.5 flex items-center gap-1 text-primary font-sans text-[10px] font-medium">
                        <Play size={10} /> Start Session
                      </button>
                    </div>
                  ))}
                </div>

                {/* Analytics */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Analytics</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: "Engagement Rate", val: "89%" },
                      { label: "Completion Rate", val: "76%" },
                      { label: "Avg Assignment Score", val: "82%" },
                      { label: "Student Satisfaction", val: "4.7/5" },
                    ].map((a) => (
                      <div key={a.label} className="flex items-center justify-between">
                        <span className="font-sans text-[10px] text-foreground/50">{a.label}</span>
                        <span className="font-mono text-xs text-primary">{a.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Messages */}
                <div className="border border-foreground/5 rounded-xl p-4 bg-card">
                  <h3 className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">Messages</h3>
                  <p className="font-sans text-xs text-foreground/50 mb-2">5 unread messages from students</p>
                  <button className="text-primary font-sans text-xs font-medium flex items-center gap-1">
                    View Messages <ChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FacultyDashboard;
