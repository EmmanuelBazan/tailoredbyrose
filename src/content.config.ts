import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
	schema: ({ image }) =>
		z.object({
			order: z.number(),
			name: z.string(),
			context: z.string(),
			brand: z.string(),
			piece: z.string(),
			alterations: z.string(),
			tags: z.array(z.string()),
			images: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						credit: z.string(),
					}),
				)
				.min(1),
		}),
});

export const collections = { work };
