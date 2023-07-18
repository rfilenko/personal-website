/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {},
  extend: {
    colors: {
      'green': 'rgb(34 197 94)',
      'blue': 'rgb(59 130 246)',
      'red': 'rgb(239 68 68)',
    },
    animation: {
      aura: 'aura 1s ease-in-out infinite',
    },
    keyframes: {
      aura: {
        '0%, 100%': { boxShadow: '0 0 0 -1px rgba(13,194,172,.75), 0 0 0 -1px rgba(13,194,172,.5), 0 0 0 -1px rgba(13,194,172,.25)' },
        '100%': { boxShadow: '0 0 0 15px transparent, 0 0 0 30px transparent, 0 0 0 45px transparent' },
      }
    }
  },
  plugins: [require("@tailwindcss/typography")],
}
