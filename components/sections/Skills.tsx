import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { skillGroups, certifications, education } from "@/data/experience";

/** Skills grouped by category, plus certifications and education. */
export function Skills() {
  return (
    <Section
      id="skills"
      headingId="skills-heading"
      eyebrow="Навыки"
      title="Стек, сертификаты и образование"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={group.label}>
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="space-y-8 rounded-card border border-border bg-surface p-6">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">
                Сертификаты
              </h3>
              <ul className="mt-3 space-y-2">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-text">{c.title}</span>
                    <span className="shrink-0 font-mono text-xs text-text-faint">{c.meta}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">
                Образование
              </h3>
              <ul className="mt-3 space-y-3">
                {education.map((e) => (
                  <li key={e.school} className="text-sm">
                    <p className="text-text">{e.degree}</p>
                    <p className="mt-0.5 text-xs text-text-muted">
                      {e.school} · {e.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
