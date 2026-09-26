type RevealParams = {
  y?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
};

/**
 * Scroll-triggered entrance animation that keeps content in the server-rendered HTML.
 * Pair with a static `data-reveal` attribute so the hidden state (scoped to `html.js`
 * in app.css) applies before hydration without a flash of content.
 */
export function reveal(node: HTMLElement, params: RevealParams = {}) {
  const { y = 20, duration = 600, delay = 0, threshold = 0.1 } = params;

  node.style.setProperty('--reveal-y', `${y}px`);
  node.style.setProperty('--reveal-duration', `${duration}ms`);
  node.style.setProperty('--reveal-delay', `${delay}ms`);

  let cleanupTimer: ReturnType<typeof setTimeout> | undefined;

  // Hand control back to the element's own classes (e.g. hover transforms) once revealed.
  const cleanup = () => {
    node.removeAttribute('data-reveal');
    node.classList.remove('revealed');
    for (const prop of ['--reveal-y', '--reveal-duration', '--reveal-delay']) {
      node.style.removeProperty(prop);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        node.classList.add('revealed');
        observer.disconnect();
        cleanupTimer = setTimeout(cleanup, delay + duration + 50);
      }
    },
    { threshold }
  );

  observer.observe(node);
  return {
    destroy: () => {
      observer.disconnect();
      clearTimeout(cleanupTimer);
    }
  };
}
