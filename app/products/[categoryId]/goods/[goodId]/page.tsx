import PageWrapper from "@/app/_components/page-wrapper/PageWrapper";
import Link from "next/link";
import React from "react";

const Good = (props: { params: { categoryId: string; goodId: string } }) => {
  const {
    params: { categoryId, goodId },
  } = props;

  return (
    <PageWrapper>
      <Link href={`/products/category${categoryId}`}>То category</Link>
      <h1 className="mt-3 mb-3 text-2xl">{`Good ${goodId}`}</h1>
      <p>
        <i>{`here will go the product's features`}</i>
      </p>
    </PageWrapper>
  );
};

export default Good;
