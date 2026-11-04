import { cn } from "@/lib/cn";

/** Section: caption on top, content below. Spacing is set by the caller so the page rhythm varies. */
export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("scroll-mt-8", className)}>
      <h2 id={headingId} className="label mb-8">
        {title}
      </h2>
      {children}
    </section>
  );
}
