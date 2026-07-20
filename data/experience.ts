/**
 * EXPERIENCE / SKILLS / CERTIFICATIONS — данные из CV Yerlan Aubakirov.
 */

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "SoftSale",
    role: "React Native Developer",
    period: "Май 2025 — сейчас",
    bullets: [
      "Разрабатываю FBSM Live — live-commerce маркетплейс для корейского холдинга Fashion Brand Square.",
      "Интегрировал платежи EPAY: 5 000+ активных пользователей.",
      "Реализовал live-стриминг и realtime-чат — +30% engagement во время распродаж.",
      "Оптимизация API и кэширования: −20% времени загрузки экранов.",
    ],
    tags: ["React Native", "TypeScript", "Redux", "WebSocket", "EPAY"],
  },
  {
    company: "ADAM MEDIA",
    role: "Project Manager",
    period: "Январь — Март 2025",
    bullets: [
      "Организовал MAMAN FEST 2025 — выставку и ярмарку вакансий с участием Президента Казахстана и 130+ компаний.",
      "Провёл хакатоны для привлечения молодых специалистов.",
    ],
    tags: ["Events", "Hackathons", "Partnerships"],
  },
  {
    company: "Bolashaq",
    role: "Volunteer Coordinator",
    period: "Июнь — Август 2022",
    bullets: [
      "Координировал волонтёров и логистику мероприятий.",
      "Готовил обучающие материалы для воркшопов и семинаров.",
    ],
    tags: ["Coordination", "Logistics"],
  },
  {
    company: "TrainAut",
    role: "Project Manager",
    period: "Июнь 2021 — Февраль 2022",
    bullets: [
      "Управлял разработкой и тестированием мобильного приложения для родителей детей с РАС.",
      "Спроектировал UI, интегрировал сторонние SDK, сформировал продуктовый roadmap.",
      "Запустил маркетинг: Email, Facebook и Google Ads.",
    ],
    tags: ["Mobile", "UI", "SDK", "Marketing"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Языки",
    items: ["JavaScript", "TypeScript", "HTML/CSS", "Java", "Python", "C++", "SQL"],
  },
  {
    label: "Фреймворки и инструменты",
    items: ["React", "React Native", "Next.js", "Redux", "Node.js (базово)", "Bootstrap", "Git"],
  },
  {
    label: "Базы данных",
    items: ["MySQL", "MS SQL Server", "Oracle"],
  },
];

export type Certification = {
  title: string;
  meta: string;
};

export const certifications: Certification[] = [
  { title: "EPAM Front-End Developer", meta: "2023–2024" },
  { title: "AWS Cloud Foundations", meta: "2024" },
  { title: "Cisco Networking Essentials", meta: "2023" },
  { title: "Cisco Linux Essentials", meta: "2023" },
  { title: "IBM Data Analyst Capstone Project", meta: "IBM / Coursera" },
  { title: "What is Data Science?", meta: "IBM / Coursera" },
  { title: "Sololearn — Machine Learning", meta: "курс" },
  { title: "IELTS 6.0", meta: "английский B2" },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "Astana IT University",
    degree: "BSc Software Engineering",
    period: "2022–2025",
  },
  {
    school: "University of Leicester",
    degree: "MSc Advanced Software Engineering",
    period: "2026–2027",
  },
  {
    school: "Kazakh University of Technology and Business",
    degree: "MSc Information Systems",
    period: "2025–2027",
  },
];
