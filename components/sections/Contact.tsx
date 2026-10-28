import { Section } from "@/components/ui/Section";
import { CopyButton } from "@/components/ui/CopyButton";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" title="контакты" className="pb-20 sm:pb-24">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <p className="font-display text-2xl font-semibold leading-[1.3] text-text sm:text-[2rem]">{profile.contactNote}</p>
        <div className="lg:pt-2">
          <div className="flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary link-arrow">
              <span>{profile.email}</span>
              <span aria-hidden="true">→</span>
            </a>
            <CopyButton value={profile.email} />
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
            {profile.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="link text-text-muted">
                  {s.label.toLowerCase()}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="link text-text-muted">
                резюме (pdf)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
