import { absoluteUrl, defaultLang, languages, localeConfig, localizePath, type Lang } from '$lib/config/site';

export type ChangeFreq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

/** One logical page, described by its language-neutral path (e.g. `/services`, not `/fr/services`). */
export type SitemapEntry = {
  path: string;
  changefreq: ChangeFreq;
  /** 0.0–1.0, relative to other pages on this site. */
  priority: number;
  /** `YYYY-MM-DD`. Defaults to the build date. */
  lastmod?: string;
  /** `false` for pages that only exist in the default language. Defaults to `true`. */
  localized?: boolean;
};

const xmlEntities: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' };
export const escapeXml = (value: string) => value.replace(/[&<>"']/g, (ch) => xmlEntities[ch]);

const today = () => new Date().toISOString().slice(0, 10);

/** Renders one `<url>` block per language, each listing every language version as an hreflang alternate. */
function renderEntry(entry: SitemapEntry, fallbackLastmod: string): string[] {
  const langs: readonly Lang[] = entry.localized === false ? [defaultLang] : languages;
  const href = (lang: Lang) => escapeXml(absoluteUrl(localizePath(entry.path, lang)));

  const alternates =
    langs.length > 1
      ? [
          ...langs.map((l) => `    <xhtml:link rel="alternate" hreflang="${localeConfig[l].htmlLang}" href="${href(l)}"/>`),
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${href(defaultLang)}"/>`
        ]
      : [];

  return langs.map((lang) =>
    [
      '  <url>',
      `    <loc>${href(lang)}</loc>`,
      ...alternates,
      `    <lastmod>${entry.lastmod ?? fallbackLastmod}</lastmod>`,
      `    <changefreq>${entry.changefreq}</changefreq>`,
      `    <priority>${entry.priority.toFixed(1)}</priority>`,
      '  </url>'
    ].join('\n')
  );
}

/** Builds a sitemaps.org 0.9 document. Duplicate paths are dropped (first one wins). */
export function renderSitemap(entries: SitemapEntry[], lastmod = today()): string {
  const seen = new Set<string>();
  const deduped = entries.filter((e) => !seen.has(e.path) && seen.add(e.path));
  const urls = deduped.flatMap((entry) => renderEntry(entry, lastmod)).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}
