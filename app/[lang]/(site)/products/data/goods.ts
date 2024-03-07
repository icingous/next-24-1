import { Good } from "./type";

export const goods: Good[] = [
  { id: "1", title: "Good item 1", price: 25, categoryId: "1" },
  { id: "2", title: "Good item 2", price: 52, categoryId: "1" },
  { id: "3", title: "Good item 3", price: 256, categoryId: "1" },
  { id: "4", title: "Good item 4", price: 15, categoryId: "1" },
  { id: "5", title: "Good item 5", price: 2566, categoryId: "2" },
  { id: "6", title: "Good item 6", price: 1125, categoryId: "2" },
  { id: "7", title: "Good item 7", price: 925, categoryId: "2" },
  { id: "8", title: "Good item 8", price: 721, categoryId: "2" },
  { id: "9", title: "Good item 9", price: 399, categoryId: "3" },
  { id: "10", title: "Good item 10", price: 445, categoryId: "3" },
  { id: "11", title: "Good item 11", price: 517, categoryId: "3" },
  { id: "12", title: "Good item 12", price: 875, categoryId: "3" },
];

export const getGoodById = (id: string) =>
  new Promise<Good | undefined>((resolve) =>
    setTimeout(() => resolve(goods.find((item) => item.id === id)), 2000)
  );

export const getGoodsByCategoryId = (id: string) =>
  new Promise<Good[]>((resolve) =>
    setTimeout(
      () => resolve(goods.filter((item) => item.categoryId === id)),
      2000
    )
  );
