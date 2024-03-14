import { sql } from '@vercel/postgres';

export const incrementPostViews = async (slug: string) => {
  const result = await sql<{
    id: number;
    slug: string;
    views: number;
  }>`
        INSERT INTO Posts (slug, views)
        VALUES (${slug}, 1)
        ON CONFLICT (slug) DO UPDATE
        SET views = Posts.views + 1
        RETURNING *
    `;
  return result.rows[0].views;
};
