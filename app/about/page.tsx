"use client";

import Link from "next/link";
import { Badge, Button } from "flowbite-react";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Database,
  Layers,
  Lock,
  Mail,
  Server,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { Separator } from "@/components/ui/separator";

const CORE_PRINCIPLES = [
  {
    icon: Lock,
    number: "01",
    title: "Security & Privacy First",
    description:
      "Engineering with zero-knowledge paradigms where possible. Client-side AES-GCM 256-bit encryption ensures user data remains unreadable even to host servers.",
    accent: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30 border-amber-200/60 dark:border-amber-900/40",
  },
  {
    icon: Zap,
    number: "02",
    title: "Sub-Second Latency & Zero Bloat",
    description:
      "Leveraging React 19 Server Components, Turbopack, and Redis-backed caching to guarantee instant TTFB, minimal client JavaScript, and smooth transitions.",
    accent: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30 border-blue-200/60 dark:border-blue-900/40",
  },
  {
    icon: Layers,
    number: "03",
    title: "Production-Grade DevOps",
    description:
      "Strict CI/CD quality gates with GitHub Actions, automated TypeScript validation, and multi-stage Docker builds optimized for tiny footprint and rapid rollouts.",
    accent: "text-teal-500 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/30 border-teal-200/60 dark:border-teal-900/40",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Polished Craft & Human UX",
    description:
      "Clean interfaces designed with precision. Flawless dual-theme support, accessible typography, and smooth micro-interactions that elevate usability.",
    accent: "text-purple-500 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/30 border-purple-200/60 dark:border-purple-900/40",
  },
];

const TECH_AREAS = [
  {
    category: "Frontend & UI Systems",
    icon: Code2,
    badge: "Client Layer",
    description: "Building responsive, accessible, and reactive user interfaces.",
    tools: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Flowbite React",
      "Base UI",
    ],
  },
  {
    category: "Backend & Systems",
    icon: Server,
    badge: "Runtime & APIs",
    description: "Creating resilient server pipelines, webhook handlers, and APIs.",
    tools: [
      "Node.js 26 (Latest)",
      "Next.js Server Actions",
      "REST & Microservices",
      "Web Crypto API",
      "Resend API",
    ],
  },
  {
    category: "Databases & Caching",
    icon: Database,
    badge: "State & Storage",
    description: "Structuring scalable persistence, cache TTLs, and transactional flows.",
    tools: [
      "PostgreSQL",
      "Redis (Streams & Caching)",
      "Prisma / Drizzle ORM",
      "Sliding Window TTLs",
      "ACID Compliance",
    ],
  },
  {
    category: "DevOps & Cloud Infra",
    icon: Cpu,
    badge: "Deployment & CI",
    description: "Containerizing runtimes and running automated build verification.",
    tools: [
      "Multi-stage Docker",
      "GitHub Actions CI/CD",
      "GitHub Container Registry (GHCR)",
      "Linux Environments",
      "Turbopack Builds",
    ],
  },
];

