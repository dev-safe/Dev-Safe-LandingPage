<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import TrustStrip from '$lib/components/TrustStrip.svelte';
  import Services from '$lib/components/Services.svelte';
  import WhyDevSafe from '$lib/components/WhyDevSafe.svelte';
  import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
  import Team from '$lib/components/Team.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { t } from '$lib/data/content';
  import { homeJsonLd } from '$lib/seo/schema';

  const c = $derived(t());
</script>

<Seo title={c.seo.title} description={c.seo.description} path="/" lang={c.meta.lang} jsonLd={homeJsonLd(c)} />

<Navbar />
<main>
  <Hero />
  <TrustStrip />
  <Services />
  <WhyDevSafe />
  <ProjectShowcase id="work" section={c.clientWork} />
  <ProjectShowcase id="products" section={c.products} background="bg-ds-bg" />
  <Team />
  <CTABanner />
</main>
<Footer />
