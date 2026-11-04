import { Section } from "@/components/ui/Section";
import { ProjectRow } from "@/components/ui/ProjectRow";
import { projects } from "@/data/projects";

/** Featured project as a large card, the rest as rows that expand on hover. */
export function Projects() {
  const [main, ...rest] = projects;
  const mainHref = main.links.caseStudy || main.links.live || main.links.repo;

  return (
    <Section id="work" title="selected work" className="pb-28 sm:pb-36">
      <article className="grid grid-cols-1 gap-6 rounded-card bg-surface p-7 shadow-soft sm:p-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div>
          <p className="num font-display text-lg text-text-faint">01 · {main.year}</p>
          <h3 className="mt-2 font-display text-4xl leading-[1.05] text-text sm:text-5xl">{main.title}</h3>
          <p className="mt-4 max-w-prose text-[1.05rem] leading-[1.6] text-text-muted">{main.summary}</p>
          {mainHref && (
            <a href={mainHref} target="_blank" rel="noopener noreferrer" className="link-arrow mt-6 inline-flex items-center gap-1.5 text-text">
              <span className="link">open</span>
              <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
        <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-1">
          <p className="meta">what I did</p>
          <ul className="mt-3 space-y-3 text-[15px] leading-relaxed text-text">
            {(main.highlights ?? []).map((h, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                {h}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-text-faint">{main.role}</p>
          <p className="mt-1 text-sm text-text-faint">{main.tags.join(" · ")}</p>
        </div>
      </article>

      <ul className="mt-8 sm:ml-[14%]">
        {rest.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i + 2} />
        ))}
      </ul>
    </Section>
  );
}
