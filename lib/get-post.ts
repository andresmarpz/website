import { getPosts } from '@/lib/get-posts';
import { QueryGenqlSelection, basehub } from 'basehub';

export async function getPost(slug: string) {
  const { blog } = await basehub().query({
    blog: {
      posts: {
        __args: { first: 1, filter: { _sys_slug: { eq: slug } } },
        items: {
          _id: true,
          _title: true,
          publishDate: true,
          content: { json: { content: true } },
          coverImage: { url: true },
          subtitle: true
        }
      }
    }
  });

  const [post] = blog.posts.items;

  return post;
}
