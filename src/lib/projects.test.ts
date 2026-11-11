import { describe, expect, it } from "vitest";
import type { Project } from "../content/types";
import { findProjectBySlug, splitProjects } from "./projects";

function project(
  overrides: Partial<Project> & Pick<Project, "slug" | "featured">,
): Project {
  return {
    name: overrides.slug,
    eyebrow: "Java",
    summary: "A short summary.",
    description: "A longer description.",
    stack: ["Java"],
    ...overrides,
  };
}

describe("splitProjects", () => {
  it("puts featured projects on the card side and the rest in the table", () => {
    const { featured, rest } = splitProjects([
      project({ slug: "bank", featured: true }),
      project({ slug: "notes", featured: false }),
    ]);

    expect(featured.map((item) => item.slug)).toEqual(["bank"]);
    expect(rest.map((item) => item.slug)).toEqual(["notes"]);
  });

  it("returns empty lists when there are no projects", () => {
    expect(splitProjects([])).toEqual({ featured: [], rest: [] });
  });

  it("leaves the table empty when every project is featured", () => {
    const { featured, rest } = splitProjects([
      project({ slug: "bank", featured: true }),
    ]);

    expect(featured).toHaveLength(1);
    expect(rest).toHaveLength(0);
  });
});

describe("findProjectBySlug", () => {
  const projects = [
    project({ slug: "bank", featured: true }),
    project({ slug: "notes", featured: false }),
  ];

  it("returns the record whose slug matches", () => {
    expect(findProjectBySlug(projects, "bank")?.slug).toBe("bank");
  });

  it("returns undefined when the slug is missing or unknown", () => {
    expect(findProjectBySlug(projects, undefined)).toBeUndefined();
    expect(findProjectBySlug(projects, "missing")).toBeUndefined();
  });
});
