<script lang="ts">
  import type { Component } from 'svelte';
  import { t } from '$lib/data/content';

  const c = $derived(t());
  const trustStrip = $derived(c.trustStrip);

  // Tools we actually ship with (see the projects and founder bios).
  const stack = ['SvelteKit', 'Flutter', 'Rust', 'PostgreSQL', 'ConnectRPC', 'Protobuf', 'FastAPI', 'TypeScript', 'Tailwind CSS'];
</script>

<!-- Bordered proof grid at the foot of the hero panel, like railway.com's logo wall. -->
<section aria-labelledby="trust-heading" class="relative">
  <h2 id="trust-heading" class="eyebrow justify-center w-full py-5 border-b border-ds-border">
    {trustStrip.heading}
  </h2>

  <ul class="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-px bg-ds-border">
    {#each trustStrip.proof as item (item.title)}
      {@const Icon = item.icon as Component<{ class?: string }>}
      <li class="flex items-start gap-3 bg-ds-surface p-5 sm:p-6 hover:bg-ds-elevated transition-colors">
        <span class="shrink-0 w-10 h-10 rounded-lg bg-ds-accent/10 border border-ds-accent/25 flex items-center justify-center">
          <Icon class="w-5 h-5 text-ds-accent" />
        </span>
        <div>
          <p class="text-[15px] font-semibold text-ds-fg leading-snug">{item.title}</p>
          <p class="text-sm text-ds-fg-muted leading-relaxed mt-1">{item.text}</p>
        </div>
      </li>
    {/each}
  </ul>

  <div class="flex items-center gap-4 border-t border-ds-border px-5 py-4">
    <span class="shrink-0 font-mono text-[11px] uppercase tracking-wider text-ds-fg-subtle">{c.hero.demo.stackLabel}</span>
    <div class="marquee overflow-hidden flex-1">
      <ul class="marquee-track">
        {#each [...stack, ...stack] as tool, i (i)}
          <li class="px-5 font-mono text-sm text-ds-fg-muted whitespace-nowrap" aria-hidden={i >= stack.length}>{tool}</li>
        {/each}
      </ul>
    </div>
  </div>
</section>
