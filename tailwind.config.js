/** @type {import('tailwindcss').Config} */
// Colours come from CSS variables in src/index.css so light and dark mode
// switch automatically. Change the palette there, not here.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        highlight: 'rgb(var(--highlight) / <alpha-value>)',
        onaccent: 'rgb(var(--onaccent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
