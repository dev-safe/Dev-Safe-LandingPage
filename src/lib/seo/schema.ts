import { absoluteUrl, languages, localeConfig, localizePath, site } from '$lib/config/site';
import type { Lang } from '$lib/config/site';
import type { Project, ProjectSlug, ServiceSlug, SiteContent } from '$lib/data/content';

const orgId = absoluteUrl('/#organization');
const websiteId = absoluteUrl('/#website');

/** Schema.org details for each showcased project, keyed by `Project.slug` (identical in every language). */
const appSchema: Record<ProjectSlug, { id: string; type: 'MobileApplication' | 'WebApplication'; category: string; os: string }> = {
  bookbridge: { id: absoluteUrl('/#bookbridge'), type: 'MobileApplication', category: 'ShoppingApplication', os: 'Android' },
  eventra: { id: absoluteUrl('/#eventra'), type: 'WebApplication', category: 'BusinessApplication', os: 'Web' }
};

export const servicePath = (slug: ServiceSlug) => `/services/${slug}`;
export const projectPath = (slug: ProjectSlug) => `/work/${slug}`;

/**
 * Owned products are created *and* published by DevSafe; client work is only created by DevSafe
 * (the client publishes it), so it gets `creator` without `publisher`.
 */
function appJsonLd(project: Project, owned: boolean, inLanguage: string) {
  const meta = appSchema[project.slug];
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
          jobTitle: member.role,
          sameAs: [member.profiles.linkedin, member.profiles.github]
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
            itemOffered: {
              '@type': 'Service',
              '@id': absoluteUrl(`${servicePath(item.slug)}#service`),
              name: item.title,
              description: item.description,
              url: absoluteUrl(localizePath(servicePath(item.slug), lang))
            }
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

type Crumb = { name: string; url: string };

const breadcrumbJsonLd = (pageUrl: string, crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl}#breadcrumb`,
  itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, name: crumb.name, item: crumb.url }))
});

const webPageJsonLd = (pageUrl: string, name: string, description: string, inLanguage: string, extra: Record<string, unknown>) => ({
  '@type': 'WebPage',
  '@id': `${pageUrl}#webpage`,
  url: pageUrl,
  name,
  description,
  isPartOf: { '@id': websiteId },
  breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
  inLanguage,
  ...extra
});

const homeCrumb = (c: SiteContent, lang: Lang): Crumb => ({
  name: c.details.ui.home,
  url: absoluteUrl(localizePath('/', lang))
});

/** JSON-LD for a service page: the Service, its breadcrumb trail and the FAQ shown on the page. */
export function servicePageJsonLd(c: SiteContent, slug: ServiceSlug) {
  const { lang } = c.meta;
  const item = c.services.items.find((s) => s.slug === slug);
  const detail = c.details.services[slug];
  if (!item) throw new Error(`Unknown service: ${slug}`);
  const inLanguage = localeConfig[lang].htmlLang;
  const pageUrl = absoluteUrl(localizePath(servicePath(slug), lang));
  const serviceId = absoluteUrl(`${servicePath(slug)}#service`);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageJsonLd(pageUrl, detail.seoTitle, detail.seoDescription, inLanguage, { about: { '@id': serviceId } }),
      {
        '@type': 'Service',
        '@id': serviceId,
        name: item.title,
        serviceType: item.title,
        description: detail.lead,
        url: pageUrl,
        provider: { '@id': orgId, '@type': 'ProfessionalService', name: site.name, url: site.url },
        areaServed: { '@type': 'Country', name: 'Cameroon' },
        availableLanguage: languages.map((l) => localeConfig[l].htmlLang),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: detail.includes.heading,
          itemListElement: detail.includes.items.map((include) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: include.title, description: include.text }
          }))
        }
      },
      breadcrumbJsonLd(pageUrl, [
        homeCrumb(c, lang),
        { name: c.details.ui.services, url: absoluteUrl(`${localizePath('/', lang)}#services`) },
        { name: item.title, url: pageUrl }
      ]),
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        inLanguage,
        mainEntity: detail.faq.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a }
        }))
      }
    ]
  };
}

/** Finds a showcased project (owned product or client work) by slug. */
export const findProject = (c: SiteContent, slug: ProjectSlug) => {
  const product = c.products.projects.find((p) => p.slug === slug);
  if (product) return { project: product, owned: true };
  const client = c.clientWork.projects.find((p) => p.slug === slug);
  return client ? { project: client, owned: false } : null;
};

/** JSON-LD for a case-study page: the application and its breadcrumb trail. */
export function projectPageJsonLd(c: SiteContent, slug: ProjectSlug) {
  const { lang } = c.meta;
  const found = findProject(c, slug);
  if (!found) throw new Error(`Unknown project: ${slug}`);
  const { project, owned } = found;
  const detail = c.details.projects[slug];
  const inLanguage = localeConfig[lang].htmlLang;
  const pageUrl = absoluteUrl(localizePath(projectPath(slug), lang));
  const app = appJsonLd(project, owned, inLanguage);
  const section = owned ? { name: c.details.ui.products, hash: '#products' } : { name: c.details.ui.work, hash: '#work' };
  return {
    '@context': 'https://schema.org',
    '@graph': [
      webPageJsonLd(pageUrl, detail.seoTitle, detail.seoDescription, inLanguage, app ? { mainEntity: { '@id': app['@id'] } } : {}),
      ...(app ? [app] : []),
      breadcrumbJsonLd(pageUrl, [
        homeCrumb(c, lang),
        { name: section.name, url: absoluteUrl(`${localizePath('/', lang)}${section.hash}`) },
        { name: project.title, url: pageUrl }
      ])
    ]
  };
}
