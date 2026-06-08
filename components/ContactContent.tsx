"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalInfo } from "@/lib/data";
import { useTheme } from "./ThemeProvider";
import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";

export default function ContactContent() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <div className={`min-h-screen ${isLight ? "bg-white" : "bg-navy"}`}>
      {/* Header */}
      <div className={`pt-32 pb-16 ${isLight ? "bg-ink-50" : "bg-navy-800"}`}>
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-teal font-mono text-sm mb-3 uppercase tracking-widest">Let&apos;s Talk</p>
            <h1 className={`font-display font-black text-5xl sm:text-6xl md:text-7xl leading-none mb-4 ${isLight ? "text-ink-900" : "text-ink-50"}`}>
              Get In Touch
            </h1>
            <p className={`text-lg max-w-xl ${isLight ? "text-ink-500" : "text-ink-400"}`}>
              Have a project, a question, or just want to say hello? I&apos;m always open to interesting conversations.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className={`font-display font-bold text-xl mb-6 ${isLight ? "text-ink-900" : "text-ink-100"}`}>
                  Contact details
                </h2>
                <div className="space-y-4">
                  <ContactInfoItem
                    icon={<Mail size={16} />}
                    label="Email"
                    value={personalInfo.email}
                    href={`mailto:${personalInfo.email}`}
                    isLight={isLight}
                  />
                  <ContactInfoItem
                    icon={<Phone size={16} />}
                    label="Phone"
                    value={personalInfo.phone}
                    href={`tel:${personalInfo.phone}`}
                    isLight={isLight}
                  />
                  <ContactInfoItem
                    icon={<MapPin size={16} />}
                    label="Location"
                    value={personalInfo.location}
                    isLight={isLight}
                  />
                </div>
              </div>

              <div>
                <h2 className={`font-display font-bold text-xl mb-4 ${isLight ? "text-ink-900" : "text-ink-100"}`}>
                  Socials
                </h2>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all hover:-translate-y-0.5 ${
                      isLight
                        ? "border-ink-200 text-ink-700 hover:border-teal hover:text-teal"
                        : "border-navy-600 text-ink-300 hover:border-teal hover:text-teal"
                    }`}
                  >
                    <GithubIcon size={16} />
                    GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all hover:-translate-y-0.5 ${
                      isLight
                        ? "border-ink-200 text-ink-700 hover:border-teal hover:text-teal"
                        : "border-navy-600 text-ink-300 hover:border-teal hover:text-teal"
                    }`}
                  >
                    <LinkedinIcon size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>

              {/* Decoration */}
              <div
                className={`rounded-2xl p-6 border ${
                  isLight ? "bg-ink-50 border-ink-200" : "bg-navy-800 border-navy-600"
                }`}
              >
                <p className={`text-sm leading-relaxed italic ${isLight ? "text-ink-500" : "text-ink-500"}`}>
                  &ldquo;I&apos;m always open to full-time roles, freelance projects, and open-source collaborations.
                  Response time: usually within 24 hours.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
  isLight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  isLight: boolean;
}) {
  const inner = (
    <div
      className={`flex items-start gap-3 p-4 rounded-xl border transition-colors ${
        href
          ? `cursor-pointer ${isLight ? "hover:border-teal group" : "hover:border-teal group"}`
          : ""
      } ${isLight ? "bg-white border-ink-200" : "bg-navy-700 border-navy-600"}`}
    >
      <div className={`w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <p className={`text-xs font-mono uppercase tracking-wider mb-0.5 ${isLight ? "text-ink-400" : "text-ink-600"}`}>
          {label}
        </p>
        <p
          className={`text-sm font-medium transition-colors ${
            href
              ? `${isLight ? "text-ink-700 group-hover:text-teal" : "text-ink-300 group-hover:text-teal"}`
              : isLight
              ? "text-ink-700"
              : "text-ink-300"
          }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("mailto") || href.startsWith("tel") ? "_self" : "_blank"} rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  );
}
