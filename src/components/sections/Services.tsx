import { services } from "../../content/services";

export function Services() {
  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="section-block">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-ink">Services</h2>
        <ul className="mt-8 grid gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="surface-card rounded-md border border-border bg-surface px-4 py-5"
            >
              <h3 className="font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-muted">{service.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
