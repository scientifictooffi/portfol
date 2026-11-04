"use client";

import { useId, useState } from "react";
import type { Project } from "@/data/projects";

/**
 * A project row that opens on hover, focus or tap and shows the same details
 * as the featured card: highlights, role and tags.
 */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const href = project.links.caseStudy || project.links.live || project.links.repo;
  const details = project.highlights && project.highlights.length > 0;

  return (
    <li
      className={`row -mx-4 rounded-2xl px-4 transition-all duration-300 ${open ? "bg-surface shadow-soft" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-baseline gap-4 py-5 text-left"
      >
        <span className="num w-8 shrink-0 pt-1 font-display text-lg text-text-faint">{String(index).padStart(2, "0")}</span>
        <span className="flex-1">
          <span className="block font-display text-2xl text-text sm:text-[1.7rem]">{project.title}</span>
          <span className="mt-1 block max-w-prose text-[15px] leading-relaxed text-text-muted">{project.summary}</span>
        </span>
        <span className="hidden shrink-0 num text-sm text-text-faint sm:block">{project.year}</span>
      </button>

      <div
        id={panelId}
        className="grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-6 border-t border-border pb-6 pt-5 sm:ml-[2.6rem] lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div>
              {details ? (
                <>
                  <p className="meta">what I did</p>
                  <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed text-text">
                    {project.highlights!.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-[15px] leading-relaxed text-text-muted">{project.role}</p>
              )}
            </div>
            <div className="text-sm text-text-muted">
              <p className="meta">role</p>
              <p className="mt-2 text-text">{project.role}</p>
              <p className="mt-4 meta">stack</p>
              <p className="mt-2 text-text">{project.tags.join(" · ")}</p>
              <p className="mt-4 num text-sm text-text-faint sm:hidden">{project.year}</p>
              {href && (
                <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow mt-5 inline-flex items-center gap-1.5 text-text">
                  <span className="link">open</span>
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
