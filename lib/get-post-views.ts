import { db } from '@/drizzle/drizzle';
import { posts } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';

export const getPostViews = async (slug: string) =>
  await db
    .select()
    .from(posts)
    .where(eq(posts.slug, slug))
    .then((res) => res[0]?.views);
