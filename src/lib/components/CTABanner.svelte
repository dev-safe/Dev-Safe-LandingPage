<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { fade } from 'svelte/transition';
  import { ctaBanner } from '$lib/data/content';


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
        errorMessage = result.message || 'Submission failed. Please try again.';
      }
    } catch (error) {
      console.error('Submission error:', error);
      errorMessage = 'Network error. Please check your connection or email us directly.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section 
  id="contact" 
  class="relative py-24 bg-ds-bg grid-bg overflow-hidden border-t border-ds-border/40"
>
  <!-- Radial Accent Light -->
  <div class="absolute inset-0 pointer-events-none z-0" style="background: radial-gradient(circle at center, rgba(0, 212, 255, 0.06) 0%, transparent 65%);"></div>

  <div class="max-w-7xl mx-auto px-6 relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
      
      <!-- Text Column (Left) -->
      <div class="lg:col-span-5 text-left flex flex-col justify-center">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ds-cyan/10 border border-ds-cyan/30 text-ds-cyan text-xs font-mono font-medium mb-6 w-fit" data-reveal use:reveal={{ y: 0 }}>
          <span class="w-1.5 h-1.5 rounded-full bg-ds-cyan animate-pulse"></span>
          ACTIVE CONSULTATION GATEWAY
        </div>
        <h2 
          class="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
          data-reveal use:reveal={{ y: 20, duration: 600 }}
        >
          {ctaBanner.heading}
        </h2>
        <p 
          class="font-body text-slate-400 text-sm sm:text-base mb-8 max-w-md leading-relaxed"
          data-reveal use:reveal={{ y: 20, duration: 600, delay: 150 }}
        >
          {ctaBanner.subtext}
        </p>
        <div 
          class="space-y-3 pt-4 border-t border-ds-border/30 max-w-xs"
          data-reveal use:reveal={{ y: 20, duration: 600, delay: 300 }}
        >
          <div class="flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <span class="text-ds-cyan">✓</span> Free Cybersecurity Pre-Audit
          </div>
          <div class="flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <span class="text-ds-cyan">✓</span> Custom Architectural Diagram
          </div>
          <div class="flex items-center gap-2.5 text-xs font-mono text-slate-400">
            <span class="text-ds-cyan">✓</span> Secure Proposal in 24 Hours
          </div>
        </div>
      </div>

      <!-- Form Column (Right) -->
      <div class="lg:col-span-7 w-full max-w-xl lg:ml-auto">
        <div 
          class="glass-card p-6 sm:p-8 border border-ds-border hover:border-ds-cyan/20 transition-all duration-300 relative group"
          data-reveal use:reveal={{ y: 30, duration: 700, delay: 200 }}
        >
          <!-- Top hover accent line -->
          <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ds-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {#if isSubmitted}
            <div class="text-center py-12 flex flex-col items-center justify-center" transition:fade>
              <div class="w-16 h-16 bg-ds-cyan/10 border border-ds-cyan text-ds-cyan rounded-full flex items-center justify-center mb-6 shadow-[0_0_24px_rgba(0,212,255,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="font-heading text-2xl font-bold text-white mb-3">Request Received</h3>
              <p class="font-body text-sm text-slate-400 max-w-xs leading-relaxed mb-6">
                Thank you, <strong class="text-white">{name}</strong>. Your consultation details have been sent. We will contact you at <span class="text-ds-cyan">{email}</span> within 24 hours.
              </p>
              <button 
                onclick={() => isSubmitted = false}
                class="text-xs font-mono text-slate-500 hover:text-ds-cyan transition-colors"
              >
                ← Send another message
              </button>
            </div>
          {:else}
            <form onsubmit={handleSubmit} class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label for="form-name" class="font-mono text-[10px] uppercase tracking-wider text-ds-cyan mb-1.5 block">Your Name</label>
                  <input 
                    type="text" 
                    id="form-name" 
                    bind:value={name} 
                    required 
                    placeholder="E.g. Verla B."
                    class="w-full bg-ds-bg/65 border border-ds-border focus:border-ds-cyan focus:outline-none focus:ring-1 focus:ring-ds-cyan/30 text-white placeholder-slate-600 rounded-lg p-3 text-sm transition-all duration-200"
                  />
                </div>
                <div>
                  <label for="form-email" class="font-mono text-[10px] uppercase tracking-wider text-ds-cyan mb-1.5 block">Email Address</label>
                  <input 
                    type="email" 
                    id="form-email" 
                    bind:value={email} 
                    required 
                    placeholder="E.g. contact@devsafe.cm"
                    class="w-full bg-ds-bg/65 border border-ds-border focus:border-ds-cyan focus:outline-none focus:ring-1 focus:ring-ds-cyan/30 text-white placeholder-slate-600 rounded-lg p-3 text-sm transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label for="form-service" class="font-mono text-[10px] uppercase tracking-wider text-ds-cyan mb-1.5 block">Requested Gateway Service</label>
                <select 
                  id="form-service" 
                  bind:value={service}
                  class="w-full bg-ds-bg border border-ds-border focus:border-ds-cyan focus:outline-none focus:ring-1 focus:ring-ds-cyan/30 text-white rounded-lg p-3 text-sm transition-all duration-200 appearance-none cursor-pointer"
                  style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%2300D4FF%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 9 12 15 18 9%22%3E%3C/polyline%3E%3C/svg%3E'); background-repeat: no-repeat; background-position: right 12px center; background-size: 16px;"
                >
                  <option value="software">Software Development</option>
                  <option value="security">Cybersecurity Auditing</option>
                  <option value="branding">UI/UX & Brand Design</option>
                  <option value="general">General Digital Assessment</option>
                </select>
              </div>

              <div>
                <label for="form-message" class="font-mono text-[10px] uppercase tracking-wider text-ds-cyan mb-1.5 block">Project Requirements</label>
                <textarea 
                  id="form-message" 
                  bind:value={message} 
                  required 
                  rows="3" 
                  placeholder="Briefly describe your objectives..."
                  class="w-full bg-ds-bg/65 border border-ds-border focus:border-ds-cyan focus:outline-none focus:ring-1 focus:ring-ds-cyan/30 text-white placeholder-slate-600 rounded-lg p-3 text-sm transition-all duration-200"
                ></textarea>
              </div>

              {#if errorMessage}
                <p class="text-xs font-mono text-rose-500 text-center bg-rose-500/10 border border-rose-500/20 py-2.5 rounded-lg" transition:fade>
                  Error: {errorMessage}
                </p>
              {/if}

              <button 
                type="submit" 
                disabled={isSubmitting}
                class="w-full flex items-center justify-center bg-gradient-to-r from-ds-cyan to-ds-blue text-white py-3.5 rounded-lg font-heading text-sm font-bold hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.15)]"
              >
                {#if isSubmitting}
                  <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Establishing Secure Link...
                {:else}
                  Initialize Consultation Request
                {/if}
              </button>
              
              <p class="text-[10px] text-center font-mono text-slate-500">
                Or bypass secure form: 
                <a href={ctaBanner.action.href} class="text-ds-cyan hover:underline">{ctaBanner.action.text}</a>
              </p>
            </form>
          {/if}
        </div>
      </div>

    </div>
  </div>
</section>
