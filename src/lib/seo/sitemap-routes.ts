import en from '$lib/data/content/en';
import type { SitemapEntry } from './sitemap';

/**
 * Every `+page.svelte` in the app, discovered at build time. Only the keys (file paths) are used,
 * so a route listed below is published only once its page actually exists — the sitemap can never
 * point crawlers at a 404.
 */
const pageFiles = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'));

type DiscoveredRoute = { path: string; localized: boolean };

/** `/src/routes/[[lang=lang]]/work/[slug]/+page.svelte` → `{ path: '/work/[slug]', localized: true }` */
export function toRoute(file: string): DiscoveredRoute {
  const segments = file
    .replace(/^\/src\/routes/, '')
    .replace(/\/\+page\.svelte$/, '')
    .split('/')
    .filter(Boolean);
  const localized = segments.includes('[[lang=lang]]');
  // Drop the optional language segment and (group) folders; neither appears in the URL.
  const urlSegments = segments.filter((s) => s !== '[[lang=lang]]' && !/^\(.+\)$/.test(s));
  return { path: `/${urlSegments.join('/')}`, localized };
}

const existingRoutes = new Map(pageFiles.map(toRoute).map((r) => [r.path, r]));

/** Static pages and their crawl hints. Add a route here when you create its page. */
export const staticRoutes: SitemapEntry[] = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/services', changefreq: 'weekly', priority: 0.8 },
  { path: '/about', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact', changefreq: 'monthly', priority: 0.7 }
];

/**
 * A collection of pages rendered by one dynamic route. `load` can be async, e.g.
 * `load: async () => (await fetch(`${CMS_URL}/docs`).then((r) => r.json())).map(...)`.
 *
 * Only publish public content. Security audit reports or logs must never be listed:
 * a sitemap is a public index, and it would advertise clients' vulnerabilities.
 */
type DynamicSource = {
  /** The route pattern, as a language-neutral path (e.g. `/work/[slug]`). */
  route: string;
  load: () => SitemapEntry[] | Promise<SitemapEntry[]>;
};

export const dynamicSources: DynamicSource[] = [
  {
    // One page per agency service (cybersecurity, software development, design & branding).
    route: '/services/[slug]',
    load: () =>
      en.services.items.map((service): SitemapEntry => ({
        path: `/services/${service.slug}`,
        changefreq: 'monthly',
        priority: 0.8
      }))
  },
  {
    // Case studies: one page per client project and owned product (Eventra, BookBridge, …).
    route: '/work/[slug]',
    load: () =>
      [...en.products.projects, ...en.clientWork.projects].map((project): SitemapEntry => ({
        path: `/work/${project.slug}`,
        changefreq: 'monthly',
        priority: 0.7
      }))
  }
];

/** Resolves every registered route that has a real page behind it. */
export async function collectSitemapEntries(): Promise<SitemapEntry[]> {
  const withLocale = (entry: SitemapEntry, route: string): SitemapEntry => ({
    ...entry,
    localized: existingRoutes.get(route)?.localized ?? false
  });

  const statics = staticRoutes.filter((r) => existingRoutes.has(r.path)).map((r) => withLocale(r, r.path));

  const dynamic = await Promise.all(
    dynamicSources
      .filter((source) => existingRoutes.has(source.route))
      .map(async (source) => (await source.load()).map((entry) => withLocale(entry, source.route)))
  );

  return [...statics, ...dynamic.flat()];
}

/** Registered routes that have no page yet (reported at build time so they aren't forgotten). */
export const pendingRoutes = () => [
  ...staticRoutes.map((r) => r.path).filter((path) => !existingRoutes.has(path)),
  ...dynamicSources.map((s) => s.route).filter((route) => !existingRoutes.has(route))
];
