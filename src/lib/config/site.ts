export const site = {
  name: 'DevSafe',
  legalName: 'DevSafe',
  url: 'https://www.devsafe.cm',
  locale: 'en_CM',
  language: 'en',
  tagline: 'Build. Secure. Protect.',
  title: 'DevSafe | Software & Cybersecurity Agency in Cameroon',
  description:
    'DevSafe builds secure websites, mobile apps and security audits for schools, churches and businesses in Cameroon, and ships its own products like BookBridge.',
  ogImage: {
    path: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'DevSafe: secure software and cybersecurity in Cameroon'
  },
  logo: '/logo-512.png',
  email: 'contact@devsafe.cm',
  telephone: '+237680001677',
  country: 'CM',
  sameAs: ['https://github.com/Dev-Safe'],
  keywords: [
    'Software development',
    'Web development',
    'Mobile app development',
    'Cybersecurity',
    'Security audits',
    'Vulnerability assessment',
    'Secure coding'
  ]
} as const;

type ChangeFreq = 'weekly' | 'monthly' | 'yearly';

/** Public, indexable routes. Add new pages here so they appear in sitemap.xml. */
export const indexableRoutes: { path: string; changefreq: ChangeFreq; priority: number }[] = [
  { path: '/', changefreq: 'monthly', priority: 1.0 }
];

export const absoluteUrl = (path = '/') => new URL(path, site.url).href;
