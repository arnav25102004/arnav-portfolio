"use client";

import { skills } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import { StaggerContainer, StaggerItem } from "./ScrollReveal";

export default function SkillsGrid() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <StaggerContainer className="space-y-8">
      {skills.map((group) => (
        <StaggerItem key={group.category}>
          <div>
            {/* Category label with coloured dot */}
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: group.color }}
              />
              <p className="text-xs font-mono uppercase tracking-[0.2em]" style={{ color: group.color }}>
                {group.category}
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`pill-glow px-3.5 py-1.5 rounded-lg text-sm font-medium cursor-default select-none ${
                    isLight ? "text-ink-700" : "text-ink-200"
                  }`}
                  style={{
                    background: isLight
                      ? `${group.color}12`
                      : `${group.color}15`,
                    border: `1px solid ${group.color}28`,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
}
