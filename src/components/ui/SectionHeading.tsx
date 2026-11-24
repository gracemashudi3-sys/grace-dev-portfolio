type SectionHeadingProps = {
  children: string;
};

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
      {children}
    </h2>
  );
}
