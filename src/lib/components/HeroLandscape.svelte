<!-- Painted-style Cameroon horizon for the hero sky: the sun setting beside Mount Cameroon,
     rolling hills of the Centre region, palms and a savanna acacia. Colours come from the
     --ls-* tokens, so light mode renders a daytime version. Purely decorative.
     The animated parts (glow, clouds, birds) are separate <svg> layers sharing one viewBox, so the
     browser moves them on the compositor instead of repainting the whole scene every frame. -->
<div class="landscape" aria-hidden="true">
  <svg class="layer glow" viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice">
    <defs>
      <radialGradient id="ls-glow" cx="0.5" cy="0.5" r="0.5">
        <stop offset="0" stop-color="var(--ls-glow)" stop-opacity="0.75" />
        <stop offset="0.45" stop-color="var(--ls-glow)" stop-opacity="0.22" />
        <stop offset="1" stop-color="var(--ls-glow)" stop-opacity="0" />
      </radialGradient>
    </defs>
    <circle cx="1200" cy="340" r="300" fill="url(#ls-glow)" />
  </svg>
  <svg class="layer" viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice">
    <circle class="sun" cx="1200" cy="340" r="62" fill="var(--ls-sun)" />
  </svg>
  <svg class="layer clouds" viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice">
    <defs>
      <filter id="ls-soft" x="-20%" y="-200%" width="140%" height="500%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
    </defs>
    <g fill="var(--ls-cloud)" filter="url(#ls-soft)">
      <rect x="180" y="150" width="260" height="10" rx="5" opacity="0.14" />
      <rect x="250" y="168" width="170" height="8" rx="4" opacity="0.1" />
      <rect x="980" y="210" width="300" height="9" rx="4.5" opacity="0.16" />
      <rect x="1060" y="228" width="190" height="7" rx="3.5" opacity="0.12" />
    </g>
  </svg>
  <svg class="layer birds" viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice">
    <g fill="none" stroke="var(--ls-near)" stroke-width="2.4" stroke-linecap="round" opacity="0.7">
      <path d="M880 220 q 8 -7 16 0 q 8 -7 16 0" />
      <path d="M922 204 q 6 -5 12 0 q 6 -5 12 0" />
      <path d="M852 196 q 5 -4 10 0 q 5 -4 10 0" />
    </g>
  </svg>
  <svg class="layer" viewBox="0 0 1600 520" preserveAspectRatio="xMidYMax slice">
    <defs>
      <linearGradient id="ls-haze" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="var(--ls-far)" stop-opacity="0" />
        <stop offset="1" stop-color="var(--ls-far)" stop-opacity="0.6" />
      </linearGradient>
      <symbol id="ls-palm" viewBox="0 0 100 170">
        <path d="M47 170 C 49 120, 50 80, 57 44 L 61 45 C 55 82, 54 122, 53 170 Z" />
        <path d="M59 44 Q 34 22 4 42 Q 32 30 59 48 Z" />
        <path d="M59 44 Q 40 6 14 10 Q 42 16 59 46 Z" />
        <path d="M59 44 Q 66 4 92 6 Q 70 14 61 46 Z" />
        <path d="M59 44 Q 86 26 100 50 Q 80 34 60 48 Z" />
        <path d="M59 44 Q 52 60 36 78 Q 50 58 58 46 Z" />
        <path d="M59 44 Q 72 60 82 80 Q 66 60 60 46 Z" />
      </symbol>
      <symbol id="ls-acacia" viewBox="0 0 160 110">
        <path d="M76 110 L 78 64 L 60 42 L 64 40 L 80 58 L 92 36 L 96 38 L 84 64 L 84 110 Z" />
        <path d="M8 40 C 20 22, 56 16, 80 18 C 110 14, 146 22, 156 38 C 130 44, 30 46, 8 40 Z" />
      </symbol>
    </defs>
    <!-- Mount Cameroon: a broad volcano with a ragged summit, on the left, with the sun setting beside it. -->
    <path
      fill="var(--ls-far)"
      d="M0 300 C 70 272, 130 232, 186 196 L 216 176 L 236 184 L 254 168 L 274 182 L 298 176 C 380 226, 520 296, 700 346 C 860 386, 1000 392, 1200 386 C 1380 380, 1500 372, 1600 364 L 1600 520 L 0 520 Z"
    />
    <rect x="0" y="300" width="1600" height="220" fill="url(#ls-haze)" />

    <!-- Rolling hills around Yaoundé, the city of seven hills. -->
    <path
      fill="var(--ls-mid)"
      d="M0 430 C 90 402, 170 392, 250 410 C 330 428, 380 398, 470 390 C 560 382, 620 418, 720 420 C 820 422, 880 388, 980 384 C 1080 380, 1140 416, 1240 418 C 1340 420, 1400 392, 1480 390 C 1540 388, 1580 400, 1600 404 L 1600 520 L 0 520 Z"
    />

    <g fill="var(--ls-near)">
      <path d="M0 470 C 140 452, 260 462, 400 466 C 560 470, 700 450, 860 456 C 1020 462, 1160 474, 1320 464 C 1440 456, 1540 460, 1600 466 L 1600 520 L 0 520 Z" />
      <use href="#ls-acacia" x="300" y="398" width="130" height="90" />
      <use href="#ls-palm" x="30" y="330" width="90" height="153" />
      <use href="#ls-palm" x="92" y="372" width="64" height="109" />
      <use href="#ls-palm" x="1370" y="318" width="96" height="163" />
      <use href="#ls-palm" x="1450" y="366" width="66" height="112" />
      <use href="#ls-acacia" x="1180" y="416" width="100" height="70" />
    </g>
  </svg>
</div>

<style>
  .landscape {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .layer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .clouds {
    animation: drift 40s ease-in-out infinite alternate;
  }

  .birds {
    animation: glide 18s ease-in-out infinite alternate;
  }

  .glow {
    animation: breathe 7s ease-in-out infinite alternate;
  }

  @keyframes drift {
    from { transform: translateX(-2%); }
    to { transform: translateX(2.5%); }
  }

  @keyframes glide {
    from { transform: translate(0, 0); }
    to { transform: translate(-3.75%, -2.5%); }
  }

  @keyframes breathe {
    from { opacity: 0.75; }
    to { opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .clouds,
    .birds,
    .glow {
      animation: none;
    }
  }
</style>
