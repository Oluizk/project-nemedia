/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:       '#0d0f14',
        surface:  '#161922',
        surface2: '#1e2330',
        border:   '#2a2f3d',
        accent:   '#e8c468',
        danger:   '#e06c5a',
        success:  '#6fcc8a',
        text:     '#e8eaf0',
        muted:    '#7a8096',
      },
      fontFamily: {
        sans:  ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}

