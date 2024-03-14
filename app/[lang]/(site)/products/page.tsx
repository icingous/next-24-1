import Link from 'next/link';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Locale } from '@/i18n-config';
import { getProductCategories } from '@/app/data/loader/category';

async function Catalog({ params: { lang } }: { params: { lang: Locale } }) {
  const categories = (await getProductCategories()) || [];

  return (
    <section>
      <div className='flex justify-end'>
        <Link
          href={`/${lang}/products/add`}
          className='border-none outline-none hover:underline'
        >
          Add category
        </Link>
      </div>
      <h1 className='mt-3 mb-6 text-4xl text-center'>Categories</h1>
      <div className='flex flex-wrap gap-4 justify-center'>
        {categories.map(({ id, name, alias, image }, i) => {
          return (
            <Link key={alias} href={`/${lang}/products/${id}`}>
              <Card
                key={alias}
                className='w-96 h-96 flex flex-col overflow-hidden'
              >
                <CardHeader>
                  <CardTitle>{name}</CardTitle>
                  {/* <CardDescription></CardDescription> */}
                </CardHeader>
                <CardContent className='grow relative'>
                  <div className='absolute inset-0'>
                    <Image
                      src={image}
                      alt={name}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </CardContent>
                {/* <CardFooter></CardFooter> */}
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Catalog;
