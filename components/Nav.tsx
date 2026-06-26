"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Работы" },
  { href: "#about", label: "Обо мне" },
  { href: "#contact", label: "Контакты" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 border-b transition-colors duration-300 " +
        (scrolled
          ? "border-border bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-transparent")
      }
    >
      <nav
        aria-label="Основная навигация"
        className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="#top"
          className="rounded font-mono text-sm font-semibold tracking-tight text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          {/* initials from name placeholder */}
          {profile.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="rounded px-3 py-2 text-sm text-text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
