import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
        primary_cta: z.string(),
        secondary_cta: z.string(),
      })
      .optional(),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/events' }),
  schema: z
    .object({
      name: z.string(),
      description: z.string().optional(),
      date: z.coerce.date().optional(),
      startTime: z.string().optional(),
      endTime: z.string().optional(),
      location: z.string(),
      type: z.enum(['concert', 'bandstand', 'other']),
      tags: z.array(z.string()).optional(),
      image: z.string().optional(),
    })
    .refine(
      (data) => {
        if (data.endTime && !data.startTime) {
          return false;
        }
        return true;
      },
      {
        message: 'End time cannot be specified without a start time',
        path: ['endTime'],
      }
    ),
});

export const collections = {
  pages: pages,
  events: events,
};
