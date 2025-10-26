import { useState } from "react";
import { Mail, Lock, UserPlus } from "lucide-react";

export default function AuthPanel({ onAuthenticate }) {
  const [mode, setMode] = useState("signin"); // signin | signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onAuthenticate({
        name: mode === "signup" ? name : email.split("@")[0],
        email,
      });
    }, 800);
  };

  return (
    <section className="relative -mt-24 sm:-mt-28 lg:-mt-32 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 p-[2px]">
                <div className="h-full w-full rounded-md bg-white flex items-center justify-center">
                  {mode === "signup" ? (
                    <UserPlus className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <Lock className="h-5 w-5 text-indigo-600" />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {mode === "signup" ? "Create your account" : "Sign in to continue"}
                </h3>
                <p className="text-slate-600 text-sm">
                  {mode === "signup"
                    ? "Join the vault to access verified exam resources."
                    : "Welcome back. Access your personalized dashboard."}
                </p>
              </div>
            </div>

            <div className="flex text-sm mb-4 rounded-md p-1 bg-slate-100 w-fit">
              <button
                className={`px-3 py-1 rounded ${
                  mode === "signin" ? "bg-white shadow font-medium" : "text-slate-600"
                }`}
                onClick={() => setMode("signin")}
              >
                Sign in
              </button>
              <button
                className={`px-3 py-1 rounded ${
                  mode === "signup" ? "bg-white shadow font-medium" : "text-slate-600"
                }`}
                onClick={() => setMode("signup")}
              >
                Create account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-700">Full name</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g., Aadhya K."
                      className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                    />
                    <UserPlus className="h-4 w-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@rvitm.edu.in"
                    className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                  />
                  <Mail className="h-4 w-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full rounded-md border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pr-10"
                  />
                  <Lock className="h-4 w-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {error && (
                <p className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded-md px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-4 py-2.5 font-medium hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {loading ? "Processing..." : mode === "signup" ? "Create account" : "Sign in"}
              </button>

              <p className="text-xs text-slate-500">
                By continuing, you agree to our acceptable use and privacy policies.
              </p>
            </form>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h4 className="text-base font-semibold text-slate-900">What you get</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500" />
                Verified previous papers across departments
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500" />
                Topic-wise indexing with quick filters
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500" />
                Personalized dashboard and bookmarks
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-emerald-500" />
                Secure storage with audit trails
              </li>
            </ul>
            <div className="mt-6 rounded-xl border border-indigo-200 bg-white p-4">
              <p className="text-xs text-slate-500 mb-2">Live preview mock</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">rvitm-exams-2025.pdf</p>
                  <p className="text-xs text-slate-500">Encrypted • 2.4 MB</p>
                </div>
                <button
                  onClick={() => onAuthenticate({ name: "Demo Student", email: "demo@rvitm.edu.in" })}
                  className="text-indigo-600 text-sm font-medium hover:underline"
                >
                  Open demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
