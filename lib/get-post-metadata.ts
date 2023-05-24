import { getPost } from './get-post';
import matter from 'gray-matter';

interface PostMetadata {
  title: string;
  subtitle?: string;
  date: string;
}

export function getPostMetadata(slug: string) {
  const content = getPost(slug);
  if (!content) return null;

  const { data } = matter(content);
  return {
    title: data.title,
    subtitle: data.subtitle,
    date: data.date
  } as PostMetadata;
}
