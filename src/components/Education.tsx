import React from "react";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-cyan-400">History</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Formal qualifications and academic journey in engineering and science.
          </p>
        </div>

        {/* Timeline / Card List */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
          {education.map((item, index) => (
            <div key={`${item.degree}-${index}`} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-7.75 sm:-left-9.75 top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_12px_rgba(6,182,212,0.6)]" />

              {/* Card */}
              <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.degree}
                  </h3>
                  {item.session ? (
                    <span className="inline-flex items-center text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 self-start sm:self-auto">
                      {item.session}
                    </span>
                  ) : null}
                </div>

                <div className="text-sm font-medium text-cyan-400 mb-1">
                  {item.institution}
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono mb-4">
                  <span>Field: {item.field}</span>
                  {item.dept && (
                    <>
                      <span>•</span>
                      <span className="text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                        {item.dept}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

