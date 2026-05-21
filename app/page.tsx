import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import {
  Hero,
  ExpandableProjects,
  SkillsTaxonomy,
  SiteFooter,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Software engineering portfolio featuring machine learning, computer vision, applied AI, and full-stack projects by Djibrilla Boubacar.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const allProjects = getAllProjects();

  return (
    <>
      <Hero />
      <ExpandableProjects projects={allProjects} />
      <SkillsTaxonomy />
      <SiteFooter />
    </>
  );
}
