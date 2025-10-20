import z from "zod";

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  date: z.date(),
  description: z.string(),
});
export type Post = z.infer<typeof postSchema>;
