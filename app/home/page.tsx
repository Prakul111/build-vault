"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge, Button, Progress } from "flowbite-react";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { Separator } from "@/components/ui/separator";
import { PROJECTS_DATA, PORTFOLIO_METRICS_SUMMARY } from "@/data/projects";

const TECH_STACK = [
  "Next.js 16 (Turbopack)",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js 26",
  "Docker",
  "PostgreSQL",
  "Redis Streams",
  "Flowbite React",
  "Resend API",
  "Web Crypto API",
  "GitHub Actions",
];

export default function HomePage() {
  const flagshipProjects = PROJECTS_DATA.filter((p) => p.tier === "flagship");
  const ongoingProjects = PROJECTS_DATA.filter(
    (p) => p.tier === "major-in-progress" || p.tier === "minor-experiment"
  );

  return (
    <div className="w-full bg-zinc-50/60 dark:bg-black font-sans transition-colors duration-200">
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 space-y-16 sm:space-y-20">
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-xs max-w-full">
            <span className="flex size-2 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 truncate">
              Available for Select Opportunities &amp; Projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            Building software used by real people,{" "}
            <span className="text-blue-600 dark:text-blue-400">engineered to scale</span>.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Hi, I&apos;m <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Prakul Tripathi</strong> — Full-Stack Developer specializing in React 19, Next.js 16, Cloud Architectures, and high-performance microservices.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <Button as={Link} href="/work" color="blue" pill size="lg" className="font-medium shadow-sm justify-center">
              View Live Projects &amp; Metrics <ArrowRight className="ml-2 size-4" />
            </Button>
            <div className="flex items-center justify-center gap-3">
              <Button as={Link} href="/contact" color="gray" pill size="lg" className="flex-1 sm:flex-initial font-medium justify-center">
                <Mail className="mr-2 size-4" /> Start Conversation
              </Button>
              <Button
                as="a"
                href="https://github.com/prakul"
                target="_blank"
                rel="noopener noreferrer"
                color="gray"
                pill
                size="lg"
                className="font-medium justify-center"
              >
                <GithubIcon className="mr-2 size-4" /> GitHub
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Key Metrics Strip (Responsive grid & typography) */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto w-full">
          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
              {PORTFOLIO_METRICS_SUMMARY.totalActiveUsers}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Active Users
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Across production apps
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
              {PORTFOLIO_METRICS_SUMMARY.productionUptime}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Production Uptime
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              High availability SLA
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
              {PORTFOLIO_METRICS_SUMMARY.projectsShipped}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Shipped Systems
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Full-stack &amp; open source
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center flex flex-col justify-center">
            <div className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">
              {PORTFOLIO_METRICS_SUMMARY.githubContributions}
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Git Contributions
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Commits &amp; code reviews
            </p>
          </div>
        </section>

        <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 max-w-5xl mx-auto" />

        {/* 3. The Story & Live Systems Snapshot (Matches About Page) */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <Badge color="info" className="w-fit">
              Live Architecture
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Full-stack systems built for real-world reliability.
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Every application I design focuses on strict data boundaries, sub-second response times,
              and predictable error handling. From ephemeral encrypted file transfers to automated worker dispatchers,
              systems are built to run autonomously in production.
            </p>
            <div className="space-y-2 pt-1">
              {[
                "React 19 & Next.js 16 Server Components with Turbopack",
                "Client-side AES-GCM 256-bit zero-knowledge encryption",
                "Multi-stage Docker containers verified with GitHub Actions CI",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="size-4 text-teal-500 shrink-0 mt-0.5 sm:mt-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <Button as={Link} href="/work" color="gray" pill size="sm" className="font-medium w-full sm:w-auto justify-center">
                Explore Shipped Architectures <ArrowRight className="ml-2 size-3.5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 w-full min-w-0">
            <div className="p-4 sm:p-6 rounded-3xl border border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 border-b border-zinc-100 dark:border-zinc-800/80 pb-3">
                <Terminal className="size-4 text-blue-500 shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono text-zinc-500 dark:text-zinc-400 truncate">
                  prakul@buildvault: ~ / live-systems.json
                </span>
              </div>
              <pre className="text-[11px] sm:text-xs font-mono text-zinc-800 dark:text-zinc-200 overflow-x-auto leading-relaxed">
{`{\n  "engineer": "Prakul Tripathi",\n  "role": "Full-Stack Software Engineer",\n  "nodeVersion": "Node.js v26.10.0 (Latest)",\n  "activeUsers": "3,800+ total accounts & transfers",\n  "pipelines": [\n    "dumpher-store (Live AES-GCM)",\n    "TaskFlow Dispatcher (Alpha)",\n    "Cloud Sentinel Daemon"\n  ],\n  "corePhilosophy": "Resilient architectures, zero fluff, clean code"\n}`}
              </pre>
            </div>
          </div>
        </section>

        {/* 4. Tech Stack Marquee Ribbon (Responsive edge gradients) */}
        <section className="max-w-5xl mx-auto py-2 w-full">
          <div className="relative overflow-hidden py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 md:w-20 bg-gradient-to-r from-zinc-50/90 dark:from-black to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 md:w-20 bg-gradient-to-l from-zinc-50/90 dark:from-black to-transparent z-10" />
            <Marquee className="[--duration:28s] gap-4 sm:gap-6">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border border-zinc-200/80 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/60 text-xs font-semibold text-zinc-700 dark:text-zinc-300 shadow-xs whitespace-nowrap"
                >
                  <span className="size-1.5 rounded-full bg-blue-500 dark:bg-blue-400 shrink-0"></span>
                  {tech}
                </span>
              ))}
            </Marquee>
          </div>
        </section>

        <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 max-w-5xl mx-auto" />

        {/* 5. Flagship Production Projects */}
        <section className="max-w-5xl mx-auto space-y-8 w-full">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge color="success" className="w-fit">
                Flagship Systems
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Primary Projects &amp; Real-World Usage
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed">
                Battle-tested applications currently active, handling user requests, cryptographic operations, and real data flows.
              </p>
            </div>
            <Button as={Link} href="/work" color="gray" size="sm" pill className="font-medium shrink-0 w-full sm:w-auto justify-center">
              View All Projects <ArrowRight className="ml-2 size-3.5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {flagshipProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={800}
                    height={450}
                    unoptimized
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider bg-black/75 text-emerald-400 backdrop-blur-md border border-white/10">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-black/75 text-zinc-200 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {project.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Live Usage Stat Blocks */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 p-3 rounded-xl bg-zinc-50/70 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800/70">
                        <div>
                          <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Usage</p>
                          <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">{project.metrics.activeUsers}</p>
                          <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 truncate">{project.metrics.usersLabel}</p>
                        </div>
                        {project.metrics.extraMetric && (
                          <div>
                            <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">{project.metrics.extraMetric.label}</p>
                            <p className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400">{project.metrics.extraMetric.value}</p>
                            <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400">Processed</p>
                          </div>
                        )}
                        <div className="col-span-2 sm:col-span-1 pt-1.5 sm:pt-0 border-t sm:border-t-0 border-zinc-200/60 dark:border-zinc-800/60">
                          <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium">Health Status</p>
                          <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">{project.metrics.uptimeOrStatus}</p>
                          <p className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400">Live SLA</p>
                        </div>
                      </div>
                    )}

                    {/* Architecture Callout */}
                    <div className="p-3 sm:p-3.5 rounded-xl border border-blue-200/70 dark:border-blue-900/40 bg-blue-50/60 dark:bg-blue-950/20 text-xs space-y-1">
                      <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-semibold">
                        <Lightbulb className="size-3.5 shrink-0" />
                        <span>Engineering Architecture</span>
                      </div>
                      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal text-[11px] sm:text-xs">
                        {project.technicalInsight.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-medium bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mt-4 flex items-center justify-between gap-3">
                    <Button as={Link} href={project.links.live || "/work"} color="blue" size="sm" pill className="flex-1 font-medium shadow-xs justify-center">
                      Launch App <ArrowRight className="ml-2 size-3.5" />
                    </Button>
                    {project.links.github && (
                      <Button as="a" href={project.links.github} target="_blank" color="gray" size="sm" pill className="shrink-0" aria-label="GitHub Repository">
                        <GithubIcon className="size-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Active In-Progress Builds (Major & Minor) */}
        <section className="max-w-5xl mx-auto space-y-8 w-full">
          <div className="space-y-2">
            <Badge color="warning" className="w-fit">
              Active Roadmap &amp; Labs
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Ongoing Builds &amp; Experimental Labs
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Major distributed systems in active development alongside developer utilities and open-source packages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold ${
                        project.tier === "major-in-progress"
                          ? "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60"
                          : "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-900/60"
                      }`}
                    >
                      {project.tier === "major-in-progress" ? "Major System" : "Minor / Tool"}
                    </span>
                    <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">{project.title}</h4>
                    <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mt-0.5">{project.tagline}</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Progress bar if present */}
                  {project.progressPercent && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-medium text-zinc-600 dark:text-zinc-400">
                        <span>Build Completion</span>
                        <span>{project.progressPercent}%</span>
                      </div>
                      <Progress progress={project.progressPercent} color="blue" size="sm" />
                    </div>
                  )}

                  {/* Architecture Takeaway */}
                  <div className="p-2.5 rounded-xl bg-zinc-50/70 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/60 text-[11px] space-y-0.5">
                    <span className="font-semibold text-zinc-900 dark:text-white">Insight: </span>
                    <span className="text-zinc-600 dark:text-zinc-300">{project.technicalInsight.headline}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 mt-3 flex items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs font-medium text-zinc-500 dark:text-zinc-400 truncate">
                    {project.metrics?.extraMetric?.label || "Status"}:{" "}
                    <strong className="text-zinc-900 dark:text-white font-semibold">
                      {project.metrics?.extraMetric?.value || project.metrics?.uptimeOrStatus}
                    </strong>
                  </span>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1 shrink-0"
                    >
                      Code <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Bottom Call-to-Action Card (Matches About Page) */}
        <section className="max-w-4xl mx-auto w-full">
          <div className="p-6 sm:p-10 rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Have a project or high-scale system in mind?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              Whether you need a full-stack platform built, an existing service refactored for scale, or a Docker CI/CD deployment—I&apos;m ready to collaborate.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
              <Button as={Link} href="/contact" color="blue" pill size="lg" className="font-medium shadow-sm justify-center">
                Start a Conversation <Sparkles className="ml-2 size-4 text-amber-300" />
              </Button>
              <Button as={Link} href="/work" color="gray" pill size="lg" className="font-medium justify-center">
                Explore All Projects &amp; Architecture <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
