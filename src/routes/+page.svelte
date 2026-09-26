<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import WhyDevSafe from '$lib/components/WhyDevSafe.svelte';
  import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
  import Team from '$lib/components/Team.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import { clientWork, products } from '$lib/data/content';
  import { homeJsonLd } from '$lib/seo/schema';
</script>

<Seo path="/" jsonLd={homeJsonLd()} />

<Navbar />
<main>
  <Hero />
  <Services />
  <WhyDevSafe />
  <ProjectShowcase id="work" section={clientWork} />
  <ProjectShowcase id="products" section={products} background="bg-ds-bg" />
  <Team />
  <CTABanner />
</main>
<Footer />
