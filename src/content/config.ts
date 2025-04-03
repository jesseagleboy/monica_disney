import { glob } from 'astro/loaders'
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
    author: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    excerpt: z.string().max(250).optional(),
	}),
});

const offersCollection = defineCollection({
	loader: glob({ base: "./src/content/offers", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
	}),
});


export const collections = {
  'blog': blogCollection,
  'offers': offersCollection,
};