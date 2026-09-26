import type { EntryGenerator } from './$types';

// `/` is found by the prerender crawler; list `/fr` explicitly so it never depends on a link.
export const entries: EntryGenerator = () => [{ lang: 'fr' }];
