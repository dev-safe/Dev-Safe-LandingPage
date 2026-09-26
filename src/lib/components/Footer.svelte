<script lang="ts">
  import { Mail, Globe } from '@lucide/svelte';
  import { footer } from '$lib/data/content';
  import logoImg from '$lib/assets/DevSafe_logo.jpg';
</script>

<footer class="bg-ds-bg border-t border-ds-border/50">
  <div class="max-w-7xl mx-auto px-6 py-16">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
      
      <!-- Column 1: Logo & Tagline -->
      <div class="md:col-span-5 space-y-4">
        <a href="/" class="flex items-center gap-2.5 focus:outline-none">
          <div class="relative flex items-center justify-center">
            <img src={logoImg} alt="DevSafe logo" width="28" height="28" class="w-7 h-7 rounded-lg object-cover border border-ds-border/40" />
          </div>
          <span class="font-heading text-lg font-bold tracking-tight">
            <span class="text-white">DEV</span><span class="text-ds-cyan">SAFE</span>
          </span>
        </a>
        <div class="text-xs font-mono font-semibold text-ds-cyan tracking-wider uppercase">
          {footer.tagline}
        </div>
        <p class="font-body text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
          {footer.description}
        </p>
      </div>

      <!-- Column 2: Navigation Links -->
      <div class="md:col-span-3 space-y-4">
        <h2 class="font-heading text-sm font-bold text-white uppercase tracking-wider">
          {footer.quickLinks.heading}
        </h2>
        <ul class="font-body text-sm space-y-2.5">
          {#each footer.quickLinks.links as link}
            <li>
              <a href={link.href} class="text-slate-400 hover:text-ds-cyan transition-colors">
                {link.name}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Column 3: Contact Info -->
      <div class="md:col-span-4 space-y-4">
        <h2 class="font-heading text-sm font-bold text-white uppercase tracking-wider">
          {footer.contact.heading}
        </h2>
        <div class="flex flex-col gap-3">
          <a 
            href="mailto:{footer.contact.email.text}" 
            class="flex items-center gap-2.5 text-sm text-slate-400 hover:text-ds-cyan transition-colors w-fit"
          >
            <Mail class="w-4 h-4 text-ds-cyan shrink-0" />
            <span>{footer.contact.email.text}</span>
          </a>
          <a 
            href="/" 
            class="flex items-center gap-2.5 text-sm text-slate-400 hover:text-ds-cyan transition-colors w-fit"
          >
            <Globe class="w-4 h-4 text-ds-cyan shrink-0" />
            <span>{footer.contact.website.text}</span>
          </a>
          {#if footer.contact.whatsapp}
            <a 
              href={footer.contact.whatsapp.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-2.5 text-sm text-slate-400 hover:text-ds-cyan transition-colors w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-ds-cyan shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.66.988 3.278 1.488 4.994 1.493 5.382.002 9.765-4.38 9.767-9.764.001-2.61-1.017-5.064-2.87-6.92C16.636 2.109 14.183.924 12.01.924c-5.385 0-9.77 4.385-9.772 9.77-.001 1.81.474 3.58 1.38 5.148l-1.006 3.673 3.765-.989zm11.534-7.397c-.3-.149-1.772-.875-2.047-.975-.276-.101-.476-.149-.676.149-.2.3-.777.975-.951 1.174-.174.199-.349.224-.649.075-.3-.15-1.265-.467-2.41-1.487-.89-.793-1.49-1.773-1.665-2.073-.174-.3-.019-.462.13-.611.135-.134.3-.349.449-.524.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.676-1.628-.926-2.227-.243-.585-.49-.507-.676-.516-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.224 5.116 4.522.715.309 1.273.493 1.707.631.717.228 1.37.196 1.885.119.574-.085 1.772-.724 2.022-1.42.25-.697.25-1.294.175-1.42-.075-.125-.275-.199-.575-.349z"/>
              </svg>
              <span>{footer.contact.whatsapp.text}</span>
            </a>
          {/if}
          <a 
            href="https://{footer.contact.github.text}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2.5 text-sm text-slate-400 hover:text-ds-cyan transition-colors w-fit"
          >
            <!-- Inline GitHub SVG (not available in @lucide/svelte) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-ds-cyan shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>{footer.contact.github.text}</span>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-ds-border/40 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
      <div class="text-xs font-body text-slate-500">
        {footer.bottom.copyright}
      </div>
      <div class="text-xs font-mono text-slate-500 hover:text-ds-cyan transition-colors">
        <a href="/">
          {footer.bottom.domain}
        </a>
      </div>
    </div>

  </div>
</footer>
