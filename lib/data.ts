export const personalInfo = {
  name: "Arnav Narula",
  initials: "AN",
  tagline: "Full-Stack Developer & Freelancer · Open Source · AI/ML",
  bio: "I'm a developer who cares about both what the code does and how it's written. I build AI-powered applications, take on freelance projects, and contribute to large-scale open source. Clean architecture is non-negotiable.",
  email: "arnavnarula25@gmail.com",
  phone: "+91 6398218178",
  location: "Bangalore, India",
  locationShort: "Bangalore, IN",
  github: "https://github.com/arnav25102004",
  linkedin: "https://linkedin.com/in/arnavnarula",
  resumeUrl: "/resume.pdf",
};

export const projects = [
  {
    id: "dharma-ai",
    title: "Dharma AI",
    year: "2025",
    accentColor: "#f59e0b",
    shortDesc:
      "Legal-tech assistant using GraphRAG to bridge ancient Indian jurisprudence with modern statutes.",
    description:
      "Legal-tech assistant using GraphRAG to link ancient Indian legal concepts (Dharma, Danda) with modern statutes. Multi-step reasoning pipeline with LangGraph for routing judicial vs general legal queries. Automated source-backed citations across 60+ authoritative legal PDFs.",
    stack: ["React", "FastAPI", "LangChain", "Neo4j", "Pinecone", "GPT-4o"],
    github: "#",
    demo: "https://dharma-ai-nine.vercel.app",
    featured: true,
  },
  {
    id: "christ-eats",
    title: "Christ Eats",
    year: "2025",
    badge: "Hackathon Winner",
    accentColor: "#22c55e",
    shortDesc:
      "Campus logistics platform replacing physical canteen queues with async ordering and time-slot scheduling.",
    description:
      "Campus logistics platform replacing physical canteen queues with async ordering and time-slot scheduling. High-concurrency FastAPI backend with digital token system and real-time vendor dashboard. Razorpay integration for payments. Cross-platform Expo app in staging.",
    stack: ["React Native", "FastAPI", "MongoDB", "Neon PostgreSQL", "Razorpay"],
    github: "#",
    demo: null,
    featured: true,
  },
  {
    id: "obsys",
    title: "Obsys",
    year: "2025",
    accentColor: "#3b82f6",
    shortDesc:
      "OS behavior simulator modeling CPU scheduling algorithms via a clock-driven state machine.",
    description:
      "OS behavior simulator modeling CPU scheduling (FCFS, Round Robin, SJF) via a clock-driven state machine. Real-time sync between Python CLI and React dashboard via WebSockets. Animated Gantt charts with ReCharts.",
    stack: ["React", "TypeScript", "FastAPI", "WebSockets", "SQLite"],
    github: "#",
    demo: null,
    featured: true,
  },
];

export const experience = [
  {
    id: "freelance",
    role: "Freelance Developer",
    org: "Independent",
    location: "Remote",
    period: "2024 – Present",
    bullets: [
      "Building full-stack web and mobile applications for clients across domains — from internal tools to consumer-facing products.",
      "End-to-end delivery: architecture, frontend, backend, deployment, and handoff.",
    ],
  },
  {
    id: "oppia-collaborator",
    role: "Collaborator",
    org: "Oppia Foundation",
    location: "Remote",
    period: "Apr 2026 – Present",
    bullets: [
      "Migrating legacy audit jobs to Apache Beam pipelines using PTransforms for large-scale exploration-model validation and data cleanup.",
      "Shepherding high-impact PRs (#25116, #18103) through complex reviewer feedback cycles to enforce strict TypeScript and accessibility standards.",
    ],
  },
  {
    id: "oppia-contributor",
    role: "Open Source Contributor",
    org: "Oppia Foundation",
    location: "Remote",
    period: "Nov 2025 – Mar 2026",
    bullets: [
      "Refactored core services into proper Angular DI singletons (PR #24995), optimizing memory management.",
      "Resolved critical accessibility bugs in the schema editor with dynamic [id] binding and translated aria-label attributes.",
      "Enforced strict TypeScript typing across 11 files, eliminating generic Function types and null-check vulnerabilities.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "CHRIST (Deemed to be University)",
    location: "Bangalore, India",
    period: "July 2025 – Present",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Graphic Era (Deemed to be University)",
    location: "Dehradun, India",
    period: "July 2022 – June 2025",
    note: "CGPA: 8.07",
  },
];

export const skills = [
  {
    category: "Languages",
    color: "#6366f1",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "SQL"],
  },
  {
    category: "Web & Frameworks",
    color: "#8b5cf6",
    items: [
      "React",
      "React Native",
      "Next.js",
      "FastAPI",
      "Node.js",
      "Angular",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    category: "Databases",
    color: "#3b82f6",
    items: ["MongoDB", "PostgreSQL", "SQLite", "Neo4j"],
  },
  {
    category: "AI / ML",
    color: "#f59e0b",
    items: [
      "LLMs",
      "RAG",
      "LangChain",
      "LangGraph",
      "GraphRAG",
      "Vector Databases",
      "Prompt Engineering",
      "GPT-4o",
    ],
  },
  {
    category: "Tools & Infra",
    color: "#22c55e",
    items: ["Git", "GitHub", "Docker", "Postman", "Vercel", "Render", "Apache Beam"],
  },
];

export const achievements = [
  "Winner — CHRIST National Level Hackathon (Revelations) for Christ Eats",
  "Class Representative for 3 consecutive years (BCA, Graphic Era University)",
  "NSS Student Cell Coordinator — led community outreach drives",
  "5+ production PRs merged to Oppia Foundation — Apache Beam, Angular, TypeScript",
];

export const domains = [
  {
    title: "Full-Stack Development",
    desc: "React, Next.js, FastAPI, Node.js — end-to-end web and mobile applications.",
    icon: "layers",
  },
  {
    title: "AI & LLM Engineering",
    desc: "RAG pipelines, LangChain, GraphRAG, vector search, and prompt engineering.",
    icon: "brain",
  },
  {
    title: "Freelance & Consulting",
    desc: "End-to-end product delivery for clients — from architecture to deployment.",
    icon: "briefcase",
  },
  {
    title: "Open Source",
    desc: "Oppia Foundation collaborator. Production-grade TypeScript, Angular, and Apache Beam contributions.",
    icon: "git-branch",
  },
];
