export interface ProjectItemProps {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  image: string | null;
  imageAlt?: string;
  imageCaption?: string;
  gallery?: { image: string; alt: string; caption: string }[];
  status?: string;
  linkDemo?: string | null;
  linkDemoLabel?: string;
  linkGithub?: string | null;
  stacks: string | null;
  isShow: boolean;
  isFeatured: boolean;
  caseStudyPublishedAt: string;
  caseStudyUpdatedAt: string;
  sortOrder: number;
}

export interface ProjectsProps {
  projects: ProjectItemProps[];
}
