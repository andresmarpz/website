import { db } from '@/drizzle/drizzle';
import { InsertPost, posts } from '@/drizzle/schema';

export const incrementPostViews = async (
  slug: InsertPost['slug'],
  views: InsertPost['views']
) =>
  await db
    .insert(posts)
    .values({
      slug,
      views
    })
    .onDuplicateKeyUpdate({
      set: {
        views
      }
    });
