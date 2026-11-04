/**
 * PROFILE — personal data (from Yerlan Aubakirov's CV, October 2026).
 * First person, plain language, no marketing copy.
 */

export type SocialLink = { label: string; href: string };

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  /** main statement on the first screen */
  headline: string;
  /** line under it */
  tagline: string;
  /** sentence before the contact block */
  contactNote: string;
  location: string;
  locationShort: string;
  email: string;
  phone?: string;
  about: string[];
  languages: string[];
  socials: SocialLink[];
  resumeUrl: string;
};

export const profile: Profile = {
  name: "Yerlan Aubakirov",
  shortName: "Yerlan Aubakirov",
  role: "React Native Developer",
  headline:
    "I build mobile apps where payments go through, live streams stay up and screens open *fast*. Right now that is a live-commerce marketplace for a Korean retail group. Before that I spent a few years managing projects and learned to look at a product through the eyes of the person paying for it.",
  tagline: "React Native, TypeScript, payments, realtime. Open to new projects in the UK and remote.",
  contactNote: "If you have a React Native or frontend task, drop me a line. I reply the same day.",
  location: "Leicester, United Kingdom",
  locationShort: "Leicester, UK",
  email: "yerlanaubakirovvv@gmail.com",
  phone: "+7 700 651 1043",
  about: [
    "I have been writing React Native and TypeScript at SoftSale since 2025. The main product is FBSM Live, an app for Fashion Brand Square, a South Korean retail holding: people watch live streams and buy straight from them. I integrated the EPAY payment gateway, built real-time streaming and chat, then worked on speed: after optimising requests and caching, screens open about 20% faster. In parallel we shipped Qarqyn, a PvP trivia game on the App Store, and an app for the EspressoDay coffee chain.",
    "Before development I spent a few years managing projects: a mobile app for parents of children with autism, the MAMAN FEST exhibition with 130 companies, student hackathons. So I understand how a product looks from the client's side and I am comfortable negotiating deadlines and priorities.",
    "I finished a BSc in Software Engineering at Astana IT University and am now doing an MSc in Advanced Software Engineering at the University of Leicester. I use Claude Code and Cursor every day. Testing ideas fast is normal; shipping something unverified is not.",
  ],
  languages: ["English (professional)", "Russian", "Kazakh"],
  socials: [
    { label: "GitHub", href: "https://github.com/scientifictooffi" },
    { label: "LinkedIn", href: "https://linkedin.com/in/tadamsk" },
  ],
  resumeUrl: "/resume.pdf",
};
