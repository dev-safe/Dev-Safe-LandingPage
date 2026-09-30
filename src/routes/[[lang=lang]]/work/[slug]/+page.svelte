<script lang="ts">
  import { CheckCircle2, Trophy } from '@lucide/svelte';
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import { localizePath, sectionHref } from '$lib/config/site';
  import { t } from '$lib/data/content';
  import { findProject, projectPageJsonLd, projectPath } from '$lib/seo/schema';
  import Navbar from '$lib/components/Navbar.svelte';
  import CTABanner from '$lib/components/CTABanner.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';
  import PhoneFrame from '$lib/components/PhoneFrame.svelte';
  import PageHeader from '$lib/components/detail/PageHeader.svelte';
  import HeaderActions from '$lib/components/detail/HeaderActions.svelte';
  import DetailSection from '$lib/components/detail/DetailSection.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();

  const c = $derived(t());
  const ui = $derived(c.details.ui);
  const lang = $derived(c.meta.lang);
  const found = $derived(findProject(c, data.slug)!);
  const project = $derived(found.project);
  const detail = $derived(c.details.projects[data.slug]);
  const others = $derived(
    [...c.products.projects, ...c.clientWork.projects].filter((p) => p.slug !== data.slug)
  );
</script>

<Seo
  title={detail.seoTitle}
  description={detail.seoDescription}
  path={projectPath(data.slug)}
  {lang}
  jsonLd={projectPageJsonLd(c, data.slug)}
/>

<Navbar />
<main>
  <PageHeader
    crumbs={[
      { name: ui.home, href: c.meta.home },
      found.owned
        ? { name: ui.products, href: sectionHref('#products', lang, page.url.pathname) }
        : { name: ui.work, href: sectionHref('#work', lang, page.url.pathname) },
      { name: project.title }
    ]}
    eyebrow={project.tagline}
    title={project.title}
    lead={project.description}
  >
    <div class="flex flex-wrap items-center gap-2 mb-7">
      <span class="inline-flex items-center px-2.5 py-1 rounded-md border border-ds-accent/30 text-[10px] font-mono font-bold uppercase tracking-wider text-ds-accent">
        {found.owned ? ui.ownedProduct : ui.clientProject}
      </span>
      <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider {project.isLive ? 'bg-ds-success/15 border border-ds-success/30 text-ds-success' : 'bg-ds-accent-2/15 border border-ds-accent-2/30 text-ds-accent-2'}">
        {#if project.isLive}<span class="w-1.5 h-1.5 rounded-full bg-ds-success animate-pulse" aria-hidden="true"></span>{/if}
        {project.statusBadge}
      </span>
    </div>

    <HeaderActions />

    {#if detail.links?.length}
      <ul class="mt-6 flex flex-wrap gap-x-6 gap-y-2">
        {#each detail.links as link (link.href)}
          <li>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-ds-accent hover:underline underline-offset-4"
            >
              {link.text}<span aria-hidden="true">↗</span>
            </a>
          </li>
        {/each}
      </ul>
    {/if}

    {#snippet aside()}
      {#if project.screenshot}
        <div class="mx-auto lg:mx-0">
          <PhoneFrame screenshot={project.screenshot} priority />
        </div>
      {/if}
    {/snippet}
  </PageHeader>

  {#if detail.story}
    <DetailSection heading={detail.story.heading} surface>
      <div class="max-w-3xl space-y-4">
        {#each detail.story.paragraphs as paragraph (paragraph)}
          <p class="text-base sm:text-lg text-ds-fg-muted leading-relaxed" data-reveal use:reveal={{ y: 20, duration: 600 }}>
            {paragraph}
          </p>
        {/each}
      </div>
    </DetailSection>
  {/if}

  <DetailSection heading={detail.features.heading} surface={!detail.story}>
    <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each detail.features.items as feature, i (feature.title)}
        <li class="glass-card p-5 sm:p-6 flex gap-4" data-reveal use:reveal={{ y: 24, duration: 600, delay: i * 80 }}>
          <CheckCircle2 class="w-5 h-5 mt-0.5 text-ds-success shrink-0" aria-hidden="true" />
          <div>
            <h3 class="font-body text-base font-bold text-ds-fg">{feature.title}</h3>
            <p class="mt-1.5 text-sm text-ds-fg-muted leading-relaxed">{feature.text}</p>
          </div>
        </li>
      {/each}
    </ul>
  </DetailSection>

  <DetailSection heading={detail.build.heading} surface={!!detail.story}>
    <div class="grid gap-10 {project.highlights?.length ? 'lg:grid-cols-2' : ''}">
      <div>
        <ul class="space-y-3">
          {#each detail.build.items as point (point)}
            <li class="flex items-start gap-3 text-[15px] text-ds-fg-muted">
              <span class="mt-2 w-1.5 h-1.5 rounded-full bg-ds-accent shrink-0" aria-hidden="true"></span>
              {point}
            </li>
          {/each}
        </ul>
        <ul class="mt-6 flex flex-wrap gap-2">
          {#each project.tags as tag (tag)}
            <li class="px-3 py-1 bg-ds-elevated/70 border border-ds-border/50 rounded-md text-xs font-mono font-medium text-ds-fg-muted">{tag}</li>
          {/each}
        </ul>
      </div>

      {#if project.highlights?.length}
        <div>
          <h3 class="text-[11px] font-mono uppercase tracking-wider text-ds-fg-subtle mb-3">{ui.recognitionHeading}</h3>
          <ul class="space-y-2.5">
            {#each project.highlights as highlight (highlight)}
              <li class="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-ds-warning/10 border border-ds-warning/40 text-sm font-semibold text-ds-fg">
                <Trophy class="w-4 h-4 text-ds-warning shrink-0" aria-hidden="true" />
                {highlight}
              </li>
            {/each}
          </ul>
        </div>
      {/if}
    </div>
  </DetailSection>

  <DetailSection heading={ui.moreWork} surface={!detail.story}>
    <ul class="grid gap-4 sm:grid-cols-2">
      {#each others as other (other.slug)}
        <li>
          <a href={localizePath(projectPath(other.slug), lang)} class="glass-card group flex items-start gap-4 p-5 sm:p-6 h-full hover:-translate-y-0.5">
            <span class="flex-1">
              <span class="block font-heading text-lg font-medium text-ds-fg group-hover:text-ds-accent transition-colors">{other.title}</span>
              <span class="mt-1 block text-sm text-ds-fg-muted leading-relaxed">{other.tagline}</span>
            </span>
            <span class="text-ds-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </li>
      {/each}
      {#each c.services.items as service (service.slug)}
        <li>
          <a href={localizePath(`/services/${service.slug}`, lang)} class="glass-card group flex items-start gap-4 p-5 sm:p-6 h-full hover:-translate-y-0.5">
            <span class="flex-1">
              <span class="block font-heading text-lg font-medium text-ds-fg group-hover:text-ds-accent transition-colors">{service.title}</span>
              <span class="mt-1 block text-sm text-ds-fg-muted leading-relaxed">{service.description}</span>
            </span>
            <span class="text-ds-accent transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </li>
      {/each}
    </ul>
  </DetailSection>

  <CTABanner defaultService="software" />
</main>
<Footer />
<WhatsAppButton />
