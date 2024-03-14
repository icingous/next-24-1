import { Products, MakeEntity } from '@/app/data/db-types';
import { getCategoryProducts } from '../products';

export async function getMakeById(id: string): Promise<MakeEntity | null> {
  const res = await fetch(`${process.env.API_BASE_PATH}/make/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

export async function getMakes(
  categoryId?: string
): Promise<Products['make'] | null> {
  if (!categoryId) {
    const res = await fetch(`${process.env.API_BASE_PATH}/make`);

    return res.json();
  }

  const products = await getCategoryProducts(categoryId);

  if (products === null) return null;

  const index: Set<string> = new Set();

  for (const p of products) {
    index.add(p.make);
  }

  if (index.size) {
    let queryString = [...index.values()]
      .map((make) => `make=${make}`)
      .join('&');
    const res = await fetch(`${process.env.API_BASE_PATH}/make?${queryString}`);

    return res.json();
  }

  return [];
}

export async function getMakeByAlias(
  alias: string
): Promise<MakeEntity | null> {
  const res = await fetch(`${process.env.API_BASE_PATH}/make?alias=${alias}`);
  const make = await res.json();
  return make?.length ? make[0] : null;
}

