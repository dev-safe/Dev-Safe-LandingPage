<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Component } from 'svelte';
  import { t } from '$lib/data/content';

  const trustStrip = $derived(t().trustStrip);
</script>

<section aria-labelledby="trust-heading" class="relative bg-ds-surface border-y border-ds-border/40">
  <div class="max-w-7xl mx-auto px-6 py-12">
    <h2
      id="trust-heading"
      class="text-center lg:text-left font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ds-accent mb-8"
      data-reveal use:reveal={{ y: 10, duration: 500 }}
    >
      {trustStrip.heading}
    </h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {#each trustStrip.proof as item, index (item.title)}
        {@const Icon = item.icon as Component<{ class?: string }>}
        <li class="flex items-start gap-3" data-reveal use:reveal={{ y: 15, duration: 500, delay: index * 100 }}>
          <span class="shrink-0 w-11 h-11 rounded-xl bg-ds-accent/10 border border-ds-accent/30 flex items-center justify-center">
            <Icon class="w-5 h-5 text-ds-accent" />
          </span>
          <div>
            <p class="font-heading text-base font-bold text-ds-fg leading-snug">{item.title}</p>
            <p class="font-body text-sm text-ds-fg-muted leading-relaxed mt-1">{item.text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>
