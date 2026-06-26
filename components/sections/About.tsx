import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" headingId="about-heading" eyebrow="Обо мне" title="Коротко о подходе">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
            <div className="max-w-prose space-y-5 text-body-lg text-text-muted">
              {profile.about.map((para, i) => (
                <p key={`about-${i}`}>{para}</p>
              ))}
            </div>
        </Reveal>

        <Reveal delay={80}>
          <dl className="space-y-6 rounded-card border border-border bg-surface p-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">
                Локация
              </dt>
              <dd className="mt-1 text-text">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">
                Роль
              </dt>
              <dd className="mt-1 text-text">{profile.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.14em] text-text-faint">
                Стек
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {profile.stack.map((t, i) => (
                  <Tag key={`${t}-${i}`}>{t}</Tag>
                ))}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
