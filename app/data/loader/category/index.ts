import { type CategoryEntity } from "@/app/data/db-types";

export const getProductCategories = async (): Promise<
  CategoryEntity[] | null
> => {
  const res = await fetch(`${process.env.API_BASE_PATH}/category`);

  if (!res.ok) return null;

  return res.json();
};

export const getProductCategoryById = async (
  categoryId: string
): Promise<CategoryEntity | null> => {
  const res = await fetch(
    `${process.env.API_BASE_PATH}/category/${categoryId}`
  );

  if (!res.ok) return null;

  return res.json();
};
