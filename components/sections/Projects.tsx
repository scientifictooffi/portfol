import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="work"
      headingId="work-heading"
      eyebrow="Избранное"
      title="Проекты, которыми я горжусь"
    >
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={(i % 3) * 70} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          </li>
        ))}
      </ul>
      <p className="mt-8 font-mono text-xs text-text-faint">
        {/* helper note — удалите после заполнения data/projects.json */}
        ↳ Карточки-заглушки. Контент — в <code>data/projects.json</code>.
      </p>
    </Section>
  );
}
