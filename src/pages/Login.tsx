import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import abcLogo from "@/assets/abc-logo-new.png";

const Login = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "student";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(role === "faculty" ? "/faculty-dashboard" : "/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img src={abcLogo} alt="ABC" className="h-12 w-auto mx-auto" />
          </Link>
          <h1 className="text-2xl md:text-3xl text-foreground font-serif font-light">
            {role === "faculty" ? "Faculty" : "Student"} <em className="italic text-primary">Login</em>
          </h1>
          <p className="font-sans text-sm text-foreground/50 mt-2">
            Sign in to access your {role === "faculty" ? "teaching" : "learning"} dashboard
          </p>
        </div>

        <div className="border border-foreground/10 rounded-2xl p-6 md:p-8 bg-card">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-sans text-xs text-foreground/60 block mb-1.5">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-xl bg-foreground/5 border border-foreground/10 text-sm font-sans text-foreground outline-none focus:border-primary/40 transition-colors placeholder:text-foreground/30"
              />
            </div>
            <div>
              <label className="font-sans text-xs text-foreground/60 block mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-2.5 rounded-xl bg-foreground/5 border border-foreground/10 text-sm font-sans text-foreground outline-none focus:border-primary/40 transition-colors placeholder:text-foreground/30 pr-10"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/60">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && <p className="font-sans text-xs text-destructive">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground py-2.5 rounded-xl font-sans font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="font-sans text-xs text-foreground/40">
              Don't have an account?{" "}
              <Link to="/admissions" className="text-primary hover:underline">Apply Now</Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="inline-flex items-center gap-1.5 font-sans text-xs text-foreground/40 hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
