import { cn } from "@/lib/cn";

/** Mono uppercase section label (design-system/MASTER.md §3). */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-xs uppercase tracking-[0.16em] text-text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
