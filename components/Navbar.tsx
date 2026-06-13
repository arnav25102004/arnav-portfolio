"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isLight = theme === "light";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? isLight
              ? "bg-white/85 backdrop-blur-lg border-b border-ink-200/80 shadow-sm"
              : "bg-navy/80 backdrop-blur-lg border-b border-white/6"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link
            href="/"
            className="group flex items-center gap-0.5 select-none"
            aria-label="Arnav Narula — Home"
          >
            {/* Terminal prompt */}
            <span className="font-mono font-bold text-accent text-lg mr-1 transition-colors group-hover:text-accent-light">
              &gt;
            </span>
            {/* Name gradient */}
            <span className="font-display font-black text-base text-gradient tracking-tight">
              arnav
            </span>
            {/* Blinking underscore cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
              className="font-mono font-black text-accent text-lg leading-none ml-0.5"
            >
              _
            </motion.span>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 text-sm transition-colors rounded-lg ${
                    active
                      ? "text-accent"
                      : isLight
                      ? "text-ink-500 hover:text-ink-900"
                      : "text-ink-500 hover:text-ink-100"
                  }`}
                >
                  {label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                    />
                  )}
                </Link>
              );
            })}

            {/* Availability dot */}
            <div className={`hidden lg:flex items-center gap-1.5 mx-2 px-3 py-1.5 rounded-full text-xs font-mono ${
              isLight ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-emerald-950/40 text-emerald-400 border border-emerald-800/40"
            }`}>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
              </span>
              Available
            </div>

            <button
              onClick={toggle}
              className={`ml-1 p-2 rounded-lg transition-colors ${
                isLight
                  ? "text-ink-500 hover:text-ink-900 hover:bg-ink-100"
                  : "text-ink-500 hover:text-ink-100 hover:bg-navy-600"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* ── Mobile controls ── */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={toggle}
              className={`p-2 rounded-lg transition-colors ${
                isLight ? "text-ink-500 hover:bg-ink-100" : "text-ink-400 hover:bg-navy-600"
              }`}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className={`p-2 rounded-lg transition-colors ${
                isLight ? "text-ink-800 hover:bg-ink-100" : "text-ink-200 hover:bg-navy-600"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`fixed top-0 right-0 bottom-0 z-50 w-64 md:hidden flex flex-col pt-20 px-5 ${
                isLight ? "bg-white border-l border-ink-200" : "bg-navy-700 border-l border-white/8"
              }`}
            >
              <nav className="flex flex-col gap-1">
                {links.map(({ href, label }) => {
                  const active = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        active
                          ? "text-accent bg-accent/8"
                          : isLight
                          ? "text-ink-600 hover:bg-ink-100"
                          : "text-ink-300 hover:bg-navy-600"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              <div className={`mt-6 flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-mono w-fit ${
                isLight ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-emerald-950/40 text-emerald-400 border border-emerald-800/40"
              }`}>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                Available for hire
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
