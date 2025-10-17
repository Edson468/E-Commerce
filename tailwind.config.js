// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#10b981', // emerald-500
          600: '#059669', // emerald-600
        },
        neutral: {
          50: '#f8fafc',  // slate-50
          100: '#f1f5f9', // slate-100
          800: '#1e293b', // slate-800
          900: '#0f172a', // slate-900
        }
      },
    },
  },
  plugins: [],
}