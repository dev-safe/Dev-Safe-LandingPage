<script lang="ts">
  import { absoluteUrl, site } from '$lib/config/site';

  type Props = {
    title?: string;
    description?: string;
    path?: string;
    type?: 'website' | 'article';
    noindex?: boolean;
    jsonLd?: Record<string, unknown>;
  };

  let {
    title = site.title,
    description = site.description,
    path = '/',
    type = 'website',
    noindex = false,
    jsonLd
  }: Props = $props();

  const canonical = $derived(absoluteUrl(path));
  const image = absoluteUrl(site.ogImage.path);
  // Escape "<" so content can never close the script tag early.
  const jsonLdHtml = $derived(
    jsonLd
      ? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` + 'script>'
      : ''
  );
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'} />

  <meta property="og:type" content={type} />
  <meta property="og:site_name" content={site.name} />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content={String(site.ogImage.width)} />
  <meta property="og:image:height" content={String(site.ogImage.height)} />
  <meta property="og:image:alt" content={site.ogImage.alt} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={site.ogImage.alt} />

  {#if jsonLdHtml}
    {@html jsonLdHtml}
  {/if}
</svelte:head>
