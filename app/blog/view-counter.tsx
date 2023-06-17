import { getPostViews } from '@/lib/get-post-views';

interface Props {
  slug: string;
}

export default async function ViewCounter({ slug }: Props) {
  const views = (await getPostViews(slug)) ?? 0;

  return <span>{views} views</span>;
}
