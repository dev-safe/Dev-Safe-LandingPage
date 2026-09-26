<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { FileLock } from '@lucide/svelte';
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
  class="relative py-24 {background} pattern-bg overflow-hidden border-b border-ds-border/40"
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span
        class="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-ds-accent mb-3"
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
      <span class="cm-rule mx-auto mb-5" aria-hidden="true"></span>
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

    {#if section.confidential}
      {@const nda = section.confidential}
      <aside
        class="mt-8 glass-card border border-dashed border-ds-border/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
        data-reveal use:reveal={{ y: 15, duration: 500, delay: 400 }}
      >
        <div class="flex items-center gap-4 shrink-0">
          <span class="w-12 h-12 rounded-xl bg-ds-accent/10 border border-ds-accent/30 flex items-center justify-center">
            <FileLock class="w-6 h-6 text-ds-accent" aria-hidden="true" />
          </span>
          <span class="font-heading text-4xl sm:text-5xl font-bold text-ds-fg tabular-nums">{nda.count}</span>
        </div>
        <div class="flex-1">
          <h3 class="font-heading text-lg font-bold text-ds-fg">{nda.title}</h3>
          <p class="font-body text-sm text-ds-fg-muted leading-relaxed mt-1">{nda.text}</p>
        </div>
        <a href={nda.link.href} class="shrink-0 text-sm text-ds-accent font-semibold hover:underline">
          {nda.link.text}
        </a>
      </aside>
    {/if}

  </div>
</section>
