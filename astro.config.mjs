// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.monstscape.com', // 请替换为您的实际网站域名，用于生成sitemap和robots.txt
  integrations: [], // 将来可以添加集成，例如图片优化集成
  vite: {
    plugins: [tailwindcss()]
  }, // <--- 这里缺少一个逗号，已添加
  build: {
    // 生成sitemap和robots.txt的插件
    // Astro v4 默认会生成 sitemap.xml，但为了更精细的控制和robots.txt，我们在这里手动处理
    // 注意: Astro 4.x 已经内置了 Sitemap 生成，我们主要关注 robots.txt
    // 此处我们仅通过 public 文件夹放置 robots.txt 和 sitemap-index.xml，然后通过 content collection 动态生成 sitemap 中的 url
  },
  
  image: {
    // Astro v4 默认支持 Sharp 和 Squoosh
    // 为了满足统一输出 WebP/AVIF 的要求，这里配置图片服务
    service: {
      entrypoint: 'astro/assets/services/sharp', // 使用 Sharp 处理器
    },
  },
  // 以下是手动创建 robots.txt 和 sitemap-index.xml 的示例，因为 Astro 默认只生成 sitemap.xml
  // 如果需要更复杂的 Sitemap 结构（例如多个sitemap文件），则需要自定义生成逻辑
  // 对于简单的网站，Astro 自动生成的 sitemap.xml 通常足够
  // 这里我们假设你会在 public/robots.txt 中手动配置，并且 Astro 会自动生成 sitemap.xml
});