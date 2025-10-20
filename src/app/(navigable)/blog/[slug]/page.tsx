import { Effect, Layer } from "effect";
import fs from "fs";
import type { Metadata } from "next";
import path from "path";
import { PostService, PostServiceImpl } from "~/services/post.service";

const getPost = (slug: string) =>
  Effect.runPromise(
    Effect.gen(function* () {
      const posts = yield* PostService;

      const post = yield* posts.getPostBySlug(slug);

      return yield* Effect.succeed(post);
    }).pipe(Effect.provide(Layer.succeed(PostService, new PostServiceImpl()))),
  );

const getAllPosts = () =>
  Effect.runPromise(
    Effect.gen(function* () {
      const postService = yield* PostService;

      const allPosts = yield* postService.getAllPosts();
      return yield* Effect.succeed(allPosts);
    }).pipe(Effect.provide(Layer.succeed(PostService, new PostServiceImpl()))),
  );

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
  const { slug } = await params;
  const { Component, metadata } = await getPost(slug);

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
