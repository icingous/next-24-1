"use client";

import PageWrapper from "@/app/_components/page-wrapper/PageWrapper";
import Link from "next/link";

function Category(props: { params: { categoryId: string } }) {
  const {
    params: { categoryId },
  } = props;

  return (
    <PageWrapper>
      <Link href="/products">To Categories</Link>
      <h1 className="mt-3 mb-3 text-2xl">{`Category ${categoryId}`}</h1>
      <div className="flex flex-col gap-2">
        <Link href={`${categoryId}/goods/1`}>Good 1</Link>
        <Link href={`${categoryId}/goods/2`}>Good 2</Link>
        <Link href={`${categoryId}/goods/3`}>Good 3</Link>
      </div>
    </PageWrapper>
  );
}

export default Category;
