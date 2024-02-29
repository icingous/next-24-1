import Link from "next/link";
import { blogPosts } from "./_data/blogPosts";

const Blog = () => {
  return (
    <div>
      <h1 className="mt-3 mb-3 text-2xl">Blog Posts</h1>
      <div className="flex flex-col gap-2">
        {blogPosts.map(({ id }) => (
          <Link key={id} href={`/blog/${id}`}>{`BlogPost ${id}`}</Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
