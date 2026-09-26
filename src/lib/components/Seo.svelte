<script lang="ts">
  import { absoluteUrl, defaultLang, languages, localeConfig, localizePath, site, type Lang } from '$lib/config/site';
  import { getContent } from '$lib/data/content';

  type Props = {
    title?: string;
    description?: string;
    /** Language-neutral path (e.g. `/`); the language prefix is added automatically. */
    path?: string;
    lang?: Lang;
    type?: 'website' | 'article';
    noindex?: boolean;
    jsonLd?: Record<string, unknown>;
  };

  let {
    title,
    description,
    path = '/',
    lang = defaultLang,
    type = 'website',
    noindex = false,
    jsonLd
  }: Props = $props();

  const seo = $derived(getContent(lang).seo);
  const pageTitle = $derived(title ?? seo.title);
  const pageDescription = $derived(description ?? seo.description);
  const canonical = $derived(absoluteUrl(localizePath(path, lang)));
  const alternates = $derived(
    languages.map((l) => ({ hreflang: localeConfig[l].htmlLang, href: absoluteUrl(localizePath(path, l)) }))
  );
  const xDefault = $derived(absoluteUrl(localizePath(path, defaultLang)));
  const ogLocale = $derived(localeConfig[lang].ogLocale);
  const ogLocaleAlternates = $derived(languages.filter((l) => l !== lang).map((l) => localeConfig[l].ogLocale));
  const image = absoluteUrl(site.ogImage.path);
  // Escape "<" so content can never close the script tag early.
  const jsonLdHtml = $derived(
    jsonLd
      ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` + 'script>'
      : ''
  );
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <link rel="canonical" href={canonical} />
  {#if !noindex}
    {#each alternates as alt (alt.hreflang)}
      <link rel="alternate" hreflang={alt.hreflang} href={alt.href} />
    {/each}
    <link rel="alternate" hreflang="x-default" href={xDefault} />
  {/if}
  <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content={ogLocale} />
  {#each ogLocaleAlternates as alt (alt)}
    <meta property="og:locale:alternate" content={alt} />
  {/each}
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content={String(site.ogImage.width)} />
  <meta property="og:image:height" content={String(site.ogImage.height)} />
  <meta property="og:image:alt" content={seo.ogImageAlt} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={seo.ogImageAlt} />

  {#if jsonLdHtml}
    {@html jsonLdHtml}
  {/if}
</svelte:head>
