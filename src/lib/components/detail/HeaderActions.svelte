<script lang="ts">
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import BrandIcon from '../BrandIcon.svelte';

  const c = $derived(t());
</script>

<div class="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
  <a
    href="#contact"
    class="flex items-center justify-center bg-ds-primary text-ds-on-primary px-6 py-3 text-[15px] rounded-lg font-medium hover:bg-ds-primary-hover active:scale-[0.98] transition-all duration-200 shadow-[0_8px_30px_-6px_rgb(var(--ds-primary)/0.7)]"
  >
    {c.details.ui.bookConsultation} →
  </a>
  <a
    href={whatsappUrl(c.whatsapp.message)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={c.whatsapp.ariaLabel}
    class="flex items-center justify-center gap-2 border border-ds-border bg-ds-bg/50 backdrop-blur text-ds-fg hover:bg-ds-elevated px-6 py-3 text-[15px] rounded-lg font-medium active:scale-[0.98] transition-all duration-200"
  >
    <BrandIcon name="whatsapp" class="w-5 h-5 text-[#25D366]" />
    {c.whatsapp.short}
  </a>
</div>
