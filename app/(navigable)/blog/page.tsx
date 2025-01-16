import BlogList from '@/components/blog/blog-list';

export const revalidate = 60;

export default function Blog() {
  return (
    <main>
      <h1 className="mb-4 text-lg">Blog</h1>
      <BlogList />
    </main>
  );
}
