import ViewTracker from '@/app/blog/view-tracker';
import { getPost } from '@/lib/get-post';
import { getPostMetadata } from '@/lib/get-post-metadata';
import { getPosts } from '@/lib/get-posts';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getPosts();

  return posts;
}

export function generateMetadata({ params }: Params) {
  const metadata = getPostMetadata(params.slug);
  if (!metadata) {
    return notFound();
  }

  return {
    title: metadata.title,
    description: metadata.subtitle
  };
}

export default async function Post({ params }: Params) {
  const post = getPost(params.slug);

  if (!post) notFound();

  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
  }>({
    source: post,
    options: { parseFrontmatter: true }
  });

  const formattedDate = new Date(frontmatter.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article>
      <h1 className="text-lg text-white [font-style:_italic]">
        {frontmatter.title}
      </h1>
      <h2 className="mb-8 text-sm text-gray-500">{formattedDate}</h2>
      <main className="text-gray-300">{content}</main>

      <Suspense
        fallback={
          <div className="h-4 w-10 animate-pulse rounded bg-gray-700" />
        }></Suspense>

      <ViewTracker slug={params.slug} />
    </article>
  );
}
