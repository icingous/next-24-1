export interface Category {
  id: string;
  title: string;
  description?: string;
}

export interface Good {
  id: string;
  title: string;
  description?: string;
  categoryId: string;
}
