<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import BrandIcon from './BrandIcon.svelte';

  const c = $derived(t());
  const hero = $derived(c.hero);

  const heroSrcset = (ext: string) => `/images/hero-cameroon-768.${ext} 768w, /images/hero-cameroon-1536.${ext} 1536w`;
  const heroSizes = '(min-width: 1024px) 62vw, 100vw';
</script>

<section class="hero relative overflow-hidden bg-ds-bg pattern-bg lg:flex lg:items-center lg:min-h-[760px] pb-14 lg:pt-36 lg:pb-16">
  <!-- Hero photo: full colour. Mobile shows the whole 3:2 image under the navbar
       (no zoom); desktop places it on the right, keeping the Reunification
       monument and statue in view while fading into the text column. -->
  <div class="hero-photo absolute inset-x-0 top-[80px] aspect-[3/2] lg:bottom-0 lg:left-auto lg:w-[62%] lg:aspect-auto pointer-events-none z-0" aria-hidden="true">
    <picture>
      <source type="image/avif" srcset={heroSrcset('avif')} sizes={heroSizes} />
      <source type="image/webp" srcset={heroSrcset('webp')} sizes={heroSizes} />
      <img
        src="/images/hero-cameroon-768.jpg"
        alt=""
        width="1536"
        height="1024"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        class="h-full w-full object-cover object-top lg:object-[72%_center]"
      />
    </picture>
  </div>

  <div class="hero-content relative max-w-7xl mx-auto px-5 sm:px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 items-center">

    <!-- Left — Offer, audience, outcome -->
    <div class="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 bg-ds-elevated border border-ds-accent/30 rounded-md mb-5 sm:mb-6"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        <span class="cm-flag" aria-hidden="true"></span>
        <span class="text-[11px] sm:text-xs font-mono font-medium text-ds-accent">{hero.badge}</span>
      </div>

      <h1 class="font-heading text-[2rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-ds-fg mb-4 sm:mb-6 leading-[1.1] max-w-[640px]">
        {hero.headline.before}<span class="text-ds-accent">{hero.headline.highlight}</span>{hero.headline.after}
      </h1>

      <p
        class="font-body text-[15px] sm:text-lg text-ds-fg-muted max-w-[540px] mb-6 sm:mb-8 leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 200 }}
      >
        {hero.subheadline}
      </p>

      <div
        class="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:w-auto"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 350 }}
      >
        <a
          href={hero.cta.primary.href}
          class="flex items-center justify-center gap-2 bg-ds-primary text-ds-on-primary px-6 py-3 sm:px-8 sm:py-4 text-[15px] sm:text-base rounded-lg font-mono font-bold hover:bg-ds-primary-hover hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_0_24px_rgb(var(--ds-accent)/0.2)]"
        >
          {hero.cta.primary.text}
        </a>
        <a
          href={hero.cta.secondary.href}
          class="flex items-center justify-center border border-ds-accent text-ds-accent hover:bg-ds-accent/10 px-6 py-3 sm:px-8 sm:py-4 text-[15px] sm:text-base rounded-lg font-mono font-bold active:scale-95 transition-all duration-200"
        >
          {hero.cta.secondary.text}
        </a>
      </div>

      <a
        href={whatsappUrl(c.whatsapp.message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={c.whatsapp.ariaLabel}
        class="mt-5 max-w-[540px] text-[13px] sm:text-sm font-body text-ds-fg-muted hover:text-ds-fg transition-colors"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 450 }}
      >
        <BrandIcon name="whatsapp" class="inline-block w-5 h-5 mr-1.5 -mt-0.5 align-middle text-[#25D366]" />{c.whatsapp.prompt}
        <span class="font-mono text-ds-fg whitespace-nowrap">{c.footer.contact.whatsapp.text}</span>
      </a>
    </div>
  </div>
</section>

<style>
  /* Mobile: text starts over the faded lower part of the photo. */
  .hero-content {
    padding-top: calc(80px + 100vw * 0.6);
  }

  .hero-photo {
    -webkit-mask-image: linear-gradient(to bottom, #000 62%, transparent 98%);
    mask-image: linear-gradient(to bottom, #000 62%, transparent 98%);
  }

  @media (min-width: 1024px) {
    .hero-content {
      padding-top: 0;
    }

    .hero-photo {
      -webkit-mask-image:
        linear-gradient(to right, transparent 0%, #000 28%),
        linear-gradient(to bottom, #000 82%, transparent 100%);
      -webkit-mask-composite: source-in;
      mask-image:
        linear-gradient(to right, transparent 0%, #000 28%),
        linear-gradient(to bottom, #000 82%, transparent 100%);
      mask-composite: intersect;
    }
  }
</style>
