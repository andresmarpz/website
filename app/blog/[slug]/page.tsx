import { getPost } from '@/lib/get-post';
import { getPosts } from '@/lib/get-posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getPosts();

  return posts;
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);

  if (!post) notFound();

  const { content, frontmatter } = await compileMDX<{ title: string }>({
    source: post,
    options: { parseFrontmatter: true }
  });

  return (
    <article>
      <h1>{frontmatter.title}</h1>
      <div>{content}</div>
    </article>
  );
}

export const dynamic = 'force-static';
export const revalidate = false;
