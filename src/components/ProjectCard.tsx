"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex flex-col h-full rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 overflow-hidden backdrop-blur-sm">
      {/* Glow highlight */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-300" />

      {/* Image / Preview Header */}
      <div className="relative aspect-video w-full bg-zinc-950/80 border-b border-zinc-800/80 overflow-hidden flex items-center justify-center">
        {!imageError && project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#071318]">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              Project Preview
            </span>
            <span className="text-sm font-semibold text-zinc-300 mt-1">
              {project.title}
            </span>
          </div>
        )}

        {/* Hover overlay badge */}
        <div className="absolute top-3 right-3">
          <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
            {project.technologies[0] || "Web App"}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link
          href={`/projects/${project.slug}`}
          className="focus:outline-none focus:underline"
        >
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200">
            {project.title}
          </h3>
        </Link>

        <p className="mt-2.5 text-sm text-zinc-400 leading-relaxed line-clamp-2 flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 pt-4 border-t border-zinc-800/70">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/40 text-cyan-300 border border-cyan-900/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs font-mono px-2 py-1 rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/60">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Card Actions */}
        <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link transition-colors"
          >
            <span>Explore Details</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Source Code"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/30 border border-transparent hover:border-cyan-500/30 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            ) : (
              <span
                title="Code repository URL pending"
                className="text-[11px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-800/40 border border-zinc-700/40"
              >
                Code Soon
              </span>
            )}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Demo"
                className="p-1.5 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/30 border border-transparent hover:border-cyan-500/30 transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <span
                title="Live demo URL pending"
                className="text-[11px] font-mono text-zinc-500 px-2 py-0.5 rounded bg-zinc-800/40 border border-zinc-700/40"
              >
                Demo Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

