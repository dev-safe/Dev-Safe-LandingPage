import { absoluteUrl, languages, localeConfig, localizePath, site } from '$lib/config/site';
import type { SiteContent } from '$lib/data/content';

const orgId = absoluteUrl('/#organization');
const websiteId = absoluteUrl('/#website');

/** JSON-LD graph for the homepage. Only describes content that is visible on the page. */
export function homeJsonLd(c: SiteContent) {
  const { lang } = c.meta;
  const { services, team } = c;
  const pageUrl = absoluteUrl(localizePath('/', lang));
  const inLanguage = localeConfig[lang].htmlLang;
  const availableLanguage = languages.map((l) => localeConfig[l].htmlLang);
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
        address: { '@type': 'PostalAddress', addressCountry: site.country },
        areaServed: { '@type': 'Country', name: 'Cameroon' },
        sameAs: site.sameAs,
        knowsAbout: site.keywords,
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
        inLanguage
      }
    ]
  };
}
