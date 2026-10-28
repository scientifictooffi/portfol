import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

/** Главный проект крупно, остальные компактными строками. */
export function Projects() {
  const [main, ...rest] = projects;
  const mainHref = main.links.caseStudy || main.links.live || main.links.repo;

  return (
    <Section id="work" title="работы" className="pb-28 sm:pb-36">
      <article className="grid grid-cols-1 gap-6 rounded-card bg-surface p-7 shadow-soft sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <p className="text-sm text-text-faint">{main.year}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-text sm:text-4xl">{main.title}</h3>
          <p className="mt-4 max-w-prose text-[1.05rem] leading-[1.6] text-text-muted">{main.summary}</p>
          {mainHref && (
            <a href={mainHref} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6 inline-flex items-center gap-1.5 text-text">
              <span className="link">открыть</span>
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
        <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
          <p className="text-sm text-text-faint">что сделал</p>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-text">
            {(main.highlights ?? []).map((h, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-text-faint">{main.role}</p>
        </div>
      </article>

      <ul className="mt-6 sm:ml-[18%]">
        {rest.map((p) => {
          const href = p.links.caseStudy || p.links.live || p.links.repo;
          const inner = (
            <>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-lg font-semibold text-text">{p.title}</h3>
                <span className="shrink-0 text-xs text-text-faint">{p.year}</span>
              </div>
              <p className="mt-1 max-w-prose text-[15px] leading-relaxed text-text-muted">{p.summary}</p>
            </>
          );
          return (
            <li key={p.slug}>
              {href ? (
                <a href={href} target="_blank" rel="noopener noreferrer" className="row -mx-4 block cursor-pointer rounded-xl px-4 py-4">
                  {inner}
                </a>
              ) : (
                <div className="row -mx-4 rounded-xl px-4 py-4">{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
