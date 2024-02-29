import PageWrapper from "@/app/_components/page-wrapper/PageWrapper";
import Link from "next/link";
import React from "react";
import { getGoodById, goods } from "@/app/products/_data/goods";

export const generateStaticParams = () => {
  return goods
    .filter((_, i) => i < 5)
    .map(({ id, categoryId }) => ({
      goodId: String(id),
      categoryId: String(categoryId),
    }));
};

const Good = async (props: {
  params: { categoryId: string; goodId: string };
}) => {
  const {
    params: { categoryId, goodId },
  } = props;

  const goodDetails = await getGoodById(goodId);

  if (!goodDetails) {
    return "No good details";
  }

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
