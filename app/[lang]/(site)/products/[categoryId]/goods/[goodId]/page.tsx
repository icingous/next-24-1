// import PageWrapper from "@/app/components/page-wrapper/PageWrapper";
import Link from "next/link";
import React from "react";
// import { getGoodById, goods } from "../../../data/goods";

// export const generateStaticParams = () => {
//   return goods
//     .filter((_, i) => i < 5)
//     .map(({ id, categoryId }) => ({
//       goodId: String(id),
//       categoryId: String(categoryId),
//     }));
// };

const Good = async (props: {
  params: { lang: string; categoryId: string; goodId: string };
}) => {
  const {
    params: { lang, categoryId, goodId },
  } = props;

  // const goodDetails = await getGoodById(goodId);

  // if (!goodDetails) {
  //   return "No good details";
  // }

  return (
    <>
      <Link
        href={`/${lang}/products/${categoryId}`}
        className="hover:underline"
      >
        То category
      </Link>
      <h1 className="mt-3 mb-3 text-2xl">{`Good ${goodId}`}</h1>
      <p>
        <i>{`here will go the product's features`}</i>
      </p>
    </>
  );
};

export default Good;
