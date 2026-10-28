import { Statement } from "@/components/ui/Statement";
import { profile } from "@/data/profile";

export function Intro() {
  return (
    <section id="top" aria-labelledby="intro-heading" className="flex min-h-[80svh] flex-col justify-center pb-16 pt-14 sm:pt-20">
      <p className="mb-7 text-[15px] text-text-muted">
        Привет, я <span className="font-medium text-text">{profile.shortName}</span>
        <span className="mx-2 text-text-dim">/</span>
        {profile.role.toLowerCase()}
        <span className="mx-2 text-text-dim">/</span>
        {profile.locationRu}
      </p>
      <h1 id="intro-heading" className="sr-only">
        {profile.name} — {profile.role}
      </h1>
      <Statement text={profile.headline} />
      {/* CTA сдвинут вправо от края текста — ломает ровную левую кромку */}
      <div className="mt-10 flex flex-wrap items-center gap-3 sm:ml-[18%]">
        <a href={`mailto:${profile.email}`} className="btn-primary link-arrow">
          <span>написать мне</span>
          <span aria-hidden="true">→</span>
        </a>
        <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="link text-[15px] text-text-muted">
          или посмотреть резюме
        </a>
      </div>
    </section>
  );
}
