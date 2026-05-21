"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Check, FileText } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AboutModal } from "@/components/sections/about";
import { SPRING_SNAPPY } from "@/lib/motion-config";
import { cn } from "@/lib/utils";

// ─── Config ──────────────────────────────────────────────────────────────────

const EMAIL = "djibrilla.boubacar.502@gmail.com";
const GITHUB_URL = "https://github.com/bixzare";
const LINKEDIN_URL = "https://www.linkedin.com/in/djibrilla/";
const COPY_FEEDBACK_MS = 2000;

// ─── Component ───────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  // Track scroll position for the subtle border reveal
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy-to-clipboard with feedback
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // Fallback for older browsers / insecure contexts
      const textarea = document.createElement("textarea");
      textarea.value = EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_MS);
    }
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      aria-label="Primary navigation"
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md transition-[border-color,background-color] duration-300",
        "bg-background/60",
        scrolled
          ? "border-b border-border/50"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex min-h-14 max-w-5xl items-center justify-between gap-2 px-3 py-2 sm:px-6">
        {/* ── Left: Name & About Modal ── */}
        <AboutModal>
          <a href="#" className="min-w-0 flex-1 items-center outline-none sm:flex-none">
            <InteractiveHoverButton hoverText="About me" className="max-w-[9.5rem] truncate text-sm sm:max-w-none sm:text-base">
              Djibrilla Boubacar
            </InteractiveHoverButton>
          </a>
        </AboutModal>

        {/* ── Right: Actions ── */}
        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          {/* Resume */}
          <a
            href="/resume/Djibrilla%20Boubacar%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/20 hover:text-primary sm:size-8 [&_svg]:size-4"
            aria-label="View Resume"
          >
            <FileText />
          </a>

          {/* GitHub */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/20 hover:text-primary sm:size-8 [&_svg]:size-4"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>

          {/* LinkedIn */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/20 hover:text-primary sm:size-8 [&_svg]:size-4"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>

          {/* Copy Email */}
          <button
            type="button"
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/20 hover:text-primary sm:size-8 [&_svg]:size-4"
            onClick={copyEmail}
            aria-label={copied ? "Email copied" : "Copy email address"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {copied ? (
                <motion.span
                  key="check"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={SPRING_SNAPPY}
                  className="text-emerald-500 flex items-center justify-center h-full w-full"
                >
                  <Check />
                </motion.span>
              ) : (
                <motion.span
                  key="mail"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={SPRING_SNAPPY}
                  className="flex items-center justify-center h-full w-full"
                >
                  <Mail />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Theme Toggle */}
          <AnimatedThemeToggler
            className="inline-flex size-9 cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-primary/20 hover:text-primary sm:size-8 [&_svg]:size-4"
            variant="circle"
          />
        </div>
      </div>
    </motion.nav>
  );
}
