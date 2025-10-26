import { useMemo } from "react";
import { FileText, GraduationCap, Search, Star } from "lucide-react";

export default function DashboardCard({ user }) {
  const greeting = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {greeting}, {user?.name?.split(" ")[0] || "Student"}
              </h2>
              <p className="text-slate-600 text-sm">Welcome to your exam vault dashboard</p>
            </div>
            <div className="w-full sm:w-auto max-w-md">
              <div className="relative">
                <Search className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search papers, subjects, semesters..."
                  className="w-full sm:w-80 rounded-md border-slate-300 pl-9 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <StatCard icon={FileText} label="Total papers" value="148" color="indigo" />
            <StatCard icon={GraduationCap} label="Departments" value="6" color="emerald" />
            <StatCard icon={Star} label="Bookmarked" value="12" color="amber" />
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Recently added</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: "DBMS Midterm S4", meta: "CSE • 2024 • PDF • 1.2MB" },
                { title: "Signals & Systems", meta: "ECE • 2023 • PDF • 2.1MB" },
                { title: "Thermo Dynamics", meta: "ME • 2024 • PDF • 1.7MB" },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 p-4 bg-slate-50/60">
                  <p className="text-sm font-medium text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-600 mt-1">{item.meta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, color = "indigo" }) {
  const colorMap = {
    indigo: "from-indigo-500/15 to-indigo-500/5 text-indigo-700",
    emerald: "from-emerald-500/15 to-emerald-500/5 text-emerald-700",
    amber: "from-amber-500/15 to-amber-500/5 text-amber-700",
  };
  return (
    <div className={`rounded-xl border border-slate-200 p-4 bg-gradient-to-br ${colorMap[color]} flex items-center gap-4`}>
      <div className="h-10 w-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs text-slate-600">{label}</p>
        <p className="text-lg font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}
