import { Section } from "@/components/ui/Section";
import { experience } from "@/data/experience";

/** Текущее место крупно и подробно, прошлые — сжато в две колонки. */
export function Experience() {
  const current = experience.find((e) => e.current) ?? experience[0];
  const past = experience.filter((e) => e !== current);

  return (
    <Section id="experience" title="опыт" className="pb-24 sm:pb-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[10rem_1fr] lg:gap-14">
        <div>
          <p className="font-display text-lg font-semibold text-text">{current.period}</p>
          <span className="mt-2 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
            сейчас
          </span>
          {current.location && <p className="mt-3 text-sm text-text-faint">{current.location}</p>}
        </div>
        <div className="max-w-[44rem]">
          <h3 className="font-display text-2xl font-semibold leading-tight text-text sm:text-3xl">
            {current.role}
            <span className="text-text-muted"> в {current.company}</span>
          </h3>
          <ul className="mt-6 space-y-3 text-[1.05rem] leading-[1.6] text-text-muted">
            {current.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.75em] h-px w-3 shrink-0 bg-accent" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="label mt-20 mb-6 sm:mt-24">до этого</p>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3">
        {past.map((item) => (
          <li key={`${item.company}-${item.period}`}>
            <p className="text-sm text-text-faint">{item.period}</p>
            <p className="mt-1 font-display font-semibold text-text">
              {item.role}
              <span className="font-medium text-text-muted">, {item.company}</span>
            </p>
            <p className="mt-2 text-[15px] leading-relaxed text-text-muted">{item.bullets[0]}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
