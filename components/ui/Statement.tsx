"use client";

import { useEffect, useRef } from "react";

/**
 * Крупный текст, слова которого темнеют по мере прокрутки — как будто
 * читаешь вслед за строкой. Без библиотек: один scroll-listener + rAF.
 */
export function Statement({ text, id }: { text: string; id?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>(".w"));
    let raf = 0;

    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 — верх блока только вошёл во вьюпорт, 1 — блок доскроллен до верхней трети.
      const start = vh * 0.85;
      const end = vh * 0.3;
      const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height * 0.6)));
      const lit = Math.floor(p * spans.length * 1.15);
      spans.forEach((s, i) => {
        s.classList.toggle("on", i < lit);
        s.classList.toggle("half", i >= lit && i < lit + 3);
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [text]);

  return (
    <p ref={ref} id={id} className="statement">
      {words.map((w, i) => (
        <span key={i} className="w">
          {w.startsWith("*") && w.endsWith("*") ? <em>{w.slice(1, -1)}</em> : w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
