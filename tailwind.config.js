/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        ink:           '#060810',
        deep:          '#0a0f1e',
        navy:          '#0d1530',
        'blue-mid':    '#1e40af',
        'blue-vivid':  '#2563eb',
        'blue-bright': '#3b82f6',
        'blue-glow':   '#60a5fa',
        cyan:          '#38bdf8',
        'white-dim':   '#a8b8d8',
        'white-muted': '#4a5a7a',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drift1: {
          from: { transform: 'translate(0,0) scale(1)' },
          to:   { transform: 'translate(50px,30px) scale(1.08)' },
        },
        drift2: {
          from: { transform: 'translate(0,0) scale(1)' },
          to:   { transform: 'translate(-30px,40px) scale(1.05)' },
        },
        scanline: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '0 100vh' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.7s ease forwards',
        'drift1':   'drift1 18s ease-in-out infinite alternate',
        'drift2':   'drift2 22s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
    },
  },
  plugins: [],
}
