import { useState } from "react";
import { ArrowRight, Clock, User, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const categories = ["All", "Entrepreneurship", "Markets", "Finance", "Innovation", "Leadership", "Policy", "Case Studies"];

const articles = [
  { title: "The Rise of Fintech in West Africa: Opportunities and Challenges", excerpt: "An analysis of the rapidly evolving fintech landscape across Nigeria, Ghana, and Senegal.", category: "Markets", author: "Dr. Kwame Asante", readTime: "8 min", featured: true },
  { title: "Building a Startup Fundraising Strategy for African Markets", excerpt: "How founders can navigate the unique fundraising environment on the continent.", category: "Entrepreneurship", author: "Amina Diallo", readTime: "6 min" },
  { title: "Investment Trends: Where Capital Is Flowing in Africa 2026", excerpt: "A data-driven look at investment patterns across sectors and regions.", category: "Finance", author: "Yusuf Ibrahim", readTime: "10 min" },
  { title: "Innovation Ecosystems: Lessons from Nairobi and Lagos", excerpt: "Comparing two of Africa's most dynamic tech hubs and what makes them tick.", category: "Innovation", author: "Ngozi Okafor", readTime: "7 min" },
  { title: "Leadership in Crisis: Decision-Making Under Pressure", excerpt: "How African business leaders navigated unprecedented challenges and emerged stronger.", category: "Leadership", author: "Fatima Al-Hassan", readTime: "5 min" },
  { title: "Policy Frameworks That Support Entrepreneurship in Africa", excerpt: "Exploring government initiatives that create favorable conditions for business growth.", category: "Policy", author: "Jean-Pierre Mbeki", readTime: "9 min" },
  { title: "Case Study: Scaling AgTech Across East Africa", excerpt: "How one startup grew from a single market to five countries in two years.", category: "Case Studies", author: "Samuel Okonkwo", readTime: "12 min" },
  { title: "The Future of E-Commerce in Sub-Saharan Africa", excerpt: "Digital commerce trends and the infrastructure needed to support growth.", category: "Markets", author: "Aisha Mohammed", readTime: "8 min" },
];

const series = [
  { title: "Building Startups in Africa", count: "5 articles" },
  { title: "African Market Expansion Playbooks", count: "4 articles" },
  { title: "Investment & Capital Series", count: "6 articles" },
];

const contributors = [
  { name: "Dr. Kwame Asante", role: "Strategy", expertise: "African Market Strategy" },
  { name: "Amina Diallo", role: "Entrepreneurship", expertise: "Venture Building" },
  { name: "Yusuf Ibrahim", role: "Finance", expertise: "Capital Markets" },
  { name: "Ngozi Okafor", role: "Innovation", expertise: "EdTech" },
];

const Insights = () => {
  const [activeCat, setActiveCat] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [emailError, setEmailError] = useState("");

  const filtered = activeCat === "All" ? articles : articles.filter((a) => a.category === activeCat);
  const featured = articles.find((a) => a.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setSubscribing(true);
    setTimeout(() => { setSubscribing(false); setSubscribed(true); }, 1000);
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="mx-auto max-w-7xl text-left">
          <span className="font-sans text-xs font-medium text-primary tracking-wider uppercase">Insights</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 max-w-3xl">
            Insights for Building in <em className="font-serif italic text-primary">Africa</em>
          </h1>
          <p className="font-sans text-sm text-foreground/60 mt-4 max-w-xl">
            Perspectives, research, and practical thinking on entrepreneurship, markets, and leadership across Africa.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="px-4 md:px-6 pb-12">
          <div className="mx-auto max-w-7xl">
            <div className="border border-foreground/5 rounded-2xl p-6 md:p-8 bg-card">
              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-medium">Featured</span>
              <h2 className="text-2xl md:text-3xl text-foreground font-light mt-3 mb-2">{featured.title}</h2>
              <p className="font-sans text-sm text-foreground/50 mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mb-4">
                <span className="font-sans text-[10px] text-foreground/40 flex items-center gap-1"><User size={10} /> {featured.author}</span>
                <span className="font-sans text-[10px] text-foreground/40 flex items-center gap-1"><Clock size={10} /> {featured.readTime}</span>
                <span className="px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/50 text-[10px] font-sans">{featured.category}</span>
              </div>
              <button className="inline-flex items-center gap-2 text-primary font-sans text-xs font-medium hover:gap-3 transition-all duration-300">
                Read Article <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="px-4 md:px-6 pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCat(cat)} className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${activeCat === cat ? "bg-primary text-primary-foreground" : "bg-card text-foreground/60 hover:text-foreground border border-foreground/5"}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="px-4 md:px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((a) => (
              <div key={a.title} className="border border-foreground/5 rounded-2xl p-5 bg-card hover:border-primary/20 transition-all duration-300 group">
                <span className="px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/50 text-[10px] font-sans">{a.category}</span>
                <h3 className="text-base text-foreground font-light mt-3 mb-2">{a.title}</h3>
                <p className="font-sans text-xs text-foreground/50 mb-3">{a.excerpt}</p>
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[10px] text-foreground/40">{a.author}</span>
                  <span className="font-sans text-[10px] text-foreground/30">{a.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Series */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-7xl pt-4">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8">Deep Dives & <em className="font-serif italic">Series</em></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {series.map((s) => (
              <div key={s.title} className="border border-foreground/5 rounded-2xl p-5 bg-background/50 hover:border-primary/20 transition-all duration-300">
                <h3 className="text-base text-foreground font-light mb-1">{s.title}</h3>
                <p className="font-sans text-[10px] text-foreground/40">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Contributors */}
      <section className="px-4 md:px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl text-foreground mb-8"><em className="font-serif italic">Contributors</em></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {contributors.map((c) => (
              <div key={c.name} className="border border-foreground/5 rounded-2xl p-4 bg-card text-center">
                <div className="w-12 h-12 rounded-full bg-muted border border-foreground/5 mx-auto mb-2 flex items-center justify-center">
                  <span className="font-serif text-sm text-foreground/40">{c.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="font-sans text-xs text-foreground font-medium">{c.name}</h3>
                <p className="font-sans text-[10px] text-primary">{c.role}</p>
                <p className="font-sans text-[10px] text-foreground/40">{c.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 md:px-6 py-16 bg-card relative">
        <div className="serrated-edge bg-background absolute top-0 left-0 right-0" />
        <div className="mx-auto max-w-xl pt-4 text-center">
          <h2 className="text-3xl text-foreground mb-2">Stay <em className="font-serif italic">Ahead</em></h2>
          <p className="font-sans text-sm text-foreground/60 mb-6">Get insights on African business, markets, and innovation delivered to your inbox.</p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <input type="email" placeholder="Enter your email" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError(""); }} className="flex-1 px-4 py-2.5 rounded-full bg-foreground/5 border border-foreground/5 text-xs font-sans text-foreground outline-none focus:border-primary/30" />
            <button type="submit" disabled={subscribing} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-sans font-semibold text-xs transition-all hover:scale-105 disabled:opacity-50">
              {subscribing ? "..." : "Subscribe"}
            </button>
          </form>
          {emailError && <p className="font-sans text-[10px] text-destructive mt-2">{emailError}</p>}
        </div>
        <div className="serrated-edge bg-background absolute bottom-0 left-0 right-0 rotate-180" />
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">Learn. Think. <em className="font-serif italic">Build.</em></h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/programs" className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-sans font-semibold text-sm transition-all duration-300 hover:scale-105">Explore Programs</Link>
            <Link to="/admissions" className="border border-foreground/20 text-foreground px-7 py-3 rounded-full font-sans font-medium text-sm transition-all duration-300 hover:border-foreground/50">Apply Now</Link>
          </div>
        </div>
      </section>

      {/* Subscribe Success Modal */}
      {subscribed && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setSubscribed(false)} />
          <div className="relative bg-card border border-foreground/10 rounded-2xl p-8 max-w-sm w-full text-center animate-fade-up">
            <Mail className="text-primary mx-auto mb-3" size={28} />
            <h3 className="text-lg text-foreground font-serif font-light mb-2">You're Subscribed</h3>
            <p className="font-sans text-xs text-foreground/60 mb-4">You'll now receive insights, updates, and opportunities from Africa Business College.</p>
            <button onClick={() => setSubscribed(false)} className="bg-primary text-primary-foreground px-5 py-2 rounded-full font-sans font-semibold text-xs">Close</button>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Insights;
