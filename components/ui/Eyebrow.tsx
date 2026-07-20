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
        "inline-block border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-[0.16em] text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
