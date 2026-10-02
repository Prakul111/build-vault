export type ProjectTier = "flagship" | "major-in-progress" | "minor-experiment";
export type ProjectStatus = "live" | "in-development" | "beta" | "planned";

export interface ProjectMetrics {
  activeUsers?: string;
  usersLabel?: string;
  githubStars?: number;
  uptimeOrStatus?: string;
  extraMetric?: {
    label: string;
    value: string;
  };
}

export interface TechnicalInsight {
  headline: string;
  summary: string;
  architecturePoints: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tier: ProjectTier;
  status: ProjectStatus;
  progressPercent?: number; // e.g. 75 for 75% complete
  category: "Full-Stack" | "Backend / Cloud" | "DevOps & Tooling" | "Security & Systems";
  metrics?: ProjectMetrics;
  technicalInsight: TechnicalInsight;
  tags: string[];
  links: {
    live?: string;
    github?: string;
    demo?: string;
  };
  imageSrc: string;
}

export const PORTFOLIO_METRICS_SUMMARY = {
  totalActiveUsers: "3,800+",
  productionUptime: "99.9%",
  projectsShipped: "6+",
  githubContributions: "450+",
};

export const PROJECTS_DATA: ProjectItem[] = [
  // --- TIER 1: FLAGSHIP PRODUCTION PROJECTS ---
  {
    id: "dumpher-store",
    title: "dumpher-store",
    tagline: "Ephemeral Encrypted File Sharing at Scale",
    description:
      "A privacy-first zero-knowledge file distribution platform featuring automatic cryptographic destruction post-download or upon TTL expiry. Built for frictionless, secure document transfer.",
    tier: "flagship",
    status: "live",
    category: "Security & Systems",
    metrics: {
      activeUsers: "2,400+",
      usersLabel: "Monthly Active Transfers",
      githubStars: 142,
      uptimeOrStatus: "99.9% Uptime",
      extraMetric: {
        label: "Files Encrypted",
        value: "45,000+",
      },
    },
    technicalInsight: {
      headline: "Client-Side AES-GCM & Automated S3 Bucket Lifecycle Rules",
      summary:
        "Engineered with zero-knowledge architecture where files are encrypted in the browser before dispatch, meaning the host server never accesses plaintext contents or decryption keys.",
      architecturePoints: [
        "Client-side AES-GCM 256-bit encryption through Web Crypto API before byte streaming",
        "Redis-backed sliding window expiration with automated background worker reclamation",
        "Multi-stage Dockerized runner ensuring isolated runtime boundaries and sub-100ms response latencies",
      ],
    },
    tags: ["Next.js 16", "TypeScript", "Redis", "Docker", "Web Crypto", "Tailwind CSS"],
    links: {
      live: "/work",
      github: "https://github.com/prakul/dumpher-store",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
  },
  {
    id: "build-vault",
    title: "Build Vault",
    tagline: "Production Engineering Directory & UI Block Hub",
    description:
      "A developer ecosystem and component registry housing production-tested UI templates, full-stack blueprints, and architectural patterns designed for fast project ramp-up.",
    tier: "flagship",
    status: "live",
    category: "Full-Stack",
    metrics: {
      activeUsers: "1,250+",
      usersLabel: "Monthly Developer Visits",
      githubStars: 89,
      uptimeOrStatus: "100% Turbopack Build",
      extraMetric: {
        label: "Block Templates",
        value: "35+",
      },
    },
    technicalInsight: {
      headline: "React 19 Server Components with Hoisted Layout Engine",
      summary:
        "Optimized using Next.js 16 Server Components and Turbopack bundler for instant TTI, zero-layout-shift theming, and transactional email triggers via Resend.",
      architecturePoints: [
        "Vercel React Best Practices: Zero-waterfall module hoisting and passive event handling",
        "Dual-engine theme toggle with Flowbite React & native dark class reconciliation",
        "Transactional API route handlers validating schemas with zero client bundle overhead",
      ],
    },
    tags: ["React 19", "Next.js 16", "Flowbite React", "Resend", "Tailwind CSS v4"],
    links: {
      live: "/",
      github: "https://github.com/prakul/buildvault",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
  },

  // --- TIER 2: ONGOING MAJOR BUILDS ---
  {
    id: "taskflow-dispatcher",
    title: "TaskFlow Dispatcher",
    tagline: "High-Throughput Asynchronous Webhook Queue",
    description:
      "A distributed background job orchestrator and outbound webhook delivery engine designed to handle bursty spikes with exponential backoff retry algorithms.",
    tier: "major-in-progress",
    status: "in-development",
    progressPercent: 75,
    category: "Backend / Cloud",
    metrics: {
      activeUsers: "Private Alpha",
      usersLabel: "Early Access Testing",
      uptimeOrStatus: "75% Complete",
      extraMetric: {
        label: "Benchmark Throughput",
        value: "10k req/sec",
      },
    },
    technicalInsight: {
      headline: "Decoupled Pub/Sub with Dead-Letter Queues (DLQ)",
      summary:
        "Constructed around a partitioned Redis Stream message broker providing consumer group concurrency and automated dead-letter queues for unrecoverable payloads.",
      architecturePoints: [
        "Partitioned streaming message bus handling burst traffic without backpressure collapse",
        "Circuit-breaker pattern guarding against cascading HTTP endpoint failures",
        "Comprehensive OpenTelemetry distributed tracing spans for end-to-end auditability",
      ],
    },
    tags: ["Node.js", "Redis Streams", "PostgreSQL", "Docker", "REST API", "Telemetry"],
    links: {
      github: "https://github.com/prakul/taskflow-dispatcher",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
  },
  {
    id: "cloud-sentinel",
    title: "Cloud Sentinel",
    tagline: "Container Health & Anomaly Detector",
    description:
      "A lightweight agent daemon that monitors Docker container CPU spikes, memory leaks, and network anomalies, emitting actionable alerts directly to webhooks.",
    tier: "major-in-progress",
    status: "in-development",
    progressPercent: 50,
    category: "DevOps & Tooling",
    metrics: {
      activeUsers: "Internal Dev",
      usersLabel: "Staging Pipeline",
      uptimeOrStatus: "Milestone: Engine 0.5",
      extraMetric: {
        label: "Agent Footprint",
        value: "<12MB RAM",
      },
    },
    technicalInsight: {
      headline: "Low-Overhead Event Loop Polling via Docker Socket",
      summary:
        "Communicates directly with the local Docker daemon socket (`/var/run/docker.sock`) through asynchronous streams, requiring minimal resident memory.",
      architecturePoints: [
        "Zero-dependency Unix socket reader avoiding heavy SDK bloat",
        "Dynamic threshold detection preventing alert fatigue on transient spikes",
        "Self-contained multi-stage Alpine binary ready for bare-metal or cloud clusters",
      ],
    },
    tags: ["TypeScript", "Docker API", "Linux Daemons", "Microservices"],
    links: {
      github: "https://github.com/prakul/cloud-sentinel",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
  },

  // --- TIER 3: ONGOING MINOR BUILDS & EXPERIMENTAL LABS ---
  {
    id: "git-stash-cleaner-cli",
    title: "git-stash-cleaner",
    tagline: "Interactive Git Stash & Branch Sanitizer CLI",
    description:
      "A terminal utility built for software engineers to preview, compare diffs, and safely purge stale Git stashes and merged local branches interactively.",
    tier: "minor-experiment",
    status: "beta",
    progressPercent: 90,
    category: "DevOps & Tooling",
    metrics: {
      activeUsers: "200+ installs",
      usersLabel: "npm registry downloads",
      githubStars: 34,
      uptimeOrStatus: "v0.9.2 Beta",
      extraMetric: {
        label: "Startup Time",
        value: "18ms",
      },
    },
    technicalInsight: {
      headline: "Interactive Terminal UI using Inquirer & Child Processes",
      summary:
        "Interprets raw porcelain Git output, presenting interactive multi-select checkboxes for batch actions without risk of accidental data deletion.",
      architecturePoints: [
        "Native spawn wrapper avoiding subshell injection vulnerabilities",
        "Non-blocking diff rendering preview before final user confirmation",
      ],
    },
    tags: ["Node.js CLI", "TypeScript", "Git Internals", "npm package"],
    links: {
      github: "https://github.com/prakul/git-stash-cleaner",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop",
  },
  {
    id: "resend-webhook-verifier",
    title: "resend-webhook-verifier",
    tagline: "Zero-Dependency HMAC Signature Validator",
    description:
      "A micro-utility for Next.js App Router applications to securely verify and parse Resend email webhook signatures without pulling in third-party crypto packages.",
    tier: "minor-experiment",
    status: "live",
    category: "Security & Systems",
    metrics: {
      activeUsers: "Open Source",
      usersLabel: "GitHub Public",
      githubStars: 19,
      uptimeOrStatus: "Production Ready",
      extraMetric: {
        label: "Bundle Size",
        value: "1.2KB",
      },
    },
    technicalInsight: {
      headline: "Constant-Time HMAC Comparison via Web Crypto",
      summary:
        "Prevents timing attacks by comparing webhook signatures using constant-time cryptographic equality comparisons supported on edge runtimes.",
      architecturePoints: [
        "Edge-compatible runtime support (Cloudflare Workers, Vercel Edge, Node.js)",
        "Zero external dependencies, eliminating supply chain risk",
      ],
    },
    tags: ["TypeScript", "Webhooks", "HMAC", "Edge Runtime"],
    links: {
      github: "https://github.com/prakul/resend-webhook-verifier",
    },
    imageSrc:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
  },
];
