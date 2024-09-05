import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const introCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    author: z.enum(['Monica DeFosse', 'Jesse Slomowitz']),
  }),
});


export const collections = {
  'intro': introCollection,
};