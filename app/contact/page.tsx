import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arnav Narula — available for full-stack development, AI/ML projects, and open source collaboration.",
  alternates: { canonical: "https://arnavnarula.dev/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
