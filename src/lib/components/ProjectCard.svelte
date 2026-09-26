<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import PhoneFrame from './PhoneFrame.svelte';
  import type { Project } from '$lib/data/content';

  let { project, index = 0 }: { project: Project; index?: number } = $props();
</script>

          <div 
            class="bg-ds-bg/60 border border-ds-border/70 border-l-[4px] {project.isLive ? 'border-l-ds-cyan' : 'border-l-ds-blue'} rounded-2xl p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(0,212,255,0.08)] group"
            data-reveal use:reveal={{ y: 30, duration: 700, delay: index * 150 + 300 }}
          >
            <!-- Decorative Glow in Background -->
            <div class="absolute -right-16 -top-16 w-56 h-56 {project.isLive ? 'bg-ds-cyan/5' : 'bg-ds-blue/5'} rounded-full blur-3xl pointer-events-none"></div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <!-- Left Side: Project Metadata -->
              <div class="lg:col-span-7 space-y-6">
                <div>
                  <!-- Status Badge -->
                  <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded {project.isLive ? 'bg-ds-success/15 border border-ds-success/30 text-ds-cyan' : 'bg-ds-blue/15 border border-ds-blue/30 text-ds-blue'} text-[10px] font-mono font-bold uppercase tracking-wider mb-3">
                    {#if project.isLive}
                      <span class="w-1.5 h-1.5 rounded-full bg-ds-cyan animate-pulse"></span>
                    {/if}
                    {project.statusBadge}
                  </span>
                  <!-- Project Title -->
                  <h3 class="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <!-- Tagline -->
                  <p class="font-body text-xs text-ds-cyan mt-1.5 font-semibold tracking-wide">
                    {project.tagline}
                  </p>
                </div>

                <!-- Description -->
                <p class="font-body text-slate-400 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <!-- Tech Tags -->
                <div class="flex flex-wrap gap-2 pt-2">
                  {#each project.tags as tag}
                    <span class="px-3 py-1 bg-ds-elevated/70 border border-ds-border/50 rounded-md text-xs font-mono font-medium text-slate-300">
                      {tag}
                    </span>
                  {/each}
                </div>

                <!-- Link/CTA (Optional) -->
                {#if project.link}
                  <div class="pt-2">
                    <a 
                      href={project.link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-2 text-sm text-ds-cyan font-semibold hover:underline group/link"
                    >
                      {project.link.text}
                      <span class="inline-block transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                    </a>
                  </div>
                {/if}
              </div>

              <!-- Right Side: Real product screenshot -->
              {#if project.screenshot}
                <div class="lg:col-span-5 w-full">
                  <PhoneFrame screenshot={project.screenshot} />
                </div>
              {/if}

            </div>
          </div>
