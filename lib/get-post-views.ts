import { db } from '@/db';
import { posts } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const getPostViews = async (slug: string) => {
  const results = await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .execute();
  if (results.length) return results[0].views;
  else return null;
};
