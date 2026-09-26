<script lang="ts">
  /**
   * Decorative section background. Expects grayscale variants in static/images/
   * named `{name}-{width}.avif|webp` plus `{name}-{fallbackWidth}.jpg`; the
   * luminosity blend tints them to the active palette. See README "Theme Tokens".
   */
  interface Props {
    name: string;
    widths: [number, number];
    fallbackHeight: number;
    /** Above-the-fold photos load eagerly with high priority. */
    priority?: boolean;
    class?: string;
  }

  let { name, widths, fallbackHeight, priority = false, class: className = '' }: Props = $props();

  const sizes = '(min-width: 1024px) 70vw, 100vw';
  const srcset = (ext: string) => widths.map((w) => `/images/${name}-${w}.${ext} ${w}w`).join(', ');
</script>

<div class="section-photo absolute inset-0 lg:left-[30%] pointer-events-none z-0 {className}" aria-hidden="true">
  <picture>
    <source type="image/avif" srcset={srcset('avif')} {sizes} />
    <source type="image/webp" srcset={srcset('webp')} {sizes} />
    <img
      src="/images/{name}-{widths[0]}.jpg"
      alt=""
      width={widths[0]}
      height={fallbackHeight}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
      class="h-full w-full object-cover"
    />
  </picture>
</div>

<style>
  /* Fades out toward the text column and the section edges so copy keeps its contrast. */
  .section-photo {
    opacity: var(--photo-opacity, 0.3);
    mix-blend-mode: luminosity;
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, rgb(0 0 0 / 0.5) 55%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, rgb(0 0 0 / 0.5) 55%, transparent 100%);
  }

  @media (min-width: 1024px) {
    .section-photo {
      opacity: var(--photo-opacity-lg, 0.45);
      -webkit-mask-image:
        linear-gradient(to right, transparent 0%, #000 45%),
        linear-gradient(to bottom, #000 70%, transparent 100%);
      -webkit-mask-composite: source-in;
      mask-image:
        linear-gradient(to right, transparent 0%, #000 45%),
        linear-gradient(to bottom, #000 70%, transparent 100%);
      mask-composite: intersect;
    }
  }

  :global(.light) .section-photo { opacity: var(--photo-opacity-light, 0.12); }
</style>
