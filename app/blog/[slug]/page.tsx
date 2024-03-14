import ViewTracker from '@/app/blog/view-tracker';
import { getPost } from '@/lib/get-post';
import { getPosts } from '@/lib/get-posts';
import { RichText } from 'basehub/react-rich-text';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post._slug
  }));
}

export async function generateMetadata({ params }: Params) {
  const post = await getPost(params.slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post._title,
    description: post.subtitle
  };
}

export default async function Post({ params }: Params) {
  const post = await getPost(params.slug);

  if (!post) notFound();

  const date = new Date(post.publishDate!).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <article>
      <h1 className="font-medium">{post._title}</h1>
      <time className="mb-10 block text-sm text-gray-400">{date}</time>

      <RichText
        components={{
          p: ({ children }) => <p className="text-gray-100">{children}</p>
        }}>
        {post.content?.json.content}
      </RichText>

      <ViewTracker slug={params.slug} />
    </article>
  );
}
