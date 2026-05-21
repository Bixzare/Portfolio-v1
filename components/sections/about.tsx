"use client";
import React from "react";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export function AboutModal({ children }: { children: React.ReactNode }) {
  return (
    <Modal>
      <ModalTrigger>{children}</ModalTrigger>
      <ModalBody>
        <ModalContent>
          <div className="flex flex-col gap-4 text-foreground">
            <h4 className="mb-2 text-2xl font-bold">About Me</h4>
            
            <div className="relative">
              <div className="mb-5 aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted shadow-md sm:float-right sm:mb-4 sm:ml-6 sm:w-44 md:w-52">
                <Image
                  src="/picture/photo.jpeg"
                  alt="Portrait of Djibrilla Boubacar"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                <p>
                  I strive to build systems that perceive their environment and reason through complex workflows. My engineering focus sits at the intersection of Agentic AI and Applied Computer Vision. I am drawn to these specific domains because they represent the highest leverage point in modern technology: engineering autonomous intelligence that optimizes processes and frees up human cognitive bandwidth for higher-order problems.
                </p>
                <p>
                  My architectural philosophy is largely empirical. When a system bottlenecks, I work backward from the source truth. I isolate the specific failure point to understand the root cause and engineer safeguards to prevent its recurrence. A system failure is just raw data for the next iteration; no error is wasted if it translates into a structural lesson.
                </p>
                <p>
                  Currently, I am applying this methodology to enterprise HealthTech. The objective is not just to build models in a vacuum, but to deploy robust, data-informed infrastructure into real-world clinical environments. I want to build systems that survive the friction of actual hospital deployment, adapt through live medical feedback, and ultimately ensure patients receive optimized, data-driven care.
                </p>
                <p>
                  Outside of work, I apply this same optimization mindset to my personal interests-whether that involves health and fitness, basketball, or video games. I am always looking for ways to translate my professional engineering discipline into personal growth.
                </p>
              </div>
            </div>
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
