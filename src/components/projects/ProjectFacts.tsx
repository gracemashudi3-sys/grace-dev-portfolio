import { useState } from "react";
import { Link } from "react-router";
import type { Project } from "../../content/types";
import { projectPath } from "../../lib/projects";
import { Chip } from "../ui/Chip";

function isExternalHref(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function ProjectTitleLink({ project }: { project: Project }) {
  return (
    <Link
      to={projectPath(project.slug)}
      className="underline decoration-border underline-offset-4 hover:decoration-accent"
    >
      {project.name}
    </Link>
  );
}

export function ProjectLinks({ project }: { project: Project }) {
  const links: { label: string; href: string }[] = [];

  if (project.liveUrl && isExternalHref(project.liveUrl)) {
    links.push({ label: "Live", href: project.liveUrl });
  }

  if (project.sourceUrl && isExternalHref(project.sourceUrl)) {
    links.push({ label: "Source", href: project.sourceUrl });
  }

  if (links.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function StackChips({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((item) => (
        <li key={item}>
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}

export function ProjectImage({
  name,
  imageSrc,
}: {
  name: string;
  imageSrc?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!imageSrc || failed) {
    return (
      <div
        aria-hidden="true"
        className="aspect-video rounded-md border border-border bg-canvas"
      />
    );
  }

  return (
    <img
      src={imageSrc}
      alt={name}
      className="aspect-video w-full rounded-md border border-border object-cover"
      onError={() => setFailed(true)}
    />
  );
}
