"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { X, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/social";
import type { Project } from "@/lib/projects";
import { SPRING, STAGGER_CONTAINER, FADE_UP } from "@/lib/motion-config";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ExpandableProjectsProps {
  projects: Project[];
}

export function ExpandableProjects({ projects }: ExpandableProjectsProps) {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <section id="work" className="relative px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div 
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <motion.p variants={FADE_UP} transition={SPRING} className="text-primary mb-2 text-sm font-medium tracking-widest uppercase">
            Selected Work
          </motion.p>
          <motion.h2 variants={FADE_UP} transition={SPRING} className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
            Projects & Experiments
          </motion.h2>
          <motion.p variants={FADE_UP} transition={SPRING} className="text-muted-foreground mt-3 max-w-lg text-base leading-relaxed">
            A deeper look into the architectures, pipelines, and products I've built.
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-[100]"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <div className="fixed inset-0 z-[101] grid place-items-center px-3 py-3 sm:px-4 sm:py-8 md:py-20">
              <motion.button
                key={`button-${active.id}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full border border-border bg-card shadow-lg lg:hidden"
                onClick={() => setActive(null)}
              >
                <X className="h-4 w-4 text-foreground" />
              </motion.button>
              
              <motion.div
                layoutId={`card-${active.id}-${id}`}
                ref={ref}
                className="flex h-full max-h-[calc(100svh-1.5rem)] w-full max-w-[800px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:h-fit md:max-h-[90svh] sm:rounded-3xl"
              >
                <motion.div layoutId={`image-${active.id}-${id}`} className="group/carousel relative h-48 w-full shrink-0 sm:h-80">
                  {active.images && active.images.length > 0 ? (
                    <Carousel 
                      opts={{ loop: true }}
                      plugins={[Autoplay({ delay: 3000 })]}
                      className="w-full h-full"
                    >
                      <CarouselContent className="h-full ml-0">
                        {active.images.map((img, idx) => (
                          <CarouselItem key={idx} className="relative h-48 pl-0 sm:h-80">
                            <img
                              src={img}
                              alt={`${active.title} screenshot ${idx + 1}`}
                              className="w-full h-full object-cover object-top"
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 border-none bg-background/70 text-foreground opacity-100 backdrop-blur-md transition-opacity duration-300 hover:bg-background/80 disabled:opacity-0 sm:left-4 sm:opacity-0 sm:group-hover/carousel:opacity-100" />
                      <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 border-none bg-background/70 text-foreground opacity-100 backdrop-blur-md transition-opacity duration-300 hover:bg-background/80 disabled:opacity-0 sm:right-4 sm:opacity-0 sm:group-hover/carousel:opacity-100" />
                    </Carousel>
                  ) : (
                    <img
                      src={active.thumbnail}
                      alt={active.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </motion.div>

                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="flex shrink-0 flex-col gap-4 p-4 pb-3 sm:flex-row sm:items-start sm:justify-between sm:p-6 sm:pb-4">
                    <div className="min-w-0">
                      <motion.p
                        layoutId={`subtitle-${active.id}-${id}`}
                        className="text-primary text-xs font-semibold tracking-wider uppercase mb-1"
                      >
                        {active.subtitle}
                      </motion.p>
                      <motion.h3
                        layoutId={`title-${active.id}-${id}`}
                        className="text-foreground text-xl font-bold leading-tight sm:text-2xl"
                      >
                        {active.title}
                      </motion.h3>
                    </div>

                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex shrink-0 flex-wrap gap-2"
                    >
                      {active.liveUrl && (
                        <a
                          href={active.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 text-sm rounded-full font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                          <ExternalLink className="size-4" /> Live
                        </a>
                      )}
                      {active.repoUrl && (
                        <a
                          href={active.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 text-sm rounded-full font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors flex items-center gap-2"
                        >
                          <GitHubIcon className="size-4" /> Code
                        </a>
                      )}
                    </motion.div>
                  </div>
                  
                  <div className="relative flex-1 overflow-auto p-4 pt-0 [scrollbar-width:thin] sm:p-6 sm:pt-0">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-muted-foreground text-sm md:text-base flex flex-col gap-4"
                    >
                      {/* Render the long description paragraphs */}
                      {active.longDescription.split("\n\n").map((para, idx) => {
                        // Quick heuristic for Markdown headers
                        if (para.startsWith("### ")) {
                          return <h4 key={idx} className="mt-2 font-semibold text-foreground">{para.replace("### ", "")}</h4>;
                        }
                        return <p key={idx}>{para}</p>;
                      })}

                      <div className="mt-4 pt-4 border-t border-border">
                        <h4 className="text-foreground font-semibold mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {active.stack.map(tech => (
                            <span key={tech} className="bg-secondary text-secondary-foreground px-2.5 py-1 rounded-md text-xs font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <motion.ul 
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
        >
          {projects.map((card) => (
            <motion.li variants={FADE_UP} transition={SPRING} key={`li-${card.id}`} className="flex">
              <motion.div
                layoutId={`card-${card.id}-${id}`}
                onClick={() => setActive(card)}
                className="group w-full flex flex-col bg-card border border-border hover:border-primary/50 transition-colors rounded-2xl cursor-pointer overflow-hidden"
              whileHover={{ y: -4 }}
              transition={SPRING}
            >
              <motion.div layoutId={`image-${card.id}-${id}`} className="aspect-[16/10] w-full overflow-hidden shrink-0">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
              
              <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                <div>
                  <motion.p
                    layoutId={`subtitle-${card.id}-${id}`}
                    className="text-primary text-xs font-semibold tracking-wider uppercase mb-1"
                  >
                    {card.subtitle}
                  </motion.p>
                  <motion.h3
                    layoutId={`title-${card.id}-${id}`}
                    className="text-foreground text-lg font-bold leading-tight sm:text-xl"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.id}-${id}`}
                    className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                  {card.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary/50 text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {card.tags.length > 3 && (
                    <span className="text-muted-foreground px-1 py-0.5 text-xs font-medium">
                      +{card.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              </motion.div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
