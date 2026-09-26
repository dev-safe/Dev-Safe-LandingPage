<script lang="ts">
  import { intersect } from '$lib/actions/intersect';
  import { fly } from 'svelte/transition';
  import ProjectCard from './ProjectCard.svelte';
  import type { ProjectSection } from '$lib/data/content';

  let {
    id,
    section,
    background = 'bg-ds-surface'
  }: { id: string; section: ProjectSection; background?: string } = $props();

  let visible = $state(false);
</script>

<section 
  {id}
  class="relative py-24 {background} grid-bg overflow-hidden border-b border-ds-border/40"
  use:intersect={{ threshold: 0.1, onIntersect: () => { visible = true; } }}
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      {#if visible}
        <span
          class="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ds-cyan mb-3"
          transition:fly={{ y: 20, duration: 600 }}
        >
          {section.eyebrow}
        </span>
        <h2 
          class="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
          transition:fly={{ y: 20, duration: 600 }}
        >
          {section.heading}
        </h2>
        <p 
          class="font-body text-slate-400 text-sm sm:text-base leading-relaxed"
          transition:fly={{ y: 20, duration: 600, delay: 150 }}
        >
          {section.subtitle}
        </p>
      {/if}
    </div>

    <!-- Project Cards -->
    {#if visible}
      <div class="space-y-8">
        {#each section.projects as project, index}
          <ProjectCard {project} {index} />
        {/each}
      </div>
    {/if}

    <!-- Call to Action below card -->
    {#if visible && section.cta}
      <div 
        class="text-center mt-12"
        transition:fly={{ y: 15, duration: 500, delay: 500 }}
      >
        <span class="text-sm text-slate-400 font-body">
          {section.cta.text}
          <a href={section.cta.link.href} class="text-ds-cyan font-semibold hover:underline">
            {section.cta.link.text}
          </a>
        </span>
      </div>
    {/if}

  </div>
</section>
