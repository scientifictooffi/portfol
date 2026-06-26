import Link from "next/link";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

function ExternalLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center gap-1 rounded font-mono text-xs text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
    >
      {label} <ArrowIcon />
    </Link>
  );
}

/**
 * Whole card is one link (primary target = case study, else live, else repo).
 * If no links are filled yet, the card renders as a non-interactive placeholder.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, role, year, tags, links } = project;
  const primaryHref = links.caseStudy || links.live || links.repo || "";
  const hasPrimary = Boolean(primaryHref);

  return (
    <article className="group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-250 ease-out-soft hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-2">
      {/* Overlay link covers whole card without trapping inner links (z-10) */}
      {hasPrimary && (
        <Link
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} — открыть проект`}
          className="absolute inset-0 z-0 rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-xs text-text-faint">{year}</span>
        {hasPrimary && (
          <span className="text-text-faint transition-colors group-hover:text-accent" aria-hidden="true">
            <ArrowIcon />
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-h3 font-semibold text-text">{title}</h3>
      <p className="mt-1 font-mono text-xs text-text-muted">{role}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Стек проекта">
        {tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      {/* Explicit secondary links (over the overlay) */}
      {(links.live || links.repo) && (
        <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
          {links.live && <ExternalLink href={links.live} label="Demo" />}
          {links.repo && <ExternalLink href={links.repo} label="Код" />}
          {links.caseStudy && <ExternalLink href={links.caseStudy} label="Кейс" />}
        </div>
      )}
    </article>
  );
}
