import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { StatusChip } from "@/components/ui/StatusChip";
import { profile } from "@/data/profile";

/** Variant A — Editorial Statement (default). See design-system/hero-variants.md */
export function HeroEditorial() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      {/* faint static accent glow, decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-40 h-[36rem] w-[36rem] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent-soft), transparent)" }}
      />
      <div className="relative mx-auto w-full max-w-content px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:pt-32">
        <div className="max-w-3xl">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <StatusChip />
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
              <span className="text-accent">{profile.accentWord}</span>{" "}
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

          <div
            className="mt-9 flex animate-fade-up flex-wrap items-center gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Button href="#work">Смотреть работы →</Button>
            <Button href="#contact" variant="secondary">
              Связаться
            </Button>
          </div>

          <ul
            className="mt-10 flex animate-fade-up flex-wrap gap-2"
            style={{ animationDelay: "300ms" }}
            aria-label="Технологии"
          >
            {profile.stack.map((t, i) => (
              <li key={`${t}-${i}`}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
