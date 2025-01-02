import { basehub } from 'basehub';

export async function getPosts() {
  return basehub()
    .query({
      blog: {
        posts: {
          items: {
            _id: true,
            _slug: true,
            _title: true,
            subtitle: true,
            publishDate: true
          }
        }
      }
    })
    .then((res) => res.blog.posts.items);
}
