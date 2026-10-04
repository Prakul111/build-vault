"use client";

import Link from "next/link";
import Image from "next/image";
import { Button, Badge, Card, Progress } from "flowbite-react";
import { Marquee } from "@/components/shadcn-space/animations/marquee";
import {
  ArrowRight,
  Code2,
  Database,
  ExternalLink,
  Flame,
  GitBranch,
  Layers,
  Lightbulb,
  Mail,
  Server,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { PROJECTS_DATA, PORTFOLIO_METRICS_SUMMARY } from "@/data/projects";

// Hoisted static arrays to module scope (Vercel Best Practice: server-hoist-static-io)
const TECH_STACK = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Node.js",
  "Docker",
  "PostgreSQL",
  "Redis Streams",
  "Flowbite React",
  "Resend",
  "Web Crypto API",
  "GitHub Actions",
];

const SKILL_PILLARS = [
  {
    icon: Code2,
    badge: "Frontend",
    title: "Responsive & Modern UIs",
    description:
      "Crafting sleek, accessible, and fast web experiences using Next.js App Router, React 19, Tailwind CSS, and Flowbite React with native dark-mode support.",
    skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Flowbite UI"],
  },
  {
    icon: Server,
    badge: "Backend",
    title: "Robust APIs & Server Actions",
    description:
      "Architecting reliable backend services, server actions, REST APIs, and microservices with secure authentication, rate limiting, and email dispatch pipelines.",
    skills: ["Node.js", "Server Actions", "REST APIs", "Resend", "OAuth/JWT"],
  },
  {
    icon: Database,
    badge: "Database",
    title: "Data Modeling & Storage",
    description:
      "Designing structured relational schemas, indexing, and high-speed caching layers using PostgreSQL and Redis to guarantee sub-second queries.",
    skills: ["PostgreSQL", "Redis", "Prisma / Drizzle", "ACID Compliance"],
  },
  {
    icon: Layers,
    badge: "DevOps",
    title: "Docker & Cloud Automation",
    description:
      "Writing optimized multi-stage Docker builds and setting up automated CI/CD pipelines with GitHub Actions for hands-off production deployments.",
    skills: ["Docker", "GitHub Actions", "Vercel", "Linux", "CI/CD"],
  },
];

