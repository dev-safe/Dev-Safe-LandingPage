<script lang="ts">
  import type { Snippet } from 'svelte';

  type Crumb = { name: string; href?: string };

  let {
    crumbs,
    eyebrow,
    title,
    lead,
    children,
    aside
  }: {
    crumbs: Crumb[];
    eyebrow: string;
    title: string;
    lead: string;
    /** Calls to action under the lead. */
    children?: Snippet;
    /** Optional visual on the right (e.g. a phone screenshot). */
    aside?: Snippet;
  } = $props();
</script>

<!-- Same inset dusk panel as the homepage hero, sized for an interior page. -->
<section class="px-2.5 sm:px-4 pt-[82px] sm:pt-[94px] bg-ds-bg">
  <div class="panel relative max-w-[1600px] mx-auto rounded-2xl overflow-hidden bg-ds-surface">
    <div class="sky relative">
      <div class="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 py-10 sm:py-16 lg:py-20 grid gap-10 {aside ? 'lg:grid-cols-[1fr_auto] lg:items-center' : ''}">
        <div class="max-w-3xl">
          <nav aria-label="Breadcrumb" class="rise mb-6 sm:mb-8">
            <ol class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-ds-fg-subtle">
              {#each crumbs as crumb, i (crumb.name)}
                <li class="flex items-center gap-2">
                  {#if i > 0}<span aria-hidden="true">/</span>{/if}
                  {#if crumb.href}
                    <a href={crumb.href} class="hover:text-ds-accent transition-colors">{crumb.name}</a>
                  {:else}
                    <span aria-current="page" class="text-ds-fg-muted">{crumb.name}</span>
                  {/if}
                </li>
              {/each}
            </ol>
          </nav>

          <p class="rise eyebrow mb-4" style="animation-delay: 60ms">{eyebrow}</p>

          <h1
            class="rise font-heading font-medium text-[2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-[-0.03em] text-ds-fg"
            style="animation-delay: 120ms"
          >
            {title}
          </h1>

          <p class="rise mt-5 sm:mt-6 text-[15px] sm:text-lg text-ds-fg-muted max-w-2xl leading-relaxed" style="animation-delay: 180ms">
            {lead}
          </p>

          {#if children}
            <div class="rise mt-7 sm:mt-9" style="animation-delay: 240ms">
              {@render children()}
            </div>
          {/if}
        </div>

        {#if aside}
          <div class="rise" style="animation-delay: 300ms">
            {@render aside()}
          </div>
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
  .panel {
    box-shadow: inset 0 0 0 1.5px rgb(255 255 255 / 0.12);
  }

  :global(.light) .panel {
    box-shadow: inset 0 0 0 1.5px rgb(0 0 0 / 0.08);
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
