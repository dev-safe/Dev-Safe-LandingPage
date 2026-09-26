// The site is fully static: prerender every page to HTML at build time so crawlers get
// complete markup and Vercel serves it from the CDN edge instead of a serverless function.
export const prerender = true;
