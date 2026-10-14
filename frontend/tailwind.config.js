/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#f7b733',
        'primary-dark': '#f59e0b',
        warm: '#fffaf0',
        dark: '#1f2937',
        muted: '#6b7280',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(17, 24, 39, 0.06)',
      },
    },
  },
  plugins: [],
};
