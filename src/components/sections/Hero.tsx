import { hero } from "../../content/hero";
import { Chip } from "../ui/Chip";

export function Hero() {
  return (
    <section id="hero" className="section-block">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(16rem,0.7fr)] lg:items-end">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            {hero.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink sm:text-xl">
            {hero.headline}
          </p>
          <p className="mt-4 max-w-xl text-muted">{hero.supporting}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="btn btn-primary inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-canvas"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="btn btn-secondary inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <ul
          aria-label="Working with"
          className="flex flex-wrap gap-2 lg:justify-end"
        >
          {hero.chips.map((chip) => (
            <li key={chip}>
              <Chip>{chip}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
