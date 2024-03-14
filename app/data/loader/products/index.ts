import { ProductEntity } from '../../db-types';
import { getColors } from '../color';
import { getMakes } from '../make';

const enum ProductType {
  Yacht = '1',
  Car = '2',
  Motorbike = '3',
  Bicycle = '4',
}

export const getCategoryProducts = async (
  categoryId: string,
  filters?: {
    color?: string | string[];
    make?: string | string[];
  }
): Promise<ProductEntity[] | null> => {
  let queryString = '';

  if (filters?.color || filters?.make) {
    const searchParams: string[] = [];

    if (filters?.color) {
      if (Array.isArray(filters.color)) {
        for (const id of filters.color) {
          searchParams.push(`color=${id}`);
        }
      } else {
        searchParams.push(`color=${filters.color}`);
      }
    }

    if (filters?.make) {
      if (Array.isArray(filters.make)) {
        for (const id of filters.make) {
          searchParams.push(`make=${id}`);
        }
      } else {
        searchParams.push(`make=${filters.make}`);
      }
    }

    queryString = searchParams.join('&');
  }

  const res = await fetch(
    `${process.env.API_BASE_PATH}/product?categoryId=${categoryId}${
      queryString ? `&${queryString}` : ''
    }`
  );

  if (!res.ok) return null;

  const products = await res.json();

  switch (categoryId as ProductType) {
    case ProductType.Yacht:
      return getYachts(products);
    case ProductType.Car:
      return getCars(products);
    case ProductType.Motorbike:
      return getMotorbikes(products);
    case ProductType.Bicycle:
      return getBicycles(products);
    default:
      return products;
  }
};

const getYachts = async (products: ProductEntity[]) => {
  return products;
};

const getCars = async (products: ProductEntity[]) => {
  const makes = (await getMakes()) || [];
  const colors = (await getColors()) || [];

  const mappedProducts = products
    .map(({ id, name, price, categoryId, color, make, ...rest }) => ({
      id,
      categoryId,
      name,
      price,
      make: makes.find(({ id }) => id === make)?.name,
      color: colors.find(({ id }) => id === color)?.name,
      ...rest,
    }))
    .map(
      ({ id, name, price, categoryId, color, make, ...rest }) =>
        ({
          id,
          categoryId,
          name,
          price,
          color,
          make,
          details: Object.entries({ make, color, ...rest })
            .map(([key, value]) => (value ? `${key}:${value}` : ''))
            .filter((item) => item)
            .join(', '),
        } as ProductEntity)
    );

  return mappedProducts;
};

const getMotorbikes = async (products: ProductEntity[]) => {
  return products;
};

const getBicycles = async (products: ProductEntity[]) => {
  return products;
};
