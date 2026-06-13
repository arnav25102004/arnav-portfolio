"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "@/lib/data";

const GITHUB_PROFILE = personalInfo.github;

interface Project {
  id: string;
  title: string;
  year: string;
  badge?: string;
  accentColor?: string;
  shortDesc: string;
  description: string;
  stack: string[];
  github: string;
  demo: string | null;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "showcase" | "grid";
  reverse?: boolean;
}

function BrowserMockup({ accent = "#6366f1", title, stack, isLight }: {
  accent?: string;
  title: string;
  stack: string[];
  isLight: boolean;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-2xl"
      style={{ border: `1px solid ${isLight ? "#e4e4e7" : "rgba(255,255,255,0.09)"}` }}
    >
      {/* Chrome bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: isLight ? "#f4f4f5" : "rgba(255,255,255,0.04)", borderBottom: `1px solid ${isLight ? "#e4e4e7" : "rgba(255,255,255,0.07)"}` }}
      >
        <span className="w-3 h-3 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-3 h-3 rounded-full" style={{ background: "#28c840" }} />
        <div
          className="flex-1 mx-3 h-5 rounded-md flex items-center px-3"
          style={{ background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)" }}
        >
          <span className="text-[10px] font-mono" style={{ color: isLight ? "#71717a" : "#52525b" }}>
            localhost:3000
          </span>
        </div>
      </div>

      {/* App viewport */}
      <div
        className="relative overflow-hidden"
        style={{
          aspectRatio: "16/9",
          background: isLight
            ? `linear-gradient(145deg, ${accent}10 0%, #f9fafb 60%, ${accent}06 100%)`
            : `linear-gradient(145deg, ${accent}1a 0%, #0a0a10 60%, ${accent}0d 100%)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${accent}10 1px, transparent 1px), linear-gradient(90deg, ${accent}10 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Fake navbar */}
        <div
          className="absolute top-0 left-0 right-0 h-9 flex items-center px-4 gap-5"
          style={{ background: isLight ? "rgba(255,255,255,0.9)" : "rgba(10,10,16,0.9)", borderBottom: `1px solid ${accent}18` }}
        >
          <div className="w-16 h-2.5 rounded-full" style={{ background: accent, opacity: 0.7 }} />
          <div className="flex gap-3 ml-auto">
            {[40, 28, 36].map((w, i) => (
              <div key={i} className="h-2 rounded-full" style={{ width: w, background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.1)" }} />
            ))}
          </div>
        </div>

        {/* Fake content blocks */}
        <div className="absolute top-12 left-4 right-4 space-y-3">
          {/* Hero block */}
          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <div className="h-4 rounded-md" style={{ width: "70%", background: accent, opacity: 0.5 }} />
              <div className="h-2.5 rounded-full" style={{ width: "90%", background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.08)" }} />
              <div className="h-2.5 rounded-full" style={{ width: "60%", background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)" }} />
            </div>
            <div className="w-16 h-16 rounded-xl shrink-0" style={{ background: `linear-gradient(135deg, ${accent}40, ${accent}18)` }} />
          </div>

          {/* Card row */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {[0.5, 0.35, 0.45].map((op, i) => (
              <div
                key={i}
                className="h-10 rounded-lg"
                style={{ background: `${accent}${Math.round(op * 255).toString(16).padStart(2, "0")}` }}
              />
            ))}
          </div>

          {/* Data table rows */}
          {[80, 65, 72].map((w, i) => (
            <div key={i} className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full shrink-0" style={{ background: accent, opacity: 0.6 }} />
              <div className="h-2 rounded-full flex-1" style={{ width: `${w}%`, background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.07)" }} />
            </div>
          ))}
        </div>

        {/* Project name watermark */}
        <div
          className="absolute bottom-3 right-4 font-display font-black text-[1.6rem] leading-none select-none pointer-events-none tracking-tight"
          style={{ color: `${accent}22` }}
        >
          {title.split(" ")[0]}
        </div>

        {/* Center glow */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-40 h-40 rounded-full"
            style={{ background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`, filter: "blur(30px)" }}
          />
        </div>
      </div>
    </div>
  );
}

