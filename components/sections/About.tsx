import { Section } from "@/components/ui/Section";
import { Portrait } from "@/components/ui/Portrait";
import { profile } from "@/data/profile";

/** Lead paragraph large with the portrait beside it; the rest narrower and pushed right. */
export function About() {
  const [lead, ...rest] = profile.about;
  return (
    <Section id="about" title="about" className="pb-24 pt-20 sm:pb-32 sm:pt-28">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <p className="max-w-[54rem] font-display text-2xl leading-[1.35] text-text sm:text-[2rem]">{lead}</p>
        <Portrait className="mx-auto w-[240px] sm:w-[300px] lg:mx-0 lg:w-full lg:max-w-[340px] lg:justify-self-end" />
      </div>
      <div className="mt-12 max-w-[44rem] space-y-5 text-[1.05rem] leading-[1.65] text-text-muted sm:ml-[22%]">
        {rest.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Section>
  );
}
