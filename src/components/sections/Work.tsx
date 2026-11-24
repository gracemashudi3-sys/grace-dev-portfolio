import { projects } from "../../content/projects";
import type { Project } from "../../content/types";
import { splitProjects } from "../../lib/projects";
import {
  ProjectImage,
  ProjectLinks,
  ProjectTitleLink,
  StackChips,
} from "../projects/ProjectFacts";
import { SectionHeading } from "../ui/SectionHeading";

function FeaturedCard({ project, solo }: { project: Project; solo: boolean }) {
  return (
    <article
      className={`surface-card rounded-md border border-border bg-surface p-4 ${
        solo ? "grid gap-6 lg:grid-cols-2 lg:items-center" : ""
      }`}
    >
      <ProjectImage name={project.name} imageSrc={project.imageSrc} />
      <div>
        <p className={`text-xs text-muted ${solo ? "mt-4 lg:mt-0" : "mt-4"}`}>
          {project.eyebrow}
        </p>
        <h3 className="mt-1 text-lg font-semibold text-ink">
          <ProjectTitleLink project={project} />
        </h3>
        <p className="mt-2 text-ink">{project.summary}</p>
        <p className="mt-2 text-sm text-muted">{project.description}</p>
        {project.role ? (
          <p className="mt-2 text-sm text-muted">Role: {project.role}</p>
        ) : null}
        <div className="mt-4">
          <StackChips stack={project.stack} />
        </div>
        <div className="mt-4">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

function MoreWork({ projects: more }: { projects: Project[] }) {
  return (
    <div className="mt-12">
      <h3 className="text-sm font-semibold text-ink">More work</h3>
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border text-muted">
              <th scope="col" className="py-2 pr-4 font-medium">
                Project
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                What it does
              </th>
              <th scope="col" className="py-2 pr-4 font-medium">
                Stack
              </th>
              <th scope="col" className="py-2 font-medium">
                Links
              </th>
            </tr>
          </thead>
          <tbody>
            {more.map((project) => (
              <tr key={project.slug} className="border-b border-border">
                <td className="py-3 pr-4 text-ink">
                  <ProjectTitleLink project={project} />
                </td>
                <td className="py-3 pr-4 text-muted">{project.summary}</td>
                <td className="py-3 pr-4">
                  <StackChips stack={project.stack} />
                </td>
                <td className="py-3">
                  <ProjectLinks project={project} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="mt-4 flex flex-col gap-4 md:hidden">
        {more.map((project) => (
          <li
            key={project.slug}
            className="surface-card rounded-md border border-border bg-surface px-4 py-4"
          >
            <h4 className="font-semibold text-ink">
              <ProjectTitleLink project={project} />
            </h4>
            <p className="mt-2 text-sm text-muted">{project.summary}</p>
            <div className="mt-3">
              <StackChips stack={project.stack} />
            </div>
            <div className="mt-3">
              <ProjectLinks project={project} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Work() {
  const { featured, rest } = splitProjects(projects);

  if (featured.length === 0 && rest.length === 0) {
    return null;
  }

  return (
    <section id="work" className="section-block">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Work</SectionHeading>
        {featured.length > 0 ? (
          <ul
            className={
              featured.length > 1 ? "mt-8 grid gap-4 lg:grid-cols-2" : "mt-8"
            }
          >
            {featured.map((project) => (
              <li key={project.slug}>
                <FeaturedCard project={project} solo={featured.length === 1} />
              </li>
            ))}
          </ul>
        ) : null}
        {rest.length > 0 ? <MoreWork projects={rest} /> : null}
      </div>
    </section>
  );
}
