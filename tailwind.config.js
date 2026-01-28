/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media", // 🚫 dark mode completely disabled
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)',
        hover: '0 12px 40px rgba(0,0,0,0.10)',
      },
      colors: {
        primary: { DEFAULT: '#111827' },
      }
    },
  },
  plugins: [],
}
