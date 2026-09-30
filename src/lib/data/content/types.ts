import type { Component } from 'svelte';

export type ServiceVisual =
  | { type: 'checklist'; heading: string; items: string[] }
  | { type: 'pipeline'; steps: string[] }
  | { type: 'palette'; swatches: string[] };

export type ServiceSlug = 'cybersecurity' | 'software-development' | 'design-branding';
export type ProjectSlug = 'bookbridge' | 'eventra';

export type ServiceItem = {
  /** URL segment of the service page (`/services/{slug}`); identical in every language. */
  slug: ServiceSlug;
  icon: Component;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
  featured?: boolean;
  visual: ServiceVisual;
};

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type Project = {
  /** URL segment of the project page (`/work/{slug}`); identical in every language. */
  slug: ProjectSlug;
  title: string;
  tagline: string;
  description: string;
  statusBadge: string;
  isLive: boolean;
  tags: string[];
  /** Awards or press, shown as badges on the card. */
  highlights?: string[];
  screenshot?: Screenshot;
  link?: { text: string; href: string };
};

export type ProjectSection = {
  eyebrow: string;
  heading: string;
  subtitle: string;
  projects: Project[];
  /** Client work that can't be shown (NDA), summarised as a count. */
  confidential?: { count: string; title: string; text: string; link: { text: string; href: string } };
};

export type ServiceOption = 'software' | 'security' | 'branding' | 'general';

export type TitledText = { title: string; text: string };
export type FaqItem = { q: string; a: string };

/** Long-form content for a service page (`/services/{slug}`). */
export type ServiceDetail = {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  lead: string;
  /** Pre-selects the service in the consultation form. */
  formService: ServiceOption;
  includes: { heading: string; items: TitledText[] };
  process: { heading: string; steps: TitledText[] };
  audience: { heading: string; items: string[] };
  stack?: { heading: string; items: string[] };
  faq: FaqItem[];
};

/** Long-form content for a project page (`/work/{slug}`). */
export type ProjectDetail = {
  seoTitle: string;
  seoDescription: string;
  /** Who the project is for: an owned product or a client project. */
  kind: 'product' | 'client';
  story?: { heading: string; paragraphs: string[] };
  features: { heading: string; items: TitledText[] };
  build: { heading: string; items: string[] };
  links?: { text: string; href: string }[];
};

/** Everything the dedicated service and project pages need, per language. */
export type DetailContent = {
  ui: {
    home: string;
    services: string;
    work: string;
    products: string;
    learnMore: string;
    readCaseStudy: string;
    bookConsultation: string;
    otherServices: string;
    faqHeading: string;
    recognitionHeading: string;
    ownedProduct: string;
    clientProject: string;
    caseStudies: string;
    moreWork: string;
  };
  services: Record<ServiceSlug, ServiceDetail>;
  projects: Record<ProjectSlug, ProjectDetail>;
};
