import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-content flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-text-faint">
          © <span suppressHydrationWarning>{"[год]"}</span> {profile.name}. Собрано на
          Next.js + Tailwind.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          {profile.socials
            .filter((s) => s.primary)
            .map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded font-mono text-xs text-text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {s.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  );
}
