import type { Project } from "../content/types";

export function splitProjects(projects: readonly Project[]) {
  return {
    featured: projects.filter((project) => project.featured),
    rest: projects.filter((project) => !project.featured),
  };
}
