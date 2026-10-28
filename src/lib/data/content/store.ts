import type { Lang } from '$lib/config/site';
import googlePlayEn from '$lib/assets/badges/google-play-en.webp';
import googlePlayFr from '$lib/assets/badges/google-play-fr.webp';
import type { ImageAsset } from './types';

export const bookbridgePlayUrl = 'https://play.google.com/store/apps/details?id=cm.devsafe.bookbridge';

/** Official Google Play badges, cropped to the visible badge. */
export const googlePlayBadge: Record<Lang, ImageAsset> = {
  en: { src: googlePlayEn, width: 564, height: 168 },
  fr: { src: googlePlayFr, width: 646, height: 192 }
};
