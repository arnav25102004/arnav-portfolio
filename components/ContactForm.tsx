"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY",
          ...form,
          subject: `Portfolio Contact from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = `w-full px-4 py-3 rounded-lg text-sm outline-none border transition-all duration-200 focus:border-teal focus:ring-1 focus:ring-teal/40 ${
    isLight
      ? "bg-white border-ink-200 text-ink-900 placeholder:text-ink-400"
      : "bg-navy-800 border-navy-600 text-ink-200 placeholder:text-ink-600"
  }`;

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border p-10 flex flex-col items-center justify-center gap-4 text-center ${
          isLight ? "bg-white border-ink-200" : "bg-navy-700 border-navy-600"
        }`}
      >
        <CheckCircle2 size={40} className="text-teal" />
        <div>
          <h3 className={`font-display font-bold text-xl mb-1 ${isLight ? "text-ink-900" : "text-ink-100"}`}>
            Message sent!
          </h3>
          <p className={`text-sm ${isLight ? "text-ink-500" : "text-ink-400"}`}>
            I&apos;ll get back to you soon.
          </p>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm text-teal hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border p-8 space-y-5 ${
        isLight ? "bg-white border-ink-200" : "bg-navy-700 border-navy-600"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className={`text-xs font-semibold uppercase tracking-wider ${isLight ? "text-ink-600" : "text-ink-400"}`}
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className={`text-xs font-semibold uppercase tracking-wider ${isLight ? "text-ink-600" : "text-ink-400"}`}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="your@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className={`text-xs font-semibold uppercase tracking-wider ${isLight ? "text-ink-600" : "text-ink-400"}`}
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Tell me about your project, idea, or just say hello..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-accent text-white font-bold text-sm rounded-lg transition-all duration-200 hover:bg-accent-light disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/20"
      >
        {status === "loading" ? (
          <>
            <span className="animate-spin inline-block w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className={`text-xs text-center ${isLight ? "text-ink-400" : "text-ink-600"}`}>
        Or email me at{" "}
        <a href="mailto:arnavnarula25@gmail.com" className="text-teal hover:underline">
          arnavnarula25@gmail.com
        </a>
      </p>
    </form>
  );
}
