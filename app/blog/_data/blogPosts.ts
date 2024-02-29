import { BlogPost } from "./type";

export const blogPosts: BlogPost[] = [
  { id: "1", title: "Blog post 1" },
  { id: "2", title: "Blog post 2" },
  { id: "3", title: "Blog post 3" },
  { id: "4", title: "Blog post 4" },
];

export const getBlogPostById = (id: string) =>
  new Promise<BlogPost | undefined>((resolve) =>
    setTimeout(() => resolve(blogPosts.find((item) => item.id === id)), 2000)
  );
