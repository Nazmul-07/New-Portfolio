import React from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function About() {
  const highlights = [
    {
      title: "Modern Frontend Architecture",
      desc: "Building fast, dynamic, and scalable applications with Next.js, React, and TypeScript.",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Analytical Problem Solver",
      desc: "Approaching engineering hurdles with structured logic, clean code, and effective debugging.",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "User-Centric & Responsive",
      desc: "Translating ideas into pixel-perfect, accessible, and intuitive UI using modern Tailwind CSS.",
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-zinc-950/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-125 h-125 bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Background & Purpose
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-300">Me</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Dedicated frontend developer merging technical fundamentals with clean, aesthetic user interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative Story & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hello! I&apos;m <span className="text-white font-bold">{profile.name}</span>, a passionate{" "}
                <span className="text-cyan-400 font-semibold">{profile.designation}</span> and{" "}
                <span className="text-white font-medium">{profile.secondaryTitle}</span> holding a{" "}
                <span className="text-cyan-300 font-medium">{profile.education}</span>.
              </p>
              
              <p className="text-zinc-400 text-base leading-relaxed">
                {profile.bio}
              </p>

              <p className="text-zinc-400 text-base leading-relaxed">
                My journey in technology centers on understanding how systems operate from the ground up. 
                Whether architecting dynamic single-page applications or tuning client-side interactions, 
                I strive for clean modular code, fast load times, and an enjoyable user journey.
              </p>
            </div>

            {/* Highlights List */}
            <div className="space-y-4 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/50 hover:bg-zinc-900/90 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/50 group-hover:border-cyan-400/60 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Link */}
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-colors group"
              >
                <span>Interested in collaborating? Let&apos;s talk</span>
                <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Code Card & Badges */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Code Window */}
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-zinc-950/90 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <span className="text-cyan-400">⌘</span> developer.ts
                </div>
                <span className="text-[10px] font-mono text-zinc-600 uppercase">UTF-8</span>
              </div>

              {/* Code Snippet */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-zinc-300">
                <p className="text-zinc-500 mb-2">
                  <span className="text-zinc-600">Professional profile summary</span>
                </p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span>:{" "}
                  <span className="text-amber-300">DeveloperProfile</span> = &#123;
                </p>
                <div className="pl-4 space-y-1.5 py-1">
                  <p>
                    <span className="text-zinc-400">name:</span>{" "}
                    <span className="text-emerald-400">&quot;{profile.name}&quot;</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">brand:</span>{" "}
                    <span className="text-emerald-400">&quot;{profile.brand}&quot;</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">designation:</span>{" "}
                    <span className="text-emerald-400">&quot;{profile.designation}&quot;</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">role:</span>{" "}
                    <span className="text-emerald-400">&quot;{profile.secondaryTitle}&quot;</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">education:</span>{" "}
                    <span className="text-emerald-400">&quot;{profile.education}&quot;</span>,
                  </p>
                  <p>
                    <span className="text-zinc-400">coreStack:</span> [
                    <span className="text-cyan-300">&quot;React&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;Next.js&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;TS&quot;</span>
                    ],
                  </p>
                  <p>
                    <span className="text-zinc-400">openToWork:</span>{" "}
                    <span className="text-cyan-400">true</span>,
                  </p>
                </div>
                <p>&#125;;</p>
              </div>

              {/* Window Footer */}
              <div className="px-4 py-2.5 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span className="text-cyan-400">● git: main*</span>
                <span>TypeScript 5.0</span>
              </div>
            </div>

            {/* Quick Stats Bento Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  Focus
                </div>
                <div className="text-lg font-bold text-white">
                  Frontend Eng
                </div>
                <div className="text-xs text-cyan-400 mt-1 font-mono">
                  React &amp; Next.js
                </div>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/40 transition-colors">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-1">
                  Education
                </div>
                <div className="text-lg font-bold text-white">
                  Diploma CST
                </div>
                <div className="text-xs text-cyan-400 mt-1 font-mono">
                  Engineering
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
