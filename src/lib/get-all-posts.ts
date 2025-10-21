import { Effect, Layer } from "effect";
import { cacheLife } from "next/cache";
import { PostService, PostServiceImpl } from "~/services/post.service";

export async function getAllPosts() {
  "use cache";

  cacheLife({ stale: 60, revalidate: 60, expire: 600 });

  const res = await Effect.runPromise(
    Effect.gen(function* () {
      const postService = yield* PostService;

      const allPosts = yield* postService.getAllPosts();
      return yield* Effect.succeed(allPosts);
    }).pipe(Effect.provide(Layer.succeed(PostService, new PostServiceImpl()))),
  );

  return res.map((res) => ({ metadata: res.metadata }));
}
