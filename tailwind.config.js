/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pleco Executive Navy & Blue Brand Tokens
        pleco: {
          'navy-dark': '#0A192F', // Deepest Midnight Navy (Headers, Dark Surfaces)
          'navy': '#0F2744',      // Corporate Navy (Primary Brand Surface)
          'navy-light': '#1E3A8A',// Royal Navy (Active states, prominent titles)
          'blue': '#2563EB',      // Vibrant Tech Blue (Primary CTAs, Link highlights)
          'azure': '#3B82F6',     // Azure Accent (Focus rings, interactive highlights)
          'sky': '#0284C7',       // Cyan / Azure Blue (Wave motif accent)
          'cyan': '#06B6D4',      // Precision Teal / Cyan accent
          'tint': '#DBEAFE',      // Tinted Blue (Card accents, badge borders)
          'ice': '#EFF6FF',       // Subtle Ice Blue (Badge backgrounds, highlight fills)
        },
        'brand-primary': {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#0A192F',
          DEFAULT: '#2563EB',
        },
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#627D98',
          500: '#486581',
          600: '#334E68',
          700: '#243B53',
          800: '#0F2744',
          900: '#0A192F',
          950: '#050D1A',
        },
        // Semantic status tokens
        status: {
          success: {
            bg: '#ECFDF5',
            border: '#A7F3D0',
            text: '#065F46',
            DEFAULT: '#10B981',
          },
          warning: {
            bg: '#FFFBEB',
            border: '#FDE68A',
            text: '#92400E',
            DEFAULT: '#F59E0B',
          },
          error: {
            bg: '#FEF2F2',
            border: '#FECACA',
            text: '#991B1B',
            DEFAULT: '#EF4444',
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        heading: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'monospace',
        ],
      },
      fontSize: {
        'display': ['3.25rem', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-sm': ['2.125rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h1-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h2': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.015em', fontWeight: '700' }],
        'h3': ['1.375rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.005em', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '600' }],
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(15, 23, 42, 0.05)',
        'sm': '0 1px 3px 0 rgba(15, 23, 42, 0.07), 0 1px 2px -1px rgba(15, 23, 42, 0.04)',
        'md': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
        'lg': '0 10px 15px -3px rgba(15, 23, 42, 0.07), 0 4px 6px -4px rgba(15, 23, 42, 0.03)',
        'xl': '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 12px 24px -4px rgba(15, 23, 42, 0.09), 0 4px 8px -2px rgba(15, 23, 42, 0.04)',
        'nav': '0 1px 3px 0 rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '7xl': '80rem', // 1280px (Standard Global Container)
        '6xl': '72rem', // 1152px
        '5xl': '64rem', // 1024px
        '4xl': '56rem', // 896px
        '3xl': '48rem', // 768px
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out forwards',
        'slide-down': 'slideDown 0.25s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
