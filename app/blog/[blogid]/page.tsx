"use client";

import React from "react";
import Button from "./_components/Button";
import Wrapper from "./_components/Wrapper";

const BlogDetail = (props: { params: { blogId: string } }) => {
  const { params } = props;
  console.log(params);
  return (
    <Wrapper>
      <h1>{`BlogDetail ${params?.blogId}`}</h1>
      <Button />
    </Wrapper>
  );
};

export default BlogDetail;
