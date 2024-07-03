import BlogItem from '@/components/blog/blog-item';
import { getPosts } from '@/lib/get-posts';

interface Props {
  length?: number;
}

export default async function BlogList({ length }: Props) {
  const posts = await getPosts();

  return (
    <ul className="m-auto flex flex-col gap-1">
      {posts.slice(0, length ?? posts.length).map((post) => (
        <BlogItem
          key={post._slug}
          title={post._title}
          date={post.publishDate!}
          slug={post._slug}
        />
      ))}
    </ul>
  );
}
