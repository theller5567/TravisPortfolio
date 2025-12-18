/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030412',
        midnight: '#06091f',
        navy: '#161a31',
        indigo: '#1f1e39',
        storm: '#282b4b',
        aqua: '#33c2cc',
        mint: '#08F2C1',
        royal: '#5c33cc',
        lavender: '#7a57db',
        fuchsia: '#ca2f8c',
        orange: '#cc6033',
        sand: '#d6995c',
        coral: '#ea4884',
      },
      animation: {
        orbit: 'orbit 50s linear infinite',
        marquee: 'marquee 50s linear infinite',
        'marquee-vertical': 'marquee-vertical 50s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': {
            transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
          },
          '100%': {
            transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
          }
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' }
        }
      },
      textShadow: {
        sm: '0 0 5px rgba(255, 255, 255, 0.7)',
        md: '0 0 10px rgba(255, 255, 255, 0.8)',
        lg: '0 0 20px rgba(255, 255, 255, 0.9)',
        neon: '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa, 0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: theme('textShadow.sm'),
        },
        '.text-shadow-md': {
          textShadow: theme('textShadow.md'),
        },
        '.text-shadow-lg': {
          textShadow: theme('textShadow.lg'),
        },
        '.text-shadow-neon': {
          textShadow: theme('textShadow.neon'),
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}