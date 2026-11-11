type NotFoundPageProps = {
  title?: string;
  message?: string;
};

export function NotFoundPage({
  title = "Page not found",
  message = "That page is not on this site.",
}: NotFoundPageProps) {
  return (
    <main id="content">
      <section className="section-block">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">
            {title}
          </h1>
          <p className="mt-4 text-muted">{message}</p>
          <a
            href="/"
            className="btn btn-secondary mt-8 inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium text-ink"
          >
            Back home
          </a>
        </div>
      </section>
    </main>
  );
}
