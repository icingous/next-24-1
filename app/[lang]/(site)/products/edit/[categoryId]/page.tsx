import React from 'react';
import AddEditProductCategoryForm from '@/app/components/AddEditProductCategoryForm';
import { getProductCategoryById } from '@/app/data/loader/category';

const page = async ({ params }: { params: { categoryId: string } }) => {
  const category =
    (await getProductCategoryById(params.categoryId)) || undefined;

  return <AddEditProductCategoryForm category={category} />;
};

export default page;
