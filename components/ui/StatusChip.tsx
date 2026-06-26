import { profile } from "@/data/profile";

/** Availability chip. Color is paired with text + a labelled dot (not color-only). */
export function StatusChip() {
  const open = profile.availability.open;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-text-muted">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        )}
        <span
          className={
            "relative inline-flex h-2 w-2 rounded-full " +
            (open ? "bg-accent" : "bg-text-faint")
          }
        />
      </span>
      <span className="uppercase tracking-[0.14em]">{profile.availability.label}</span>
    </span>
  );
}
