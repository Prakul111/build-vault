"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo/logo";
import { useThemeMode } from "flowbite-react";
import { GithubIcon } from "@/components/icons/github-icon";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Sun,
  Moon,
} from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: User,
  },
  {
    title: "Work",
    href: "/work",
    icon: Briefcase,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const { setMode } = useThemeMode();

  // Auto-close mobile drawer when route changes (render-phase state adjustment per React guidelines)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 20);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  const handleToggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextMode = isDark ? "light" : "dark";

    if (nextMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("flowbite-theme-mode", nextMode);
    document.dispatchEvent(
      new CustomEvent("flowbite-theme-mode-sync", { detail: nextMode })
    );

    try {
      setMode(nextMode);
    } catch {
      // Safe fallback if provider isn't ready
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        sticky
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Brand Logo (direct crisp badge, no nested box, no subtitle) */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 active:scale-95 shrink-0"
          >
            <Logo className="size-8 sm:size-9 shrink-0 transition-transform duration-200 group-hover:scale-105" />
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Build Vault
            </span>
          </Link>

          {/* Center: Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 shadow-xs backdrop-blur-xs">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs font-semibold"
                      : "text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right: Actions (Theme Toggle, GitHub, Mobile Menu Trigger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* GitHub Profile Button */}
            <a
              href="https://github.com/prakul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-xs cursor-pointer"
            >
              <GithubIcon className="size-5" />
            </a>

            {/* Seamless Dual Theme Switcher */}
            <button
              type="button"
              onClick={handleToggleTheme}
              aria-label="Toggle dark mode"
              className="inline-flex size-10 sm:size-11 items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-xs cursor-pointer"
            >
              <Sun className="size-5 hidden dark:block transition-transform duration-200 hover:rotate-45" />
              <Moon className="size-5 block dark:hidden transition-transform duration-200 hover:-rotate-12" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex md:hidden size-10 sm:size-11 items-center justify-center rounded-full border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/60 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 shadow-xs cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Card */}
        {isOpen && (
          <div className="md:hidden mt-3 p-3 rounded-2xl border border-zinc-200/80 dark:border-zinc-850 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg shadow-xl space-y-1.5 animate-in fade-in slide-in-from-top-4 duration-200">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white font-semibold shadow-xs"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="size-5 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  {isActive && (
                    <span className="size-2 rounded-full bg-white"></span>
                  )}
                </Link>
              );
            })}

            <div className="pt-2.5 mt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between px-2 text-xs text-zinc-500 dark:text-zinc-400">
              <a
                href="https://github.com/prakul"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 font-medium hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="size-4" />
                <span>github.com/prakul</span>
              </a>
              <span className="font-mono text-[11px]">Build Vault 2026</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
