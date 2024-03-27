'use server';

import { ActionState } from './types';
import { revalidateTag } from 'next/cache';

export const editProductCategory = async (
  state: ActionState,
  formData: FormData
): Promise<ActionState> => {
  console.log(formData);

  const id = formData.get('id');
  const name = formData.get('name');
  const alias = formData.get('alias');

  const res = await fetch(`${process.env.API_BASE_PATH}/category/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id,
      name,
      alias,
    }),
  });

  if (!res.ok) {
    return {
      success: false,
      message: 'Something went wrong!',
    };
  }

  revalidateTag('categories');

  return {
    success: true,
    message: '',
  };
};
