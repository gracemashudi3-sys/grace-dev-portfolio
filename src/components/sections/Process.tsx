import { processSteps } from "../../content/process";
import { SectionHeading } from "../ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-block">
      <div className="mx-auto max-w-5xl">
        <SectionHeading>Process</SectionHeading>
        <ol className="mt-8 grid gap-4 lg:grid-cols-2">
          {processSteps.map((step, index) => {
            const spanLast =
              index === processSteps.length - 1 &&
              processSteps.length % 2 === 1;
            return (
              <li
                key={step.title}
                className={`surface-card rounded-md border border-border bg-surface px-4 py-5 ${
                  spanLast ? "lg:col-span-2" : ""
                }`}
              >
                <span
                  className="text-sm font-semibold text-accent"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
