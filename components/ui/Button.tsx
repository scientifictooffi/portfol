import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded font-medium " +
  "transition-colors duration-150 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
  "disabled:opacity-50 disabled:pointer-events-none select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:bg-accent-hover",
  secondary:
    "bg-surface text-text border border-border hover:bg-surface-2 hover:border-border-strong",
  ghost: "text-text-muted hover:text-text hover:bg-surface-2",
};

// min 44px hit target (a11y) via padding/height
const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type AsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as AsLink;
    const ext = external || /^https?:|^mailto:/.test(href);
    return (
      <Link
        href={href}
        className={classes}
        {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...rest } = props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
