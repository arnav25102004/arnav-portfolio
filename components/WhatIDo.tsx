"use client";

import { Layers, Brain, GitBranch, Briefcase } from "lucide-react";
import { domains } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  layers: Layers,
  brain: Brain,
  "git-branch": GitBranch,
  briefcase: Briefcase,
};

export default function WhatIDo() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`relative py-24 overflow-hidden ${isLight ? "bg-ink-50" : "bg-navy-800"}`}
    >
      {/* Section background orbs */}
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(50px)" }}
          />
          <div className="absolute inset-0 bg-grid opacity-30" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left: heading */}
          <ScrollReveal>
            <p className="text-accent font-mono text-xs mb-4 uppercase tracking-[0.2em]">
              What I Do
            </p>
            <h2 className={`font-display font-semibold text-3xl sm:text-4xl leading-tight mb-4 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Engineering across
              <br />the full stack.
            </h2>
            <p className={`text-sm leading-relaxed max-w-xs ${isLight ? "text-ink-500" : "text-ink-400"}`}>
              From AI-powered backends to polished frontends — I own the whole product, not just a slice of it.
            </p>
          </ScrollReveal>

          {/* Right: stacked items */}
          <div className="space-y-1">
            {domains.map((domain, i) => {
              const Icon = iconMap[domain.icon] ?? Layers;
              return (
                <ScrollReveal key={domain.title} delay={i * 0.07}>
                  <div
                    className={`group flex items-start gap-4 px-4 py-4 rounded-xl transition-all duration-200 cursor-default ${
                      isLight
                        ? "hover:bg-ink-100"
                        : "hover:bg-white/5 hover:shadow-inner"
                    }`}
                  >
                    {/* Icon with accent background */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-200 group-hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, rgba(99,102,241,0.25) 0%, rgba(139,92,246,0.15) 100%)",
                        boxShadow: "0 2px 12px rgba(99,102,241,0.2)",
                        color: "#818cf8",
                      }}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-display font-semibold text-base mb-1 ${isLight ? "text-ink-800" : "text-ink-100"}`}>
                        {domain.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${isLight ? "text-ink-500" : "text-ink-500"}`}>
                        {domain.desc}
                      </p>
                    </div>
                    <div className={`ml-2 text-xs font-mono mt-1 shrink-0 tabular-nums ${isLight ? "text-ink-300" : "text-ink-700"}`}>
                      0{i + 1}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
