import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative bg-zinc-950/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Career & Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work & <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Practical development experience, project engineering, and technical focus.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {/* Card 1: Independent Software Development */}
          <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Full-Stack Web Development
                </h3>
                <span className="text-sm font-medium text-cyan-400">
                  Independent & Project-Based Engineering
                </span>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/50 self-start sm:self-auto">
                Present
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Building full-stack web applications, designing RESTful APIs, integrating third-party APIs, 
              and crafting responsive user interfaces with modern React, Next.js, and TypeScript architectures.
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                Next.js
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                React
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                TypeScript
              </span>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                Node.js
              </span>
            </div>
          </div>

          {/* Card 2: Open to Opportunities (Editable Placeholder) */}
          <div className="rounded-2xl bg-zinc-900/40 border border-dashed border-zinc-800 hover:border-cyan-500/40 p-6 sm:p-8 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold text-zinc-200">
                Professional Experience
              </h3>
              <span className="text-xs font-mono text-cyan-400 bg-cyan-950/30 border border-cyan-800/40 px-2.5 py-0.5 rounded self-start sm:self-auto">
                Open to Opportunities
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Ready to contribute to engineering teams as a frontend or full-stack software developer.
              (Additional professional roles can be customized here as career milestones are achieved).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

