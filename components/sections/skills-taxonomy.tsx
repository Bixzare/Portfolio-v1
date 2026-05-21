"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Sparkles, Server, CodeXml } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { STAGGER_CONTAINER, FADE_UP, SPRING } from "@/lib/motion-config";

const TAXONOMY = [
  {
    category: "Applied ML & Vision",
    description: "Architecting decoupled, asynchronous computer vision pipelines and deep learning models.",
    skills: ["PyTorch", "OpenCV", "Scikit-Learn", "Bias Mitigation"],
    icon: Sparkles,
  },
  {
    category: "MLOps & Architecture",
    description: "Designing resilient, scalable infrastructure for model deployment and multi-agent workflows.",
    skills: ["Docker", "CI/CD", "MLflow", "Agentic Workflows"],
    icon: Server,
  },
  {
    category: "Core Engineering",
    description: "Building high-performance, accessible, and dynamic user interfaces.",
    skills: ["Python", "TypeScript", "Next.js", "Tailwind CSS"],
    icon: CodeXml,
  },
];

function SkillOrb({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-full border border-primary/25 shadow-[0_8px_30px_-18px_var(--primary)] ring-1 ring-background/70 backdrop-blur-sm transition-transform hover:scale-110 [&>img]:h-[68%] [&>img]:w-[68%] [&>img]:object-contain"
      style={{
        background:
          "radial-gradient(circle at 35% 28%, color-mix(in oklch, var(--primary) 34%, white 24%) 0%, color-mix(in oklch, var(--primary) 24%, transparent) 48%, color-mix(in oklch, var(--primary) 14%, transparent) 100%)",
      }}
    >
      {children}
    </div>
  );
}

export function SkillsTaxonomy() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:h-screen lg:max-h-screen"
    >
      <div className="mx-auto w-full max-w-6xl items-center lg:grid lg:grid-cols-2 lg:gap-16">
        
        {/* Left Column: Taxonomy Grid */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="z-10 flex flex-col gap-6 lg:gap-8"
        >
          <div className="mb-4 lg:mb-8">
            <motion.p variants={FADE_UP} transition={SPRING} className="text-primary mb-2 text-sm font-medium tracking-widest uppercase">
              The Architecture
            </motion.p>
            <motion.h2 variants={FADE_UP} transition={SPRING} className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Core Competencies
            </motion.h2>
          </div>

          <div className="flex flex-col gap-4">
            {TAXONOMY.map((item, i) => (
              <motion.div
                key={item.category}
                variants={FADE_UP}
                transition={SPRING}
                className="flex flex-col gap-4 rounded-2xl border border-border/50 bg-background/50 p-4 backdrop-blur transition-colors hover:border-primary/50 sm:p-6"
              >
                <div className="flex items-start gap-3 sm:items-center sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-foreground">{item.category}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Orbiting Visualization */}
        <div className="relative mx-auto mt-12 flex h-[320px] w-full max-w-[360px] origin-center scale-[0.78] transform items-center justify-center sm:mt-16 sm:h-[430px] sm:max-w-none sm:scale-75 lg:mt-0 lg:h-[600px] lg:scale-100">
          <OrbitingCircles iconSize={100} radius={0} className="border-none bg-transparent">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-primary/10 shadow-[0_0_30px_-5px_var(--primary)] backdrop-blur-md">
              <Image
                src="/logo/logo%20orange.png"
                alt="Portfolio logo"
                width={100}
                height={100}
                priority
                className="h-full w-full scale-125 object-cover dark:hidden"
              />
              <Image
                src="/logo/logo%20blue.png"
                alt="Portfolio logo"
                width={100}
                height={100}
                priority
                className="hidden h-full w-full scale-125 object-cover dark:block"
              />
            </div>
          </OrbitingCircles>

          {/* Inner Orbit */}
          <OrbitingCircles
            className="border-none bg-transparent"
            radius={80}
            duration={20}
            iconSize={32}
            reverse
          >
            <SkillOrb>
              <Image src="/icons/nextjs_icon_dark.svg" alt="Next.js" width={32} height={32} className="dark:invert" />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/tailwindcss.svg" alt="Tailwind CSS" width={32} height={32} />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/docker.svg" alt="Docker" width={32} height={32} />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/github_light.svg" alt="GitHub" width={32} height={32} className="dark:invert" />
            </SkillOrb>
          </OrbitingCircles>

          {/* Middle Orbit */}
          <OrbitingCircles
            className="border-none bg-transparent"
            radius={140}
            duration={30}
            iconSize={40}
          >
            <SkillOrb>
              <Image src="/icons/pytorch-svgrepo-com.svg" alt="PyTorch" width={40} height={40} />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/tensorflow-icon-light.svg" alt="TensorFlow" width={40} height={40} />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/supabase.svg" alt="Supabase" width={40} height={40} />
            </SkillOrb>
          </OrbitingCircles>

          {/* Outer Orbit */}
          <OrbitingCircles
            className="border-none bg-transparent"
            radius={210}
            duration={40}
            iconSize={48}
            reverse
          >
            <SkillOrb>
              <Image src="/icons/python.svg" alt="Python" width={48} height={48} />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/typescript.svg" alt="TypeScript" width={48} height={48} />
            </SkillOrb>
            <SkillOrb>
              <Image src="/icons/bash.svg" alt="Bash" width={48} height={48} />
            </SkillOrb>
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}
