import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import LoadingScreen from "@/components/LoadingScreen";
import { personalInfo } from "@/lib/data";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arnav Narula — Full-Stack Developer & AI/ML Enthusiast",
    template: "%s | Arnav Narula",
  },
  description:
    "Full-Stack Developer and AI/ML enthusiast based in Bangalore. MCA student at CHRIST University, open-source contributor at Oppia Foundation, and national-level cricket player.",
  keywords: [
    "Arnav Narula",
    "Full Stack Developer",
    "AI ML Engineer",
    "React",
    "Next.js",
    "FastAPI",
    "LangChain",
    "Open Source",
    "Oppia Foundation",
    "Bangalore",
    "India",
  ],
  metadataBase: new URL("https://arnavnarula.dev"),
  authors: [{ name: "Arnav Narula", url: "https://arnavnarula.dev" }],
  creator: "Arnav Narula",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arnavnarula.dev",
    siteName: "Arnav Narula",
    title: "Arnav Narula — Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Full-Stack Developer and AI/ML enthusiast. Building AI-powered applications and contributing to large-scale open source.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnav Narula — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnav Narula — Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Full-Stack Developer and AI/ML enthusiast. Building AI-powered applications and contributing to large-scale open source.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://arnavnarula.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arnav Narula",
              url: "https://arnavnarula.dev",
              email: personalInfo.email,
              jobTitle: "Full-Stack Developer",
              description:
                "Full-Stack Developer and AI/ML enthusiast based in Bangalore, India.",
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "CHRIST (Deemed to be University)",
                  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
                },
              ],
              sameAs: [personalInfo.github, personalInfo.linkedin],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <LoadingScreen />
        <ThemeProvider>
          <Navbar />
          <PageTransition>
            <main className="flex-1">{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
