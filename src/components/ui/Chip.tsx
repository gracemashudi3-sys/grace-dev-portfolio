type ChipProps = {
  children: string;
};

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-flex rounded-full border border-border bg-surface px-3 py-1 text-sm text-ink">
      {children}
    </span>
  );
}
