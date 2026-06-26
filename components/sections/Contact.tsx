import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" headingId="contact-heading" className="pb-28 lg:pb-36">
      <Reveal>
        <div className="rounded-card border border-border bg-surface p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            Контакты
          </p>
          <h2 id="contact-heading" className="mt-4 max-w-2xl text-balance font-display text-h1 font-bold">
            Обсудим ваш проект?
          </h2>
          <p className="mt-4 max-w-xl text-body-lg text-text-muted">
            Открыт для интересных задач и сотрудничества. Лучший способ связаться — почта
            или соцсети ниже.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
            {profile.resumeUrl && (
              <Button href={profile.resumeUrl} variant="secondary" external>
                Резюме / CV
              </Button>
            )}
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded font-mono text-sm text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                >
                  {s.label}
                  <span className="text-text-faint transition-colors group-hover:text-accent" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
