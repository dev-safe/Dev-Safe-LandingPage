<script lang="ts">
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import BrandIcon from './BrandIcon.svelte';
  import HeroDemo from './HeroDemo.svelte';
  import HeroLandscape from './HeroLandscape.svelte';
  import TrustStrip from './TrustStrip.svelte';

  const c = $derived(t());
  const hero = $derived(c.hero);

  const heroSrcset = (ext: string) => `/images/hero-cameroon-768.${ext} 768w, /images/hero-cameroon-1536.${ext} 1536w`;
  const heroSizes = '(min-width: 1600px) 1600px, 100vw';
</script>

<!-- Railway-style inset panel: a Yaoundé dusk sky, the animated DevSafe console,
     then the Cameroon photo as the landscape and the proof grid at the bottom. -->
<section class="hero px-2.5 sm:px-4 pt-[82px] sm:pt-[94px] bg-ds-bg">
  <div class="panel relative max-w-[1600px] mx-auto rounded-2xl overflow-hidden bg-ds-surface">
    <div class="sky relative">
      <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 lg:pt-24 flex flex-col items-center text-center">
        <p class="rise inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ds-border bg-ds-bg/40 backdrop-blur mb-5 sm:mb-7">
          <span class="cm-flag" aria-hidden="true"></span>
          <span class="text-[11px] sm:text-xs font-mono text-ds-fg-muted">{hero.badge}</span>
        </p>

        <h1 class="rise font-heading font-medium text-[2.1rem] sm:text-5xl lg:text-[3.6rem] leading-[1.1] tracking-[-0.03em] text-ds-fg max-w-[820px]" style="animation-delay: 80ms">
          {hero.headline.before}<span class="text-ds-accent italic">{hero.headline.highlight}</span>{hero.headline.after}
        </h1>

        <p class="rise mt-4 sm:mt-6 text-[15px] sm:text-lg text-ds-fg-muted max-w-[620px] leading-relaxed" style="animation-delay: 160ms">
          {hero.subheadline}
        </p>

        <div class="rise mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto" style="animation-delay: 240ms">
          <a
            href={hero.cta.primary.href}
            class="flex items-center justify-center bg-ds-primary text-ds-on-primary px-6 py-3 text-[15px] rounded-lg font-medium hover:bg-ds-primary-hover active:scale-[0.98] transition-all duration-200 shadow-[0_8px_30px_-6px_rgb(var(--ds-primary)/0.7)]"
          >
            {hero.cta.primary.text}
          </a>
          <a
            href={hero.cta.secondary.href}
            class="flex items-center justify-center border border-ds-border bg-ds-bg/50 backdrop-blur text-ds-fg hover:bg-ds-elevated px-6 py-3 text-[15px] rounded-lg font-medium active:scale-[0.98] transition-all duration-200"
          >
            {hero.cta.secondary.text}
          </a>
        </div>

        <a
          href={whatsappUrl(c.whatsapp.message)}
          target="_blank"
          rel="noopener noreferrer"
          class="rise mt-5 text-[13px] sm:text-sm text-ds-fg-muted hover:text-ds-fg transition-colors"
          style="animation-delay: 320ms"
        >
          <BrandIcon name="whatsapp" class="inline-block w-5 h-5 mr-1.5 -mt-0.5 align-middle text-[#25D366]" />{c.whatsapp.prompt}
          <span class="font-mono text-ds-fg whitespace-nowrap">{c.footer.contact.whatsapp.text}</span>
          <span class="sr-only">{c.whatsapp.newTab}</span>
        </a>

        <div class="rise w-full mt-12 sm:mt-16" style="animation-delay: 420ms">
          <HeroDemo />
        </div>
      </div>

      <!-- Painted horizon (Mount Cameroon at sunset) rising behind the lower half of the console. -->
      <div class="relative z-[1] h-[230px] sm:h-[320px] lg:h-auto lg:aspect-[1600/520] -mt-[170px] sm:-mt-[230px] lg:-mt-[300px] pointer-events-none" aria-hidden="true">
        <HeroLandscape />
      </div>

      <!-- The landscape: Yaoundé photo (man at work, Reunification monument, statue), colour-graded
           to dusk so it continues the painted horizon. Mobile shows the whole 3:2 frame; wider
           screens crop a little from the bottom. -->
      <div class="hero-photo relative z-[2] -mt-10 sm:-mt-16 lg:-mt-24 aspect-[3/2] lg:aspect-[16/8]" aria-hidden="true">
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
            class="h-full w-full object-cover object-[center_20%]"
          />
        </picture>
        <div class="grade"></div>
      </div>
    </div>

    <div class="h-px bg-ds-border" aria-hidden="true"></div>
    <TrustStrip />
  </div>
</section>

<style>
  .panel {
    box-shadow: inset 0 0 0 1.5px rgb(255 255 255 / 0.12);
  }

  :global(.light) .panel {
    box-shadow: inset 0 0 0 1.5px rgb(0 0 0 / 0.08);
  }

  /* The fade matches the overlap with the painted horizon, so no bare sky shows between them. */
  .hero-photo {
    --fade: 2.5rem;
    -webkit-mask-image: linear-gradient(to bottom, transparent 0, #000 var(--fade));
    mask-image: linear-gradient(to bottom, transparent 0, #000 var(--fade));
  }

  /* Dusk grade: a purple wash, a warm glow on the sun side (the painted sun sits at ~75% across)
     and a darker sky and foot so the photo melts into the horizon above and the proof grid
     below. Light mode keeps a gentler, daytime version. */
  .hero-photo {
    --grade-tint: 0.85;
    --grade-sun: 0.55;
    --grade-edge: 0.55;
  }

  :global(.light) .hero-photo {
    --grade-tint: 0.4;
    --grade-sun: 0.35;
    --grade-edge: 0.3;
  }

  .hero-photo img {
    filter: saturate(0.9) contrast(1.05) brightness(0.9);
  }

  :global(.light) .hero-photo img {
    filter: saturate(0.95) contrast(1.02);
  }

  .grade {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .grade {
    background: rgb(var(--ds-primary));
    mix-blend-mode: soft-light;
    opacity: var(--grade-tint);
  }

  .hero-photo::before,
  .hero-photo::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  .hero-photo::before {
    background: radial-gradient(55% 60% at 76% 6%, var(--ls-glow), transparent 70%);
    mix-blend-mode: screen;
    opacity: var(--grade-sun);
  }

  .hero-photo::after {
    background: linear-gradient(to bottom,
      rgb(var(--ds-bg) / var(--grade-edge)) 0%, transparent 35%,
      transparent 72%, rgb(var(--ds-bg) / var(--grade-edge)) 100%);
  }

  @media (min-width: 640px) {
    .hero-photo { --fade: 4rem; }
  }

  @media (min-width: 1024px) {
    .hero-photo { --fade: 6rem; }
  }

  .rise {
    opacity: 0;
    animation: rise-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .rise {
      opacity: 1;
      animation: none;
    }
  }
</style>
