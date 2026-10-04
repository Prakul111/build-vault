"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge, Button, Card, Progress } from "flowbite-react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Cpu,
  ExternalLink,
  Flame,
  GitBranch,
  Layers,
  Lightbulb,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
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
    <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* 1. Header & Summary Stats */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
          Projects, Real Usage & In-Progress Builds
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
          Detailed breakdown of live systems serving users, ongoing major/minor pipelines, and technical architectural trade-offs.
        </p>

        {/* Global Live Stats Counter */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 text-left">
          <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs">
            <div className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-1">
              <Users className="size-3.5" />
              <span>ACTIVE USERS</span>
            </div>
            <p className="text-2xl font-black text-gray-900 dark:text-white">
              {PORTFOLIO_METRICS_SUMMARY.totalActiveUsers}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Serving in production</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs">
            <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold mb-1">
              <Zap className="size-3.5" />
              <span>UPTIME SLA</span>
            </div>
            <p className="text-2xl font-black text-gray-900 dark:text-white">
              {PORTFOLIO_METRICS_SUMMARY.productionUptime}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">High availability</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs">
            <div className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 text-xs font-semibold mb-1">
              <Layers className="size-3.5" />
              <span>SYSTEMS SHIPPED</span>
            </div>
            <p className="text-2xl font-black text-gray-900 dark:text-white">
              {PORTFOLIO_METRICS_SUMMARY.projectsShipped}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Full-stack & tooling</p>
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs">
            <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-1">
              <GitBranch className="size-3.5" />
              <span>CONTRIBUTIONS</span>
            </div>
            <p className="text-2xl font-black text-gray-900 dark:text-white">
              {PORTFOLIO_METRICS_SUMMARY.githubContributions}
            </p>
            <p className="text-[11px] text-gray-500 dark:text-gray-400">Active commits</p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Tabs */}
      <section className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 dark:border-gray-800 pb-4">
        <Button
          color={activeTab === "all" ? "blue" : "gray"}
          size="sm"
          pill
          onClick={() => setActiveTab("all")}
          className="font-medium"
        >
          All Projects ({PROJECTS_DATA.length})
        </Button>
        <Button
          color={activeTab === "flagship" ? "blue" : "gray"}
          size="sm"
          pill
          onClick={() => setActiveTab("flagship")}
          className="font-medium"
        >
          Flagship Live ({PROJECTS_DATA.filter((p) => p.tier === "flagship").length})
        </Button>
        <Button
          color={activeTab === "major-in-progress" ? "blue" : "gray"}
          size="sm"
          pill
          onClick={() => setActiveTab("major-in-progress")}
          className="font-medium"
        >
          Ongoing Major ({PROJECTS_DATA.filter((p) => p.tier === "major-in-progress").length})
        </Button>
        <Button
          color={activeTab === "minor-experiment" ? "blue" : "gray"}
          size="sm"
          pill
          onClick={() => setActiveTab("minor-experiment")}
          className="font-medium"
        >
          Minor & Tools ({PROJECTS_DATA.filter((p) => p.tier === "minor-experiment").length})
        </Button>
      </section>

      {/* 3. Detailed Projects Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project: ProjectItem) => {
          const isExpanded = !!expandedInsights[project.id];

          return (
            <Card
              key={project.id}
              className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                    <Badge
                      color={
                        project.status === "live"
                          ? "success"
                          : project.status === "in-development"
                          ? "warning"
                          : "purple"
                      }
                      size="xs"
                      className="font-semibold uppercase tracking-wider backdrop-blur-md"
                    >
                      ● {project.status}
                    </Badge>
                    <Badge color="dark" size="xs">
                      {project.category}
                    </Badge>
                  </div>
                </div>
              )}
            >
              <div className="space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <Badge
                      color={
                        project.tier === "flagship"
                          ? "success"
                          : project.tier === "major-in-progress"
                          ? "warning"
                          : "purple"
                      }
                      size="xs"
                      className="rounded-full uppercase text-[10px]"
                    >
                      {project.tier === "flagship"
                        ? "Main Project"
                        : project.tier === "major-in-progress"
                        ? "Major Pipeline"
                        : "Minor Tool"}
                    </Badge>
                  </div>
                  <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Progress Bar (if in-progress) */}
                {project.progressPercent && (
                  <div className="space-y-1.5 p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                    <div className="flex justify-between text-xs font-medium text-amber-900 dark:text-amber-300">
                      <span>Roadmap Completion</span>
                      <span className="font-bold">{project.progressPercent}%</span>
                    </div>
                    <Progress progress={project.progressPercent} color="blue" size="sm" />
                  </div>
                )}

                {/* Metrics Breakdown */}
                {project.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-700/60">
                    <div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                        Usage / Users
                      </p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">
                        {project.metrics.activeUsers}
                      </p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                        {project.metrics.usersLabel}
                      </p>
                    </div>

                    {project.metrics.extraMetric && (
                      <div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                          {project.metrics.extraMetric.label}
                        </p>
                        <p className="text-base font-bold text-blue-600 dark:text-blue-400">
                          {project.metrics.extraMetric.value}
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">Key Metric</p>
                      </div>
                    )}

                    <div>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                        Health / SLA
                      </p>
                      <p className="text-base font-bold text-emerald-600 dark:text-emerald-400">
                        {project.metrics.uptimeOrStatus}
                      </p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400">Live Status</p>
                    </div>
                  </div>
                )}

                {/* Extra Technical Knowledge Drawer */}
                <div className="rounded-xl border border-gray-200 dark:border-gray-700/80 overflow-hidden">
                  <button
                    onClick={() => toggleInsight(project.id)}
                    className="w-full flex items-center justify-between p-3 bg-gray-100/60 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                      <Lightbulb className="size-4 text-amber-500" />
                      <span>Architecture Insight: {project.technicalInsight.headline}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="size-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="size-4 text-gray-500" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-4 space-y-3 bg-white dark:bg-gray-900 text-xs text-gray-700 dark:text-gray-300">
                      <p className="leading-relaxed">{project.technicalInsight.summary}</p>
                      <div className="space-y-1.5 pt-1">
                        <p className="font-semibold text-gray-900 dark:text-white">
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
                    <Badge key={tag} color="gray" size="xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 mt-4 flex items-center justify-between gap-3">
                {project.links.live ? (
                  <Button as={Link} href={project.links.live} color="blue" size="sm" pill className="flex-1 font-medium">
                    Open Project <ArrowRight className="ml-2 size-3.5" />
                  </Button>
                ) : (
                  <Button as={Link} href="/contact" color="light" size="sm" pill className="flex-1 font-medium">
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
            </Card>
          );
        })}
      </section>

      {/* 4. Bottom Collaboration Banner */}
      <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 sm:p-12 text-center text-white space-y-4 shadow-xl">
        <h2 className="text-3xl font-extrabold tracking-tight">Need a custom system engineered?</h2>
        <p className="text-blue-100 max-w-xl mx-auto text-sm sm:text-base">
          From encrypted file distribution to distributed queue architectures, I can build and containerize it for you.
        </p>
        <div className="pt-2">
          <Button as={Link} href="/contact" color="light" size="lg" pill className="font-semibold text-gray-900 mx-auto">
            Discuss Your Architecture <Sparkles className="ml-2 size-4 text-amber-500" />
          </Button>
        </div>
      </section>
    </main>
  );
}
