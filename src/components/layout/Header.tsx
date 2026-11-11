import { site } from "../../content/site";
import { NairobiClock } from "./NairobiClock";
import { StatusPill } from "./StatusPill";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Process", href: "/#process" },
  { label: "Skills", href: "/#skills" },
  { label: "Work", href: "/#work" },
  { label: "Contact", href: "/#contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 sm:contents">
          <a
            href="/#hero"
            className="shrink-0 font-semibold tracking-tight text-ink"
          >
            {site.name}
          </a>
          <div className="flex flex-wrap items-center gap-3 sm:order-3 sm:shrink-0">
            <StatusPill label={site.status.label} />
            <NairobiClock key={site.timezone} timeZone={site.timezone} />
          </div>
        </div>
        <nav
          aria-label="Sections"
          className="flex flex-wrap gap-x-4 gap-y-1 sm:order-2 sm:min-w-0 sm:flex-1 sm:justify-center"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-1 text-sm text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
