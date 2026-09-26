<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Services from '$lib/components/Services.svelte';
  import WhyDevSafe from '$lib/components/WhyDevSafe.svelte';
  import ProjectShowcase from '$lib/components/ProjectShowcase.svelte';
  import Team from '$lib/components/Team.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { clientWork, products } from '$lib/data/content';
</script>

<svelte:head>
  <title>DevSafe — Software Agency & Product Studio</title>
  <meta name="description" content="DevSafe is a software and cybersecurity agency in Cameroon that also builds its own products, including BookBridge." />
</svelte:head>

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
