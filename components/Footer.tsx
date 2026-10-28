import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-page px-5 sm:px-8">
      <div className="flex flex-col gap-3 border-t border-border py-10 mt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex gap-5">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
                {s.label.toLowerCase()}
              </a>
            </li>
          ))}
          <li>
            <a href="#top" className="link">
              наверх
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
