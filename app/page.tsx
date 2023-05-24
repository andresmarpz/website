import PostViews from '@/components/post-views';
import { getPostMetadata } from '@/lib/get-post-metadata';
import { getPosts } from '@/lib/get-posts';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function IndexPage() {
  const posts = getPosts();

  return (
    <div>
      Posts:
      {posts.map((post) => {
        const metadata = getPostMetadata(post.slug);

        return (
          <Link href={`/blog/${post.slug}`}>
            {metadata?.title} <Suspense fallback={'Loading..'}>
              {/* @ts-expect-error RSC */}
              <PostViews slug={post.slug} />
            </Suspense>
          </Link>
        );
      })}
    </div>
  );
}
