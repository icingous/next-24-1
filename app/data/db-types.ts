export interface Products {
  category?: CategoryEntity[] | null;
  product?: ProductEntity[] | null;
  make?: MakeEntity[] | null;
  car?: CarEntity[] | null;
  color?: ColorEntity[] | null;
}
export interface CategoryEntity {
  id: number;
  alias: string;
  name: string;
  image: string;
}
export interface ProductEntity {
  id: string;
  categoryId: string;
  name: string;
  make: string;
  color?: string | null;
  price: number;
  details?: string;
}
export interface MakeEntity {
  id: string;
  alias: string;
  name: string;
}
export interface CarEntity {
  id: string;
  name: string;
  make: string;
  color?: string | null;
}
export interface ColorEntity {
  id: string;
  name: string;
  value: string;
}

