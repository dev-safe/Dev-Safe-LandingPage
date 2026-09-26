<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Menu, X, Sun, Moon, Languages } from '@lucide/svelte';
  import { t } from '$lib/data/content';
  import logoImg from '$lib/assets/DevSafe_logo.jpg';

  const c = $derived(t());
  const navigation = $derived(c.navigation);

  let scrolled = $state(false);
  let mobileOpen = $state(false);
  let isLight = $state(false);

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Set initial theme
    const saved = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (saved === 'light' || (!saved && systemPrefersLight)) {
      isLight = true;
      document.documentElement.classList.add('light');
    } else {
      isLight = false;
      document.documentElement.classList.remove('light');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  function toggleTheme() {
    isLight = !isLight;
    if (isLight) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  }

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }

  function closeMobile() {
    mobileOpen = false;
  }
</script>

<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {scrolled ? 'bg-ds-bg/90 backdrop-blur-md py-3 border-b border-ds-border/50' : 'bg-transparent py-5 border-b border-transparent'}">
  <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <!-- Logo -->
    <a href={c.meta.home} class="flex items-center gap-2.5 group focus:outline-none" onclick={closeMobile}>
      <div class="relative flex items-center justify-center">
        <img src={logoImg} alt={c.ui.logoAlt} width="32" height="32" class="w-8 h-8 rounded-lg object-cover border border-ds-border/40 transition-transform duration-300 group-hover:scale-105" />
      </div>
      <span class="font-heading text-xl font-bold tracking-tight">
        <span class="text-ds-fg">{navigation.logo.textDev}</span><span class="text-ds-cyan">{navigation.logo.textSafe}</span>
      </span>
    </a>

    <!-- Desktop Menu Links -->
    <div class="hidden lg:flex items-center gap-6 xl:gap-8">
      {#each navigation.links as link}
        <a 
          href={link.href} 
          class="whitespace-nowrap text-sm font-body font-medium text-ds-fg-muted hover:text-ds-cyan transition-colors duration-200 relative py-1.5 group/navlink"
        >
          {link.name}
          <span class="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-ds-cyan to-ds-blue transition-all duration-300 -translate-x-1/2 group-hover/navlink:w-full"></span>
        </a>
      {/each}
    </div>

    <!-- Desktop Actions -->
    <div class="hidden lg:flex items-center gap-4">
      <!-- Language Toggle (a real link so crawlers find both versions) -->
      <a
        href={c.ui.languageSwitch.href}
        hreflang={c.ui.languageSwitch.hreflang}
        lang={c.ui.languageSwitch.hreflang}
        aria-label={c.ui.languageSwitch.label}
        title={c.ui.languageSwitch.label}
        data-sveltekit-noscroll
        class="inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-full border border-ds-border text-xs font-mono font-bold text-ds-fg-muted hover:text-ds-cyan hover:border-ds-cyan/60 transition-colors"
      >
        <Languages class="w-3.5 h-3.5" aria-hidden="true" />
        {c.ui.languageSwitch.text}
      </a>

      <!-- Theme Toggle -->
      <button 
        onclick={toggleTheme}
        class="text-ds-fg-muted hover:text-ds-cyan p-2 rounded-full hover:bg-ds-elevated/40 transition-colors focus:outline-none"
        aria-label={c.ui.themeToggle}
      >
        {#if isLight}
          <Moon class="w-4 h-4" />
        {:else}
          <Sun class="w-4 h-4" />
        {/if}
      </button>

      <a 
        href={navigation.actions.ghost.href} 
        class="hidden xl:inline-flex whitespace-nowrap border border-ds-cyan/60 text-ds-cyan px-5 py-2 rounded-full text-xs font-heading font-semibold hover:bg-ds-cyan/10 transition-all duration-200"
      >
        {navigation.actions.ghost.text}
      </a>
      <a 
        href={navigation.actions.primary.href} 
        class="whitespace-nowrap bg-ds-primary text-ds-on-primary px-5 py-2 rounded-full text-xs font-heading font-semibold hover:bg-ds-primary-hover active:scale-95 transition-all duration-200 shadow-[0_0_16px_rgba(0,212,255,0.15)] hover:shadow-[0_0_24px_rgba(0,212,255,0.25)]"
      >
        {navigation.actions.primary.text}
      </a>
    </div>

    <!-- Mobile Actions & Menu Toggle -->
    <div class="flex items-center gap-2 lg:hidden">
      <!-- Language Toggle (a real link so crawlers find both versions) -->
      <a
        href={c.ui.languageSwitch.href}
        hreflang={c.ui.languageSwitch.hreflang}
        lang={c.ui.languageSwitch.hreflang}
        aria-label={c.ui.languageSwitch.label}
        title={c.ui.languageSwitch.label}
        data-sveltekit-noscroll
        onclick={closeMobile}
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ds-border text-xs font-mono font-bold text-ds-fg-muted hover:text-ds-cyan hover:border-ds-cyan/60 transition-colors"
      >
        <Languages class="w-3.5 h-3.5" aria-hidden="true" />
        {c.ui.languageSwitch.text}
      </a>

      <!-- Theme Toggle -->
      <button 
        onclick={toggleTheme}
        class="text-ds-fg-muted hover:text-ds-cyan p-2 rounded-full hover:bg-ds-elevated/40 transition-colors focus:outline-none"
        aria-label={c.ui.themeToggle}
      >
        {#if isLight}
          <Moon class="w-5 h-5" />
        {:else}
          <Sun class="w-5 h-5" />
        {/if}
      </button>

      <button 
        class="text-ds-fg hover:text-ds-cyan transition-colors focus:outline-none p-1.5 rounded-lg bg-ds-surface/50 border border-ds-border/50" 
        onclick={toggleMobile}
        aria-label={c.ui.menuToggle}
        aria-expanded={mobileOpen}
      >
        {#if mobileOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>
    </div>
  </div>
</nav>

<!-- Mobile Navigation Menu Overlay -->
{#if mobileOpen}
  <!-- Backdrop -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div 
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" 
    transition:fade={{ duration: 200 }}
    onclick={closeMobile}
  ></div>

  <!-- Menu Drawer -->
  <div 
    class="fixed top-[68px] left-0 w-full bg-ds-surface/95 backdrop-blur-lg border-b border-ds-border z-40 lg:hidden p-6 flex flex-col gap-6"
    transition:fly={{ y: -20, duration: 250 }}
  >
    <div class="flex flex-col gap-4">
      {#each navigation.links as link}
        <a 
          href={link.href} 
          class="text-base font-body font-medium text-ds-fg hover:text-ds-cyan transition-colors py-2 border-b border-ds-border/30"
          onclick={closeMobile}
        >
          {link.name}
        </a>
      {/each}
    </div>
    
    <div class="flex flex-col gap-3 pt-2">
      <a 
        href={navigation.actions.ghost.href} 
        class="w-full text-center border border-ds-cyan text-ds-cyan py-3 rounded-full text-sm font-heading font-semibold hover:bg-ds-cyan/10 transition-colors"
        onclick={closeMobile}
      >
        {navigation.actions.ghost.text}
      </a>
      <a 
        href={navigation.actions.primary.href} 
        class="w-full text-center bg-ds-primary text-ds-on-primary py-3 rounded-full text-sm font-heading font-semibold hover:bg-ds-primary-hover transition-all shadow-[0_0_16px_rgba(0,212,255,0.15)]"
        onclick={closeMobile}
      >
        {navigation.actions.primary.text}
      </a>
    </div>
  </div>
{/if}
