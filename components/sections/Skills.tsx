import { Section } from "@/components/ui/Section";
import { skillGroups, certifications, education } from "@/data/experience";
import { profile } from "@/data/profile";

/** Стек строками слева, образование в тёплой карточке справа, сдвинутой вниз. */
export function Skills() {
  return (
    <Section id="skills" title="стек и образование" className="pb-24 sm:pb-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
        <dl className="space-y-5">
          {skillGroups.map((g) => (
            <div key={g.label} className="grid grid-cols-1 gap-0.5 border-b border-border pb-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="text-sm text-text-faint sm:pt-0.5">{g.label}</dt>
              <dd className="text-base leading-relaxed text-text">{g.items.join(", ")}</dd>
            </div>
          ))}
          <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <dt className="text-sm text-text-faint sm:pt-0.5">языки</dt>
            <dd className="text-base text-text">{profile.languages.join(", ")}</dd>
          </div>
        </dl>

        <div className="lg:mt-10">
          <div className="rounded-card bg-surface p-7 shadow-soft">
            <p className="text-sm text-text-faint">образование</p>
            <ul className="mt-4 space-y-5">
              {education.map((e) => (
                <li key={e.school}>
                  <p className="font-display text-lg font-semibold leading-snug text-text">{e.degree}</p>
                  <p className="mt-1 text-sm text-text-muted">
                    {e.school} <span className="text-text-faint">· {e.period}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 px-1">
            <p className="text-sm text-text-faint">сертификаты</p>
            <ul className="mt-2 space-y-1 text-[15px]">
              {certifications.map((c) => (
                <li key={c.title} className="text-text">
                  {c.title} <span className="text-text-faint">· {c.meta}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
