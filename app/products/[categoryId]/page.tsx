import PageWrapper from "@/app/_components/page-wrapper/PageWrapper";
import Link from "next/link";

import { goods } from "../_data/goods";

function Category(props: { params: { categoryId: string } }) {
  const {
    params: { categoryId },
  } = props;

  const categoryGoods = goods.filter((item) => item.categoryId === categoryId);

  return (
    <PageWrapper>
      <Link href="/products">To Categories</Link>
      <h1 className="mt-3 mb-3 text-2xl">{`Category ${categoryId}`}</h1>
      <div className="flex flex-col gap-2">
        {categoryGoods.length
          ? categoryGoods.map(({ id, title, categoryId }) => (
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
