import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1120',
        panel: '#121A2B',
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.14)',
        },
        accent: {
          DEFAULT: '#E8A33D',
          hover: '#F0B35C',
        },
        status: {
          pending: '#8A94A6',
          running: '#E8A33D',
          success: '#5FB88A',
          alert: '#E2706B',
        },
        text: {
          DEFAULT: '#EDEFF2',
          muted: '#8A94A6',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.6' }],
        base: ['1rem', { lineHeight: '1.7' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.375rem', { lineHeight: '1.5' }],
        '2xl': ['1.75rem', { lineHeight: '1.3' }],
        '3xl': ['2.1875rem', { lineHeight: '1.2' }],
        '4xl': ['2.75rem', { lineHeight: '1.15' }],
        '5xl': ['3.4375rem', { lineHeight: '1.1' }],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
        'caret-blink': 'caret-blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
