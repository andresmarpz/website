import { getPost } from "~/lib/get-post";

export default async function Post({ slug }: { slug: string }) {
  "use cache";
  const { metadata, Component } = await getPost(slug);

  const date = metadata.date
    ? new Date(metadata.date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Unpublished";

  return (
    <article className="text-neutral-400 prose text-[13px]">
      <h1 className="font-medium">{metadata.title}</h1>
      <time className="mb-10 block text-[12px] text-neutral-500">{date}</time>

      <Component />
    </article>
  );
}
