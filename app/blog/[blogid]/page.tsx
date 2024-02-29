import React from "react";
import Button from "./_components/Button";
import Wrapper from "./_components/Wrapper";
import { blogPosts, getBlogPostById } from "../_data/blogPosts";

export const generateStaticParams = () => {
  return blogPosts.map(({ id }) => ({ blogId: String(id) }));
};

const BlogDetail = async (props: { params: { blogId: string } }) => {
  const { params } = props;

  const blogPost = await getBlogPostById(params?.blogId);

  if (!blogPost) {
    return "Page not found";
  }

  return (
    <Wrapper>
      <h1>
        {`BlogDetail ${params?.blogId}`}
        {blogPost.title}
      </h1>
      <Button />
    </Wrapper>
  );
};

export default BlogDetail;
