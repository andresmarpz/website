import { Context, Effect } from "effect";
import fs from "fs/promises";
import { notFound } from "next/navigation";
import path from "path";
import { type Post, postSchema } from "~/types/post.type";

type PostErrors = Error;
export class PostService extends Context.Tag("PostService")<
  PostService,
  {
    getPostBySlug: (slug: string) => Effect.Effect<
      {
        Component: React.ComponentType;
        metadata: Post;
      },
      PostErrors
    >;
    getAllPosts: () => Effect.Effect<
      { Component: React.ComponentType; metadata: Post }[],
      PostErrors
    >;
  }
>() {}
type IPostService = Context.Tag.Service<PostService>;

export class PostServiceImpl implements IPostService {
  _getPostModuleFromPath = (path: string) =>
    Effect.gen(function* () {
      return yield* Effect.tryPromise({
        try: () =>
          import(`~/app/blog/_posts/${path}.mdx`)
            .then((module) => [
              module.default as React.ComponentType<unknown>,
              module.metadata,
            ])
            .catch(() => notFound())
            .then(([Post, metadata]) => {
              const { success, data, error } = postSchema.safeParse(metadata);
              if (!success) {
                console.error(error);
                return notFound();
              }
              return {
                Component: Post as React.ComponentType<unknown>,
                metadata: data,
              };
            }),
        catch: (err) => new Error(String(err)),
      });
    });

  _getPostsFiles = Effect.gen(function* () {
    const relativePathFromRoot = path.join("app", "blog", "_posts");
    const postsDir = path.join(process.cwd(), "src", relativePathFromRoot);
    const files = yield* Effect.tryPromise(() =>
      fs.readdir(postsDir, { withFileTypes: true }),
    );

    const filePaths = files
      .filter((file) => file.isFile() && file.name.includes(".mdx"))
      .map((dirent) => dirent.name.slice(0, -4));

    return yield* Effect.succeed(filePaths);
  });

  getPostBySlug = (slug: string) => {
    const that = this;
    return Effect.gen(function* () {
      const filePaths = yield* that._getPostsFiles;
      const filtered = filePaths.filter((path) => path.includes(slug));

      const posts = yield* Effect.allSuccesses(
        filtered.map(that._getPostModuleFromPath),
        { concurrency: "unbounded" },
      );

      const post = posts.pop();

      if (!post) {
        return yield* Effect.fail(new Error(`No post found for slug: ${slug}`));
      }

      return yield* Effect.succeed(post);
    });
  };

  getAllPosts = () => {
    const that = this;
    return Effect.gen(function* () {
      const filePaths = yield* that._getPostsFiles;
      const posts = yield* Effect.allSuccesses(
        filePaths.map(that._getPostModuleFromPath),
        {
          concurrency: "unbounded",
        },
      );
      return yield* Effect.succeed(posts);
    });
  };
}
