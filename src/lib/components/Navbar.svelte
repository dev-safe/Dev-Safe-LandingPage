<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import { Menu, X, Sun, Moon } from '@lucide/svelte';
  import { navigation } from '$lib/data/content';
  import logoImg from '$lib/assets/DevSafe_logo.jpg';

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
    <a href="/" class="flex items-center gap-2.5 group focus:outline-none" onclick={closeMobile}>
      <div class="relative flex items-center justify-center">
        <img src={logoImg} alt="DevSafe logo" width="32" height="32" class="w-8 h-8 rounded-lg object-cover border border-ds-border/40 transition-transform duration-300 group-hover:scale-105" />
      </div>
      <span class="font-heading text-xl font-bold tracking-tight">
        <span class="text-white">{navigation.logo.textDev}</span><span class="text-ds-cyan">{navigation.logo.textSafe}</span>
      </span>
    </a>

    <!-- Desktop Menu Links -->
    <div class="hidden md:flex items-center gap-5 lg:gap-8">
      {#each navigation.links as link}
        <a 
          href={link.href} 
          class="text-sm font-body font-medium text-slate-300 hover:text-ds-cyan transition-colors duration-200 relative py-1.5 group/navlink"
        >
          {link.name}
          <span class="absolute bottom-0 left-1/2 w-0 h-[2px] bg-gradient-to-r from-ds-cyan to-ds-blue transition-all duration-300 -translate-x-1/2 group-hover/navlink:w-full"></span>
        </a>
      {/each}
    </div>

    <!-- Desktop Actions -->
    <div class="hidden md:flex items-center gap-4">
      <!-- Theme Toggle -->
      <button 
        onclick={toggleTheme}
        class="text-slate-400 hover:text-ds-cyan p-2 rounded-full hover:bg-ds-elevated/40 transition-colors focus:outline-none"
        aria-label="Toggle theme"
      >
        {#if isLight}
          <Moon class="w-4 h-4" />
        {:else}
          <Sun class="w-4 h-4" />
        {/if}
      </button>

      <a 
        href={navigation.actions.ghost.href} 
        class="border border-ds-cyan/60 text-ds-cyan px-5 py-2 rounded-full text-xs font-heading font-semibold hover:bg-ds-cyan/10 transition-all duration-200"
      >
        {navigation.actions.ghost.text}
      </a>
      <a 
        href={navigation.actions.primary.href} 
        class="bg-gradient-to-r from-ds-cyan to-ds-blue text-white px-5 py-2 rounded-full text-xs font-heading font-semibold hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_16px_rgba(0,212,255,0.15)] hover:shadow-[0_0_24px_rgba(0,212,255,0.25)]"
      >
        {navigation.actions.primary.text}
      </a>
    </div>

    <!-- Mobile Actions & Menu Toggle -->
    <div class="flex items-center gap-2 md:hidden">
      <!-- Theme Toggle -->
      <button 
        onclick={toggleTheme}
        class="text-slate-400 hover:text-ds-cyan p-2 rounded-full hover:bg-ds-elevated/40 transition-colors focus:outline-none"
        aria-label="Toggle theme"
      >
        {#if isLight}
          <Moon class="w-5 h-5" />
        {:else}
          <Sun class="w-5 h-5" />
        {/if}
      </button>

      <button 
        class="text-white hover:text-ds-cyan transition-colors focus:outline-none p-1.5 rounded-lg bg-ds-surface/50 border border-ds-border/50" 
        onclick={toggleMobile}
        aria-label="Toggle menu"
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
    class="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" 
    transition:fade={{ duration: 200 }}
    onclick={closeMobile}
  ></div>

  <!-- Menu Drawer -->
  <div 
    class="fixed top-[68px] left-0 w-full bg-ds-surface/95 backdrop-blur-lg border-b border-ds-border z-40 md:hidden p-6 flex flex-col gap-6"
    transition:fly={{ y: -20, duration: 250 }}
  >
    <div class="flex flex-col gap-4">
      {#each navigation.links as link}
        <a 
          href={link.href} 
          class="text-base font-body font-medium text-slate-200 hover:text-ds-cyan transition-colors py-2 border-b border-ds-border/30"
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
        class="w-full text-center bg-gradient-to-r from-ds-cyan to-ds-blue text-white py-3 rounded-full text-sm font-heading font-semibold hover:brightness-110 transition-all shadow-[0_0_16px_rgba(0,212,255,0.15)]"
        onclick={closeMobile}
      >
        {navigation.actions.primary.text}
      </a>
    </div>
  </div>
{/if}
