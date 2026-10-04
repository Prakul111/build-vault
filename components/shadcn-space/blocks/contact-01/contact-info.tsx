"use client";

import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialChannels = [
  {
    name: "LinkedIn",
    handle: "Prakul Tripathi",
    tagline: "Professional network & partnerships",
    href: "https://www.linkedin.com/in/prakul-tripathi",
    icon: LinkedinIcon,
    iconContainer:
      "bg-blue-50 text-blue-600 border border-blue-200/80 group-hover:bg-blue-100 group-hover:border-blue-300 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20 dark:group-hover:bg-blue-500/20 dark:group-hover:border-blue-500/40",
    badge: "Connect",
    titleHover: "group-hover:text-blue-600 dark:group-hover:text-blue-400",
  },
  {
    name: "Twitter / X",
    handle: "@prakul",
    tagline: "Quick discussions & product updates",
    href: "https://x.com",
    icon: TwitterIcon,
    iconContainer:
      "bg-zinc-100 text-zinc-900 border border-zinc-200/80 group-hover:bg-zinc-200/80 group-hover:border-zinc-300 dark:bg-zinc-800/80 dark:text-zinc-100 dark:border-zinc-700/80 dark:group-hover:bg-zinc-700/80 dark:group-hover:border-zinc-600",
    badge: "Message",
    titleHover: "group-hover:text-zinc-950 dark:group-hover:text-white",
  },
];

const ContactInfo = () => {
  return (
    <div className="flex flex-col md:gap-12 gap-8">
      <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-10 duration-1000 ease-in-out fill-mode-both">
        <div className="flex gap-3 items-center">
          <div className="w-2.5 h-2.5 rounded-full bg-teal-500 dark:bg-teal-400 shadow-xs shadow-teal-500/30"></div>
          <p className="text-sm font-medium tracking-wide uppercase text-zinc-500 dark:text-zinc-400">
            How I can help
          </p>
        </div>
        <Separator orientation="horizontal" className="bg-zinc-200 dark:bg-zinc-800/80" />
        <h2 className="text-3xl mt-6 md:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
          Let’s discuss about your project and take it the next level.
        </h2>

        {/* Reach me through LinkedIn and Twitter / X */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {socialChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between p-5 rounded-2xl border border-zinc-200/80 bg-white/90 dark:border-zinc-800/90 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-900/90 hover:border-zinc-300 dark:hover:border-zinc-700 hover:-translate-y-0.5 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-zinc-200/50 dark:hover:shadow-lg dark:hover:shadow-black/30 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 ${channel.iconContainer}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                    <span>{channel.badge}</span>
                    <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div>
                  <h4
                    className={`text-base font-semibold text-zinc-900 dark:text-zinc-100 transition-colors ${channel.titleHover}`}
                  >
                    {channel.name}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
                    {channel.tagline}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
