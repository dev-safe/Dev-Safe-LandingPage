<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import type { Component } from 'svelte';
  import { services } from '$lib/data/content';


  // Typed alias to allow dynamic component rendering
  const ServiceIcon = (icon: Component) => icon as Component<{ class?: string }>;
</script>

<section 
  id="services" 
  class="relative py-24 bg-ds-surface grid-bg overflow-hidden border-y border-ds-border/40"
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <h2 
        class="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        {services.heading}
      </h2>
      <p 
        class="font-body text-slate-400 text-sm sm:text-base leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 150 }}
      >
        {services.subtitle}
      </p>
    </div>

    <!-- Responsive Grid of Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      {#each services.items as item, index}
        {@const Icon = item.icon as Component<{ class?: string }>}
        <div 
          class="glass-card p-8 relative overflow-hidden flex flex-col justify-between border border-ds-border/70 hover:border-ds-cyan/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,212,255,0.08)] group"
          data-reveal use:reveal={{ y: 30, duration: 600, delay: index * 150 + 200 }}
        >
          <!-- Left Accent Status Line -->
          <div 
            class="absolute top-0 left-0 w-[4px] group-hover:w-[6px] h-full rounded-l-[16px] transition-all duration-300" 
            style="background-color: {item.accentColor}"
          ></div>

          <!-- Background Accent Glow -->
          <div 
            class="absolute -right-12 -bottom-12 w-28 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
            style="background-color: {item.accentColor}12"
          ></div>

          <div class="relative z-10">
            <!-- Icon Container -->
            <div class="w-12 h-12 rounded-xl bg-ds-elevated border border-ds-border flex items-center justify-center mb-6 shadow-[0_0_12px_rgba(0,212,255,0.05)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <Icon class="w-6 h-6 text-ds-cyan" />
            </div>

            <!-- Title -->
            <h3 class="font-heading text-xl font-bold text-white mb-3 group-hover:text-ds-cyan transition-colors duration-200">
              {item.title}
            </h3>

            <!-- Description -->
            <p class="font-body text-slate-400 text-sm leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          <!-- Tags Row -->
          <div class="flex flex-wrap gap-2 pt-4 border-t border-ds-border/30 mt-auto relative z-10">
            {#each item.tags as tag}
              <span class="px-2.5 py-1 bg-ds-bg/60 border border-ds-border/50 rounded-md text-[10px] font-mono font-medium text-ds-cyan tracking-wide">
                {tag}
              </span>
            {/each}
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
