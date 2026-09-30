<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Component } from 'svelte';
  import { CheckCircle2 } from '@lucide/svelte';
  import { t } from '$lib/data/content';
  import { localizePath } from '$lib/config/site';

  const c = $derived(t());
  const services = $derived(c.services);
</script>

<section
  id="services"
  class="relative py-16 sm:py-24 bg-ds-surface pattern-bg overflow-hidden border-b border-ds-border/40"
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">

    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="eyebrow mb-3" data-reveal use:reveal={{ y: 20, duration: 600 }}>{services.eyebrow}</span>
      <h2
        class="font-heading text-[1.75rem] sm:text-4xl font-medium tracking-tight text-ds-fg mb-4"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        {services.heading}
      </h2>
      <span class="cm-rule mx-auto mb-5" aria-hidden="true"></span>
      <p
        class="font-body text-ds-fg-muted text-sm sm:text-base leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 150 }}
      >
        {services.subtitle}
      </p>
    </div>

    <!-- Bento: the featured service spans the full width, the other two sit side by side below -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {#each services.items as item, index (item.title)}
        {@const Icon = item.icon as Component<{ class?: string }>}
        <article
          class="glass-card relative overflow-hidden flex flex-col border border-ds-border/70 hover:border-ds-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgb(var(--ds-accent)/0.08)] group {item.featured ? 'md:col-span-2 p-6 sm:p-8 lg:p-10' : 'p-6 sm:p-7'}"
          data-reveal use:reveal={{ y: 30, duration: 600, delay: index * 120 + 200 }}
        >
          <div
            class="absolute top-0 left-0 w-[4px] group-hover:w-[6px] h-full rounded-l-[16px] transition-all duration-300"
            style="background-color: {item.accentColor}"
          ></div>
          <div
            class="absolute -right-16 -bottom-16 {item.featured ? 'w-64 h-64' : 'w-28 h-28'} rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style="background-color: {item.accentColor}14"
          ></div>

          <div class="relative z-10 h-full {item.featured ? 'grid lg:grid-cols-2 gap-8' : 'flex flex-col'}">
            <div class="flex flex-col">
            <div class="flex items-center gap-4 mb-5">
              <div class="w-12 h-12 rounded-xl bg-ds-elevated border border-ds-border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <Icon class="w-6 h-6 text-ds-accent" />
              </div>
              {#if item.featured}
                <span class="px-2.5 py-1 rounded-md border border-ds-accent/30 text-[10px] font-mono font-bold uppercase tracking-wider text-ds-accent">{c.ui.specialty}</span>
              {/if}
            </div>

            <h3 class="font-heading {item.featured ? 'text-[1.4rem] sm:text-3xl' : 'text-lg sm:text-xl'} font-medium text-ds-fg mb-3 group-hover:text-ds-accent transition-colors duration-200">
              {item.title}
            </h3>
            <p class="font-body text-ds-fg-muted {item.featured ? 'text-[15px] sm:text-base max-w-xl' : 'text-sm'} leading-relaxed mb-4">
              {item.description}
            </p>
            <a
              href={localizePath(`/services/${item.slug}`, c.meta.lang)}
              class="inline-flex items-center gap-1.5 w-fit mb-6 text-sm font-semibold text-ds-accent hover:underline underline-offset-4 group/link"
            >
              {c.details.ui.learnMore}<span class="sr-only">: {item.title}</span>
              <span aria-hidden="true" class="inline-block transition-transform duration-200 group-hover/link:translate-x-1">→</span>
            </a>

            {#if item.featured}
              <div class="flex flex-wrap gap-2 pt-4 border-t border-ds-border/30 mt-auto">
                {#each item.tags as tag (tag)}
                  <span class="px-2.5 py-1 bg-ds-bg/60 border border-ds-border/50 rounded-md text-[10px] font-mono font-medium text-ds-accent tracking-wide">
                    {tag}
                  </span>
                {/each}
              </div>
            {/if}
            </div>

            <!-- Service visual -->
            <div class="{item.featured ? '' : 'mb-6'}">
              {#if item.visual.type === 'checklist'}
                <p class="text-[11px] font-mono uppercase tracking-wider text-ds-fg-subtle mb-3">{item.visual.heading}</p>
                <ul class="grid grid-cols-1 gap-2.5">
                  {#each item.visual.items as point (point)}
                    <li class="flex items-center gap-2.5 rounded-lg border border-ds-border/50 bg-ds-bg/40 px-3 py-2.5 text-sm text-ds-fg-muted">
                      <CheckCircle2 class="w-4 h-4 text-ds-success shrink-0" />
                      {point}
                    </li>
                  {/each}
                </ul>
              {:else if item.visual.type === 'pipeline'}
                <div class="rounded-lg border border-ds-border/50 bg-ds-bg/50 px-4 py-3 font-mono text-xs leading-6" aria-hidden="true">
                  <p class="text-ds-fg-subtle">$ devsafe ship</p>
                  {#each item.visual.steps as step, i (step)}
                    <p class="pipeline-step text-ds-fg-muted" style="--i: {i}">
                      <span class="text-ds-success">✓</span> {step}
                    </p>
                  {/each}
                </div>
              {:else if item.visual.type === 'palette'}
                <div class="flex items-center gap-4" aria-hidden="true">
                  <div class="flex -space-x-2">
                    {#each item.visual.swatches as swatch (swatch)}
                      <span
                        class="w-8 h-8 rounded-full border-2 border-ds-surface shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5"
                        style="background-color: {swatch}"
                      ></span>
                    {/each}
                  </div>
                  <span class="font-heading text-2xl font-medium text-ds-fg">Aa</span>
                </div>
              {/if}
            </div>

            {#if !item.featured}
              <div class="flex flex-wrap gap-2 pt-4 border-t border-ds-border/30 mt-auto">
                {#each item.tags as tag (tag)}
                  <span class="px-2.5 py-1 bg-ds-bg/60 border border-ds-border/50 rounded-md text-[10px] font-mono font-medium text-ds-accent tracking-wide">
                    {tag}
                  </span>
                {/each}
              </div>
            {/if}
          </div>
        </article>
      {/each}
    </div>

  </div>
</section>

<style>
  /* Steps tick in one after another when the card is hovered: a small demo of the pipeline. */
  @media (prefers-reduced-motion: no-preference) {
    :global(.group:hover) .pipeline-step {
      animation: step-in 400ms ease-out both;
      animation-delay: calc(var(--i) * 150ms);
    }
  }
  @keyframes step-in {
    from { opacity: 0; transform: translateX(-4px); }
    to { opacity: 1; transform: none; }
  }
</style>
