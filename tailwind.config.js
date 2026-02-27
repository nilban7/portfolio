/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        card: '#0A0A0A',
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.6)',
        accent: '#C6A75E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        hero: '.05em', // Custom hero tracking
      }
    },
  },
  plugins: [],
}
