"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, Progress } from "flowbite-react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  GitBranch,
  Layers,
  Lightbulb,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { Separator } from "@/components/ui/separator";
import {
  PROJECTS_DATA,
  PORTFOLIO_METRICS_SUMMARY,
  ProjectItem,
  ProjectTier,
} from "@/data/projects";

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<"all" | ProjectTier>("all");
  const [expandedInsights, setExpandedInsights] = useState<Record<string, boolean>>({});

  const toggleInsight = (id: string) => {
    setExpandedInsights((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.tier === activeTab);

  return (
    <div className="w-full bg-zinc-50/60 dark:bg-black font-sans transition-colors duration-200">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        {/* 1. Header & Summary Stats */}
        <section className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-xs">
            <span className="flex size-2 rounded-full bg-teal-500 dark:bg-teal-400"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-300">
              Production Engineering Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-[1.15]">
            Shipped Systems, Live Usage &amp;{" "}
            <span className="text-blue-600 dark:text-blue-400">Engineering Blueprints</span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Detailed breakdown of live systems serving users, ongoing major/minor pipelines, and technical architectural trade-offs.
          </p>

          {/* Global Live Stats Counter */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl pt-2">
            <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center">
              <div className="flex items-center justify-center gap-1.5 text-blue-600 dark:text-blue-400 mb-1">
                <Users className="size-4" />
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {PORTFOLIO_METRICS_SUMMARY.totalActiveUsers}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Active Users
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Serving in production</p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center">
              <div className="flex items-center justify-center gap-1.5 text-emerald-600 dark:text-emerald-400 mb-1">
                <Zap className="size-4" />
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {PORTFOLIO_METRICS_SUMMARY.productionUptime}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Production SLA
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Observed availability</p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center">
              <div className="flex items-center justify-center gap-1.5 text-purple-600 dark:text-purple-400 mb-1">
                <Layers className="size-4" />
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {PORTFOLIO_METRICS_SUMMARY.projectsShipped}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Shipped Systems
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Full-stack apps</p>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs text-center">
              <div className="flex items-center justify-center gap-1.5 text-amber-600 dark:text-amber-400 mb-1">
                <GitBranch className="size-4" />
                <span className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                  {PORTFOLIO_METRICS_SUMMARY.githubContributions}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                Contributions
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Commits &amp; releases</p>
            </div>
          </div>
        </section>

        <Separator className="bg-zinc-200/80 dark:bg-zinc-800/80 max-w-5xl mx-auto" />

        {/* 2. Interactive Tier Filters */}
        <section className="flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
          {[
            { id: "all", label: "All Projects" },
            { id: "flagship", label: "Flagship Production" },
            { id: "major-in-progress", label: "Ongoing Major Systems" },
            { id: "minor-experiment", label: "Minor Tools & Labs" },
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as "all" | ProjectTier)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs"
                    : "border border-zinc-200/80 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </section>

        {/* 3. Projects Deep Dive Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredProjects.map((project: ProjectItem) => {
            const isExpanded = expandedInsights[project.id] ?? false;

            return (
              <div
                key={project.id}
                className="rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/50 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Project Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    width={800}
                    height={450}
                    unoptimized
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/75 text-emerald-400 backdrop-blur-md border border-white/10">
                      <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {project.status}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-black/75 text-zinc-200 backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content Body */}
                <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                        {project.tagline}
                      </p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Progress Bar (if in-progress) */}
                    {project.progressPercent && (
                      <div className="space-y-1.5 p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                        <div className="flex justify-between text-xs font-medium text-amber-900 dark:text-amber-300">
                          <span>Roadmap Completion</span>
                          <span className="font-bold">{project.progressPercent}%</span>
                        </div>
                        <Progress progress={project.progressPercent} color="blue" size="sm" />
                      </div>
                    )}

                    {/* Metrics Breakdown */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-zinc-50/70 dark:bg-zinc-950/50 border border-zinc-200/80 dark:border-zinc-800/70">
                        <div>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                            Usage / Users
                          </p>
                          <p className="text-base font-bold text-zinc-900 dark:text-white">
                            {project.metrics.activeUsers}
                          </p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">
                            {project.metrics.usersLabel}
                          </p>
                        </div>

                        {project.metrics.extraMetric && (
                          <div>
                            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                              {project.metrics.extraMetric.label}
                            </p>
                            <p className="text-base font-bold text-blue-600 dark:text-blue-400">
                              {project.metrics.extraMetric.value}
                            </p>
                            <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Key Metric</p>
                          </div>
                        )}

                        <div>
                          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                            Health / SLA
                          </p>
                          <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                            {project.metrics.uptimeOrStatus}
                          </p>
                          <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Live Status</p>
                        </div>
                      </div>
                    )}

                    {/* Technical Knowledge Drawer */}
                    <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden">
                      <button
                        onClick={() => toggleInsight(project.id)}
                        className="w-full flex items-center justify-between p-3.5 bg-zinc-50/70 dark:bg-zinc-800/50 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900 dark:text-white">
                          <Lightbulb className="size-4 text-amber-500 shrink-0" />
                          <span>Architecture Insight: {project.technicalInsight.headline}</span>
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="size-4 text-zinc-500 shrink-0" />
                        ) : (
                          <ChevronDown className="size-4 text-zinc-500 shrink-0" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="p-4 space-y-3 bg-white dark:bg-zinc-900 text-xs text-zinc-700 dark:text-zinc-300 border-t border-zinc-100 dark:border-zinc-800">
                          <p className="leading-relaxed">{project.technicalInsight.summary}</p>
                          <div className="space-y-1.5 pt-1">
                            <p className="font-semibold text-zinc-900 dark:text-white">
                              Key Architectural Decisions:
                            </p>
                            <ul className="space-y-1 pl-1">
                              {project.technicalInsight.architecturePoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle2 className="size-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                                  <span className="leading-normal">{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mt-4 flex items-center justify-between gap-3">
                    {project.links.live ? (
                      <Button as={Link} href={project.links.live} color="blue" size="sm" pill className="flex-1 font-medium shadow-xs">
                        Open Project <ArrowRight className="ml-2 size-3.5" />
                      </Button>
                    ) : (
                      <Button as={Link} href="/contact" color="light" size="sm" pill className="flex-1 font-medium shadow-xs">
                        Request Demo Access <ArrowRight className="ml-2 size-3.5" />
                      </Button>
                    )}

                    {project.links.github && (
                      <Button as="a" href={project.links.github} target="_blank" color="gray" size="sm" pill>
                        <GithubIcon className="size-4 mr-1.5" />
                        <span>Source</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* 4. Bottom Collaboration Banner */}
        <section className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/80 dark:bg-zinc-900/60 shadow-sm text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              Need a custom system engineered?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed text-sm sm:text-base">
              From encrypted file distribution to distributed queue architectures, I can build, containerize, and deploy it for you.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button as={Link} href="/contact" color="blue" pill size="lg" className="font-medium shadow-sm">
                Discuss Your Architecture <Sparkles className="ml-2 size-4 text-amber-300" />
              </Button>
              <Button as={Link} href="/" color="gray" pill size="lg" className="font-medium">
                Return to Home
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
