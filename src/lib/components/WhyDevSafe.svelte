<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Component } from 'svelte';
  import { t } from '$lib/data/content';

  const whyDevSafe = $derived(t().whyDevSafe);
</script>

<section 
  id="about" 
  class="relative py-24 bg-ds-bg overflow-hidden"
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-3xl mx-auto mb-20">
      <h2 
        class="font-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        <span class="gradient-text">{whyDevSafe.heading}</span>
      </h2>
    </div>

    <!-- 2x2 Grid of Reasons -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {#each whyDevSafe.items as item, index}
        {@const Icon = item.icon as Component<{ class?: string }>}
        <div 
          class="flex items-start gap-5 p-6 rounded-2xl hover:bg-ds-surface/30 border border-transparent hover:border-ds-border/30 transition-all duration-300 hover:-translate-y-1 group"
          data-reveal use:reveal={{ y: 35, duration: 600, delay: index * 100 + 200 }}
        >
          <!-- Icon Box -->
          <div class="w-[60px] h-[60px] shrink-0 bg-ds-elevated border border-ds-border/60 rounded-xl flex items-center justify-center shadow-[0_0_16px_rgba(0,212,255,0.04)] transition-all duration-300 group-hover:scale-105 group-hover:border-ds-cyan/40">
            <Icon class="w-7 h-7 text-ds-cyan transition-transform duration-300 group-hover:rotate-3" />
          </div>

          <!-- Text Content -->
          <div class="space-y-2">
            <h3 class="font-heading text-lg font-bold text-ds-fg tracking-wide group-hover:text-ds-cyan transition-colors duration-200">
              {item.title}
            </h3>
            <p class="font-body text-ds-fg-muted text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
