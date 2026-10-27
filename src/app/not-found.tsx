import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 mb-6 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
          <span className="font-mono text-3xl font-black">404</span>
        </div>

        <h1 className="text-3xl font-extrabold text-white tracking-tight mb-3">
          Page or Project Not Found
        </h1>

        <p className="text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
          The requested page or project slug does not exist, was renamed, or is currently unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            Explore Projects
          </Link>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/40 text-zinc-300 hover:text-cyan-400 font-semibold text-sm transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}

