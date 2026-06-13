"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Mail, ArrowRight, MapPin, Trophy } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import ProfileAvatar from "./ProfileAvatar";

const TAGLINES = [
  "Full-Stack Developer & Freelancer",
  "AI/ML Engineer · LangChain · GraphRAG",
  "Open Source @ Oppia Foundation",
  "Building products that ship.",
];

export default function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const heroRef = useRef<HTMLDivElement>(null);
  const [spotPos, setSpotPos] = useState({ x: 50, y: 40 });
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setSpotPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  useEffect(() => {
    const current = TAGLINES[taglineIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!isDeleting && displayText.length < current.length) {
      timer = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 52);
    } else if (!isDeleting && displayText.length === current.length) {
      timer = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 26);
    } else {
      setIsDeleting(false);
      setTaglineIdx((i) => (i + 1) % TAGLINES.length);
    }
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, taglineIdx]);

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Interactive mouse spotlight */}
      {!isLight && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-200"
          style={{
            background: `radial-gradient(700px circle at ${spotPos.x}% ${spotPos.y}%, rgba(99,102,241,0.12) 0%, transparent 70%)`,
          }}
        />
      )}

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="animate-float-blob absolute -top-48 -left-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(99,102,241,0.22) 0%, rgba(79,70,229,0.08) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="animate-float-blob-delayed absolute -bottom-40 right-0 w-[550px] h-[550px] rounded-full"
          style={{
            background: "radial-gradient(circle at center, rgba(139,92,246,0.18) 0%, rgba(109,40,217,0.06) 50%, transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div className="absolute inset-0 bg-grid-faint opacity-40" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-12 items-center">

          {/* ── Left: text ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-accent/30 bg-accent/10"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono text-accent font-medium tracking-wide">
                Available for full-time &amp; freelance
              </span>
            </motion.div>

            {/* Name */}
            <h1 className="font-display font-black leading-[0.88] tracking-tight mb-6">
              {["Arnav", "Narula"].map((word, wi) => (
                <span key={wi} className="block overflow-hidden">
                  <motion.span
                    className={`block text-[clamp(3.4rem,9vw,6.2rem)] ${
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

            {/* Typewriter tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`font-mono text-base sm:text-lg mb-10 min-h-[1.8rem] flex items-center ${isLight ? "text-ink-500" : "text-ink-400"}`}
            >
              <span>{displayText}</span>
              <span className="cursor-blink" />
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/projects"
                className="btn-shine group inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl transition-all duration-200 hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40"
              >
                View My Work
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
                  isLight
                    ? "border-ink-300 text-ink-700 hover:border-accent hover:text-accent hover:bg-accent/5"
                    : "border-white/15 text-ink-300 hover:border-accent hover:text-accent hover:bg-accent/8"
                }`}
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.88 }}
              className={`flex flex-wrap gap-7 pb-8 mb-8 border-b ${isLight ? "border-ink-100" : "border-white/8"}`}
            >
              {[
                { value: "3+", label: "Production Apps" },
                { value: "5+", label: "PRs Merged" },
                { value: "2+", label: "Years Open Source" },
                { value: "1×", label: "Hackathon Win" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span className={`font-display font-black text-2xl leading-none ${isLight ? "text-ink-900" : "text-ink-50"}`}>
                    {s.value}
                  </span>
                  <span className={`text-xs font-mono ${isLight ? "text-ink-400" : "text-ink-600"}`}>{s.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Socials + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
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
                  className={`transition-all duration-200 hover:-translate-y-0.5 hover:text-accent ${
                    isLight ? "text-ink-400" : "text-ink-500"
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

          {/* ── Right: profile + terminal card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 24 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center gap-5"
          >
            {/* Profile photo with glow ring */}
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute -inset-1.5 rounded-2xl gradient-ring glow-pulse"
                aria-hidden="true"
              />
              {/* Photo */}
              <div className="relative w-[260px] h-[325px] rounded-2xl overflow-hidden ring-1 ring-white/10">
                <ProfileAvatar size="lg" />
              </div>
              {/* Hackathon badge */}
              <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-emerald-500/30">
                <Trophy size={11} />
                Hackathon Winner
              </div>
            </div>

            {/* Terminal card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.55 }}
              className={`w-full rounded-xl p-4 font-mono text-xs shadow-2xl ${
                isLight ? "glass-light" : "glass-dark"
              }`}
            >
              {/* Chrome dots */}
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className={`ml-2 text-[10px] tracking-wider ${isLight ? "text-ink-400" : "text-ink-600"}`}>
                  arnav.sh
                </span>
              </div>
              {/* Code lines */}
              <div className={`space-y-1.5 ${isLight ? "text-ink-600" : "text-ink-400"}`}>
                <p>
                  <span className="text-accent">$</span>{" "}
                  <span className="text-emerald-400">node</span> arnav.js
                </p>
                <p className={isLight ? "text-ink-400" : "text-ink-600"}>{"  "}→ Loading profile...</p>
                <p>
                  <span className="text-violet-400">✓</span> React · Next.js · FastAPI
                </p>
                <p>
                  <span className="text-violet-400">✓</span> LangChain · GraphRAG · Neo4j
                </p>
                <p>
                  <span className="text-violet-400">✓</span> Open Source @ Oppia Foundation
                </p>
                <p className="text-accent font-medium">
                  Ready to build.{" "}
                  <span className="cursor-blink" />
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="absolute bottom-8 left-6 flex items-center gap-3"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-linear-to-b from-accent/60 to-transparent"
          />
          <span className={`text-xs font-mono tracking-[0.22em] uppercase ${isLight ? "text-ink-300" : "text-ink-700"}`}>
            scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
