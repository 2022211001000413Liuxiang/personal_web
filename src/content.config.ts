import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techs: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    date: z.date(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog, projects };
