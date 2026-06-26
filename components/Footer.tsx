"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";
import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer
      className={`border-t ${
        isLight ? "border-ink-200 bg-ink-50" : "border-navy-600 bg-navy-800"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: brand + location */}
          <div className="flex flex-col items-center sm:items-start gap-1">
            <Link
              href="/"
              className={`font-display font-bold text-base ${isLight ? "text-ink-900" : "text-ink-200"}`}
            >
              Arnav Narula
            </Link>
            <span className={`text-xs font-mono ${isLight ? "text-ink-500" : "text-ink-500"}`}>
              {personalInfo.locationShort}
            </span>
          </div>

          {/* Center: social links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`p-2 rounded-md transition-colors ${
                isLight
                  ? "text-ink-500 hover:text-ink-900 hover:bg-ink-100"
                  : "text-ink-500 hover:text-teal hover:bg-navy-600"
              }`}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`p-2 rounded-md transition-colors ${
                isLight
                  ? "text-ink-500 hover:text-ink-900 hover:bg-ink-100"
                  : "text-ink-500 hover:text-teal hover:bg-navy-600"
              }`}
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className={`p-2 rounded-md transition-colors ${
                isLight
                  ? "text-ink-500 hover:text-ink-900 hover:bg-ink-100"
                  : "text-ink-500 hover:text-teal hover:bg-navy-600"
              }`}
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Right: copyright + back to top */}
          <div className="flex flex-col items-center sm:items-end gap-1">
            <button
              onClick={scrollTop}
              aria-label="Back to top"
              className={`flex items-center gap-1.5 text-xs transition-colors ${
                isLight
                  ? "text-ink-500 hover:text-ink-900"
                  : "text-ink-500 hover:text-teal"
              }`}
            >
              <ArrowUp size={13} />
              Back to top
            </button>
            <p className={`text-xs ${isLight ? "text-ink-400" : "text-ink-600"}`}>
              © 2026 Arnav Narula · Built with Next.js &amp; Tailwind
            </p>
            <Link
              href="/privacy"
              className={`text-xs transition-colors ${
                isLight ? "text-ink-300 hover:text-ink-600" : "text-ink-700 hover:text-ink-400"
              }`}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
