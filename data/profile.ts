/**
 * PROFILE — личные данные (из CV Yerlan Aubakirov, октябрь 2026).
 * Тексты от первого лица, без маркетинговых формулировок.
 */

export type SocialLink = { label: string; href: string };

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  /** главное утверждение на первом экране */
  headline: string;
  /** вторая строка под ним */
  tagline: string;
  /** фраза перед контактами */
  contactNote: string;
  location: string;
  locationRu: string;
  email: string;
  phone?: string;
  about: string[];
  languages: string[];
  socials: SocialLink[];
  resumeUrl: string;
};

export const profile: Profile = {
  name: "Yerlan Aubakirov",
  shortName: "Ерлан Аубакиров",
  role: "React Native Developer",
  headline:
    "Делаю мобильные приложения, в которых платежи проходят, стримы не падают, а экраны открываются *быстро*. Сейчас это live-commerce маркетплейс для корейского ритейла. До этого несколько лет вёл проекты и научился смотреть на продукт глазами того, кто за него платит.",
  tagline:
    "React Native, TypeScript, платежи, realtime. Открыт к новым проектам в UK и удалённо.",
  contactNote: "Если у вас есть задача на React Native или фронтенд — напишите, отвечу в тот же день.",
  location: "Leicester, United Kingdom",
  locationRu: "Лестер, UK",
  email: "yerlanaubakirovvv@gmail.com",
  phone: "+7 700 651 1043",
  about: [
    "Пишу на React Native и TypeScript с 2025 года в SoftSale. Основной продукт — FBSM Live, приложение для Fashion Brand Square, южнокорейского ритейл-холдинга: там люди смотрят прямые эфиры и покупают прямо из них. Я интегрировал платёжный шлюз EPAY, собрал стриминг и чат в реальном времени, а потом занялся скоростью: после оптимизации запросов и кэша экраны стали открываться примерно на 20% быстрее. Параллельно выпускали Qarqyn, PvP-викторину в App Store, и приложение для сети кофеен EspressoDay.",
    "До разработки несколько лет вёл проекты: мобильное приложение для родителей детей с аутизмом, выставку MAMAN FEST на 130 компаний, студенческие хакатоны. Поэтому понимаю, как продукт выглядит со стороны заказчика, и не теряюсь, когда нужно договориться о сроках и приоритетах.",
    "Закончил бакалавриат по Software Engineering в Astana IT University, сейчас учусь на магистратуре Advanced Software Engineering в University of Leicester. В работе каждый день пользуюсь Claude Code и Cursor — быстро проверять идеи это нормально, а вот сдавать непроверенное — нет.",
  ],
  languages: ["английский (professional)", "русский", "казахский"],
  socials: [
    { label: "GitHub", href: "https://github.com/scientifictooffi" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tadamsk" },
  ],
  resumeUrl: "/resume.pdf",
};
