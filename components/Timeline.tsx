"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { experience } from "@/lib/data";

export default function Timeline() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className="relative pl-5">
      {/* Vertical line */}
      <div
        className="absolute left-0 top-2 bottom-2 w-px"
        style={{ background: isLight ? "#e4e4e7" : "rgba(255,255,255,0.08)" }}
        aria-hidden="true"
      />

      <div className="space-y-10">
        {experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} isLight={isLight} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  item,
  index,
  isLight,
}: {
  item: (typeof experience)[0];
  index: number;
  isLight: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: index * 0.12 + 0.15 }}
        className={`absolute -left-5.25 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ${
          isLight ? "ring-indigo-100" : "ring-navy-700"
        }`}
      />

      {/* Content — no heavy card, just a left-accent border */}
      <div
        className={`pl-5 border-l-2 ${isLight ? "border-ink-200" : "border-white/10"}`}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-3">
          <div>
            <h3 className={`font-display font-semibold text-base ${isLight ? "text-ink-900" : "text-ink-100"}`}>
              {item.role}
            </h3>
            <span className="text-accent text-sm font-medium">{item.org}</span>
          </div>
          <div className="text-right shrink-0">
            <span
              className={`inline-block text-xs font-mono px-2.5 py-0.5 rounded-full ${
                isLight ? "bg-ink-100 text-ink-500" : "bg-navy-600 text-ink-500"
              }`}
            >
              {item.period}
            </span>
            <div className={`mt-0.5 text-xs ${isLight ? "text-ink-400" : "text-ink-600"}`}>
              {item.location}
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-1.5">
          {item.bullets.map((b, bi) => (
            <li
              key={bi}
              className={`text-sm leading-relaxed flex gap-2 ${isLight ? "text-ink-600" : "text-ink-400"}`}
            >
              <span className="text-accent/60 mt-[5px] shrink-0 text-xs">◆</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
