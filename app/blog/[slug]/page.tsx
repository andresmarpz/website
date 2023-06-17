import ViewCounter from '@/app/blog/view-counter';
import ViewTracker from '@/app/blog/view-tracker';
import { getPost } from '@/lib/get-post';
import { getPosts } from '@/lib/get-posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

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

      <Suspense
        fallback={
          <div className="h-4 w-10 animate-pulse rounded bg-gray-700" />
        }>
        <ViewTracker slug={params.slug} />
      </Suspense>
    </article>
  );
}

export const dynamic = 'force-static';
