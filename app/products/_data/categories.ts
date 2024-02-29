import { Category } from "./type";

export const categories: Category[] = [
  { id: "1", title: "Category 1" },
  { id: "2", title: "Category 2" },
  { id: "3", title: "Category 3" },
  { id: "4", title: "Category 4" },
];

export const getCategoryById = (id: string) =>
  new Promise<Category | undefined>((resolve) =>
    setTimeout(() => resolve(categories.find((item) => item.id === id)), 2000)
  );
