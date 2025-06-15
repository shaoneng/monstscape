// @ts-check
import { defineConfig } from 'astro/config';
<<<<<<< HEAD

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
=======
import tailwind from "@astrojs/tailwind"; // 由第一步命令自动添加
import image from "@astrojs/image";     // 由第二步命令自动添加

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // 自动添加
    image()     // 自动添加
  ]
>>>>>>> 96d7c3ebcdae202ba01a55fbb22e4123072531b6
});