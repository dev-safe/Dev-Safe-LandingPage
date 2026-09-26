<script lang="ts">
  import { Mail, Globe } from '@lucide/svelte';
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import logoImg from '$lib/assets/DevSafe_logo.jpg';
  import BrandIcon from './BrandIcon.svelte';

  const c = $derived(t());
  const footer = $derived(c.footer);
</script>

<footer class="bg-ds-bg border-t border-ds-border/50">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
      
      <!-- Column 1: Logo & Tagline -->
      <div class="md:col-span-5 space-y-4">
        <a href={c.meta.home} class="flex items-center gap-2.5 focus:outline-none">
          <div class="relative flex items-center justify-center">
            <img src={logoImg} alt={c.ui.logoAlt} width="28" height="28" class="w-7 h-7 rounded-lg object-cover border border-ds-border/40" />
          </div>
          <span class="font-heading text-lg font-bold tracking-tight">
            <span class="text-ds-fg">DEV</span><span class="text-ds-cyan">SAFE</span>
          </span>
        </a>
        <div class="text-xs font-mono font-semibold text-ds-cyan tracking-wider uppercase">
          {footer.tagline}
        </div>
        <p class="font-body text-xs sm:text-sm text-ds-fg-muted max-w-sm leading-relaxed">
          {footer.description}
        </p>
      </div>

      <!-- Column 2: Navigation Links -->
      <div class="md:col-span-3 space-y-4">
        <h2 class="font-heading text-sm font-bold text-ds-fg uppercase tracking-wider">
          {footer.quickLinks.heading}
        </h2>
        <ul class="font-body text-sm space-y-2.5">
          {#each footer.quickLinks.links as link}
            <li>
              <a href={link.href} class="text-ds-fg-muted hover:text-ds-cyan transition-colors">
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Column 3: Contact Info -->
      <div class="md:col-span-4 space-y-4">
        <h2 class="font-heading text-sm font-bold text-ds-fg uppercase tracking-wider">
          {footer.contact.heading}
        </h2>
        <div class="flex flex-col gap-3">
          <a 
            href="mailto:{footer.contact.email.text}" 
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-cyan transition-colors w-fit"
          >
            <Mail class="w-4 h-4 text-ds-cyan shrink-0" />
            <span>{footer.contact.email.text}</span>
          </a>
          <a 
            href={c.meta.home}
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-cyan transition-colors w-fit"
          >
            <Globe class="w-4 h-4 text-ds-cyan shrink-0" />
            <span>{footer.contact.website.text}</span>
          </a>
          {#if footer.contact.whatsapp}
            <a 
              href={whatsappUrl(c.whatsapp.message)} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-cyan transition-colors w-fit"
            >
              <BrandIcon name="whatsapp" class="w-4 h-4 text-ds-cyan shrink-0" />
              <span>{footer.contact.whatsapp.text}</span>
            </a>
          {/if}
          <a 
            href="https://{footer.contact.github.text}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2.5 text-sm text-ds-fg-muted hover:text-ds-cyan transition-colors w-fit"
          >
            <BrandIcon name="github" class="w-4 h-4 text-ds-cyan shrink-0" />
            <span>{footer.contact.github.text}</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-ds-border/40 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="text-xs font-body text-ds-fg-subtle">
        {footer.bottom.copyright}
      </div>
      <div class="text-xs font-mono text-ds-fg-subtle hover:text-ds-cyan transition-colors">
        <a href={c.meta.home}>
          {footer.bottom.domain}
        </a>
      </div>
    </div>

  </div>
</footer>
