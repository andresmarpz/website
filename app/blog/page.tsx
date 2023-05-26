import ViewCounter from '@/app/blog/view-counter';
import { getPostMetadata } from '@/lib/get-post-metadata';
import { getPosts } from '@/lib/get-posts';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Blog() {
  const posts = getPosts();

  return (
    <main>
      <ul>
        {posts.map((post) => {
          const metadata = getPostMetadata(post.slug);

          return (
            <li className="py-2" key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex items-center justify-between text-white">
                <h3 className="font-medium">{metadata?.title}</h3>

                <span className="ml-1 flex items-center gap-1 text-gray-400">
                  <Suspense
                    fallback={
                      <div className="h-4 w-10 animate-pulse rounded bg-gray-700" />
                    }>
                    {/* @ts-expect-error RSC */}
                    <ViewCounter slug={post.slug} trackViews={false} />
                  </Suspense>
                  ·
                  <span>
                    {metadata?.date &&
                      new Date(metadata.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                  </span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
