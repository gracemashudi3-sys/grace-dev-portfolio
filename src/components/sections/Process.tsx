import { processSteps } from "../../content/process";

export function Process() {
  return (
    <section id="process" className="section-block">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-ink">Process</h2>
        <ol className="mt-8 flex max-w-2xl flex-col gap-6">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3"
            >
              <span
                className="text-sm font-semibold text-accent"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
