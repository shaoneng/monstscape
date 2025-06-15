// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const wallpapersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    series: z.string(),
    thumbImg: z.string(),
    fullImg: z.string(),
    isDynamic: z.boolean().default(false),
  }),
});

export const collections = {
  'wallpapers': wallpapersCollection,
};