import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import WhatIDo from "@/components/WhatIDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import CTAStrip from "@/components/CTAStrip";

export const metadata: Metadata = {
  title: "Arnav Narula — Full-Stack Developer & AI/ML Enthusiast",
  alternates: { canonical: "https://arnavnarula.dev" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <WhatIDo />
      <FeaturedProjects />
      <CTAStrip />
    </>
  );
}
