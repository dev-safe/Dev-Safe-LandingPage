<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { Terminal } from '@lucide/svelte';
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

              <!-- Right Side: Decorative Code Block -->
              <div class="lg:col-span-5 w-full">
                {#if project.title === 'Eventra'}
                  <div class="relative bg-[#112240]/40 border border-[#1E3A5F]/60 rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-slate-300">
                    <!-- Window control dots -->
                    <div class="flex items-center gap-1.5 mb-4 border-b border-[#1E3A5F]/35 pb-3">
                      <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <span class="text-[10px] font-mono text-slate-500 ml-auto flex items-center gap-1">
                        <Terminal class="w-3.5 h-3.5" /> main.rs
                      </span>
                    </div>

                    <!-- Styled Code Snippet -->
                    <div class="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
                      <span class="text-ds-cyan">const</span> eventra = <span class="text-ds-cyan">await</span> DevSafe
  .<span class="text-emerald-400">build</span>(&#123;
    stack: [<span class="text-amber-400">'SvelteKit'</span>, <span class="text-amber-400">'Rust'</span>],
    secured: <span class="text-ds-cyan">true</span>,
    status: <span class="text-emerald-400">'live'</span>
  &#125;);
                    </div>
                  </div>
                {:else if project.title === 'BookBridge'}
                  <div class="relative bg-[#112240]/40 border border-[#1E3A5F]/60 rounded-xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] text-slate-300">
                    <!-- Window control dots -->
                    <div class="flex items-center gap-1.5 mb-4 border-b border-[#1E3A5F]/35 pb-3">
                      <div class="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div class="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                      <span class="text-[10px] font-mono text-slate-500 ml-auto flex items-center gap-1">
                        <Terminal class="w-3.5 h-3.5" /> main.dart
                      </span>
                    </div>

                    <!-- Styled Code Snippet -->
                    <div class="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto whitespace-pre">
                      <span class="text-ds-cyan">void</span> <span class="text-emerald-400">main</span>() => <span class="text-emerald-400">runApp</span>(
  DevSafe.<span class="text-emerald-400">buildMobileApp</span>(&#123;
    name: <span class="text-amber-400">'BookBridge'</span>,
    engine: <span class="text-amber-400">'Flutter'</span>,
    escrow: <span class="text-ds-cyan">true</span>
  &#125;)
);
                    </div>
                  </div>
                {/if}
              </div>

            </div>
          </div>
