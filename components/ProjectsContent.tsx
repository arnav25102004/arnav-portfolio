"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";

export default function ProjectsContent() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={`min-h-screen ${isLight ? "bg-white" : "bg-navy"}`}>
      {/* Header */}
      <div className={`pt-28 pb-16 ${isLight ? "bg-ink-50" : "bg-navy-800"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-accent font-mono text-xs mb-3 uppercase tracking-[0.2em]">My Work</p>
            <h1 className={`font-display font-bold text-4xl sm:text-5xl leading-tight mb-3 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Projects
            </h1>
            <p className={`text-base ${isLight ? "text-ink-500" : "text-ink-400"}`}>
              Things I&apos;ve built that I&apos;m proud of.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Projects — alternating showcase layout */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i}
            variant="showcase"
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
