/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'ui-sans-serif', 'sans-serif'],
        sans: ['"General Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        indic: ['"General Sans"', '"Noto Sans Devanagari"', '"Noto Sans Tamil"', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#06080E',
          2: '#0A0E16',
          3: '#10151F',
          4: '#161C28',
        },
        line: 'rgba(255,255,255,0.09)',
        paper: '#ECEFF4',
        muted: '#878FA1',
        saffron: {
          DEFAULT: '#F6B53D',
          deep: '#E89321',
          soft: '#FBD68A',
        },
        teal: {
          DEFAULT: '#37D6C3',
          deep: '#13A892',
        },
        iris: '#6E8BFF',
        rose: '#FF7A8A',
        lime: '#A6E22E',
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      keyframes: {
        'grain': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-3%,-5%)' },
          '30%': { transform: 'translate(4%,-2%)' },
          '50%': { transform: 'translate(-2%,5%)' },
          '70%': { transform: 'translate(5%,3%)' },
          '90%': { transform: 'translate(-4%,2%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'marquee': 'marquee 32s linear infinite',
        'blink': 'blink 1.05s step-end infinite',
      },
    },
  },
  plugins: [],
}
