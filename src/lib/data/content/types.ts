import type { Component } from 'svelte';

export type ServiceVisual =
  | { type: 'checklist'; heading: string; items: string[] }
  | { type: 'pipeline'; steps: string[] }
  | { type: 'palette'; swatches: string[] };

export type ServiceItem = {
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

export type Severity = 'high' | 'medium' | 'low';

export type AuditFinding = { severity: Severity; title: string; fixed: boolean };

export type ServiceOption = 'software' | 'security' | 'branding' | 'general';
