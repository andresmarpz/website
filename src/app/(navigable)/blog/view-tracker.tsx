import { incrementPostViews } from "~/lib/increment-post-views";

export default async function ViewTracker({ slug }: { slug: string }) {
  await incrementPostViews(slug);

  return null;
}
