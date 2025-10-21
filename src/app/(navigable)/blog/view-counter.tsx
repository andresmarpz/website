import { cacheLife } from "next/cache";
import { getPostViews } from "~/lib/get-post-views";

interface Props {
  slug: string;
}

export default async function ViewCounter({ slug }: Props) {
  "use cache";

  cacheLife({ stale: 5, revalidate: 30, expire: 600 });

  const views = (await getPostViews(slug)) ?? 0;

  return (
    <span className="animation-fill-mode-both animate-slideFadeUp">
      {views} views
    </span>
  );
}
