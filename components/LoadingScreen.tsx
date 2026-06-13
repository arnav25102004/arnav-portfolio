"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  { label: "INIT", text: "arnav-portfolio v2.0 · Bangalore, IN" },
  { label: "LOAD", text: "React · Next.js · TypeScript · Python" },
  { label: "LOAD", text: "FastAPI · LangChain · GraphRAG · Neo4j" },
  { label: "CONN", text: "Oppia Foundation · GitHub · Open Source" },
  { label: "STAT", text: "Available for hire · arnavnarula25@gmail.com" },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-[#09090b] flex flex-col items-center justify-center gap-8 px-6 select-none"
        >
          {/* Top progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-0.5 w-full origin-left"
            style={{ background: "linear-gradient(90deg, #4f46e5, #6366f1, #8b5cf6, #a855f7)" }}
          />

          {/* Boot lines — terminal style */}
          <div className="w-full max-w-lg space-y-1.5 font-mono text-xs">
            <p className="text-ink-700 mb-3 tracking-widest uppercase text-[10px]">
              // System initializing
            </p>
            {BOOT_LINES.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 + 0.15, duration: 0.28 }}
                className="flex items-center gap-3"
              >
                {/* OK badge */}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.38 }}
                  className="shrink-0 text-emerald-400 font-bold"
                >
                  [ OK ]
                </motion.span>
                {/* Label */}
                <span className="text-accent/80 font-bold shrink-0 w-10">{line.label}</span>
                {/* Text */}
                <span className="text-ink-600 truncate">{line.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="w-full max-w-lg h-px origin-left"
            style={{ background: "linear-gradient(90deg, #6366f1 0%, rgba(99,102,241,0.2) 60%, transparent 100%)" }}
          />

          {/* Big name reveal */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="font-mono text-[10px] tracking-[0.45em] uppercase text-accent mb-4">
              Full-Stack Developer · AI/ML · Open Source
            </p>

            <h1
              className="font-display font-black text-white leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 13vw, 7.5rem)" }}
            >
              Arnav
              <br />
              <span
                className="inline-block"
                style={{
                  background: "linear-gradient(125deg, #a5b4fc 0%, #6366f1 45%, #818cf8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Narula
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1 }}
              className="font-mono text-[10px] tracking-[0.3em] uppercase text-ink-700 mt-5"
            >
              Bangalore, India
            </motion.p>
          </motion.div>

          {/* Entering indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 flex items-center gap-2 font-mono text-[10px] text-ink-700 tracking-widest uppercase"
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
            Entering portfolio...
          </motion.div>

          {/* Corner decorations */}
          <div className="absolute top-6 right-6 font-mono text-[10px] text-ink-800 tracking-widest">
            2026 · v2.0
          </div>
          <div className="absolute bottom-8 right-6 font-mono text-[10px] text-ink-800">
            arnav25102004
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
