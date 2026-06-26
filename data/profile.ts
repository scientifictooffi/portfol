/**
 * ──────────────────────────────────────────────────────────────────────────
 *  PROFILE — единственное место для личных данных.
 *  Замените значения в [квадратных скобках] и поля, помеченные TODO.
 *  Ничего не выдумано: всё, что нужно заполнить, — явный placeholder.
 * ──────────────────────────────────────────────────────────────────────────
 */

export type SocialLink = {
  label: string;
  href: string;
  /** показывать в футере/контактах */
  primary?: boolean;
};

export type Profile = {
  name: string;
  role: string;
  /** короткая фраза-позиционирование под именем в hero (1 предложение) */
  tagline: string;
  /** акцентное слово внутри заголовка hero (вариант A) */
  accentWord: string;
  /** доступность для работы — управляет статус-чипом */
  availability: {
    open: boolean;
    label: string;
  };
  location: string;
  email: string;
  /** 2–3 абзаца для секции About */
  about: string[];
  /** основной стек — рендерится в hero и в About */
  stack: string[];
  socials: SocialLink[];
  /** ссылка на резюме/CV (TODO: добавьте файл в /public или внешний URL) */
  resumeUrl: string;
};

export const profile: Profile = {
  name: "[ВАШЕ ИМЯ]",
  role: "[РОЛЬ]", // напр. "Frontend Engineer", "Full-Stack Developer"
  tagline:
    "[Короткое позиционирование — чем вы полезны и для кого. 1–2 предложения.]",
  accentWord: "[ключевое слово]", // напр. "надёжные", "продуктовые"
  availability: {
    open: true,
    label: "Открыт к предложениям", // TODO: или "Сейчас занят"
  },
  location: "[Город, Страна]",
  email: "[email@example.com]",
  about: [
    "[Абзац 1 — кто вы и чем занимаетесь. Конкретно: специализация, годы опыта, домены.]",
    "[Абзац 2 — как вы работаете, что цените в инженерии, чем выделяетесь.]",
    "[Абзац 3 (необязательно) — интересы вне кода / к чему стремитесь.]",
  ],
  stack: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "[ваш инструмент]",
    "[ваш инструмент]",
  ],
  socials: [
    { label: "GitHub", href: "[https://github.com/username]", primary: true },
    { label: "LinkedIn", href: "[https://linkedin.com/in/username]", primary: true },
    { label: "Telegram", href: "[https://t.me/username]" },
    { label: "X / Twitter", href: "[https://x.com/username]" },
  ],
  resumeUrl: "[/resume.pdf]", // TODO: положите файл в /public или укажите URL
};