function StackPill({ tech, isLight, accent }: { tech: string; isLight: boolean; accent: string }) {
  return (
    <span
      className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-150 hover:scale-105 cursor-default ${
        isLight ? "bg-ink-100 text-ink-600" : "bg-navy-500 text-ink-400"
      }`}
      style={{ border: `1px solid ${accent}18` }}
    >
      {tech}
    </span>
  );
}

function LinkRow({ project, isLight, size = "sm" }: { project: Project; isLight: boolean; size?: "sm" | "md" }) {
  return (
    <div className="flex items-center gap-4">
      {project.github !== "#" ? (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${
            isLight ? "text-ink-500" : "text-ink-500"
          }`}
        >
          <GithubIcon size={14} /> Source Code
        </a>
      ) : (
        <span className={`inline-flex items-center gap-1.5 text-sm ${isLight ? "text-ink-300" : "text-ink-700"}`}>
          <GithubIcon size={14} /> Private
        </span>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent ${
            isLight ? "text-ink-500" : "text-ink-500"
          }`}
        >
          <ExternalLink size={14} /> Live Demo
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project, index = 0, variant = "grid", reverse = false }: ProjectCardProps) {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const accent = project.accentColor ?? "#6366f1";

  const cardBg = isLight ? "bg-white border-ink-200" : "bg-navy-700";
  const cardBorder = isLight ? "#e4e4e7" : "rgba(255,255,255,0.07)";

  if (variant === "showcase") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={`group card-glow grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center rounded-2xl p-7 lg:p-10 ${cardBg}`}
        style={{ border: `1px solid ${cardBorder}` }}
      >
        {/* Info side */}
        <div className={reverse ? "lg:order-2" : ""}>
          {/* Top row: year/badge + GitHub link */}
          <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className="text-xs font-mono px-2.5 py-1 rounded-full font-medium"
                style={{ background: `${accent}20`, color: accent }}
              >
                {project.year}
              </span>
              {project.badge && (
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${accent}28`, color: accent }}
                >
                  ✦ {project.badge}
                </span>
              )}
            </div>
            {/* GitHub top link */}
            <a
              href={project.github !== "#" ? project.github : GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-[0_0_12px_rgba(99,102,241,0.3)] ${
                isLight ? "border-ink-200 text-ink-500 bg-ink-50" : "border-white/10 text-ink-400 bg-navy-600/50"
              }`}
            >
              <GithubIcon size={13} />
              {project.github !== "#" ? "View Repo" : "GitHub Profile"}
            </a>
          </div>

          <h3 className={`font-display font-bold text-2xl mb-3 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
            {project.title}
          </h3>
          <p className={`text-sm leading-relaxed mb-6 ${isLight ? "text-ink-600" : "text-ink-400"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <StackPill key={tech} tech={tech} isLight={isLight} accent={accent} />
            ))}
          </div>

          <LinkRow project={project} isLight={isLight} size="md" />
        </div>

        {/* Browser mockup side */}
        <div className={`${reverse ? "lg:order-1" : ""} transition-transform duration-300 group-hover:scale-[1.02]`}>
          <BrowserMockup accent={accent} title={project.title} stack={project.stack} isLight={isLight} />
        </div>
      </motion.article>
    );
  }

  /* Grid variant */
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className={`group card-glow flex flex-col rounded-2xl overflow-hidden ${cardBg}`}
      style={{ border: `1px solid ${cardBorder}` }}
    >
      {/* Mockup */}
      <div className="p-4 pb-0">
        <div className="transition-transform duration-300 group-hover:scale-[1.02]">
          <BrowserMockup accent={accent} title={project.title} stack={project.stack} isLight={isLight} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Top row: badges + GitHub */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="text-xs font-mono px-2 py-0.5 rounded-full"
              style={{ background: `${accent}1a`, color: accent }}
            >
              {project.year}
            </span>
            {project.badge && (
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{ background: `${accent}22`, color: accent }}
              >
                ✦ {project.badge}
              </span>
            )}
          </div>
          {/* GitHub top link */}
          <a
            href={project.github !== "#" ? project.github : GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all duration-200 hover:border-accent hover:text-accent hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] ${
              isLight ? "border-ink-200 text-ink-400 bg-ink-50" : "border-white/8 text-ink-500 bg-navy-600/40"
            }`}
          >
            <GithubIcon size={11} />
            GitHub
          </a>
        </div>

        <div>
          <h3 className={`font-display font-semibold text-lg mb-1.5 ${isLight ? "text-ink-900" : "text-ink-100"}`}>
            {project.title}
          </h3>
          <p className={`text-sm leading-relaxed ${isLight ? "text-ink-500" : "text-ink-400"}`}>
            {project.shortDesc}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.stack.map((tech) => (
            <StackPill key={tech} tech={tech} isLight={isLight} accent={accent} />
          ))}
        </div>

        <div
          className="pt-3 border-t"
          style={{ borderColor: isLight ? "#e4e4e7" : "rgba(255,255,255,0.07)" }}
        >
          <LinkRow project={project} isLight={isLight} />
        </div>
      </div>
    </motion.article>
  );
}
