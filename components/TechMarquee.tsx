"use client";

import { useTheme } from "./ThemeProvider";

const ROW_ONE = [
  { label: "React", color: "#61DAFB" },
  { label: "Next.js", color: "#6366f1" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "Python", color: "#3b82f6" },
  { label: "FastAPI", color: "#22c55e" },
  { label: "LangChain", color: "#8b5cf6" },
  { label: "GraphRAG", color: "#f59e0b" },
  { label: "Neo4j", color: "#e11d48" },
  { label: "MongoDB", color: "#22c55e" },
  { label: "PostgreSQL", color: "#3b82f6" },
  { label: "Docker", color: "#2496ED" },
  { label: "Angular", color: "#e11d48" },
  { label: "Tailwind CSS", color: "#06b6d4" },
  { label: "GPT-4o", color: "#8b5cf6" },
  { label: "LangGraph", color: "#6366f1" },
  { label: "Pinecone", color: "#06b6d4" },
  { label: "WebSockets", color: "#f97316" },
  { label: "Apache Beam", color: "#f59e0b" },
  { label: "React Native", color: "#61DAFB" },
  { label: "Node.js", color: "#22c55e" },
];

export default function TechMarquee() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const doubled = [...ROW_ONE, ...ROW_ONE];

  return (
    <div
      className={`relative py-10 overflow-hidden border-y ${
        isLight ? "border-ink-100 bg-ink-50/60" : "border-white/5 bg-navy-800/60"
      }`}
    >
      {/* Fade edges */}
      <div
        className={`pointer-events-none absolute left-0 top-0 bottom-0 w-28 z-10 ${
          isLight
            ? "bg-linear-to-r from-[#f8f8f8] to-transparent"
            : "bg-linear-to-r from-navy-800 to-transparent"
        }`}
      />
      <div
        className={`pointer-events-none absolute right-0 top-0 bottom-0 w-28 z-10 ${
          isLight
            ? "bg-linear-to-l from-[#f8f8f8] to-transparent"
            : "bg-linear-to-l from-navy-800 to-transparent"
        }`}
      />

      {/* Marquee row */}
      <div className="flex gap-3 animate-marquee whitespace-nowrap">
        {doubled.map((tech, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium shrink-0 select-none transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 cursor-default ${
              isLight
                ? "bg-white border text-ink-600 shadow-sm"
                : "bg-navy-700 border text-ink-300"
            }`}
            style={{ borderColor: `${tech.color}30` }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}60` }}
            />
            {tech.label}
          </span>
        ))}
      </div>
    </div>
  );
}
