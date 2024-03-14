import { sql } from '@vercel/postgres';

export const getPostViews = async (slug: string) => {
  const result = await sql<{
    views: number;
  }>`
  SELECT views
  FROM Posts
  WHERE slug = ${slug}
`;
  return result.rows[0].views;
};
