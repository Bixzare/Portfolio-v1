"use client";

import { motion } from "motion/react";
import { SPRING, FADE_UP } from "@/lib/motion-config";
import { Mail, FileText, ExternalLink } from "lucide-react";

const LINKS = [
  {
    label: "Email",
    href: "mailto:djibrilla.boubacar.502@gmail.com",
    icon: Mail,
  },
  {
    label: "Resume",
    href: "/resume/Djibrilla%20Boubacar%20Resume.pdf",
    icon: FileText,
  },
  {
    label: "GitHub",
    href: "https://github.com/bixzare",
    icon: ExternalLink,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/djibrilla/",
    icon: ExternalLink,
  },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="border-border border-t px-4 py-20 sm:px-6 sm:py-24">
      <motion.div
        variants={FADE_UP}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        transition={SPRING}
        className="mx-auto max-w-4xl text-center"
      >
        <p className="text-muted-foreground mb-2 text-sm font-medium tracking-widest uppercase">
          Get in Touch
        </p>
        <h2 className="text-foreground text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Let&apos;s build something together.
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-md text-base leading-relaxed">
          Currently open to new opportunities, collaborations, and interesting
          conversations.
        </p>

        {/* Links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm font-medium transition-colors"
              whileHover={{ y: -2 }}
              transition={SPRING}
            >
              <Icon className="h-4 w-4" />
              {label}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-muted-foreground mt-16 text-xs">
          &copy; {new Date().getFullYear()} &middot; Crafted with care.
        </p>
      </motion.div>
    </footer>
  );
}
