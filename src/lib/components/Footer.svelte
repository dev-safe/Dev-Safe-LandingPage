<script lang="ts">
  import { Mail, Globe } from '@lucide/svelte';
  import { t } from '$lib/data/content';
  import { page } from '$app/state';
  import { localizePath, sectionHref, site, whatsappUrl } from '$lib/config/site';
  import logo from '$lib/assets/devsafe-logo.svg';
  import BrandIcon from './BrandIcon.svelte';

  const c = $derived(t());
  const footer = $derived(c.footer);
  const linkHref = (href: string) => sectionHref(href, c.meta.lang, page.url.pathname);
</script>

<footer class="bg-ds-bg">
  <div class="toghu-band" aria-hidden="true"></div>
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
      
      <!-- Column 1: Logo & Tagline -->
      <div class="md:col-span-4 space-y-4">
        <a href={c.meta.home} class="flex items-center gap-2.5 focus:outline-none">
          <div class="relative flex items-center justify-center">
            <img src={logo} alt={c.ui.logoAlt} width="208" height="228" loading="lazy" class="h-12 w-auto" />
          </div>
          <span class="font-body text-lg font-bold tracking-tight">
            <span class="text-ds-fg">DEV</span><span class="text-ds-accent">SAFE</span>
          </span>
        </a>
        <div class="text-xs font-mono font-semibold text-ds-accent tracking-wider uppercase">
          {footer.tagline}
        </div>
        <p class="font-body text-xs sm:text-sm text-ds-fg-muted max-w-sm leading-relaxed">
          {footer.description}
        </p>
      </div>

      <!-- Column 2: Navigation Links -->
      <div class="md:col-span-2 space-y-4">
        <h2 class="font-body text-sm font-bold text-ds-fg uppercase tracking-wider">
          {footer.quickLinks.heading}
        </h2>
        <ul class="font-body text-sm space-y-2.5">
          {#each footer.quickLinks.links as link}
            <li>
              <a href={linkHref(link.href)} class="text-ds-fg-muted hover:text-ds-accent transition-colors">
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Column 3: Service and case-study pages -->
      <div class="md:col-span-3 space-y-4">
        <h2 class="font-body text-sm font-bold text-ds-fg uppercase tracking-wider">
          {c.details.ui.services}
        </h2>
        <ul class="font-body text-sm space-y-2.5">
          {#each c.services.items as item (item.slug)}
            <li>
              <a href={localizePath(`/services/${item.slug}`, c.meta.lang)} class="text-ds-fg-muted hover:text-ds-accent transition-colors">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
        <h2 class="font-body text-sm font-bold text-ds-fg uppercase tracking-wider pt-3">
          {c.details.ui.caseStudies}
        </h2>
        <ul class="font-body text-sm space-y-2.5">
          {#each [...c.products.projects, ...c.clientWork.projects] as project (project.slug)}
            <li>
              <a href={localizePath(`/work/${project.slug}`, c.meta.lang)} class="text-ds-fg-muted hover:text-ds-accent transition-colors">
                {project.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Column 4: Contact Info -->
      <div class="md:col-span-3 space-y-4">
        <h2 class="font-body text-sm font-bold text-ds-fg uppercase tracking-wider">
          {footer.contact.heading}
        </h2>
        <div class="flex flex-col gap-3">
          <a 
            href="mailto:{footer.contact.email.text}" 
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-accent transition-colors w-fit"
          >
            <Mail class="w-4 h-4 text-ds-accent shrink-0" />
            <span>{footer.contact.email.text}</span>
          </a>
          <a 
            href={c.meta.home}
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-accent transition-colors w-fit"
          >
            <Globe class="w-4 h-4 text-ds-accent shrink-0" />
            <span>{footer.contact.website.text}</span>
          </a>
          {#if footer.contact.whatsapp}
            <a 
              href={whatsappUrl(c.whatsapp.message)} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-accent transition-colors w-fit"
            >
              <BrandIcon name="whatsapp" class="w-4 h-4 text-ds-accent shrink-0" />
              <span>{footer.contact.whatsapp.text}</span>
            </a>
          {/if}
          <a 
            href={site.social.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-accent transition-colors w-fit"
          >
            <BrandIcon name="linkedin" class="w-4 h-4 text-ds-accent shrink-0" />
            <span>{footer.contact.linkedin.text}</span>
          </a>
          <a 
            href={site.social.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-accent transition-colors w-fit"
          >
            <BrandIcon name="github" class="w-4 h-4 text-ds-accent shrink-0" />
            <span>{footer.contact.github.text}</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-ds-border/40 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="flex flex-col sm:flex-row items-center gap-1 sm:gap-3 text-xs font-body text-ds-fg-subtle text-center">
        <span>{footer.bottom.copyright}</span>
        <span>
          <span class="cm-flag align-[-1px] mr-1.5" aria-hidden="true"></span>{footer.bottom.pride}
        </span>
      </div>
      <div class="text-xs font-mono text-ds-fg-subtle hover:text-ds-accent transition-colors">
        <a href={c.meta.home}>
          {footer.bottom.domain}
        </a>
      </div>
    </div>

  </div>
</footer>
