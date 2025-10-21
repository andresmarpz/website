"use cache";

import type { Metadata } from "next";
import { Suspense } from "react";
import Post from "~/app/(navigable)/blog/post";
import { getAllPosts } from "~/lib/get-all-posts";
import { getPost } from "~/lib/get-post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map(({ metadata }) => ({
    slug: metadata.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  "use cache";
  const { slug } = await params;

  return <Post slug={slug} />;
}
