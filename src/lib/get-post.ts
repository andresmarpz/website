import { Effect, Layer } from "effect";
import { PostService, PostServiceImpl } from "~/services/post.service";

export const getPost = (slug: string) =>
  Effect.runPromise(
    Effect.gen(function* () {
      const posts = yield* PostService;

      const post = yield* posts.getPostBySlug(slug);

      return yield* Effect.succeed(post);
    }).pipe(Effect.provide(Layer.succeed(PostService, new PostServiceImpl()))),
  );
