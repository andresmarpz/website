import BlogList from "~/components/blog/blog-list";

export default async function Blog() {
  "use cache";
  return (
    <main>
      <h1 className="mb-4 text-lg">Blog</h1>
      <BlogList />
    </main>
  );
}
