<script lang="ts">
  import { onMount } from 'svelte';
  import type { Component } from 'svelte';
  import {
    Check,
    Database,
    FileLock,
    Globe,
    KeyRound,
    LockKeyhole,
    Pause,
    Play,
    Server,
    Smartphone,
    UserLock
  } from '@lucide/svelte';
  import { t } from '$lib/data/content';

  const demo = $derived(t().hero.demo);

  // One cycle per stage; the progress bar's CSS animation drives the timing, so pausing the
  // animation (hover, focus, off-screen, pause button) also pauses the auto-advance.
  const STAGE_MS = 6500;

  let active = $state(0);
  let userPaused = $state(false);
  let hovered = $state(false);
  let visible = $state(true);
  let reducedMotion = $state(false);
  let root: HTMLElement;
  let tabs: HTMLButtonElement[] = [];

  const stage = $derived(demo.stages[active]);
  const running = $derived(!reducedMotion && !userPaused && !hovered && visible);

  const buildIcons: Component<{ class?: string }>[] = [Globe, Smartphone, Server, Database];
  const protectIcons: Component<{ class?: string }>[] = [LockKeyhole, UserLock, KeyRound, FileLock];

  const delay = (i: number) => `animation-delay: ${900 + i * 280}ms`;
  const resultDelay = (count: number) => `animation-delay: ${1100 + count * 280}ms`;

  function select(index: number) {
    active = (index + demo.stages.length) % demo.stages.length;
  }

  function onTabKey(event: KeyboardEvent, index: number) {
    const moves: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1 };
    if (event.key in moves) {
      event.preventDefault();
      select(index + moves[event.key]);
      tabs[active]?.focus();
    } else if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      select(event.key === 'Home' ? 0 : demo.stages.length - 1);
      tabs[active]?.focus();
    }
  }

  onMount(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion = motion.matches;
    const onMotion = (e: MediaQueryListEvent) => (reducedMotion = e.matches);
    motion.addEventListener('change', onMotion);

    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting), { threshold: 0.2 });
    observer.observe(root);

    return () => {
      motion.removeEventListener('change', onMotion);
      observer.disconnect();
    };
  });
</script>

<div
  bind:this={root}
  class="demo relative w-full max-w-4xl mx-auto text-left"
  role="region"
  aria-label={demo.label}
  onmouseenter={() => (hovered = true)}
  onmouseleave={() => (hovered = false)}
