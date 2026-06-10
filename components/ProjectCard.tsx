"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { useTheme } from "./ThemeProvider";

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

function BrowserMockup({ accent = "#6366f1", isLight }: { accent?: string; isLight: boolean }) {
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: `1px solid ${isLight ? "#e4e4e7" : "rgba(255,255,255,0.09)"}` }}
    >
      {/* Chrome */}
      <div className="browser-chrome">
        <span className="browser-dot" style={{ background: "#ff5f57" }} />
        <span className="browser-dot" style={{ background: "#febc2e" }} />
        <span className="browser-dot" style={{ background: "#28c840" }} />
        <div
          className="flex-1 ml-3 h-3.5 rounded-full"
          style={{ background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)" }}
        />
        <div
          className="ml-2 w-4 h-3.5 rounded"
          style={{ background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.06)" }}
        />
      </div>
      {/* Viewport */}
      <div
        className="aspect-video relative overflow-hidden"
        style={{
          background: isLight
            ? `linear-gradient(145deg, ${accent}14 0%, #f4f4f5 100%)`
            : `linear-gradient(145deg, ${accent}22 0%, #0d0d12 100%)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${accent}12 1px, transparent 1px), linear-gradient(90deg, ${accent}12 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Glow center */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div
            className="w-28 h-28 rounded-full"
            style={{
              background: `radial-gradient(circle, ${accent}40 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />
        </div>
        {/* Abstract bars */}
        <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 px-10 opacity-30">
          {[55, 80, 40, 65].map((w, i) => (
            <div
              key={i}
              className="h-2 rounded-full"
              style={{ width: `${w}%`, background: `linear-gradient(90deg, ${accent}, transparent)`, opacity: i === 1 ? 0.9 : 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function LinkRow({ project, isLight, size = "sm" }: { project: Project; isLight: boolean; size?: "sm" | "md" }) {
  const cls = size === "md" ? "text-sm" : "text-sm";
  return (
    <div className="flex items-center gap-4">
      {project.github !== "#" ? (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 ${cls} font-medium transition-colors ${isLight ? "text-ink-500 hover:text-ink-900" : "text-ink-500 hover:text-ink-100"}`}
        >
          <GithubIcon size={14} /> Source Code
        </a>
      ) : (
        <span className={`inline-flex items-center gap-1.5 ${cls} ${isLight ? "text-ink-300" : "text-ink-700"}`}>
          <GithubIcon size={14} /> Private
        </span>
      )}
      {project.demo && (
        <a href={project.demo} target="_blank" rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 ${cls} font-medium transition-colors ${isLight ? "text-ink-500 hover:text-ink-900" : "text-ink-500 hover:text-ink-100"}`}
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
        {/* Info */}
        <div className={reverse ? "lg:order-2" : ""}>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span
              className="text-xs font-mono px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${accent}1e`, color: accent }}
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

          <h3 className={`font-display font-bold text-2xl mb-3 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
            {project.title}
          </h3>
          <p className={`text-sm leading-relaxed mb-5 ${isLight ? "text-ink-600" : "text-ink-400"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                  isLight ? "bg-ink-100 text-ink-600" : "bg-navy-500 text-ink-400"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <LinkRow project={project} isLight={isLight} size="md" />
        </div>

        {/* Browser mockup */}
        <div className={`${reverse ? "lg:order-1" : ""} transition-transform duration-300 group-hover:scale-[1.02]`}>
          <BrowserMockup accent={accent} isLight={isLight} />
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
          <BrowserMockup accent={accent} isLight={isLight} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
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
            <span
              key={tech}
              className={`px-2 py-0.5 rounded-lg text-xs font-mono ${
                isLight ? "bg-ink-100 text-ink-600" : "bg-navy-500 text-ink-400"
              }`}
            >
              {tech}
            </span>
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
