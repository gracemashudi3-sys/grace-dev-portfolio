import { about } from "../../content/about";

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-ink">About</h2>
        <div className="mt-4 max-w-2xl space-y-4">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {about.facts.map((fact) => (
            <div
              key={fact.label}
              className="surface-card rounded-md border border-border bg-surface px-4 py-3"
            >
              <dt className="text-xs text-muted">{fact.label}</dt>
              <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
