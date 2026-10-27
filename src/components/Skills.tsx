"use client";

import React, { useState } from "react";
import { skills } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories: string[] = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const getTechIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "html5":
        return (
          <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 5l1.6 14.5L12 22l7.4-2.5L21 5l-9-3zm5.8 5.7l-.3 3.5h-5.5v2.8h4.6l-.4 4.5-4.2 1.2-4.2-1.2-.3-2.9h2.3l.1 1.2 2.1.6 2.1-.6.2-2.1H7.8l-.6-7H17.8z" />
          </svg>
        );
      case "css3":
        return (
          <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L3 5l1.6 14.5L12 22l7.4-2.5L21 5l-9-3zm5.8 5.7H7.4l.2 2.5h8.9l-.3 3.5H9.8l.2 2h6.1l-.4 4.5-3.7 1-3.7-1-.3-3H6.1l.4 5 5.5 1.5 5.5-1.5.8-9.5h.3z" />
          </svg>
        );
      case "javascript":
        return (
          <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm10.7 13.9c.7.4 1.5.7 2.3.7.9 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.6-1.5-1.5-.6-2.5-1.5-2.5-2.9 0-1.6 1.3-2.8 3.2-2.8 1 0 1.8.3 2.4.7l-.6 1.7c-.5-.3-1.1-.5-1.8-.5-.8 0-1.3.4-1.3 1 0 .6.4.9 1.6 1.4 1.6.7 2.5 1.6 2.5 3 0 1.8-1.4 2.9-3.4 2.9-1.2 0-2.3-.4-3-1l.7-1.6zm-5.7.2c.4.3.9.5 1.4.5.8 0 1.3-.4 1.3-1.4v-5.9h2.1v6c0 1.8-1.1 2.6-2.7 2.6-.9 0-1.7-.2-2.2-.6l.1-1.2z" />
          </svg>
        );
      case "typescript":
        return (
          <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 3h18v18H3V3zm8.3 7.8H9.1v6.9H7.3v-6.9H5.1V9.2h6.2v1.6zm4.8 5.4c.7.4 1.5.7 2.3.7.9 0 1.5-.4 1.5-1.1 0-.7-.5-1-1.6-1.5-1.5-.6-2.5-1.5-2.5-2.9 0-1.6 1.3-2.8 3.2-2.8 1 0 1.8.3 2.4.7l-.6 1.7c-.5-.3-1.1-.5-1.8-.5-.8 0-1.3.4-1.3 1 0 .6.4.9 1.6 1.4 1.6.7 2.5 1.6 2.5 3 0 1.8-1.4 2.9-3.4 2.9-1.2 0-2.3-.4-3-1l.7-1.6z" />
          </svg>
        );
      case "react":
        return (
          <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="2" />
            <path
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
              opacity="0.2"
            />
            <path
              d="M12 6.5c4.7 0 8.5 2.5 8.5 5.5s-3.8 5.5-8.5 5.5S3.5 15 3.5 12s3.8-5.5 8.5-5.5m0-1.5C6.7 5 2 8.1 2 12s4.7 7 10 7 10-3.1 10-7-4.7-7-10-7z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M7.2 9.2c2.4-4 6.5-5.8 9.1-4.3s2.4 6-0.1 10-6.5 5.8-9.1 4.3-2.3-6 .1-10z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M16.8 9.2c2.4 4 2.6 8.5 0.1 10s-6.7-.3-9.1-4.3-2.6-8.5-.1-10 6.7.3 9.1 4.3z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
        );
      case "next.js":
        return (
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.6 15.3l-5.6-7.8v7.8H8V6.7h2.2l5.6 7.8V6.7h2v10.6h-2.2z" />
          </svg>
        );
      case "tailwind css":
        return (
          <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c-3.3 0-5.3 1.7-6 5 1.3-1.7 2.8-2.3 4.5-2 1 .1 1.7.9 2.5 1.7C14.3 12 16 13.5 19.5 13.5c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.5 2-1-.1-1.7-.9-2.5-1.7C17.2 7.5 15.5 6 12 6zM4.5 12.5C1.2 12.5-.8 14.2-1.5 17.5c1.3-1.7 2.8-2.3 4.5-2 1 .1 1.7.9 2.5 1.7C6.8 18.5 8.5 20 12 20c3.3 0 5.3-1.7 6-5-1.3 1.7-2.8 2.3-4.5 2-1-.1-1.7-.9-2.5-1.7-1.3-1.3-3-2.8-6.5-2.8z" />
          </svg>
        );
      case "node.js":
        return (
          <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
            <path d="M12 7l4.5 2.6v5.2L12 17.4l-4.5-2.6V9.6L12 7z" />
          </svg>
        );
      case "express.js":
        return (
          <svg className="w-8 h-8 text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-4v-1.8h4v1.8zm3-3.6h-7v-1.8h7v1.8zm1-3.6H7V7.5h10v1.8z" />
          </svg>
        );
      case "rest api":
        return (
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "mongodb":
        return (
          <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2c-.3 0-.6.1-.8.3C10.5 3 7 7.5 7 13.5c0 3.3 1.8 6.3 4.6 7.8l.4.2.4-.2c2.8-1.5 4.6-4.5 4.6-7.8 0-6-3.5-10.5-4.2-11.2-.2-.2-.5-.3-.8-.3zm-.2 2.7c1.3 1.8 3.4 5.3 3.4 8.8 0 2.2-1.1 4.3-2.9 5.5-.3-1.6-.5-3.3-.5-5V4.7z" />
          </svg>
        );
      case "git":
        return (
          <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.6 10.9L13.1 2.4a2.4 2.4 0 00-3.4 0L7.3 4.8l3.7 3.7a2.5 2.5 0 013.2 3.2l3.6 3.6a2.5 2.5 0 11-1.3 1.2l-3.3-3.3v4.6a2.5 2.5 0 11-1.8 0V9.8a2.5 2.5 0 01-1.3-3.2L6 4.3 2.4 7.9a2.4 2.4 0 000 3.4l8.5 8.5a2.4 2.4 0 003.4 0l7.3-7.3a2.4 2.4 0 000-3.4l-.01.01z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case "vs code":
        return (
          <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.4 2.1l-9.2 8.7-4.5-3.5L2 8.5l4.8 3.5L2 15.5l1.7 1.2 4.5-3.5 9.2 8.7 4.6-2.2V4.3l-4.6-2.2zm1.6 15.5l-6-4.6 6-4.6v9.2z" />
          </svg>
        );
      case "postman":
        return (
          <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5l-4.2-2.4 4.2-2.4v4.8zm3.5-5.5L8.2 6.8l8.3 4.2zm-.5 3.5v-1.8l2.5-1.4v4.6l-2.5-1.4z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-zinc-950/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-175 h-100 bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Technical Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-teal-300">Technologies</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            A comprehensive overview of my core engineering toolset across modern frontend, backend, databases, and workflow utilities.
          </p>
        </div>

        {/* Featured Core Tech Highlight Strip */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-zinc-900/70 border border-cyan-500/20 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.08)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs sm:text-sm font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                Daily Driver Stack
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? skills.length
                : skills.filter((s) => s.category === cat).length;
            const isActive = activeCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-cyan-500 text-black font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-cyan-300 hover:bg-zinc-800/80 border border-zinc-800 hover:border-cyan-500/40"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-sans ${
                    isActive ? "bg-black/20 text-black" : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-5 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-cyan-500/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)] hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Subtle top glow bar on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-cyan-400/0 group-hover:bg-cyan-400/80 rounded-b-full transition-all duration-300" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-zinc-950/80 border border-zinc-800/80 group-hover:border-cyan-500/40 flex items-center justify-center mb-3.5 transition-all duration-300 group-hover:scale-110 shadow-inner">
                {getTechIcon(skill.name)}
              </div>

              {/* Skill Name */}
              <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h3>

              {/* Category Subtitle */}
              <span className="text-[11px] font-mono text-zinc-500 mt-1 uppercase tracking-wider">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
