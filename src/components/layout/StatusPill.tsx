type StatusPillProps = {
  label: string;
};

export function StatusPill({ label }: StatusPillProps) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-ink">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {label}
    </p>
  );
}
