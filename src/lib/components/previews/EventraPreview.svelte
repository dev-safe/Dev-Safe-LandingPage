<script lang="ts">
  import { Ticket, Vote } from '@lucide/svelte';

  const tiers = [
    { name: 'Regular', price: '5,000' },
    { name: 'VIP', price: '15,000', selected: true },
    { name: 'Table of 8', price: '50,000' }
  ];
  const contestants = [
    { name: 'Contestant A', share: 62 },
    { name: 'Contestant B', share: 38 }
  ];
</script>

<div class="rounded-xl border border-ds-border/70 bg-ds-surface shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden" aria-hidden="true">
  <div class="flex items-center gap-1.5 px-4 py-2.5 border-b border-ds-border/50 bg-ds-elevated/50">
    <span class="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
    <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
    <span class="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
    <span class="ml-3 flex-1 rounded-md bg-ds-bg/60 px-3 py-1 text-[10px] font-mono text-slate-500">eventra · Gala Night</span>
  </div>

  <div class="p-4 space-y-4">
    <div class="rounded-lg bg-gradient-to-br from-ds-blue/30 via-ds-cyan/10 to-transparent border border-ds-border/50 p-4">
      <p class="text-[10px] font-mono uppercase tracking-wider text-ds-cyan">Sat · 20:00 · Douala</p>
      <p class="font-heading text-base font-bold text-white mt-1">Annual Gala Night</p>
    </div>

    <div>
      <p class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
        <Ticket class="w-3.5 h-3.5" /> Tickets
      </p>
      <ul class="space-y-1.5">
        {#each tiers as tier (tier.name)}
          <li class="flex items-center justify-between rounded-md border px-3 py-2 text-xs {tier.selected ? 'border-ds-cyan/60 bg-ds-cyan/10' : 'border-ds-border/50'}">
            <span class="text-slate-300 font-medium">{tier.name}</span>
            <span class="font-mono font-semibold {tier.selected ? 'text-ds-cyan' : 'text-slate-400'}">{tier.price} XAF</span>
          </li>
        {/each}
      </ul>
    </div>

    <div>
      <p class="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-2">
        <Vote class="w-3.5 h-3.5" /> Paid voting · Best Performer
      </p>
      <div class="space-y-1.5">
        {#each contestants as c (c.name)}
          <div class="flex items-center gap-2 text-[11px]">
            <span class="w-20 shrink-0 text-slate-400">{c.name}</span>
            <span class="flex-1 h-1.5 rounded-full bg-ds-elevated overflow-hidden">
              <span class="block h-full rounded-full bg-gradient-to-r from-ds-cyan to-ds-blue" style="width: {c.share}%"></span>
            </span>
            <span class="w-8 text-right font-mono text-slate-400">{c.share}%</span>
          </div>
        {/each}
      </div>
    </div>

    <span class="block w-full rounded-full bg-gradient-to-r from-ds-cyan to-ds-blue py-2 text-center text-xs font-heading font-semibold text-white">
      Checkout · 15,000 XAF
    </span>
  </div>
</div>
