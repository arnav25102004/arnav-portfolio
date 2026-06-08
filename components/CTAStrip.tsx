"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";
import { personalInfo } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function CTAStrip() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative py-32 overflow-hidden ${isLight ? "bg-ink-50" : ""}`}>
      {/* Rich gradient background — dark only */}
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, #09090b 0%, #0d0d18 40%, #111128 70%, #0d0d12 100%)",
            }}
          />
          {/* Big center indigo glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          {/* Left glow */}
          <div
            className="absolute top-0 left-0 w-80 h-80 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(79,70,229,0.15) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Right glow */}
          <div
            className="absolute bottom-0 right-0 w-72 h-72 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
              filter: "blur(55px)",
            }}
          />
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-grid-faint opacity-20" />
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <span
            className="inline-block text-xs font-mono mb-5 px-3 py-1.5 rounded-full tracking-[0.2em] uppercase"
            style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            Open to work
          </span>

          <h2 className={`font-display font-black text-4xl sm:text-5xl md:text-[3.5rem] leading-tight mb-5 ${
            isLight ? "text-ink-900" : "text-ink-50"
          }`}>
            Have a project in mind?
          </h2>

          {/* Gradient divider line */}
          {!isLight && (
            <div
              className="w-24 h-px mx-auto mb-5"
              style={{ background: "linear-gradient(90deg, transparent, #6366f1, transparent)" }}
            />
          )}

          <p className={`text-lg mb-10 ${isLight ? "text-ink-500" : "text-ink-400"}`}>
            I&apos;m available for freelance work, full-time roles, and open-source collabs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold text-sm rounded-xl transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
            >
              Let&apos;s Talk
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`text-sm font-mono transition-colors px-4 py-2 rounded-lg border ${
                isLight
                  ? "border-ink-200 text-ink-500 hover:border-ink-400 hover:text-ink-800"
                  : "border-white/10 text-ink-500 hover:border-accent/50 hover:text-ink-200"
              }`}
            >
              {personalInfo.email}
            </a>
          </div>

          {/* Divider */}
          <div
            className={`flex items-center justify-center gap-4 pt-8 border-t ${
              isLight ? "border-ink-200" : "border-white/8"
            }`}
          >
            {[
              { href: personalInfo.github, label: "GitHub", icon: <GithubIcon size={18} /> },
              { href: personalInfo.linkedin, label: "LinkedIn", icon: <LinkedinIcon size={18} /> },
              { href: `mailto:${personalInfo.email}`, label: "Email", icon: <Mail size={18} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className={`p-2.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                  isLight
                    ? "text-ink-400 hover:text-ink-800 hover:bg-ink-100"
                    : "text-ink-600 hover:text-ink-200 hover:bg-white/8"
                }`}
              >
                {icon}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
