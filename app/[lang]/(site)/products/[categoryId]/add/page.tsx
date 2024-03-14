import { notFound } from 'next/navigation';
import AddEditProductForm from '@/app/components/AddEditProductForm';
import { getProductCategoryById } from '@/app/data/loader/category';
import React from 'react';
import { getColors } from '@/app/data';
import { getMakes } from '@/app/data/loader/make';

const page = async ({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) => {
  const category = await getProductCategoryById(categoryId);
  const colors = await getColors();
  const makes = (await getMakes(categoryId)) || [];

  return category ? (
    <AddEditProductForm category={category} colors={colors} makes={makes} />
  ) : (
    notFound()
  );
};

export default page;
