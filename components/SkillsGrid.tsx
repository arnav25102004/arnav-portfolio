"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function SkillsGrid() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <StaggerContainer className="space-y-10">
      {skills.map((group) => (
        <StaggerItem key={group.category}>
          {/* Category header */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{ background: group.color, boxShadow: `0 0 8px ${group.color}60` }}
            />
            <p
              className="text-xs font-mono uppercase tracking-[0.22em] font-semibold"
              style={{ color: group.color }}
            >
              {group.category}
            </p>
            <div
              className="flex-1 h-px opacity-30"
              style={{ background: `linear-gradient(90deg, ${group.color}, transparent)` }}
            />
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2.5">
            {group.items.map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className={`inline-block pill-glow px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-default select-none ${
                  isLight ? "text-ink-700" : "text-ink-200"
                }`}
                style={{
                  background: isLight ? `${group.color}10` : `${group.color}15`,
                  border: `1px solid ${group.color}30`,
                  boxShadow: `inset 0 1px 0 ${group.color}12`,
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
