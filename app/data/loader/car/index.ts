import { CarEntity } from "@/db-types";

export async function getCarsByMakeId(
  id: string,
  filters?: {
    color?: string;
  },
) {
  const params = new URLSearchParams();
  params.set("make", id);
  if (filters?.color) {
    params.set("color", filters.color);
  }

  const res = await fetch(
    `${process.env.API_BASE_PATH}/car?${params.toString()}`,
  );

  return res.json();
}

export async function getCarById(id: string): Promise<CarEntity | null> {
  const res = await fetch(`${process.env.API_BASE_PATH}/car/${id}`);

  if (!res.ok) {
    return null;
  }

  return res.json();
}
