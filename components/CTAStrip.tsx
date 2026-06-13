"use client";

import Link from "next/link";
import { ArrowRight, Mail, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";
import { personalInfo } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function CTAStrip() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className={`relative py-36 overflow-hidden ${isLight ? "bg-ink-50" : ""}`}>
      {/* Dark mode: rich layered background */}
      {!isLight && (
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, #09090b 0%, #0d0d18 40%, #111128 70%, #0d0d12 100%)" }}
          />
          {/* Big centre glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full"
            style={{
              background: "radial-gradient(ellipse, rgba(99,102,241,0.22) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Corner glows */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(79,70,229,0.14) 0%, transparent 70%)", filter: "blur(60px)" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)", filter: "blur(55px)" }} />
          <div className="absolute inset-0 bg-grid-faint opacity-20" />
        </div>
      )}

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full"
            style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.28)", color: "#818cf8" }}
          >
            <Zap size={13} className="shrink-0" />
            <span className="text-xs font-mono tracking-[0.18em] uppercase font-medium">Open to work</span>
          </motion.div>

          {/* Heading */}
          <h2 className={`font-display font-black leading-tight mb-4 ${isLight ? "text-ink-900" : "text-ink-50"}`}
            style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)" }}>
            Let&apos;s build something
            <br />
            <span className="text-gradient">remarkable together.</span>
          </h2>

          {/* Divider line */}
          {!isLight && (
            <div
              className="w-28 h-px mx-auto mb-6 mt-2"
              style={{ background: "linear-gradient(90deg, transparent, #6366f1, #8b5cf6, transparent)" }}
            />
          )}

          <p className={`text-lg leading-relaxed mb-12 max-w-xl mx-auto ${isLight ? "text-ink-500" : "text-ink-400"}`}>
            I&apos;m available for full-time roles, freelance projects, and open-source collaborations.
            Response time: usually within 24 hours.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link
              href="/contact"
              className="btn-shine group inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold text-sm rounded-xl transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-accent/35"
            >
              Let&apos;s Talk
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`mailto:${personalInfo.email}`}
              className={`inline-flex items-center gap-2 text-sm font-mono px-5 py-3.5 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                isLight
                  ? "border-ink-200 text-ink-500 hover:border-accent hover:text-accent hover:bg-accent/5"
                  : "border-white/10 text-ink-500 hover:border-accent/50 hover:text-ink-200 hover:bg-accent/8"
              }`}
            >
              <Mail size={14} />
              {personalInfo.email}
            </a>
          </div>

          {/* Socials divider */}
          <div
            className={`flex items-center justify-center gap-4 pt-8 border-t ${
              isLight ? "border-ink-200" : "border-white/8"
            }`}
          >
            <span className={`text-xs font-mono mr-2 ${isLight ? "text-ink-400" : "text-ink-600"}`}>Find me on</span>
            {[
              { href: personalInfo.github, label: "GitHub", icon: <GithubIcon size={18} /> },
              { href: personalInfo.linkedin, label: "LinkedIn", icon: <LinkedinIcon size={18} /> },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent ${
                  isLight
                    ? "border-ink-200 text-ink-500 bg-white"
                    : "border-white/10 text-ink-400 hover:bg-accent/8"
                }`}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
