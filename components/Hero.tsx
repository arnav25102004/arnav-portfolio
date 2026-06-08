"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, ArrowRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import ProfileAvatar from "./ProfileAvatar";

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large indigo orb top-left */}
        <div
          className="animate-float-blob absolute -top-48 -left-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(99,102,241,0.22) 0%, rgba(79,70,229,0.08) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Violet orb bottom-right */}
        <div
          className="animate-float-blob-delayed absolute -bottom-40 right-0 w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.06) 50%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        {/* Small highlight orb top-right */}
        <div
          className="animate-float-blob-slow absolute top-1/4 right-1/4 w-[280px] h-[280px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(165,180,252,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-10 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full border border-accent/25 bg-accent/8"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono text-accent">
                Open to freelance &amp; full-time
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="font-display font-black leading-[0.9] tracking-tight mb-5">
              {["Arnav", "Narula"].map((word, wi) => (
                <span key={wi} className="block overflow-hidden">
                  <motion.span
                    className={`block text-[clamp(3rem,8vw,5.5rem)] ${
                      wi === 1 ? "text-gradient" : isLight ? "text-ink-900" : "text-ink-50"
                    }`}
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.75, delay: 0.25 + wi * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`text-base sm:text-lg font-mono mb-9 ${isLight ? "text-ink-500" : "text-ink-400"}`}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-semibold text-sm rounded-lg transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                View My Work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 font-semibold text-sm rounded-lg border transition-all duration-200 hover:-translate-y-0.5 ${
                  isLight
                    ? "border-ink-300 text-ink-700 hover:border-accent hover:text-accent"
                    : "border-white/15 text-ink-300 hover:border-accent hover:text-accent hover:bg-accent/5"
                }`}
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="flex items-center gap-5"
            >
              {[
                { href: personalInfo.github, label: "GitHub", icon: <GithubIcon size={19} /> },
                { href: personalInfo.linkedin, label: "LinkedIn", icon: <LinkedinIcon size={19} /> },
                { href: `mailto:${personalInfo.email}`, label: "Email", icon: <Mail size={19} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`transition-all duration-200 hover:-translate-y-0.5 ${
                    isLight ? "text-ink-400 hover:text-ink-800" : "text-ink-500 hover:text-ink-100"
                  }`}
                >
                  {icon}
                </a>
              ))}
              <span className={`flex items-center gap-1 text-xs font-mono ml-2 ${isLight ? "text-ink-300" : "text-ink-600"}`}>
                <MapPin size={11} />
                {personalInfo.locationShort}
              </span>
            </motion.div>
          </div>

          {/* ── Right: profile avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center"
          >
            <ProfileAvatar size="lg" />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-6 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-7 bg-linear-to-b from-accent/60 to-transparent"
          />
          <span className={`text-xs font-mono tracking-[0.2em] uppercase ${isLight ? "text-ink-300" : "text-ink-700"}`}>
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
