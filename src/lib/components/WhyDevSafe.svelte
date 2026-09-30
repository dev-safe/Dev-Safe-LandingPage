<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Component } from 'svelte';
  import { t } from '$lib/data/content';
  import SectionVideo from './SectionVideo.svelte';

  const whyDevSafe = $derived(t().whyDevSafe);
</script>

<section 
  id="about" 
  class="relative py-16 sm:py-24 bg-ds-bg overflow-hidden"
>
  <SectionVideo name="workshop" width={576} height={384} />

  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
      <span class="eyebrow mb-3" data-reveal use:reveal={{ y: 20, duration: 600 }}>{whyDevSafe.eyebrow}</span>
      <h2 
        class="font-heading text-[1.75rem] sm:text-4xl font-medium tracking-tight text-ds-fg mb-4"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        {whyDevSafe.heading}
      </h2>
      <span class="cm-rule mx-auto" aria-hidden="true"></span>
    </div>

    <!-- 2x2 Grid of Reasons -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 md:gap-y-10">
      {#each whyDevSafe.items as item, index}
        {@const Icon = item.icon as Component<{ class?: string }>}
        <div 
          class="flex items-start gap-4 sm:gap-5 p-3 sm:p-6 rounded-xl hover:bg-ds-surface/30 border border-transparent hover:border-ds-border/30 transition-all duration-300 hover:-translate-y-1 group"
          data-reveal use:reveal={{ y: 35, duration: 600, delay: index * 100 + 200 }}
        >
          <!-- Icon Box -->
          <div class="w-12 h-12 sm:w-[60px] sm:h-[60px] shrink-0 bg-ds-elevated border border-ds-border/60 rounded-xl flex items-center justify-center shadow-[0_0_16px_rgb(var(--ds-accent)/0.04)] transition-all duration-300 group-hover:scale-105 group-hover:border-ds-accent/40">
            <Icon class="w-6 h-6 sm:w-7 sm:h-7 text-ds-accent transition-transform duration-300 group-hover:rotate-3" />
          </div>

          <!-- Text Content -->
          <div class="space-y-2">
            <h3 class="font-body text-base sm:text-lg font-bold text-ds-fg tracking-wide group-hover:text-ds-accent transition-colors duration-200">
              {item.title}
            </h3>
            <p class="font-body text-ds-fg-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <p class="mt-16 max-w-2xl mx-auto text-center font-body text-xs text-ds-fg-muted leading-relaxed">
      {whyDevSafe.videoCaption}
    </p>

  </div>
</section>
