"use client";

import React, { useState } from "react";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Education", href: "/#education" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all">
              &lt;/&gt;
            </span>
            <span className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
              {profile.brand.split(".")[0]}
              <span className="text-cyan-400">.{profile.brand.split(".")[1] || "dev"}</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-cyan-400 hover:bg-cyan-950/30 transition-all"
              >
                {link.label}
              </Link>
            ))}

            {/* Resume Button */}
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-zinc-900 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all"
              >
                Resume ↗
              </a>
            ) : (
              <span
                title="Resume link can be added in src/data/profile.ts"
                className="ml-2 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-500 bg-zinc-900/60 border border-zinc-800 cursor-not-allowed"
              >
                Resume
              </span>
            )}

            <Link
              href="/#contact"
              className="ml-1 px-4 py-1.5 rounded-lg text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-zinc-800 focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-cyan-400 hover:bg-cyan-950/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              {profile.resumeUrl ? (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2 rounded-lg text-sm font-semibold bg-zinc-900 border border-cyan-500/40 text-cyan-300"
                >
                  View Resume
                </a>
              ) : null}
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-2 rounded-lg text-sm font-semibold bg-cyan-500 text-black"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
