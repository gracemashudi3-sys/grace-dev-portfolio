import { skillGroups } from "../../content/skills";
import { SectionHeading } from "../ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Skills</SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="surface-card rounded-md border border-border bg-surface px-4 py-5"
            >
              <h3 className="font-semibold text-ink">{group.title}</h3>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
