<script lang="ts">
  import { page } from '$app/state';
  import { t } from '$lib/data/content';
  import { site } from '$lib/config/site';
  import Navbar from '$lib/components/Navbar.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import PageHeader from '$lib/components/detail/PageHeader.svelte';

  const c = $derived(t());
  const copy = $derived(c.details.errorPage);
  const notFound = $derived(page.status === 404);
  const title = $derived(notFound ? copy.notFoundTitle : copy.errorTitle);
</script>

<!-- No <Seo>: error pages get no canonical or hreflang, and must never be indexed. -->
<svelte:head>
  <title>{title} | {site.name}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<Navbar />
<main>
  <PageHeader
    crumbs={[{ name: c.details.ui.home, href: c.meta.home }, { name: `${copy.eyebrow} ${page.status}` }]}
    eyebrow={`${copy.eyebrow} ${page.status}`}
    {title}
    lead={notFound ? copy.notFoundLead : copy.errorLead}
  >
    <a
      href={c.meta.home}
      class="inline-flex items-center justify-center bg-ds-primary text-ds-on-primary px-6 py-3 text-[15px] rounded-lg font-medium hover:bg-ds-primary-hover active:scale-[0.98] transition-all duration-200 shadow-[0_8px_30px_-6px_rgb(var(--ds-primary)/0.7)]"
    >
      ← {copy.backHome}
    </a>
  </PageHeader>
  <CTABanner />
</main>
<Footer />
<WhatsAppButton />
