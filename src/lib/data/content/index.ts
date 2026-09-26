import { page } from '$app/state';
import { langFromPath, type Lang } from '$lib/config/site';
import en, { type SiteContent } from './en';
import fr from './fr';

export type * from './types';
export type { SiteContent };

export const contentByLang: Record<Lang, SiteContent> = { en, fr };

export const getContent = (lang: Lang): SiteContent => contentByLang[lang];

/** Current language, derived from the URL so it stays correct across client-side navigation. */
export const currentLang = (): Lang => langFromPath(page.url.pathname);

/** Content for the current page's language. Call inside `$derived` to stay reactive. */
export const t = (): SiteContent => contentByLang[currentLang()];
