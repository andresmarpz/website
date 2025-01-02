import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';

export const incrementPostViews = async (slug: string) => {
  const result = await db
    .insert(posts)
    .values({
      slug
    })
    .onConflictDoUpdate({
      target: posts.slug,
      set: {
        views: sql`${posts.views} +1`
      }
    })
    .returning();
  if (result.length) return result[0].views;
  else return null;
};
