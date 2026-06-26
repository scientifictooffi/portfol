import { Button } from "@/components/ui/Button";
import { StatusChip } from "@/components/ui/StatusChip";
import { profile } from "@/data/profile";

/**
 * Variant B — Terminal Split. Swap into app/page.tsx in place of HeroEditorial.
 * The code card is decorative (aria-hidden) so AT reads the statement only.
 */
export function HeroTerminal() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24 lg:grid-cols-2 lg:items-center lg:pt-28">
        {/* Statement */}
        <div className="max-w-xl">
          <StatusChip />
          <h1 id="hero-heading" className="mt-6 text-balance font-display text-display font-bold">
            {profile.name}
          </h1>
          <p className="mt-3 text-h3 font-medium">
            <span className="text-accent">{profile.accentWord}</span> · {profile.role}
          </p>
          <p className="mt-6 max-w-md text-body-lg text-text-muted">{profile.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#work">Смотреть работы →</Button>
            <Button href="#contact" variant="secondary">
              Связаться
            </Button>
          </div>
        </div>

        {/* Decorative code card */}
        <div
          aria-hidden="true"
          className="overflow-hidden rounded-card border border-border bg-surface shadow-[0_24px_60px_-30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-text-faint/40" />
            <span className="h-3 w-3 rounded-full bg-text-faint/40" />
            <span className="h-3 w-3 rounded-full bg-text-faint/40" />
            <span className="ml-2 font-mono text-xs text-text-faint">profile.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-text-muted">
            <code>
              <span className="text-accent">const</span> me = {"{"}
              {"\n"}  name: <span className="text-text">&quot;{profile.name}&quot;</span>,
              {"\n"}  role: <span className="text-text">&quot;{profile.role}&quot;</span>,
              {"\n"}  stack: [{profile.stack.slice(0, 4).map((s) => `"${s}"`).join(", ")}],
              {"\n"}  open: <span className="text-accent">{String(profile.availability.open)}</span>,
              {"\n"}
              {"}"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
