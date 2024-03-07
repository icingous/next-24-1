import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import PageWrapper from "../../../components/page-wrapper/PageWrapper";
import { categories } from "./data/categories";
import { Locale } from "@/i18n-config";

function Catalog({ params: { lang } }: { params: { lang: Locale } }) {
  return (
    <PageWrapper>
      <h1 className="mt-3 mb-6 text-4xl text-center">Categories</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.map(({ id, title }) => (
          <Link key={id} href={`/${lang}/products/${id}`}>
            <Card key={id} className="w-96 h-96 flex flex-col">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                {/* <CardDescription></CardDescription> */}
              </CardHeader>
              <CardContent className="grow"></CardContent>
              {/* <CardFooter></CardFooter> */}
            </Card>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Catalog;
