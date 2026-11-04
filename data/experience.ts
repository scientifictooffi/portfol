/**
 * EXPERIENCE / SKILLS / CERTIFICATIONS — from Yerlan Aubakirov's CV (October 2026).
 */

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  /** current job, shown large */
  current?: boolean;
  bullets: string[];
  tags?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "SoftSale",
    role: "React Native Developer",
    period: "May 2025 — now",
    location: "Astana, Kazakhstan · Remote",
    current: true,
    bullets: [
      "FBSM Live, a live-commerce marketplace for Fashion Brand Square (South Korea): EPAY payments for 5,000+ users, live streaming and chat (+30% engagement), API optimisation and caching (−20% load time).",
      "Qarqyn, a PvP trivia game on the App Store: opponent matching, duels on synchronised questions, rating and ranks, match history.",
      "EspressoDay, an ordering and loyalty app for 130 coffee shops: internal modules, scalable architecture, code review and bug fixing before release.",
      "Agile team on GitHub: feature branches, pull requests, code review.",
    ],
    tags: ["React Native", "TypeScript", "WebSocket", "EPAY", "REST API"],
  },
  {
    company: "BI Education",
    role: "Frontend Developer",
    period: "March — April 2026",
    location: "Kazakhstan · Part-time",
    bullets: ["Frontend development for an education platform, part-time alongside SoftSale."],
    tags: ["React", "TypeScript"],
  },
  {
    company: "ADAM MEDIA",
    role: "Project Manager",
    period: "January — March 2025",
    location: "Astana, Kazakhstan",
    bullets: [
      "Organised MAMAN FEST 2025, a national exhibition and job fair attended by the President of Kazakhstan, with 130+ partner companies.",
      "Planned and ran hackathons for students and junior specialists.",
    ],
    tags: ["Events", "Hackathons"],
  },
  {
    company: "Business Training Bolashaq",
    role: "Volunteer Coordinator",
    period: "June — August 2022",
    location: "Astana, Kazakhstan · Internship",
    bullets: ["Coordinated volunteers and event logistics, prepared materials for workshops and seminars."],
    tags: ["Coordination"],
  },
  {
    company: "TrainAut",
    role: "Project Manager",
    period: "2021 — February 2022",
    location: "Pavlodar, Kazakhstan",
    bullets: [
      "Led development and testing of a mobile app for parents of children with autism, from requirements to release, UI and SDK integration.",
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
    label: "languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "SQL", "C++"],
  },
  {
    label: "frontend & mobile",
    items: ["React", "React Native", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    label: "backend & api",
    items: ["Node.js", "REST API", "WebSocket", "Real-Time Streaming", "Payment Gateway Integration"],
  },
  {
    label: "databases",
    items: ["MySQL", "MS SQL Server", "Oracle", "PostgreSQL (basic)"],
  },
  {
    label: "tools",
    items: ["Git", "GitHub", "Pull Requests", "Code Review", "Agile / Scrum", "Unit Testing", "Vite", "Vercel", "Firebase", "AWS", "Linux", "DataGrip", "Jupyter"],
  },
  {
    label: "ai tools",
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
  "Markethon 5.0 and Blockchain Hackathon, participant, Astana",
  "Work and Travel Program, New York, USA",
];
