<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { FileText, CheckCircle2, Loader } from '@lucide/svelte';
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import SectionPhoto from './SectionPhoto.svelte';
  import BrandIcon from './BrandIcon.svelte';

  const c = $derived(t());
  const hero = $derived(c.hero);
  const report = $derived(hero.auditPreview);
  const totalFindings = $derived(report.summary.reduce((sum, s) => sum + s.count, 0));
</script>

<section class="relative flex items-center justify-center pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden bg-ds-bg pattern-bg">
  <SectionPhoto name="hero-padlock" widths={[1280, 2400]} fallbackHeight={854} priority />

  <!-- Radial Glow Behind Headline -->
  <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(ellipse 60% 40% at 50% 40%, rgb(var(--ds-accent)/0.06) 0%, transparent 70%);"></div>

  <div class="relative max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

    <!-- Left — Offer, audience, outcome -->
    <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div
        class="inline-flex items-center gap-2 px-3 py-1 bg-ds-elevated border border-ds-accent/30 rounded-full mb-6"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        <span class="cm-flag" aria-hidden="true"></span>
        <span class="text-xs font-mono font-medium text-ds-accent">{hero.badge}</span>
      </div>

      <h1 class="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ds-fg mb-6 leading-[1.1] max-w-[640px]">
        {hero.headline.before}<span class="text-ds-accent">{hero.headline.highlight}</span>{hero.headline.after}
      </h1>

      <p
        class="font-body text-base sm:text-lg text-ds-fg-muted max-w-[540px] mb-8 leading-relaxed"
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
          class="flex items-center justify-center gap-2 bg-ds-primary text-ds-on-primary px-8 py-4 rounded-full font-heading font-semibold hover:bg-ds-primary-hover hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_0_24px_rgb(var(--ds-accent)/0.2)]"
        >
          {hero.cta.primary.text}
        </a>
        <a
          href={hero.cta.secondary.href}
          class="flex items-center justify-center border border-ds-accent text-ds-accent hover:bg-ds-accent/10 px-8 py-4 rounded-full font-heading font-semibold active:scale-95 transition-all duration-200"
        >
          {hero.cta.secondary.text}
        </a>
      </div>

      <a
        href={whatsappUrl(c.whatsapp.message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={c.whatsapp.ariaLabel}
        class="mt-5 max-w-[540px] text-sm font-body text-ds-fg-muted hover:text-ds-fg transition-colors"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 450 }}
      >
        <BrandIcon name="whatsapp" class="inline-block w-5 h-5 mr-1.5 -mt-0.5 align-middle text-[#25D366]" />{c.whatsapp.prompt}
        <span class="font-mono text-ds-fg whitespace-nowrap">{c.footer.contact.whatsapp.text}</span>
      </a>
    </div>

    <!-- Right — What a DevSafe audit deliverable looks like -->
    <div class="lg:col-span-5 flex justify-center lg:justify-end w-full">
      <figure
        class="w-full max-w-[440px] glass-card relative border border-ds-border/80 overflow-hidden text-left"
        data-reveal use:reveal={{ y: 0, duration: 800, delay: 250 }}
      >
        <div class="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-ds-accent to-transparent"></div>

        <!-- Window bar -->
        <div class="flex items-center gap-1.5 px-5 py-3 border-b border-ds-border/40 bg-ds-elevated/40">
          <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span class="ml-3 flex items-center gap-1.5 text-[11px] font-mono text-ds-fg-subtle">
            <FileText class="w-3.5 h-3.5" /> {report.file}
          </span>
          <span class="ml-auto px-2 py-0.5 rounded border border-ds-accent/30 text-[10px] font-mono font-bold uppercase tracking-wider text-ds-accent">
            {report.label}
          </span>
        </div>

        <div class="p-5 sm:p-6 space-y-5">
          <div>
            <p class="font-heading text-lg font-bold text-ds-fg">{report.title}</p>
            <p class="text-xs font-mono text-ds-fg-subtle mt-1">{report.labels.target} {report.target} · {totalFindings} {report.labels.findings}</p>
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
                  <dt class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-ds-fg-subtle">
                    <span class="w-1.5 h-1.5 rounded-full {s.color}"></span>{s.level}
                  </dt>
                  <dd class="font-heading text-xl font-bold text-ds-fg">{s.count}</dd>
                </div>
              {/each}
            </dl>
          </div>

          <!-- Findings -->
          <ul class="space-y-2.5">
            {#each report.findings as f (f.title)}
              <li class="flex items-start gap-3 rounded-lg border border-ds-border/50 bg-ds-bg/40 px-3 py-2.5">
                <span
                  class:sev-high={f.severity === 'high'}
                  class:sev-medium={f.severity === 'medium'}
                  class:sev-low={f.severity === 'low'}
                  class="mt-0.5 shrink-0 px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
                  {report.labels.severity[f.severity]}
                </span>
                <span class="flex-1 text-xs text-ds-fg-muted leading-snug">{f.title}</span>
                {#if f.fixed}
                  <span class="flex items-center gap-1 shrink-0 text-[10px] font-mono font-semibold text-ds-success">
                    <CheckCircle2 class="w-3.5 h-3.5" /> {report.labels.fixed}
                  </span>
                {:else}
                  <span class="status-pending flex items-center gap-1 shrink-0 text-[10px] font-mono font-semibold">
                    <Loader class="w-3.5 h-3.5 motion-safe:animate-spin [animation-duration:3s]" /> {report.labels.inProgress}
                  </span>
                {/if}
              </li>
            {/each}
          </ul>
        </div>

        <figcaption class="px-5 sm:px-6 py-3 border-t border-ds-border/40 text-[11px] font-mono text-ds-fg-subtle">
          {report.footer}
        </figcaption>
      </figure>
    </div>

  </div>
</section>

<style>
  .sev-high { color: #FB923C; background: rgb(249 115 22 / 0.12); }
  .sev-medium { color: rgb(var(--ds-warning)); background: rgb(var(--ds-warning) / 0.12); }
  .sev-low { color: rgb(var(--ds-fg-subtle)); background: rgb(var(--ds-fg-subtle) / 0.12); }
  .status-pending { color: rgb(var(--ds-warning)); }

  :global(.light) .sev-high { color: #9A3412; }
</style>
