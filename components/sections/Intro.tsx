import { Statement } from "@/components/ui/Statement";
import { LiquidMark } from "@/components/fx/LiquidMark";
import { GlassPanel } from "@/components/fx/GlassPanel";
import { profile } from "@/data/profile";

/**
 * First screen: liquid-metal monogram, the main statement and a glass panel with the CTA.
 * The shader gradient lives behind the whole page (PageBackground).
 */
export function Intro() {
  return (
    <section id="top" aria-labelledby="intro-heading" className="relative">
      <div className="flex min-h-[88svh] w-full flex-col pb-20 pt-8 sm:pt-10">
        <div className="flex items-start justify-between gap-6">
          <LiquidMark size={96} className="-ml-2 -mt-2 sm:size-[120px]" />
          <nav aria-label="Sections" className="hidden pt-4 meta-nav md:flex md:gap-8">
            <a href="#work" className="transition-colors hover:text-accent">work</a>
            <a href="#experience" className="transition-colors hover:text-accent">experience</a>
            <a href="#contact" className="transition-colors hover:text-accent">contact</a>
          </nav>
          <p className="pt-3 text-right text-[15px] leading-snug text-text-muted">
            <span className="font-medium text-text">{profile.shortName}</span>
            <br />
            {profile.role.toLowerCase()}
            <br />
            {profile.locationShort}
          </p>
        </div>

        <div className="my-auto pt-14 sm:pt-16">
          <h1 id="intro-heading" className="sr-only">
            {profile.name} — {profile.role}
          </h1>
          <Statement text={profile.headline} />

          <div className="mt-10 flex flex-wrap items-end justify-between gap-6 sm:ml-[14%]">
            <GlassPanel className="w-full sm:max-w-md" padding="20px 22px" cornerRadius={22}>
              <p className="text-[15px] leading-snug text-text-muted">{profile.tagline}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary link-arrow">
                  <span>email me</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-[15px] text-text-muted"
                >
                  résumé
                </a>
              </div>
            </GlassPanel>
            <a href="#about" className="link-arrow hidden items-center gap-2 text-sm text-text-muted sm:inline-flex">
              <span>scroll</span>
              <span aria-hidden="true" className="rotate-90">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
