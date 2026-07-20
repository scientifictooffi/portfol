/**
 * PROFILE — источник личных данных (из CV Yerlan Aubakirov).
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
  /** ссылка на резюме/CV */
  resumeUrl: string;
};

export const profile: Profile = {
  name: "Yerlan Aubakirov",
  role: "React Native / Front-End Developer",
  tagline:
    "Разрабатываю production-приложения для iOS и Android: live-commerce, платежи и realtime — с фокусом на скорость и стабильность.",
  accentWord: "продакшен",
  availability: {
    open: true,
    label: "Открыт к предложениям · Relocation & Remote",
  },
  location: "Astana, Kazakhstan",
  email: "yerlanaubakirovvv@gmail.com",
  about: [
    "1+ год production-опыта в React Native: live-commerce платформы, интеграция платежей (EPAY), международные проекты. Пишу на React, React Native и TypeScript; базово — Node.js и SQL.",
    "В SoftSale разрабатываю FBSM Live для южнокорейского холдинга Fashion Brand Square: стриминг, чат и checkout в одном приложении для 5 000+ пользователей. Ускорил загрузку экранов на ~20% за счёт оптимизации API и кэша.",
    "BSc Software Engineering (Astana IT University, Honours, GPA 3.72), сейчас MSc Information Systems. Сертификаты: EPAM Front-End, AWS Cloud Foundations; английский — B2 (IELTS 6.0).",
  ],
  stack: [
    "TypeScript",
    "React Native",
    "React",
    "Next.js",
    "Redux",
    "REST / WebSocket",
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/scientifictooffi",
      primary: true,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/tadamsk",
      primary: true,
    },
  ],
  resumeUrl: "/resume.pdf",
};
