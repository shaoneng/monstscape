// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const wallpapersCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    series: z.string(),
    thumbImg: image(),
    fullImg: image(),
    isDynamic: z.boolean().default(false),
  }),
});

export const collections = {
  'wallpapers': wallpapersCollection,
};