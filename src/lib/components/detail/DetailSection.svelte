<script lang="ts">
  import type { Snippet } from 'svelte';
  import { reveal } from '$lib/actions/reveal';

  let {
    heading,
    id,
    surface = false,
    children
  }: { heading: string; id?: string; surface?: boolean; children: Snippet } = $props();
</script>

<section {id} class="py-14 sm:py-20 {surface ? 'bg-ds-surface border-y border-ds-border/40' : 'bg-ds-bg'}">
  <div class="max-w-6xl mx-auto px-5 sm:px-8">
    <h2
      class="font-heading text-[1.6rem] sm:text-3xl font-medium tracking-tight text-ds-fg"
      data-reveal
      use:reveal={{ y: 20, duration: 600 }}
    >
      {heading}
    </h2>
    <span class="cm-rule mt-4 mb-8 sm:mb-10" aria-hidden="true"></span>
    {@render children()}
  </div>
</section>
