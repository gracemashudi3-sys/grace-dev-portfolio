import { skillGroups } from "../../content/skills";

export function Skills() {
  return (
    <section id="skills" className="section-block">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-ink">Skills</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id}>
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
