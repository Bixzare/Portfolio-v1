"use client";

import { motion } from "motion/react";
import { SPRING, FADE_UP, STAGGER_CONTAINER } from "@/lib/motion-config";
import { AuroraText } from "@/components/ui/aurora-text";

const AURORA_COLORS = ["#0F1FA7", "#FF5F01", "#10137B", "#FF8E18"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center px-4 py-20 sm:min-h-[100vh] sm:px-6 sm:py-32"
    >
      {/* ── Section Background Image ── */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none [mask-image:linear-gradient(to_bottom,white_40%,transparent_100%)]">
        <div className="absolute inset-0 bg-[url('/images/backgrounds/light.jpg')] dark:bg-[url('/images/backgrounds/dark.jpg')] bg-cover bg-center bg-no-repeat blur-xl opacity-90 dark:opacity-20 transition-all duration-700" />
      </div>
      <motion.div
        variants={STAGGER_CONTAINER}
        initial="initial"
        animate="animate"
        className="mx-auto w-full max-w-4xl"
      >
        {/* Eyebrow */}
        <motion.p
          variants={FADE_UP}
          transition={SPRING}
          className="text-muted-foreground mb-4 text-xs font-medium uppercase tracking-[0.18em] sm:text-sm sm:tracking-widest"
        >
          Machine Learning & AI Engineer
        </motion.p>

        {/* Main heading — massive typography */}
        <motion.h1
          variants={FADE_UP}
          transition={SPRING}
          className="text-foreground text-[clamp(2.7rem,15vw,4.5rem)] font-bold leading-[1.04] tracking-tight sm:text-7xl md:text-8xl"
        >
          <AuroraText colors={AURORA_COLORS} speed={0.8}>Building</AuroraText>{" "}
          things
          <br />
          that <AuroraText colors={AURORA_COLORS} speed={0.8}>matter.</AuroraText>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={FADE_UP}
          transition={SPRING}
          className="text-muted-foreground mt-6 max-w-xl text-base leading-relaxed sm:mt-8 sm:text-xl"
        >
          I engineer scalable AI infrastructure, turning complex data and agentic workflows into functional, production-ready systems.
        </motion.p>
      </motion.div>
    </section>
  );
}
