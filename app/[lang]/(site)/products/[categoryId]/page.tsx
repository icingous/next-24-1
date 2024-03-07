import PageWrapper from "@/app/components/page-wrapper/PageWrapper";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGoodsByCategoryId } from "../data/goods";
import { Locale } from "@/i18n-config";

async function Category(props: {
  params: { lang: Locale; categoryId: string };
}) {
  const {
    params: { lang, categoryId },
  } = props;

  const goods = await getGoodsByCategoryId(categoryId);

  if (!goods) {
    return "No goods in the category";
  }

  return (
    <PageWrapper>
      <Link href={`/${lang}/products`}>To Categories</Link>
      <h1 className="mt-3 mb-6 text-4xl text-center">{`Category ${categoryId}`}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="w-[100px] text-right">Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {goods.map(({ id, title, price, categoryId }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">
                <Link href={`${categoryId}/goods/${id}`}>{title}</Link>
              </TableCell>
              <TableCell className="text-right">{price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageWrapper>
  );
}

export default Category;
