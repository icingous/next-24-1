import { Good } from "./type";

export const goods: Good[] = [
  { id: "1", title: "Good item 1", categoryId: "1" },
  { id: "2", title: "Good item 2", categoryId: "1" },
  { id: "3", title: "Good item 3", categoryId: "1" },
  { id: "4", title: "Good item 4", categoryId: "1" },
  { id: "5", title: "Good item 5", categoryId: "2" },
  { id: "6", title: "Good item 6", categoryId: "2" },
  { id: "7", title: "Good item 7", categoryId: "2" },
  { id: "8", title: "Good item 8", categoryId: "2" },
  { id: "9", title: "Good item 9", categoryId: "3" },
  { id: "10", title: "Good item 10", categoryId: "3" },
  { id: "11", title: "Good item 11", categoryId: "3" },
  { id: "12", title: "Good item 12", categoryId: "3" },
];

export const getGoodById = (id: string) =>
  new Promise<Good | undefined>((resolve) =>
    setTimeout(() => resolve(goods.find((item) => item.id === id)), 2000)
  );
