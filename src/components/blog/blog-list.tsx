import BlogItem from "~/components/blog/blog-item";
import { getAllPosts } from "~/lib/get-all-posts";

interface Props {
  length?: number;
}

export default async function BlogList({ length }: Props) {
  const posts = await getAllPosts();

  return (
    <ul className="m-auto flex flex-col gap-1">
      {posts.slice(0, length ?? posts.length).map((post) => (
        <BlogItem
          key={post.metadata.slug}
          title={post.metadata.title}
          date={post.metadata.date.toLocaleDateString()}
          slug={post.metadata.slug}
        />
      ))}
    </ul>
  );
}
