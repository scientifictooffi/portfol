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
  highlight?: string;
  highlights?: string[];
  role: string;
  year: string;
  tags: string[];
  featured: boolean;
  links: ProjectLinks;
};

/** Typed access to projects; featured first, then in file order. */
export const projects: Project[] = (raw.items as Project[])
  .slice()
  .sort((a, b) => Number(b.featured) - Number(a.featured));
