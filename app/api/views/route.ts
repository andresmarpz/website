import { getPost } from '@/lib/get-post';
import { getPostViews } from '@/lib/get-post-views';
import { incrementPostViews } from '@/lib/increment-post-views';

export const runtime = 'edge';
export const preferredRegion = 'gru1';

export const GET = async (req: Request) => {
  const { slug } = await req.json();

  if (!slug) return new Response('Slug is required', { status: 400 });

  const views = await getPostViews(slug);
  if (!views) return new Response('Post not found', { status: 404 });

  return new Response(JSON.stringify({ views }));
};

export const POST = async (req: Request) => {
  const { slug } = await req.json();

  if (!slug) return new Response('Slug is required', { status: 400 });

  if (!(await getPost(slug)))
    return new Response('Post not found', { status: 404 });

  const views = await incrementPostViews(slug);

  return new Response(JSON.stringify({ views }));
};
