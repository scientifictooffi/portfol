import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

/** Standard section shell: rhythm, container, optional eyebrow + heading. */
export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
  headingId,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  headingId?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-20 sm:py-28 lg:py-36", className)}
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        {(eyebrow || title) && (
          <header className="mb-10 sm:mb-14">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2
                id={headingId}
                className="mt-3 max-w-2xl text-balance font-display text-h2 font-semibold"
              >
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
