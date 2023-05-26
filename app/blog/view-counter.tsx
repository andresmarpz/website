import { getPostViews } from '@/lib/get-post-views';

interface Props {
  slug: string;
  trackViews?: boolean;
}

export default async function ViewCounter({ slug, trackViews = false }: Props) {
  const views = await getPostViews(slug);

  if (trackViews) fetch(`/api/views/${slug}`, { method: 'POST' });

  return <main>{views} views</main>;
}
