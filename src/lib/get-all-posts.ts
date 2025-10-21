import { Effect, Layer } from "effect";
import { PostService, PostServiceImpl } from "~/services/post.service";

export const getAllPosts = () =>
  Effect.runPromise(
    Effect.gen(function* () {
      const postService = yield* PostService;

      const allPosts = yield* postService.getAllPosts();
      return yield* Effect.succeed(allPosts);
    }).pipe(Effect.provide(Layer.succeed(PostService, new PostServiceImpl()))),
  );
