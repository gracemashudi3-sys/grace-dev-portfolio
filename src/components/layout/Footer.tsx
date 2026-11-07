import { site } from "../../content/site";

function isExternalHref(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-semibold text-ink">{site.name}</p>
          <p className="text-sm text-muted">{site.role}</p>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          {site.socials.map((social) => (
            <li key={social.label}>
              {isExternalHref(social.href) ? (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
                >
                  {social.label}
                </a>
              ) : (
                <span className="text-sm text-muted">{social.label}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
