import { getPosts } from '@/lib/get-posts';
import { QueryGenqlSelection, basehub } from 'basehub';

export async function getPost(slug: string) {
  const res = await basehub().query({
    blog: {
      posts: {
        items: {
          _slug: true,
          _title: true,
          subtitle: true,
          content: {
            readingTime: true,
            html: true,
            markdown: true,
            json: {
              content: true,
              toc: true
            }
          },
          coverImage: { url: true },
          meta: {
            title: true,
            description: true,
            ogImage: {
              url: true
            }
          },
          publishDate: true
        }
      }
    }
  });

  const [post] = res.blog.posts.items;

  return post;
}
