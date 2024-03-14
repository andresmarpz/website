import { basehub } from 'basehub';

export async function getPosts() {
  return basehub()
    .query({
      blog: {
        posts: {
          items: {
            _title: true,
            _slug: true,
            subtitle: true,
            publishDate: true,
            content: {
              json: {
                content: true
              }
            }
          }
        }
      }
    })
    .then((res) => res.blog.posts.items);
}
