<script lang="ts">
  import { ShieldCheck, Star } from '@lucide/svelte';
</script>

<div class="mx-auto w-[240px] rounded-[2rem] border-[6px] border-ds-elevated bg-ds-surface shadow-[0_8px_32px_rgba(0,0,0,0.25)] overflow-hidden" aria-hidden="true">
  <div class="flex justify-center py-2">
    <span class="w-16 h-1.5 rounded-full bg-ds-elevated"></span>
  </div>

  <div class="px-4 pb-5 space-y-3">
    <p class="font-heading text-sm font-bold text-white">BookBridge</p>

    <div class="h-28 rounded-lg bg-gradient-to-br from-ds-blue/50 to-ds-cyan/20 border border-ds-border/50 flex items-end p-3">
      <span class="font-heading text-xs font-bold text-white leading-tight">A-Level Physics<br />3rd Edition</span>
    </div>

    <div class="flex items-center justify-between">
      <span class="font-mono text-sm font-bold text-ds-cyan">4,500 XAF</span>
      <span class="text-[10px] font-mono text-slate-500">Condition: Good</span>
    </div>

    <div class="flex items-center gap-1.5 text-[11px] text-slate-400">
      <Star class="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> 4.8 · Verified seller
    </div>

    <div class="flex items-start gap-2 rounded-lg border border-ds-success/30 bg-ds-success/10 px-2.5 py-2">
      <ShieldCheck class="w-4 h-4 text-ds-success shrink-0 mt-0.5" />
      <span class="text-[10px] leading-snug text-slate-300">Escrow protected: the seller is paid only after you receive the book.</span>
    </div>

    <span class="block w-full rounded-full bg-gradient-to-r from-ds-cyan to-ds-blue py-2 text-center text-xs font-heading font-semibold text-white">
      Buy safely
    </span>
  </div>
</div>
