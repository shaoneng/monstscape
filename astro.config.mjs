// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind"; // 由第一步命令自动添加
import image from "@astrojs/image";     // 由第二步命令自动添加

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), // 自动添加
    image()     // 自动添加
  ]
});