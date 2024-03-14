import { ColorEntity } from '@/app/data/db-types';
import { getCategoryProducts } from '../products';

export async function getColors(
  categoryId?: string
): Promise<ColorEntity[] | null> {
  if (!categoryId) {
    const res = await fetch(`${process.env.API_BASE_PATH}/color`);

    if (!res.ok) return null;

    return res.json();
  }

  const products = await getCategoryProducts(categoryId);

  if (products === null) return null;

  const index: Set<string> = new Set();

  for (const p of products) {
    if (p.color) index.add(p.color);
  }

  if (index.size) {
    let queryString = [...index.values()]
      .map((color) => `color=${color}`)
      .join('&');
    const res = await fetch(
      `${process.env.API_BASE_PATH}/color?${queryString}`
    );

    return res.json();
  }

  return [];
}

export async function getColorById(
  id?: string | null
): Promise<ColorEntity | null> {
  if (!id) {
    return null;
  }
  const res = await fetch(`${process.env.API_BASE_PATH}/color/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}

