import raw from "./projects.json";

export type ProjectLinks = {
  live?: string;
  repo?: string;
  caseStudy?: string;
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  year: string;
  tags: string[];
  featured: boolean;
  links: ProjectLinks;
};

/** Typed, sorted access to project stubs (featured first). */
export const projects: Project[] = (raw.items as Project[])
  .slice()
  .sort((a, b) => Number(b.featured) - Number(a.featured));
