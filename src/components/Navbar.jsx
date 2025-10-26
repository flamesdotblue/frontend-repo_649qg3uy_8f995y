import { User, LogOut, Shield } from "lucide-react";

export default function Navbar({ isAuthed, onSignOut }) {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-500 via-indigo-500 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-md bg-white flex items-center justify-center">
              <Shield className="h-5 w-5 text-sky-600" />
            </div>
          </div>
          <span className="text-xl font-semibold tracking-tight">RVITM Exam Vault</span>
        </div>

        <div className="flex items-center gap-3">
          {isAuthed ? (
            <button
              onClick={onSignOut}
              className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3 py-2 text-sm font-medium hover:bg-slate-800 transition"
            >
              <LogOut className="h-4 w-4" />
              Sign out
            </button>
          ) : (
            <div className="flex items-center gap-2 text-slate-600">
              <User className="h-5 w-5" />
              <span className="text-sm">Secure access</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
