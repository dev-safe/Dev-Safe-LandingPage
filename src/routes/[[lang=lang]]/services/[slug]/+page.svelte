<script lang="ts">
  import type { Component } from 'svelte';
  import { CheckCircle2, ChevronDown } from '@lucide/svelte';
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import { localizePath, sectionHref } from '$lib/config/site';
  import { t } from '$lib/data/content';
  import { servicePageJsonLd, servicePath } from '$lib/seo/schema';
  import Navbar from '$lib/components/Navbar.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import PageHeader from '$lib/components/detail/PageHeader.svelte';
  import HeaderActions from '$lib/components/detail/HeaderActions.svelte';
  import DetailSection from '$lib/components/detail/DetailSection.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const c = $derived(t());
  const ui = $derived(c.details.ui);
  const lang = $derived(c.meta.lang);
  const item = $derived(c.services.items.find((s) => s.slug === data.slug)!);
  const detail = $derived(c.details.services[data.slug]);
  const others = $derived(c.services.items.filter((s) => s.slug !== data.slug));
</script>

<Seo
  title={detail.seoTitle}
  description={detail.seoDescription}
  path={servicePath(data.slug)}
  {lang}
  jsonLd={servicePageJsonLd(c, data.slug)}
/>

<Navbar />
<main>
  <PageHeader
    crumbs={[
      { name: ui.home, href: c.meta.home },
      { name: ui.services, href: sectionHref('#services', lang, page.url.pathname) },
      { name: item.title }
    ]}
    eyebrow={item.title}
    title={detail.h1}
    lead={detail.lead}
  >
    <HeaderActions />
    <ul class="mt-7 flex flex-wrap gap-2">
      {#each item.tags as tag (tag)}
        <li class="px-2.5 py-1 bg-ds-bg/50 border border-ds-border/60 rounded-md text-[11px] font-mono font-medium text-ds-accent tracking-wide">
          {tag}
        </li>
      {/each}
    </ul>
  </PageHeader>

  <DetailSection heading={detail.includes.heading} surface>
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each detail.includes.items as include, i (include.title)}
        <li
          class="glass-card p-5 sm:p-6 flex gap-4"
          data-reveal
          use:reveal={{ y: 24, duration: 600, delay: i * 80 }}
        >
          <CheckCircle2 class="w-5 h-5 mt-0.5 text-ds-success shrink-0" aria-hidden="true" />
          <div>
            <h3 class="font-body text-base font-bold text-ds-fg">{include.title}</h3>
            <p class="mt-1.5 text-sm text-ds-fg-muted leading-relaxed">{include.text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </DetailSection>

  <DetailSection heading={detail.process.heading}>
    <ol class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each detail.process.steps as step, i (step.title)}
        <li
          class="relative rounded-xl border border-ds-border/60 bg-ds-surface/60 p-5 sm:p-6"
          data-reveal
          use:reveal={{ y: 24, duration: 600, delay: i * 100 }}
        >
          <span class="font-mono text-xs font-semibold text-ds-accent" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
          <h3 class="mt-3 font-body text-base font-bold text-ds-fg">{step.title}</h3>
          <p class="mt-1.5 text-sm text-ds-fg-muted leading-relaxed">{step.text}</p>
        </li>
      {/each}
    </ol>
  </DetailSection>

  <DetailSection heading={detail.audience.heading} surface>
    <div class="grid gap-10 {detail.stack ? 'lg:grid-cols-[3fr_2fr]' : ''}">
      <ul class="grid gap-3 sm:grid-cols-2">
        {#each detail.audience.items as who (who)}
          <li class="flex items-start gap-3 rounded-lg border border-ds-border/50 bg-ds-bg/40 px-4 py-3.5 text-sm text-ds-fg-muted">
            <span class="mt-1.5 w-1.5 h-1.5 rounded-full bg-ds-accent shrink-0" aria-hidden="true"></span>
            {who}
          </li>
        {/each}
      </ul>
      {#if detail.stack}
        <div>
          <h3 class="text-[11px] font-mono uppercase tracking-wider text-ds-fg-subtle mb-3">{detail.stack.heading}</h3>
          <ul class="flex flex-wrap gap-2">
            {#each detail.stack.items as tech (tech)}
              <li class="px-3 py-1.5 bg-ds-elevated/70 border border-ds-border/50 rounded-md text-xs font-mono font-medium text-ds-fg-muted">
                {tech}
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </DetailSection>

  <DetailSection heading={ui.faqHeading}>
    <div class="max-w-3xl divide-y divide-ds-border/50 border-y border-ds-border/50">
      {#each detail.faq as faq (faq.q)}
        <details class="group py-1">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-body text-base font-semibold text-ds-fg hover:text-ds-accent transition-colors [&::-webkit-details-marker]:hidden">
            {faq.q}
            <ChevronDown class="w-5 h-5 shrink-0 text-ds-fg-subtle transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p class="pb-5 pr-8 text-sm sm:text-[15px] text-ds-fg-muted leading-relaxed">{faq.a}</p>
        </details>
      {/each}
    </div>
  </DetailSection>

  <DetailSection heading={ui.otherServices} surface>
    <ul class="grid gap-4 sm:grid-cols-2">
      {#each others as other (other.slug)}
        {@const Icon = other.icon as Component<{ class?: string }>}
        <li>
          <a
            href={localizePath(servicePath(other.slug), lang)}
            class="glass-card group flex items-start gap-4 p-5 sm:p-6 h-full hover:-translate-y-0.5"
          >
            <span class="w-11 h-11 rounded-xl bg-ds-elevated border border-ds-border flex items-center justify-center shrink-0">
              <Icon class="w-5 h-5 text-ds-accent" />
            </span>
            <span class="flex-1">
              <span class="block font-heading text-lg font-medium text-ds-fg group-hover:text-ds-accent transition-colors">{other.title}</span>
              <span class="mt-1 block text-sm text-ds-fg-muted leading-relaxed">{other.description}</span>
            </span>
            <span class="text-ds-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </li>
      {/each}
    </ul>
  </DetailSection>

  <CTABanner defaultService={detail.formService} />
</main>
<Footer />
<WhatsAppButton />
