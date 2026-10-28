/**
 * EXPERIENCE / SKILLS / CERTIFICATIONS — данные из CV Yerlan Aubakirov (октябрь 2026).
 */

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** текущее место работы — подсвечивается в таймлайне */
  current?: boolean;
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "SoftSale",
    role: "React Native Developer",
    period: "Май 2025 — сейчас",
    location: "Astana, Kazakhstan · Remote",
    current: true,
    bullets: [
      "FBSM Live — live-commerce маркетплейс для Fashion Brand Square (Южная Корея): платежи EPAY для 5 000+ пользователей, live-стриминг и чат (+30% вовлечённости), оптимизация API и кэш (−20% времени загрузки).",
      "Qarqyn — PvP-викторина в App Store: подбор соперника, дуэли на синхронных вопросах, рейтинг и ранги, история матчей.",
      "EspressoDay — приложение заказов и лояльности для 130 кофеен: внутренние модули, масштабируемая архитектура, code review и багфикс перед релизом.",
      "Работа в Agile-команде через GitHub: feature-ветки, pull requests, code review.",
    ],
    tags: ["React Native", "TypeScript", "WebSocket", "EPAY", "REST API"],
  },
  {
    company: "BI Education",
    role: "Frontend Developer",
    period: "Март — Апрель 2026",
    location: "Kazakhstan · Part-time",
    bullets: ["Фронтенд-разработка для образовательной платформы, частичная занятость параллельно с SoftSale."],
    tags: ["React", "TypeScript"],
  },
  {
    company: "ADAM MEDIA",
    role: "Project Manager",
    period: "Январь — Март 2025",
    location: "Astana, Kazakhstan",
    bullets: [
      "Организовал MAMAN FEST 2025 — национальную выставку и ярмарку вакансий с участием Президента Казахстана и 130+ компаний-партнёров.",
      "Спланировал и провёл хакатоны для студентов и начинающих специалистов.",
    ],
    tags: ["Events", "Hackathons"],
  },
  {
    company: "Business Training Bolashaq",
    role: "Volunteer Coordinator",
    period: "Июнь — Август 2022",
    location: "Astana, Kazakhstan · Стажировка",
    bullets: ["Координировал волонтёров и логистику мероприятий, готовил материалы для воркшопов и семинаров."],
    tags: ["Coordination"],
  },
  {
    company: "TrainAut",
    role: "Project Manager",
    period: "2021 — Февраль 2022",
    location: "Pavlodar, Kazakhstan",
    bullets: [
      "Вёл разработку и тестирование мобильного приложения для родителей детей с РАС — от требований до релиза, UI и интеграция SDK.",
    ],
    tags: ["Mobile", "UI"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "языки",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL", "C++"],
  },
  {
    label: "фронтенд и мобайл",
    items: ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    label: "бэкенд и api",
    items: ["Node.js", "REST API", "WebSocket", "Real-Time Streaming", "Payment Gateway Integration"],
  },
  {
    label: "базы данных",
    items: ["MySQL", "MS SQL Server", "Oracle", "PostgreSQL (базово)"],
  },
  {
    label: "инструменты",
    items: ["Git", "GitHub", "Pull Requests", "Code Review", "Agile / Scrum", "Unit Testing", "Vite", "Vercel", "Firebase", "AWS", "Linux", "DataGrip", "Jupyter"],
  },
  {
    label: "ai-инструменты",
    items: ["Claude Code", "Cursor", "GitHub Copilot", "Prompt Engineering", "Rapid Prototyping"],
  },
];

export type Certification = {
  title: string;
  meta: string;
};

export const certifications: Certification[] = [
  { title: "Commercial Software Development — JavaScript", meta: "Itransition Group · 2026" },
  { title: "Front-End Development", meta: "EPAM Systems · 2023–2024" },
  { title: "AWS Academy Graduate: Cloud Foundations", meta: "AWS · 2024" },
  { title: "Cisco Networking Essentials", meta: "Cisco · 2023" },
  { title: "Cisco Linux Essentials", meta: "Cisco · 2023" },
];

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
};

export const education: EducationItem[] = [
  {
    school: "University of Leicester",
    degree: "MSc Advanced Software Engineering",
    period: "2026–2027",
    location: "Leicester, UK",
  },
  {
    school: "Astana IT University",
    degree: "BSc Software Engineering",
    period: "2022–2025",
    location: "Astana, Kazakhstan",
  },
];

export const activities: string[] = [
  "Markethon 5.0 и Blockchain Hackathon — участник, Astana",
  "Work and Travel Program — New York, USA",
];
