import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { experience } from "@/data/experience";

/** Vertical timeline of work experience, newest first (data order). */
export function Experience() {
  return (
    <Section
      id="experience"
      headingId="experience-heading"
      eyebrow="Опыт"
      title="Где я работал и что делал"
    >
      <ol className="relative space-y-10 border-l border-border pl-8 sm:pl-10">
        {experience.map((item, i) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <Reveal delay={Math.min(i * 70, 280)}>
              <span
                aria-hidden="true"
                className="timeline-dot absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent sm:-left-[3.05rem]"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-h3 font-semibold text-text">
                  {item.company}
                </h3>
                <span className="font-mono text-xs text-text-faint">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-text-muted">{item.role}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-text-muted">
                {item.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
              {item.tags && item.tags.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Стек — ${item.company}`}>
                  {item.tags.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
