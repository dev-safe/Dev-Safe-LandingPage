import type { Handle } from '@sveltejs/kit';
import { langFromPath, localeConfig } from '$lib/config/site';

// Set <html lang> per language in the server/prerendered HTML (app.html uses %lang%).
export const handle: Handle = ({ event, resolve }) => {
  const { htmlLang } = localeConfig[langFromPath(event.url.pathname)];
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', htmlLang)
  });
};
