import {defineCollection, z} from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: ({}) =>
        // using zod to define type-safe frontmatter of our mdx files
        // astro will generate types definitions for our project so we can use them in templates
        // also it will check every newly created frontmatter in the content/blog directory
        z.object({
            title: z.string(),
            gunType: z.enum(["PCC", "Mini Rifle", "Pistola"]),
            tags: z.array(z.string()),
            date: z.coerce.date(),
            location: z.string(),
            level: z.string().nullable().default("Nivel no especificado"),
            locationURL: z.string().nullable(),
            numStages: z.number().default(6),
            telephoneNumber: z.number().nullable(),
            email: z.string().nullable(),
            notes: z.string().nullable(),
        }),
});

// This key should match your collection directory name in "src/content"
export const collections = {
    shootings: postsCollection,
};
