<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { CheckCircle, ArrowRight } from '@lucide/svelte';
  import { hero } from '$lib/data/content';
</script>

<section 
  class="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-ds-bg grid-bg"
>
  <!-- Radial Glow Behind Headline -->
  <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, rgba(0, 212, 255, 0.06) 0%, transparent 70%);"></div>

  <div class="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
    
    <!-- Left — Text content -->
    <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
      <!-- Badge -->
      <div 
        class="inline-flex items-center gap-2 px-3 py-1 bg-ds-elevated border border-ds-cyan/30 rounded-full mb-6"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        <span class="w-1.5 h-1.5 rounded-full bg-ds-cyan animate-pulse shadow-[0_0_8px_#00D4FF]"></span>
        <span class="text-xs font-mono font-medium text-ds-cyan">{hero.badge}</span>
      </div>

      <!-- Headline -->
      <h1 
        class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-[640px]"
      >
        {hero.headline.before}<span class="gradient-text">{hero.headline.highlight}</span>{hero.headline.after}
      </h1>

      <!-- Subheadline -->
      <p 
        class="font-body text-base sm:text-lg text-slate-400 max-w-[520px] mb-8 leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 300 }}
      >
        {hero.subheadline}
      </p>

      <!-- CTA Buttons -->
      <div 
        class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 450 }}
      >
        <a 
          href={hero.cta.primary.href} 
          class="flex items-center justify-center gap-2 bg-gradient-to-r from-ds-cyan to-ds-blue text-white px-8 py-4 rounded-full font-heading font-semibold hover:brightness-110 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_0_24px_rgba(0,212,255,0.2)]"
        >
          {hero.cta.primary.text}
        </a>
        <a 
          href={hero.cta.secondary.href} 
          class="flex items-center justify-center border border-ds-cyan text-ds-cyan hover:bg-ds-cyan/10 px-8 py-4 rounded-full font-heading font-semibold active:scale-95 transition-all duration-200"
        >
          {hero.cta.secondary.text}
        </a>
      </div>

      <!-- Trust Badges -->
      <div 
        class="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-2 pt-4 border-t border-ds-border/40 w-full"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 600 }}
      >
        {#each hero.trustBadges as badge}
          <div class="flex items-center justify-center lg:justify-start gap-2.5 text-slate-300">
            <CheckCircle class="w-5 h-5 text-ds-cyan shrink-0" />
            <span class="text-xs font-heading font-medium tracking-wide">{badge.text}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Right — Mock project card -->
    <div class="lg:col-span-5 flex justify-center lg:justify-end w-full">
      <div 
        class="w-full max-w-[400px] glass-card p-6 floating-card relative group border border-ds-border/80"
        data-reveal use:reveal={{ y: 0, duration: 800, delay: 300 }}
      >
        <!-- Top Accent Light -->
        <div class="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-ds-cyan to-transparent"></div>

        <!-- Top Row -->
        <div class="flex items-center gap-2 pb-4 border-b border-ds-border/30">
          <span class="w-2.5 h-2.5 rounded-full bg-ds-success shadow-[0_0_8px_#10B981]"></span>
          <span class="text-[10px] font-mono font-bold text-ds-success uppercase tracking-wider">{hero.projectCard.status}</span>
          <span class="text-[11px] font-mono text-slate-500 ml-auto">{hero.projectCard.label}</span>
        </div>

        <!-- Project Row -->
        <div class="py-6">
          <span class="text-slate-400 text-xs font-mono">ACTIVE CLIENT PROJECT</span>
          <p class="font-heading text-lg font-bold text-white mt-1.5 group-hover:text-ds-cyan transition-colors duration-300">
            {hero.projectCard.project}
          </p>
          
          <div class="mt-6 space-y-2">
            <div class="flex justify-between items-center text-xs font-mono">
              <span class="text-slate-500">Integration Checks</span>
              <span class="text-ds-cyan font-bold">{hero.projectCard.progress}%</span>
            </div>
            <div class="w-full h-2 bg-ds-elevated rounded-full overflow-hidden border border-ds-border/30">
              <div class="h-full bg-gradient-to-r from-ds-cyan to-ds-blue rounded-full transition-all duration-1000" style="width: {hero.projectCard.progress}%;"></div>
            </div>
          </div>
        </div>

        <!-- Bottom Tags -->
        <div class="flex flex-wrap gap-2 pt-4 border-t border-ds-border/30">
          {#each hero.projectCard.tags as tag}
            <span class="px-2.5 py-1 bg-ds-elevated/80 border border-ds-border/50 rounded-md text-[10px] font-mono font-semibold text-ds-cyan tracking-wide">
              {tag}
            </span>
          {/each}
        </div>
      </div>
    </div>

  </div>
</section>

<style>
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .floating-card {
    animation: float 5s ease-in-out infinite;
  }
</style>
