import { Post } from '@/drizzle/schema';
import { getPostViews } from '@/lib/get-post-views';

type Props = {
  slug: Post['slug'];
};

export default async function PostViews({ slug }: Props) {
  const views = await getPostViews(slug);

  return <span>{views ?? 0}</span>;
}
