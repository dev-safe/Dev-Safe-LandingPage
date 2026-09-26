import { absoluteUrl, defaultLang, indexableRoutes, languages, localeConfig, localizePath } from '$lib/config/site';

export const prerender = true;

export function GET() {
  const lastmod = new Date().toISOString().split('T')[0];
  const urls = indexableRoutes
    .flatMap(({ path, changefreq, priority }) => {
      const alternates = [
        ...languages.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${localeConfig[l].htmlLang}" href="${absoluteUrl(localizePath(path, l))}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localizePath(path, defaultLang))}"/>`
      ].join('\n');

      return languages.map(
        (lang) => `  <url>
    <loc>${absoluteUrl(localizePath(path, lang))}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
      );
    })
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
}
