<script lang="ts">
  /**
   * Decorative, silent looping section background. Expects grayscale files in
   * static/videos/: `{name}-loop.webm|mp4` (no audio track) and
   * `{name}-poster.avif|webp|jpg`. The still poster is server-rendered; the
   * video is only fetched once the section nears the viewport, and never for
   * visitors with reduced motion or Save-Data enabled.
   */
  interface Props {
    name: string;
    width: number;
    height: number;
    class?: string;
  }

  let { name, width, height, class: className = '' }: Props = $props();

  let container: HTMLDivElement;
  let video: HTMLVideoElement | undefined = $state();
  let playVideo = $state(false);

  $effect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reducedMotion || saveData) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo = true;
          video?.play().catch(() => {});
        } else {
          video?.pause();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(container);
    return () => observer.disconnect();
  });
</script>

<div bind:this={container} class="section-video absolute inset-x-0 top-0 h-[34rem] md:h-auto md:bottom-0 pointer-events-none z-0 {className}" aria-hidden="true">
  <picture>
    <source type="image/avif" srcset="/videos/{name}-poster.avif" />
    <source type="image/webp" srcset="/videos/{name}-poster.webp" />
    <img src="/videos/{name}-poster.jpg" alt="" {width} {height} loading="lazy" decoding="async" class="h-full w-full object-cover" />
  </picture>

  {#if playVideo}
    <video
      bind:this={video}
      class="absolute inset-0 h-full w-full object-cover"
      poster="/videos/{name}-poster.jpg"
      {width}
      {height}
      muted
      autoplay
      loop
      playsinline
      preload="auto"
      disablepictureinpicture
      disableremoteplayback
      tabindex="-1"
    >
      <source src="/videos/{name}-loop.webm" type="video/webm" />
      <source src="/videos/{name}-loop.mp4" type="video/mp4" />
    </video>
  {/if}
</div>

<style>
  /*
   * Faint and palette-tinted. Mobile: confined to the top of the stacked section so
   * the footage isn't zoomed beyond recognition. md+: faded at every edge because
   * the copy spans the full width.
   */
  .section-video {
    opacity: var(--video-opacity, 0.22);
    mix-blend-mode: luminosity;
    -webkit-mask-image: linear-gradient(to bottom, #000 35%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 35%, transparent 100%);
  }

  @media (min-width: 768px) {
    .section-video {
      -webkit-mask-image: radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%);
      mask-image: radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 100%);
    }
  }

  :global(.light) .section-video { opacity: var(--video-opacity-light, 0.1); }
</style>
