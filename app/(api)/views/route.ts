import { getPost } from '@/lib/get-post';
import { getPostViews } from '@/lib/get-post-views';
import { incrementPostViews } from '@/lib/increment-post-views';

export async function GET(req: Request) {
  // get search params from request
  const params = new URL(req.url).searchParams;
  // get slug from params
  const slug = params.get('slug');

  // if slug is not defined, return 400
  if (!slug) return new Response('Slug is required', { status: 400 });
  if (!getPost(slug)) return new Response('Post not found', { status: 404 });

  const views = (await getPostViews(slug)) ?? 1;
  if (!views) await incrementPostViews(slug, views);

  // return views
  return new Response(JSON.stringify({ views }));
}

export async function POST(req: Request) {
  const { slug } = await req.json();

  // if slug is not defined, return 400
  if (!slug) return new Response('Slug is required', { status: 400 });
  if (!getPost(slug)) return new Response('Post not found', { status: 404 });

  const views = await getPostViews(slug);
  await incrementPostViews(slug, views);

  return new Response(undefined, {
    status: 200
  });
}
