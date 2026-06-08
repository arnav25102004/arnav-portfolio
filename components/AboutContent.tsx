"use client";

import { Download, Trophy, Users, Heart, Code2 } from "lucide-react";
import { education, achievements, personalInfo } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";
import Timeline from "./Timeline";
import SkillsGrid from "./SkillsGrid";
import ProfileAvatar from "./ProfileAvatar";

const achievementIcons = [Trophy, Code2, Users, Heart];

export default function AboutContent() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={`min-h-screen ${isLight ? "bg-white" : "bg-navy"}`}>

      {/* ── Page header — two-column ── */}
      <div className={`relative pt-28 pb-20 overflow-hidden ${isLight ? "bg-ink-50" : "bg-navy-800"}`}>
        {!isLight && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 w-125 h-125 rounded-full opacity-40"
              style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", filter: "blur(70px)" }} />
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(50px)" }} />
            <div className="absolute inset-0 bg-grid opacity-20" />
          </div>
        )}
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center">

            {/* Left: bio */}
            <ScrollReveal>
              <p className="text-accent font-mono text-xs mb-4 uppercase tracking-[0.2em]">About Me</p>
              <h1 className={`font-display font-bold text-4xl sm:text-5xl leading-tight mb-6 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
                Builder.
                <br />
                <span className="text-gradient">Contributor.</span>
                <br />
                Engineer.
              </h1>
              <p className={`text-base leading-relaxed max-w-lg ${isLight ? "text-ink-600" : "text-ink-400"}`}>
                {personalInfo.bio}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "3+", label: "PRs merged" },
                  { value: "3", label: "Production apps" },
                  { value: "2+", label: "Years open source" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className={`font-display font-black text-2xl ${isLight ? "text-ink-900" : "text-ink-50"}`}>
                      {stat.value}
                    </p>
                    <p className={`text-xs font-mono mt-0.5 ${isLight ? "text-ink-400" : "text-ink-500"}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: profile photo */}
            <ScrollReveal direction="right" className="hidden lg:block">
              <ProfileAvatar size="md" />
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 space-y-24">

        {/* Experience */}
        <section>
          <ScrollReveal className="mb-10">
            <p className="text-accent font-mono text-xs mb-2 uppercase tracking-[0.2em]">Experience</p>
            <h2 className={`font-display font-semibold text-2xl ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Where I&apos;ve contributed
            </h2>
          </ScrollReveal>
          <Timeline />
        </section>

        {/* Education */}
        <section>
          <ScrollReveal className="mb-10">
            <p className="text-accent font-mono text-xs mb-2 uppercase tracking-[0.2em]">Education</p>
            <h2 className={`font-display font-semibold text-2xl ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Academic background
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <ScrollReveal key={edu.school} delay={i * 0.08}>
                <div
                  className={`p-5 rounded-xl border-l-2 border-accent/40 ${
                    isLight ? "bg-ink-50" : "bg-navy-800"
                  }`}
                >
                  <h3 className={`font-display font-semibold text-sm mb-1 ${isLight ? "text-ink-800" : "text-ink-100"}`}>
                    {edu.school}
                  </h3>
                  <p className="text-accent text-xs font-medium mb-2">{edu.degree}</p>
                  <div className={`flex items-center justify-between text-xs font-mono ${isLight ? "text-ink-400" : "text-ink-600"}`}>
                    <span>{edu.location}</span>
                    <span>{edu.period}</span>
                  </div>
                  {edu.note && (
                    <p className={`mt-2 text-xs font-semibold ${isLight ? "text-ink-600" : "text-ink-400"}`}>
                      {edu.note}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <ScrollReveal className="mb-10">
            <p className="text-accent font-mono text-xs mb-2 uppercase tracking-[0.2em]">Skills</p>
            <h2 className={`font-display font-semibold text-2xl ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Technical toolkit
            </h2>
          </ScrollReveal>
          <SkillsGrid />
        </section>

        {/* Achievements */}
        <section>
          <ScrollReveal className="mb-10">
            <p className="text-accent font-mono text-xs mb-2 uppercase tracking-[0.2em]">Recognition</p>
            <h2 className={`font-display font-semibold text-2xl ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Beyond the code
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {achievements.map((ach, i) => {
              const Icon = achievementIcons[i % achievementIcons.length];
              return (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className={`flex items-center gap-4 py-4 border-b ${isLight ? "border-ink-100" : "border-white/6"}`}>
                    <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <p className={`text-sm ${isLight ? "text-ink-700" : "text-ink-300"}`}>{ach}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Resume */}
        <ScrollReveal>
          <div className="flex justify-center">
            <a
              href={personalInfo.resumeUrl}
              download
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
