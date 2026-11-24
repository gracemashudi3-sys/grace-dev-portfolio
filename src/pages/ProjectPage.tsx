import { useParams } from "react-router";
import {
  ProjectImage,
  ProjectLinks,
  StackChips,
} from "../components/projects/ProjectFacts";
import { projects } from "../content/projects";
import { findProjectBySlug } from "../lib/projects";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectPage() {
  const { slug } = useParams();
  const project = findProjectBySlug(projects, slug);

  if (!project) {
    return (
      <NotFoundPage
        title="Project not found"
        message="That project is not on this site."
      />
    );
  }

  return (
    <main id="content">
      <article className="section-block">
        <div className="mx-auto max-w-5xl">
          <p>
            <a
              href="/#work"
              className="text-sm text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
            >
              Back to work
            </a>
          </p>
          <p className="mt-6 text-xs text-muted">{project.eyebrow}</p>
          <h1 className="mt-1 text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink">{project.summary}</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
            <ProjectImage name={project.name} imageSrc={project.imageSrc} />
            <div>
              <p className="text-muted">{project.description}</p>
              {project.role ? (
                <p className="mt-4 text-sm text-muted">Role: {project.role}</p>
              ) : null}
              <div className="mt-6">
                <StackChips stack={project.stack} />
              </div>
              <div className="mt-6">
                <ProjectLinks project={project} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
