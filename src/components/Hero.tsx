"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profile } from "@/data/profile";

export default function Hero() {
  const renderSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.61 1.61 0 1 0 0-3.22 1.61 1.61 0 0 0 0 3.22m1.4 9.74v-8.37H5.06v8.37h2.8z" />
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
    }
  };

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-112.5 h-112.5 bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-6 shadow-[0_0_25px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span>Available for Work & Collaboration</span>
            </div>

            {/* Greeting & Prominent Name */}
            <div className="mb-4">
              <span className="text-cyan-400 font-mono text-sm sm:text-base tracking-wide block mb-2">
                Hello, I&apos;m
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                {profile.name}
              </h1>
            </div>

            {/* Title / Role Pill Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-6">
              <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-teal-300 to-cyan-200">
                {profile.designation}
              </span>
              <span className="text-zinc-600 hidden sm:inline text-xl">•</span>
              <span className="px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-sm font-mono text-cyan-300 shadow-sm">
                &lt;{profile.secondaryTitle} /&gt;
              </span>
            </div>

            {/* Bio */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              {profile.bio}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 w-full sm:w-auto">
              <Link
                href="/#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition-all shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              {profile.resumeUrl ? (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800/90 border border-cyan-500/50 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                >
                  <span>Resume</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              ) : (
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 hover:border-cyan-500/50 text-zinc-200 hover:text-cyan-300 font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <span>Get in Touch</span>
                </Link>
              )}
            </div>

            {/* Social Media Row */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                Follow:
              </span>
              {profile.socialLinks
                .filter((s) => Boolean(s.url))
                .map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.name}
                    className="p-2.5 rounded-xl bg-zinc-900/80 hover:bg-cyan-950/60 border border-zinc-800 hover:border-cyan-500/50 text-zinc-400 hover:text-cyan-400 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                  >
                    {renderSocialIcon(s.name)}
                  </a>
                ))}
            </div>
          </div>

          {/* Right Column: Hero Image Showpiece */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-85 sm:max-w-100">
              
              {/* Decorative Background Aura Glow */}
              <div className="absolute -inset-4 bg-linear-to-tr from-cyan-500/30 via-cyan-400/10 to-teal-500/20 rounded-[2.5rem] blur-2xl -z-10 animate-pulse duration-1000" />

              {/* Outer Cyber Frame */}
              <div className="relative rounded-4xl bg-zinc-950/90 border-2 border-cyan-500/40 p-3 sm:p-4 shadow-[0_0_50px_rgba(6,182,212,0.2)] backdrop-blur-md group transition-all duration-500 hover:border-cyan-400">
                
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between px-3 py-2 mb-3 bg-zinc-900/90 rounded-xl border border-zinc-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                    <span className="text-cyan-400">⚡</span> {profile.brand}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400/40" />
                </div>

                {/* Image Window */}
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80">
                  <Image
                    src={profile.profileImage}
                    alt={profile.name}
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 320px, 400px"
                  />

                  {/* Dark-to-transparent overlay vignette */}
                  <div className="absolute inset-0 bg-linear-to-t from-zinc-950/90 via-transparent to-transparent opacity-70" />

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide">
                        {profile.name}
                      </div>
                      <div className="text-[11px] font-mono text-cyan-400">
                        {profile.designation}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-cyan-950/70 border border-cyan-500/40 text-cyan-300">
                      Active
                    </span>
                  </div>
                </div>

                {/* Floating Badge: Top-Right */}
                <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-zinc-900/90 backdrop-blur-md border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl shadow-cyan-950/50 flex items-center gap-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono font-semibold text-zinc-200">
                    React & Next.js
                  </span>
                </div>

                {/* Floating Badge: Bottom-Left */}
                <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 hover:border-cyan-500/50 rounded-xl px-3.5 py-2 shadow-xl shadow-black/60 flex items-center gap-2 transform group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform">
                  <span className="text-cyan-400 text-sm">💡</span>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-white">Problem Solver</div>
                    <div className="text-[9px] font-mono text-zinc-400">Clean Code</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
