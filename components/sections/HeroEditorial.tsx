import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { StatusChip } from "@/components/ui/StatusChip";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";

const stats = [
  { value: "5 000+", label: "пользователей FBSM Live" },
  { value: "+30%", label: "рост engagement" },
  { value: "−20%", label: "время загрузки экрана" },
];

// Facts pulled straight from data/experience.ts — current role, for the HR strip.
const currentJob = experience[0];

// Value bullets for HR/recruiters — every claim traces to profile.ts / experience.ts.
const valuePoints = [
  "Production live-commerce на 5 000+ пользователей",
  "Интеграция платежей (EPAY)",
  "Realtime: стриминг и чат",
];

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m4 6 8 6 8-6M4 6h16v12H4V6Z" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0 text-accent">
    <path d="m20 6-11 11-5-5" />
  </svg>
);

/** Variant A — Editorial Statement (default). See design-system/hero-variants.md */
export function HeroEditorial() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* animated two-tone glow, decorative */}
      <div
        aria-hidden="true"
        className="float-glow pointer-events-none absolute -left-32 -top-40 h-[36rem] w-[36rem] rounded-full opacity-80 blur-3xl"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto w-full max-w-content px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pt-32">
        <div className="max-w-3xl">
          {/* HR-first strip: availability, location, current role — visible with zero scrolling */}
          <div
            className="flex animate-fade-up flex-wrap items-center gap-x-4 gap-y-2"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 font-mono text-xs text-accent">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="pulse-dot absolute inline-flex h-full w-full rounded-full text-accent" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
              </span>
              <span className="font-semibold uppercase tracking-[0.14em]">
                {profile.availability.label}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
              <PinIcon /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
              {currentJob.role} · {currentJob.company} ({currentJob.period})
            </span>
          </div>

          <h1
            id="hero-heading"
            className="mt-6 text-balance font-display text-display font-bold"
          >
            <span className="block animate-fade-up" style={{ animationDelay: "60ms" }}>
              {profile.name}
            </span>
            <span
              className="mt-2 block animate-fade-up text-text-muted"
              style={{ animationDelay: "120ms" }}
            >
              создаёт{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 right-0 -z-10 h-3 rounded-full bg-accent-soft"
                />
                <span className="gradient-text font-bold">{profile.accentWord}</span>
              </span>{" "}
              продукты.
            </span>
          </h1>

          <p
            className="mt-7 max-w-xl animate-fade-up text-body-lg text-text-muted"
            style={{ animationDelay: "180ms" }}
          >
            <span className="font-medium text-text">{profile.role}.</span>{" "}
            {profile.tagline}
          </p>

          {/* "Чем я полезен команде" — facts only, straight from experience/profile data */}
          <ul
            className="mt-6 flex animate-fade-up flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2"
            style={{ animationDelay: "210ms" }}
            aria-label="Чем я полезен команде"
          >
            {valuePoints.map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-text-muted">
                <CheckIcon />
                {v}
              </li>
            ))}
          </ul>

          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Button href={profile.resumeUrl} external>
              <DownloadIcon /> Скачать резюме (PDF)
            </Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              <MailIcon /> Написать на почту
            </Button>
            <Button href="#work" variant="ghost">
              Посмотреть проекты →
            </Button>
          </div>

          {/* Quick links + tech stack */}
          <div
            className="mt-8 flex animate-fade-up flex-wrap items-center gap-x-5 gap-y-2"
            style={{ animationDelay: "270ms" }}
          >
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded font-mono text-sm text-text-muted underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {s.label}
              </a>
            ))}
          </div>

          <ul
            className="mt-6 flex animate-fade-up flex-wrap gap-2"
            style={{ animationDelay: "300ms" }}
            aria-label="Технологии"
          >
            {profile.stack.map((t, i) => (
              <li key={`${t}-${i}`}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          <dl
            className="mt-12 grid animate-fade-up grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3"
            style={{ animationDelay: "360ms" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="group">
                <dt className="font-display text-2xl font-bold text-text transition-colors group-hover:text-accent sm:text-[2rem]">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
