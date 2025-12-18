/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
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