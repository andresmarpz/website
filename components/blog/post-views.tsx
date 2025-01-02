import { getPostViews } from '@/lib/get-post-views';

interface Props {
  slug: string;
}

export default async function PostViews({ slug }: Props) {
  const views = await getPostViews(slug);

  return <span>{views ?? 0}</span>;
}
