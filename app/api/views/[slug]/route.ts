import { getPost } from '@/lib/get-post';
import { getPostViews } from '@/lib/get-post-views';
import { incrementPostViews } from '@/lib/increment-post-views';

type Params = {
  params: {
    slug: string;
  };
};

export const runtime = 'edge';
export const preferredRegion = 'gru1';

export const GET = async (req: Request, { params: { slug } }: Params) => {
  if (!slug) return new Response('Slug is required', { status: 400 });

  const views = await getPostViews(slug);
  if (!views) return new Response('Post not found', { status: 404 });

  return new Response(JSON.stringify({ views }));
};

export const POST = async (req: Request, { params: { slug } }: Params) => {
  if (!slug) return new Response('Slug is required', { status: 400 });
  if (!getPost(slug)) return new Response('Post not found', { status: 404 });

  const views = await incrementPostViews(slug);

  return new Response(JSON.stringify({ views }));
};
