import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Arnav Narula — Full-Stack Developer, AI/ML enthusiast, Oppia Foundation contributor, and national-level cricket player. Based in Bangalore.",
  alternates: { canonical: "https://arnavnarula.dev/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
