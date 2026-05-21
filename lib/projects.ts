import projectsData from "@/data/projects.json";

// ─── Types ───────────────────────────────────────────────────────────────────

export type ProjectCategory = "featured" | "vault";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  tags: string[];
  stack: string[];
  thumbnail: string;
  images: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  year: number;
  featured: boolean;
  order: number;
}

// ─── Data Access (SSG-safe — runs at build time) ─────────────────────────────

/**
 * Returns all projects, sorted by `order` ascending.
 */
export function getAllProjects(): Project[] {
  return (projectsData as Project[]).sort((a, b) => a.order - b.order);
}

/**
 * Returns only projects marked as `featured: true`.
 */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

/**
 * Returns only projects in the "vault" category.
 */
export function getVaultProjects(): Project[] {
  return getAllProjects().filter((p) => p.category === "vault");
}

/**
 * Returns a single project by its `id`, or `null` if not found.
 */
export function getProjectById(id: string): Project | null {
  return getAllProjects().find((p) => p.id === id) ?? null;
}

/**
 * Returns all unique tags across all projects.
 */
export function getAllTags(): string[] {
  const tags = new Set<string>();
  getAllProjects().forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
