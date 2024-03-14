import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getCategoryProducts } from '@/app/data/loader/products';
import { Locale } from '@/i18n-config';
import { getProductCategoryById } from '@/app/data/loader/category';
import { CategoryEntity } from '@/app/data/db-types';
import { getColors } from '@/app/data/loader/color';
import { getMakes } from '@/app/data/loader/make';
import ProductFilter from '@/app/components/ProductFilter';

async function Category(props: {
  params: { lang: Locale; categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const {
    params: { lang, categoryId },
    searchParams,
  } = props;

  const { name } = (await getProductCategoryById(categoryId)) as CategoryEntity;
  const products = (await getCategoryProducts(categoryId, searchParams)) || [];
  const colors = (await getColors(categoryId)) || [];
  const makes = (await getMakes(categoryId)) || [];

  return (
    <section>
      <nav className='flex justify-between'>
        <Link
          href={`/${lang}/products`}
          className='border-none outline-none hover:underline'
        >
          To Categories
        </Link>
        <Link
          href={`/${lang}/products/${categoryId}/add`}
          className='border-none outline-none hover:underline'
        >
          Add product
        </Link>
      </nav>
      <h2 className='mt-3 mb-6 text-4xl text-center'>{`${name}`}</h2>
      <div className='flex gap-4'>
        <aside className='w-[17rem] pt-1 flex flex-col gap-2 border-e'>
          <ProductFilter makes={makes} colors={colors} />
        </aside>
        <Table className='grow'>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Details</TableHead>
              <TableHead className='w-[100px] text-right'>Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map(({ id, name, price, details, categoryId }) => (
              <TableRow key={id}>
                <TableCell className='font-medium'>
                  <Link
                    href={`${categoryId}/goods/${id}`}
                    className='hover:underline'
                  >
                    {name}
                  </Link>
                </TableCell>
                <TableCell>{details}</TableCell>
                <TableCell className='text-right'>{price.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default Category;
