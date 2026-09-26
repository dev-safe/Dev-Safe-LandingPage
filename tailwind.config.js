/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ds-bg': 'rgb(var(--ds-bg) / <alpha-value>)',
        'ds-surface': 'rgb(var(--ds-surface) / <alpha-value>)',
        'ds-elevated': 'rgb(var(--ds-elevated) / <alpha-value>)',
        'ds-border': 'rgb(var(--ds-border) / <alpha-value>)',
        'ds-fg': 'rgb(var(--ds-fg) / <alpha-value>)',
        'ds-fg-muted': 'rgb(var(--ds-fg-muted) / <alpha-value>)',
        'ds-fg-subtle': 'rgb(var(--ds-fg-subtle) / <alpha-value>)',
        'ds-cyan': 'rgb(var(--ds-cyan) / <alpha-value>)',
        'ds-blue': 'rgb(var(--ds-blue) / <alpha-value>)',
        'ds-primary': 'rgb(var(--ds-primary) / <alpha-value>)',
        'ds-primary-hover': 'rgb(var(--ds-primary-hover) / <alpha-value>)',
        'ds-on-primary': 'rgb(var(--ds-on-primary) / <alpha-value>)',
        'ds-success': 'rgb(var(--ds-success) / <alpha-value>)',
        'ds-warning': 'rgb(var(--ds-warning) / <alpha-value>)',
        'ds-danger': 'rgb(var(--ds-danger) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}

