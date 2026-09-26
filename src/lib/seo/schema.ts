import { absoluteUrl, languages, localeConfig, localizePath, site } from '$lib/config/site';
import type { Project, SiteContent } from '$lib/data/content';

const orgId = absoluteUrl('/#organization');
const websiteId = absoluteUrl('/#website');

/** Schema.org details for each showcased project, keyed by `Project.title` (identical in every language). */
const appSchema: Record<string, { id: string; type: 'MobileApplication' | 'WebApplication'; category: string; os: string }> = {
  BookBridge: { id: absoluteUrl('/#bookbridge'), type: 'MobileApplication', category: 'ShoppingApplication', os: 'Android' },
  Eventra: { id: absoluteUrl('/#eventra'), type: 'WebApplication', category: 'BusinessApplication', os: 'Web' }
};

/**
 * Owned products are created *and* published by DevSafe; client work is only created by DevSafe
 * (the client publishes it), so it gets `creator` without `publisher`.
 */
function appJsonLd(project: Project, owned: boolean, inLanguage: string) {
  const meta = appSchema[project.title];
  if (!meta) return null;
  return {
    '@type': meta.type,
    '@id': meta.id,
    name: project.title,
    alternateName: project.tagline,
    description: project.description,
    applicationCategory: meta.category,
    operatingSystem: meta.os,
    keywords: project.tags.join(', '),
    ...(project.link && { url: project.link.href }),
    creator: { '@id': orgId },
    ...(owned && { publisher: { '@id': orgId } }),
    inLanguage
  };
}

/** JSON-LD graph for the homepage. Only describes content that is visible on the page. */
export function homeJsonLd(c: SiteContent) {
  const { lang } = c.meta;
  const { services, team } = c;
  const pageUrl = absoluteUrl(localizePath('/', lang));
  const inLanguage = localeConfig[lang].htmlLang;
  const availableLanguage = languages.map((l) => localeConfig[l].htmlLang);
  const apps = [
    ...c.products.projects.map((p) => appJsonLd(p, true, inLanguage)),
    ...c.clientWork.projects.map((p) => appJsonLd(p, false, inLanguage))
  ].filter((node) => node !== null);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: site.name,
        url: site.url,
        slogan: c.footer.tagline,
        description: c.seo.description,
        logo: absoluteUrl(site.logo),
        image: absoluteUrl(site.ogImage.path),
        email: site.email,
        telephone: site.telephone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country
        },
        areaServed: { '@type': 'Country', name: 'Cameroon' },
        knowsLanguage: availableLanguage,
        sameAs: site.sameAs,
        knowsAbout: site.expertise,
        founder: team.members.map((member) => ({
          '@type': 'Person',
          name: member.name,
          jobTitle: member.role
        })),
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          email: site.email,
          telephone: site.telephone,
          areaServed: site.country,
          availableLanguage
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: services.heading,
          itemListElement: services.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.description }
          }))
        }
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: site.url,
        name: site.name,
        inLanguage: availableLanguage,
        publisher: { '@id': orgId }
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: c.seo.title,
        description: c.seo.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        primaryImageOfPage: absoluteUrl(site.ogImage.path),
        mentions: apps.map((app) => ({ '@id': app['@id'] })),
        inLanguage
      },
      ...apps
    ]
  };
}
