import { ColorEntity } from "@/app/data/db-types";

export async function getColors() {
  const res = await fetch(`${process.env.API_BASE_PATH}/color`);

  return res.json();
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

