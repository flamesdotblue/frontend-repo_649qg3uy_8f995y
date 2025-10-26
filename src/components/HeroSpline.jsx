import Spline from "@splinetool/react-spline";
import { CheckCircle2 } from "lucide-react";

export default function HeroSpline() {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/70 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Secure, modern exam archive for RVITM
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            Access previous papers, model answers, and resources in one protected place. 
            Create your account, sign in securely, and get a personalized dashboard.
          </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <li className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-md px-3 py-2 border border-slate-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Verified access
            </li>
            <li className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-md px-3 py-2 border border-slate-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Organized vault
            </li>
            <li className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-md px-3 py-2 border border-slate-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Fast search
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
