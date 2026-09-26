import type { ParamMatcher } from '@sveltejs/kit';

// Only non-default languages get a URL segment; English is served at the root.
export const match: ParamMatcher = (param) => param === 'fr';
