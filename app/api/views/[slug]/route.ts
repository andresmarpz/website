import { getPost } from '@/lib/get-post';
import { getPostViews } from '@/lib/get-post-views';
import { incrementPostViews } from '@/lib/increment-post-views';

type Params = {
  params: {
    slug: string;
  };
};

export const GET = (req: Request, params: Params) => handler(req, params);
export const POST = (req: Request, params: Params) => handler(req, params);

async function handler(req: Request, { params: { slug } }: Params) {
  if (!slug) return new Response('Slug is required', { status: 400 });
  if (!getPost(slug)) return new Response('Post not found', { status: 404 });

  const views = (await getPostViews(slug)) ?? 0;

  // if it's a POST request we want to increase, otherwise it's a GET
  // so we only want to create the post without views
  const isPostRequest = req.method === 'POST';
  if (isPostRequest || !views)
    await incrementPostViews(slug, views + (isPostRequest ? 1 : 0));

  return new Response(JSON.stringify({ views }));
}
