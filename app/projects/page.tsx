import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Arnav Narula — Jurisprudential AI, Christ Eats (hackathon winner), Obsys, and more. Full-stack, AI/ML, and mobile apps.",
  alternates: { canonical: "https://arnavnarula.dev/projects" },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
