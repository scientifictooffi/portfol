import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface-2 px-2.5 py-0.5 font-mono text-xs text-text-muted transition-colors duration-150 hover:border-accent/40 hover:bg-accent-soft hover:text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
