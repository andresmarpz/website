import fs from 'fs';
import path from 'path';

export function getPost(slug: string) {
  const postPath = path.join('_posts', `${slug}.mdx`);
  const exists = fs.existsSync(postPath);
  if (!exists) return null;

  return fs.readFileSync(postPath, 'utf-8');
}
