<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { FileText, CheckCircle2, Loader } from '@lucide/svelte';
  import { hero } from '$lib/data/content';

  const report = hero.auditPreview;
  const totalFindings = report.summary.reduce((sum, s) => sum + s.count, 0);
</script>

<section class="relative flex items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-ds-bg grid-bg">
  <!-- Radial Glow Behind Headline -->
  <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, rgba(0, 212, 255, 0.06) 0%, transparent 70%);"></div>

  <div class="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

    <!-- Left — Offer, audience, outcome -->
    <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 bg-ds-elevated border border-ds-cyan/30 rounded-full mb-6"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        <span class="w-1.5 h-1.5 rounded-full bg-ds-cyan animate-pulse shadow-[0_0_8px_#00D4FF]"></span>
        <span class="text-xs font-mono font-medium text-ds-cyan">{hero.badge}</span>
      </div>

      <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] max-w-[640px]">
        {hero.headline.before}<span class="gradient-text">{hero.headline.highlight}</span>{hero.headline.after}
      </h1>

      <p
        class="font-body text-base sm:text-lg text-slate-400 max-w-[540px] mb-8 leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 200 }}
      >
        {hero.subheadline}
      </p>

      <div
        class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 350 }}
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
    </div>

    <!-- Right — What a DevSafe audit deliverable looks like -->
    <div class="lg:col-span-5 flex justify-center lg:justify-end w-full">
      <figure
        class="w-full max-w-[440px] glass-card relative border border-ds-border/80 overflow-hidden text-left"
        data-reveal use:reveal={{ y: 0, duration: 800, delay: 250 }}
      >
        <div class="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-ds-cyan to-transparent"></div>

        <!-- Window bar -->
        <div class="flex items-center gap-1.5 px-5 py-3 border-b border-ds-border/40 bg-ds-elevated/40">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span class="ml-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
            <FileText class="w-3.5 h-3.5" /> {report.file}
          </span>
          <span class="ml-auto px-2 py-0.5 rounded border border-ds-cyan/30 text-[10px] font-mono font-bold uppercase tracking-wider text-ds-cyan">
            {report.label}
          </span>
        </div>

        <div class="p-5 sm:p-6 space-y-5">
          <div>
            <p class="font-heading text-lg font-bold text-white">{report.title}</p>
            <p class="text-xs font-mono text-slate-500 mt-1">Target: {report.target} · {totalFindings} findings</p>
          </div>

          <!-- Severity summary -->
          <div>
            <div class="flex h-2 w-full rounded-full overflow-hidden bg-ds-elevated" aria-hidden="true">
              {#each report.summary as s (s.level)}
                {#if s.count > 0}
                  <span class="{s.color} h-full" style="width: {(s.count / totalFindings) * 100}%"></span>
                {/if}
              {/each}
            </div>
            <dl class="grid grid-cols-4 gap-2 mt-3">
              {#each report.summary as s (s.level)}
                <div>
                  <dt class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    <span class="w-1.5 h-1.5 rounded-full {s.color}"></span>{s.level}
                  </dt>
                  <dd class="font-heading text-xl font-bold text-white">{s.count}</dd>
                </div>
              {/each}
            </dl>
          </div>

          <!-- Findings -->
          <ul class="space-y-2.5">
            {#each report.findings as f (f.title)}
              <li class="flex items-start gap-3 rounded-lg border border-ds-border/50 bg-ds-bg/40 px-3 py-2.5">
                <span
                  class:sev-high={f.severity === 'High'}
                  class:sev-medium={f.severity === 'Medium'}
                  class:sev-low={f.severity === 'Low'}
                  class="mt-0.5 shrink-0 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
                  {f.severity}
                </span>
                <span class="flex-1 text-xs text-slate-300 leading-snug">{f.title}</span>
                {#if f.status === 'Fixed'}
                  <span class="flex items-center gap-1 shrink-0 text-[10px] font-mono font-semibold text-ds-success">
                    <CheckCircle2 class="w-3.5 h-3.5" /> {f.status}
                  </span>
                {:else}
                  <span class="status-pending flex items-center gap-1 shrink-0 text-[10px] font-mono font-semibold">
                    <Loader class="w-3.5 h-3.5 motion-safe:animate-spin [animation-duration:3s]" /> {f.status}
                  </span>
                {/if}
              </li>
            {/each}
          </ul>
        </div>

        <figcaption class="px-5 sm:px-6 py-3 border-t border-ds-border/40 text-[11px] font-mono text-slate-500">
          {report.footer}
        </figcaption>
      </figure>
    </div>

  </div>
</section>

<style>
  .sev-high { color: #FB923C; background: rgba(249, 115, 22, 0.12); }
  .sev-medium { color: #FBBF24; background: rgba(245, 158, 11, 0.12); }
  .sev-low { color: #94A3B8; background: rgba(148, 163, 184, 0.12); }
  .status-pending { color: #FBBF24; }

  :global(.light) .sev-high { color: #C2410C; }
  :global(.light) .sev-medium,
  :global(.light) .status-pending { color: #B45309; }
  :global(.light) .sev-low { color: #475569; }
</style>
