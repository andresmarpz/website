import BlogItem from '@/components/blog/blog-item';
import { getPosts } from '@/lib/get-posts';

interface Props {
  length?: number;
}

export default function BlogList({ length }: Props) {
  const posts = getPosts();
  return (
    <ul className="m-auto max-w-[675px]">
      {posts.slice(0, length ?? posts.length).map((post) => (
        <BlogItem post={post} />
      ))}
    </ul>
  );
}
