import Link from "next/link";
import React from "react";
import PageWrapper from "../_components/page-wrapper/PageWrapper";
import { categories } from "./_data/categories";

function Catalog() {
  return (
    <PageWrapper>
      <h1 className="mt-3 mb-3 text-2xl">Categories</h1>
      <div className="flex flex-col gap-2">
        {categories.map(({ id, title }) => (
          <Link key={id} href={`/products/${id}`}>
            {title}
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Catalog;
