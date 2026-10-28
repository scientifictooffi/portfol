import { Section } from "@/components/ui/Section";
import { profile } from "@/data/profile";

/** Первый абзац крупно и широко, остальные уже и сдвинуты вправо. */
export function About() {
  const [lead, ...rest] = profile.about;
  return (
    <Section id="about" title="обо мне" className="pb-24 pt-6 sm:pb-32">
      <p className="max-w-[46rem] font-display text-xl font-medium leading-[1.5] text-text sm:text-[1.6rem]">{lead}</p>
      <div className="mt-10 max-w-[38rem] space-y-5 text-[1.05rem] leading-[1.65] text-text-muted sm:ml-[22%]">
        {rest.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Section>
  );
}
