<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { fade } from 'svelte/transition';
  import { t } from '$lib/data/content';
  import { whatsappUrl } from '$lib/config/site';
  import SectionPhoto from './SectionPhoto.svelte';
  import BrandIcon from './BrandIcon.svelte';

  const c = $derived(t());
  const ctaBanner = $derived(c.ctaBanner);
  const form = $derived(ctaBanner.form);

  // Form State
  let name = $state('');
  let email = $state('');
  let service = $state('general');
  let message = $state('');
  
  let isSubmitting = $state(false);
  let isSubmitted = $state(false);
  let errorMessage = $state('');

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    isSubmitting = true;
    errorMessage = '';
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '96a7e880-b78f-4c60-b59b-08a153022f04',
          name,
          email,
          subject: `DevSafe Consultation Inquiry - ${name}`,
          from_name: 'DevSafe Landing Page',
          service,
          message
        })
      });

      const result = await response.json();
      if (response.ok && result.success) {
        isSubmitted = true;
      } else {
        errorMessage = result.message || form.errorFailed;
      }
    } catch (error) {
      console.error('Submission error:', error);
      errorMessage = form.errorNetwork;
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section 
  id="contact" 
  class="relative py-24 bg-ds-bg pattern-bg overflow-hidden border-t border-ds-border/40"
>
  <SectionPhoto name="cta-code" widths={[1280, 1920]} fallbackHeight={688} class="[--photo-opacity-lg:0.35]" />

  <!-- Radial Accent Light -->
  <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(circle at center, rgb(var(--ds-accent)/0.06) 0%, transparent 65%);"></div>

  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Text Column (Left) -->
      <div class="lg:col-span-5 text-left flex flex-col justify-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ds-accent/10 border border-ds-accent/30 text-ds-accent text-xs font-mono font-medium mb-6 w-fit" data-reveal use:reveal={{ y: 0 }}>
          <span class="w-1.5 h-1.5 rounded-full bg-ds-accent animate-pulse"></span>
          {ctaBanner.badge}
        </div>
        <h2 
          class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ds-fg mb-6 leading-tight"
          data-reveal use:reveal={{ y: 20, duration: 600 }}
        >
          {ctaBanner.heading}
        </h2>
      <span class="cm-rule mb-6" aria-hidden="true"></span>
        <p 
          class="font-body text-ds-fg-muted text-sm sm:text-base mb-8 max-w-md leading-relaxed"
          data-reveal use:reveal={{ y: 20, duration: 600, delay: 150 }}
        >
          {ctaBanner.subtext}
        </p>
        <div 
          class="space-y-3 pt-4 border-t border-ds-border/30 max-w-xs"
          data-reveal use:reveal={{ y: 20, duration: 600, delay: 300 }}
        >
          {#each ctaBanner.benefits as benefit (benefit)}
            <div class="flex items-center gap-2.5 text-xs font-mono text-ds-fg-muted">
              <span class="text-ds-accent" aria-hidden="true">✓</span> {benefit}
            </div>
          {/each}
        </div>

        <a
          href={whatsappUrl(c.whatsapp.message)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.whatsapp.ariaLabel}
          class="mt-8 inline-flex items-center justify-center gap-3 w-full sm:w-fit px-6 py-3.5 rounded-full bg-[#25D366] text-[#052e1c] font-heading font-semibold hover:bg-[#1ebe5b] hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_8px_24px_rgba(37,211,102,0.25)]"
          data-reveal use:reveal={{ y: 20, duration: 600, delay: 400 }}
        >
          <BrandIcon name="whatsapp" class="w-5 h-5" />
          <span>{c.whatsapp.label}</span>
          <span class="font-mono text-sm font-medium opacity-80 whitespace-nowrap">{c.footer.contact.whatsapp.text}</span>
        </a>
      </div>

      <!-- Form Column (Right) -->
      <div class="lg:col-span-7 w-full max-w-xl lg:ml-auto">
        <div 
          class="glass-card p-6 sm:p-8 border border-ds-border hover:border-ds-accent/20 transition-all duration-300 relative group"
          data-reveal use:reveal={{ y: 30, duration: 700, delay: 200 }}
        >
          <!-- Top hover accent line -->
          <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ds-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {#if isSubmitted}
            <div class="text-center py-12 flex flex-col items-center justify-center" transition:fade>
              <div class="w-16 h-16 bg-ds-accent/10 border border-ds-accent text-ds-accent rounded-full flex items-center justify-center mb-6 shadow-[0_0_24px_rgb(var(--ds-accent)/0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-heading text-2xl font-bold text-ds-fg mb-3">{ctaBanner.success.heading}</h3>
              <p class="font-body text-sm text-ds-fg-muted max-w-xs leading-relaxed mb-6">
                {ctaBanner.success.thanks} <strong class="text-ds-fg">{name}</strong>. {ctaBanner.success.sent} <span class="text-ds-accent">{email}</span> {ctaBanner.success.within}
              </p>
              <button 
                onclick={() => isSubmitted = false}
                class="text-xs font-mono text-ds-fg-subtle hover:text-ds-accent transition-colors"
              >
                {ctaBanner.success.again}
              </button>
            </div>
          {:else}
            <form onsubmit={handleSubmit} class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="form-name" class="font-mono text-[10px] uppercase tracking-wider text-ds-accent mb-1.5 block">{form.name.label}</label>
                  <input 
                    type="text" 
                    id="form-name" 
                    bind:value={name} 
                    required 
                    placeholder={form.name.placeholder}
                    class="w-full bg-ds-bg/65 border border-ds-border focus:border-ds-accent focus:outline-none focus:ring-1 focus:ring-ds-accent/30 text-ds-fg placeholder:text-ds-fg-subtle rounded-lg p-3 text-sm transition-all duration-200"
                  />
                </div>
                <div>
                  <label for="form-email" class="font-mono text-[10px] uppercase tracking-wider text-ds-accent mb-1.5 block">{form.email.label}</label>
                  <input 
                    type="email" 
                    id="form-email" 
                    bind:value={email} 
                    required 
                    placeholder={form.email.placeholder}
                    class="w-full bg-ds-bg/65 border border-ds-border focus:border-ds-accent focus:outline-none focus:ring-1 focus:ring-ds-accent/30 text-ds-fg placeholder:text-ds-fg-subtle rounded-lg p-3 text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label for="form-service" class="font-mono text-[10px] uppercase tracking-wider text-ds-accent mb-1.5 block">{form.service.label}</label>
                <select 
                  id="form-service" 
                  bind:value={service}
                  class="w-full bg-ds-bg border border-ds-border focus:border-ds-accent focus:outline-none focus:ring-1 focus:ring-ds-accent/30 text-ds-fg rounded-lg p-3 text-sm transition-all duration-200 appearance-none cursor-pointer"
                  style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2300D4FF%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 12px center; background-size: 16px;"
                >
                  {#each form.service.options as option (option.value)}
                    <option value={option.value}>{option.label}</option>
                  {/each}
                </select>
              </div>

              <div>
                <label for="form-message" class="font-mono text-[10px] uppercase tracking-wider text-ds-accent mb-1.5 block">{form.message.label}</label>
                <textarea 
                  id="form-message" 
                  bind:value={message} 
                  required 
                  rows="3" 
                  placeholder={form.message.placeholder}
                  class="w-full bg-ds-bg/65 border border-ds-border focus:border-ds-accent focus:outline-none focus:ring-1 focus:ring-ds-accent/30 text-ds-fg placeholder:text-ds-fg-subtle rounded-lg p-3 text-sm transition-all duration-200"
                ></textarea>
              </div>

              {#if errorMessage}
                <p class="text-xs font-mono text-rose-500 text-center bg-rose-500/10 border border-rose-500/20 py-2.5 rounded-lg" transition:fade>
                  {form.errorPrefix} {errorMessage}
                </p>
              {/if}

              <button 
                type="submit" 
                disabled={isSubmitting}
                class="w-full flex items-center justify-center bg-ds-primary text-ds-on-primary px-4 py-3.5 text-center rounded-lg font-heading text-sm font-bold hover:bg-ds-primary-hover active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 shadow-[0_0_20px_rgb(var(--ds-accent)/0.15)]"
              >
                {#if isSubmitting}
                  <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {form.submitting}
                {:else}
                  {form.submit}
                {/if}
              </button>
              
              <p class="text-[10px] text-center font-mono text-ds-fg-subtle">
                {form.altContact}
                <a href={ctaBanner.action.href} class="text-ds-accent hover:underline">{ctaBanner.action.text}</a>
              </p>
            </form>
          {/if}
        </div>
      </div>

    </div>
  </div>
</section>
