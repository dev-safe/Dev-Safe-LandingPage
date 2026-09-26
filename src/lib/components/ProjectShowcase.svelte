<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import ProjectCard from './ProjectCard.svelte';
  import type { ProjectSection } from '$lib/data/content';

  let {
    id,
    section,
    background = 'bg-ds-surface'
  }: { id: string; section: ProjectSection; background?: string } = $props();
</script>

<section 
  {id}
  class="relative py-24 {background} grid-bg overflow-hidden border-b border-ds-border/40"
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span
        class="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ds-cyan mb-3"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        {section.eyebrow}
      </span>
      <h2 
        class="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-ds-fg mb-4"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        {section.heading}
      </h2>
      <p 
        class="font-body text-ds-fg-muted text-sm sm:text-base leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 150 }}
      >
        {section.subtitle}
      </p>
    </div>

    <!-- Project Cards -->
    <div class="space-y-8">
      {#each section.projects as project, index}
        <ProjectCard {project} {index} />
      {/each}
    </div>

    <!-- Call to Action below card -->
    {#if section.cta}
      <div 
        class="text-center mt-12"
        data-reveal use:reveal={{ y: 15, duration: 500, delay: 500 }}
      >
        <span class="text-sm text-ds-fg-muted font-body">
          {section.cta.text}
          <a href={section.cta.link.href} class="text-ds-cyan font-semibold hover:underline">
            {section.cta.link.text}
          </a>
        </span>
      </div>
    {/if}

  </div>
</section>
