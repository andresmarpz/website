import fs from 'fs';
import path from 'path';

interface Post {
  slug: string;
}

export function getPosts(): Post[] {
  const files = fs
    .readdirSync(path.join(process.cwd(), '_posts'))
    .filter((filename) => filename.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '');
    return {
      slug
    };
  });

  return posts;
}
