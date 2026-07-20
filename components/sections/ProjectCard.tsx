"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/projects";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={"shrink-0 transition-transform duration-250 " + (open ? "rotate-180" : "")}
  >
    <path d="m6 9 6 6 6-6" />
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
 * Card body links to the primary project URL (if any), while an explicit
 * "Подробнее" button expands an accessible accordion with highlights.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { title, summary, highlight, highlights, role, year, tags, links, featured } = project;
  const primaryHref = links.caseStudy || links.live || links.repo || "";
  const hasPrimary = Boolean(primaryHref);
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="card-glow group relative flex h-full flex-col rounded-card border border-border bg-surface p-6 transition-all duration-250 ease-out-soft hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-2">
      {/* Overlay link covers whole card without trapping inner controls (z-10) */}
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
        <div className="flex items-center gap-2">
          {featured && (
            <span className="relative z-10 rounded-full bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-accent-contrast">
              Избранное
            </span>
          )}
          {hasPrimary && (
            <span className="text-text-faint transition-colors group-hover:text-accent" aria-hidden="true">
              <ArrowIcon />
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-4 font-display text-h3 font-semibold text-text">{title}</h3>
      <p className="mt-1 font-mono text-xs text-text-muted">{role}</p>
      {highlight && (
        <p className="mt-2 font-mono text-sm font-semibold text-accent">{highlight}</p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-text-muted">{summary}</p>

      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Стек проекта">
        {tags.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      {highlights && highlights.length > 0 && (
        <div className="relative z-10 mt-5 border-t border-border pt-4">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded font-mono text-xs font-medium text-text-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
          >
            {open ? "Скрыть детали" : "Подробнее"}
            <ChevronIcon open={open} />
          </button>
          <div
            id={panelId}
            className={
              "grid transition-all duration-250 ease-out-soft " +
              (open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")
            }
          >
            <ul className="list-disc space-y-1.5 overflow-hidden pl-4 text-sm leading-relaxed text-text-muted">
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Explicit secondary links (over the overlay) */}
      {(links.live || links.repo) && (
        <div className="relative z-10 mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
          {links.live && <ExternalLink href={links.live} label="Demo" />}
          {links.repo && <ExternalLink href={links.repo} label="Код" />}
          {links.caseStudy && <ExternalLink href={links.caseStudy} label="Кейс" />}
        </div>
      )}
    </article>
  );
}
