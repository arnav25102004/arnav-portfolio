"use client";

import { motion } from "framer-motion";
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

const CARD_STYLES = [
  { color: "#6366f1", gradient: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.25)" },
  { color: "#8b5cf6", gradient: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.25)" },
  { color: "#3b82f6", gradient: "rgba(59,130,246,0.12)", border: "rgba(59,130,246,0.25)" },
  { color: "#a855f7", gradient: "rgba(168,85,247,0.12)", border: "rgba(168,85,247,0.25)" },
];

export default function WhatIDo() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative py-28 overflow-hidden ${isLight ? "bg-ink-50" : "bg-navy-800"}`}>
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
          />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <ScrollReveal className="text-center mb-16">
          <p className="text-accent font-mono text-xs mb-4 uppercase tracking-[0.22em]">What I Do</p>
          <h2 className={`font-display font-black text-4xl sm:text-5xl leading-tight ${isLight ? "text-ink-900" : "text-ink-50"}`}>
            Engineering across<br />
            <span className="text-gradient">the full stack.</span>
          </h2>
          <p className={`mt-5 text-base max-w-md mx-auto leading-relaxed ${isLight ? "text-ink-500" : "text-ink-400"}`}>
            From AI-powered backends to polished frontends — I own the whole product, not just a slice of it.
          </p>
        </ScrollReveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {domains.map((domain, i) => {
            const Icon = iconMap[domain.icon] ?? Layers;
            const style = CARD_STYLES[i % CARD_STYLES.length];

            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`group relative rounded-2xl p-7 overflow-hidden cursor-default transition-shadow duration-300 ${
                  isLight
                    ? "bg-white border border-ink-200 hover:shadow-xl hover:shadow-ink-200/60"
                    : "bg-navy-700 border hover:shadow-2xl"
                }`}
                style={{ borderColor: isLight ? undefined : style.border }}
              >
                {/* Large background number */}
                <div
                  className="absolute right-5 top-2 font-display font-black text-[6rem] leading-none select-none pointer-events-none transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1"
                  style={{ color: `${style.color}14` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div
                  className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: style.gradient, color: style.color }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className={`relative z-10 font-display font-bold text-lg mb-2.5 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
                  {domain.title}
                </h3>
                <p className={`relative z-10 text-sm leading-relaxed ${isLight ? "text-ink-500" : "text-ink-400"}`}>
                  {domain.desc}
                </p>

                {/* Animated bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${style.color}, transparent)` }}
                />

                {/* Corner glow on hover */}
                <div
                  className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${style.color}18 0%, transparent 70%)`,
                    filter: "blur(20px)",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
