import ViewTracker from '@/app/(navigable)/blog/view-tracker';
import { getPost } from '@/lib/get-post';
import { getPosts } from '@/lib/get-posts';
import { RichText } from 'basehub/react-rich-text';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post._slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return {
    title: post._title,
    description: post.subtitle
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  const date = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : 'Unpublished';

  return (
    <article className="text-neutral-400 prose text-[13px]">
      <h1 className="font-medium">{post._title}</h1>
      <time className="mb-10 block text-sm text-neutral-500">{date}</time>

      <RichText
        components={{
          p: ({ children }) => <p className="min-h-[1lh]">{children}</p>,
          a: ({ children, href }) => (
            <a href={href} className="text-orange-400 underline">
              {children}
            </a>
          )
        }}>
        {post.content?.json.content}
      </RichText>

      <ViewTracker slug={slug} />
    </article>
  );
}
