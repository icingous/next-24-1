import PageWrapper from "@/app/_components/page-wrapper/PageWrapper";
import Link from "next/link";

import { getGoodsByCategoryId, goods } from "../_data/goods";

async function Category(props: { params: { categoryId: string } }) {
  const {
    params: { categoryId },
  } = props;

  const goods = await getGoodsByCategoryId(categoryId);

  if (!goods) {
    return "No goods in the category";
  }

  return (
    <PageWrapper>
      <Link href="/products">To Categories</Link>
      <h1 className="mt-3 mb-3 text-2xl">{`Category ${categoryId}`}</h1>
      <div className="flex flex-col gap-2">
        {goods.length
          ? goods.map(({ id, title, categoryId }) => (
              <Link key={id} href={`${categoryId}/goods/${id}`}>
                {title}
              </Link>
            ))
          : "No items"}
      </div>
    </PageWrapper>
  );
}

export default Category;
