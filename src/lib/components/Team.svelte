<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { Check } from '@lucide/svelte';
  import { t } from '$lib/data/content';
  import BrandIcon from './BrandIcon.svelte';

  const c = $derived(t());
  const team = $derived(c.team);
</script>

<section 
  id="team" 
  class="relative py-16 sm:py-24 bg-ds-bg overflow-hidden"
>
  <div class="max-w-7xl mx-auto px-6 w-full relative z-10">
    
    <!-- Centered Header -->
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span class="eyebrow mb-3" data-reveal use:reveal={{ y: 20, duration: 600 }}>{team.eyebrow}</span>
      <h2 
        class="font-heading text-[1.75rem] sm:text-4xl font-medium tracking-tight text-ds-fg mb-4"
        data-reveal use:reveal={{ y: 20, duration: 600 }}
      >
        {team.heading}
      </h2>
      <span class="cm-rule mx-auto mb-5" aria-hidden="true"></span>
      <p 
        class="font-body text-ds-fg-muted text-sm sm:text-base leading-relaxed"
        data-reveal use:reveal={{ y: 20, duration: 600, delay: 150 }}
      >
        {team.subtitle}
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center max-w-6xl mx-auto">
      <!-- Founders photo -->
      <figure
        class="lg:col-span-5 w-full max-w-sm sm:max-w-md mx-auto relative rounded-xl overflow-hidden border border-ds-border/70 shadow-[0_16px_40px_rgba(0,0,0,0.25)]"
        data-reveal use:reveal={{ y: 30, duration: 700, delay: 150 }}
      >
        <picture>
          <source type="image/avif" srcset="/images/team-founders-480.avif 480w, /images/team-founders-940.avif 940w" sizes="(min-width: 640px) 448px, 384px" />
          <source type="image/webp" srcset="/images/team-founders-480.webp 480w, /images/team-founders-940.webp 940w" sizes="(min-width: 640px) 448px, 384px" />
          <img
            src="/images/team-founders-480.jpg"
            alt={team.photoAlt}
            width="480"
            height="600"
            loading="lazy"
            decoding="async"
            class="w-full h-auto aspect-[4/5] object-cover"
          />
        </picture>
        <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-ds-accent to-transparent"></div>
      </figure>

      <!-- Cards Grid -->
      <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {#each team.members as member, index}
          <div 
            class="glass-card p-6 flex flex-col items-center text-center border border-ds-border/70 hover:border-ds-accent/40 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgb(var(--ds-accent)/0.08)] transition-all duration-300 relative group"
            data-reveal use:reveal={{ y: 30, duration: 600, delay: index * 100 + 200 }}
          >
            <!-- Top hover line glow -->
            <div class="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-ds-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <!-- Portrait: 240px sources, so 160px max keeps them sharp on 1.5x screens -->
            <div 
              class="w-36 h-36 sm:w-40 sm:h-40 rounded-xl overflow-hidden flex items-center justify-center font-heading text-3xl font-medium text-[#fff] mb-5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] ring-1 ring-ds-border/60 group-hover:ring-ds-accent/50 transition-shadow duration-300"
              style="background-color: {member.bg}; border: {member.borderCyan ? '2px solid rgb(var(--ds-accent))' : 'none'};"
            >
              {#if member.image}
                <img src={member.image} alt={c.ui.portraitAlt(member.name, member.role)} width="160" height="160" loading="lazy" decoding="async" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {:else}
                {member.initials}
              {/if}
            </div>

            <!-- Name -->
            <h3 class="font-body text-base font-bold text-ds-fg mb-1 group-hover:text-ds-accent transition-colors duration-200">
              {member.name}
            </h3>

            <!-- Role -->
            <p class="font-body text-xs font-semibold text-ds-accent mb-3">
              {member.role}
            </p>

            <!-- Description -->
            <p class="font-body text-ds-fg-muted text-sm leading-relaxed mb-4">
              {member.description}
            </p>

            <ul class="w-full space-y-2 mb-5 text-left">
              {#each member.highlights as highlight (highlight)}
                <li class="flex gap-2 font-body text-xs leading-snug text-ds-fg">
                  <Check class="w-3.5 h-3.5 mt-0.5 text-ds-accent shrink-0" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              {/each}
            </ul>

            <div class="flex gap-2 mb-4">
              {#each [{ network: 'LinkedIn', brand: 'linkedin', href: member.profiles.linkedin }, { network: 'GitHub', brand: 'github', href: member.profiles.github }] as const as profile (profile.brand)}
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer me"
                  aria-label={c.ui.profileLabel(member.name, profile.network)}
                  title={profile.network}
                  class="w-10 h-10 flex items-center justify-center rounded-lg border border-ds-border/60 bg-ds-elevated/60 text-ds-fg-muted hover:text-ds-accent hover:border-ds-accent/60 hover:bg-ds-accent/10 transition-colors"
                >
                  <BrandIcon name={profile.brand} class="w-4 h-4" />
                </a>
              {/each}
            </div>

            <!-- Tags Row -->
            <div class="flex flex-wrap gap-1.5 justify-center mt-auto pt-3 border-t border-ds-border/30 w-full">
              {#each member.tags as tag}
                <span class="px-2 py-0.5 bg-ds-elevated/70 border border-ds-border/40 rounded text-[9px] font-mono font-medium text-ds-fg-muted">
                  {tag}
                </span>
              {/each}
            </div>

          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
