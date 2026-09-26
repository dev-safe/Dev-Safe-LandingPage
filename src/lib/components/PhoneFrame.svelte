<script lang="ts">
  import type { Screenshot } from '$lib/data/content';

  let { screenshot }: { screenshot: Screenshot } = $props();
</script>

<figure class="w-full flex flex-col items-center">
  <div class="relative w-[260px] rounded-[2.25rem] border-[7px] border-ds-elevated bg-ds-elevated shadow-[0_16px_48px_rgba(0,0,0,0.35)] overflow-hidden ring-1 ring-ds-border transition-transform duration-500 group-hover:-translate-y-1">
    <img
      src={screenshot.src}
      alt={screenshot.alt}
      width={screenshot.width}
      height={screenshot.height}
      loading="lazy"
      decoding="async"
      class="block w-full h-auto rounded-[1.75rem]"
    />
  </div>
  <figcaption class="mt-4 text-center text-[11px] font-mono uppercase tracking-wider text-slate-500">
    {screenshot.caption}
  </figcaption>
</figure>
