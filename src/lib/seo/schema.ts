import { absoluteUrl, site } from '$lib/config/site';
import { services, team } from '$lib/data/content';

const orgId = absoluteUrl('/#organization');
const websiteId = absoluteUrl('/#website');

/** JSON-LD graph for the homepage. Only describes content that is visible on the page. */
export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': orgId,
        name: site.name,
        url: site.url,
        slogan: site.tagline,
        description: site.description,
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
          areaServed: site.country
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
        inLanguage: site.language,
        publisher: { '@id': orgId }
      },
      {
        '@type': 'WebPage',
        '@id': absoluteUrl('/#webpage'),
        url: absoluteUrl('/'),
        name: site.title,
        description: site.description,
        isPartOf: { '@id': websiteId },
        about: { '@id': orgId },
        primaryImageOfPage: absoluteUrl(site.ogImage.path),
        inLanguage: site.language
      }
    ]
  };
}
