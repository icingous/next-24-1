import Link from "next/link";
import React from "react";
import PageWrapper from "../_components/page-wrapper/PageWrapper";

function Catalog() {
  return (
    <PageWrapper>
      <h1 className="mt-3 mb-3 text-2xl">Categories</h1>
      <div className="flex flex-col gap-2">
        <Link href="/products/1">Category 1</Link>
        <Link href="/products/2">Category 2</Link>
        <Link href="/products/3">Category 3</Link>
      </div>
    </PageWrapper>
  );
}

export default Catalog;
