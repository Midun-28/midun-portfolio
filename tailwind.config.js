/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heritage: {
          950: '#030509',
          900: '#070B14', // Deep midnight navy from Porikkalam
          850: '#09101D',
          800: '#0E172A',
          750: '#131F38',
          700: '#1A2949',
          600: '#253B68',
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F3C64F',
          500: '#D4AF37', // Royal temple gold
          600: '#B89228',
          700: '#8C6D23',
          800: '#634C19',
          900: '#42320E',
          antique: '#C5A059',
          bronze: '#A67C38',
        },
        ruby: {
          900: '#4A0D17',
          800: '#6B1120',
          700: '#881326',
        }
      },
      fontFamily: {
        serif: ['"Cinzel"', '"Cinzel Decorative"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        tamil: ['"Noto Serif Tamil"', '"Anek Tamil"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #FFE8A3 0%, #D4AF37 50%, #9A6F1A 100%)',
        'gold-gradient-shine': 'linear-gradient(90deg, #9A6F1A 0%, #FDE68A 25%, #D4AF37 50%, #FDE68A 75%, #9A6F1A 100%)',
        'dark-royal': 'radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.08) 0%, rgba(7, 11, 20, 0.98) 75%)',
        'subtle-grid': 'radial-gradient(rgba(212, 175, 55, 0.12) 1px, transparent 1px)',
      },
      boxShadow: {
        'gold-sm': '0 0 10px rgba(212, 175, 55, 0.25)',
        'gold-md': '0 0 20px rgba(212, 175, 55, 0.35)',
        'gold-lg': '0 0 35px rgba(212, 175, 55, 0.45)',
        'inner-gold': 'inset 0 0 15px rgba(212, 175, 55, 0.2)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
