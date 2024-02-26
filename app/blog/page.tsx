import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h1 className="mt-3 mb-3 text-2xl">Blog Posts</h1>
      <div className="flex flex-col gap-2">
        <Link href="/blog/1">Post 1</Link>
        <Link href="/blog/2">Post 2</Link>
        <Link href="/blog/3">Post 3</Link>
      </div>
    </div>
  );
};

export default Blog;
