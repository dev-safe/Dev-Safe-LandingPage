<script lang="ts">
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import BrandIcon from './BrandIcon.svelte';

  const wa = $derived(t().whatsapp);
</script>

<!-- Floating chat button. z-30 keeps it under the navbar (z-50) and the mobile menu overlay (z-40). -->
<a
  href={whatsappUrl(wa.message)}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={wa.ariaLabel}
  class="group fixed z-30 right-4 sm:right-6 bottom-[max(1rem,env(safe-area-inset-bottom))] sm:bottom-6 flex items-center gap-2 h-14 pl-4 pr-4 sm:pr-5 rounded-full bg-[#25D366] text-[#052e1c] font-heading font-semibold text-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)] ring-1 ring-black/10 hover:bg-[#1ebe5b] hover:-translate-y-0.5 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ds-accent"
>
  <span class="relative flex items-center justify-center">
    <span class="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping [animation-iteration-count:4]" aria-hidden="true"></span>
    <BrandIcon name="whatsapp" class="relative w-6 h-6" />
  </span>
  <span class="hidden sm:inline">{wa.label}</span>
</a>
