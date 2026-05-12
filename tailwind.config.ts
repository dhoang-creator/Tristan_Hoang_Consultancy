import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f0eee9',
        'paper-2': '#e8e5dd',
        ink: '#0F1422',
        'ink-mute': '#3a4053',
        navy: '#0B2545',
        'navy-2': '#134074',
        silver: '#D9DCE1',
        'silver-2': '#9AA3B2',
      },
      fontFamily: {
        sans: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config