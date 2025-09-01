import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
