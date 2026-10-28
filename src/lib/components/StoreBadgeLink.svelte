<script lang="ts">
  import type { ExternalLink, ImageAsset } from '$lib/data/content';

  let { link, badge, class: className = '' }: { link: ExternalLink; badge: ImageAsset; class?: string } = $props();
</script>

<a
  href={link.href}
  target="_blank"
  rel="noopener noreferrer"
  class="inline-block rounded-lg transition-opacity duration-200 hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent {className}"
>
  <img src={badge.src} alt={link.text} width={badge.width} height={badge.height} loading="lazy" decoding="async" class="h-12 w-auto" />
</a>
