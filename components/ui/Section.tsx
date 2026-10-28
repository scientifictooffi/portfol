import { cn } from "@/lib/cn";

/**
 * Секция без жёсткой сетки: подпись сверху, контент ниже.
 * Отступы задаются снаружи, чтобы ритм страницы не был одинаковым.
 */
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