>
  <!-- App window -->
  <div class="rounded-xl border border-ds-border bg-ds-surface/95 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)] overflow-hidden backdrop-blur">
    <div class="flex items-center gap-3 px-4 h-10 border-b border-ds-border bg-ds-elevated/60">
      <span class="flex gap-1.5" aria-hidden="true">
        <span class="w-2.5 h-2.5 rounded-full bg-[#007A5E]"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#CE1126]"></span>
        <span class="w-2.5 h-2.5 rounded-full bg-[#FCD116]"></span>
      </span>
      <span class="font-mono text-[11px] sm:text-xs text-ds-fg-subtle truncate">{demo.windowTitle}</span>
      <span class="ml-auto font-mono text-[11px] text-ds-fg-subtle hidden sm:inline">{stage.tab.toLowerCase()}</span>
    </div>

    <div
      id="demo-panel"
      role="tabpanel"
      aria-labelledby="demo-tab-{active}"
      class="dot-grid relative p-4 sm:p-6 min-h-[400px] sm:min-h-[330px] flex flex-col"
    >
      {#key active}
        <p class="font-mono text-[13px] sm:text-sm text-ds-fg flex items-center gap-2 min-w-0">
          <span class="text-ds-accent-2 shrink-0" aria-hidden="true">$</span>
          <span class="typed" style="--n: {stage.command.length}">{stage.command}</span>
        </p>

        <div class="mt-5 flex-1">
          {#if stage.id === 'audit'}
            <ul class="grid gap-2.5">
              {#each stage.lines as line, i (line)}
                <li class="rise flex items-center gap-3 rounded-lg border border-ds-border bg-ds-elevated/70 px-3 py-2.5" style={delay(i)}>
                  <span class="shrink-0 w-5 h-5 rounded-full bg-ds-accent/15 text-ds-accent flex items-center justify-center">
                    <Check class="w-3 h-3" strokeWidth={3} />
                  </span>
                  <span class="text-sm text-ds-fg">{line}</span>
                  <span class="ml-auto font-mono text-[11px] text-ds-fg-subtle hidden sm:inline">ok</span>
                </li>
              {/each}
            </ul>
          {:else if stage.id === 'build'}
            <div class="relative">
              <span class="draw-x absolute left-[12%] right-[12%] top-1/2 h-px bg-ds-accent/50 hidden sm:block" aria-hidden="true"></span>
              <ul class="relative grid grid-cols-2 sm:grid-cols-4 gap-3">
                {#each stage.lines as line, i (line)}
                  {@const Icon = buildIcons[i]}
                  <li class="rise rounded-lg border border-ds-border bg-ds-elevated p-3.5 sm:p-4" style={delay(i)}>
                    <span class="w-9 h-9 rounded-md bg-ds-accent/15 text-ds-accent flex items-center justify-center mb-3">
                      <Icon class="w-[18px] h-[18px]" />
                    </span>
                    <span class="block text-sm font-medium text-ds-fg">{line}</span>
                    <span class="mt-1 flex items-center gap-1.5 font-mono text-[11px] text-ds-fg-subtle">
                      <LockKeyhole class="w-3 h-3" aria-hidden="true" /> {demo.secure}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>
          {:else if stage.id === 'ship'}
            <ol class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0">
              {#each stage.lines as line, i (line)}
                <li class="rise flex items-center gap-3 sm:flex-col sm:gap-2 sm:text-center shrink-0" style={delay(i * 2)}>
                  <span class="w-10 h-10 rounded-full border border-ds-success/50 bg-ds-success/15 text-ds-success flex items-center justify-center">
                    <Check class="w-[18px] h-[18px]" strokeWidth={3} />
                  </span>
                  <span class="text-sm text-ds-fg">{line}</span>
                </li>
                {#if i < stage.lines.length - 1}
                  <li class="hidden sm:block flex-1 mx-3 h-px bg-ds-border relative overflow-hidden -mt-7" aria-hidden="true">
                    <span class="draw-x absolute inset-0 bg-ds-success" style={delay(i * 2 + 1)}></span>
                  </li>
                {/if}
              {/each}
            </ol>
            <p class="rise mt-7 inline-flex items-center gap-2 rounded-full border border-ds-success/40 bg-ds-success/10 px-3 py-1 font-mono text-xs text-ds-success" style={delay(stage.lines.length * 2)}>
              <span class="pulse w-2 h-2 rounded-full bg-ds-success"></span>
              {demo.live}
            </p>
          {:else}
            <ul class="grid sm:grid-cols-2 gap-2.5">
              {#each stage.lines as line, i (line)}
                {@const Icon = protectIcons[i]}
                <li class="rise flex items-center gap-3 rounded-lg border border-ds-border bg-ds-elevated/70 px-3 py-3" style={delay(i)}>
                  <span class="shrink-0 w-8 h-8 rounded-md bg-ds-accent-2/15 text-ds-accent-2 flex items-center justify-center">
                    <Icon class="w-4 h-4" />
                  </span>
                  <span class="text-sm text-ds-fg">{line}</span>
                </li>
              {/each}
            </ul>
          {/if}
        </div>

        <p class="rise mt-5 font-mono text-[12px] sm:text-[13px] text-ds-accent" style={resultDelay(stage.id === 'ship' ? 6 : stage.lines.length)}>
          → {stage.result}
        </p>
      {/key}
    </div>
  </div>

  <!-- Stage tabs, like railway.com's Deploy / Network / Scale bar -->
  <div class="mt-4 flex items-center justify-center gap-2">
    <div role="tablist" aria-label={demo.tabsLabel} class="inline-flex p-1 rounded-xl border border-ds-border bg-ds-surface/80 backdrop-blur">
      {#each demo.stages as s, i (s.id)}
        <button
          bind:this={tabs[i]}
          id="demo-tab-{i}"
          type="button"
          role="tab"
          aria-selected={i === active}
          aria-controls="demo-panel"
          tabindex={i === active ? 0 : -1}
          onclick={() => select(i)}
          onkeydown={(e) => onTabKey(e, i)}
          class="relative overflow-hidden px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[13px] sm:text-sm font-medium transition-colors {i === active ? 'bg-ds-elevated text-ds-fg' : 'text-ds-fg-muted hover:text-ds-fg'}"
        >
          {s.tab}
          {#if i === active && !reducedMotion}
            {#key active}
              <span
                class="progress absolute left-0 bottom-0 h-[2px] bg-ds-accent"
                style="animation-duration: {STAGE_MS}ms; animation-play-state: {running ? 'running' : 'paused'}"
                onanimationend={() => select(active + 1)}
                aria-hidden="true"
              ></span>
            {/key}
          {/if}
        </button>
      {/each}
    </div>
    {#if !reducedMotion}
      <button
        type="button"
        onclick={() => (userPaused = !userPaused)}
        aria-label={userPaused ? demo.play : demo.pause}
        class="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-ds-border bg-ds-surface/80 backdrop-blur text-ds-fg-muted hover:text-ds-fg flex items-center justify-center transition-colors"
      >
        {#if userPaused}<Play class="w-3.5 h-3.5" />{:else}<Pause class="w-3.5 h-3.5" />{/if}
      </button>
    {/if}
  </div>
</div>

<style>
  .typed {
    display: inline-block;
    box-sizing: content-box;
    padding-right: 1px;
    overflow: hidden;
    white-space: nowrap;
    max-width: 100%;
    width: calc(var(--n) * 1ch);
    border-right: 2px solid rgb(var(--ds-accent));
    animation:
      type 0.8s steps(var(--n)) 0.1s both,
      caret 0.9s step-end infinite;
  }

  @keyframes type {
    from { width: 0; }
  }

  @keyframes caret {
    50% { border-color: transparent; }
  }

  .rise {
    opacity: 0;
    animation: rise-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  .draw-x {
    transform-origin: left;
    animation: draw-x 0.7s ease-out 0.9s both;
  }

  @keyframes draw-x {
    from { transform: scaleX(0); }
  }

  .progress {
    width: 100%;
    transform-origin: left;
    animation-name: progress;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
  }

  @keyframes progress {
    from { transform: scaleX(0); }
    to { transform: scaleX(1); }
  }

  .pulse {
    box-shadow: 0 0 0 0 rgb(var(--ds-success) / 0.6);
    animation: pulse 1.6s ease-out infinite;
  }

  @keyframes pulse {
    to { box-shadow: 0 0 0 8px rgb(var(--ds-success) / 0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .typed,
    .rise,
    .draw-x,
    .pulse {
      animation: none;
      opacity: 1;
      border-right: 0;
    }
  }
</style>
