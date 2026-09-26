import type { RequestHandler } from './$types';
import { renderSitemap } from '$lib/seo/sitemap';
import { collectSitemapEntries, pendingRoutes } from '$lib/seo/sitemap-routes';

// Written to static /sitemap.xml at build time; re-generated on every deploy.
export const prerender = true;

export const GET: RequestHandler = async () => {
  // 1. Resolve static routes + dynamic collections that have a real page behind them.
  const entries = await collectSitemapEntries();

  // 2. Flag registered routes that were skipped, so a missing page is noticed at build time.
  const pending = pendingRoutes();
  if (pending.length) console.info(`[sitemap] not yet published (no page): ${pending.join(', ')}`);

  // 3. Render one <url> per language with hreflang alternates.
  return new Response(renderSitemap(entries), {
    headers: { 'Content-Type': 'application/xml' }
  });
};
