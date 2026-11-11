import type { Project } from "../content/types";

export function splitProjects(projects: readonly Project[]) {
  return {
    featured: projects.filter((project) => project.featured),
    rest: projects.filter((project) => !project.featured),
  };
}

export function projectPath(slug: string) {
  return `/projects/${slug}`;
}

export function findProjectBySlug(
  projects: readonly Project[],
  slug: string | undefined,
) {
  if (!slug) {
    return undefined;
  }

  return projects.find((project) => project.slug === slug);
}
