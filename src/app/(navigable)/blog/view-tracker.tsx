import { headers } from "next/headers";
import { incrementPostViews } from "~/lib/increment-post-views";

export default async function ViewTracker({ slug }: { slug: string }) {
  await headers();

  await incrementPostViews(slug);

  return null;
}
