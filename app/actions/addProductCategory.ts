'use server';

import { ActionState } from './types';
import { revalidateTag } from 'next/cache';

export const addProductCategory = async (
  state: ActionState,
  formData: FormData
): Promise<ActionState> => {
  console.log(formData);

  const id = formData.get('id');
  const name = formData.get('name');
  const alias = formData.get('alias');

  const res = await fetch(`${process.env.API_BASE_PATH}/category`, {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      alias,
      image: '/img/something.webp',
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
