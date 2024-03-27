'use server';

import { ActionState } from './types';
import { revalidateTag } from 'next/cache';

export const deleteProductCategory = async (
  state: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const id = formData.get('id');

  const res = await fetch(`${process.env.API_BASE_PATH}/category/${id}`, {
    method: 'DELETE',
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
