import ViewCounter from '@/app/blog/view-counter';
import { getPostMetadata } from '@/lib/get-post-metadata';
import Link from 'next/link';
import { Suspense } from 'react';

export default function BlogItem({ post }: { post: { slug: string } }) {
  const metadata = getPostMetadata(post.slug);

  return (
    <li
      className="py-2 text-gray-500 transition-colors hover:text-white [&_span]:text-gray-700 hover:[&_span]:text-gray-500"
      key={post.slug}>
      <Link
        href={`/blog/${post.slug}`}
        className="flex items-center justify-between">
        <h3 className="font-medium">{metadata?.title}</h3>

        <span className="ml-1 flex items-center gap-1">
          <Suspense
            fallback={
              <div className="h-4 w-10 animate-pulse rounded bg-gray-700" />
            }>
            <ViewCounter slug={post.slug} />
          </Suspense>
          •
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
}
