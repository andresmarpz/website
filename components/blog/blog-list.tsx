import BlogItem from '@/components/blog/blog-item';
import { getPostMetadata } from '@/lib/get-post-metadata';
import { getPosts } from '@/lib/get-posts';

interface Props {
  length?: number;
}

export default function BlogList({ length }: Props) {
  const posts = getPosts();

  return (
    <ul className="m-auto flex flex-col gap-1">
      {posts.slice(0, length ?? posts.length).map((post) => {
        const metadata = getPostMetadata(post.slug);

        return metadata ? (
          <BlogItem key={post.slug} slug={post.slug} {...metadata} />
        ) : null;
      })}
    </ul>
  );
}
