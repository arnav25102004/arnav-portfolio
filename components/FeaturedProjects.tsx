"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";

export default function FeaturedProjects() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const featured = projects.filter((p) => p.featured);

  const [first, ...rest] = featured;

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-accent font-mono text-xs mb-3 uppercase tracking-[0.2em]">Featured Work</p>
            <h2 className={`font-display font-semibold text-3xl sm:text-4xl ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Things I&apos;ve built.
            </h2>
          </div>
          <Link
            href="/projects"
            className={`inline-flex items-center gap-1.5 text-sm font-medium group transition-colors ${
              isLight ? "text-ink-500 hover:text-ink-900" : "text-ink-500 hover:text-ink-100"
            }`}
          >
            All projects
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        <div className="space-y-5">
          {/* First project: full-width showcase */}
          {first && (
            <ProjectCard project={first} index={0} variant="showcase" />
          )}

          {/* Remaining projects: 2-column grid */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i + 1} variant="grid" />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