const MILESTONES = [
  {
    year: "2026",
    title: "Building & Scaling Build Vault",
    description:
      "Shipped multiple live products serving over 3,800 active monthly users, including encrypted document transfer pipelines and modular developer UI frameworks.",
    tag: "Current Focus",
  },
  {
    year: "2025",
    title: "Zero-Knowledge Encryption & Distributed Queues",
    description:
      "Engineered cryptographic web tools utilizing Web Crypto API, client-side AES-GCM streaming, and automated Redis lifecycle garbage collection.",
    tag: "Systems Architecture",
  },
  {
    year: "2024",
    title: "Full-Stack Foundations & Modern Web",
    description:
      "Mastered React Server Components, TypeScript type-safety pipelines, automated containerization with Docker, and cloud-native workflows.",
    tag: "Core Engineering",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-zinc-50/60 dark:bg-black font-sans transition-colors duration-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-20">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-xs">
            <span className="flex size-2 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              About the Developer & Vision
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            Engineering software that combines{" "}
            <span className="text-blue-600 dark:text-blue-400">robust systems</span>{" "}
            with intuitive design.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I&apos;m <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Prakul Tripathi</strong>,
            a full-stack developer committed to building scalable web applications, zero-knowledge cryptographic tools,
            and developer platforms engineered for high throughput and reliable uptime.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button as={Link} href="/work" color="blue" pill size="lg" className="font-medium shadow-sm">
              Explore Shipped Work <ArrowRight className="ml-2 size-4" />
            </Button>
            <Button as={Link} href="/contact" color="gray" pill size="lg" className="font-medium">
              <Mail className="mr-2 size-4" /> Start a Conversation
            </Button>
            <Button
              as="a"
              href="https://github.com/prakul"
              target="_blank"
              rel="noopener noreferrer"
              color="gray"
              pill
              size="lg"
              className="font-medium"
            >
              <GithubIcon className="mr-2 size-4" /> GitHub
            </Button>
          </div>
        </section>

        {/* 2. Key Metrics Strip */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[
            { label: "Active Users Served", value: "3,800+", detail: "Across production apps" },
            { label: "Production Uptime", value: "99.9%", detail: "Reliable distributed systems" },
            { label: "Shipped Projects", value: "6+", detail: "Full-stack & open source" },
            { label: "GitHub Contributions", value: "450+", detail: "Commits & code reviews" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center"
            >
              <div className="text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {stat.label}
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </section>

        <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 max-w-5xl mx-auto" />

        {/* 3. The Story & Motivation */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <Badge color="info" className="w-fit">
              The Journey
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Why I build, and what drives Build Vault.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Software shouldn&apos;t just look good in mockups — it must perform flawlessly under real-world
              constraints. When I architect an application, I focus on clean abstraction layers, strict data
              boundaries, and predictable error handling.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong>Build Vault</strong> is my centralized platform documenting live production projects,
              practical architecture blueprints, and reusable full-stack solutions. Every component, API endpoint,
              and deployment workflow here is built to be resilient, maintainable, and observable.
            </p>
            <div className="space-y-2 pt-2">
              {[
                "Strict TypeScript typing across all layers",
                "Zero-knowledge encryption for privacy-critical operations",
                "Automated CI/CD with Docker containerization",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="size-4 text-teal-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 rounded-3xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                <Terminal className="size-4 text-blue-500" />
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  prakul@buildvault: ~ / developer-profile.json
                </span>
              </div>
              <pre className="text-xs font-mono text-zinc-800 dark:text-zinc-200 overflow-x-auto leading-relaxed">
{`{\n  "engineer": "Prakul Tripathi",\n  "location": "India",\n  "currentFocus": "Distributed Systems & React 19",\n  "nodeVersion": "Node.js v26.10.0 (Latest)",\n  "framework": "Next.js 16 (Turbopack)",\n  "values": [\n    "Clean Architecture",\n    "Security by Design",\n    "High Developer Velocity"\n  ],\n  "status": "Available for Select Opportunities"\n}`}
              </pre>
            </div>
          </div>
        </section>

        {/* 4. Core Engineering Principles */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Badge color="purple" className="w-fit mx-auto">
              Philosophy
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Engineering Principles I Adhere To
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              The foundational guidelines informing every architecture decision, line of code, and deployment pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CORE_PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${principle.bg}`}>
                      <Icon className={`size-5 ${principle.accent}`} />
                    </div>
                    <span className="text-2xl font-mono font-bold text-zinc-300 dark:text-zinc-700">
                      {principle.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Tech Stack & Capabilities Matrix */}
        <section className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Badge color="indigo" className="w-fit mx-auto">
              Tech Stack
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Tooling & Technology Ecosystem
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Modern tools chosen for strict reliability, high performance, and rapid maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TECH_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                        <Icon className="size-4" />
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300">
                        {area.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1">
                      {area.category}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                      {area.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 border-t border-zinc-100 dark:border-zinc-800/80 pt-3">
                    {area.tools.map((tool, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="size-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0"></span>
                        <span>{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* 6. Timeline & Milestones */}
        <section className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <Badge color="success" className="w-fit mx-auto">
              Trajectory
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Engineering Milestones
            </h2>
          </div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
            {MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 size-4 rounded-full border-2 border-white dark:border-black bg-blue-600 dark:bg-blue-500 ring-4 ring-blue-50 dark:ring-blue-950/40"></span>

                <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                  <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">
                    {item.year}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Bottom Call-to-Action Card */}
        <section className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Let&apos;s build something meaningful together.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Whether you want to discuss a full-stack project, explore technical architectures, or connect for
              opportunities, feel free to reach out.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button as={Link} href="/contact" color="blue" pill size="lg" className="font-medium shadow-sm">
                Get In Touch <ArrowRight className="ml-2 size-4" />
              </Button>
              <Button as={Link} href="/work" color="gray" pill size="lg" className="font-medium">
                View All Projects
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
