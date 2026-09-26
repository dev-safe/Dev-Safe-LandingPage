<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Component } from 'svelte';
  import { trustStrip } from '$lib/data/content';
</script>

<section aria-labelledby="trust-heading" class="relative bg-ds-surface border-y border-ds-border/40">
  <div class="max-w-7xl mx-auto px-6 py-12">
    <h2
      id="trust-heading"
      class="text-center lg:text-left font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ds-cyan mb-8"
      data-reveal use:reveal={{ y: 10, duration: 500 }}
    >
      {trustStrip.heading}
    </h2>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      {#each trustStrip.proof as item, index (item.title)}
        {@const Icon = item.icon as Component<{ class?: string }>}
        <li class="flex items-start gap-3" data-reveal use:reveal={{ y: 15, duration: 500, delay: index * 100 }}>
          <span class="shrink-0 w-10 h-10 rounded-lg bg-ds-elevated border border-ds-border flex items-center justify-center">
            <Icon class="w-5 h-5 text-ds-cyan" />
          </span>
          <div>
            <p class="font-heading text-sm font-bold text-ds-fg">{item.title}</p>
            <p class="font-body text-xs text-ds-fg-muted leading-relaxed mt-0.5">{item.text}</p>
          </div>
        </li>
      {/each}
    </ul>

    <div
      class="mt-10 pt-6 border-t border-ds-border/40 flex flex-col sm:flex-row items-center gap-4"
      data-reveal use:reveal={{ y: 10, duration: 500, delay: 400 }}
    >
      <span class="text-[11px] font-mono uppercase tracking-wider text-ds-fg-subtle shrink-0">{trustStrip.stack.label}</span>
      <ul class="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-2">
        {#each trustStrip.stack.items as tech (tech)}
          <li class="font-mono text-sm font-semibold text-ds-fg-muted hover:text-ds-cyan transition-colors duration-200">{tech}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>
