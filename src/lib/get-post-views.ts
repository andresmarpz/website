import { eq } from "drizzle-orm";
import { db } from "~/db";
import { posts } from "~/db/schema";

export const getPostViews = async (slug: string) => {
  const res = await db.query.posts.findFirst({
    where: eq(posts.slug, slug),
  });

  return res?.views ?? null;
};
