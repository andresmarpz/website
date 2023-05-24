import { db } from '@/drizzle/drizzle';
import { Post, posts } from '@/drizzle/schema';

export const incrementPostViews = async (
  slug: Post['slug'],
  views: Post['views']
) =>
  await db
    .insert(posts)
    .values({
      slug,
      views
    })
    .onConflictDoUpdate({
      target: posts.slug,
      set: {
        views
      }
    });
