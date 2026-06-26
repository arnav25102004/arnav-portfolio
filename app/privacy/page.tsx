import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for arnavnarula.dev — what data is collected and how it is used.",
  alternates: { canonical: "https://arnavnarula.dev/privacy" },
};

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <p>
        This is the personal portfolio website of <strong>Arnav Narula</strong>, a Full-Stack Developer
        based in Bangalore, India. This site is a static, informational website. We do not run ads,
        we do not sell data, and we do not track you across the web.
      </p>
    ),
  },
  {
    id: "data-collected",
    title: "What We Collect",
    content: (
      <>
        <p>This site collects the absolute minimum necessary to function:</p>
        <ul>
          <li>
            <strong>Contact form submissions</strong> — when you fill out the contact form, your name,
            email address, and message are sent directly to Arnav via{" "}
            <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a>.
            We do not store form submissions in any database we control.
          </li>
          <li>
            <strong>Theme preference</strong> — your light/dark mode choice is saved in{" "}
            <code>localStorage</code> on your own device. It never leaves your browser.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "no-collect",
    title: "What We Do NOT Collect",
    content: (
      <ul>
        <li>We do <strong>not</strong> use Google Analytics or any analytics service</li>
        <li>We do <strong>not</strong> use cookies (except the theme stored in your own localStorage)</li>
        <li>We do <strong>not</strong> track your IP address, location, or device fingerprint</li>
        <li>We do <strong>not</strong> share any data with advertisers or third-party marketers</li>
        <li>We do <strong>not</strong> create user accounts or profiles</li>
      </ul>
    ),
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
    content: (
      <>
        <p>This site uses the following external services:</p>
        <ul>
          <li>
            <strong>Web3Forms</strong> — processes contact form submissions. Their privacy policy:
            {" "}<a href="https://web3forms.com/privacy" target="_blank" rel="noopener noreferrer">web3forms.com/privacy</a>
          </li>
          <li>
            <strong>Vercel</strong> — hosts this website. Vercel may collect standard server access logs
            (IP address, browser type) as part of their infrastructure.
            {" "}<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>
          </li>
          <li>
            <strong>Google Fonts</strong> — serves the Syne and JetBrains Mono fonts used on this site.
            Google may log font requests per their privacy policy.
          </li>
        </ul>
        <p>
          External links to GitHub, LinkedIn, and other platforms are subject to those
          platforms&apos; own privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "contact-data",
    title: "Contact Form Data",
    content: (
      <>
        <p>
          When you submit the contact form, your name, email, and message are forwarded to
          Arnav&apos;s inbox via Web3Forms. This data is used solely to respond to your enquiry.
          It is not stored in any database, not shared with anyone else, and not used for marketing.
        </p>
        <p>
          To request deletion of a message you sent, email{" "}
          <a href="mailto:arnavnarula25@gmail.com">arnavnarula25@gmail.com</a> and it will be
          deleted within 7 days.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <p>Since we collect virtually no personal data, there is very little to act on — but you have the right to:</p>
        <ul>
          <li><strong>Access</strong> — ask what data (if any) we hold about you</li>
          <li><strong>Deletion</strong> — ask us to delete any message you submitted via the contact form</li>
          <li><strong>Opt out</strong> — simply don&apos;t use the contact form; no other data is collected</li>
        </ul>
        <p>
          Contact: <a href="mailto:arnavnarula25@gmail.com">arnavnarula25@gmail.com</a>
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        If this policy changes, the updated version will be posted at this URL with a new effective
        date. Given the minimal nature of this site, significant changes are unlikely.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-navy">
      {/* Header */}
      <div className="relative pt-28 pb-20 bg-navy-800 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 right-0 w-96 h-96 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)", filter: "blur(70px)" }}
          />
          <div className="absolute inset-0 bg-grid opacity-15" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-accent font-mono text-xs mb-4 uppercase tracking-[0.22em]">Legal</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-ink-50 leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-ink-500">
            Effective date: <span className="text-ink-400">June 25, 2026</span>
            &nbsp;·&nbsp;
            Last updated: <span className="text-ink-400">June 25, 2026</span>
            &nbsp;·&nbsp;
            Site: <span className="text-accent">arnavnarula.dev</span>
          </p>
        </div>
      </div>

      {/* Summary banner */}
      <div className="max-w-3xl mx-auto px-6 -mt-6 relative z-10">
        <div
          className="rounded-xl px-6 py-4 font-mono text-sm text-emerald-300 flex items-start gap-3"
          style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}
        >
          <span className="text-emerald-400 shrink-0 font-bold mt-0.5">[ OK ]</span>
          <span>
            <strong>Short version:</strong> This portfolio collects no analytics, no cookies, and no personal
            data — except the message you optionally send via the contact form.
          </span>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {sections.map((section, i) => (
          <section key={section.id} id={section.id}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-accent/60 shrink-0 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display font-bold text-xl text-ink-50">
                {section.title}
              </h2>
              <div
                className="flex-1 h-px opacity-20"
                style={{ background: "linear-gradient(90deg, #6366f1, transparent)" }}
              />
            </div>
            <div
              className="pl-8 text-sm leading-relaxed text-ink-400 space-y-3
                [&_strong]:text-ink-200 [&_strong]:font-semibold
                [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent-light
                [&_ul]:space-y-2 [&_ul]:list-none [&_ul]:pl-0
                [&_li]:flex [&_li]:gap-2 [&_li]:before:content-['◆'] [&_li]:before:text-accent/50 [&_li]:before:text-xs [&_li]:before:mt-1 [&_li]:before:shrink-0
                [&_code]:font-mono [&_code]:text-xs [&_code]:bg-navy-600 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded"
            >
              {section.content}
            </div>
          </section>
        ))}

        {/* Contact box */}
        <div
          className="rounded-2xl p-7 mt-8"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08))", border: "1px solid rgba(99,102,241,0.25)" }}
        >
          <p className="font-mono text-xs text-accent uppercase tracking-[0.2em] mb-3">Questions?</p>
          <p className="font-display font-bold text-lg text-ink-50 mb-2">Get in touch</p>
          <p className="text-sm text-ink-400 mb-4">
            If you have any questions about this privacy policy or how your data is handled, reach out directly.
          </p>
          <div className="flex flex-col gap-1 font-mono text-xs text-ink-500">
            <span><span className="text-accent">$</span> name &nbsp;&nbsp;→ Arnav Narula</span>
            <span><span className="text-accent">$</span> email → <a href="mailto:arnavnarula25@gmail.com" className="text-accent hover:text-accent-light underline underline-offset-2">arnavnarula25@gmail.com</a></span>
            <span><span className="text-accent">$</span> location → Bangalore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
