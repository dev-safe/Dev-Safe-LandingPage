export const site = {
  name: 'DevSafe',
  legalName: 'DevSafe',
  url: 'https://www.devsafe.cm',
  ogImage: {
    path: '/og-image.png',
    width: 1200,
    height: 630
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

/** Cameroon is officially bilingual. English is the default and lives at `/`; French lives at `/fr`. */
export const languages = ['en', 'fr'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const localeConfig: Record<Lang, { htmlLang: string; ogLocale: string; prefix: string }> = {
  en: { htmlLang: 'en', ogLocale: 'en_CM', prefix: '' },
  fr: { htmlLang: 'fr', ogLocale: 'fr_CM', prefix: '/fr' }
};

export const isLang = (value: unknown): value is Lang => languages.includes(value as Lang);

/** Resolves the language from a URL pathname (`/fr`, `/fr/...` → French, everything else → English). */
export const langFromPath = (pathname: string): Lang => (/^\/fr(\/|$)/.test(pathname) ? 'fr' : defaultLang);

/** Prefixes a language-neutral path (`/`, `/about`) with the language segment. */
export const localizePath = (path: string, lang: Lang) => {
  const prefix = localeConfig[lang].prefix;
  if (!prefix) return path;
  return path === '/' ? prefix : `${prefix}${path}`;
};

type ChangeFreq = 'weekly' | 'monthly' | 'yearly';

/**
 * Public, indexable routes as language-neutral paths. Every route is published in each language,
 * so sitemap.xml lists one URL per language with hreflang alternates.
 */
export const indexableRoutes: { path: string; changefreq: ChangeFreq; priority: number }[] = [
  { path: '/', changefreq: 'monthly', priority: 1.0 }
];

export const absoluteUrl = (path = '/') => new URL(path, site.url).href;
