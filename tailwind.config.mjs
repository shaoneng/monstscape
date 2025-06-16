// tailwind.config.mjs

import { color } from 'html2canvas/dist/types/css/types/color';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1e40af',
        secondary: '#9333ea',
      },
    },
  },
  plugins: [],
}