export default function HomePage() {
  const flagshipProjects = PROJECTS_DATA.filter((p) => p.tier === "flagship");
  const ongoingProjects = PROJECTS_DATA.filter(
    (p) => p.tier === "major-in-progress" || p.tier === "minor-experiment"
  );

  return (
    <div className="w-full space-y-20 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-4">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2">
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white max-w-4xl leading-[1.1]">
          Building software used by real people, engineered to scale.
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Hi, I&apos;m <span className="font-semibold text-gray-900 dark:text-white">Prakul Tripathi</span> — Full-Stack Developer specializing in React 19, Next.js 16, Cloud Architectures, and high-performance microservices.
        </p>

        {/* Action Buttons using Flowbite */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button as={Link} href="/work" color="blue" pill size="lg" className="font-medium shadow-md">
            View Live Projects & Metrics <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button as={Link} href="/contact" color="gray" pill size="lg" className="font-medium">
            <Mail className="mr-2 size-4" /> Get In Touch
          </Button>
        </div>

        {/* Live Ecosystem Metrics Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6">
          <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
              <Users className="size-4" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">
                {PORTFOLIO_METRICS_SUMMARY.totalActiveUsers}
              </span>
            </div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Active Users & Clients
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
              <Zap className="size-4" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">
                {PORTFOLIO_METRICS_SUMMARY.productionUptime}
              </span>
            </div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Production Availability
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
              <Layers className="size-4" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">
                {PORTFOLIO_METRICS_SUMMARY.projectsShipped}
              </span>
            </div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Shipped Systems & Tools
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
              <GitBranch className="size-4" />
              <span className="text-2xl font-black text-gray-900 dark:text-white">
                {PORTFOLIO_METRICS_SUMMARY.githubContributions}
              </span>
            </div>
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Git Contributions
            </p>
          </div>
        </div>

        {/* Developer Snapshot Box */}
        <div className="w-full max-w-3xl pt-2 text-left">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-md shadow-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 bg-gray-100/70 dark:bg-gray-800/50">
              <div className="flex items-center gap-2">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                prakul@buildvault: ~ / live-systems.json
              </span>
              <div className="size-3" />
            </div>
            <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto space-y-1.5 leading-relaxed text-gray-600 dark:text-gray-300">
              <p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">const</span>{" "}
                <span className="text-gray-900 dark:text-white font-semibold">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span>name:</span>{" "}
                <span className="text-green-600 dark:text-green-400">&quot;Prakul Tripathi&quot;</span>,
              </p>
              <p className="pl-4">
                <span>role:</span>{" "}
                <span className="text-green-600 dark:text-green-400">&quot;Full-Stack Software Engineer&quot;</span>,
              </p>
              <p className="pl-4">
                <span>liveUsersServing:</span>{" "}
                <span className="text-sky-600 dark:text-sky-400">&quot;3,800+ total active accounts & transfers&quot;</span>,
              </p>
              <p className="pl-4">
                <span>activePipelines:</span> [
                <span className="text-amber-600 dark:text-amber-400">&quot;TaskFlow Dispatcher (Alpha)&quot;</span>,{" "}
                <span className="text-amber-600 dark:text-amber-400">&quot;Cloud Sentinel Daemon&quot;</span>],
              </p>
              <p className="pl-4">
                <span>corePhilosophy:</span>{" "}
                <span className="text-purple-600 dark:text-purple-400">&quot;Resilient architectures, zero fluff, clean code&quot;</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>
      </section>



      {/* 3. Main Flagship Projects (With Live Metrics) */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge color="success" className="rounded-full px-3 py-0.5">
                Flagship Systems
              </Badge>
              <span className="text-xs text-gray-500 dark:text-gray-400 rounded">Live in Production</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Primary Projects & Real-World Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl">
              Battle-tested applications currently active, handling user requests and real data flows.
            </p>
          </div>
          <Button as={Link} href="/work" color="light" size="sm" pill>
            View all project details <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagshipProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col justify-between"
              renderImage={() => (
                <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={800}
                    height={450}
                    unoptimized
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <Badge color="success" size="xs" className="font-semibold uppercase tracking-wider backdrop-blur-md rounded-full">
                      ● {project.status}
                    </Badge>
                    <Badge color="dark" size="xs" className="rounded-full">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              )}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Live Usage Stat Blocks */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Usage / Reach</p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">{project.metrics.activeUsers}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{project.metrics.usersLabel}</p>
                    </div>
                    {project.metrics.extraMetric && (
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{project.metrics.extraMetric.label}</p>
                        <p className="text-base font-bold text-blue-600 dark:text-blue-400">{project.metrics.extraMetric.value}</p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Processed</p>
                      </div>
                    )}
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Health Status</p>
                      <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">{project.metrics.uptimeOrStatus}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">Live SLA</p>
                    </div>
                  </div>
                )}

                {/* Extra Knowledge Architecture Callout */}
                <div className="p-3.5 rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 text-blue-700 dark:text-blue-300 font-semibold">
                    <Lightbulb className="size-3.5" />
                    <span>Engineering Architecture</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                    {project.technicalInsight.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <Badge key={tag} color="gray" size="xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 flex items-center justify-between gap-3">
                <Button as={Link} href={project.links.live || "/work"} color="blue" size="sm" pill className="flex-1 font-medium">
                  Launch App <ArrowRight className="ml-2 size-3.5" />
                </Button>
                {project.links.github && (
                  <Button as="a" href={project.links.github} target="_blank" color="gray" size="sm" pill>
                    <GithubIcon className="size-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* 4. Active In-Progress Builds (Major & Minor) */}
      <section className="space-y-6 pt-4">
        <div className="space-y-1">
          {/*<Badge color="warning" className="rounded-full px-3 py-0.5">
            Active Roadmap
          </Badge>*/}
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Ongoing Builds & Experimental Labs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl">
            Major systems currently in development alongside minor developer utilities and open-source experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingProjects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge
                    color={project.tier === "major-in-progress" ? "warning" : "purple"}
                    size="xs"
                    className="rounded-full"
                  >
                    {project.tier === "major-in-progress" ? "Major System" : "Minor / Tool"}
                  </Badge>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase">
                    {project.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h4>
                  <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mt-0.5">{project.tagline}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Progress bar if present */}
                {project.progressPercent && (
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-medium text-gray-600 dark:text-gray-400">
                      <span>Build Completion</span>
                      <span>{project.progressPercent}%</span>
                    </div>
                    <Progress progress={project.progressPercent} color="blue" size="sm" />
                  </div>
                )}

                {/* Architecture Takeaway */}
                <div className="p-2.5 rounded-lg bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/60 text-[11px] space-y-0.5">
                  <span className="font-semibold text-gray-900 dark:text-white">Insight: </span>
                  <span className="text-gray-600 dark:text-gray-300">{project.technicalInsight.headline}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-gray-800 mt-3 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {project.metrics?.extraMetric?.label || "Status"}:{" "}
                  <strong className="text-gray-900 dark:text-white">
                    {project.metrics?.extraMetric?.value || project.metrics?.uptimeOrStatus}
                  </strong>
                </span>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Code <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </section>
      {/* 6. Call to Action Banner */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-14 text-center text-white space-y-6 shadow-xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Have a project or high-scale system in mind?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
            Whether you need a full-stack platform built, an existing service refactored for scale, or a Docker CI/CD deployment—I&apos;m ready to collaborate.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Button as={Link} href="/contact" color="light" size="lg" pill className="font-semibold text-gray-900 shadow-md">
            Start a Conversation <Sparkles className="ml-2 size-4 text-amber-500" />
          </Button>
          <Button as={Link} href="/work" color="dark" size="lg" pill className="font-semibold border-white/20">
            Explore All Projects & Architecture <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
